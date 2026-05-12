import React from 'react';
import { motion } from 'framer-motion';

// Extração de dados para performance e manutenibilidade
const solutions = [
  {
    id: '01',
    title: 'Facas Gráficas Planas',
    description: 'Matrizes de corte milimétricas para embalagens em papel cartão, micro-ondulado e materiais técnicos. Precisão de encaixe perfeita.',
    image: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?q=80&w=2070&auto=format&fit=crop',
    tags: ['Alta Precisão', 'Embalagens', 'Papelão'],
  },
  {
    id: '02',
    title: 'Corte a Laser CNC',
    description: 'Tecnologia de ponta para bases de madeira e acrílico. Corte perfeitamente limpo que garante a longevidade da ferramenta de corte.',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop',
    tags: ['Tecnologia CNC', 'Madeira Padrão', 'Durabilidade'],
  },
  {
    id: '03',
    title: 'Projetos Especiais',
    description: 'Engenharia dedicada para cortes não-convencionais. Desenvolvemos soluções do zero para desafios complexos da linha de produção.',
    image: 'https://images.unsplash.com/photo-1580983546524-7be4cc140d3a?q=80&w=2070&auto=format&fit=crop',
    tags: ['Consultoria', 'Customização', 'Design Técnico'],
  },
];

export const SolutionsGrid = () => {
  // Variantes de animação de entrada ao fazer Scroll
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  return (
    <section className="bg-neutral-950 py-32 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="block text-neutral-500 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Nossa Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight leading-tight">
              Engenharia aplicada a <br className="hidden md:block"/>
              <span className="font-semibold">Soluções de Corte.</span>
            </h2>
          </div>
          <p className="text-neutral-400 text-sm max-w-sm font-light">
            Não produzimos apenas ferramentas; entregamos confiabilidade operacional para a sua linha de produção rodar sem interrupções.
          </p>
        </div>

        {/* Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {solutions.map((solution) => (
            <motion.div 
              key={solution.id} 
              variants={cardVariants}
              className="group relative flex flex-col bg-neutral-900/30 border border-neutral-800/50 hover:bg-neutral-900/80 transition-colors duration-500 overflow-hidden cursor-pointer"
            >
              {/* Imagem com Efeito de Hover Oculto/Escala */}
              <div className="relative h-64 overflow-hidden bg-neutral-900">
                <div className="absolute inset-0 bg-neutral-950/40 group-hover:bg-transparent transition-colors duration-700 z-10" />
                <img 
                  src={solution.image} 
                  alt={solution.title}
                  className="w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-in-out"
                />
                <span className="absolute top-6 left-6 z-20 text-white font-mono text-xs opacity-50">
                  {solution.id}
                </span>
              </div>

              {/* Conteúdo do Card */}
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-xl font-medium text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  {solution.title}
                </h3>
                <p className="text-sm text-neutral-400 font-light leading-relaxed mb-8 flex-grow">
                  {solution.description}
                </p>
                
                {/* Tags Técnicas */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {solution.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-neutral-800/50 border border-neutral-700 text-neutral-300 text-[10px] uppercase tracking-wider font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};