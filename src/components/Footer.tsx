
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

const Footer = () => {
  return <footer className="bg-itclub-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-r from-itclub-blue to-itclub-purple rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">IT</span>
              </div>
              <span className="font-bold text-xl text-white">Technexus</span>
            </div>
            <p className="text-gray-300">
              Empowering students with technology skills and fostering innovation at Basava International School.
            </p>
            <div>
              <a href="mailto:itclub@basavainternational.onmicrosoft.com" className="text-gray-300 hover:text-white flex items-center gap-2">
                <Mail size={20} />
                <span>itclub@basavainternational.onmicrosoft.com</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white">About</Link>
              </li>
              <li>
                <Link to="/activities" className="text-gray-300 hover:text-white">Activities</Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-300 hover:text-white">Team</Link>
              </li>
              <li>
                <Link to="/apply" className="text-gray-300 hover:text-white">Join Us</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <p className="text-gray-300 mb-2">Basava International School</p>
            <p className="text-gray-300 mb-4">New Delhi, India</p>
            <p className="text-gray-300">Email: itclub@basava.edu.in</p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Technexus - Basava International School. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};

export default Footer;
