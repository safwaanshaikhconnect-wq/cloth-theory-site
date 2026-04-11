/**
 * Global type definitions for the ClothTheory application
 */

export interface Category {
  name: string;
  slug: string;
  seed: string;
  description?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface AnimationVariant {
  hidden: Record<string, any>;
  visible: Record<string, any>;
}

export type AnimationType = 'fadeUp' | 'fadeDown' | 'slideLeft' | 'slideRight' | 'scale';
