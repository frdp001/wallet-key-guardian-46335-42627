import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center px-4 max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="mb-4 text-7xl md:text-9xl font-bold text-primary">404</h1>
          <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
            <div className="w-8 h-8 bg-primary rounded-full"></div>
          </div>
        </div>
        
        <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground">
          Page Not Found
        </h2>
        
        <p className="mb-8 text-base md:text-lg text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <Button variant="hero" size="lg" asChild>
          <Link to="/">
            Return to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
