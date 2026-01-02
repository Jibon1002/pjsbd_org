import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary-foreground/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-foreground/5 rounded-full blur-3xl" />
      </div>

      {/* Organic shapes */}
      <svg className="absolute bottom-0 left-0 right-0 text-background" viewBox="0 0 1440 120" fill="currentColor">
        <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" />
      </svg>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-in">
          <div className="inline-block mb-6 px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full">
            <span className="text-primary-foreground/90 text-sm font-medium">
              যুব সচেতনতা ও সামাজিক উন্নয়ন
            </span>
          </div>
        </div>

        <h1 className="animate-slide-up text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
          প্রজন্ম জাগরণ কাউন্সিল
        </h1>

        <p className="animate-slide-up text-xl md:text-2xl text-primary-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed" style={{ animationDelay: "0.2s" }}>
          আগামীর বাংলাদেশ গড়তে আজকের প্রজন্মকে জাগ্রত করি
        </p>

        <p className="animate-slide-up text-lg text-primary-foreground/70 mb-12 max-w-2xl mx-auto" style={{ animationDelay: "0.3s" }}>
          সমাজে ইতিবাচক পরিবর্তন আনতে আমরা একসাথে কাজ করছি। শিক্ষা, সচেতনতা এবং সেবার মাধ্যমে একটি সুন্দর ভবিষ্যৎ গড়ে তুলছি।
        </p>

        <div className="animate-slide-up flex flex-col sm:flex-row gap-4 justify-center" style={{ animationDelay: "0.4s" }}>
          <button
            onClick={() => {
              const element = document.querySelector("#donate");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-xl shadow-elevated hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
          >
            দান করুন
          </button>
          <button
            onClick={scrollToAbout}
            className="px-8 py-4 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground font-semibold rounded-xl border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all duration-300"
          >
            আরও জানুন
          </button>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-24 left-1/2 -translate-x-1/2 animate-bounce text-primary-foreground/60 hover:text-primary-foreground transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
