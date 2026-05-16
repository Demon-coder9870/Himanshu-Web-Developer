import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import SEO from '@/components/common/SEO';
import Container from '@/components/common/Container';
import Button from '@/components/common/Button';

export default function Custom404() {
  return (
    <>
      <SEO title="Page Not Found" />
      
      <div className="min-h-[80vh] flex items-center justify-center relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-primary/5 rounded-full blur-[120px] -z-10" />
        
        <Container className="text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-[12rem] md:text-[20rem] font-black text-white/5 leading-none select-none">
              404
            </h1>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.5 }}
               >
                 <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Oops! Lost in Space?</h2>
                 <p className="text-slate-400 text-xl max-w-lg mx-auto mb-12">
                   The page you are looking for doesn't exist or has been moved to another universe.
                 </p>
                 <div className="flex flex-wrap justify-center gap-6">
                    <Link href="/">
                      <Button size="lg" icon={Home}>Back to Home</Button>
                    </Link>
                    <button 
                      onClick={() => window.history.back()}
                      className="px-8 py-4 rounded-full border border-white/10 text-white font-bold hover:bg-white/5 transition-all duration-300 flex items-center gap-2"
                    >
                      <ArrowLeft size={20} />
                      Go Back
                    </button>
                 </div>
               </motion.div>
            </div>
          </motion.div>
        </Container>

        {/* Floating Shapes */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "linear",
            }}
            className={`absolute w-12 h-12 border border-accent-primary/20 rounded-xl -z-10`}
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 20}%`,
            }}
          />
        ))}
      </div>
    </>
  );
}
