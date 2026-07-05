import type { HTMLAttributes } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export function Card({
  hover = true,
  className = '',
  children,
  ...props
}: CardProps) {
  const hoverStyles = hover
    ? 'transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5'
    : '';

  return (
    <div
      className={`rounded-2xl border border-border bg-glass p-6 backdrop-blur-xl ${hoverStyles} ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
}
