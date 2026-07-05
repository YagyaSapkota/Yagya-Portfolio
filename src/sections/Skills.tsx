import { Code2 } from 'lucide-react';
import { AnimatedSection } from '../components/common/AnimatedSection';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { Container } from '../components/ui/Container';
import { SectionTitle } from '../components/ui/SectionTitle';
import { SKILL_CATEGORIES } from '../data/skills';

export function Skills() {
  return (
    <AnimatedSection id="skills" className="bg-bg-secondary/30 py-20 sm:py-28">
      <Container>
        <SectionTitle
          title="Skills"
          subtitle="Technologies I work with and areas I'm actively exploring"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_CATEGORIES.map((category) => (
            <Card key={category.title}>
              <div className="mb-4 flex items-center gap-3">
                <Code2 className="text-accent" size={22} aria-hidden="true" />
                <h3 className="text-base font-semibold text-text-primary sm:text-lg">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </AnimatedSection>
  );
}
