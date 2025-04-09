
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-r from-itclub-blue to-itclub-purple rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">IT</span>
          </div>
          <span className="font-bold text-xl text-itclub-dark">IT Club</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <NavLinks className="flex gap-8" />
          <Link to="/apply">
            <Button>Join Now</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md py-4 px-4 animate-fade-in">
            <NavLinks className="flex flex-col gap-4" />
            <div className="mt-4">
              <Link to="/apply">
                <Button className="w-full">Join Now</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

interface NavLinksProps {
  className?: string;
}

const NavLinks = ({ className }: NavLinksProps) => {
  return (
    <div className={cn(className)}>
      <Link to="/" className="text-itclub-dark hover:text-itclub-blue transition-colors">
        Home
      </Link>
      <Link to="/about" className="text-itclub-dark hover:text-itclub-blue transition-colors">
        About
      </Link>
      <Link to="/activities" className="text-itclub-dark hover:text-itclub-blue transition-colors">
        Activities
      </Link>
      <Link to="/team" className="text-itclub-dark hover:text-itclub-blue transition-colors">
        Team
      </Link>
    </div>
  );
};

export default Navbar;
