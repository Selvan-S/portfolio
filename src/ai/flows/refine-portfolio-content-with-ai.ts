'use server';
/**
 * @fileOverview An AI agent to refine and generate concise, impactful descriptions for portfolio content.
 *
 * - refinePortfolioContentWithAI - A function that refines given portfolio content.
 * - RefinePortfolioContentInput - The input type for the refinePortfolioContentWithAI function.
 * - RefinePortfolioContentOutput - The return type for the refinePortfolioContentWithAI function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RefinePortfolioContentInputSchema = z.object({
  contentType: z
    .enum(['projectDescription', 'professionalSummary'])
    .describe('The type of content being refined (e.g., projectDescription, professionalSummary).'),
  originalContent: z.string().describe('The original text content to be refined.'),
});
export type RefinePortfolioContentInput = z.infer<typeof RefinePortfolioContentInputSchema>;

const RefinePortfolioContentOutputSchema = z.object({
  refinedContent: z.string().describe('The refined, concise, and impactful version of the original content.'),
});
export type RefinePortfolioContentOutput = z.infer<typeof RefinePortfolioContentOutputSchema>;

export async function refinePortfolioContentWithAI(
  input: RefinePortfolioContentInput
): Promise<RefinePortfolioContentOutput> {
  return refinePortfolioContentFlow(input);
}

const refinePortfolioContentPrompt = ai.definePrompt({
  name: 'refinePortfolioContentPrompt',
  input: {schema: RefinePortfolioContentInputSchema},
  output: {schema: RefinePortfolioContentOutputSchema},
  prompt: `You are a professional copywriter and editor specializing in crafting concise and impactful descriptions for developer portfolios.
Your goal is to take the provided '{{contentType}}' and refine it to be as compelling and to the point as possible, highlighting key achievements and skills for a technical audience. Ensure the tone is professional and confident.

Original Content:
"""{{{originalContent}}}"""

Refine this '{{contentType}}' for a professional portfolio. Your output should only contain the refined content.`,
});

const refinePortfolioContentFlow = ai.defineFlow(
  {
    name: 'refinePortfolioContentFlow',
    inputSchema: RefinePortfolioContentInputSchema,
    outputSchema: RefinePortfolioContentOutputSchema,
  },
  async input => {
    const {output} = await refinePortfolioContentPrompt(input);
    return output!;
  }
);
