
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  delay?: string;
}

const TeamMember = ({ name, role, bio, delay = "0s" }: TeamMemberProps) => {
  // Get initials for the avatar fallback
  const initials = name
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase();

  return (
    <Card className="team-card group bg-slate-800/60 border-slate-700/30" style={{ animationDelay: delay }}>
      <div className="p-8 flex flex-col items-center">
        <Avatar className="h-28 w-28 mb-6 ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all">
          <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white text-xl">
            {initials}
          </AvatarFallback>
        </Avatar>
        <h3 className="text-xl font-bold text-center text-white group-hover:text-primary transition-colors">{name}</h3>
        <div className="text-sm font-medium text-primary mb-4 text-center">{role}</div>
        <p className="text-slate-300 mb-6 text-sm text-center">{bio}</p>
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
      role: "Founder",
      bio: "Leading club initiatives and fostering a collaborative learning environment.",
    },
    {
      name: "Vedaant Gomber",
      role: "Secretary",
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
    <section className="py-24 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary inline-block">Meet Our Team</h2>
          <div className="divider"></div>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Get to know the brilliant minds behind the Technexus at Basava International School.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <TeamMember 
              key={index} 
              {...leader} 
              delay={`${index * 0.1}s`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
