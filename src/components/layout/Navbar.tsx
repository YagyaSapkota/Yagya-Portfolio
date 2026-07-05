import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from '../common/ThemeToggle';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { NAV_LINKS, SITE_NAME } from '../../constants';
import type { Theme } from '../../hooks/useTheme';

export interface NavbarProps {
  theme: Theme;
  onToggleTheme: () => void;
}

export function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-bg-primary/80 backdrop-blur-xl">
      <Container>
        <nav
          className="flex h-16 items-center justify-between sm:h-20"
          aria-label="Main navigation"
        >
          <a
            href="#hero"
            className="text-lg font-semibold tracking-tight text-text-primary transition-colors hover:text-accent sm:text-xl"
          >
            {SITE_NAME}
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            <ul className="flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-text-secondary transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3">
              <ThemeToggle theme={theme} onToggle={onToggleTheme} />
              {/* TODO: Add Resume PDF */}
              <Button variant="secondary" className="px-4 py-2 text-sm">
                Resume
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            <button
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-glass text-text-primary"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </Container>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-border/60 bg-bg-primary/95 backdrop-blur-xl lg:hidden"
          >
            <Container className="py-4">
              <ul className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={closeMenu}
                      className="block rounded-xl px-4 py-3 text-sm font-medium text-text-secondary transition-colors hover:bg-glass hover:text-accent"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-4 px-4">
                {/* TODO: Add Resume PDF */}
                <Button variant="secondary" className="w-full">
                  Resume
                </Button>
              </div>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
