"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useRef } from "react";
import { submitContactForm, ContactFormState } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const initialState: ContactFormState = null;

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <Button type="submit" disabled={pending} className="w-full">
            <Send className="mr-2 h-4 w-4" />
            {pending ? "Sending..." : "Send Message"}
        </Button>
    )
}

export function Contact() {
    const [state, formAction] = useFormState(submitContactForm, initialState);
    const formRef = useRef<HTMLFormElement>(null);
    const { toast } = useToast();
  
    useEffect(() => {
      if (state?.status === 'success') {
        toast({ title: 'Message Sent!', description: state.message });
        formRef.current?.reset();
      } else if (state?.status === 'error' && state.message) {
        toast({ variant: 'destructive', title: 'Error', description: state.message });
      }
    }, [state, toast]);

  return (
    <section id="contact" className="py-24 sm:py-32">
        <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">Get In Touch</h2>
                <p className="mt-2 text-lg leading-8 text-muted-foreground">
                    Have a question, an opportunity, or just want to say hi? Drop me a line.
                </p>
            </div>
            <Card className="mx-auto mt-16 max-w-xl">
                <CardHeader>
                    <CardTitle>Contact Form</CardTitle>
                    <CardDescription>I'll get back to you as soon as possible.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form ref={formRef} action={formAction} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" name="name" placeholder="Your Name" required aria-invalid={!!state?.errors?.name} aria-describedby="name-error" />
                            {state?.errors?.name && <p id="name-error" className="text-sm text-destructive">{state.errors.name[0]}</p>}
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" name="email" type="email" placeholder="Your Email" required aria-invalid={!!state?.errors?.email} aria-describedby="email-error" />
                             {state?.errors?.email && <p id="email-error" className="text-sm text-destructive">{state.errors.email[0]}</p>}
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="message">Message</Label>
                            <Textarea id="message" name="message" placeholder="Your Message" required rows={5} aria-invalid={!!state?.errors?.message} aria-describedby="message-error" />
                             {state?.errors?.message && <p id="message-error" className="text-sm text-destructive">{state.errors.message[0]}</p>}
                        </div>
                        <SubmitButton />
                    </form>
                </CardContent>
            </Card>
        </div>
    </section>
  );
}
