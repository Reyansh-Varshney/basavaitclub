import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center">
                <img 
                  src="/lovable-uploads/c109c9d0-4d8f-4537-aba5-a245f5075e15.png" 
                  alt="Technexus Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-bold text-2xl text-white">Technexus</span>
            </div>
            <p className="text-slate-300">
              Empowering students with technology skills and fostering innovation at Basava International School.
            </p>
            <div>
              <a href="mailto:technexus@basava.edu.in" className="text-slate-300 hover:text-white flex items-center gap-2 transition-colors">
                <Mail size={18} />
                <span>technexus@basava.edu.in</span>
              </a>
            </div>
          </div>

          <div className="md:ml-auto">
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-slate-300 hover:text-white transition-colors hover-scale inline-block">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-300 hover:text-white transition-colors hover-scale inline-block">About</Link>
              </li>
              <li>
                <Link to="/activities" className="text-slate-300 hover:text-white transition-colors hover-scale inline-block">Activities</Link>
              </li>
              <li>
                <Link to="/team" className="text-slate-300 hover:text-white transition-colors hover-scale inline-block">Team</Link>
              </li>
              <li>
                <Link to="/apply" className="text-slate-300 hover:text-white transition-colors hover-scale inline-block">Join Us</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Contact</h3>
            <div className="space-y-4 text-slate-300">
              <p className="flex items-start gap-2">
                <span className="flex-shrink-0 mt-1"><ExternalLink size={18} /></span>
                <span>Basava International School<br />New Delhi, India</span>
              </p>
              <p>Email: TechNexus@basava.edu.in</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 text-center text-slate-400">
          <p>© {currentYear} Technexus - Basava International School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
