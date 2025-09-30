import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroShape1 from "@/assets/hero-shape-1.png";
import heroShape2 from "@/assets/hero-shape-2.png";
import heroShape3 from "@/assets/hero-shape-3.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background geometric shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img 
          src={heroShape1} 
          alt="" 
          className="absolute top-20 sm:top-24 left-4 sm:left-20 w-20 h-20 sm:w-32 sm:h-32 opacity-10 sm:opacity-20 animate-float"
          style={{ animationDelay: '0s' }}
        />
        <img 
          src={heroShape2} 
          alt="" 
          className="absolute top-1/2 right-4 sm:right-20 w-24 h-24 sm:w-40 sm:h-40 opacity-8 sm:opacity-15 animate-float"
          style={{ animationDelay: '2s' }}
        />
        <img 
          src={heroShape3} 
          alt="" 
          className="absolute bottom-20 sm:bottom-24 right-1/4 w-24 h-24 sm:w-36 sm:h-36 opacity-10 sm:opacity-25 animate-float"
          style={{ animationDelay: '4s' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Tagline */}
        <div className="mb-6 sm:mb-8">
          <span className="inline-block px-3 py-2 sm:px-4 sm:py-2 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium border border-primary/20">
            Built on web3. Secured for You
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-2 sm:px-0">
          The future of{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">
            web3 security
          </span>{" "}
          is here
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
          Web3 security solutions with a protocol trusted with billions 
          for its performance and reliability.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0">
          <Button variant="hero" size="xl" className="w-full sm:w-auto animate-pulse-glow min-h-[48px]" asChild>
            <Link to="/wallet">Get Started Now</Link>
          </Button>
          <Button variant="outline-hero" size="xl" className="w-full sm:w-auto min-h-[48px]" asChild>
            <Link to="/wallet">Learn More</Link>
          </Button>
        </div>

        {/* Stats or trust indicators */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center px-4 sm:px-0">
          <div className="py-4">
            <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">$2.5B+</div>
            <div className="text-sm sm:text-base text-muted-foreground">Total Volume Secured</div>
          </div>
          <div className="py-4">
            <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">100K+</div>
            <div className="text-sm sm:text-base text-muted-foreground">Active Users</div>
          </div>
          <div className="py-4">
            <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">99.9%</div>
            <div className="text-sm sm:text-base text-muted-foreground">Uptime Guarantee</div>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;