'use server';

import { z } from 'zod';

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

  try {
    // In a real app, you would send an email or save to a DB
    console.log('New message received:', validatedFields.data);
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
