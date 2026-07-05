import { motion } from 'framer-motion';
import { ChevronDown, User } from 'lucide-react';
import { AnimatedSection } from '../components/common/AnimatedSection';
import { SocialLinks } from '../components/common/SocialLinks';
import { Button } from '../components/ui/Button';
import { Container } from '../components/ui/Container';
import {
  OWNER_NAME,
  OWNER_ROLE,
  OWNER_TAGLINE,
  TYPING_PHRASES,
} from '../constants';
import { SOCIAL_LINKS } from '../data/social';
import { useTypingEffect } from '../hooks/useTypingEffect';

export function Hero() {
  const typedText = useTypingEffect(TYPING_PHRASES);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatedSection
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <motion.div
          className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-accent-soft/15 blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-sm font-medium uppercase tracking-widest text-accent sm:text-base"
            >
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-3 text-4xl font-bold tracking-tight text-text-primary sm:text-5xl lg:text-6xl"
            >
              {OWNER_NAME}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-lg text-text-secondary sm:text-xl"
            >
              {OWNER_ROLE}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-4 flex min-h-[2rem] items-center text-base text-accent-light sm:text-lg"
              aria-live="polite"
            >
              <span className="font-medium">{typedText}</span>
              <span className="ml-1 inline-block h-5 w-0.5 animate-pulse bg-accent" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg"
            >
              {OWNER_TAGLINE}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Button variant="primary" onClick={scrollToProjects}>
                View Projects
              </Button>
              <Button variant="secondary" onClick={scrollToContact}>
                Contact Me
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8"
            >
              <SocialLinks links={SOCIAL_LINKS} />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-1 flex justify-center lg:order-2"
          >
            {/* TODO: Replace with professional photo */}
            <div className="relative flex h-64 w-64 items-center justify-center rounded-3xl border border-border bg-glass backdrop-blur-xl sm:h-80 sm:w-80">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/20 to-transparent" />
              <User
                size={96}
                className="relative text-accent/60"
                aria-hidden="true"
              />
              <span className="sr-only">Professional photo placeholder</span>
            </div>
          </motion.div>
        </div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 flex justify-center text-text-secondary transition-colors hover:text-accent"
          aria-label="Scroll to about section"
        >
          <ChevronDown size={28} className="animate-pulse" aria-hidden="true" />
        </motion.a>
      </Container>
    </AnimatedSection>
  );
}
