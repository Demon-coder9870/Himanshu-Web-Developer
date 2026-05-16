import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import TiltCard from '../effects/TiltCard';

const BlogCard = ({ post, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <TiltCard className="h-full">
        <div className="glass-card rounded-2xl overflow-hidden flex flex-col h-full group">
          <div className="relative h-56 overflow-hidden">
             <Image 
                src={post.image} 
                alt={post.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60" />
             <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 rounded-full bg-accent-primary/20 backdrop-blur-md text-accent-primary text-[10px] font-bold uppercase tracking-widest border border-accent-primary/30">
                  {post.category}
                </span>
             </div>
          </div>
          
          <div className="p-8 flex flex-col flex-grow">
            <div className="flex items-center gap-4 text-xs text-slate-400 mb-4">
              <span className="flex items-center gap-1">
                <Calendar size={14} className="text-accent-primary" />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={14} className="text-accent-primary" />
                {post.readTime}
              </span>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent-primary transition-colors leading-tight">
              {post.title}
            </h3>
            
            <p className="text-slate-400 mb-8 flex-grow line-clamp-3">
              {post.excerpt}
            </p>
            
            <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-accent-primary/20 flex items-center justify-center text-[10px] font-bold text-accent-primary border border-accent-primary/30">
                  HV
                </div>
                <span className="text-xs text-slate-300 font-medium">{post.author}</span>
              </div>
              
              <Link 
                href={`/blog/${post.slug}`}
                className="text-white hover:text-accent-primary transition-colors p-2 bg-white/5 rounded-lg group/btn"
              >
                <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
};

export default BlogCard;
