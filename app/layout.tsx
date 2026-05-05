import type { Metadata } from 'next';
import { ThemeProvider } from '@/contexts/ThemeContext';
import './globals.css';

export const metadata: Metadata = {
  title: 'CLOTHTHEORY',
  description: 'Premium kids apparel. Bold cuts and uncompromising quality.',
  openGraph: {
    title: 'CLOTHTHEORY',
    description: 'Premium kids apparel. Bold cuts and uncompromising quality.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-light dark:bg-dark text-light dark:text-dark transition-colors duration-300">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
