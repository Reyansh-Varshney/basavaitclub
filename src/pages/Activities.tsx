
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ActivitiesSection from '@/components/ActivitiesSection';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock } from 'lucide-react';

const Activities = () => {
  const upcomingEvents = [
    {
      title: "Web Development Workshop",
      date: "April 15, 2023",
      time: "3:30 PM - 5:00 PM",
      location: "Computer Lab 1",
      description: "Learn the basics of HTML, CSS, and JavaScript to create your own website.",
    },
    {
      title: "Coding Competition",
      date: "April 22, 2023",
      time: "2:00 PM - 5:00 PM",
      location: "Auditorium",
      description: "Test your programming skills in this exciting competition with prizes for the winners.",
    },
    {
      title: "Tech Talk: AI and Machine Learning",
      date: "May 5, 2023",
      time: "4:00 PM - 5:00 PM",
      location: "Lecture Hall",
      description: "Guest speaker from Google will discuss the latest trends in AI and machine learning.",
    },
  ];

  const pastEvents = [
    {
      title: "Mobile App Development Workshop",
      date: "March 18, 2023",
      description: "Introduction to Android app development using Kotlin.",
    },
    {
      title: "Hackathon 2023",
      date: "February 25-26, 2023",
      description: "24-hour coding marathon where teams built innovative solutions for real-world problems.",
    },
    {
      title: "Cybersecurity Seminar",
      date: "January 20, 2023",
      description: "Learning about online safety and basic cybersecurity practices.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-6">Activities & Events</h1>
            <p className="text-lg text-gray-600 max-w-3xl">
              Discover the exciting activities and events organized by the IT Club at Basava International School.
            </p>
          </div>
        </div>
        
        <ActivitiesSection />
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Upcoming Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="border-0 shadow hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                    <div className="flex items-center gap-2 text-gray-600 mb-2">
                      <Calendar size={16} />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 mb-4">
                      <Clock size={16} />
                      <span>{event.time}</span>
                    </div>
                    <p className="text-sm font-medium mb-1">Location: {event.location}</p>
                    <p className="text-gray-600">{event.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <h2 className="text-3xl font-bold my-12 text-center">Past Events</h2>
            <div className="max-w-3xl mx-auto">
              {pastEvents.map((event, index) => (
                <div key={index} className="mb-8 pb-8 border-b border-gray-200 last:border-0">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                    <div className="text-gray-500 whitespace-nowrap">{event.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Activities;
