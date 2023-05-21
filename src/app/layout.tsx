import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  weight: ['400', '500', '600'],
  subsets: ['latin']
});

export const metadata = {
  title: 'Simulador solar',
  description:
    'A energia solar é uma fonte limpa e renovável que transforma a luz do sol em eletricidade, promovendo um futuro sustentável e reduzindo os custos de energia.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
