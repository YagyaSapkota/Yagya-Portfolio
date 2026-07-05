import type { HTMLAttributes } from 'react';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {}

export function Badge({ className = '', children, ...props }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-lg border border-border bg-bg-secondary px-3 py-1 text-xs font-medium text-text-secondary sm:text-sm ${className}`.trim()}
      {...props}
    >
      {children}
    </span>
  );
}
