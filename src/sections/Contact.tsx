import { MapPin, Send } from 'lucide-react';
import type { FormEvent } from 'react';
import { AnimatedSection } from '../components/common/AnimatedSection';
import { SocialLinks } from '../components/common/SocialLinks';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Container } from '../components/ui/Container';
import { SectionTitle } from '../components/ui/SectionTitle';
import { OWNER_LOCATION } from '../constants';
import { SOCIAL_LINKS } from '../data/social';

export function Contact() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <AnimatedSection id="contact" className="bg-bg-secondary/30 py-20 sm:py-28">
      <Container>
        <SectionTitle
          title="Contact"
          subtitle="Let's connect — I'm open to opportunities and collaborations"
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Card>
            <h3 className="text-lg font-semibold text-text-primary">Get in Touch</h3>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary sm:text-base">
              Whether you&apos;re a recruiter, university representative, or fellow
              developer, feel free to reach out. I&apos;d love to hear from you.
            </p>

            <div className="mt-6 space-y-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
                  Email
                </p>
                {/* TODO: Add email address */}
                <p className="mt-1 text-sm text-text-primary">your.email@example.com</p>
              </div>
              <div className="flex items-center gap-2 text-text-primary">
                <MapPin className="text-accent" size={18} aria-hidden="true" />
                <span className="text-sm">{OWNER_LOCATION}</span>
              </div>
            </div>

            <div className="mt-8">
              <SocialLinks links={SOCIAL_LINKS} />
            </div>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold text-text-primary">Send a Message</h3>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-text-primary">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-xl border border-border bg-bg-primary px-4 py-3 text-sm text-text-primary outline-none transition-colors focus:border-accent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-text-primary">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-xl border border-border bg-bg-primary px-4 py-3 text-sm text-text-primary outline-none transition-colors focus:border-accent"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-text-primary">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full resize-none rounded-xl border border-border bg-bg-primary px-4 py-3 text-sm text-text-primary outline-none transition-colors focus:border-accent"
                  placeholder="Your message..."
                />
              </div>
              <Button type="submit" variant="primary" className="w-full gap-2 sm:w-auto">
                <Send size={16} aria-hidden="true" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </Container>
    </AnimatedSection>
  );
}
