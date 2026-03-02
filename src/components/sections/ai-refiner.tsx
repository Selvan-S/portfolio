"use client";

import { useFormState, useFormStatus } from "react-dom";
import { refineContentAction, AIFormState } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { Sparkles, Wand2 } from "lucide-react";

const initialState: AIFormState = {
  message: null,
  refinedContent: null,
  errors: {},
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      <Wand2 className="mr-2 h-4 w-4" />
      {pending ? "Refining..." : "Refine with AI"}
    </Button>
  );
}

export function AiRefiner() {
  const [state, formAction] = useFormState(refineContentAction, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.message) {
      if (state.errors || !state.refinedContent) {
        toast({
          variant: "destructive",
          title: "Error",
          description: state.message,
        });
      } else {
        toast({
          title: "Success",
          description: state.message,
        });
      }
    }
  }, [state, toast]);

  const handleFormReset = () => {
    formRef.current?.reset();
    // This is a bit of a hack to reset the form state for useFormState
    (formRef.current as any)?.requestSubmit();
  }

  return (
    <section id="ai-tool" className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline flex items-center justify-center gap-2">
            <Sparkles className="h-8 w-8 text-primary" />
            AI Content Assistant
          </h2>
          <p className="mt-2 text-lg leading-8 text-muted-foreground">
            An internal tool to generate or enhance concise and impactful descriptions for projects or professional summary.
          </p>
        </div>
        <Card className="mx-auto mt-16 max-w-3xl">
          <form ref={formRef} action={formAction}>
            <CardHeader>
              <CardTitle>AI Content Refiner</CardTitle>
              <CardDescription>Enter your text and let AI make it more concise and impactful.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid w-full gap-1.5">
                <Label htmlFor="originalContent">Original Content</Label>
                <Textarea
                  id="originalContent"
                  name="originalContent"
                  placeholder="Paste your project description or professional summary here."
                  rows={6}
                  required
                  aria-invalid={!!state?.errors?.originalContent}
                  aria-describedby="originalContent-error"
                />
                {state?.errors?.originalContent && <p id="originalContent-error" className="text-sm text-destructive">{state.errors.originalContent[0]}</p>}
              </div>
              <div className="grid w-full max-w-sm gap-1.5">
                 <Label htmlFor="contentType">Content Type</Label>
                 <Select name="contentType" defaultValue="projectDescription">
                    <SelectTrigger id="contentType">
                        <SelectValue placeholder="Select content type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="projectDescription">Project Description</SelectItem>
                        <SelectItem value="professionalSummary">Professional Summary</SelectItem>
                    </SelectContent>
                 </Select>
                 {state?.errors?.contentType && <p className="text-sm text-destructive">{state.errors.contentType[0]}</p>}
              </div>
              {state?.refinedContent && (
                 <div className="grid w-full gap-1.5">
                    <Label htmlFor="refinedContent">Refined Content</Label>
                    <Textarea
                      id="refinedContent"
                      name="refinedContent"
                      value={state.refinedContent}
                      readOnly
                      rows={6}
                      className="bg-muted focus-visible:ring-primary"
                    />
                 </div>
              )}
            </CardContent>
            <CardFooter>
              <SubmitButton />
            </CardFooter>
          </form>
        </Card>
      </div>
    </section>
  );
}
