
import React from 'react';
import { CheckCircle, Calendar, Users, Trophy, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section className="py-24 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary inline-block">About Our Club</h2>
          <div className="divider"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-white">Fostering Innovation and Technology Skills</h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              The Technexus at Basava International School is a newly formed group dedicated to nurturing technical talent and fostering innovation among students. Our mission is to provide a platform for students to explore various aspects of information technology, develop practical skills, and collaborate on exciting projects.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FeatureBox 
                icon={<CheckCircle className="text-primary" />}
                title="Hands-on Learning"
                description="Practical workshops on programming, web development, and more"
              />
              
              <FeatureBox 
                icon={<CheckCircle className="text-primary" />}
                title="Project Collaboration"
                description="Team-based projects that solve real-world problems"
              />
              
              <FeatureBox 
                icon={<CheckCircle className="text-primary" />}
                title="Competitions"
                description="Future participation in hackathons and coding competitions"
              />
              
              <FeatureBox 
                icon={<CheckCircle className="text-primary" />}
                title="Guest Speakers"
                description="Plans to invite industry professionals and tech experts"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <StatCard 
              icon={<Users className="text-primary" size={28} />}
              title="Current Members"
              value="4"
            />
            <StatCard 
              icon={<Zap className="text-secondary" size={28} />}
              title="Weekly Activities"
              value="5+"
            />
            <StatCard 
              icon={<Trophy className="text-amber-500" size={28} />}
              title="Future Goals"
              value="Many"
            />
            <StatCard 
              icon={<CheckCircle className="text-emerald-500" size={28} />}
              title="Projects Planned"
              value="5+"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

interface FeatureBoxProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureBox = ({ icon, title, description }: FeatureBoxProps) => {
  return (
    <div className="flex items-start gap-4 group hover-scale">
      <div className="mt-1 flex-shrink-0 p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-white">{title}</h4>
        <p className="text-slate-300 text-sm">{description}</p>
      </div>
    </div>
  );
};

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
}

const StatCard = ({ icon, title, value }: StatCardProps) => {
  return (
    <Card className="border-none shadow-lg hover-scale overflow-hidden bg-slate-700/40 border-slate-600/20">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="mb-4 p-4 rounded-full bg-slate-800">{icon}</div>
        <h3 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">{value}</h3>
        <p className="text-slate-300">{title}</p>
      </CardContent>
    </Card>
  );
};

export default AboutSection;
