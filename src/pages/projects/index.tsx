import { motion, AnimatePresence } from 'framer-motion';
import SEO from '@/components/common/SEO';
import Container from '@/components/common/Container';
import SectionTitle from '@/components/common/SectionTitle';
import ProjectCard from '@/components/cards/ProjectCard';

export const projects = [
  {
    id: 1,
    title: "Aplu Push Notifications",
    slug: "aplu-digital",
    category: "Dashboard",
    tech: ["React", "Node.js", "Firebase", "WebSockets"],
    description: "A scalable push notification delivery service enabling real-time messaging and audience engagement with high delivery rates.",
    features: ["Real-time Campaign Delivery", "Audience Segmentation", "Automated Workflows", "Analytics Dashboard"],
    challenges: "Delivering millions of notifications concurrently with minimal latency.",
    solutions: "Utilized Redis caching and WebSockets for real-time delivery and analytics tracking.",
    image: "/projects/aplu.png",
    liveUrl: "https://aplu.io/",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Hollywood66 E-commerce",
    slug: "hollywood66-entertainment",
    category: "E-commerce",
    tech: ["Next.js", "Stripe API", "Tailwind CSS", "Redux"],
    description: "A premium e-commerce platform for exclusive Hollywood merchandise with a highly optimized shopping experience.",
    features: ["High-resolution Product Galleries", "Seamless Checkout Flow", "Dynamic Inventory Management", "Custom Search Engine"],
    challenges: "Building a complex shopping cart system that synced instantly across multiple tabs.",
    solutions: "Leveraged Redux Toolkit and React Query for synchronized state management and caching.",
    image: "/projects/hollywood66.png",
    liveUrl: "https://hollywood66.com/",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Wizam Online Education",
    slug: "wizam-ecommerce",
    category: "Frontend",
    tech: ["React", "Video.js", "Tailwind CSS", "Express"],
    description: "A comprehensive online learning platform featuring video streaming, interactive quizzes, and student progress tracking.",
    features: ["Adaptive Video Streaming", "Interactive Course Modules", "Real-time Progress Tracking", "Student Dashboard"],
    challenges: "Ensuring smooth video playback across all devices and fluctuating network conditions.",
    solutions: "Implemented adaptive bitrate streaming (HLS) and an optimized CDN delivery strategy.",
    image: "/projects/wizam.png",
    liveUrl: "https://wizam.com/",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "IndiasPortal Ecosystem",
    slug: "indiasportal-ecosystem",
    category: "WordPress",
    tech: ["PHP", "Elementor Pro", "Custom Post Types", "REST API"],
    description: "A highly customized WordPress solution for an international manufacturing firm, featuring deep integration with their legacy ERP system.",
    features: ["Custom ERP Data Sync", "Multi-language Support (WPML)", "Dynamic Career Portal", "Automated Resource Library"],
    challenges: "The client required a 'no-code' editing experience while maintaining strict brand guidelines and high-performance requirements.",
    solutions: "Developed a custom Elementor widget library and optimized the database queries to reduce server response time by 45%.",
    image: "/projects/indiasportal.png",
    liveUrl: "https://indiasportal.com/",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "NoroPay Payment Dashboard",
    slug: "noropay-dashboard",
    category: "Dashboard",
    tech: ["React", "Chart.js", "React Query", "Tailwind"],
    description: "An enterprise-grade analytics dashboard designed to visualize massive datasets in real-time, helping stakeholders make data-driven decisions faster.",
    features: ["Real-time Data Streaming", "Customizable Widget Layouts", "Advanced Export Engine", "Role-Based Access Control UI"],
    challenges: "Rendering large-scale line charts with 50,000+ data points without freezing the browser tab.",
    solutions: "Implemented canvas-based rendering for charts and used Web Workers to handle data processing off the main thread.",
    image: "/projects/noropay.png",
    liveUrl: "https://www.noropay.com/",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Soulmate Mattress",
    slug: "soulmate-mattress",
    category: "E-commerce",
    tech: ["Next.js", "React", "Shopify API", "Tailwind CSS"],
    description: "A highly performant D2C e-commerce platform for a premium mattress brand, designed for high conversion rates and an exceptional user shopping experience.",
    features: ["Custom Product Configurator", "Seamless Checkout Integration", "Dynamic Pricing Engine", "Advanced Review System"],
    challenges: "Integrating custom product bundles and ensuring fast page load speeds despite high-resolution product imagery.",
    solutions: "Implemented Next.js Image Optimization and edge caching for product pages to achieve sub-second load times.",
    image: "/projects/soulmate.png",
    liveUrl: "https://soulmatemattress.com/",
    githubUrl: "#",
  },
  {
    id: 7,
    title: "2CentCapital Financial Portal",
    slug: "2centcapital-financial",
    category: "Dashboard",
    tech: ["React", "TypeScript", "Tailwind CSS", "Redux"],
    description: "A robust financial management dashboard providing real-time capital analytics and advanced investment tracking.",
    features: ["Real-time Market Data", "Portfolio Analytics", "Secure Document Vault", "Automated Reporting"],
    challenges: "Ensuring highly secure, real-time data streaming without compromising on performance.",
    solutions: "Implemented WebSocket connections with strict data validation and optimized rendering.",
    image: "/projects/2centcapital.png",
    liveUrl: "https://www.2centscapital.com/",
    githubUrl: "#",
  },
  {
    id: 8,
    title: "GetDNS Network Management",
    slug: "getdns-network",
    category: "Frontend",
    tech: ["Next.js", "Tailwind CSS", "API Integration", "Zustand"],
    description: "A powerful platform for domain and DNS management, providing users with a streamlined interface for complex network configurations.",
    features: ["DNS Record Management", "Domain Analytics", "Bulk Updates", "Role-based Access"],
    challenges: "Designing an intuitive interface for highly technical DNS configurations.",
    solutions: "Created a wizard-based UI with real-time validation and clear error messaging.",
    image: "/projects/getdns.png",
    liveUrl: "https://getdnsinfo.com/",
    githubUrl: "#",
  }
];

export default function Projects() {

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


        {/* Project Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </>
  );
}
