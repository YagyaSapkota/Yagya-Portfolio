import { GraduationCap, Target, BookOpen } from 'lucide-react';
import { AnimatedSection } from '../components/common/AnimatedSection';
import { Card } from '../components/ui/Card';
import { Container } from '../components/ui/Container';
import { SectionTitle } from '../components/ui/SectionTitle';
import { OWNER_NAME } from '../constants';

const timelineItems = [
  {
    year: '2026',
    title: 'Portfolio & Continuous Learning',
    description: 'Building this portfolio and deepening skills in modern web development.',
  },
  {
    year: '2025',
    title: 'Completed +2 (NEB)',
    description: 'Finished secondary education with strong academic performance.',
  },
  {
    year: 'Ongoing',
    title: 'Programming Journey',
    description: 'Learning C, C++, Java, Python, and building practical projects.',
  },
];

export function About() {
  return (
    <AnimatedSection id="about" className="py-20 sm:py-28">
      <Container>
        <SectionTitle
          title="About Me"
          subtitle="A disciplined learner with a passion for technology and innovation"
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-text-secondary sm:text-lg">
              I am <span className="font-medium text-text-primary">{OWNER_NAME}</span>,
              an aspiring IT student dedicated to building a strong foundation in
              software development and emerging technologies. I believe in consistent
              learning, practical application, and delivering quality work.
            </p>
            <p className="text-base leading-relaxed text-text-secondary sm:text-lg">
              My academic journey reflects discipline and commitment, and I am actively
              preparing myself for a future in Artificial Intelligence, Data Science,
              Cloud Computing, and Cybersecurity.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <Card>
                <Target className="text-accent" size={24} aria-hidden="true" />
                <h3 className="mt-3 text-base font-semibold text-text-primary">
                  Career Goals
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  Pursue higher education in IT and specialize in AI, Data Science,
                  and Cloud technologies.
                </p>
              </Card>
              <Card>
                <BookOpen className="text-accent" size={24} aria-hidden="true" />
                <h3 className="mt-3 text-base font-semibold text-text-primary">
                  Learning Mindset
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  I learn by building — turning concepts into projects and continuously
                  improving through practice.
                </p>
              </Card>
            </div>
          </div>

          <Card className="h-fit">
            <div className="mb-6 flex items-center gap-3">
              <GraduationCap className="text-accent" size={24} aria-hidden="true" />
              <h3 className="text-lg font-semibold text-text-primary">My Journey</h3>
            </div>
            <ol className="space-y-6">
              {timelineItems.map((item, index) => (
                <li key={item.title} className="relative pl-6">
                  {index < timelineItems.length - 1 ? (
                    <span
                      className="absolute left-[7px] top-6 h-full w-px bg-border"
                      aria-hidden="true"
                    />
                  ) : null}
                  <span
                    className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-accent bg-bg-primary"
                    aria-hidden="true"
                  />
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                    {item.year}
                  </p>
                  <p className="mt-1 font-medium text-text-primary">{item.title}</p>
                  <p className="mt-1 text-sm text-text-secondary">{item.description}</p>
                </li>
              ))}
            </ol>
          </Card>
        </div>
      </Container>
    </AnimatedSection>
  );
}
