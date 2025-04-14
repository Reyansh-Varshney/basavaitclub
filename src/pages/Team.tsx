import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TeamSection from '@/components/TeamSection';
const Team = () => {
  return <div className="min-h-screen flex flex-col bg-slate-900">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-slate-800 py-12">
          <div className="container mx-auto px-4 py-[17px]">
            <h1 className="text-4xl font-bold mb-6 text-white">Our Team</h1>
            <p className="text-lg text-slate-300 max-w-3xl">
              Meet the dedicated individuals who make the Technexus at Basava International School a success.
            </p>
          </div>
        </div>

        <TeamSection />
      </main>
      <Footer />
    </div>;
};
export default Team;