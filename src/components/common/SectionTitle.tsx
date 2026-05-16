import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle: string;
  align?: 'center' | 'left';
}

const SectionTitle = ({ title, subtitle, align = 'center' }: SectionTitleProps) => {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-accent-primary font-bold tracking-widest uppercase text-sm mb-2 block"
      >
        {subtitle}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-3xl md:text-4xl font-bold text-white mb-4"
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className={`h-1.5 w-24 bg-accent-primary rounded-full ${align === 'center' ? 'mx-auto' : ''}`}
      />
    </div>
  );
};

export default SectionTitle;
