
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Users, Monitor, Lightbulb, Award } from 'lucide-react';

interface ActivityCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  delay: string;
}

const ActivityCard = ({ title, description, icon, color, delay }: ActivityCardProps) => {
  return (
    <Card className="h-full border-none shadow-lg hover-scale overflow-hidden bg-slate-900/40 border-slate-700/30 cyberpunk-card mouse-tracking-border" style={{ animationDelay: delay }}>
      <CardContent className="p-8 relative">
        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${color}`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
        <p className="text-slate-400">{description}</p>
        
        {/* Futuristic lines */}
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-primary/30 rounded-t-lg"></div>
      </CardContent>
    </Card>
  );
};

const ActivitiesSection = () => {
  const activities = [
    {
      title: "Coding Workshops",
      description: "Weekly hands-on sessions teaching different programming languages and frameworks.",
      icon: <Code className="text-white" size={24} />,
      color: "bg-black border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.3)]",
      delay: "0s",
    },
    {
      title: "Hackathons",
      description: "Intensive coding events where teams collaborate to solve problems and build projects.",
      icon: <Users className="text-white" size={24} />,
      color: "bg-black border border-violet-500/30 shadow-[0_0_15px_rgba(139,92,246,0.3)]",
      delay: "0.1s",
    },
    {
      title: "Tech Talks",
      description: "Presentations by industry professionals and academics on emerging technologies.",
      icon: <Monitor className="text-white" size={24} />,
      color: "bg-black border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.3)]",
      delay: "0.2s",
    },
    {
      title: "Project Development",
      description: "Collaborative projects where members apply their skills to create innovative solutions.",
      icon: <Lightbulb className="text-white" size={24} />,
      color: "bg-black border border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.3)]",
      delay: "0.3s",
    },
    {
      title: "Competitions",
      description: "Participation in regional and national technology competitions and challenges.",
      icon: <Award className="text-white" size={24} />,
      color: "bg-black border border-red-500/30 shadow-[0_0_15px_rgba(239,68,68,0.3)]",
      delay: "0.4s",
    },
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-secondary/5 rounded-full filter blur-3xl"></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptLTUgMmg0djFoLTR2LTF6bTAtMmgxdjRoLTF2LTR6bS01IDJoNHYxaC00di0xem0wLTJoMXY0aC0xdi00em0tNSAyaDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptLTUgMmg0djFoLTR2LTF6bTAtMmgxdjRoLTF2LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary inline-block">Our Activities</h2>
          <div className="divider"></div>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Explore the various activities and events that make our Technexus a hub of innovation and learning.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <ActivityCard key={index} {...activity} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
