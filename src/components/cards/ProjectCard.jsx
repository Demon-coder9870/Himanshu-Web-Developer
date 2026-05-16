import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import TiltCard from '../effects/TiltCard';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <TiltCard className="h-full">
        <div className="glass-card rounded-2xl overflow-hidden flex flex-col h-full group">
          {/* Image */}
          <div className="relative h-64 overflow-hidden">
            <div className="absolute inset-0 bg-accent-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center gap-4">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white text-dark rounded-full hover:scale-110 transition-transform"
                title="Live Demo"
              >
                <ExternalLink size={20} />
              </a>
            </div>
            <div className="w-full h-full relative">
              <Image 
                src={project.image} 
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60" />
            </div>
          </div>

          {/* Content */}
          <div className="p-8 flex flex-col flex-grow">
            <span className="text-accent-primary text-xs font-bold tracking-widest uppercase mb-2">
              {project.category}
            </span>
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-slate-400 mb-6 line-clamp-3">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((t) => (
                <span key={t} className="text-[10px] px-2 py-1 bg-white/5 border border-white/10 rounded-full text-slate-300">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-auto">
              <a 
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white font-semibold hover:text-accent-primary transition-colors group/link"
              >
                Live Preview
                <ExternalLink size={18} className="group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
};

export default ProjectCard;
