import type { ReactNode } from 'react';
import { Footer } from '../components/layout/Footer';
import { Navbar } from '../components/layout/Navbar';
import type { Theme } from '../hooks/useTheme';

export interface MainLayoutProps {
  children: ReactNode;
  theme: Theme;
  onToggleTheme: () => void;
}

export function MainLayout({ children, theme, onToggleTheme }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <Navbar theme={theme} onToggleTheme={onToggleTheme} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
