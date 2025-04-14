
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
              <div style={{ position: 'relative', width: '100%', paddingBottom: '75%' }}> {/* Responsive container */}
                <iframe
                  title="Application Form"
                  width="100%"
                  height="100%"
                  src="https://forms.office.com/Pages/ResponsePage.aspx?id=eYUgpg8bDUezEadmZ3bYIe0lSzmNN8ZBg9K-C0IVlGZUQkNRVjZIM1lFODNaS0ZaWVpVN1BKWFVXVi4u&embed=true"
                  frameBorder={0}
                  marginWidth={0}
                  marginHeight={0}
                  style={{ position: 'absolute', top: 0, left: 0, border: 'none' }}
                  allowFullScreen
                  webkitallowfullscreen="true"
                  mozallowfullscreen="true"
                  msallowfullscreen="true"
                >
                </iframe>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-slate-900">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold mb-8 text-center text-white">Membership Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-card p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
                  </div>
                  <h3 className="text-lg font-bold text-white">Skill Development</h3>
                </div>
                <p className="text-slate-300">
                  Enhance your technical skills through hands-on workshops, projects, and mentorship.
                </p>
              </div>
              <div className="glass-card p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  </div>
                  <h3 className="text-lg font-bold text-white">Networking</h3>
                </div>
                <p className="text-slate-300">
                  Connect with like-minded peers, faculty mentors, and industry professionals.
                </p>
              </div>
              <div className="glass-card p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                  </div>
                  <h3 className="text-lg font-bold text-white">Competition Opportunities</h3>
                </div>
                <p className="text-slate-300">
                  Represent your school in various technical competitions and hackathons.
                </p>
              </div>
              <div className="glass-card p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  </div>
                  <h3 className="text-lg font-bold text-white">Leadership Experience</h3>
                </div>
                <p className="text-slate-300">
                  Develop leadership skills by taking on responsibilities and leading projects.
                </p>
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
