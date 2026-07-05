import type { HTMLAttributes } from 'react';

export interface SectionTitleProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
}

export function SectionTitle({
  title,
  subtitle,
  className = '',
  ...props
}: SectionTitleProps) {
  return (
    <div className={`text-center ${className}`.trim()} {...props}>
      <h2 className="text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-base text-text-secondary sm:mt-4 sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
