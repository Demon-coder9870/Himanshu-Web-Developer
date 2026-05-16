import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import TiltCard from '../effects/TiltCard';

const ServiceCard = ({ service, index }) => {
  const Icon = Icons[service.icon] || Icons.Code;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <TiltCard className="h-full">
        <div className={`glass-card p-8 rounded-2xl h-full flex flex-col relative overflow-hidden group ${service.featured ? 'border-accent-primary/50' : ''}`}>
          {service.featured && (
            <div className="absolute top-0 right-0 bg-accent-primary text-dark text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-widest">
              Featured
            </div>
          )}
          
          <div className="mb-6 p-4 bg-accent-primary/10 rounded-2xl w-fit group-hover:scale-110 group-hover:bg-accent-primary transition-all duration-500">
            <Icon className="text-accent-primary group-hover:text-dark transition-colors" size={32} />
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent-primary transition-colors">
            {service.title}
          </h3>
          
          <p className="text-slate-400 mb-8 flex-grow">
            {service.description}
          </p>
          
          <ul className="space-y-3 mb-8">
            {service.features.map((feature, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                <div className="w-1.5 h-1.5 rounded-full bg-accent-primary" />
                {feature}
              </li>
            ))}
          </ul>
          
          <div className="mt-auto">
            <div className="w-full h-px bg-white/10 mb-6" />
            <button className="text-white font-bold text-sm hover:text-accent-primary transition-colors flex items-center gap-2 group/btn">
              Learn More
              <Icons.ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
};

export default ServiceCard;
