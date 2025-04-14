import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
}

const TeamMember = ({ name, role, bio }: TeamMemberProps) => {
  // Get initials for the avatar fallback
  const initials = name
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase();

  return (
    <Card className="overflow-hidden transform transition-all hover:shadow-lg">
      <div className="p-6 flex flex-col items-center">
        <Avatar className="h-24 w-24 mb-4">
          <AvatarFallback className="bg-blue-100 text-blue-800 text-xl">
            {initials}
          </AvatarFallback>
        </Avatar>
        <h3 className="text-xl font-bold text-center">{name}</h3>
        <div className="text-sm font-medium text-blue-600 mb-3 text-center">{role}</div>
        <p className="text-gray-600 mb-4 text-sm text-center">{bio}</p>
      </div>
    </Card>
  );
};

const TeamSection = () => {
  const leaders = [
    {
      name: "Prabhav Kumar",
      role: "Founder",
      bio: "Passionate about technology and innovation, leading the Technexus to new heights.",
    },
    {
      name: "Naman Gupta",
      role: "Founder",
      bio: "Tech enthusiast with expertise in programming and system design.",
    },
    {
      name: "Reyansh Varshney",
      role: "Secreatary",
      bio: "Leading club initiatives and fostering a collaborative learning environment.",
    },
    {
      name: "Vedaant Gomber",
      role: "Vice Secretary",
      bio: "A True all-rounder and a future prospect for the IT Club.",
    },
    {
      name: "Bhawani Shankar",
      role: "Mentor",
      bio: "Too Passionate too much about technology and master in video editing.",
    },
    {
      name: "Priyanka Bhardwaj",
      role: "Mentor",
      bio: "Guiding and supporting the team with her extensive knowledge and experience in the tech industry.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get to know the brilliant minds behind the Technexus at Basava International School.
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
