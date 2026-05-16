import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, User, Share2 } from 'lucide-react';
import { Facebook, Twitter, Linkedin as LinkedinIcon } from '@/components/common/BrandIcons';
import SEO from '@/components/common/SEO';
import Container from '@/components/common/Container';
import BlogCard from '@/components/cards/BlogCard';
import { blogs } from './index';

export default function BlogDetail({ post, relatedPosts }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div className="min-h-screen flex items-center justify-center text-white">Loading...</div>;
  }

  if (!post) return null;

  return (
    <>
      <SEO title={post.title} description={post.excerpt} />
      
      <article className="py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-12"
          >
            <Link href="/blog" className="inline-flex items-center gap-2 text-slate-400 hover:text-accent-primary transition-colors group">
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Link>
          </motion.div>

          <header className="max-w-4xl mb-16">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="flex items-center gap-4 mb-6"
             >
                <span className="px-4 py-1 rounded-full bg-accent-primary/10 text-accent-primary text-xs font-bold uppercase tracking-widest border border-accent-primary/20">
                  {post.category}
                </span>
                <div className="h-px w-10 bg-white/10" />
                <div className="flex items-center gap-6 text-sm text-slate-400">
                  <span className="flex items-center gap-2"><Calendar size={16} className="text-accent-primary" /> {post.date}</span>
                  <span className="flex items-center gap-2"><Clock size={16} className="text-accent-primary" /> {post.readTime}</span>
                </div>
             </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-5xl font-black text-white leading-tight mb-10"
              >
                {post.title}
             </motion.h1>

             <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex items-center justify-between py-8 border-y border-white/5"
             >
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-full bg-accent-primary/20 flex items-center justify-center font-bold text-accent-primary border border-accent-primary/30">
                      HV
                   </div>
                   <div>
                      <p className="text-white font-bold">{post.author}</p>
                      <p className="text-slate-500 text-xs">Senior Web Developer</p>
                   </div>
                </div>
                
                <div className="flex items-center gap-4">
                   <span className="text-slate-500 text-xs font-bold uppercase tracking-widest hidden sm:block">Share:</span>
                   <div className="flex gap-2">
                      {[Facebook, Twitter, LinkedinIcon].map((Icon, i) => (
                        <button key={i} className="p-3 rounded-xl bg-white/5 hover:bg-accent-primary hover:text-dark transition-all duration-300">
                          <Icon size={18} />
                        </button>
                      ))}
                   </div>
                </div>
             </motion.div>
          </header>

          <div className="grid lg:grid-cols-3 gap-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-2"
            >
              <div className="aspect-video rounded-[3rem] bg-gradient-to-br from-dark-lighter to-dark border border-white/10 mb-12 relative overflow-hidden group">
                <Image 
                  src={post.image} 
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-60" />
              </div>

              <div className="prose prose-invert prose-lg max-w-none">
                 <p className="text-xl text-slate-300 leading-relaxed mb-8 font-medium">
                   {post.excerpt}
                 </p>
                 <div className="text-slate-400 leading-relaxed space-y-6">
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                 </div>
              </div>
            </motion.div>

            <aside className="space-y-12">
               <div className="glass-card p-8 rounded-3xl sticky top-32">
                  <h3 className="text-xl font-bold text-white mb-8 border-b border-white/5 pb-4">Table of Contents</h3>
                  <ul className="space-y-4 text-sm text-slate-400">
                     <li className="hover:text-accent-primary transition-colors cursor-pointer flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent-primary" /> Introduction
                     </li>
                     <li className="hover:text-accent-primary transition-colors cursor-pointer flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent-primary" /> Key Takeaways
                     </li>
                     <li className="hover:text-accent-primary transition-colors cursor-pointer flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent-primary" /> Implementation Details
                     </li>
                     <li className="hover:text-accent-primary transition-colors cursor-pointer flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent-primary" /> Final Thoughts
                     </li>
                  </ul>
                  
                  <div className="mt-12 p-6 bg-accent-primary/5 rounded-2xl border border-accent-primary/10">
                     <h4 className="text-white font-bold mb-4">Newsletter</h4>
                     <p className="text-xs text-slate-400 mb-6">Stay updated with the latest articles and resources.</p>
                     <div className="space-y-3">
                        <input type="email" placeholder="Email address" className="w-full bg-dark px-4 py-3 rounded-xl text-sm border border-white/10 focus:border-accent-primary outline-none" />
                        <button className="w-full py-3 rounded-xl bg-accent-primary text-dark font-bold text-sm">Subscribe</button>
                     </div>
                  </div>
               </div>
            </aside>
          </div>
        </Container>

        {/* Related Posts */}
        <div className="mt-40 border-t border-white/5 pt-32">
           <Container>
              <div className="flex items-center justify-between mb-16">
                 <h2 className="text-3xl font-bold text-white">Continue Reading</h2>
                 <Link href="/blog" className="text-accent-primary hover:underline font-bold">View all posts</Link>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                 {relatedPosts.map((rp, i) => (
                   <BlogCard key={rp.id} post={rp} index={i} />
                 ))}
              </div>
           </Container>
        </div>
      </article>
    </>
  );
}

export async function getStaticPaths() {
  const paths = blogs.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = blogs.find((b) => b.slug === params.slug);
  const relatedPosts = blogs
    .filter((b) => b.slug !== params.slug)
    .slice(0, 3);

  return {
    props: {
      post,
      relatedPosts,
    },
  };
}
