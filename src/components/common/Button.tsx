import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: React.ElementType;
  href?: string;
  target?: string;
  download?: string;
}

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className, 
  icon: Icon, 
  href,
  ...props 
}: ButtonProps) => {
  const variants = {
    primary: 'bg-accent-primary text-dark hover:bg-white hover:scale-105 neon-border shadow-accent-primary/20',
    secondary: 'bg-white/10 text-white hover:bg-white/20 hover:scale-105 border border-white/10',
    outline: 'bg-transparent border border-accent-primary text-accent-primary hover:bg-accent-primary hover:text-dark',
    ghost: 'bg-transparent text-white hover:bg-white/5',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3.5 text-base font-bold',
  };

  const commonClasses = twMerge(
    'inline-flex items-center justify-center gap-2 rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer',
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <a 
        href={href} 
        className={commonClasses}
        {...(props as any)}
      >
        {children}
        {Icon && <Icon size={size === 'sm' ? 16 : 20} />}
      </a>
    );
  }

  return (
    <button
      className={commonClasses}
      {...(props as any)}
    >
      {children}
      {Icon && <Icon size={size === 'sm' ? 16 : 20} />}
    </button>
  );
};

export default Button;
