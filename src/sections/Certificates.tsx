import { Award } from 'lucide-react';
import { AnimatedSection } from '../components/common/AnimatedSection';
import { Card } from '../components/ui/Card';
import { Container } from '../components/ui/Container';
import { SectionTitle } from '../components/ui/SectionTitle';
import { CERTIFICATES } from '../data/certificates';

export function Certificates() {
  return (
    <AnimatedSection id="certificates" className="py-20 sm:py-28">
      <Container>
        <SectionTitle
          title="Certificates"
          subtitle="Professional certifications and achievements"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATES.map((certificate) => (
            <Card key={certificate.title}>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-bg-secondary">
                <Award className="text-accent" size={22} aria-hidden="true" />
              </div>
              <h3 className="text-base font-semibold text-text-primary">
                {certificate.title}
              </h3>
              <p className="mt-2 text-sm text-text-secondary">{certificate.issuer}</p>
              <p className="mt-3 text-xs font-medium uppercase tracking-wider text-accent">
                {certificate.year}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </AnimatedSection>
  );
}
