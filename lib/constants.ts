/**
 * Constants and configuration for the ClothTheory application
 */

import { Category, NavLink } from './types';

export interface Product {
  id: number;
  name: string;
  category: string;
  gender: 'boys' | 'girls';
  images: string;
}

export const CATEGORIES: Category[] = [
  { name: 'Boys', slug: 'boys', seed: 'boys', description: 'Redefining everyday wear for young innovators' },
  { name: 'Girls', slug: 'girls', seed: 'girls', description: 'Bold cuts and uncompromising quality' },
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

export const BOYS_PRODUCTS: Product[] = [
  // Full Sleeves
  {
    id: 1,
    name: 'Full Sleeves 1',
    category: 'Full Sleeves',
    gender: 'boys',
    images: '/images/boys shortlisted/Full Sleeves/Gemini_Generated_Image_18rius18rius18ri.png',
  },
  {
    id: 2,
    name: 'Full Sleeves 2',
    category: 'Full Sleeves',
    gender: 'boys',
    images: '/images/boys shortlisted/Full Sleeves/Gemini_Generated_Image_wv47eqwv47eqwv47.png',
  },
  {
    id: 3,
    name: 'Full Sleeves 3',
    category: 'Full Sleeves',
    gender: 'boys',
    images: '/images/boys shortlisted/Full Sleeves/Gemini_Generated_Image_xvmfptxvmfptxvmf.png',
  },
  // Hoodie
  {
    id: 4,
    name: 'Hoodie 1',
    category: 'Hoodie',
    gender: 'boys',
    images: '/images/boys shortlisted/Hoodie/Gemini_Generated_Image_1a68y31a68y31a68.png',
  },
  {
    id: 5,
    name: 'Hoodie 2',
    category: 'Hoodie',
    gender: 'boys',
    images: '/images/boys shortlisted/Hoodie/Gemini_Generated_Image_igprgwigprgwigpr.png',
  },
  {
    id: 6,
    name: 'Hoodie 3',
    category: 'Hoodie',
    gender: 'boys',
    images: '/images/boys shortlisted/Hoodie/Gemini_Generated_Image_llsctyllsctyllsc.png',
  },
  // Joggers
  {
    id: 7,
    name: 'Joggers 1',
    category: 'Joggers',
    gender: 'boys',
    images: '/images/boys shortlisted/Joggers/Gemini_Generated_Image_7o1x087o1x087o1x.png',
  },
  {
    id: 8,
    name: 'Joggers 2',
    category: 'Joggers',
    gender: 'boys',
    images: '/images/boys shortlisted/Joggers/Gemini_Generated_Image_95ssly95ssly95ss.png',
  },
  {
    id: 9,
    name: 'Joggers 3',
    category: 'Joggers',
    gender: 'boys',
    images: '/images/boys shortlisted/Joggers/img 2.jpg',
  },
  // Polos
  {
    id: 10,
    name: 'Polos 1',
    category: 'Polos',
    gender: 'boys',
    images: '/images/boys shortlisted/Polos/Gemini_Generated_Image_f9yaibf9yaibf9ya.png',
  },
  {
    id: 11,
    name: 'Polos 2',
    category: 'Polos',
    gender: 'boys',
    images: '/images/boys shortlisted/Polos/Gemini_Generated_Image_fpbfc8fpbfc8fpbf.png',
  },
  // Printed Full Sleeves
  {
    id: 12,
    name: 'Printed Full Sleeves 1',
    category: 'Printed Full Sleeves',
    gender: 'boys',
    images: '/images/boys shortlisted/Printed Full Sleeves/Gemini_Generated_Image_22d0fi22d0fi22d0.png',
  },
  // Printed Polo
  {
    id: 13,
    name: 'Printed Polo 1',
    category: 'Printed Polo',
    gender: 'boys',
    images: '/images/boys shortlisted/Printed Polo/Gemini_Generated_Image_d1b7d3d1b7d3d1b7.png',
  },
  {
    id: 14,
    name: 'Printed Polo 2',
    category: 'Printed Polo',
    gender: 'boys',
    images: '/images/boys shortlisted/Printed Polo/Gemini_Generated_Image_h3z66th3z66th3z6.png',
  },
  {
    id: 15,
    name: 'Printed Polo 3',
    category: 'Printed Polo',
    gender: 'boys',
    images: '/images/boys shortlisted/Printed Polo/Gemini_Generated_Image_tv95iytv95iytv95.png',
  },
  // Shorts
  {
    id: 16,
    name: 'Shorts 1',
    category: 'Shorts',
    gender: 'boys',
    images: '/images/boys shortlisted/Shorts/ChatGPT Image Mar 18, 2026, 02_05_31 PM.png',
  },
  {
    id: 17,
    name: 'Shorts 2',
    category: 'Shorts',
    gender: 'boys',
    images: '/images/boys shortlisted/Shorts/Gemini_Generated_Image_5925s85925s85925.png',
  },
  {
    id: 18,
    name: 'Shorts 3',
    category: 'Shorts',
    gender: 'boys',
    images: '/images/boys shortlisted/Shorts/Gemini_Generated_Image_syaucksyaucksyau.png',
  },
  // Slub Shorts
  {
    id: 19,
    name: 'Slub Shorts 1',
    category: 'Slub Shorts',
    gender: 'boys',
    images: '/images/boys shortlisted/Slub Shorts/Gemini_Generated_Image_8wnziu8wnziu8wnz (1).png',
  },
  {
    id: 20,
    name: 'Slub Shorts 2',
    category: 'Slub Shorts',
    gender: 'boys',
    images: '/images/boys shortlisted/Slub Shorts/Gemini_Generated_Image_fzlizjfzlizjfzli.png',
  },
  {
    id: 21,
    name: 'Slub Shorts 3',
    category: 'Slub Shorts',
    gender: 'boys',
    images: '/images/boys shortlisted/Slub Shorts/Gemini_Generated_Image_m57e6vm57e6vm57e-Photoroom.png',
  },
  // Solid Tshirts
  {
    id: 22,
    name: 'Solid Tshirts 1',
    category: 'Solid Tshirts',
    gender: 'boys',
    images: '/images/boys shortlisted/Solid Tshirts/Gemini_Generated_Image_e2phu9e2phu9e2ph-Photoroom.png',
  },
  {
    id: 23,
    name: 'Solid Tshirts 2',
    category: 'Solid Tshirts',
    gender: 'boys',
    images: '/images/boys shortlisted/Solid Tshirts/JWiOr-Photoroom.png',
  },
  {
    id: 24,
    name: 'Solid Tshirts 3',
    category: 'Solid Tshirts',
    gender: 'boys',
    images: '/images/boys shortlisted/Solid Tshirts/qYMfp-Photoroom.png',
  },
];
