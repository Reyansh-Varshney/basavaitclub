import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Apply = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-900">
      <Navbar />
      <main className="flex-grow">
        <div className="hero-gradient text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 animate-fade-in">Join the Technexus</h1>
            <p className="text-xl max-w-2xl mx-auto animate-slide-up">
              Take the first step towards enhancing your tech skills and being part of an innovative community.
            </p>
          </div>
        </div>

        <section className="py-12 bg-slate-800">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="glass-card rounded-lg overflow-hidden">
              <h2 className="text-2xl font-semibold p-6 border-b border-slate-700">Application Form</h2>
              <div style={{ position: 'relative', width: '100%', paddingBottom: '75%' }}> 
                <iframe
                  title="Application Form"
                  width="100%"
                  height="100%"
                  src="https://forms.office.com/Pages/ResponsePage.aspx?id=eYUgpg8bDUezEadmZ3bYIe0lSzmNN8ZBg9K-C0IVlGZUQkNRVjZIM1lFODNaS0ZaWVpVN1BKWFVXVi4u&embed=true"
                  frameBorder={0}
                  style={{ 
                    position: 'absolute', 
                    top: 0, 
                    left: 0, 
                    border: 'none',
                    width: '100%',
                    height: '100%'
                  }}
                  allowFullScreen
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
