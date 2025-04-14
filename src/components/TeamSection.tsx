
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
    <Card className="cyberpunk-card group bg-slate-900/40 border-slate-700/30 mouse-tracking-border" style={{ animationDelay: delay }}>
      <div className="p-8 flex flex-col items-center relative overflow-hidden">
        <Avatar className="h-28 w-28 mb-6 ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all">
          <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white text-xl">
            {initials}
          </AvatarFallback>
        </Avatar>
        <h3 className="text-xl font-bold text-center text-white group-hover:text-primary transition-colors">{name}</h3>
        <div className="text-sm font-medium text-primary mb-4 text-center">{role}</div>
        <p className="text-slate-400 mb-6 text-sm text-center">{bio}</p>
        
        {/* Futuristic lines */}
        <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-primary/30 rounded-t-lg"></div>
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
      bio: "Too Passionate about technology and master in video editing.",
    },
    {
      name: "Priyanka Bhardwaj",
      role: "Mentor",
      bio: "Guiding and supporting the team with her extensive knowledge and experience in the tech industry.",
    },
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full filter blur-3xl"></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptLTUgMmg0djFoLTR2LTF6bTAtMmgxdjRoLTF2LTR6bS01IDJoNHYxaC00di0xem0wLTJoMXY0aC0xdi00em0tNSAyaDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptLTUgMmg0djFoLTR2LTF6bTAtMmgxdjRoLTF2LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary inline-block">Meet Our Team</h2>
          <div className="divider"></div>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
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
