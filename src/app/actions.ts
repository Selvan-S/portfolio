'use server';

import { z } from 'zod';
import { Resend } from 'resend';
import { portfolioData } from '@/lib/portfolio-data';

const resend = new Resend(process.env.RESEND_API_KEY);

// Contact Form Action
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

export type ContactFormState = {
  message: string;
  status: 'success' | 'error';
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
} | null;

export async function submitContactForm(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      status: 'error',
      message: 'Please correct the errors below.',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, message } = validatedFields.data;

  try {
    const { data, error } = await resend.emails.send({
        from: 'Portfolio Contact Form <onboarding@resend.dev>',
        to: portfolioData.contact.email,
        subject: `New message from ${name}`,
        reply_to: email,
        html: `<p>You have received a new message from your portfolio contact form.</p>
               <p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Message:</strong></p>
               <p>${message}</p>`,
      });
  
      if (error) {
        console.error('Resend error:', error);
        return {
          status: 'error',
          message: 'Something went wrong while sending the email. Please try again.',
        };
      }

    console.log('New message sent via Resend:', validatedFields.data);
    return {
      status: 'success',
      message: 'Thank you for your message! I will get back to you soon.',
    };
  } catch (e) {
    console.error(e);
    return {
      status: 'error',
      message: 'Something went wrong. Please try again.',
    };
  }
}
