import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ActivitiesSection from '@/components/ActivitiesSection';

const Activities = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-6">Activities & Events</h1>
            <p className="text-lg text-gray-600 max-w-3xl">
              Discover the exciting activities and events we're planning for the newly formed IT Club at Basava International School.
            </p>
          </div>
        </div>

        <ActivitiesSection />

      </main>
      <Footer />
    </div>
  );
};

export default Activities;
