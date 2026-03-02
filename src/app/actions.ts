'use server';

import { z } from 'zod';
import { refinePortfolioContentWithAI, RefinePortfolioContentInput } from '@/ai/flows/refine-portfolio-content-with-ai';

// AI Refiner Action
const refineContentSchema = z.object({
  contentType: z.enum(['projectDescription', 'professionalSummary']),
  originalContent: z.string().min(10, 'Please enter at least 10 characters.'),
});

export type AIFormState = {
  message?: string | null;
  refinedContent?: string | null;
  errors?: {
    contentType?: string[];
    originalContent?: string[];
  };
};

export async function refineContentAction(prevState: AIFormState, formData: FormData): Promise<AIFormState> {
  const validatedFields = refineContentSchema.safeParse({
    contentType: formData.get('contentType'),
    originalContent: formData.get('originalContent'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Validation failed. Please check your input.',
    };
  }

  try {
    const { refinedContent } = await refinePortfolioContentWithAI(validatedFields.data as RefinePortfolioContentInput);
    return { message: 'Content refined successfully!', refinedContent };
  } catch (error) {
    console.error(error);
    return { message: 'An error occurred while refining content. Please try again.' };
  }
}

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
