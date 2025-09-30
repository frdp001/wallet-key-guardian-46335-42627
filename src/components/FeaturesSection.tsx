import { Shield, TrendingUp, Database, Zap, Lock, BarChart3 } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Crypto Management",
      description: "Automated identity verification and anti-money laundering compliance with industry-leading security protocols."
    },
    {
      icon: TrendingUp,
      title: "Crypto Exchange", 
      description: "A built-in explorer to track transactions across multiple blockchains with real-time analytics and insights."
    },
    {
      icon: Database,
      title: "Real-time Data",
      description: "Global reach with content available in multiple languages and real-time market data synchronization."
    },
    {
      icon: Zap,
      title: "Advanced Trading",
      description: "Visual dashboards for trade performance with advanced charting tools and automated trading strategies."
    },
    {
      icon: Lock,
      title: "Blockchain Compliance",
      description: "Exportable reports for tax and accounting purposes with full regulatory compliance across jurisdictions."
    },
    {
      icon: BarChart3,
      title: "Portfolio Analytics",
      description: "Comprehensive portfolio tracking and analytics with performance metrics and risk assessment tools."
    }
  ];

  return (
    <section id="features" className="py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block px-3 py-2 sm:px-4 sm:py-2 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium border border-primary/20 mb-3 sm:mb-4">
            accessible for everyone
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4">
            Crypto development{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">
              accessible
            </span>
          </h2>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-4 sm:p-6 bg-card rounded-xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 min-h-[180px] sm:min-h-[200px]"
            >
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="p-2 sm:p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;