import type { FC } from 'react';
import HeroSection from '../sections/HeroSection';
import AboutSection from '../sections/AboutSection';
import FormationSection from '../sections/FormationSection';
import CompetencesSection from '../sections/CompetencesSection';
import TimelineSection from '../sections/TimelineSection';
import ProjetsSection from '../sections/ProjetsSection';
import ReflexifSection from '../sections/ReflexifSection';
import ContactSection from '../sections/ContactSection';

const Home: FC = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <FormationSection />
      <CompetencesSection />
      <TimelineSection />
      <ProjetsSection />
      <ReflexifSection />
<ContactSection />
    </main>
  );
};

export default Home;
