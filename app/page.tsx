'use client';

import { lazy, Suspense } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PanelsGrid from '@/components/PanelsGrid';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <PanelsGrid />
      <Footer />
    </main>
  );
}
