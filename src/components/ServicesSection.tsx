import { 
  ShoppingCart, 
  TrendingDown, 
  BarChart3, 
  Zap, 
  Repeat, 
  Coins, 
  Shield, 
  Star 
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: ShoppingCart,
      title: "Buy Crypto",
      description: "Purchase ETH, BTC & 300+ trusted & secure"
    },
    {
      icon: TrendingDown,
      title: "Sell",
      description: "Turn crypto trades into local currency instantly"
    },
    {
      icon: BarChart3,
      title: "Markets",
      description: "Our global role bought by 100+ assets"
    },
    {
      icon: Zap,
      title: "Trade",
      description: "Advanced charting & order trading"
    },
    {
      icon: Repeat,
      title: "Futures",
      description: "Up to 125x leverage on major pairs"
    },
    {
      icon: Coins,
      title: "Earn",
      description: "Make easy to flows passive income"
    },
    {
      icon: Shield,
      title: "Secure",
      description: "Secure crypto & fiat transactions"
    },
    {
      icon: Star,
      title: "Stars",
      description: "10% Leveraged: Card & more"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Explore All Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">
              Services
            </span>
          </h2>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-4 sm:p-6 bg-card rounded-xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 cursor-pointer min-h-[160px] sm:min-h-[180px]"
            >
              <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4 h-full">
                <div className="p-3 sm:p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;