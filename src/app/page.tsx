"use client";

import React from 'react';
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { SolutionsGrid } from '../components/SolutionsGrid';
import { AuthoritySection } from '../components/AuthoritySection';
import { TechDifferentiator } from '../components/TechDifferentiator';
import { CustomPackagingForm } from '../components/CustomPackagingForm';
import CustomerReviews from '../components/CustomerReviews';
import { FaqSection } from '../components/FaqSection';
import { Footer } from '../components/Footer';

export default function Page() {
  return (
    <div className="min-h-screen font-sans bg-slate-50">
      <Header />
      <main>
        <HeroSection />
        <SolutionsGrid />
        <AuthoritySection />
        <TechDifferentiator />
        <CustomerReviews />
        <FaqSection />
        <CustomPackagingForm />
      </main>
      <Footer />
    </div>
  );
}