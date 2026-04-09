import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ClothTheory | Editorial Fashion',
  description: 'ClothTheory - A modern fashion landing page',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-black via-zinc-950 to-black text-white">
        {children}
      </body>
    </html>
  );
}
