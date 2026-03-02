import { portfolioData } from "@/lib/portfolio-data";
import { CheckCircle2 } from "lucide-react";

export function Experience() {
  const { professionalExperience } = portfolioData;

  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            Professional Experience
          </h2>
          <p className="mt-2 text-lg leading-8 text-muted-foreground">
            My journey and contributions in the tech industry.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-3xl">
          <div className="relative border-l border-primary/20 pl-6 space-y-12">
            {professionalExperience.map((exp, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[31px] top-1.5 h-4 w-4 rounded-full bg-primary" />
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                    <h3 className="text-xl font-semibold text-foreground">{exp.company}</h3>
                    <p className="text-sm text-muted-foreground">{exp.location}</p>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                    <p className="font-medium text-primary">{exp.role}</p>
                    <p className="text-sm text-muted-foreground">{exp.duration}</p>
                </div>
                
                <ul className="mt-4 space-y-3 text-muted-foreground">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start">
                      <CheckCircle2 className="mr-3 mt-1 h-4 w-4 flex-shrink-0 text-accent" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
