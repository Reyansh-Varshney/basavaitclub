
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight, Code, Share2, Lightbulb, Rocket } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 to-slate-900/90"></div>
        <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
        <div className="absolute -top-48 -right-48 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptLTUgMmg0djFoLTR2LTF6bTAtMmgxdjRoLTF2LTR6bS01IDJoNHYxaC00di0xem0wLTJoMXY0aC0xdi00em0tNSAyaDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptLTUgMmg0djFoLTR2LTF6bTAtMmgxdjRoLTF2LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-block neo-blur px-4 py-2 rounded-full text-sm font-medium text-white cyberpunk-card">
              Basava International School
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
              Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Technexus</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-lg">
              Empowering students with technology skills and fostering innovation through hands-on learning and collaborative projects.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/apply">
                <Button size="lg" className="futuristic-button rounded-full">
                  Join Now <ChevronRight className="ml-1" size={18} />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" className="futuristic-button rounded-full">
                  Learn More <ChevronRight className="ml-1" size={18} />
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="hidden md:grid md:grid-cols-2 gap-6">
            <FeatureCard 
              icon={<Code />}
              title="Coding"
              description="Learn programming languages and build real-world projects"
              className="animate-float mouse-tracking-border"
              delay="0s"
            />
            <FeatureCard 
              icon={<Lightbulb />}
              title="Innovation"
              description="Develop creative solutions to everyday problems"
              className="animate-float mouse-tracking-border"
              delay="0.5s"
            />
            <FeatureCard 
              icon={<Share2 />}
              title="Collaboration"
              description="Work together on tech projects and competitions"
              className="animate-float mouse-tracking-border"
              delay="1s"
            />
            <FeatureCard 
              icon={<Rocket />}
              title="Workshops"
              description="Participate in hands-on tech learning sessions"
              className="animate-float mouse-tracking-border"
              delay="1.5s"
            />
          </div>
        </div>
      </div>

      {/* Wave effect at the bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path fill="#000000" fillOpacity="1" d="M0,224L48,224C96,224,192,224,288,208C384,192,480,160,576,154.7C672,149,768,171,864,176C960,181,1056,171,1152,149.3C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  delay?: string;
}

const FeatureCard = ({ icon, title, description, className, delay = "0s" }: FeatureCardProps) => {
  return (
    <div 
      className={`cyberpunk-card p-6 rounded-xl hover:bg-slate-800/40 transition-all duration-300 ${className}`}
      style={{ animationDelay: delay }}
    >
      <div className="text-primary mb-4 p-3 bg-slate-800/50 rounded-full inline-block">{icon}</div>
      <h3 className="font-bold text-xl mb-2 text-white">{title}</h3>
      <p className="text-blue-100 text-sm">{description}</p>
    </div>
  );
};

export default Hero;
