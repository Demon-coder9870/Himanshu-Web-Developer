import { motion } from 'framer-motion';
import { Download, Briefcase, GraduationCap, Code2, Award, Mail, Phone, MapPin } from 'lucide-react';
import SEO from '@/components/common/SEO';
import Container from '@/components/common/Container';
import SectionTitle from '@/components/common/SectionTitle';
import TimelineItem from '@/components/resume/TimelineItem';
import Button from '@/components/common/Button';
import { profile } from './index';

export const experience = [
  {
    id: 1,
    role: "Senior Web Developer",
    company: "Applaud Web Media Pvt. Ltd.",
    type: "Full-time",
    location: "Dehradun, Uttarakhand, India",
    duration: "Sep 2021 - Present",
    description: [
      "Develop and maintain responsive, high-performance web interfaces using React.js, Next.js, JavaScript, HTML5, CSS3, and Bootstrap.",
      "Build reusable components and clean frontend architecture for modern websites and web applications.",
      "Convert UI/UX designs into pixel-perfect responsive layouts.",
      "Collaborate with designers, backend developers, and project teams to deliver production-ready websites.",
      "Improve website speed, usability, accessibility, and cross-browser compatibility.",
      "Work on client projects involving business websites, landing pages, dashboards, and WordPress-based solutions."
    ],
  },
  {
    id: 2,
    role: "Web Developer",
    company: "PEARL ORGANISATION™",
    type: "Full-time",
    location: "Dehradun, Uttarakhand, India",
    duration: "Sep 2019 - Sep 2021",
    description: [
      "Built responsive websites and frontend interfaces using HTML, CSS, JavaScript, jQuery, Bootstrap, and React.js.",
      "Created clean and mobile-friendly layouts from design references.",
      "Worked on website maintenance, UI improvements, and frontend bug fixing.",
      "Integrated frontend pages with backend functionality and CMS platforms.",
      "Improved user experience through better visual layout, responsiveness, and interaction."
    ],
  },
  {
    id: 3,
    role: "Web Designer",
    company: "Cynoteck Technology Solutions",
    type: "Internship",
    location: "Dehradun, Uttarakhand, India",
    duration: "May 2019 - Aug 2019",
    description: [
      "Designed and developed basic website layouts using HTML, CSS, Bootstrap, and JavaScript.",
      "Learned professional web design workflows, responsive design, and cross-browser testing.",
      "Assisted with website updates, UI fixes, and landing page creation."
    ],
  },
];

export const education = [
  {
    id: 1,
    institution: "Shri Guru Ram Rai Institute Of Technology & Science",
    degree: "Bachelor of Science in Information Technology",
    field: "Computer/Information Technology",
    duration: "2016 - 2019",
  },
  {
    id: 2,
    institution: "Sgrr Public School Racecourse",
    degree: "12th Class (Inter)",
    field: "Science",
    duration: "2014 - 2016",
  },
  {
    id: 3,
    institution: "Sgrr Public School Racecourse",
    degree: "10th Class (High School)",
    field: "General",
    duration: "2012 - 2014",
  },
];

export const skills = [
  {
    category: "Frontend Development",
    items: [
      "HTML5", "CSS3", "JavaScript", "React.js", "Next.js", "React Native", 
      "jQuery", "TypeScript", "Redux", "Context API", "REST API Integration", 
      "Responsive Web Design", "Mobile-First Design", "Cross-Browser Compatibility", 
      "Web Accessibility", "SEO-Friendly Frontend Development", "Performance Optimization"
    ],
  },
  {
    category: "UI / Styling",
    items: [
      "Bootstrap 4", "Bootstrap 5", "Tailwind CSS", "CSS Modules", "Sass / SCSS", 
      "Material UI", "Figma to HTML", "Pixel-Perfect UI", "Component-Based Design", 
      "Animation Effects", "Framer Motion"
    ],
  },
  {
    category: "CMS / Website Builders",
    items: [
      "WordPress", "Elementor", "WooCommerce Basics", "Custom Theme Editing", 
      "Landing Page Design", "Business Website Development"
    ],
  },
  {
    category: "Tools & Workflow",
    items: [
      "Git", "GitHub", "VS Code", "Chrome DevTools", "npm", "Yarn", "Vercel", 
      "Netlify", "Agile Workflow", "Debugging", "Browser Testing"
    ],
  },
  {
    category: "Programming & Basics",
    items: [
      "C Programming", "Data Structures Basics", "API Basics", "JSON", 
      "Web Hosting Basics", "Domain and DNS Basics"
    ],
  },
];

