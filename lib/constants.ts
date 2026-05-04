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
    images: '/images/boys shortlisted/Full Sleeves/Gemini_Generated_Image_18rius18rius18ri.jpg',
  },
  {
    id: 2,
    name: 'Full Sleeves 2',
    category: 'Full Sleeves',
    gender: 'boys',
    images: '/images/boys shortlisted/Full Sleeves/Gemini_Generated_Image_wv47eqwv47eqwv47.jpg',
  },
  {
    id: 3,
    name: 'Full Sleeves 3',
    category: 'Full Sleeves',
    gender: 'boys',
    images: '/images/boys shortlisted/Full Sleeves/Gemini_Generated_Image_xvmfptxvmfptxvmf.jpg',
  },
  // Hoodie
  {
    id: 4,
    name: 'Hoodie 1',
    category: 'Hoodie',
    gender: 'boys',
    images: '/images/boys shortlisted/Hoodie/Gemini_Generated_Image_1a68y31a68y31a68.jpg',
  },
  {
    id: 5,
    name: 'Hoodie 2',
    category: 'Hoodie',
    gender: 'boys',
    images: '/images/boys shortlisted/Hoodie/Gemini_Generated_Image_igprgwigprgwigpr.jpg',
  },
  {
    id: 6,
    name: 'Hoodie 3',
    category: 'Hoodie',
    gender: 'boys',
    images: '/images/boys shortlisted/Hoodie/Gemini_Generated_Image_llsctyllsctyllsc.jpg',
  },
  // Joggers
  {
    id: 7,
    name: 'Joggers 1',
    category: 'Joggers',
    gender: 'boys',
    images: '/images/boys shortlisted/Joggers/Gemini_Generated_Image_7o1x087o1x087o1x.jpg',
  },
  {
    id: 8,
    name: 'Joggers 2',
    category: 'Joggers',
    gender: 'boys',
    images: '/images/boys shortlisted/Joggers/Gemini_Generated_Image_95ssly95ssly95ss.jpg',
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
    images: '/images/boys shortlisted/Polos/Gemini_Generated_Image_f9yaibf9yaibf9ya.jpg',
  },
  {
    id: 11,
    name: 'Polos 2',
    category: 'Polos',
    gender: 'boys',
    images: '/images/boys shortlisted/Polos/Gemini_Generated_Image_fpbfc8fpbfc8fpbf.jpg',
  },
  // Printed Full Sleeves
  {
    id: 12,
    name: 'Printed Full Sleeves 1',
    category: 'Printed Full Sleeves',
    gender: 'boys',
    images: '/images/boys shortlisted/Printed Full Sleeves/Gemini_Generated_Image_22d0fi22d0fi22d0.jpg',
  },
  // Printed Polo
  {
    id: 13,
    name: 'Printed Polo 1',
    category: 'Printed Polo',
    gender: 'boys',
    images: '/images/boys shortlisted/Printed Polo/Gemini_Generated_Image_d1b7d3d1b7d3d1b7.jpg',
  },
  {
    id: 14,
    name: 'Printed Polo 2',
    category: 'Printed Polo',
    gender: 'boys',
    images: '/images/boys shortlisted/Printed Polo/Gemini_Generated_Image_h3z66th3z66th3z6.jpg',
  },
  {
    id: 15,
    name: 'Printed Polo 3',
    category: 'Printed Polo',
    gender: 'boys',
    images: '/images/boys shortlisted/Printed Polo/Gemini_Generated_Image_tv95iytv95iytv95.jpg',
  },
  // Shorts
  {
    id: 16,
    name: 'Shorts 1',
    category: 'Shorts',
    gender: 'boys',
    images: '/images/boys shortlisted/Shorts/ChatGPT Image Mar 18, 2026, 02_05_31 PM.jpg',
  },
  {
    id: 17,
    name: 'Shorts 2',
    category: 'Shorts',
    gender: 'boys',
    images: '/images/boys shortlisted/Shorts/Gemini_Generated_Image_5925s85925s85925.jpg',
  },
  {
    id: 18,
    name: 'Shorts 3',
    category: 'Shorts',
    gender: 'boys',
    images: '/images/boys shortlisted/Shorts/Gemini_Generated_Image_syaucksyaucksyau.jpg',
  },
  // Slub Shorts
  {
    id: 19,
    name: 'Slub Shorts 1',
    category: 'Slub Shorts',
    gender: 'boys',
    images: '/images/boys shortlisted/Slub Shorts/Gemini_Generated_Image_8wnziu8wnziu8wnz (1).jpg',
  },
  {
    id: 20,
    name: 'Slub Shorts 2',
    category: 'Slub Shorts',
    gender: 'boys',
    images: '/images/boys shortlisted/Slub Shorts/Gemini_Generated_Image_fzlizjfzlizjfzli.jpg',
  },
  {
    id: 21,
    name: 'Slub Shorts 3',
    category: 'Slub Shorts',
    gender: 'boys',
    images: '/images/boys shortlisted/Slub Shorts/Gemini_Generated_Image_m57e6vm57e6vm57e-Photoroom.jpg',
  },
  // Solid Tshirts
  {
    id: 22,
    name: 'Solid Tshirts 1',
    category: 'Solid Tshirts',
    gender: 'boys',
    images: '/images/boys shortlisted/Solid Tshirts/Gemini_Generated_Image_e2phu9e2phu9e2ph-Photoroom.jpg',
  },
  {
    id: 23,
    name: 'Solid Tshirts 2',
    category: 'Solid Tshirts',
    gender: 'boys',
    images: '/images/boys shortlisted/Solid Tshirts/JWiOr-Photoroom.jpg',
  },
  {
    id: 24,
    name: 'Solid Tshirts 3',
    category: 'Solid Tshirts',
    gender: 'boys',
    images: '/images/boys shortlisted/Solid Tshirts/qYMfp-Photoroom.jpg',
  },
];

