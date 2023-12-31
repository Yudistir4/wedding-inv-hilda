import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Josefin_Sans } from 'next/font/google';
import './globals.css';
const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-josefin',
});
const brittany = localFont({
  src: '../public/assets/font/brittany_signature/brittany.woff2',
  display: 'swap',
  variable: '--font-brittany',
});

export const metadata: Metadata = {
  title: 'The Wedding Of Hilda & Iqbal',
  description: 'Minggu, 12 November 2023',
};

// app/layout.tsx
import { Providers } from './providers';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${josefin.variable} ${brittany.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
