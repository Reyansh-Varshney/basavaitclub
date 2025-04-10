import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TeamSection from '@/components/TeamSection';
import { Card, CardContent } from '@/components/ui/card';
import { Mail } from 'lucide-react';

const Team = () => {
  const mentors = [
    {
      name: "Priyanka Bhardwaj",
      role: "Innovation Mentor",
      subject: "Computer Applications",
      bio: "Supporting students in creative problem-solving and innovative project development."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-6">Our Team</h1>
            <p className="text-lg text-gray-600 max-w-3xl">
              Meet the dedicated individuals who make the IT Club at Basava International School a success.
            </p>
          </div>
        </div>

        <TeamSection />

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Faculty Mentors</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {mentors.map((mentor, index) => (
                <Card key={index} className="border-0 shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold">{mentor.name}</h3>
                    <div className="text-blue-600 font-medium mb-1">{mentor.role}</div>
                    <div className="text-sm text-gray-500 mb-3">Subject: {mentor.subject}</div>
                    <p className="text-gray-600 mb-4">{mentor.bio}</p>
                    <a
                      href={`mailto:${mentor.name.toLowerCase().replace(' ', '.')}@basava.edu.in`}
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
                    >
                      <Mail size={16} />
                      <span>Contact</span>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Team;
