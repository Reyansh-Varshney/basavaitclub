
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutSection from '@/components/AboutSection';
import { Separator } from '@/components/ui/separator';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-6">About Us</h1>
            <p className="text-lg text-gray-600 max-w-3xl">
              Learn more about the IT Club at Basava International School, our mission, values, and the team behind our success.
            </p>
          </div>
        </div>
        
        <AboutSection />
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-8">
                The IT Club of Basava International School aims to foster a community of technology enthusiasts who learn, collaborate, and innovate together. We are dedicated to providing a platform for students to explore their interests in various fields of information technology and develop skills that will be valuable in their academic and professional careers.
              </p>
              
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 mb-8">
                We envision creating a vibrant ecosystem where students can enhance their technical skills, foster creativity, and develop a passion for technology. By encouraging hands-on learning and collaborative projects, we aim to prepare our members for the digital future and inspire them to become leaders in the tech industry.
              </p>
              
              <Separator className="my-8" />
              
              <h2 className="text-3xl font-bold mb-6">Club History</h2>
              <p className="text-lg text-gray-600 mb-4">
                Founded in 2023 by Prabhav Kumar and Naman Gupta, the IT Club started as a small group of technology enthusiasts who wanted to create a space for students interested in coding and computer science. Under the presidency of Reyansh Varshney, the club has grown to include over 50 members, spanning various grades and interests within the technology domain.
              </p>
              <p className="text-lg text-gray-600">
                Since its inception, the club has organized numerous workshops, hackathons, and tech talks, providing members with opportunities to learn and grow. Our alumni have gone on to pursue higher education in prestigious institutions and careers in leading tech companies.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
