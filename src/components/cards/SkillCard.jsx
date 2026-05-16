import { motion } from 'framer-motion';
import TiltCard from '../effects/TiltCard';

const SkillCard = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
    >
      <TiltCard className="h-full">
        <div className="glass-card p-4 rounded-2xl flex items-center justify-center text-center h-full group">
          <span className="text-slate-300 group-hover:text-accent-primary transition-colors font-medium">
            {skill}
          </span>
        </div>
      </TiltCard>
    </motion.div>
  );
};

export default SkillCard;
