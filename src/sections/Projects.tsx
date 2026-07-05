import { Code2, ExternalLink, FolderKanban } from 'lucide-react';
import { AnimatedSection } from '../components/common/AnimatedSection';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Container } from '../components/ui/Container';
import { SectionTitle } from '../components/ui/SectionTitle';
import { PROJECTS } from '../data/projects';

export function Projects() {
  return (
    <AnimatedSection id="projects" className="bg-bg-secondary/30 py-20 sm:py-28">
      <Container>
        <SectionTitle
          title="Projects"
          subtitle="Practical work that demonstrates my development skills"
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {PROJECTS.map((project) => (
            <Card key={project.title} className="flex flex-col">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-bg-secondary">
                  <FolderKanban className="text-accent" size={22} aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary sm:text-xl">
                  {project.title}
                </h3>
              </div>

              <p className="flex-1 text-sm leading-relaxed text-text-secondary sm:text-base">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {/* TODO: Add GitHub profile */}
                <a href={project.githubUrl} aria-label={`${project.title} GitHub repository`}>
                  <Button variant="secondary" className="gap-2 px-4 py-2 text-sm">
                    <Code2 size={16} aria-hidden="true" />
                    GitHub
                  </Button>
                </a>
                <a href={project.liveUrl} aria-label={`${project.title} live demo`}>
                  <Button variant="primary" className="gap-2 px-4 py-2 text-sm">
                    <ExternalLink size={16} aria-hidden="true" />
                    Live Demo
                  </Button>
                </a>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </AnimatedSection>
  );
}
