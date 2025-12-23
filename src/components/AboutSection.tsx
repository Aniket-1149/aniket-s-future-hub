import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Lightbulb, Rocket, Users } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable code that stands the test of time',
  },
  {
    icon: Lightbulb,
    title: 'Problem Solver',
    description: 'Turning complex challenges into elegant, simple solutions',
  },
  {
    icon: Rocket,
    title: 'Fast Learner',
    description: 'Quickly adapting to new technologies and methodologies',
  },
  {
    icon: Users,
    title: 'Team Player',
    description: 'Collaborating effectively in hackathons and team projects',
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a passionate developer currently pursuing my studies at LNCT, Bhopal. 
                My journey in tech started with curiosity and has evolved into a deep love 
                for building products that make a difference.
              </p>
              <p>
                With a strong foundation in the MERN stack and a growing interest in AI/ML, 
                I love participating in hackathons where I can push my limits and collaborate 
                with like-minded individuals to create innovative solutions.
              </p>
              <p>
                My national hackathon win at SIH 2025 was a defining moment that reinforced 
                my belief in the power of technology to solve real-world problems. I'm always 
                looking for the next challenge to tackle.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex items-center gap-4"
            >
              <div className="h-px flex-1 bg-gradient-to-r from-primary to-transparent" />
              <span className="text-sm text-primary font-medium">Always Learning</span>
              <div className="h-px flex-1 bg-gradient-to-l from-accent to-transparent" />
            </motion.div>
          </motion.div>

          {/* Right side - Highlights grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass-card rounded-xl p-5 neon-border"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
