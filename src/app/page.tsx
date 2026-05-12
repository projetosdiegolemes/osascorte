"use client";

import React from 'react';
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { SolutionsGrid } from '../components/SolutionsGrid';
import { AuthoritySection } from '../components/AuthoritySection';
import { TechDifferentiator } from '../components/TechDifferentiator';
import { CustomPackagingForm } from '../components/CustomPackagingForm';
import { Footer } from '../components/Footer';

export default function Page() {
  return (
    <div className="bg-neutral-950 min-h-screen font-sans">
      <Header />
      <main>
        <HeroSection />
        <SolutionsGrid />
        <AuthoritySection />
        <TechDifferentiator />
        <CustomPackagingForm />
      </main>
      <Footer />
    </div>
  );
}