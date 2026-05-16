import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '@/components/common/SEO';
import Container from '@/components/common/Container';
import SectionTitle from '@/components/common/SectionTitle';
import ProjectCard from '@/components/cards/ProjectCard';

export const projects = [
  {
    id: 1,
    title: "NexGen Digital Agency Portal",
    slug: "nexgen-digital-agency",
    category: "Frontend",
    tech: ["Next.js 14", "React", "Tailwind CSS", "Framer Motion"],
    description: "A high-performance corporate platform for a leading digital agency. Focused on lightning-fast performance (98+ Lighthouse score) and lead generation through interactive forms and seamless user journeys.",
    features: ["Dynamic Project Case Studies", "Interactive Service Grid", "SEO-Optimized Blog Engine", "Advanced Contact Workflows"],
    challenges: "The client needed complex, high-resolution animations without sacrificing mobile performance or Core Web Vitals.",
    solutions: "Leveraged Next.js Server Components and advanced Framer Motion orchestration to ensure smooth 60fps animations while keeping the main thread clear.",
    image: "/projects/project1.png",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Elite Realty Landing System",
    slug: "elite-realty-landing",
    category: "Landing Page",
    tech: ["React.js", "Bootstrap 5", "AOS.js", "Google Maps API"],
    description: "A conversion-optimized real estate landing page that increased property inquiries by 35% through strategic UI placement and interactive property exploration features.",
    features: ["Interactive Property Gallery", "Direct Inquiry CRM Integration", "Dynamic Neighborhood Maps", "Mobile-First Virtual Tours"],
    challenges: "Integrating multiple heavy property listing APIs while maintaining a sub-2-second load time on 3G connections.",
    solutions: "Implemented aggressive code-splitting and a custom React middleware to fetch and cache listing data efficiently.",
    image: "/projects/project2.png",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "VibeShop E-commerce Frontend",
    slug: "vibeshop-ecommerce",
    category: "E-commerce",
    tech: ["Next.js", "Redux Toolkit", "Stripe API", "Styled Components"],
    description: "A modern, product-focused storefront featuring complex state management for real-time inventory updates and a frictionless multi-step checkout process.",
    features: ["Real-time Inventory Sync", "Persistent Shopping Cart", "Dynamic Discount Engine", "One-Click Checkout UI"],
    challenges: "Handling complex client-side state for a 10,000+ item catalog without UI lag.",
    solutions: "Utilized Redux Toolkit with RTK Query for efficient data fetching and normalized state management to ensure instant UI updates.",
    image: "/projects/project3.png",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Corporate WordPress Ecosystem",
    slug: "corporate-wp-ecosystem",
    category: "WordPress",
    tech: ["PHP", "Elementor Pro", "Custom Post Types", "REST API"],
    description: "A highly customized WordPress solution for an international manufacturing firm, featuring deep integration with their legacy ERP system.",
    features: ["Custom ERP Data Sync", "Multi-language Support (WPML)", "Dynamic Career Portal", "Automated Resource Library"],
    challenges: "The client required a 'no-code' editing experience while maintaining strict brand guidelines and high-performance requirements.",
    solutions: "Developed a custom Elementor widget library and optimized the database queries to reduce server response time by 45%.",
    image: "/projects/project4.png",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "DataPulse Admin Dashboard",
    slug: "datapulse-admin",
    category: "Dashboard",
    tech: ["React", "Chart.js", "React Query", "Tailwind"],
    description: "An enterprise-grade analytics dashboard designed to visualize massive datasets in real-time, helping stakeholders make data-driven decisions faster.",
    features: ["Real-time Data Streaming", "Customizable Widget Layouts", "Advanced Export Engine", "Role-Based Access Control UI"],
    challenges: "Rendering large-scale line charts with 50,000+ data points without freezing the browser tab.",
    solutions: "Implemented canvas-based rendering for charts and used Web Workers to handle data processing off the main thread.",
    image: "/projects/project5.png",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Personal Brand Architecture",
    slug: "brand-architecture",
    category: "Personal Website",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS", "Three.js"],
    description: "A cutting-edge personal portfolio for a high-profile creative director, featuring immersive 3D elements and narrative-driven scrolling.",
    features: ["3D Hero Interactions", "Scroll-triggered Storytelling", "Custom Magnetic Interaction UI", "Dark Mode Architecture"],
    challenges: "Maintaining accessibility (A11y) while implementing non-standard navigation and heavy 3D visuals.",
    solutions: "Ensured full keyboard navigation support and provided fallback content for low-end devices while keeping the 3D experience premium for others.",
    image: "/projects/project6.png",
    liveUrl: "#",
    githubUrl: "#",
  },
];

const categories = ['All', 'Frontend', 'Landing Page', 'WordPress', 'Dashboard', 'Personal Website', 'E-commerce'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <>
      <SEO 
        title="Portfolio" 
        description="A showcase of high-performance web applications, landing pages, and custom WordPress solutions developed by Himanshu Verma."
        url="https://himanshuverma.dev/projects"
      />
      
      <Container className="py-20">
        <SectionTitle 
          title="My Creative Works" 
          subtitle="Portfolio" 
        />

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-full font-bold transition-all duration-300 border ${
                activeCategory === cat 
                ? 'bg-accent-primary text-dark border-accent-primary shadow-lg shadow-accent-primary/20 scale-105' 
                : 'bg-white/5 text-slate-400 border-white/10 hover:border-accent-primary hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="text-center py-20"
          >
            <p className="text-slate-400 text-xl">No projects found in this category.</p>
          </motion.div>
        )}
      </Container>
    </>
  );
}
