import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Osascorte | Engenharia de Embalagens',
  description: 'Soluções de alta precisão em facas gráficas e embalagens personalizadas.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      {/* Aqui garantimos que a base do site é escura */}
      <body className="antialiased bg-neutral-950 text-white selection:bg-osas-light/30">
        {children}
      </body>
    </html>
  );
}