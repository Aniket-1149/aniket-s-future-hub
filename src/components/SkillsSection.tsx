import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skills = {
  frontend: [
    { name: 'HTML', icon: 'https://img.icons8.com/color/48/html-5--v1.png' },
    { name: 'CSS', icon: 'https://img.icons8.com/color/48/css3.png' },
    { name: 'JavaScript', icon: 'https://img.icons8.com/color/48/javascript--v1.png' },
    { name: 'React', icon: 'https://img.icons8.com/color/48/react-native.png' },
    { name: 'Next.js', icon: 'https://img.icons8.com/fluency/48/nextjs.png' },
    { name: 'Tailwind CSS', icon: 'https://img.icons8.com/color/48/tailwindcss.png' },
  ],
  backend: [
    { name: 'Node.js', icon: 'https://img.icons8.com/color/48/nodejs.png' },
    { name: 'Express.js', icon: 'https://img.icons8.com/fluency/48/express-js.png' },
    { name: 'MongoDB', icon: 'https://img.icons8.com/color/48/mongodb.png' },
    { name: 'REST APIs', icon: 'https://img.icons8.com/color/48/api-settings.png' },
    { name: 'WebSockets', icon: 'https://img.icons8.com/ios-filled/50/link--v1.png' },
  ],
  languages: [
    { name: 'Java', icon: 'https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png' },
    { name: 'Python', icon: 'https://img.icons8.com/color/48/python--v1.png' },
  ],
  other: [
    { name: 'ML Integration', icon: 'https://img.icons8.com/color/48/artificial-intelligence.png' },
    { name: 'Git', icon: 'https://img.icons8.com/color/48/git.png' },
  ],
};

const SkillCard = ({ skill, index }: { skill: { name: string; icon: string }; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="glass-card rounded-xl p-4 flex flex-col items-center gap-2 cursor-pointer neon-border group"
    >
      <img 
        src={skill.icon} 
        alt={skill.name}
        className="w-12 h-12 group-hover:scale-110 transition-transform duration-300"
      />
      <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
        {skill.name}
      </span>
    </motion.div>
  );
};

const SkillCategory = ({ title, items, delay = 0 }: { title: string; items: { name: string; icon: string }[]; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="space-y-4"
    >
      <h3 className="text-lg font-display font-semibold text-primary">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {items.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <SkillCategory title="Frontend" items={skills.frontend} delay={0.1} />
          <SkillCategory title="Backend & Database" items={skills.backend} delay={0.2} />
          <SkillCategory title="Programming Languages" items={skills.languages} delay={0.3} />
          <SkillCategory title="Other" items={skills.other} delay={0.4} />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
