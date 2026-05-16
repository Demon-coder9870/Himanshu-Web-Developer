import { motion } from 'framer-motion';
import { clsx } from 'clsx';

const StatCard = ({ label, value, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="glass-card p-6 md:p-8 rounded-2xl flex flex-col items-center justify-center text-center group"
    >
      <span className="text-4xl md:text-5xl font-black text-white mb-2 group-hover:text-accent-primary transition-colors">
        {value}
      </span>
      <span className="text-slate-500 font-bold uppercase tracking-widest text-xs">
        {label}
      </span>
    </motion.div>
  );
};

export default StatCard;
