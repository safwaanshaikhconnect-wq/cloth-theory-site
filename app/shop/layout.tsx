import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shop | CLOTHTHEORY',
  description: 'Browse our boys and girls collections.',
  openGraph: {
    title: 'Shop | CLOTHTHEORY',
    description: 'Browse our boys and girls collections.',
    type: 'website',
  },
};

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
