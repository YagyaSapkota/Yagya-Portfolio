import { Award, School } from 'lucide-react';
import { AnimatedSection } from '../components/common/AnimatedSection';
import { Card } from '../components/ui/Card';
import { Container } from '../components/ui/Container';
import { SectionTitle } from '../components/ui/SectionTitle';
import { EDUCATION_ENTRIES, GPA_RECORDS } from '../data/education';

export function Education() {
  return (
    <AnimatedSection id="education" className="py-20 sm:py-28">
      <Container>
        <SectionTitle
          title="Education"
          subtitle="My academic background and achievements"
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-3">
            {EDUCATION_ENTRIES.map((entry) => (
              <Card key={entry.school}>
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-bg-secondary">
                    <School className="text-accent" size={22} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                      {entry.period}
                    </p>
                    <h3 className="mt-1 text-base font-semibold text-text-primary sm:text-lg">
                      {entry.school}
                    </h3>
                    <p className="mt-1 text-sm text-text-secondary">{entry.level}</p>
                    {entry.achievement ? (
                      <p className="mt-2 text-sm font-medium text-text-primary">
                        {entry.achievement}
                      </p>
                    ) : null}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="lg:col-span-2">
            <Card>
              <div className="mb-6 flex items-center gap-3">
                <Award className="text-accent" size={24} aria-hidden="true" />
                <h3 className="text-lg font-semibold text-text-primary">GPA Achievements</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {GPA_RECORDS.map((record) => (
                  <div
                    key={record.exam}
                    className="rounded-xl border border-border bg-bg-secondary/50 p-4 text-center"
                  >
                    <p className="text-xs font-medium uppercase tracking-wider text-text-secondary">
                      {record.exam}
                    </p>
                    <p className="mt-2 text-2xl font-bold text-accent">{record.gpa}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
