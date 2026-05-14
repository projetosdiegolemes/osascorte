import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          
          <div className="lg:col-span-1">
            <span className="text-2xl font-semibold text-slate-900 tracking-tighter mb-6 block">
              Osascorte<span className="text-emerald-600 text-3xl leading-none">.</span>
            </span>
            <p className="text-sm text-slate-600 font-light leading-relaxed max-w-sm">
              Somos especialistas em materiais gráficos com corte e acabamentos especiais. Com mais de 15 anos de atuação, passamos por diversas atualizações e experiências para que o nosso cliente não se preocupe com termos técnicos e foque unicamente em seu produto.
            </p>
          </div>

          <div>
            <h4 className="text-slate-900 text-sm font-bold uppercase tracking-wider mb-6">Expertise</h4>
            <ul className="space-y-4">
              <li><a href="#produtos" className="text-sm text-slate-600 hover:text-emerald-700 transition-colors">Sacolas de Papel</a></li>
              <li><a href="#produtos" className="text-sm text-slate-600 hover:text-emerald-700 transition-colors">Caixas de Papelão</a></li>
              <li><a href="#produtos" className="text-sm text-slate-600 hover:text-emerald-700 transition-colors">Caixas de Papel Cartão</a></li>
              <li><a href="#produtos" className="text-sm text-slate-600 hover:text-emerald-700 transition-colors">Etiquetas Adesivas</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 text-sm font-bold uppercase tracking-wider mb-6">Fale Conosco</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-slate-600">
                <Phone className="w-4 h-4 text-emerald-600" />
                (11) 4554-6842
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-600">
                <Phone className="w-4 h-4 text-emerald-600" />
                (11) 3681-5779
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-600">
                <span className="w-4 h-4 flex items-center justify-center text-emerald-600 font-bold text-xs">W</span>
                (11) 94532-6002 (WhatsApp)
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 text-sm font-bold uppercase tracking-wider mb-6">Fábrica & Sede</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-slate-600">
                <MapPin className="w-4 h-4 text-emerald-600 mt-0.5" />
                <span>
                  Rua Presidente Castelo Branco 26<br />
                  Centro, Osasco - SP<br />
                  CEP 06016-020
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Injeção dos Selos de Segurança e Credibilidade */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <div className="flex items-center gap-2 bg-emerald-50 px-3 py-1.5 rounded border border-emerald-100">
            <span className="text-emerald-700 text-xs font-bold uppercase">🔒 Ambiente Seguro SSL</span>
          </div>
          <div className="flex items-center gap-2 bg-emerald-50 px-3 py-1.5 rounded border border-emerald-100">
            <span className="text-emerald-700 text-xs font-bold uppercase">🛡️ Google Safe Browsing</span>
          </div>
          <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded border border-slate-200">
            <span className="text-slate-600 text-xs font-bold uppercase">✅ ISO 9001</span>
          </div>
          <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded border border-slate-200">
            <span className="text-slate-600 text-xs font-bold uppercase">🌳 Selo FSC Papel</span>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 font-light">
            © {new Date().getFullYear()} Osascorte. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-slate-500 font-light">CNPJ: 00.000.000/0001-00</span>
            <span className="text-xs text-slate-300 font-light hidden md:block">|</span>
            <a href="#" className="text-xs text-slate-500 hover:text-emerald-700 transition-colors font-light">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};