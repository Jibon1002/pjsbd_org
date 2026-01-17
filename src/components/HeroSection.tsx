const HeroSection = () => {
  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section id="home" className="relative min-h-[70vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-10 md:pt-16">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(217,70%,35%)] via-[hsl(220,65%,45%)] to-[hsl(225,60%,55%)]" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }} />
      
      {/* Radial glow effects */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[hsl(217,70%,60%)] rounded-full blur-[120px] opacity-20" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[hsl(200,80%,50%)] rounded-full blur-[100px] opacity-15" />
      
      {/* Decorative geometric elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating circles */}
        <div className="absolute top-20 left-10 w-32 md:w-64 h-32 md:h-64 border border-white/10 rounded-full animate-float" />
        <div className="absolute top-40 right-20 w-20 md:w-40 h-20 md:h-40 border border-white/5 rounded-full animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-40 left-1/4 w-16 md:w-24 h-16 md:h-24 bg-white/5 rounded-full animate-float" style={{ animationDelay: "3s" }} />
        
        {/* Glowing orbs */}
        <div className="absolute top-1/3 right-10 w-3 h-3 bg-white/40 rounded-full animate-pulse" />
        <div className="absolute top-1/2 left-20 w-2 h-2 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: "2s" }} />
        
        {/* Diagonal lines */}
        <div className="absolute top-0 right-0 w-[400px] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-45 translate-x-20 -translate-y-20" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent -rotate-45 -translate-x-10 translate-y-10" />
      </div>

      {/* Organic shapes */}
      <svg className="absolute bottom-0 left-0 right-0 text-background" viewBox="0 0 1440 80" fill="currentColor">
        <path d="M0,40L48,45C96,50,192,60,288,55C384,50,480,35,576,32C672,28,768,35,864,42C960,50,1056,57,1152,53C1248,50,1344,35,1392,28L1440,21L1440,80L1392,80C1344,80,1248,80,1152,80C1056,80,960,80,864,80C768,80,672,80,576,80C480,80,384,80,288,80C192,80,96,80,48,80L0,80Z" />
      </svg>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-in">
          <div className="inline-block mb-4 px-3 py-1.5 bg-primary-foreground/10 backdrop-blur-sm rounded-full">
            <span className="text-primary-foreground/90 text-xs md:text-sm font-medium">
              যুব সচেতনতা ও সামাজিক উন্নয়ন
            </span>
          </div>
        </div>

        <h1 className="animate-slide-up text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-3 md:mb-5 leading-tight">
          প্রজন্ম জাগরণ সোসাইটি 
        </h1>

        <p className="animate-slide-up text-base md:text-xl text-primary-foreground/80 mb-4 md:mb-6 max-w-2xl mx-auto leading-relaxed" style={{
        animationDelay: "0.2s"
      }}>
          আগামীর বাংলাদেশ গড়তে আজকের প্রজন্মকে জাগ্রত করি
        </p>

        <p className="animate-slide-up text-sm md:text-base text-primary-foreground/70 mb-6 md:mb-10 max-w-xl mx-auto hidden sm:block" style={{
        animationDelay: "0.3s"
      }}>
          সমাজে ইতিবাচক পরিবর্তন আনতে আমরা একসাথে কাজ করছি।
        </p>

        <div className="animate-slide-up flex flex-col sm:flex-row gap-3 justify-center" style={{
        animationDelay: "0.4s"
      }}>
          <button onClick={() => {
          const element = document.querySelector("#donate");
          if (element) element.scrollIntoView({
            behavior: "smooth"
          });
        }} className="px-5 py-2.5 md:px-6 md:py-3 bg-accent text-accent-foreground text-sm md:text-base font-semibold rounded-lg shadow-elevated hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
            দান করুন
          </button>
          <button onClick={() => {
            const element = document.querySelector("#contact");
            if (element) element.scrollIntoView({ behavior: "smooth" });
          }} className="px-5 py-2.5 md:px-6 md:py-3 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground text-sm md:text-base font-semibold rounded-lg border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all duration-300">
            স্বেচ্ছাসেবক হোন
          </button>
        </div>

        {/* Scroll indicator */}
        <button onClick={scrollToAbout} className="absolute bottom-16 md:bottom-20 left-1/2 -translate-x-1/2 animate-bounce text-primary-foreground/60 hover:text-primary-foreground transition-colors" aria-label="Scroll down">
          
        </button>
      </div>
    </section>;
};
export default HeroSection;