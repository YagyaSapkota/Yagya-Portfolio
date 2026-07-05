import { ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

export function ScrollToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-glass text-text-secondary backdrop-blur-xl transition-all duration-200 hover:border-accent/40 hover:text-accent"
    >
      <ArrowUp size={18} aria-hidden="true" />
    </motion.button>
  );
}
