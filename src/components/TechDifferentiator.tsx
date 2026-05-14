"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Crosshair, Cpu, Gauge, ArrowRight } from 'lucide-react';

const techFeatures = [
  {
    icon: <Cpu className="w-6 h-6 text-neutral-300" />,
    title: 'Colagem Automática',
    description: 'Nossas sacolas e cartuchos são produzidos em máquina de colagem automática, com isso garantimos uma grande produção diária com qualidade sem igual, pois elimina boa parte do acabamento manual. Confiança e pontualidade você encontra aqui.',
  },
  {
    icon: <Crosshair className="w-6 h-6 text-neutral-300" />,
    title: 'Acabamentos e Enobrecimentos',
    description: 'Aqui na Osascorte temos várias opções para deixar seu material gráfico mais bonito. Dentro delas temos: Corte especial, Laminação (vários tipos), Hotstamping (impressão metalizada), alto relevo, baixo relevo, verniz localizado, verniz total, Serigrafia, empastamentos além de outros. E o melhor de tudo: Produzimos internamente!',
  },
  {
    icon: <Gauge className="w-6 h-6 text-neutral-300" />,
    title: 'Controle de Qualidade Rigoroso',
    description: 'Revisão minuciosa em cada lote impresso e montado, garantindo que a sua embalagem chegue perfeita e pronta para agregar valor e destacar sua marca no mercado.',
  },
];

export const TechDifferentiator = () => {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <section className="bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          <div className="lg:sticky lg:top-32">
            <motion.span 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariants}
              className="block text-emerald-700 text-xs font-bold tracking-[0.2em] uppercase mb-6"
            >
              Tecnologia Produtiva
            </motion.span>
            
            <motion.h2 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariants}
              className="text-4xl md:text-5xl font-light text-slate-900 tracking-tight leading-[1.1] mb-8"
            >
              Milímetros que separam <br />
              <span className="font-bold text-emerald-800">o comum da excelência.</span>
            </motion.h2>

            <motion.p 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariants}
              className="text-lg text-slate-600 font-medium leading-relaxed mb-16"
            >
              A diferença entre uma embalagem perfeita e uma linha de produção travada está na ferramenta de corte. Investimos em tecnologia de ponta para garantir que a sua matriz execute milhões de batidas com a mesma precisão do primeiro dia.
            </motion.p>

            <motion.div 
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="space-y-12"
            >
              {techFeatures.map((feature, index) => (
                <motion.div key={index} variants={fadeUpVariants} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-slate-50 border border-slate-200 rounded-none group-hover:bg-white group-hover:shadow-md transition-all duration-300">
                    <div className="text-emerald-600">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                    <p className="text-sm text-slate-600 font-medium leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariants}
            className="relative h-[600px] lg:h-[800px] w-full bg-slate-100 overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/10 z-10 mix-blend-overlay"></div>
            <img 
              src="https://images.unsplash.com/photo-1565439390141-657e2aee50b8?q=80&w=2065&auto=format&fit=crop" 
              alt="Máquina de Corte a Laser CNC Operando" 
              className="w-full h-full object-cover object-center opacity-90"
            />
            <div className="absolute bottom-8 left-8 z-20 flex items-center gap-3 px-4 py-2 bg-white/90 backdrop-blur border border-slate-200 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-mono text-slate-700 font-bold uppercase tracking-wider">Sistema Operante CNC</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="border-t border-slate-200 relative overflow-hidden bg-slate-50">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1530124566582-a618bc2615dc?q=80&w=2070&auto=format&fit=crop"
            alt="Textura industrial"
            className="w-full h-full object-cover opacity-5 mix-blend-multiply"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-slate-50/90 to-slate-50"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 py-32 text-center flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-light text-slate-900 tracking-tight mb-8">
            Pronto para elevar o padrão <br className="hidden md:block"/> da sua produção?
          </h2>
          <p className="text-lg text-slate-600 font-medium mb-12 max-w-2xl">
            Fale com nossos engenheiros. Analisaremos seu projeto técnico e entregaremos uma proposta focada em performance e durabilidade.
          </p>
          
          <button className="group relative inline-flex items-center justify-center gap-4 px-10 py-5 bg-emerald-700 text-white font-bold text-sm tracking-[0.1em] uppercase overflow-hidden transition-all duration-500 hover:bg-emerald-800 hover:shadow-lg rounded">
            <span className="relative z-10">Solicitar Análise Técnica</span>
            <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};