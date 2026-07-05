import type { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

const baseStyles =
  'inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary disabled:pointer-events-none disabled:opacity-50 sm:text-base';

const variantStyles: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'bg-accent text-white hover:bg-accent-soft hover:shadow-lg hover:shadow-accent/20 active:scale-[0.98]',
  secondary:
    'border border-border bg-transparent text-text-primary hover:border-accent/50 hover:bg-accent/10 active:scale-[0.98]',
};

export function Button({
  variant = 'primary',
  className = '',
  children,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}
