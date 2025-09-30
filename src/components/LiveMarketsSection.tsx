import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { TrendingUp, TrendingDown } from "lucide-react";

const LiveMarketsSection = () => {
  const cryptoData = [
    {
      name: "Bitcoin",
      symbol: "BTC",
      price: "$110,500",
      change: "+8.1%",
      isPositive: true,
      marketCap: "$2,180,108,872,145",
      volume: "$82,571,996,235"
    },
    {
      name: "Ethereum", 
      symbol: "ETH",
      price: "$4,001.84",
      change: "+5.1%",
      isPositive: true,
      marketCap: "$481,224,547,893",
      volume: "$26,446,573,419"
    },
    {
      name: "XRP",
      symbol: "XRP", 
      price: "$2.8",
      change: "+1.2%",
      isPositive: true,
      marketCap: "$158,464,789,927",
      volume: "$3,278,582,999"
    },
    {
      name: "Binance Coin",
      symbol: "BNB",
      price: "$719.43",
      change: "-1.5%",
      isPositive: false,
      marketCap: "$103,540,268,123",
      volume: "$1,826,514,325"
    },
    {
      name: "Solana",
      symbol: "SOL",
      price: "$249.69",
      change: "+3.2%", 
      isPositive: true,
      marketCap: "$118,243,957,893",
      volume: "$4,967,897,241"
    }
  ];

  return (
    <section className="py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4">
            Live{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">
              Markets
            </span>
          </h2>
        </div>

        {/* Markets table */}
        <div className="bg-card rounded-xl border border-border overflow-hidden">
          <div className="p-4 sm:p-6 border-b border-border">
            <h3 className="text-base sm:text-lg font-semibold text-foreground">
              Top Cryptocurrencies By Market Cap
            </h3>
          </div>
          
          {/* Mobile view - Card layout */}
          <div className="block sm:hidden">
            <div className="space-y-4 p-4">
              {cryptoData.map((crypto, index) => (
                <div key={crypto.symbol} className="bg-background rounded-lg p-4 border border-border">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full text-primary font-semibold text-sm">
                        {crypto.symbol.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-foreground text-sm">{crypto.name}</div>
                        <div className="text-xs text-muted-foreground">{crypto.symbol}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-foreground text-sm">{crypto.price}</div>
                      <div className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${
                        crypto.isPositive 
                          ? 'bg-green-500/10 text-green-500' 
                          : 'bg-red-500/10 text-red-500'
                      }`}>
                        {crypto.isPositive ? (
                          <TrendingUp className="w-2 h-2" />
                        ) : (
                          <TrendingDown className="w-2 h-2" />
                        )}
                        <span>{crypto.change}</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <div className="text-muted-foreground mb-1">Market Cap</div>
                      <div className="font-medium truncate">{crypto.marketCap}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground mb-1">24h Volume</div>
                      <div className="font-medium truncate">{crypto.volume}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop view - Table layout */}
          <div className="hidden sm:block overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-left">Coin</TableHead>
                  <TableHead className="text-right">Price</TableHead>
                  <TableHead className="text-right">24h %</TableHead>
                  <TableHead className="text-right">Market Cap</TableHead>
                  <TableHead className="text-right">24h Volume</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {cryptoData.map((crypto, index) => (
                  <TableRow key={crypto.symbol} className="hover:bg-muted/50">
                    <TableCell className="font-medium">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full text-primary font-semibold text-sm">
                          {crypto.symbol.charAt(0)}
                        </div>
                        <div>
                          <div className="font-semibold text-foreground">{crypto.name}</div>
                          <div className="text-sm text-muted-foreground">{crypto.symbol}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-right font-semibold text-foreground">
                      {crypto.price}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-sm font-medium ${
                        crypto.isPositive 
                          ? 'bg-green-500/10 text-green-500' 
                          : 'bg-red-500/10 text-red-500'
                      }`}>
                        {crypto.isPositive ? (
                          <TrendingUp className="w-3 h-3" />
                        ) : (
                          <TrendingDown className="w-3 h-3" />
                        )}
                        <span>{crypto.change}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right text-muted-foreground">
                      {crypto.marketCap}
                    </TableCell>
                    <TableCell className="text-right text-muted-foreground">
                      {crypto.volume}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveMarketsSection;