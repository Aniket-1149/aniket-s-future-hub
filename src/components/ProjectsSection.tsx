import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ExternalLink, Github, Loader2, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useEmblaCarousel from 'embla-carousel-react';

interface Project {
  title: string;
  description: string;
  detailedDescription: string;
  techStack: string[];
  images: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: 'IRIS 1.0 & IRIS 2.0',
    description: 'National Award-winning smart AI-powered visual assistance system for visually impaired users.',
    detailedDescription: 'IRIS is a revolutionary AI-powered visual assistance system designed specifically for visually impaired users. The project won national recognition for its innovative approach to accessibility technology. IRIS 1.0 introduced basic object detection and scene description capabilities, while IRIS 2.0 (currently under patent process) features advanced machine learning algorithms for real-time navigation assistance, text-to-speech conversion, and intelligent scene analysis. The system integrates computer vision, natural language processing, and IoT devices to create a comprehensive assistance platform.',
    techStack: ['Python', 'ML', 'MERN Stack', 'APIs'],
    images: [
      '/placeholder-project1-1.svg',
      '/placeholder-project1-2.svg', 
      '/placeholder-project1-3.svg',
      '/Recording 2026-01-29 140650.mp4'
    ],
    githubUrl: 'https://github.com/Aniket-1149/Project-IRIS',
    featured: true,
  },
  {
    title: 'Doctor Appointment Website',
    description: 'Full stack MERN application with dedicated admin panel for managing appointments.',
    detailedDescription: 'A comprehensive healthcare management platform built with the MERN stack, featuring separate interfaces for patients, doctors, and administrators. The system includes appointment scheduling, patient records management, doctor availability tracking, and real-time notifications. The admin panel provides analytics, user management, and system configuration options. Implemented secure authentication, payment integration, and responsive design for seamless user experience across all devices.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express'],
    images: [
      '/doctor1.png',
      '/doctor2.png',
      '/doctor3.png',
      '/doctor4.png',
      '/doctor5.png',
      '/doctor6.png',
      
    ],
    githubUrl: 'https://github.com/Aniket-1149/Doctor-Appointment-Site',
  },
  {
    title: 'Real-Time Chat Application',
    description: 'MeChat - A lightweight real-time chat application with instant messaging and sound alerts.',
    detailedDescription: 'MeChat is a lightweight, real-time chat application built with Socket.IO and Node.js that enables instant communication with zero lag. The application features instant messaging, user join/leave notifications with sound alerts, and a clean, responsive interface focused on the conversation. Built with vanilla JavaScript on the frontend and Socket.IO server on Node.js backend, it broadcasts messages to all connected users in real-time. The server handles new-user-joined, send, and disconnect events, while the client manages username prompts, message sending through socket connections, DOM updates, and audio notifications for incoming messages. The application includes CORS configuration for secure connections and works seamlessly across desktop and mobile devices.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Socket.io'],
    images: [
      '/real_time_chat1.png',
      '/real_time_chat2.png'
      
    ],
    githubUrl: 'https://github.com/Aniket-1149/project-Real-Time-chat-Application',
  },
  {
    title: 'College Website Router',
    description: 'Single platform consolidating all colleges in the group with modern frontend.',
    detailedDescription: 'A unified web platform that serves as a central hub for multiple colleges within an educational group. The application features dynamic routing, college-specific content management, student portals, faculty interfaces, and administrative dashboards. Built with React and modern design principles, it provides a seamless experience for students, faculty, and staff across different institutions while maintaining individual college identities and branding.',
    techStack: ['React', 'Tailwind CSS', 'JavaScript'],
    images: [
      '/college-website-router-demo.mp4'
    ],
    githubUrl: 'https://github.com/Aniket-1149/College-Website-Router',
  },
  {
    title: 'Event Management System',
    description: 'Full stack solution for organizing and managing events with user authentication.',
    detailedDescription: 'A comprehensive event management platform that handles everything from event creation to attendee management. Features include event registration, ticket booking, payment processing, attendee tracking, and real-time analytics. The system supports multiple event types, venue management, speaker profiles, and automated email notifications. Built with secure user authentication, role-based access control, and integration with popular payment gateways.',
    techStack: ['MERN Stack', 'REST APIs'],
    images: [
      '/event1.png',
      '/event2.png',
      '/event3.png',
      '/event4.png',
      '/event5.png',
      '/event6.png',
      '/event7.png',
      '/event8.png'
      
    ],
    githubUrl: 'https://github.com/Aniket-1149/Event-Management-Site',
  },
  {
    title: 'Mock E-Commerce Website',
    description: 'Complete e-commerce solution with cart, checkout, and payment integration.',
    detailedDescription: 'A fully functional e-commerce platform featuring product catalog, shopping cart, user authentication, order management, and payment processing. The application includes advanced search and filtering, product recommendations, inventory management, and customer reviews. Built with modern web technologies, it provides a seamless shopping experience with secure payment integration through Stripe, order tracking, and comprehensive admin dashboard for business management.',
    techStack: ['MERN Stack', 'Stripe'],
    images: [
      '/mock1.png',
      '/mock2.png',
      '/mock3.png',
      '/mock4.png'
      
    ],
    githubUrl: 'https://github.com/Aniket-1149/Mock-e-Commerce',
  },
];

const ImageCarousel = ({ images, projectTitle }: { images: string[]; projectTitle: string }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  
  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-lg" ref={emblaRef}>
        <div className="flex">
          {images.map((image, index) => {
            const isVideo = image.endsWith('.mp4') || image.endsWith('.webm') || image.endsWith('.ogg');
            
            return (
              <div key={index} className="flex-[0_0_100%] min-w-0">
                <div className="relative h-48 bg-gradient-to-br from-background to-secondary rounded-lg overflow-hidden">
                  {isVideo ? (
                    <video 
                      src={image}
                      controls
                      className="w-full h-full object-contain"
                      preload="metadata"
                    >
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img 
                      src={image} 
                      alt={`${projectTitle} - Screenshot ${index + 1}`}
                      className="w-full h-full object-contain"
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {images.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 bg-background/80 backdrop-blur-sm hover:bg-background"
            onClick={scrollPrev}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 bg-background/80 backdrop-blur-sm hover:bg-background"
            onClick={scrollNext}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </>
      )}
    </div>
  );
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isExpanded, setIsExpanded] = useState(false);

  // Handle Escape key to close modal
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isExpanded) {
        setIsExpanded(false);
      }
    };

    if (isExpanded) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isExpanded]);

  const handleLinkClick = (url: string, e?: React.MouseEvent) => {
    console.log('handleLinkClick called with URL:', url);
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    // Small delay to ensure event handling completes
    setTimeout(() => {
      window.open(url, "_blank", "noopener,noreferrer");
    }, 0);
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -5 }}
        onClick={toggleExpanded}
        className={`glass-card rounded-2xl overflow-visible group neon-border cursor-pointer relative ${
          project.featured ? 'md:col-span-2 lg:col-span-2' : ''
        }`}
      >
        <div className="p-6 h-full flex flex-col relative z-10 bg-background/80 backdrop-blur-sm rounded-2xl">
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
          
          <div className="flex gap-3 justify-between items-center relative z-20">
            <div className="flex gap-3">
              {project.liveUrl && (
                <Button
                  size="sm"
                  variant="outline"
                  className="gap-2 cursor-pointer relative z-30"
                  type="button"
                  onClick={(e) => {
                    console.log('Live Demo button clicked on card');
                    e.stopPropagation();
                    e.preventDefault();
                    handleLinkClick(project.liveUrl!, e);
                  }}
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </Button>
              )}
              {project.githubUrl && (
                <Button
                  size="sm"
                  variant="ghost"
                  className="gap-2 cursor-pointer relative z-30"
                  type="button"
                  onClick={(e) => {
                    console.log('GitHub button clicked on card');
                    e.stopPropagation();
                    e.preventDefault();
                    handleLinkClick(project.githubUrl!, e);
                  }}
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </Button>
              )}
            </div>
            
            <Button
              size="sm"
              variant="secondary"
              type="button"
              className="relative z-30"
              onClick={(e) => {
                console.log('View Details button clicked');
                e.stopPropagation();
                toggleExpanded();
              }}
            >
              View Details
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Expanded Modal */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={(e) => {
              console.log('Modal background clicked');
              e.stopPropagation();
              setIsExpanded(false);
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-visible neon-border relative"
            >
              <div className="p-8 relative z-10 bg-background/95 backdrop-blur-sm rounded-2xl max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex-1 pr-4">
                    {project.featured && (
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-yellow-400 bg-yellow-400/10 px-2 py-1 rounded-full w-fit mb-3">
                        🏆 Award Winner
                      </span>
                    )}
                    <h3 className="font-display text-3xl font-bold mb-2">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-sm px-3 py-1 rounded-full bg-primary/10 text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2 relative z-20">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="shrink-0 hover:bg-destructive/10 hover:text-destructive relative z-30"
                      onClick={(e) => {
                        console.log('Close button clicked');
                        e.stopPropagation();
                        e.preventDefault();
                        setIsExpanded(false);
                      }}
                    >
                      <X className="h-5 w-5" />
                    </Button>
                    
                    {/* Alternative text close button for debugging */}
                    <button
                      onClick={() => {
                        console.log('Text close button clicked');
                        setIsExpanded(false);
                      }}
                      className="text-xs text-muted-foreground hover:text-foreground cursor-pointer relative z-30"
                    >
                      Close
                    </button>
                  </div>
                </div>

                {/* Image Gallery */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold mb-4">Project Gallery</h4>
                  <ImageCarousel images={project.images} projectTitle={project.title} />
                </div>

                {/* Detailed Description */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold mb-4">About This Project</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.detailedDescription}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 justify-center relative z-20">
                  {project.liveUrl && (
                    <Button
                      type="button"
                      className="gap-2 relative z-30"
                      onClick={(e) => {
                        console.log('Live Demo button clicked in modal');
                        handleLinkClick(project.liveUrl!, e);
                      }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button
                      type="button"
                      variant="outline"
                      className="gap-2 relative z-30"
                      onClick={(e) => {
                        console.log('View Code button clicked in modal');
                        handleLinkClick(project.githubUrl!, e);
                      }}
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
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
