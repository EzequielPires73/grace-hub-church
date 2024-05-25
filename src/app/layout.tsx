import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AD Catalão",
  description: "O site Ad Catalão é uma plataforma dedicada a fornecer informações e recursos relevantes para a comunidade de Catalão e região. Aqui você encontrará notícias locais, eventos, serviços, e oportunidades, tudo projetado para conectar e fortalecer nossa comunidade. Explore nosso site para descobrir o que está acontecendo em Catalão e como você pode se envolver e contribuir para o crescimento e bem-estar da nossa cidade.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
