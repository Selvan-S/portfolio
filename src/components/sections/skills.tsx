import { portfolioData } from "@/lib/portfolio-data";
import { Badge } from "@/components/ui/badge";

export function Skills() {
  const { technicalSkills } = portfolioData;
  return (
    <section id="skills" className="py-24 sm:py-32 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            Technical Skillset
          </h2>
          <p className="mt-2 text-lg leading-8 text-muted-foreground">
            A snapshot of the languages, frameworks, and tools I work with.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {technicalSkills.map((category) => (
            <div key={category.category} className="rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-primary">{category.category}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
