import { motion } from 'framer-motion';
import { Mail, MapPin, MessageSquare, Phone } from 'lucide-react';
import { Linkedin, Twitter, Instagram } from '@/components/common/BrandIcons';
import SEO from '@/components/common/SEO';
import Container from '@/components/common/Container';
import SectionTitle from '@/components/common/SectionTitle';
import ContactForm from '@/components/contact/ContactForm';
import { profile } from '@/pages/index';

interface ContactItem {
  icon: any;
  label: string;
  value: string;
  sub: string;
  href?: string;
  color: string;
}

export default function Contact() {
  const contactItems: ContactItem[] = [
    { 
      icon: Mail, 
      label: 'Email', 
      value: profile.email, 
      sub: 'Send me a message anytime.',
      href: `mailto:${profile.email}`,
      color: 'accent-primary'
    },
    { 
      icon: Phone, 
      label: 'WhatsApp', 
      value: profile.phone, 
      sub: 'Message me on WhatsApp.',
      href: `https://wa.me/919870905707`,
      color: 'accent-primary'
    },
    { 
      icon: MapPin, 
      label: 'Location', 
      value: profile.location, 
      sub: 'Dehradun, Uttarakhand, India.',
      color: 'accent-secondary'
    },
    { 
      icon: MessageSquare, 
      label: 'Availability', 
      value: 'Freelance & Full-time', 
      sub: 'Available for new projects.',
      color: 'accent-tertiary'
    },
  ];

  return (
    <>
      <SEO title="Contact Me" />
      
      <Container className="py-20">
        <SectionTitle 
          title="Let's Build Something Great" 
          subtitle="Get In Touch" 
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mt-16 lg:mt-24 items-center">
          {/* Contact Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="relative p-8 sm:p-10 lg:p-14 rounded-[3rem] overflow-hidden group border border-white/5"
          >
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/20 via-accent-secondary/10 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute inset-0 bg-dark/40 backdrop-blur-md" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10 space-y-12">
              <div className="space-y-4">
                <h3 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">Let's Talk</h3>
                <p className="text-slate-300 text-lg leading-relaxed max-w-md">
                  Have a project in mind or just want to say hi? I'd love to hear from you. Feel free to reach out through the form or my social channels.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {contactItems.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex flex-col gap-4 p-5 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent-primary/50 transition-all duration-300 group/card"
                  >
                    <div className={`w-12 h-12 rounded-2xl bg-${item.color}/20 flex items-center justify-center shrink-0 group-hover/card:scale-110 group-hover/card:rotate-3 transition-all duration-500`}>
                      <item.icon size={24} className={`text-${item.color}`} />
                    </div>
                    <div>
                      <p className="text-slate-400 text-[11px] font-bold uppercase tracking-wider mb-1">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-base sm:text-lg font-bold text-white hover:text-accent-primary transition-colors block truncate">{item.value}</a>
                      ) : (
                        <p className="text-base sm:text-lg font-bold text-white truncate">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="pt-4">
                <h4 className="text-slate-400 font-bold mb-5 uppercase tracking-widest text-[11px]">Follow My Socials</h4>
                <div className="flex gap-4">
                  {[
                    { Icon: Linkedin, href: profile.socials.linkedin },
                    { Icon: Twitter, href: profile.socials.twitter },
                    { Icon: Instagram, href: profile.socials.instagram },
                  ].map(({ Icon, href }, i) => (
                    <a
                      key={i}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white hover:bg-accent-primary hover:text-dark hover:-translate-y-1 transition-all duration-500"
                    >
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Area */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:pl-6 xl:pl-10"
          >
            <ContactForm />
          </motion.div>
        </div>
      </Container>
    </>
  );
}
