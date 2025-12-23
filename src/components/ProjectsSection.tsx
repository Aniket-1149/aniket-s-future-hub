import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: 'IRIS 1.0 & IRIS 2.0',
    description: 'National Award-winning smart AI-powered visual assistance system for visually impaired users.',
    techStack: ['Python', 'ML', 'MERN Stack', 'APIs'],
    featured: true,
  },
  {
    title: 'Doctor Appointment Website',
    description: 'Full stack MERN application with dedicated admin panel for managing appointments.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express'],
  },
  {
    title: 'Real-Time Chat Application',
    description: 'Real-time messaging platform with WebSocket integration for instant communication.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Socket.io'],
  },
  {
    title: 'College Website Router',
    description: 'Single platform consolidating all colleges in the group with modern frontend.',
    techStack: ['React', 'Tailwind CSS', 'JavaScript'],
  },
  {
    title: 'Event Management System',
    description: 'Full stack solution for organizing and managing events with user authentication.',
    techStack: ['MERN Stack', 'REST APIs'],
  },
  {
    title: 'Mock E-Commerce Website',
    description: 'Complete e-commerce solution with cart, checkout, and payment integration.',
    techStack: ['MERN Stack', 'Stripe'],
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className={`glass-card rounded-2xl overflow-hidden group neon-border ${
        project.featured ? 'md:col-span-2 lg:col-span-2' : ''
      }`}
    >
      <div className="p-6 h-full flex flex-col">
        {project.featured && (
          <span className="inline-flex items-center gap-1 text-xs font-medium text-yellow-400 bg-yellow-400/10 px-2 py-1 rounded-full w-fit mb-4">
            🏆 Award Winner
          </span>
        )}
        
        <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-4 flex-grow">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          {project.liveUrl && (
            <Button size="sm" variant="outline" className="gap-2">
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </Button>
          )}
          {project.githubUrl && (
            <Button size="sm" variant="ghost" className="gap-2">
              <Github className="w-4 h-4" />
              GitHub
            </Button>
          )}
          {!project.liveUrl && !project.githubUrl && (
            <span className="text-xs text-muted-foreground">Links coming soon</span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ComingSoonCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="glass-card rounded-2xl p-6 flex flex-col items-center justify-center text-center min-h-[200px] border-dashed border-2 border-border"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="mb-4"
      >
        <Loader2 className="w-8 h-8 text-primary" />
      </motion.div>
      <h3 className="font-display text-lg font-semibold mb-2 text-muted-foreground">
        More Projects Coming Soon
      </h3>
      <p className="text-sm text-muted-foreground">
        Always building something new...
      </p>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects showcasing my skills in full-stack development and problem-solving
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
          <ComingSoonCard />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
