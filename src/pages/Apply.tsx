
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Apply = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-black to-slate-900 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 animate-fade-in text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Join the Technexus</h1>
            <p className="text-xl max-w-2xl mx-auto animate-slide-up text-slate-300">
              Take the first step towards enhancing your tech skills and being part of an innovative community.
            </p>
          </div>
        </div>

        <section className="py-12 bg-black">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="cyberpunk-card rounded-lg overflow-hidden mouse-tracking-border">
              <h2 className="text-2xl font-semibold p-6 border-b border-slate-800 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Application Form</h2>
              <div style={{ position: 'relative', width: '100%', paddingBottom: '75%' }}> 
                <iframe
                  title="Application Form"
                  width="100%"
                  height="100%"
                  src="https://forms.office.com/Pages/ResponsePage.aspx?id=eYUgpg8bDUezEadmZ3bYIe0lSzmNN8ZBg9K-C0IVlGZUQkNRVjZIM1lFODNaS0ZaWVpVN1BKWFVXVi4u&embed=true"
                  style={{ 
                    position: 'absolute', 
                    top: 0, 
                    left: 0, 
                    border: 'none',
                    width: '100%',
                    height: '100%'
                  }}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Apply;
