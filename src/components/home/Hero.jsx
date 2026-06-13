import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { Linkedin, Twitter } from '@/components/common/BrandIcons';
import { clsx } from 'clsx';
import Link from 'next/link';
import Image from 'next/image';
import Container from '../common/Container';
import Button from '../common/Button';
import MagneticButton from '../common/MagneticButton';
import { useState } from 'react';
import { profile } from '@/pages/index';

const techBadges = [
  "React.js", "Next.js", "JavaScript", "WordPress", "Tailwind CSS"
];

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX - innerWidth / 2) / 40;
    const y = (clientY - innerHeight / 2) / 40;
    setMousePos({ x, y });
  };

  return (
    <section 
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background Blobs */}
      <motion.div 
        animate={{ x: mousePos.x * -1, y: mousePos.y * -1 }}
        className="absolute top-1/4 -left-20 w-96 h-96 bg-accent-primary/20 rounded-full blur-[120px] animate-blob" 
      />
      <motion.div 
        animate={{ x: mousePos.x, y: mousePos.y }}
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-secondary/20 rounded-full blur-[120px] animate-blob animation-delay-2000" 
      />
      
      <Container className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div
          animate={{ x: mousePos.x * 0.2, y: mousePos.y * 0.2 }}
          transition={{ type: 'spring', damping: 20, stiffness: 100 }}
          className="relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary text-sm font-bold mb-8"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-primary"></span>
            </span>
            {profile.status}
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Hi, I'm <span className="text-accent-primary">{profile.name}</span>
            <br />
            <span className="text-gradient">Web Developer</span>
          </h1>

          <p className="text-xl text-slate-400 mb-10 max-w-xl leading-relaxed">
            {profile.summary.split('.')[0]}. I create responsive, fast, and user-friendly websites using modern frontend technologies.
          </p>

          <div className="flex flex-wrap gap-6 mb-12">
            <MagneticButton>
              <Link href="/projects">
                <Button size="md" icon={ArrowRight}>View Projects</Button>
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link href="/contact">
                <Button variant="secondary" size="md">Contact Me</Button>
              </Link>
            </MagneticButton>
          </div>

          <div className="flex items-center gap-8">
            <div className="flex gap-4">
              {[
                { Icon: Linkedin, href: profile.socials.linkedin },
                { Icon: Twitter, href: profile.socials.twitter },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 hover:bg-accent-primary hover:text-dark transition-all duration-300"
                >
                  <Icon size={22} />
                </a>
              ))}
            </div>
            <div className="h-10 w-px bg-white/10" />
            <p className="text-slate-500 text-sm italic">
              Currently working at <br />
              <span className="text-slate-300 not-italic font-medium">{profile.company}</span>
            </p>
          </div>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          animate={{ x: mousePos.x * -0.3, y: mousePos.y * -0.3 }}
          transition={{ type: 'spring', damping: 20, stiffness: 100 }}
          className="relative lg:h-[600px] flex items-center justify-center"
        >
          {/* Animated Background Ring */}
          <div className="absolute w-[500px] h-[500px] border border-white/5 rounded-full animate-[spin_20s_linear_infinite]" />
          <div className="absolute w-[400px] h-[400px] border border-accent-primary/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
          
          {/* Developer Card Visual */}
          <div className="relative z-10 glass-card p-6 rounded-[2rem] w-full max-w-md shadow-2xl shadow-accent-primary/20 group">
            <div className="relative h-96 w-full rounded-2xl overflow-hidden bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 flex items-center justify-center">
                {/* Simulated Code Window */}
                <div className="absolute inset-0 p-6 font-mono text-xs text-accent-primary/40 space-y-2 opacity-50">
                    <p>const developer = &#123;</p>
                    <p className="pl-4">name: '{profile.name}',</p>
                    <p className="pl-4">role: '{profile.role}',</p>
                    <p className="pl-4">skills: ['React', 'Next.js', 'Tailwind'],</p>
                    <p className="pl-4">passion: 'High-performance UI'</p>
                    <p>&#125;;</p>
                    <p>while(alive) &#123; code(); &#125;</p>
                </div>
                
                <div className="relative z-10 text-center">
                    <div className="w-40 h-40 rounded-full bg-dark border-4 border-accent-primary flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-500 shadow-neon overflow-hidden">
                        <Image src="/profile.jpeg" alt={profile.name} width={160} height={160} className="object-cover w-full h-full" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{profile.name}</h3>
                    <p className="text-accent-primary font-medium tracking-widest uppercase text-xs">Senior Web Dev</p>
                </div>
            </div>
            
            {/* Floating Tech Badges */}
            {techBadges.map((tech, i) => (
              <motion.div
                key={tech}
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
                className={clsx(
                  "absolute glass px-4 py-2 rounded-xl text-xs font-bold text-white border border-white/10 shadow-lg",
                  i === 0 && "-top-4 -left-4 bg-accent-primary/20",
                  i === 1 && "top-1/4 -right-8 bg-accent-secondary/20",
                  i === 2 && "bottom-1/4 -left-10 bg-accent-tertiary/20",
                  i === 3 && "-bottom-6 right-1/4 bg-white/10",
                  i === 4 && "top-10 left-1/3 bg-accent-primary/10"
                )}
              >
                {tech}
              </motion.div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
          >
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] rotate-90 mb-4">SCROLL</span>
            <div className="w-px h-16 bg-gradient-to-b from-accent-primary to-transparent" />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;
