import { motion } from 'framer-motion';
import SEO from '@/components/common/SEO';
import Container from '@/components/common/Container';
import SectionTitle from '@/components/common/SectionTitle';
import ServiceCard from '@/components/cards/ServiceCard';

export const services = [
  {
    id: 1,
    title: "Frontend Development",
    description: "Building responsive and performant web applications using modern technologies.",
    features: ["React & Next.js", "State Management", "API Integration", "Clean Code"],
    icon: "Layout",
  },
  {
    id: 3,
    title: "Next.js & React Expert",
    description: "Creating SEO-friendly, fast-loading websites using the powerful Next.js framework.",
    features: ["Server-side Rendering", "Static Site Generation", "Image Optimization", "Performance Tuning"],
    featured: true,
    icon: "Zap",
  },
  {
    id: 5,
    title: "WordPress Development",
    description: "Custom WordPress solutions ranging from custom themes to complex multi-vendor stores.",
    features: ["Custom Theme Development", "Elementor Pro Expert", "WooCommerce", "ACF Integration"],
    icon: "Globe",
  },
  {
    id: 6,
    title: "Landing Page Development",
    description: "High-converting landing pages designed to turn visitors into customers.",
    features: ["Conversion Optimization", "Fast Load Times", "A/B Testing Support", "Lead Generation"],
    icon: "Target",
  },
  {
    id: 7,
    title: "Website Redesign & UI/UX",
    description: "Giving your existing website a modern look and better performance.",
    features: ["Modern UI/UX", "Better SEO", "Mobile Friendliness", "Code Refactoring"],
    icon: "RefreshCw",
  },
  {
    id: 8,
    title: "UI to HTML/React",
    description: "Transforming Figma, XD, or Photoshop designs into pixel-perfect responsive code.",
    features: ["Pixel Perfection", "Semantic Markup", "Clean Structure", "Animation Integration"],
    icon: "Image",
  },
  {
    id: 9,
    title: "Performance & SEO Audit",
    description: "Improving your website speed and search ranking for better user experience.",
    features: ["Core Web Vitals", "Image Compression", "SEO Best Practices", "Speed Optimization"],
    icon: "TrendingUp",
  },
  {
    id: 11,
    title: "Deployment & Maintenance",
    description: "Taking your website live and ensuring it stays secure and up-to-date.",
    features: ["Hosting Configuration", "SSL Integration", "Regular Backups", "Bug Fixes"],
    icon: "Shield",
  },
];

interface ProcessStep {
  step: string;
  title: string;
  desc: string;
}

export default function Services() {
  const processes: ProcessStep[] = [
    { step: '01', title: 'Planning', desc: 'Understanding requirements and defining project goals.' },
    { step: '02', title: 'Design', desc: 'Crafting the visual layout and user experience.' },
    { step: '03', title: 'Development', desc: 'Writing clean, efficient, and scalable code.' },
    { step: '04', title: 'Deployment', desc: 'Testing, optimizing, and launching the project.' },
  ];

  return (
    <>
      <SEO 
        title="Services" 
        description="Professional web development services including React, Next.js, WordPress, and Performance Optimization by Himanshu Verma."
        url="https://himanshuverma.dev/services"
      />
      
      <Container className="py-20">
        <SectionTitle 
          title="Professional Solutions" 
          subtitle="Services I Offer" 
        />
        
        <p className="text-slate-400 text-center max-w-3xl mx-auto mb-20 text-lg">
          I provide a wide range of frontend development services to help businesses build stunning and high-performance digital products.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-40">
          <SectionTitle 
            title="My Development Process" 
            subtitle="How I Work" 
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
            {processes.map((process, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative p-8 glass-card rounded-3xl group"
              >
                <span className="text-6xl font-black text-white/5 absolute top-4 right-4 group-hover:text-accent-primary/10 transition-colors">
                  {process.step}
                </span>
                <h4 className="text-xl font-bold text-white mb-4 relative z-10">{process.title}</h4>
                <p className="text-slate-400 text-sm relative z-10 leading-relaxed">{process.desc}</p>
                <div className="absolute bottom-0 left-0 h-1 bg-accent-primary w-0 group-hover:w-full transition-all duration-500 rounded-b-3xl" />
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}
