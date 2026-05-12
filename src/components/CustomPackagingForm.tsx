"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const CustomPackagingForm = () => {
  const WHATSAPP_NUMBER = "5511900000000"; // COLOQUE O NUMERO REAL AQUI

  const [formData, setFormData] = useState({
    empresa: '', email: '', telefone: '',
    papel: '', impressao: '', tamanho: '', gramatura: '', quantidade: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*Orçamento de Embalagens B2B - Osascorte*\n\n*Empresa:* ${formData.empresa}\n*E-mail:* ${formData.email}\n*Telefone:* ${formData.telefone}\n\n*Especificações:*\n- Papel: ${formData.papel}\n- Impressão: ${formData.impressao}\n- Tamanho: ${formData.tamanho}\n- Gramatura: ${formData.gramatura}\n- Quantidade: ${formData.quantidade}\n\n_Contato gerado pelo novo site_`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const inputClass = "w-full bg-[#f4f4f4] text-gray-900 border-none rounded px-4 py-3 text-sm focus:ring-2 focus:ring-black outline-none";

  return (
    <section id="orcamento" className="bg-[#111111] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Coluna Esquerda - Textos */}
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="w-full lg:w-5/12">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            SOLICITE UMA <br />
            <span className="text-gray-400">APRESENTAÇÃO</span> <br />
            PERSONALIZADA
          </h2>
          <div className="w-16 h-1 bg-white mb-8"></div>
          <p className="text-gray-400 text-lg leading-relaxed">
            Conte brevemente sobre sua empresa e o tipo de material que deseja produzir. Nossa equipe vai analisar seu cenário para entender se a Osascorte é a parceira certa para o seu momento.
          </p>
        </motion.div>

        {/* Coluna Direita - Formulário CriaCom */}
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="w-full lg:w-7/12 bg-[#1c1c1c] p-8 md:p-10 rounded-xl shadow-2xl">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input type="text" name="empresa" required placeholder="Nome da empresa *" value={formData.empresa} onChange={handleChange} className={inputClass} />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="email" name="email" required placeholder="E-mail corporativo *" value={formData.email} onChange={handleChange} className={inputClass} />
              <input type="tel" name="telefone" required placeholder="Telefone / WhatsApp *" value={formData.telefone} onChange={handleChange} className={inputClass} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select name="papel" required value={formData.papel} onChange={handleChange} className={inputClass}>
                <option value="" disabled>Tipo de papel</option>
                <option value="Offset">Papel Offset</option>
                <option value="Couchê">Papel Couchê</option>
                <option value="Duplex/Triplex">Duplex / Triplex</option>
                <option value="Kraft">Kraft Natural</option>
              </select>
              <select name="impressao" required value={formData.impressao} onChange={handleChange} className={inputClass}>
                <option value="" disabled>Impressão</option>
                <option value="1 Cor">1 Cor</option>
                <option value="Colorida (4 cores)">Colorida (4 cores)</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select name="tamanho" required value={formData.tamanho} onChange={handleChange} className={inputClass}>
                <option value="" disabled>Tamanho da sacola</option>
                <option value="Pequena">Pequena</option>
                <option value="Média">Média</option>
                <option value="Grande">Grande</option>
              </select>
              <select name="gramatura" required value={formData.gramatura} onChange={handleChange} className={inputClass}>
                <option value="" disabled>Gramatura</option>
                <option value="150g">150g</option>
                <option value="250g">250g</option>
                <option value="300g">300g</option>
              </select>
            </div>

            <div className="mt-4">
              <p className="text-white text-sm font-semibold mb-3">Fabricação apenas acima de 500 unidades:</p>
              <div className="flex flex-wrap gap-4">
                {['500 un.', '1.000 un.', '2.000 un.', '+ 2000 un.'].map((qtd) => (
                  <label key={qtd} className="flex items-center gap-2 cursor-pointer text-gray-300 text-sm">
                    <input type="radio" name="quantidade" value={qtd} required onChange={handleChange} className="accent-black w-4 h-4" />
                    {qtd}
                  </label>
                ))}
              </div>
            </div>

            <button type="submit" className="mt-6 w-full py-4 bg-[#cc0000] hover:bg-[#aa0000] text-white font-bold tracking-wider rounded transition-colors uppercase text-sm">
              Solicitar Orçamento ➔
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};