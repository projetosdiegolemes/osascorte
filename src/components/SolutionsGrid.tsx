"use client";

import React from 'react';
import { motion } from 'framer-motion';

const solutions = [
  { id: '01', title: 'Caixa cartucho papel cartão', desc: 'Embalagens ideais para produtos diversos com excelente acabamento.', img: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070', tags: ['Cartão', 'Personalizado'] },
  { id: '02', title: 'Etiqueta adesiva', desc: 'Identificação e personalização para suas embalagens e produtos.', img: 'https://images.unsplash.com/photo-1586769852044-692d6e3703f0?q=80&w=2070', tags: ['Adesivos', 'Identificação'] },
  { id: '03', title: 'Sacola de Papel', desc: 'Sacolas resistentes para o varejo com ótimo custo-benefício.', img: 'https://images.unsplash.com/photo-1550171839-27415be90690?q=80&w=2070', tags: ['Varejo', 'Ecológico'] },
  { id: '04', title: 'Sacola Papel Cartão', desc: 'Sacolas premium com excelente estrutura e acabamento.', img: 'https://images.unsplash.com/photo-1607344645866-009c320b63e0?q=80&w=2070', tags: ['Premium', 'Resistência'] },
  { id: '05', title: 'Caixa de papel cartão', desc: 'Caixas versáteis para montagem rápida e segura.', img: 'https://images.unsplash.com/photo-1577705998148-6da4f3963bc8?q=80&w=2070', tags: ['Praticidade', 'Versátil'] },
];

export const SolutionsGrid = () => {
  return (
    <section id="produtos" className="bg-slate-50 py-32 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="block text-emerald-700 text-xs font-bold tracking-[0.2em] uppercase mb-4">Nossos Produtos</span>
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 tracking-tight leading-tight">Soluções completas em <br/><span className="font-bold text-emerald-800">Embalagens e Sacolas.</span></h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((sol) => (
            <motion.div key={sol.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group flex flex-col bg-white border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <div className="relative h-64 overflow-hidden bg-slate-200">
                <img src={sol.img} alt={sol.title} className="w-full h-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" />
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-4">{sol.title}</h3>
                <p className="text-sm text-slate-600 font-medium leading-relaxed mb-8 flex-grow">{sol.desc}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {sol.tags.map((tag, i) => (<span key={i} className="px-3 py-1 bg-emerald-50 border border-emerald-100 text-emerald-700 font-bold text-[10px] uppercase">{tag}</span>))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};