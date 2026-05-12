import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Osascorte | Embalagens Premium',
  description: 'Há mais de 40 anos transformando embalagens em grandes experiências.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}