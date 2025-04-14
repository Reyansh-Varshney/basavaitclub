
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-md py-2" 
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-r from-primary to-secondary">
            <span className="text-white font-bold text-xl">TN</span>
          </div>
          <span className={cn(
            "font-bold text-xl transition-colors",
            isScrolled ? "text-slate-900 dark:text-white" : "text-white"
          )}>Technexus</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <NavLinks 
            className="flex gap-8" 
            isScrolled={isScrolled} 
          />
          <Link to="/apply">
            <Button 
              size="sm" 
              className="rounded-full px-6"
              variant={isScrolled ? "default" : "outline"}
            >
              Join Now
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu}
            className={isScrolled ? "text-slate-900 dark:text-white" : "text-white"}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white dark:bg-slate-900 shadow-lg py-6 px-4 rounded-b-2xl">
            <NavLinks className="flex flex-col gap-6" isScrolled={true} />
            <div className="mt-6">
              <Link to="/apply">
                <Button className="w-full rounded-full">Join Now</Button>
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
  isScrolled?: boolean;
}

const NavLinks = ({ className, isScrolled = true }: NavLinksProps) => {
  const linkClass = cn(
    "font-medium transition-colors",
    isScrolled 
      ? "text-slate-700 hover:text-primary dark:text-slate-200 dark:hover:text-primary" 
      : "text-white/80 hover:text-white"
  );

  return (
    <div className={cn(className)}>
      <Link to="/" className={linkClass}>
        Home
      </Link>
      <Link to="/about" className={linkClass}>
        About
      </Link>
      <Link to="/activities" className={linkClass}>
        Activities
      </Link>
      <Link to="/team" className={linkClass}>
        Team
      </Link>
    </div>
  );
};

export default Navbar;
