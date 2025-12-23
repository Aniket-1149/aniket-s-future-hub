import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-sm text-muted-foreground"
          >
            © {new Date().getFullYear()} Aniket Kumar Singh. Built with passion & code.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-sm text-muted-foreground"
          >
            <span className="text-gradient font-medium">Full Stack Developer</span> • MERN Stack • AI Enthusiast
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
