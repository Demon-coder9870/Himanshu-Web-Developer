import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import Navbar from './Navbar';
import Footer from './Footer';
import CustomCursor from '../common/CustomCursor';
import MouseSpotlight from '../common/MouseSpotlight';
import ScrollProgress from '../common/ScrollProgress';
import BackToTop from '../common/BackToTop';

import BackgroundGlow from '../common/BackgroundGlow';

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col selection:bg-accent-primary/30 selection:text-white relative overflow-hidden">
      <BackgroundGlow />
      <ScrollProgress />
      <CustomCursor />
      <MouseSpotlight />
      <Navbar />
      
      <main className="flex-grow pt-24 lg:pt-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={router.route}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Layout;
