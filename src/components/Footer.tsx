import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card/50 border-t border-border py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-primary-foreground rounded-full"></div>
              </div>
              <span className="text-xl font-bold text-foreground">Webkeymaster</span>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 max-w-md">
              The future of Web3 leverage and crypto development. 
              Secure, reliable, and accessible to everyone.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2 -m-2">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2 -m-2">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2 -m-2">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2 -m-2">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="mt-6 sm:mt-0">
            <h3 className="font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">Product</h3>
            <ul className="space-y-2 sm:space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors py-1 block">Features</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors py-1 block">Security</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors py-1 block">API</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors py-1 block">Documentation</a></li>
            </ul>
          </div>

          <div className="mt-6 sm:mt-0">
            <h3 className="font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">Company</h3>
            <ul className="space-y-2 sm:space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors py-1 block">About</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors py-1 block">Blog</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors py-1 block">Careers</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors py-1 block">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-6 sm:mt-8 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-xs sm:text-sm text-center md:text-left">
            © 2024 Webkeymaster. All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-center">
            <a href="#" className="text-muted-foreground hover:text-primary text-xs sm:text-sm transition-colors py-1">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-primary text-xs sm:text-sm transition-colors py-1">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;