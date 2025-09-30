import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BrandLogos from "@/components/BrandLogos";
import ServicesSection from "@/components/ServicesSection";
import FeaturesSection from "@/components/FeaturesSection";
import LiveMarketsSection from "@/components/LiveMarketsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pt-16 sm:pt-20">
      <Header />
      <main>
        <HeroSection />
        <BrandLogos />
        <ServicesSection />
        <FeaturesSection />
        <LiveMarketsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
