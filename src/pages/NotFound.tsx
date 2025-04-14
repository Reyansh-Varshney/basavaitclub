
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="text-center glass-card p-12 rounded-xl">
        <h1 className="text-6xl font-bold mb-6 text-gradient-animated">404</h1>
        <p className="text-xl text-slate-300 mb-8">Oops! Page not found</p>
        <Link to="/">
          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
