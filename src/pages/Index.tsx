
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Solution from '@/components/Solution';
import USP from '@/components/USP';
import Benefits from '@/components/Benefits';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import FAQ from '@/components/FAQ';
import ContactTrust from '@/components/ContactTrust';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <USP />
        <Benefits />
        <Process />
        <Testimonials />
        <CTA />
        <FAQ />
        <ContactTrust />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
