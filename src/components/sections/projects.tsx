import { portfolioData } from "@/lib/portfolio-data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";

export function Projects() {
  const { personalProjects } = portfolioData;

  return (
    <section id="projects" className="py-24 sm:py-32 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            Personal Projects
          </h2>
          <p className="mt-2 text-lg leading-8 text-muted-foreground">
            A selection of projects I've built.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2">
          {personalProjects.map((project) => (
            <Card key={project.id} className="flex flex-col">
              <CardHeader>
                <div className="aspect-[3/2] w-full overflow-hidden rounded-md mb-4 border">
                  <Image
                    src={project.image.imageUrl}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    data-ai-hint={project.image.imageHint}
                  />
                </div>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="outline">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
              <div className="flex gap-2 p-6 pt-0">
                <Button variant="outline" asChild>
                  <Link href={project.githubLink} target="_blank">
                    <Github className="mr-2" /> GitHub
                  </Link>
                </Button>
                {project.liveDemoLink && (
                  <Button asChild>
                    <Link href={project.liveDemoLink} target="_blank">
                      <ExternalLink className="mr-2" /> Live Demo
                    </Link>
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
