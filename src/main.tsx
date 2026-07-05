import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

const storedTheme = localStorage.getItem('yagya-portfolio-theme');
document.documentElement.classList.add(storedTheme === 'light' ? 'light' : 'dark');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
