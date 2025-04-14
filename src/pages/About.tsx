
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutSection from '@/components/AboutSection';
import { Separator } from '@/components/ui/separator';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-900">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-slate-800 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-6 text-white">
              About Us</h1>
            <p className="text-lg text-slate-300 max-w-3xl">
              Learn more about the newly formed Technexus at Basava International School, our mission, vision, and the team behind this exciting initiative.
            </p>
          </div>
        </div>

        <AboutSection />

        <section className="py-16 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-white">Our Mission</h2>
              <p className="text-lg text-slate-300 mb-8">
                The Technexus of Basava International School aims to foster a community of technology enthusiasts who learn, collaborate, and innovate together. We are dedicated to providing a platform for students to explore their interests in various fields of information technology and develop skills that will be valuable in their academic and professional careers.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-white">Our Vision</h2>
              <p className="text-lg text-slate-300 mb-8">
                We envision creating a vibrant ecosystem where students can enhance their technical skills, foster creativity, and develop a passion for technology. By encouraging hands-on learning and collaborative projects, we aim to prepare our members for the digital future and inspire them to become leaders in the tech industry.
              </p>

              <Separator className="my-8 bg-slate-700" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
