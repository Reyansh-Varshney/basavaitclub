
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight, Code, Share2, Lightbulb } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-60 h-60 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
              Basava International School
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Welcome to the <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-purple-200">IT Club</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100">
              Empowering students with technology skills and fostering innovation through hands-on learning and collaborative projects.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/apply">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                  Join Now <ChevronRight className="ml-2" size={16} />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 animate-slide-up">
            <FeatureCard 
              icon={<Code />}
              title="Coding"
              description="Learn programming languages and build real-world projects"
            />
            <FeatureCard 
              icon={<Lightbulb />}
              title="Innovation"
              description="Develop creative solutions to everyday problems"
            />
            <FeatureCard 
              icon={<Share2 />}
              title="Collaboration"
              description="Work together on tech projects and competitions"
            />
            <FeatureCard 
              icon={<Code />}
              title="Workshops"
              description="Participate in hands-on tech learning sessions"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-colors">
      <div className="text-white mb-3">{icon}</div>
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      <p className="text-blue-100 text-sm">{description}</p>
    </div>
  );
};

export default Hero;
