import { Briefcase, Code2, Mail } from 'lucide-react';
import type { SocialLink } from '../../types';

export interface SocialLinksProps {
  links: SocialLink[];
  size?: 'sm' | 'md';
}

const iconMap = {
  github: Code2,
  linkedin: Briefcase,
  mail: Mail,
  twitter: Mail,
};

const sizeStyles = {
  sm: 'h-9 w-9',
  md: 'h-11 w-11',
};

const iconSizeStyles = {
  sm: 18,
  md: 20,
};

export function SocialLinks({ links, size = 'md' }: SocialLinksProps) {
  return (
    <div className="flex items-center gap-3">
      {links.map((link) => {
        const Icon = iconMap[link.icon];

        return (
          <a
            key={link.name}
            href={link.href}
            aria-label={link.name}
            className={`inline-flex items-center justify-center rounded-xl border border-border bg-glass text-text-secondary backdrop-blur-xl transition-all duration-200 hover:border-accent/40 hover:text-accent ${sizeStyles[size]}`}
          >
            <Icon size={iconSizeStyles[size]} aria-hidden="true" />
          </a>
        );
      })}
    </div>
  );
}
