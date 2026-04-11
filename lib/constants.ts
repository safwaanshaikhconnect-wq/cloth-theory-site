/**
 * Constants and configuration for the ClothTheory application
 */

import { Category, NavLink } from './types';

export const CATEGORIES: Category[] = [
  { name: 'Boys', slug: 'boys', seed: 'boys', description: 'Redefining everyday wear for young innovators' },
  { name: 'Girls', slug: 'girls', seed: 'girls', description: 'Bold cuts and uncompromising quality' },
  { name: 'Infant', slug: 'infant', seed: 'infant', description: 'Comfort meets style for little ones' },
  { name: 'Men', slug: 'men', seed: 'men', description: 'Contemporary menswear redefined' },
  { name: 'Women', slug: 'women', seed: 'women', description: 'Editorial fashion for the modern woman' },
];

export const FOOTER_LINKS: NavLink[] = [
  { label: 'About', href: '/#about' },
  { label: 'Stores', href: '/#stores' },
  { label: 'Terms', href: '/#terms' },
  { label: 'Privacy', href: '/#privacy' },
];

export const BRAND_NAME = 'CLOTHTHEORY';
export const BRAND_TAGLINE = 'Editorial Fashion';

export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com',
  twitter: 'https://twitter.com',
  facebook: 'https://facebook.com',
};

export const ANIMATION_DURATION = {
  FAST: 0.3,
  NORMAL: 0.5,
  SLOW: 0.8,
  SLOWER: 1.0,
};

export const ANIMATION_DELAY = {
  STAGGER: 0.1,
  SHORT: 0.15,
  MEDIUM: 0.3,
};
