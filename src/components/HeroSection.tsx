import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail, FolderOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const handleResumeClick = () => {
    // Open resume in new tab for preview
    window.open('/resume active now.pdf', '_blank');
    
    //  Trigger download
    // const link = document.createElement('a');
    // link.href = '/resume active now.pdf';
    // link.download = 'Aniket_Kumar_Singh_Resume.pdf';
    // link.click();
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-primary font-medium mb-4 text-lg"
          >
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            <span className="text-gradient">Aniket Kumar</span>
            <br />
            <span className="text-foreground">Singh</span>
          </motion.h1>

          {/* Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <h2 className="text-xl md:text-2xl text-muted-foreground font-display">
              Full Stack Developer{' '}
              <span className="text-primary">|</span> MERN Stack{' '}
              <span className="text-primary">|</span> AI & ML Enthusiast
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            I'm a passionate Full Stack Developer specializing in MERN Stack, 
            building scalable web applications and intelligent solutions. I enjoy 
            turning complex problems into simple, beautiful, and performant products.
          </motion.p>

          {/* Education */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm text-muted-foreground mb-10"
          >
            📍 Student at LNCT, Bhopal
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="group glow-effect bg-primary text-primary-foreground hover:bg-primary/90 px-8"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <FolderOpen className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary/10 px-8"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="text-muted-foreground hover:text-primary hover:bg-primary/10 px-8"
              onClick={handleResumeClick}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
