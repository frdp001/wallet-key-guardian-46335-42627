const BrandLogos = () => {
  const brands = [
    { name: "Ethereum", symbol: "ETH" },
    { name: "Bitcoin", symbol: "BTC" },
    { name: "Binance", symbol: "BNB" },
    { name: "Solana", symbol: "SOL" },
    { name: "Polygon", symbol: "MATIC" },
    { name: "Avalanche", symbol: "AVAX" },
  ];

  return (
    <section className="py-16 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-muted-foreground text-lg">
            Trusted by leading blockchain networks
          </p>
        </div>
        
        {/* Scrolling brands */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-brands space-x-12 md:space-x-16">
            {[...brands, ...brands].map((brand, index) => (
              <div 
                key={index}
                className="flex-shrink-0 flex items-center justify-center"
              >
                <div className="flex items-center space-x-3 p-4 rounded-lg bg-card/50 border border-border/50 hover:border-primary/30 transition-colors">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">
                      {brand.symbol.charAt(0)}
                    </span>
                  </div>
                  <span className="text-foreground font-medium whitespace-nowrap">
                    {brand.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandLogos;