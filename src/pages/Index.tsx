
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import TeamSection from '@/components/TeamSection';
import ActivitiesSection from '@/components/ActivitiesSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <AboutSection />
        <ActivitiesSection />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
