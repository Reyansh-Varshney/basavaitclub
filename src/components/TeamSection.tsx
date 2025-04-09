
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Github, Linkedin, Mail } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

const TeamMember = ({ name, role, bio, imageUrl }: TeamMemberProps) => {
  return (
    <Card className="overflow-hidden transform transition-all hover:shadow-lg">
      <div className="aspect-square overflow-hidden bg-gray-100">
        <img 
          src={imageUrl || "/placeholder.svg"} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold">{name}</h3>
        <div className="text-sm font-medium text-blue-600 mb-3">{role}</div>
        <p className="text-gray-600 mb-4 text-sm">{bio}</p>
        <div className="flex gap-3">
          <a href="#" className="text-gray-500 hover:text-itclub-blue transition-colors">
            <Github size={18} />
          </a>
          <a href="#" className="text-gray-500 hover:text-itclub-blue transition-colors">
            <Linkedin size={18} />
          </a>
          <a href="#" className="text-gray-500 hover:text-itclub-blue transition-colors">
            <Mail size={18} />
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

const TeamSection = () => {
  const leaders = [
    {
      name: "Prabhav Kumar",
      role: "Founder",
      bio: "Passionate about technology and innovation, leading the IT Club to new heights.",
      imageUrl: "/placeholder.svg",
    },
    {
      name: "Naman Gupta",
      role: "Founder",
      bio: "Tech enthusiast with expertise in programming and system design.",
      imageUrl: "/placeholder.svg",
    },
    {
      name: "Reyansh Varshney",
      role: "President",
      bio: "Leading club initiatives and fostering a collaborative learning environment.",
      imageUrl: "/placeholder.svg",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get to know the brilliant minds behind the IT Club at Basava International School.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <TeamMember key={index} {...leader} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
