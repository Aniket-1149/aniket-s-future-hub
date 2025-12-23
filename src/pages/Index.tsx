import { Helmet } from 'react-helmet-async';
import ParticleBackground from '@/components/ParticleBackground';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import SkillsSection from '@/components/SkillsSection';
import AchievementsSection from '@/components/AchievementsSection';
import ProjectsSection from '@/components/ProjectsSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Aniket Kumar Singh | Full Stack Developer</title>
        <meta
          name="description"
          content="Portfolio of Aniket Kumar Singh - Full Stack Developer specializing in MERN Stack, AI & ML. Winner of Smart India Hackathon 2025."
        />
        <meta
          name="keywords"
          content="Aniket Kumar Singh, Full Stack Developer, MERN Stack, React, Node.js, MongoDB, Web Developer, AI, Machine Learning"
        />
        <link rel="canonical" href="https://aniketkumarsingh.dev" />
      </Helmet>

      <ParticleBackground />
      <ScrollProgress />
      <Navbar />
      
      <main>
        <HeroSection />
        <SkillsSection />
        <AchievementsSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </main>
      
      <Footer />
    </>
  );
};

export default Index;
