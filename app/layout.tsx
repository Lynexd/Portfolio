import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Lynexd Marka - Neurix Development',
  description: '↪ Neurix Development Adı Altında Scrim, Lig, Guard, Destek, Moderasyon, Vote, Ticket ve Kişiye Özel Discord Botları; Ek Olarak Hazır veya İsteğe Bağlı Websiteleri Geliştiriyorum.',
  themeColor: '#8B5CF6',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  icons: 'https://cdn.discordapp.com/attachments/1411657666626850836/1411798587586777169/52c0871c28862368e5ba0885aaea1a99.jpg?ex=68b5f765&is=68b4a5e5&hm=c4e416d5b99b978d732e9a3dbea2a79b1ff18847290fdd6293de15c32155f530&',
  openGraph: {
    images: 'https://cdn.discordapp.com/attachments/1411657666626850836/1411798587586777169/52c0871c28862368e5ba0885aaea1a99.jpg?ex=68b5f765&is=68b4a5e5&hm=c4e416d5b99b978d732e9a3dbea2a79b1ff18847290fdd6293de15c32155f530&',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
