
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
    <Card className="h-full border-none shadow-lg hover-scale overflow-hidden" style={{ animationDelay: delay }}>
      <CardContent className="p-8">
        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${color}`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-slate-600">{description}</p>
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
      color: "bg-gradient-to-br from-blue-500 to-blue-700",
      delay: "0s",
    },
    {
      title: "Hackathons",
      description: "Intensive coding events where teams collaborate to solve problems and build projects.",
      icon: <Users className="text-white" size={24} />,
      color: "bg-gradient-to-br from-violet-500 to-violet-700",
      delay: "0.1s",
    },
    {
      title: "Tech Talks",
      description: "Presentations by industry professionals and academics on emerging technologies.",
      icon: <Monitor className="text-white" size={24} />,
      color: "bg-gradient-to-br from-green-500 to-green-700",
      delay: "0.2s",
    },
    {
      title: "Project Development",
      description: "Collaborative projects where members apply their skills to create innovative solutions.",
      icon: <Lightbulb className="text-white" size={24} />,
      color: "bg-gradient-to-br from-amber-500 to-amber-700",
      delay: "0.3s",
    },
    {
      title: "Competitions",
      description: "Participation in regional and national technology competitions and challenges.",
      icon: <Award className="text-white" size={24} />,
      color: "bg-gradient-to-br from-red-500 to-red-700",
      delay: "0.4s",
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary inline-block">Our Activities</h2>
          <div className="divider"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
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
