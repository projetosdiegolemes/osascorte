"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-start overflow-hidden bg-neutral-950">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
          alt="Engenharia de corte industrial"
          className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/50 via-transparent to-neutral-950"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 mt-20">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
          <span className="block text-neutral-400 text-xs md:text-sm font-semibold tracking-[0.25em] uppercase mb-6">
            Engenharia de Corte de Alta Performance
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-light text-white leading-[1.05] tracking-tight mb-8">
            Precisão em <br />
            <span className="font-semibold text-neutral-100">Soluções de Corte.</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl font-light leading-relaxed mb-12">
            Desenvolvemos facas gráficas e matrizes de altíssima precisão para indústrias que exigem o padrão máximo em suas embalagens.
          </p>
          <a href="#orcamento" className="group relative inline-flex items-center justify-center gap-4 px-8 py-5 bg-white text-neutral-950 font-semibold text-xs tracking-[0.1em] uppercase hover:bg-neutral-200 transition-all">
            <span className="relative z-10">Orçamento Consultivo</span>
            <ArrowRight className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};