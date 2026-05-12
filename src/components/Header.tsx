"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Controle do background ao rolar a página
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Soluções', href: '#' },
    { name: 'Tecnologia CNC', href: '#' },
    { name: 'Nossa Indústria', href: '#' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800 py-4' 
          : 'bg-transparent py-6 md:py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        
        {/* Logo */}
        <div className="relative z-20 cursor-pointer">
          <span className="text-2xl font-semibold text-white tracking-tighter">
            Osascorte<span className="text-neutral-500 text-3xl leading-none">.</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-neutral-400 hover:text-white transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <button className={`px-6 py-2.5 text-xs font-semibold tracking-wider uppercase transition-colors duration-300 ${
            isScrolled 
              ? 'bg-white text-neutral-950 hover:bg-neutral-200' 
              : 'border border-white/30 text-white hover:bg-white hover:text-neutral-950'
          }`}>
            Contato Direto
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden relative z-20 text-neutral-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-neutral-950 border-b border-neutral-900 shadow-2xl md:hidden"
          >
            <div className="flex flex-col px-6 py-8 gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-lg font-light text-neutral-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="mt-4 px-6 py-4 bg-white text-neutral-950 text-sm font-semibold tracking-wider uppercase text-center">
                Contato Direto
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};