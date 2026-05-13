"use client";

import React from 'react';
import { motion } from 'framer-motion';

const solutions = [
  { id: '01', title: 'Facas Gráficas Planas', desc: 'Matrizes de corte milimétricas para embalagens.', img: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?q=80&w=2070', tags: ['Alta Precisão', 'Embalagens'] },
  { id: '02', title: 'Corte a Laser CNC', desc: 'Tecnologia de ponta para bases de madeira e acrílico.', img: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070', tags: ['Tecnologia CNC', 'Madeira'] },
  { id: '03', title: 'Projetos Especiais', desc: 'Engenharia dedicada para cortes não-convencionais.', img: 'https://images.unsplash.com/photo-1580983546524-7be4cc140d3a?q=80&w=2070', tags: ['Consultoria', 'Customização'] },
];

export const SolutionsGrid = () => {
  return (
    <section className="bg-slate-50 py-32 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="block text-emerald-700 text-xs font-bold tracking-[0.2em] uppercase mb-4">Nossa Expertise</span>
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 tracking-tight leading-tight">Engenharia aplicada a <br/><span className="font-bold text-emerald-800">Soluções de Corte.</span></h2>
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