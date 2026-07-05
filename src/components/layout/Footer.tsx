import { Container } from '../ui/Container';
import { SocialLinks } from '../common/SocialLinks';
import { ScrollToTop } from '../common/ScrollToTop';
import { FOOTER_LINKS, OWNER_NAME, SITE_NAME } from '../../constants';
import { SOCIAL_LINKS } from '../../data/social';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg-secondary/50 py-12 sm:py-16">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-lg font-semibold text-text-primary">{SITE_NAME}</p>
            <p className="mt-2 text-sm text-text-secondary">
              Built with passion by {OWNER_NAME}
            </p>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-primary">
              Quick Links
            </p>
            <ul className="flex flex-col gap-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-text-secondary transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-start gap-4 sm:items-end">
            <SocialLinks links={SOCIAL_LINKS} size="sm" />
            <ScrollToTop />
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-sm text-text-secondary sm:text-left">
          © {currentYear} {OWNER_NAME}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
