import type { Metadata } from 'next';
import { CATEGORIES } from '@/lib/constants';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const categorySlug = category.toLowerCase();
  const categoryData = CATEGORIES.find(cat => cat.slug === categorySlug);
  const categoryName = categoryData?.name || categorySlug.toUpperCase();

  if (categorySlug === 'boys') {
    return {
      title: 'Boys Collection | CLOTHTHEORY',
      description: 'Premium boys apparel — hoodies, joggers, polos and more.',
      openGraph: {
        title: 'Boys Collection | CLOTHTHEORY',
        description: 'Premium boys apparel — hoodies, joggers, polos and more.',
        type: 'website',
      },
    };
  }

  if (categorySlug === 'girls') {
    return {
      title: 'Girls Collection | CLOTHTHEORY',
      description: 'Premium girls apparel — sets, hoodies, joggers and more.',
      openGraph: {
        title: 'Girls Collection | CLOTHTHEORY',
        description: 'Premium girls apparel — sets, hoodies, joggers and more.',
        type: 'website',
      },
    };
  }

  return {
    title: `${categoryName} | CLOTHTHEORY`,
    description: `${categoryName} collection`,
  };
}

export default function CategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
