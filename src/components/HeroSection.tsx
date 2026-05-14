"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-start overflow-hidden bg-slate-50">
      <div className="absolute inset-0 z-0 bg-blue-500">
        <img
          src="/banner-sacola.png" 
          alt="Conheça nossa linha de sacolas"
          className="w-full h-full object-cover object-center opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/30 to-slate-50"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 mt-20">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
          <span className="block text-emerald-700 text-xs md:text-sm font-bold tracking-[0.25em] uppercase mb-6 flex items-center gap-3">
            <img src="/logo-sacola-online.png" alt="Sacola Online Logo" className="h-8 object-contain" />
            Parceria Oficial
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-light text-slate-900 leading-[1.05] tracking-tight mb-8">
            Conheça nossa <br />
            <span className="font-bold text-emerald-800">Linha de Sacolas.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl font-medium leading-relaxed mb-12">
            Pronta entrega atacado e varejo. As melhores opções para o seu negócio com a qualidade garantida da parceria com a Sacola Online.
          </p>
          <a href="#orcamento" className="group relative inline-flex items-center justify-center gap-4 px-8 py-5 bg-emerald-700 text-white font-bold text-xs tracking-[0.1em] uppercase hover:bg-emerald-800 rounded shadow-md transition-all">
            <span className="relative z-10">Orçamento Consultivo</span>
            <ArrowRight className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};