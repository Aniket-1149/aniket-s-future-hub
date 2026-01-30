import { useEffect } from 'react';
import ParticleBackground from '@/components/ParticleBackground';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import SkillsSection from '@/components/SkillsSection';
import AchievementsSection from '@/components/AchievementsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';

const Index = () => {
  useEffect(() => {
    document.title = 'Aniket Kumar Singh | Full Stack Developer';
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Portfolio of Aniket Kumar Singh - Full Stack Developer specializing in MERN Stack, AI & ML. Winner of Smart India Hackathon 2025.');
    }
  }, []);

  return (
    <>
      <ParticleBackground />
      <ScrollProgress />
      <Navbar />
      
      <main>
        <HeroSection />
        <SkillsSection />
        <AchievementsSection />
        <ExperienceSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </main>
      
      <Footer />
    </>
  );
};

export default Index;
