import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Code, Layout, Smartphone, Zap, Search, PenTool, Terminal, Rocket, CheckCircle2, ShieldCheck, Clock, MessageSquareText } from 'lucide-react';
import SEO from '@/components/common/SEO';
import Container from '@/components/common/Container';
import SectionTitle from '@/components/common/SectionTitle';
import AnimatedSection from '@/components/common/AnimatedSection';
import Button from '@/components/common/Button';
import Hero from '@/components/home/Hero';
import StatCard from '@/components/home/StatCard';
import ProjectSlider from '@/components/sliders/ProjectSlider';
import TestimonialSlider from '@/components/sliders/TestimonialSlider';
import ServiceCard from '@/components/cards/ServiceCard';
import { projects } from './projects/index';
import { services } from './services';

export const profile = {
  name: "Himanshu Verma",
  role: "Senior Web Developer",
  title: "Full-Stack Specialist & UI/UX Expert",
  location: "Dehradun, Uttarakhand, India",
  email: "himanshuwebdevelopers@gmail.com",
  phone: "+91 94105 93344",
  company: "Applaud Web Media Pvt. Ltd.",
  education: "Shri Guru Ram Rai Institute Of Technology & Science",
  summary: "Himanshu Verma is a Senior Web Developer with 5+ years of experience in crafting high-performance, SEO-optimized, and user-centric web applications. Based in Dehradun, he specializes in the MERN stack (MongoDB, Express, React, Node.js), Next.js, and advanced WordPress development. He has a proven track record of delivering over 50+ successful projects, ranging from complex enterprise dashboards to high-conversion landing pages. His approach combines technical excellence with a deep understanding of UI/UX principles to drive business growth and user engagement.",
  socials: {
    linkedin: "https://linkedin.com/",
    twitter: "https://twitter.com/",
    instagram: "https://instagram.com/",
  },
  resumeUrl: "#", 
  status: "Open for High-Impact Projects",
};

export const testimonials = [
  {
    id: 1,
    name: "Vikram Malhotra",
    role: "CEO, TechVeda Solutions",
    rating: 5,
    text: "Himanshu transformed our outdated portal into a lightning-fast Next.js application. Our page load time decreased by 60%, and our conversion rate saw a significant boost. His professional approach and technical depth are unmatched.",
    avatar: "/testimonials/avatar1.jpg",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Marketing Director, Bharat Digital",
    rating: 5,
    text: "Working with Himanshu was the best decision for our rebranding. He didn't just code; he provided valuable UI/UX insights that made our site much more intuitive. He is reliable, communicative, and truly an expert in React.",
    avatar: "/testimonials/avatar2.jpg",
  },
  {
    id: 3,
    name: "Arjun Reddy",
    role: "Founder, Indica E-com",
    rating: 5,
    text: "We needed a complex multi-vendor dashboard on a tight deadline. Himanshu not only met the deadline but delivered a bug-free, scalable solution. His knowledge of state management and API integration is top-notch.",
    avatar: "/testimonials/avatar3.jpg",
  },
  {
    id: 4,
    name: "Anjali Gupta",
    role: "Product Manager, Delhi Fintech",
    rating: 5,
    text: "The financial dashboard Himanshu built for us is a masterpiece of frontend engineering. It handles real-time data streams flawlessly. His attention to detail in data visualization and security is exactly what we were looking for.",
    avatar: "/testimonials/avatar4.jpg",
  },
  {
    id: 5,
    name: "Sanjay Verma",
    role: "Owner, Shimla Blooms",
    rating: 5,
    text: "I was struggling with my WordPress site for months before I found Himanshu. He cleaned up the code, optimized the speed, and added custom features that I thought were impossible. My sales have doubled since the relaunch!",
    avatar: "/testimonials/avatar5.jpg",
  },
  {
    id: 6,
    name: "Mark Thompson",
    role: "Marketing Manager, Peak Performance",
    rating: 5,
    text: "Himanshu is a wizard with landing pages. The high-converting page he designed for our latest campaign achieved a 25% conversion rate, which is far beyond the industry average. He's also great at SEO!",
    avatar: "/testimonials/avatar6.jpg",
  },
];

interface Stat {
  label: string;
  value: string;
}

