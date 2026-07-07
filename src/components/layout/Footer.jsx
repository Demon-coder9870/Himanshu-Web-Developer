import Link from 'next/link';
import { Mail, MapPin, ArrowUp, Phone } from 'lucide-react';
import { Linkedin, Twitter, Instagram } from '../common/BrandIcons';
import Container from '../common/Container';
import { profile } from '@/pages/index';

const Footer = () => {
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-dark-lighter border-t border-white/5 pt-20 pb-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="text-3xl font-bold text-white tracking-tighter">
              Himanshu <span className="text-accent-primary">Verma</span>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              Senior Web Developer specializing in building exceptional digital experiences that are fast, accessible, and visually stunning.
            </p>
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
                  className="p-3 rounded-xl bg-white/5 hover:bg-accent-primary hover:text-dark transition-all duration-300"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-xl mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Projects', 'Services', 'Resume', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-slate-400 hover:text-accent-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-xl mb-8">Services</h4>
            <ul className="space-y-4">
              {[
                'Frontend Development',
                'React.js Development',
                'Next.js Website Development',
                'Responsive Web Design',
                'WordPress Solutions',
                'MERN Stack Development',
                'UI/UX Design',
                'SEO Optimization'
              ].map((item) => (
                <li key={item} className="text-slate-400 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-xl mb-8">Contact Info</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <Mail className="text-accent-primary shrink-0" size={20} />
                <a href={`mailto:${profile.email}`} className="text-slate-400 hover:text-white transition-colors">
                  {profile.email}
                </a>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="text-accent-primary shrink-0" size={20} />
                <a href={`https://wa.me/919870905707`} className="text-slate-400 hover:text-white transition-colors">
                  {profile.phone}
                </a>
              </li>
              <li className="flex items-start gap-4 text-slate-400">
                <MapPin className="text-accent-primary shrink-0" size={20} />
                <span>{profile.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Himanshu Verma. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-slate-400 hover:text-accent-primary transition-colors text-sm group"
          >
            Back to top
            <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
