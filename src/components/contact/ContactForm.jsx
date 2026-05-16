import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Loader2, ChevronDown } from 'lucide-react';
import Button from '../common/Button';
import { services } from '@/pages/services';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', service: '', subject: '', message: '' });
    }, 2000);
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card p-12 rounded-3xl text-center space-y-6"
      >
        <div className="flex justify-center">
          <CheckCircle size={80} className="text-accent-tertiary" />
        </div>
        <h3 className="text-3xl font-bold text-white">Message Sent!</h3>
        <p className="text-slate-400 max-w-md mx-auto">
          Thank you for reaching out, Himanshu. I've received your message and will get back to you as soon as possible.
        </p>
        <Button onClick={() => setStatus('idle')} variant="outline">
          Send Another Message
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 rounded-3xl space-y-6">
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-bold text-slate-300 capitalize tracking-wide ml-1">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-white focus:outline-none focus:border-accent-primary transition-colors text-sm"
          placeholder="John Doe"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-bold text-slate-300 capitalize tracking-wide ml-1">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-white focus:outline-none focus:border-accent-primary transition-colors text-sm"
          placeholder="john@example.com"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="service" className="text-sm font-bold text-slate-300 capitalize tracking-wide ml-1">
          Interested Service
        </label>
        <div className="relative">
          <select
            id="service"
            name="service"
            required
            value={formData.service}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-white focus:outline-none focus:border-accent-primary transition-colors appearance-none text-sm"
          >
            <option value="" disabled className="bg-dark text-slate-500">Select a service</option>
            {services.map((service) => (
              <option key={service.id} value={service.title} className="bg-dark text-white">
                {service.title}
              </option>
            ))}
            <option value="Other" className="bg-dark text-white">Other</option>
          </select>
          <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-bold text-slate-300 capitalize tracking-wide ml-1">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-white focus:outline-none focus:border-accent-primary transition-colors text-sm"
          placeholder="How can I help you?"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-bold text-slate-300 capitalize tracking-wide ml-1">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-white focus:outline-none focus:border-accent-primary transition-colors resize-none text-sm"
          placeholder="Tell me about your project..."
        />
      </div>

      <Button
        type="submit"
        disabled={status === 'loading'}
        size="md"
        variant="primary"
        className="w-full"
        icon={status === 'loading' ? Loader2 : Send}
      >
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
};

export default ContactForm;