interface HeaderInfo {
  icon: any;
  label: string;
  value: string;
  href?: string;
}

export default function Resume() {
  const headerInfo: HeaderInfo[] = [
    { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: 'WhatsApp', value: profile.phone, href: `https://wa.me/919870905707` },
    { icon: MapPin, label: 'Location', value: profile.location },
    { icon: Briefcase, label: 'Current Role', value: profile.title },
  ];

  return (
    <>
      <SEO 
        title="Resume"
        description="Explore Himanshu Verma's professional background, work experience as a Senior Web Developer, technical skills, and educational qualifications."
        url="https://himanshuverma.dev/resume"
        image="/resume_og_image_1778742094574.png"
      />
      
      <Container className="py-20">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-20">
          <SectionTitle 
            title="My Professional Path" 
            subtitle="Resume" 
            align="left"
          />
          <Button 
            size="md" 
            icon={Download} 
            className="w-fit"
            href={profile.resumeUrl}
            download="Himanshu_Verma_Resume.pdf"
          >
            Download PDF Resume
          </Button>
        </div>

        {/* Header Info Card */}
        <div className="glass-card p-10 md:p-16 rounded-[3rem] mb-20 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent-primary/10 to-transparent" />
           <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                 <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{profile.name}</h2>
                 <p className="text-2xl text-accent-primary font-medium mb-8">{profile.role}</p>
                 <p className="text-slate-400 leading-relaxed max-w-xl">
                   {profile.summary}
                 </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 {headerInfo.map((item, i) => (
                   <div key={i} className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-accent-primary/10 flex items-center justify-center shrink-0">
                         <item.icon size={18} className="text-accent-primary" />
                      </div>
                      <div>
                         <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">{item.label}</p>
                         {item.href ? (
                           <a href={item.href} className="text-white hover:text-accent-primary transition-colors font-medium break-all">{item.value}</a>
                         ) : (
                           <p className="text-white font-medium">{item.value}</p>
                         )}
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-20">
          {/* Main Timeline */}
          <div className="lg:col-span-2 space-y-20">
            {/* Experience */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-12 flex items-center gap-4">
                <Briefcase size={32} className="text-accent-primary" />
                Work Experience
              </h3>
              <div className="space-y-4">
                {experience.map((item, i) => (
                  <TimelineItem key={item.id} item={item} index={i} type="experience" />
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-12 flex items-center gap-4">
                <GraduationCap size={32} className="text-accent-secondary" />
                Education
              </h3>
              <div className="space-y-4">
                {education.map((item, i) => (
                  <TimelineItem key={item.id} item={item} index={i} type="education" />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Skills & Certs */}
          <div className="space-y-16">
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-4">
                <Code2 size={24} className="text-accent-tertiary" />
                Expertise
              </h3>
              <div className="space-y-10">
                {skills.slice(0, 3).map((cat) => (
                  <div key={cat.category}>
                    <h4 className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-4">{cat.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {cat.items.map((skill) => (
                        <span key={skill} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white text-xs font-medium hover:border-accent-primary transition-colors">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 glass-card rounded-3xl border-accent-primary/20">
               <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-4">
                <Award size={24} className="text-accent-primary" />
                Certifications
              </h3>
              <ul className="space-y-6">
                {[
                  'Frontend Development with React',
                  'Meta Front-End Developer',
                  'Next.js Advanced Patterns',
                  'UI/UX Design Fundamentals'
                ].map((cert, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-primary mt-2 shrink-0" />
                    <span className="text-slate-300 text-sm leading-relaxed">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
