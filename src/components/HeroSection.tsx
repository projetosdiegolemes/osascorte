"use client";

import React from 'react';
import { motion } from 'framer-motion';

export const HeroSection = () => {
  return (
    <section className="bg-white pt-32 pb-20 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Textos - Estilo Panorama (Clean) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2"
        >
          <span className="text-gray-500 text-xs font-bold tracking-widest uppercase mb-4 block">
            Sobre Nós
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-[1.1] mb-6 tracking-tight">
            Há mais de 40 anos transformando <br />
            <span className="text-gray-400">embalagens em grandes experiências.</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
            Somos especialistas em materiais gráficos com corte e acabamentos especiais para o mercado de luxo, corporativo e alimentício.
          </p>
          <a href="#orcamento" className="inline-block px-8 py-4 bg-black text-white text-sm font-bold uppercase tracking-wider hover:bg-gray-800 transition-colors">
            Falar com Especialista
          </a>
        </motion.div>

        {/* Imagem */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-1/2"
        >
          <img 
            src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop" 
            alt="Embalagens Premium" 
            className="w-full h-[500px] object-cover rounded-xl shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};