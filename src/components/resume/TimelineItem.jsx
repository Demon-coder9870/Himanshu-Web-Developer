import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react';

const TimelineItem = ({ item, index, type = 'experience' }) => {
  const Icon = type === 'experience' ? Briefcase : GraduationCap;

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="relative pl-8 pb-12 border-l border-accent-primary/30 last:pb-0 group"
    >
      {/* Dot */}
      <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-dark border-2 border-accent-primary group-hover:bg-accent-primary transition-colors duration-300 shadow-[0_0_10px_rgba(0,242,255,0.5)]" />
      
      {/* Content */}
      <div className="glass-card p-8 rounded-2xl group-hover:border-accent-primary/50 transition-all duration-300">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="text-2xl font-bold text-white group-hover:text-accent-primary transition-colors">
              {type === 'experience' ? item.role : item.degree || item.qualification}
            </h3>
            <div className="flex items-center gap-2 text-accent-primary font-medium mt-1">
              <Icon size={16} />
              <span>{type === 'experience' ? item.company : item.institution}</span>
            </div>
          </div>
          <div className="flex flex-col items-start md:items-end gap-2 text-slate-400 text-sm">
            <span className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full border border-white/10">
              <Calendar size={14} className="text-accent-primary" />
              {item.duration}
            </span>
            {item.location && (
              <span className="flex items-center gap-2">
                <MapPin size={14} className="text-accent-primary" />
                {item.location}
              </span>
            )}
          </div>
        </div>

        {item.description && (
          <ul className="space-y-3">
            {item.description.map((desc, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-300 leading-relaxed">
                <div className="w-1.5 h-1.5 rounded-full bg-accent-primary mt-2 shrink-0" />
                {desc}
              </li>
            ))}
          </ul>
        )}
        
        {item.field && (
          <p className="text-slate-400">Field: <span className="text-white font-medium">{item.field}</span></p>
        )}
      </div>
    </motion.div>
  );
};

export default TimelineItem;
