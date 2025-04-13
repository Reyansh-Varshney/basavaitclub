
import React from 'react';
import { CheckCircle, Calendar, Users, Trophy } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
              About Our Club
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Fostering Innovation and Technology Skills</h2>
            <p className="text-gray-600 text-lg">
              The IT Club at Basava International School is a newly formed group dedicated to nurturing technical talent and fostering innovation among students. Our mission is to provide a platform for students to explore various aspects of information technology, develop practical skills, and collaborate on exciting projects.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-medium">Hands-on Learning</h3>
                  <p className="text-gray-600">Practical workshops on programming, web development, and more</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-medium">Project Collaboration</h3>
                  <p className="text-gray-600">Team-based projects that solve real-world problems</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-medium">Competitions</h3>
                  <p className="text-gray-600">Future participation in hackathons and coding competitions</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-medium">Guest Speakers</h3>
                  <p className="text-gray-600">Plans to invite industry professionals and tech experts</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">

            <StatCard 
              icon={<Users className="text-purple-600" />}
              title="Current Members"
              value="4"
            />
            <StatCard 
              icon={<Calendar className="text-blue-600" />}
              title="Weekly Meetings"
              value="Friday*"
            />
            <StatCard 
              icon={<Trophy className="text-yellow-600" />}
              title="Future Goals"
              value="Many"
            />
            <StatCard 
              icon={<CheckCircle className="text-green-600" />}
              title="Projects Planned"
              value="5+"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
}

const StatCard = ({ icon, title, value }: StatCardProps) => {
  return (
    <Card className="border-0 shadow-md">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="mb-4 p-3 bg-gray-50 rounded-full">{icon}</div>
        <h3 className="text-2xl font-bold mb-2">{value}</h3>
        <p className="text-gray-600">{title}</p>
      </CardContent>
    </Card>
  );
};

export default AboutSection;
