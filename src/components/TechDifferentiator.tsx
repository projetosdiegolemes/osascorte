"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Crosshair, Cpu, Gauge, ArrowRight } from 'lucide-react';

const techFeatures = [
  {
    icon: <Cpu className="w-6 h-6 text-neutral-300" />,
    title: 'Integração CAD/CAM Avançada',
    description: 'Nossos projetos nascem em softwares de engenharia de última geração, garantindo que o desenho técnico seja traduzido para a máquina sem perda de dados.',
  },
  {
    icon: <Crosshair className="w-6 h-6 text-neutral-300" />,
    title: 'Corte a Laser CNC de Alta Potência',
    description: 'Bases de madeira cortadas com feixe de laser focado milimetricamente. Zero deformação térmica, garantindo o tensionamento perfeito das lâminas.',
  },
  {
    icon: <Gauge className="w-6 h-6 text-neutral-300" />,
    title: 'Controle de Qualidade Tolerância Zero',
    description: 'Cada matriz passa por uma conferência de esquadro, altura de vinco e emborrachamento antes do envio, eliminando setup demorado na sua máquina.',
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
    <section className="bg-neutral-950 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          <div className="lg:sticky lg:top-32">
            <motion.span 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariants}
              className="block text-neutral-500 text-xs font-semibold tracking-[0.2em] uppercase mb-6"
            >
              Tecnologia Produtiva
            </motion.span>
            
            <motion.h2 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariants}
              className="text-4xl md:text-5xl font-light text-white tracking-tight leading-[1.1] mb-8"
            >
              Milímetros que separam <br />
              <span className="font-semibold">o comum da excelência.</span>
            </motion.h2>

            <motion.p 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariants}
              className="text-lg text-neutral-400 font-light leading-relaxed mb-16"
            >
              A diferença entre uma embalagem perfeita e uma linha de produção travada está na ferramenta de corte. Investimos em tecnologia de ponta para garantir que a sua matriz execute milhões de batidas com a mesma precisão do primeiro dia.
            </motion.p>

            <motion.div 
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="space-y-12"
            >
              {techFeatures.map((feature, index) => (
                <motion.div key={index} variants={fadeUpVariants} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-neutral-900 border border-neutral-800 rounded-none group-hover:bg-neutral-800 transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-white mb-2">{feature.title}</h3>
                    <p className="text-sm text-neutral-400 font-light leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariants}
            className="relative h-[600px] lg:h-[800px] w-full bg-neutral-900 overflow-hidden"
          >
            <div className="absolute inset-0 bg-neutral-950/20 z-10 mix-blend-multiply"></div>
            <img 
              src="https://images.unsplash.com/photo-1565439390141-657e2aee50b8?q=80&w=2065&auto=format&fit=crop" 
              alt="Máquina de Corte a Laser CNC Operando" 
              className="w-full h-full object-cover object-center mix-blend-luminosity opacity-80"
            />
            <div className="absolute bottom-8 left-8 z-20 flex items-center gap-3 px-4 py-2 bg-neutral-950/80 backdrop-blur border border-neutral-800">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-mono text-neutral-300 uppercase tracking-wider">Sistema Operante CNC</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="border-t border-neutral-900 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1530124566582-a618bc2615dc?q=80&w=2070&auto=format&fit=crop"
            alt="Textura industrial"
            className="w-full h-full object-cover opacity-10 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/90 to-neutral-950"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 py-32 text-center flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-light text-white tracking-tight mb-8">
            Pronto para elevar o padrão <br className="hidden md:block"/> da sua produção?
          </h2>
          <p className="text-lg text-neutral-400 font-light mb-12 max-w-2xl">
            Fale com nossos engenheiros. Analisaremos seu projeto técnico e entregaremos uma proposta focada em performance e durabilidade.
          </p>
          
          <button className="group relative inline-flex items-center justify-center gap-4 px-10 py-5 bg-white text-neutral-950 font-semibold text-sm tracking-[0.1em] uppercase overflow-hidden transition-all duration-500 hover:bg-neutral-200 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]">
            <span className="relative z-10">Solicitar Análise Técnica</span>
            <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};