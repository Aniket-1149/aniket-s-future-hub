import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, MapPin, Calendar, FileText, ExternalLink } from 'lucide-react';

const experiences = [
  {
    title: 'Intern',
    company: 'Cisco Networking Academy',
    location: 'Remote',
    period: '06/2025 – 08/2025',
    description: [
      'Completed Cisco AICTE Virtual Internship Program in Cybersecurity (Jun-Aug 2025) via Cisco Networking Academy, focused on network security fundamentals and cyber risk management.',
      'Gained hands-on exposure to cybersecurity concepts including threat analysis, network protection, security principles, and industry best practices.',
    ],
    certificateUrl: '/certificates/virtual internship cyber security.pdf',
    color: 'text-blue-400',
    bgColor: 'bg-blue-400/10',
  },
  {
    title: 'Intern',
    company: 'Smartbridge',
    location: 'Remote',
    period: '05/2025 – 07/2025',
    description: [
      'Completed an 8-week Salesforce Developer Virtual Internship (May-July 2025) conducted by SmartBridge in collaboration with AICTE and Salesforce, focused on CRM development and platform fundamentals.',
      'Gained hands-on experience with Salesforce Fundamentals including organizational setup, data management, security management, process automation, and UI customization.',
    ],
    certificateUrl: '/certificates/salesforce certificate.pdf',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My journey in the tech industry through internships and hands-on learning
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary/20" />

            {experiences.map((experience, index) => (
              <motion.div
                key={`${experience.company}-${index}`}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative mb-12 ml-16 md:ml-20"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[3.25rem] md:-left-[3.75rem] top-2 z-10">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className={`w-8 h-8 rounded-full ${experience.bgColor} border-2 border-current ${experience.color} flex items-center justify-center`}
                  >
                    <Briefcase className="w-4 h-4" />
                  </motion.div>
                </div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="glass-card rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="mb-4 md:mb-0">
                      <h3 className="font-display text-2xl font-bold mb-1">
                        {experience.title}
                      </h3>
                      <p className="text-lg text-primary font-semibold mb-2">
                        {experience.company}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{experience.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{experience.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {experience.description.map((desc, descIndex) => (
                      <div key={descIndex} className="flex gap-3">
                        <span className="text-primary mt-1.5">•</span>
                        <p className="text-muted-foreground leading-relaxed flex-1">
                          {desc}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Certificate Link */}
                  {experience.certificateUrl && (
                    <motion.a
                      href={experience.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-4 text-sm text-primary hover:text-primary/80 transition-colors cursor-pointer group"
                      whileHover={{ x: 5 }}
                    >
                      <FileText className="w-4 h-4" />
                      <span className="font-medium">View Certificate</span>
                      <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </motion.a>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
