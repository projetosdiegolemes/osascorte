"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Não tenho orçamento para investir em materiais gráficos agora.',
    answer: 'Entendemos que nem sempre é fácil investir em materiais gráficos, mas é importante lembrar que essa é uma forma eficaz de atrair novos clientes e aumentar as vendas. Além disso, oferecemos opções acessíveis para diversos tipos de materiais gráficos, e podemos trabalhar dentro do seu orçamento. Entre em contato conosco para conversarmos mais sobre suas necessidades e encontrar a melhor solução para sua empresa.',
  },
  {
    question: 'Impressão em poucas unidades, vocês fazem?',
    answer: 'Sim, com a gente você pode solicitar orçamentos gráficos em pequenas tiragens. Além de realizar o trabalho com muita qualidade, entregamos com maior rapidez. Fale com a gente!',
  },
  {
    question: 'Moro fora de São Paulo. Vocês entregam?',
    answer: 'Sim! Entregamos para diversas regiões. Entre em contato com nossos consultores para verificarmos os prazos e condições de frete para o seu CEP.',
  }
];

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-32 border-t border-slate-200">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="block text-emerald-700 text-xs font-bold tracking-[0.2em] uppercase mb-4">Suporte</span>
          <h2 className="text-4xl font-light text-slate-900 tracking-tight mb-6">Perguntas Frequentes</h2>
          <p className="text-slate-600">Dúvida? Estamos aqui para ajudar.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-slate-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-6 bg-slate-50 hover:bg-slate-100 transition-colors text-left"
              >
                <span className="text-slate-900 font-semibold">{faq.question}</span>
                <div className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 text-white transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 bg-white text-slate-600 leading-relaxed border-t border-slate-100">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};