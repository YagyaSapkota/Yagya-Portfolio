import { useTheme } from './hooks/useTheme';
import { MainLayout } from './layouts/MainLayout';
import { About } from './sections/About';
import { Certificates } from './sections/Certificates';
import { Contact } from './sections/Contact';
import { Education } from './sections/Education';
import { Hero } from './sections/Hero';
import { Projects } from './sections/Projects';
import { Skills } from './sections/Skills';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <MainLayout theme={theme} onToggleTheme={toggleTheme}>
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Certificates />
      <Contact />
    </MainLayout>
  );
}

export default App;