export default function Home() {
  const featuredProjects = projects.slice(0, 6);
  const featuredServices = services.slice(0, 3);
  const stats: Stat[] = [
    { label: 'Years Experience', value: '5+' },
    { label: 'Projects Completed', value: '50+' },
    { label: 'Happy Clients', value: '30+' },
    { label: 'Tech Stack', value: '15+' },
  ];

  return (
    <>
      <SEO 
        title="Home" 
        image="/home_og_image_1778742077884.png"
      />
      
      <Hero />

      {/* Stats Section */}
      <section className="py-20 relative">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <StatCard key={i} {...stat} index={i} />
            ))}
          </div>
        </Container>
      </section>

      {/* About Preview */}
      <AnimatedSection className="py-24 bg-dark-lighter/30">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 flex items-center justify-center p-8 overflow-hidden group">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
                <div className="relative z-10 w-full h-full border-2 border-white/5 rounded-2xl flex items-center justify-center text-8xl font-black text-white/5 group-hover:scale-110 transition-transform duration-700">
                  HV
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 glass-card p-8 rounded-3xl hidden md:block">
                <p className="text-accent-primary font-bold text-4xl mb-1">5+</p>
                <p className="text-slate-400 text-sm font-bold uppercase tracking-widest">Years of Excellence</p>
              </div>
            </div>
            
            <div className="space-y-8">
              <SectionTitle 
                title="Passionate Developer Crafting Digital Excellence" 
                subtitle="About Me" 
                align="left" 
              />
              <p className="text-slate-400 text-lg leading-relaxed">
                {profile.summary}
              </p>
              <div className="grid grid-cols-2 gap-6">
                {['Modern UI/UX', 'Clean Code', 'Performance', 'Accessibility'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent-primary" />
                    <span className="text-slate-300 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <div className="pt-4">
                <Link href="/about">
                  <Button icon={ArrowRight}>Read More About Me</Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </AnimatedSection>

      {/* Featured Projects */}
      <section className="py-24 overflow-hidden">
        <Container>
          <SectionTitle 
            title="Featured Case Studies" 
            subtitle="My Portfolio" 
          />
          <ProjectSlider projects={featuredProjects} />
          <div className="text-center mt-12">
            <Link href="/projects">
              <Button variant="outline" size="lg" icon={ArrowRight}>View All Projects</Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Services Preview */}
      <AnimatedSection className="py-24 bg-dark-lighter/30">
        <Container>
          <SectionTitle 
            title="Solutions I Provide" 
            subtitle="My Services" 
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services">
              <Button variant="outline" size="lg" icon={ArrowRight}>Explore All Services</Button>
            </Link>
          </div>
        </Container>
      </AnimatedSection>

      {/* Why Choose Me Section */}
      <section className="py-24 bg-dark-lighter/30">
        <Container>
          <SectionTitle 
            title="Why Choose Me for Your Project" 
            subtitle="Value Proposition" 
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheck, title: "Reliability", desc: "5+ years of delivering projects on time with clean, maintainable, and bug-free code." },
              { icon: Zap, title: "Performance", desc: "Expertise in Core Web Vitals and performance optimization for lightning-fast load times." },
              { icon: MessageSquareText, title: "Communication", desc: "Transparent communication and regular updates throughout the development lifecycle." },
              { icon: CheckCircle2, title: "SEO Optimized", desc: "Built-in SEO best practices to ensure your website ranks higher and reaches more people." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 rounded-3xl text-center space-y-4 hover:border-accent-primary/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent-primary/10 flex items-center justify-center mx-auto mb-6">
                   <item.icon className="text-accent-primary" size={28} />
                </div>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Working Process Section */}
      <section className="py-24">
        <Container>
          <SectionTitle 
            title="My Working Process" 
            subtitle="How I Work" 
          />
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/5 -translate-y-1/2 hidden lg:block" />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
              {[
                { icon: Search, step: "01", title: "Discovery", desc: "Understanding your goals, audience, and technical requirements deeply." },
                { icon: PenTool, step: "02", title: "UI/UX Design", desc: "Creating intuitive designs and interactive prototypes for your approval." },
                { icon: Terminal, step: "03", title: "Development", desc: "Building the solution with clean, scalable code and modern technologies." },
                { icon: Rocket, step: "04", title: "Launch", desc: "Thorough testing, optimization, and final deployment to your server." },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-20 h-20 rounded-full bg-dark border-2 border-white/10 flex items-center justify-center mx-auto mb-8 relative group-hover:border-accent-primary transition-colors duration-500">
                     <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent-primary text-dark text-xs font-black flex items-center justify-center">
                        {item.step}
                     </div>
                     <item.icon className="text-white group-hover:text-accent-primary transition-colors duration-500" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-dark-lighter/30">
        <Container>
          <SectionTitle 
            title="What My Clients Say" 
            subtitle="Testimonials" 
          />
          <div className="max-w-4xl mx-auto">
            <TestimonialSlider testimonials={testimonials} />
          </div>
        </Container>
      </section>

      {/* Contact CTA */}
      <AnimatedSection className="py-24">
        <Container>
          <div className="glass-card p-12 md:p-20 rounded-[3rem] text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 opacity-50" />
            <div className="relative z-10 space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold text-white max-w-3xl mx-auto">
                Have a project in mind? Let's build something <span className="text-gradient">extraordinary</span> together.
              </h2>
              <p className="text-slate-400 text-xl max-w-xl mx-auto">
                I'm currently available for freelance work and new frontend opportunities. Let's talk about your project!
              </p>
              <div className="flex flex-wrap justify-center gap-6 pt-4">
                <Link href="/contact">
                  <Button size="md" icon={ArrowRight}>Start A Conversation</Button>
                </Link>
                <Link href="/resume">
                  <Button variant="secondary" size="md">View My Resume</Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </AnimatedSection>
    </>
  );
}
