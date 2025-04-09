
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ApplicationForm from '@/components/ApplicationForm';

const Apply = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Join the IT Club</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Take the first step towards enhancing your tech skills and being part of an innovative community.
            </p>
          </div>
        </div>
        
        <section className="py-12 bg-white">
          <ApplicationForm />
        </section>
        
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl font-bold mb-6 text-center">Membership Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold mb-3">Skill Development</h3>
                <p className="text-gray-600">
                  Enhance your technical skills through hands-on workshops, projects, and mentorship.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold mb-3">Networking</h3>
                <p className="text-gray-600">
                  Connect with like-minded peers, faculty mentors, and industry professionals.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold mb-3">Competition Opportunities</h3>
                <p className="text-gray-600">
                  Represent your school in various technical competitions and hackathons.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold mb-3">Leadership Experience</h3>
                <p className="text-gray-600">
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
