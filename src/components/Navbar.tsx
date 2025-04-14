import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
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
  return <nav className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-500", isScrolled ? "bg-black/80 backdrop-blur-md shadow-lg py-2" : "bg-transparent py-4")}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 mouse-tracking-border rounded-xl p-2">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center">
            <img src="/lovable-uploads/c109c9d0-4d8f-4537-aba5-a245f5075e15.png" alt="Technexus Logo" className="w-full h-full object-contain" />
          </div>
          <span className="font-bold text-xl text-white">Technexus</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <NavLinks className="flex gap-8" isScrolled={isScrolled} />
          <Link to="/apply">
            <Button size="sm" className="futuristic-button rounded-full px-6">
              Join Now
            </Button>
          </Link>
        </div>

        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-white">
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {isMenuOpen && <div className="md:hidden absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-lg shadow-lg py-6 px-4 rounded-b-2xl">
            <NavLinks className="flex flex-col gap-6" isScrolled={true} />
            <div className="mt-6">
              <Link to="/apply">
                <Button className="w-full rounded-full futuristic-button">Join Now</Button>
              </Link>
            </div>
          </div>}
      </div>
    </nav>;
};
interface NavLinksProps {
  className?: string;
  isScrolled?: boolean;
}
const NavLinks = ({
  className,
  isScrolled = true
}: NavLinksProps) => {
  return <div className={cn(className)}>
      <Link to="/" className="text-slate-300 hover:text-primary font-medium transition-colors relative mouse-tracking-border p-2 rounded">
        Home
      </Link>
      <Link to="/about" className="text-slate-300 hover:text-primary font-medium transition-colors relative mouse-tracking-border p-2 rounded">
        About
      </Link>
      <Link to="/activities" className="text-slate-300 hover:text-primary font-medium transition-colors relative mouse-tracking-border p-2 rounded">
        Activities
      </Link>
      <Link to="/team" className="text-slate-300 hover:text-primary font-medium transition-colors relative mouse-tracking-border p-2 rounded">
        Team
      </Link>
    </div>;
};
export default Navbar;