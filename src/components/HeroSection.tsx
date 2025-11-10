import React from 'react';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  children?: React.ReactNode;
  className?: string;
}

import heroImage from '../assets/products/hero-section.jpg';

export default function HeroSection({ title, subtitle, backgroundImage, children, className = '' }: HeroSectionProps) {
  const bg = backgroundImage ?? heroImage;
  return (
    <section
      className={`relative text-white overflow-hidden ${className}`}
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          {subtitle && <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}
