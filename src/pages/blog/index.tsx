import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
import SEO from '@/components/common/SEO';
import Container from '@/components/common/Container';
import SectionTitle from '@/components/common/SectionTitle';
import BlogCard from '@/components/cards/BlogCard';

export const blogs = [
  {
    id: 1,
    title: "Why React.js Is Still Powerful for Modern Frontend Development",
    slug: "why-reactjs-is-still-powerful",
    category: "Development",
    date: "May 10, 2024",
    readTime: "5 min read",
    excerpt: "React.js continues to dominate the frontend landscape. Discover why it remains the top choice for developers in 2024.",
    author: "Himanshu Verma",
    image: "/blog/blog1.png",
    content: `
      <p>React.js has been a cornerstone of web development for years, and its ecosystem continues to evolve. In 2024, with the rise of Server Components and frameworks like Next.js, React is more powerful than ever.</p>
      <h2>The Component-Based Architecture</h2>
      <p>One of the key reasons for React's longevity is its component-based approach. This allows developers to build complex UIs from small, isolated pieces of code, making projects more maintainable and scalable.</p>
      <blockquote class="border-l-4 border-accent-primary pl-6 py-4 italic bg-accent-primary/5 rounded-r-2xl my-10 text-white">
        "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes."
      </blockquote>
      <p>Beyond just the core library, the vast ecosystem of hooks, state management libraries, and UI frameworks ensures that there's always a solution for every problem.</p>
    `,
  },
  {
    id: 2,
    title: "Next.js vs React: What Should You Choose?",
    slug: "nextjs-vs-react-what-to-choose",
    category: "Comparison",
    date: "May 5, 2024",
    readTime: "7 min read",
    excerpt: "Struggling to decide between Next.js and React? We break down the differences and help you choose the right tool for your project.",
    author: "Himanshu Verma",
    image: "/blog/blog2.png",
    content: `
      <p>While React is a library for building user interfaces, Next.js is a full-fledged framework built on top of React. Choosing between them depends on your project requirements.</p>
      <h2>Server-Side Rendering (SSR) vs. Client-Side Rendering (CSR)</h2>
      <p>Next.js excels in SSR and Static Site Generation (SSG), which are crucial for SEO and initial load performance. Standard React apps typically rely on CSR, which can be slower for search engine crawlers.</p>
      <h2>Built-in Features</h2>
      <p>Next.js provides out-of-the-box support for routing, API routes, and image optimization, which you'd have to set up manually in a pure React project.</p>
    `,
  },
  {
    id: 3,
    title: "How to Build Responsive Websites That Convert",
    slug: "build-responsive-websites-that-convert",
    category: "Design",
    date: "April 28, 2024",
    readTime: "6 min read",
    excerpt: "Responsive design is more than just making things fit. Learn how to design websites that drive user engagement and conversions.",
    author: "Himanshu Verma",
    image: "/blog/blog3.png",
    content: `
      <p>Creating a responsive website is no longer optional. With the majority of web traffic coming from mobile devices, your site must look great on every screen.</p>
      <h2>Fluid Grids and Flexible Images</h2>
      <p>Modern CSS tools like Flexbox and Grid make it easier to create layouts that adapt to different screen sizes. Images should also be flexible to prevent them from breaking the layout.</p>
      <h2>Mobile-First Approach</h2>
      <p>Starting your design with the smallest screens ensures that the most important content is prioritized and that the site remains functional even on limited hardware.</p>
    `,
  },
  {
    id: 4,
    title: "Frontend Performance Tips for Faster Websites",
    slug: "frontend-performance-tips",
    category: "Optimization",
    date: "April 20, 2024",
    readTime: "8 min read",
    excerpt: "Speed is crucial for user experience and SEO. Here are our top tips for optimizing your frontend performance.",
    author: "Himanshu Verma",
    image: "/blog/blog4.png",
    content: `
      <p>A slow website can frustrate users and hurt your search rankings. Optimizing performance should be a top priority for every frontend developer.</p>
      <h2>Image Optimization</h2>
      <p>Images often account for the largest portion of a page's weight. Using modern formats like WebP and implementing lazy loading can significantly reduce load times.</p>
      <h2>Code Splitting</h2>
      <p>Don't make your users download code they don't need. Code splitting allows you to break your bundle into smaller chunks that are loaded on demand.</p>
    `,
  },
  {
    id: 5,
    title: "WordPress vs Custom Frontend: Which Is Better?",
    slug: "wordpress-vs-custom-frontend",
    category: "Technology",
    date: "April 15, 2024",
    readTime: "10 min read",
    excerpt: "Choosing between WordPress and a custom frontend can be tough. We compare both options to help you make an informed decision.",
    author: "Himanshu Verma",
    image: "/blog/blog5.png",
    content: `
      <p>The choice between WordPress and a custom-built frontend depends on the balance between ease of use and flexibility.</p>
      <h2>The Case for WordPress</h2>
      <p>WordPress is excellent for content-heavy sites where non-technical users need to manage updates. The ecosystem of plugins provides quick solutions for many common features.</p>
      <h2>The Case for Custom Frontend</h2>
      <p>A custom-built site (e.g., using React or Next.js) offers unparalleled performance and design flexibility. It's often the better choice for complex web applications and unique brand experiences.</p>
    `,
  },
  {
    id: 6,
    title: "Mastering Tailwind CSS for Rapid Prototyping",
    slug: "mastering-tailwind-css",
    category: "Design",
    date: "April 10, 2024",
    readTime: "6 min read",
    excerpt: "Tailwind CSS has revolutionized the way we style websites. Learn how to use it effectively for rapid prototyping and clean designs.",
    author: "Himanshu Verma",
    image: "/blog/blog6.png",
    content: `
      <p>Tailwind CSS is a utility-first CSS framework that allows you to build custom designs without ever leaving your HTML.</p>
      <h2>Why Utility-First?</h2>
      <p>Instead of writing custom CSS for every component, you use predefined classes to style elements. This leads to smaller CSS bundles and faster development cycles.</p>
      <h2>Customization</h2>
      <p>While Tailwind provides a great set of defaults, it's also highly customizable. You can easily extend the default theme to match your brand's unique style.</p>
    `,
  },
  {
    id: 7,
    title: "Modern JavaScript Features You Should Be Using",
    slug: "modern-javascript-features",
    category: "Development",
    date: "April 5, 2024",
    readTime: "5 min read",
    excerpt: "JavaScript is constantly evolving. Here are some of the most useful modern features that will improve your coding workflow.",
    author: "Himanshu Verma",
    image: "/blog/blog7.png",
    content: `
      <p>JavaScript has come a long way since its inception. Modern ECMAScript versions have introduced features that make the language more powerful and easier to work with.</p>
      <h2>Optional Chaining and Nullish Coalescing</h2>
      <p>These features help you write cleaner code by safely accessing nested properties and providing default values for null or undefined variables.</p>
      <h2>Destructuring and Spread Operators</h2>
      <p>Destructuring allows you to extract data from arrays and objects with ease, while the spread operator makes it simple to combine and copy data structures.</p>
    `,
  },
  {
    id: 8,
    title: "The Importance of Web Accessibility (a11y)",
    slug: "importance-of-web-accessibility",
    category: "Development",
    date: "March 28, 2024",
    readTime: "7 min read",
    excerpt: "Making your website accessible is not just a legal requirement—it's the right thing to do. Learn how to improve accessibility in your projects.",
    author: "Himanshu Verma",
    image: "/blog/blog8.png",
    content: `
      <p>Web accessibility ensures that everyone, including people with disabilities, can perceive, understand, and interact with the web.</p>
      <h2>Semantic HTML</h2>
      <p>Using correct HTML elements like <main>, <nav>, and <header> provides context to screen readers and improves the overall accessibility of your site.</p>
      <h2>Color Contrast and Focus States</h2>
      <p>Ensuring sufficient color contrast and providing clear focus states are essential for users with visual impairments or those who navigate via keyboard.</p>
    `,
  },
  {
    id: 9,
    title: "Effective SEO Strategies for Frontend Developers",
    slug: "seo-strategies-for-frontend",
    category: "Optimization",
    date: "March 20, 2024",
    readTime: "8 min read",
    excerpt: "SEO is not just for marketers. As a frontend developer, you play a crucial role in how well your site ranks on search engines.",
    author: "Himanshu Verma",
    image: "/blog/blog9.png",
    content: `
      <p>Search Engine Optimization (SEO) is the practice of improving your website's visibility on search engines like Google.</p>
      <h2>Meta Tags and Structured Data</h2>
      <p>Properly using meta tags and implementing structured data (JSON-LD) helps search engines understand your content and can lead to rich search results.</p>
      <h2>Performance and Core Web Vitals</h2>
      <p>Google's Core Web Vitals measure page load speed, interactivity, and visual stability. High scores in these areas are essential for good search rankings.</p>
    `,
  },
  {
    id: 10,
    title: "Bringing Your UI to Life with Framer Motion",
    slug: "ui-animations-with-framer-motion",
    category: "Design",
    date: "March 12, 2024",
    readTime: "6 min read",
    excerpt: "Animations can make your website feel more alive and engaging. Learn how to use Framer Motion to create stunning UI transitions.",
    author: "Himanshu Verma",
    image: "/blog/blog10.png",
    content: `
      <p>Framer Motion is a powerful animation library for React that makes it easy to create complex and high-performance animations.</p>
      <h2>Declarative Animations</h2>
      <p>With Framer Motion, you describe the end state of your animation, and the library handles the transitions for you, leading to much cleaner code.</p>
      <h2>Layout Animations</h2>
      <p>Framer Motion's layout animations allow you to animate changes in the size and position of elements with minimal effort.</p>
    `,
  },
  {
    id: 11,
    title: "Understanding React Server Components",
    slug: "understanding-react-server-components",
    category: "Development",
    date: "March 5, 2024",
    readTime: "9 min read",
    excerpt: "Server Components are the future of React. Learn how they work and how they can improve your application's performance.",
    author: "Himanshu Verma",
    image: "/blog/blog11.png",
    content: `
      <p>React Server Components (RSC) are a new way to build React applications that run primarily on the server, sending less JavaScript to the client.</p>
      <h2>Benefits of RSC</h2>
      <p>Server Components lead to smaller bundle sizes, faster initial load times, and a more seamless way to fetch data directly from your database or API.</p>
      <h2>When to Use Them</h2>
      <p>Server Components are ideal for data-fetching and non-interactive parts of your UI, while Client Components should still be used for interactive elements.</p>
    `,
  },
  {
    id: 12,
    title: "State Management in 2024: From Redux to Zustand",
    slug: "state-management-in-2024",
    category: "Development",
    date: "February 28, 2024",
    readTime: "7 min read",
    excerpt: "Redux is no longer the only game in town. Explore modern state management alternatives like Zustand, Jotai, and Recoil.",
    author: "Himanshu Verma",
    image: "/blog/blog12.png",
    content: `
      <p>Managing state in a large React application can be challenging. While Redux is still widely used, newer libraries offer simpler and more efficient alternatives.</p>
      <h2>The Rise of Zustand</h2>
      <p>Zustand has gained popularity for its minimalist API and ease of use, allowing developers to manage global state with very little boilerplate code.</p>
      <h2>Atomic State with Jotai</h2>
      <p>Libraries like Jotai and Recoil focus on atomic state, where you break your state into small, independent pieces called atoms, leading to better performance and predictability.</p>
    `,
  },
  {
    id: 13,
    title: "Building Scalable CSS with CSS Modules",
    slug: "scalable-css-with-modules",
    category: "Development",
    date: "February 20, 2024",
    readTime: "5 min read",
    excerpt: "CSS Modules provide a way to write scoped CSS that prevents style collisions. Learn how to use them for more maintainable projects.",
    author: "Himanshu Verma",
    image: "/blog/blog13.png",
    content: `
      <p>One of the biggest challenges in large-scale web development is managing CSS without styles from one component affecting another.</p>
      <h2>Scoped Styling</h2>
      <p>CSS Modules solve this by automatically generating unique class names for each component, ensuring that your styles remain isolated and predictable.</p>
      <h2>Integration with Next.js</h2>
      <p>Next.js has built-in support for CSS Modules, making it the default and easiest way to style components in a Next.js project.</p>
    `,
  },
  {
    id: 14,
    title: "The Future of Web Development: WebAssembly and Beyond",
    slug: "future-of-web-development",
    category: "Technology",
    date: "February 12, 2024",
    readTime: "8 min read",
    excerpt: "The web is evolving faster than ever. Explore emerging technologies like WebAssembly, AI-driven development, and the edge.",
    author: "Himanshu Verma",
    image: "/blog/blog14.png",
    content: `
      <p>WebAssembly (Wasm) is a binary instruction format that allows code written in languages like C++, Rust, and Go to run on the web at near-native speeds.</p>
      <h2>AI in Web Development</h2>
      <p>AI tools are increasingly being used to assist with code generation, automated testing, and even UI design, promising to significantly boost developer productivity.</p>
      <h2>Edge Computing</h2>
      <p>Deploying code to the edge (closer to the user) reduces latency and improves performance for users around the globe.</p>
    `,
  },
  {
    id: 15,
    title: "Creating Pixel-Perfect Designs from Figma",
    slug: "pixel-perfect-designs-from-figma",
    category: "Design",
    date: "February 5, 2024",
    readTime: "6 min read",
    excerpt: "Translating a design into code requires precision. Learn our best practices for achieving pixel-perfection in your frontend work.",
    author: "Himanshu Verma",
    image: "/blog/blog15.png",
    content: `
      <p>Converting a high-fidelity design from tools like Figma or Adobe XD into a working website is a critical skill for any frontend developer.</p>
      <h2>Understanding the Grid</h2>
      <p>Always use the same grid system in your code as the designer used in the design tool to ensure that layouts and spacing are consistent.</p>
      <h2>Exporting Assets Correctly</h2>
      <p>Ensure that you export images and icons in the correct formats and resolutions to maintain visual quality across different devices.</p>
    `,
  },
  {
    id: 16,
    title: "Best Practices for API Integration in React",
    slug: "api-integration-best-practices",
    category: "Development",
    date: "January 28, 2024",
    readTime: "7 min read",
    excerpt: "Fetching data from an API is a common task. Learn how to handle API integration, error states, and loading indicators effectively.",
    author: "Himanshu Verma",
    image: "/blog/blog16.png",
    content: `
      <p>Integrating with backend APIs is a core part of building modern web applications. Doing it right ensures a smooth experience for your users.</p>
      <h2>Using React Query for Data Fetching</h2>
      <p>Libraries like TanStack Query (React Query) handle caching, synchronization, and error handling for you, significantly simplifying your data-fetching logic.</p>
      <h2>Handling Loading and Error States</h2>
      <p>Always provide clear visual feedback to users when data is being fetched or if an error occurs during the process.</p>
    `,
  },
  {
    id: 17,
    title: "The Benefits of Static Site Generation (SSG)",
    slug: "benefits-of-ssg",
    category: "Optimization",
    date: "January 20, 2024",
    readTime: "5 min read",
    excerpt: "SSG is a powerful technique for building fast and secure websites. Learn why it's often the best choice for many web projects.",
    author: "Himanshu Verma",
    image: "/blog/blog17.png",
    content: `
      <p>Static Site Generation involves building your website's pages at build time, resulting in static HTML files that can be served quickly from a CDN.</p>
      <h2>Blazing Fast Performance</h2>
      <p>Because the pages are already built, there's no need for server-side processing when a user visits your site, leading to near-instant load times.</p>
      <h2>Improved Security</h2>
      <p>Static sites have a smaller attack surface than dynamic sites, as there's no database or server-side code to exploit during a request.</p>
    `,
  },
  {
    id: 18,
    title: "Mobile-First Design: Why It Matters More Than Ever",
    slug: "mobile-first-design-matters",
    category: "Design",
    date: "January 12, 2024",
    readTime: "6 min read",
    excerpt: "With mobile traffic dominating the web, a mobile-first approach is essential for modern web design. Learn why it should be your default strategy.",
    author: "Himanshu Verma",
    image: "/blog/blog18.png",
    content: `
      <p>Mobile-first design is a strategy where you start designing for the smallest screens first and then scale up for larger devices.</p>
      <h2>Focusing on Core Content</h2>
      <p>Designing for mobile forces you to prioritize the most important content and features, leading to a cleaner and more effective user experience.</p>
      <h2>Better Performance</h2>
      <p>Mobile-first sites tend to be lighter and faster, as they are optimized for slower mobile networks and less powerful hardware from the start.</p>
    `,
  },
  {
    id: 19,
    title: "How to Keep Your Dependency List Clean",
    slug: "keeping-dependencies-clean",
    category: "Development",
    date: "January 5, 2024",
    readTime: "4 min read",
    excerpt: "Dependency bloat can slow down your project and introduce security risks. Learn how to manage your dependencies effectively.",
    author: "Himanshu Verma",
    image: "/blog/blog19.png",
    content: `
      <p>It's easy to add 'one more library' to your project, but every dependency comes with a cost in terms of bundle size and maintenance.</p>
      <h2>Audit Regularly</h2>
      <p>Use tools like 'npm audit' to find and fix security vulnerabilities in your dependencies, and 'depcheck' to identify unused packages.</p>
      <h2>Prefer Native APIs</h2>
      <p>Before adding a library, check if you can achieve the same result using modern native JavaScript APIs or CSS features.</p>
    `,
  },
  {
    id: 20,
    title: "Improving UX with Micro-interactions",
    slug: "ux-micro-interactions",
    category: "Design",
    date: "December 28, 2023",
    readTime: "5 min read",
    excerpt: "Small details can make a big difference. Learn how micro-interactions can improve user experience and engagement on your site.",
    author: "Himanshu Verma",
    image: "/blog/blog20.png",
    content: `
      <p>Micro-interactions are subtle animations or visual cues that provide feedback to a user's action, such as a button changing color when hovered.</p>
      <h2>Providing Feedback</h2>
      <p>Micro-interactions help users understand the results of their actions and guide them through your website's interface.</p>
      <h2>Building Brand Personality</h2>
      <p>Well-designed micro-interactions can add a sense of delight and personality to your site, making it more memorable for users.</p>
    `,
  },
];

const categories = ['All', 'Development', 'Comparison', 'Design', 'Optimization', 'Technology'];

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = blogs.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <SEO 
        title="Blog" 
        description="Latest insights, tutorials, and articles on web development, React, Next.js, and modern UI/UX design by Himanshu Verma."
        url="https://himanshuverma.dev/blog"
      />
      
      <Container className="py-20">
        <SectionTitle 
          title="Insights & Thoughts" 
          subtitle="My Blog" 
        />

        {/* Search & Filters */}
        <div className="flex flex-col lg:flex-row gap-8 items-center justify-between mb-20">
          <div className="relative w-full lg:max-w-md group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-accent-primary transition-colors" size={20} />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-16 pr-8 text-white focus:outline-none focus:border-accent-primary transition-all duration-300"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 border ${
                  activeCategory === cat 
                  ? 'bg-accent-primary text-dark border-accent-primary' 
                  : 'bg-white/5 text-slate-400 border-white/10 hover:border-accent-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post, i) => (
              <BlogCard key={post.id} post={post} index={i} />
            ))}
          </AnimatePresence>
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-400 text-xl">No articles found matching your criteria.</p>
          </div>
        )}
      </Container>
    </>
  );
}

