import { motion } from 'framer-motion';
import { Download, CheckCircle2, Award, Users, Coffee, Rocket } from 'lucide-react';
import SEO from '@/components/common/SEO';
import Container from '@/components/common/Container';
import SectionTitle from '@/components/common/SectionTitle';
import AnimatedSection from '@/components/common/AnimatedSection';
import Button from '@/components/common/Button';
import SkillCard from '@/components/cards/SkillCard';
import { profile } from '@/pages/index';
import { education, skills } from './resume';

import type { Variants } from 'framer-motion';

interface FunFact {
  icon: any;
  label: string;
  value: string;
}

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function About() {
  const funFacts: FunFact[] = [
    { icon: Award, label: 'Awards Won', value: '12' },
    { icon: Users, label: 'Happy Clients', value: '30+' },
    { icon: Coffee, label: 'Cups of Coffee', value: '1500+' },
    { icon: Rocket, label: 'Projects Launched', value: '50+' },
  ];

  return (
    <>
      <SEO 
        title="About Me" 
        description="Learn more about Himanshu Verma, a passionate Senior Web Developer based in Dehradun, specializing in MERN stack and high-impact digital solutions."
        url="https://himanshuverma.dev/about"
      />
      
      <Container className="py-20">
        {/* Intro Section */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 relative overflow-hidden p-12">
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
               <div className="w-full h-full border-4 border-white/10 rounded-[2rem] flex items-center justify-center text-9xl font-black text-white/5">
                HV
               </div>
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-10 -right-10 glass-card p-10 rounded-3xl">
               <span className="text-6xl font-black text-accent-primary block mb-2">5+</span>
               <span className="text-slate-400 font-bold uppercase tracking-[0.2em] text-xs">Years of Experience</span>
            </div>
          </motion.div>

          <div className="space-y-8">
            <SectionTitle 
              title="Himanshu Verma" 
              subtitle="The Person Behind The Code" 
              align="left" 
            />
            <p className="text-xl text-slate-300 leading-relaxed">
              I am a dedicated <span className="text-accent-primary font-bold">Web Developer</span> based in Dehradun, India. With a deep passion for UI/UX and clean architecture, I specialize in building high-performance web applications.
            </p>
            <p className="text-slate-400 leading-relaxed">
              {profile.summary}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              {[
                'Frontend Specialist',
                'React & Next.js Expert',
                'UI/UX Enthusiast',
                'Problem Solver',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-accent-primary" size={20} />
                  <span className="text-white font-medium">{item}</span>
                </div>
              ))}
            </div>
            <div className="pt-8">
              <Button 
                size="lg" 
                icon={Download} 
                href={profile.resumeUrl} 
                download="Himanshu_Verma_Resume.pdf"
              >
                Download My Resume
              </Button>
            </div>
          </div>
        </div>

        {/* Education & Values */}
        <div className="grid lg:grid-cols-2 gap-20 mb-32">
          <AnimatedSection>
            <h3 className="text-2xl font-bold text-white mb-10 flex items-center gap-4">
              <span className="w-10 h-10 rounded-xl bg-accent-primary/10 flex items-center justify-center text-accent-primary">
                <Rocket size={20} />
              </span>
              My Education
            </h3>
            <div className="space-y-8">
              {education.map((edu) => (
                <div key={edu.id} className="glass-card p-8 rounded-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-accent-primary/5 rounded-bl-[5rem] transition-all duration-500 group-hover:w-32 group-hover:h-32" />
                  <span className="text-accent-primary font-bold text-sm mb-2 block">{edu.duration}</span>
                  <h4 className="text-xl font-bold text-white mb-2">{edu.degree}</h4>
                  <p className="text-slate-400 font-medium mb-1">{edu.institution}</p>
                  <p className="text-slate-500 text-sm">{edu.field}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <h3 className="text-2xl font-bold text-white mb-10 flex items-center gap-4">
              <span className="w-10 h-10 rounded-xl bg-accent-secondary/10 flex items-center justify-center text-accent-secondary">
                <Users size={20} />
              </span>
              Work Philosophy
            </h3>
            <div className="space-y-6">
              {[
                { title: 'User-Centric Design', desc: 'Every line of code I write is with the end-user in mind, ensuring accessibility and ease of use.' },
                { title: 'Clean & Scalable Code', desc: 'I prioritize maintainable architecture that can grow with the business requirements.' },
                { title: 'Continuous Learning', desc: 'The web evolves fast, and so do I. I stay updated with the latest industry trends.' },
              ].map((item, i) => (
                <div key={i} className="p-6 border-l-4 border-accent-primary bg-white/5 rounded-r-2xl">
                  <h4 className="text-white font-bold mb-2">{item.title}</h4>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* Skills Section (Migrated from skills page) */}
        <AnimatedSection className="mb-32">
          <SectionTitle 
            title="Technical Proficiency" 
            subtitle="My Skills & Expertise" 
            align="left"
          />
          
          <div className="space-y-20 mt-16">
            {skills.map((category, idx) => (
              <div key={category.category}>
                <div className="flex items-center gap-6 mb-8">
                  <h3 className="text-2xl font-bold text-white whitespace-nowrap">
                    {category.category}
                  </h3>
                  <div className="h-px bg-gradient-to-r from-accent-primary/30 to-transparent w-full" />
                </div>
                
                <motion.div 
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
                >
                  {category.items.map((skill, i) => (
                    <SkillCard key={skill} skill={skill} index={i} />
                  ))}
                </motion.div>
              </div>
            ))}
          </div>

          {/* Workflow Tools */}
          <div className="mt-20 p-8 md:p-12 glass-card rounded-[2rem] relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-accent-primary/5 rounded-full blur-3xl" />
             <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4">Workflow & Tools</h3>
                <p className="text-slate-400 max-w-2xl mb-8">
                  I use a variety of tools to ensure a smooth development process and high-quality results.
                </p>
                <div className="flex flex-wrap gap-3">
                   {['VS Code', 'GitHub', 'Figma', 'Postman', 'Vercel', 'Netlify', 'Chrome DevTools'].map((tool) => (
                     <span key={tool} className="px-5 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 text-sm font-medium hover:border-accent-primary hover:text-white transition-all duration-300">
                       {tool}
                     </span>
                   ))}
                </div>
             </div>
          </div>
        </AnimatedSection>

        {/* Fun Facts */}
        <AnimatedSection className="py-20 border-t border-white/5">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {funFacts.map((fact, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-6 group-hover:bg-accent-primary group-hover:scale-110 transition-all duration-500">
                  <fact.icon className="text-accent-primary group-hover:text-dark transition-colors" size={32} />
                </div>
                <h4 className="text-4xl font-black text-white mb-2">{fact.value}</h4>
                <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">{fact.label}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Container>
    </>
  );
}

