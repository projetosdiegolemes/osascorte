import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          <div className="lg:col-span-1">
            <span className="text-2xl font-semibold text-white tracking-tighter mb-6 block">
              Osascorte<span className="text-neutral-500 text-3xl leading-none">.</span>
            </span>
            <p className="text-sm text-neutral-400 font-light leading-relaxed max-w-sm">
              Engenharia de precisão em soluções de corte. Desenvolvemos matrizes de alta performance para a indústria de embalagens.
            </p>
          </div>

          <div>
            <h4 className="text-white text-sm font-medium uppercase tracking-wider mb-6">Expertise</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">Facas Gráficas Planas</a></li>
              <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">Corte a Laser CNC</a></li>
              <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">Projetos Especiais</a></li>
              <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">Controle de Qualidade</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-medium uppercase tracking-wider mb-6">Fale com um Engenheiro</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-neutral-400">
                <Phone className="w-4 h-4 text-neutral-500" />
                (11) 3000-0000
              </li>
              <li className="flex items-center gap-3 text-sm text-neutral-400">
                <Mail className="w-4 h-4 text-neutral-500" />
                projetos@osascorte.com.br
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-medium uppercase tracking-wider mb-6">Fábrica & Sede</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-neutral-400">
                <MapPin className="w-4 h-4 text-neutral-500 mt-0.5" />
                <span>
                  Polo Industrial, Rua das Matrizes, 1000<br />
                  Osasco - SP, Brasil<br />
                  CEP 06000-000
                </span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-neutral-900 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-500 font-light">
            © {new Date().getFullYear()} Osascorte. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-neutral-500 font-light">CNPJ: 00.000.000/0001-00</span>
            <span className="text-xs text-neutral-500 font-light hidden md:block">|</span>
            <a href="#" className="text-xs text-neutral-500 hover:text-white transition-colors font-light">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};