import React from 'react';

export default function CustomerReviews() {
  return (
    <section className="bg-white py-16 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Operações que confiam na nossa precisão
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Veja o que dizem os gestores de produção e qualidade sobre as matrizes de corte da Osascorte.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Review 1 */}
          <div className="bg-slate-50 p-6 rounded-lg shadow-sm border border-slate-200">
            <div className="flex items-center mb-4">
              <div className="flex text-amber-400 text-lg">
                ★★★★★
              </div>
              <span className="ml-2 text-sm text-gray-600 font-medium">Google Empresa</span>
            </div>
            <p className="text-gray-700 mb-4 italic">"A precisão do corte a laser CNC da Osascorte zerou nossos problemas de setup na linha de montagem. As embalagens encaixam perfeitamente, reduzindo nosso desperdício em 15%."</p>
            <div className="text-sm font-semibold text-emerald-700">Roberto Almeida</div>
            <div className="text-xs text-gray-500">Gerente de Produção, Indústria Gráfica</div>
          </div>
          {/* Review 2 */}
          <div className="bg-slate-50 p-6 rounded-lg shadow-sm border border-slate-200">
            <div className="flex items-center mb-4">
              <div className="flex text-amber-400 text-lg">
                ★★★★★
              </div>
              <span className="ml-2 text-sm text-gray-600 font-medium">Google Empresa</span>
            </div>
            <p className="text-gray-700 mb-4 italic">"Trabalhamos com papelão ondulado de alta gramatura e as facas planas da Osascorte entregam uma durabilidade excepcional. Atendimento técnico e engenharia impecáveis."</p>
            <div className="text-sm font-semibold text-emerald-700">Carla Mendes</div>
            <div className="text-xs text-gray-500">Diretora de Suprimentos</div>
          </div>
          {/* Review 3 */}
          <div className="bg-slate-50 p-6 rounded-lg shadow-sm border border-slate-200">
            <div className="flex items-center mb-4">
              <div className="flex text-amber-400 text-lg">
                ★★★★★
              </div>
              <span className="ml-2 text-sm text-gray-600 font-medium">Google Empresa</span>
            </div>
            <p className="text-gray-700 mb-4 italic">"Solicitamos um projeto especial para embalagens de exportação e a consultoria deles foi vital. Entregaram a matriz antes do prazo e com qualidade cirúrgica."</p>
            <div className="text-sm font-semibold text-emerald-700">Fernando Castro</div>
            <div className="text-xs text-gray-500">CEO, Exportadora de Frios</div>
          </div>
        </div>
      </div>
    </section>
  );
}