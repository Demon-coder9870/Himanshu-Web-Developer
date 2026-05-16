import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="glass-card p-8 md:p-12 rounded-3xl relative overflow-hidden h-full">
      <Quote className="absolute top-8 right-8 text-accent-primary/10" size={80} />
      
      <div className="flex gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={18} 
            className={i < testimonial.rating ? "fill-accent-primary text-accent-primary" : "text-slate-600"} 
          />
        ))}
      </div>
      
      <p className="text-xl md:text-2xl text-slate-300 italic mb-10 relative z-10 leading-relaxed">
        "{testimonial.text}"
      </p>
      
      <div className="flex items-center gap-4 border-t border-white/5 pt-8">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center text-xl font-bold text-dark">
          {testimonial.name[0]}
        </div>
        <div>
          <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
          <p className="text-accent-primary text-sm">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