export const GIRLS_PRODUCTS: Product[] = [
  // Coord Set
  {
    id: 25,
    name: 'Coord Set 1',
    category: 'Coord Set',
    gender: 'girls',
    images: '/images/girls shortlisted/Coord Set/ChatGPT Image Feb 17, 2026, 01_18_00 PM.jpg',
  },
  {
    id: 26,
    name: 'Coord Set 2',
    category: 'Coord Set',
    gender: 'girls',
    images: '/images/girls shortlisted/Coord Set/Gemini_Generated_Image_awt7r6awt7r6awt7.jpg',
  },
  {
    id: 27,
    name: 'Coord Set 3',
    category: 'Coord Set',
    gender: 'girls',
    images: '/images/girls shortlisted/Coord Set/Gemini_Generated_Image_pi4zu3pi4zu3pi4z.jpg',
  },
  // Hoodies
  {
    id: 28,
    name: 'Hoodies 1',
    category: 'Hoodies',
    gender: 'girls',
    images: '/images/girls shortlisted/Hoodies/2a9ff8f8-f775-488e-9642-d40eec8c0a70.jpg',
  },
  {
    id: 29,
    name: 'Hoodies 2',
    category: 'Hoodies',
    gender: 'girls',
    images: '/images/girls shortlisted/Hoodies/780db7b2-826b-432f-99f1-b99ca7cfc5af.jpg',
  },
  {
    id: 30,
    name: 'Hoodies 3',
    category: 'Hoodies',
    gender: 'girls',
    images: '/images/girls shortlisted/Hoodies/Gemini_Generated_Image_2v5wzi2v5wzi2v5w.jpg',
  },
  // Joggers
  {
    id: 31,
    name: 'Joggers 1',
    category: 'Joggers',
    gender: 'girls',
    images: '/images/girls shortlisted/Joggers/Gemini_Generated_Image_2o6ugp2o6ugp2o6u.jpg',
  },
  {
    id: 32,
    name: 'Joggers 2',
    category: 'Joggers',
    gender: 'girls',
    images: '/images/girls shortlisted/Joggers/Gemini_Generated_Image_7z75ub7z75ub7z75.jpg',
  },
  {
    id: 33,
    name: 'Joggers 3',
    category: 'Joggers',
    gender: 'girls',
    images: '/images/girls shortlisted/Joggers/Gemini_Generated_Image_v9rjijv9rjijv9rj.jpg',
  },
  // Pajamas
  {
    id: 34,
    name: 'Pajamas 1',
    category: 'Pajamas',
    gender: 'girls',
    images: '/images/girls shortlisted/Pajamas/Gemini_Generated_Image_69clf769clf769cl.jpg',
  },
  // Shorts
  {
    id: 35,
    name: 'Shorts 1',
    category: 'Shorts',
    gender: 'girls',
    images: '/images/girls shortlisted/Shorts/Firefly_Gemini Flash_intha image vanthu 13-14 years rendu girl model wear panni irukura maari venum and av 203503-Photoroom.jpg',
  },
  {
    id: 36,
    name: 'Shorts 2',
    category: 'Shorts',
    gender: 'girls',
    images: '/images/girls shortlisted/Shorts/Firefly_Gemini Flash_intha image vanthu 13-14 years rendu girl model wear panni irukura maari venum and av 203503-Photoroom.jpg',
  },
  {
    id: 37,
    name: 'Shorts 3',
    category: 'Shorts',
    gender: 'girls',
    images: '/images/girls shortlisted/Shorts/Gemini_Generated_Image_2ubpkf2ubpkf2ubp.jpg',
  },
  // Sleeper
  {
    id: 38,
    name: 'Sleeper 1',
    category: 'Sleeper',
    gender: 'girls',
    images: '/images/girls shortlisted/Sleeper/Gemini_Generated_Image_mbojr0mbojr0mboj.jpg',
  },
  {
    id: 39,
    name: 'Sleeper 2',
    category: 'Sleeper',
    gender: 'girls',
    images: '/images/girls shortlisted/Sleeper/Gemini_Generated_Image_udde4budde4budde.jpg',
  },
  {
    id: 40,
    name: 'Sleeper 3',
    category: 'Sleeper',
    gender: 'girls',
    images: '/images/girls shortlisted/Sleeper/Gemini_Generated_Image_x09j6dx09j6dx09j.jpg',
  },
];
