
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Users, Monitor, Lightbulb, Award } from 'lucide-react';

interface ActivityCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const ActivityCard = ({ title, description, icon, color }: ActivityCardProps) => {
  return (
    <Card className="h-full border-0 shadow-md hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${color}`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

const ActivitiesSection = () => {
  const activities = [
    {
      title: "Coding Workshops",
      description: "Weekly hands-on sessions teaching different programming languages and frameworks.",
      icon: <Code className="text-white" />,
      color: "bg-blue-600",
    },
    {
      title: "Hackathons",
      description: "Intensive coding events where teams collaborate to solve problems and build projects.",
      icon: <Users className="text-white" />,
      color: "bg-purple-600",
    },
    {
      title: "Tech Talks",
      description: "Presentations by industry professionals and academics on emerging technologies.",
      icon: <Monitor className="text-white" />,
      color: "bg-green-600",
    },
    {
      title: "Project Development",
      description: "Collaborative projects where members apply their skills to create innovative solutions.",
      icon: <Lightbulb className="text-white" />,
      color: "bg-yellow-600",
    },
    {
      title: "Competitions",
      description: "Participation in regional and national technology competitions and challenges.",
      icon: <Award className="text-white" />,
      color: "bg-red-600",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Activities</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore the various activities and events that make our IT Club a hub of innovation and learning.
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
