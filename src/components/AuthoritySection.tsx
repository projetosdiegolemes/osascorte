import React from 'react';
import { motion } from 'framer-motion';

const metrics = [
  {
    value: '25+',
    label: 'Anos de Excelência',
    description: 'Tradição aliada à constante inovação tecnológica.',
  },
  {
    value: '10k+',
    label: 'Matrizes Operando',
    description: 'Ferramentas de corte ativas em linhas de produção globais.',
  },
  {
    value: '0.1mm',
    label: 'Margem de Tolerância',
    description: 'Precisão cirúrgica garantida por engenharia CNC avançada.',
  },
];

// Placeholder de "logos" (Em produção, trocar por tags <svg> reais)
const clients = [
  "KLABIN CORP", "TETRA PAK INDUSTRIAL", "INTERNATIONAL PAPER", 
  "SMURFIT KAPPA", "SUZANO SA", "WESTROCK", "CMPC PACKAGING"
];

// Duplicamos o array para criar o efeito infinito sem quebras
const duplicatedClients = [...clients, ...clients];

export const AuthoritySection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  return (
    <section className="bg-neutral-950 py-24 md:py-32 overflow-hidden relative">
      {/* Background Gradient Sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-900/40 via-neutral-950 to-neutral-950 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Métricas de Autoridade */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-32"
        >
          {metrics.map((metric, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="flex flex-col items-start border-l border-neutral-800 pl-6 md:pl-8"
            >
              <span className="text-5xl md:text-6xl font-light text-white tracking-tighter mb-4">
                {metric.value}
              </span>
              <span className="text-sm font-semibold text-neutral-300 uppercase tracking-widest mb-2">
                {metric.label}
              </span>
              <p className="text-sm text-neutral-500 font-light max-w-[250px]">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Proof / Clientes Marquee */}
        <div className="border-t border-b border-neutral-900 py-12 flex flex-col relative">
          
          <div className="text-center mb-10">
             <span className="text-neutral-500 text-xs font-semibold tracking-[0.2em] uppercase">
              Operações industriais que confiam na nossa precisão
            </span>
          </div>

          {/* Marquee Container (Oculta o scroll fora da tela) */}
          <div className="w-full overflow-hidden flex relative mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            
            {/* Fade Edges para suavizar a entrada e saída das logos */}
            <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-neutral-950 to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-neutral-950 to-transparent z-10"></div>

            <motion.div
              className="flex items-center gap-16 md:gap-32 whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 40, // Velocidade lenta, transmite luxo e seriedade
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {duplicatedClients.map((client, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-default"
                >
                  <span className="text-xl md:text-2xl font-bold text-neutral-300 font-serif tracking-widest uppercase">
                    {client}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};