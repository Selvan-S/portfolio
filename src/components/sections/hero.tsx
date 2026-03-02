import { portfolioData } from "@/lib/portfolio-data";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export function Hero() {
  const { name, title, professionalSummary, contact, resumeUrl } = portfolioData;

  return (
    <section id="hero" className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl font-headline">
            {name}
          </h1>
          <p className="mt-4 text-xl text-primary font-medium">
            {title}
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            {professionalSummary}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild>
              <Link href="#contact">Contact Me</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href={resumeUrl} target="_blank" rel="noopener noreferrer">My Resume</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="#projects">My Work</Link>
            </Button>
          </div>
          <div className="mt-12 flex justify-center items-center gap-x-6 gap-y-4 flex-wrap">
            <Button variant="link" asChild className="text-muted-foreground hover:text-primary">
              <a href={`mailto:${contact.email}`}>
                <Mail className="mr-2 h-4 w-4" />
                {contact.email}
              </a>
            </Button>
            <Button variant="link" asChild className="text-muted-foreground hover:text-primary">
              <a href={contact.socials.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button variant="link" asChild className="text-muted-foreground hover:text-primary">
              <a href={contact.socials.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
