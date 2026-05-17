import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Container from '../common/Container';
import Button from '../common/Button';
import MagneticButton from '../common/MagneticButton';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Services', path: '/services' },
    { name: 'Resume', path: '/resume' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [router.pathname]);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'py-4 bg-dark/80 backdrop-blur-xl border-b border-white/5 shadow-2xl' : 'py-8 bg-transparent'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          <Link href="/" className="text-3xl font-bold text-white tracking-tighter group">
            Himanshu <span className="text-accent-primary group-hover:text-white transition-colors">CodeLab</span>
          </Link>

          <div className="hidden lg:flex items-center gap-4">
            {navLinks.map((link) => (
              <MagneticButton key={link.path} className="">
                <Link 
                  href={link.path}
                  className={`px-4 py-2 text-[13px] font-bold uppercase tracking-widest transition-all duration-300 hover:text-accent-primary relative group ${
                    router.pathname === link.path ? 'text-accent-primary' : 'text-slate-400'
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-4 h-0.5 bg-accent-primary transition-all duration-300 ${
                    router.pathname === link.path ? 'w-[calc(100%-32px)]' : 'w-0 group-hover:w-[calc(100%-32px)]'
                  }`} />
                </Link>
              </MagneticButton>
            ))}
            <Link href="/contact" className="ml-4">
              <Button size="md">Hire Me</Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-dark-lighter border-b border-white/5 overflow-hidden"
          >
            <div className="flex flex-col p-8 gap-6 text-center">
              {navLinks.map((link) => (
                <Link 
                  key={link.path}
                  href={link.path}
                  className={`text-2xl font-bold uppercase tracking-widest ${
                    router.pathname === link.path ? 'text-accent-primary' : 'text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link href="/contact" className="pt-4">
                <Button size="lg" className="w-full">Hire Me</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
