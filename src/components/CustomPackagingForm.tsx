"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const CustomPackagingForm = () => {
  const WHATSAPP_NUMBER = "5511945326002"; // Número atualizado da Osascorte

  const [formData, setFormData] = useState({
    empresa: '', email: '', telefone: '', papel: '', impressao: '', quantidade: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*Novo Pedido de Orçamento - Osascorte*\n\n*Empresa:* ${formData.empresa}\n*E-mail:* ${formData.email}\n*Telefone:* ${formData.telefone}\n\n*Especificações:*\n- Papel: ${formData.papel}\n- Impressão: ${formData.impressao}\n- Volume: ${formData.quantidade}\n\n_Contato gerado pelo site_`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const inputClass = "w-full bg-white text-gray-800 border border-gray-300 rounded-md px-4 py-3.5 text-sm focus:ring-1 focus:ring-osas-dark focus:border-osas-dark outline-none transition-all";

  return (
    <section id="contato" className="bg-emerald-900 py-24 relative overflow-hidden">
      {/* Elemento decorativo de fundo para dar textura */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-800 rounded-full blur-3xl opacity-40 translate-x-1/2 -translate-y-1/4 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16 relative z-10">
        
        {/* Lado Esquerdo - Textos (Fundo Escuro, letras Claras) */}
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="w-full lg:w-5/12">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            SOLICITE UMA <br />
            <span className="text-emerald-300 font-light tracking-wide">APRESENTAÇÃO</span> <br />
            <span className="text-emerald-400">PERSONALIZADA</span>
          </h2>
          <div className="w-16 h-1 bg-emerald-400 mb-8 shadow-[0_0_15px_rgba(52,211,153,0.5)]"></div>
          <p className="text-emerald-50/90 text-lg leading-relaxed font-medium">
            Conte brevemente sobre sua empresa e o tipo de material que deseja produzir. Nossa equipe vai analisar seu cenário para entender se a Osascorte é a parceira certa para o seu momento.
          </p>
        </motion.div>

        {/* Lado Direito - O Formulário Limpo */}
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="w-full lg:w-7/12 bg-white p-8 md:p-12 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <input type="text" name="empresa" required placeholder="Nome da empresa *" value={formData.empresa} onChange={handleChange} className="w-full bg-slate-50 text-slate-900 border border-slate-300 rounded-md px-4 py-3.5 text-sm focus:ring-1 focus:ring-emerald-600 focus:border-emerald-600 outline-none transition-all" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input type="email" name="email" required placeholder="E-mail corporativo *" value={formData.email} onChange={handleChange} className="w-full bg-slate-50 text-slate-900 border border-slate-300 rounded-md px-4 py-3.5 text-sm focus:ring-1 focus:ring-emerald-600 focus:border-emerald-600 outline-none transition-all" />
              <input type="tel" name="telefone" required placeholder="Telefone / WhatsApp *" value={formData.telefone} onChange={handleChange} className="w-full bg-slate-50 text-slate-900 border border-slate-300 rounded-md px-4 py-3.5 text-sm focus:ring-1 focus:ring-emerald-600 focus:border-emerald-600 outline-none transition-all" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <select name="papel" required value={formData.papel} onChange={handleChange} className="w-full bg-slate-50 text-slate-900 border border-slate-300 rounded-md px-4 py-3.5 text-sm focus:ring-1 focus:ring-emerald-600 focus:border-emerald-600 outline-none transition-all">
                <option value="" disabled>Tipo de papel</option>
                <option value="Offset">Papel Offset</option>
                <option value="Couchê">Papel Couchê</option>
                <option value="Duplex/Triplex">Duplex / Triplex</option>
                <option value="Kraft">Kraft Natural</option>
              </select>
              <select name="impressao" required value={formData.impressao} onChange={handleChange} className="w-full bg-slate-50 text-slate-900 border border-slate-300 rounded-md px-4 py-3.5 text-sm focus:ring-1 focus:ring-emerald-600 focus:border-emerald-600 outline-none transition-all">
                <option value="" disabled>Impressão</option>
                <option value="1 Cor">1 Cor</option>
                <option value="Colorida (4 cores)">Colorida (4 cores)</option>
              </select>
            </div>

            <div className="mt-4 mb-2">
              <p className="text-slate-900 text-sm font-bold mb-4">Fabricação apenas acima de 500 unidades:</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['500 un.', '1.000 un.', '2.000 un.', '+ 2000 un.'].map((qtd) => (
                  <label key={qtd} className="flex items-center gap-2 cursor-pointer text-slate-600 text-sm hover:text-emerald-700 font-medium transition-colors">
                    <input type="radio" name="quantidade" value={qtd} required onChange={handleChange} className="accent-emerald-600 w-4 h-4 cursor-pointer" />
                    {qtd}
                  </label>
                ))}
              </div>
            </div>

            <button type="submit" className="mt-4 w-full py-4 bg-emerald-700 hover:bg-emerald-800 text-white font-bold tracking-wider rounded-md transition-colors uppercase text-sm shadow-lg shadow-emerald-700/30">
              Solicitar Orçamento ➔
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
};