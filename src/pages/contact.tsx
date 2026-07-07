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

        <div className="grid lg:grid-cols-5 gap-16 mt-20">
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-2 space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold text-white">Contact Information</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                Have a project in mind or just want to say hi? I'd love to hear from you. Feel free to reach out through the form or my social channels.
              </p>
            </motion.div>

            <div className="space-y-6">
              {contactItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="glass-card p-8 rounded-3xl group hover:border-accent-primary/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-6">
                    <div className={`w-14 h-14 rounded-2xl bg-${item.color}/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500`}>
                      <item.icon size={28} className={`text-${item.color}`} />
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.2em] mb-2">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-xl font-bold text-white hover:text-accent-primary transition-colors">{item.value}</a>
                      ) : (
                        <p className="text-xl font-bold text-white">{item.value}</p>
                      )}
                      <p className="text-slate-400 text-sm mt-1">{item.sub}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-10">
              <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Follow My Socials</h4>
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
                    className="p-4 rounded-2xl bg-white/5 hover:bg-accent-primary hover:text-dark transition-all duration-500"
                  >
                    <Icon size={24} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form Area */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-3"
          >
            <ContactForm />
          </motion.div>
        </div>
      </Container>
    </>
  );
}
