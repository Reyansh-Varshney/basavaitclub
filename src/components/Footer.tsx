
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white pt-20 pb-10 relative overflow-hidden">
      {/* Glowing accent in the background */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full filter blur-3xl"></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptLTUgMmg0djFoLTR2LTF6bTAtMmgxdjRoLTF2LTR6bS01IDJoNHYxaC00di0xem0wLTJoMXY0aC0xdi00em0tNSAyaDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptLTUgMmg0djFoLTR2LTF6bTAtMmgxdjRoLTF2LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-6">
            <div className="flex items-center gap-3 mouse-tracking-border rounded-xl p-2">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center">
                <img 
                  src="/lovable-uploads/c109c9d0-4d8f-4537-aba5-a245f5075e15.png" 
                  alt="Technexus Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-bold text-2xl text-white">Technexus</span>
            </div>
            <p className="text-slate-400">
              Empowering students with technology skills and fostering innovation at Basava International School.
            </p>
            <div>
              <a href="mailto:technexus@basava.edu.in" className="text-slate-400 hover:text-primary flex items-center gap-2 transition-colors hover-scale">
                <Mail size={18} className="text-primary" />
                <span>technexus@basava.edu.in</span>
              </a>
            </div>
          </div>

          <div className="md:ml-auto">
            <h3 className="font-bold text-lg mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-slate-400 hover:text-primary transition-colors hover-scale inline-block relative mouse-tracking-border p-1 rounded">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-primary transition-colors hover-scale inline-block relative mouse-tracking-border p-1 rounded">About</Link>
              </li>
              <li>
                <Link to="/activities" className="text-slate-400 hover:text-primary transition-colors hover-scale inline-block relative mouse-tracking-border p-1 rounded">Activities</Link>
              </li>
              <li>
                <Link to="/team" className="text-slate-400 hover:text-primary transition-colors hover-scale inline-block relative mouse-tracking-border p-1 rounded">Team</Link>
              </li>
              <li>
                <Link to="/apply" className="text-slate-400 hover:text-primary transition-colors hover-scale inline-block relative mouse-tracking-border p-1 rounded">Join Us</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Contact</h3>
            <div className="space-y-4 text-slate-400">
              <p className="flex items-start gap-2">
                <span className="flex-shrink-0 mt-1"><MapPin size={18} className="text-primary" /></span>
                <span>Basava International School<br />New Delhi, India</span>
              </p>
              <p>Email: TechNexus@basava.edu.in</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 text-center text-slate-500">
          <p>© {currentYear} Technexus - Basava International School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
