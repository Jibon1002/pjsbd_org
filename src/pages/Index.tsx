import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import QuotesSection from "@/components/QuotesSection";
import GallerySection from "@/components/GallerySection";
import DonateSection from "@/components/DonateSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ActivitiesSection />
      <QuotesSection />
      <GallerySection />
      <DonateSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
