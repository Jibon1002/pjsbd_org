import { useEffect, useState } from "react";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-[70vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-10 md:pt-16">
      {/* Deep ocean gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(210,100%,12%)] via-[hsl(205,85%,25%)] to-[hsl(200,80%,40%)]" />
      
      {/* Underwater light rays - parallax */}
      <div 
        className="absolute inset-0 overflow-hidden"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      >
        <div className="absolute top-0 left-1/4 w-[2px] h-[60%] bg-gradient-to-b from-white/20 via-white/5 to-transparent rotate-[15deg] origin-top" />
        <div className="absolute top-0 left-1/3 w-[3px] h-[70%] bg-gradient-to-b from-white/15 via-white/3 to-transparent rotate-[8deg] origin-top" />
        <div className="absolute top-0 right-1/3 w-[2px] h-[55%] bg-gradient-to-b from-white/18 via-white/5 to-transparent rotate-[-10deg] origin-top" />
        <div className="absolute top-0 right-1/4 w-[3px] h-[65%] bg-gradient-to-b from-white/12 via-white/3 to-transparent rotate-[-5deg] origin-top" />
      </div>

      {/* Floating particles/bubbles - parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute bottom-1/4 left-[15%] w-2 h-2 bg-white/30 rounded-full animate-float" 
          style={{ animationDuration: '4s', transform: `translateY(${scrollY * -0.3}px)` }} 
        />
        <div 
          className="absolute bottom-1/3 left-[25%] w-1.5 h-1.5 bg-white/20 rounded-full animate-float" 
          style={{ animationDuration: '5s', animationDelay: '1s', transform: `translateY(${scrollY * -0.4}px)` }} 
        />
        <div 
          className="absolute bottom-1/2 right-[20%] w-2.5 h-2.5 bg-white/25 rounded-full animate-float" 
          style={{ animationDuration: '6s', animationDelay: '2s', transform: `translateY(${scrollY * -0.25}px)` }} 
        />
        <div 
          className="absolute bottom-[40%] right-[30%] w-1 h-1 bg-white/35 rounded-full animate-float" 
          style={{ animationDuration: '4.5s', animationDelay: '0.5s', transform: `translateY(${scrollY * -0.35}px)` }} 
        />
        <div 
          className="absolute bottom-[60%] left-[40%] w-1.5 h-1.5 bg-white/15 rounded-full animate-float" 
          style={{ animationDuration: '5.5s', animationDelay: '1.5s', transform: `translateY(${scrollY * -0.2}px)` }} 
        />
      </div>

      {/* Ocean waves - multiple layers with parallax for depth */}
      <div className="absolute bottom-0 left-0 right-0">
        {/* Back wave - slowest parallax */}
        <svg 
          className="absolute bottom-[60px] md:bottom-[80px] left-0 w-[200%] h-[80px] md:h-[120px] text-[hsl(200,70%,50%)]/30 animate-wave"
          viewBox="0 0 1440 120" 
          preserveAspectRatio="none"
          style={{ 
            animationDuration: '8s',
            transform: `translateY(${scrollY * 0.15}px)`
          }}
        >
          <path 
            d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,80 1440,60 L1440,120 L0,120 Z"
            fill="currentColor"
          />
        </svg>

        {/* Middle wave - medium parallax */}
        <svg 
          className="absolute bottom-[30px] md:bottom-[40px] left-0 w-[200%] h-[70px] md:h-[100px] text-[hsl(200,75%,45%)]/40 animate-wave-reverse"
          viewBox="0 0 1440 100" 
          preserveAspectRatio="none"
          style={{ 
            animationDuration: '6s',
            transform: `translateY(${scrollY * 0.1}px)`
          }}
        >
          <path 
            d="M0,50 C240,100 480,0 720,50 C960,100 1200,0 1440,50 L1440,100 L0,100 Z"
            fill="currentColor"
          />
        </svg>

        {/* Front wave - fastest parallax */}
        <svg 
          className="absolute bottom-0 left-0 w-[200%] h-[50px] md:h-[70px] text-[hsl(200,80%,55%)]/50 animate-wave"
          viewBox="0 0 1440 70" 
          preserveAspectRatio="none"
          style={{ 
            animationDuration: '4s',
            transform: `translateY(${scrollY * 0.05}px)`
          }}
        >
          <path 
            d="M0,35 C180,70 360,0 540,35 C720,70 900,0 1080,35 C1260,70 1380,50 1440,35 L1440,70 L0,70 Z"
            fill="currentColor"
          />
        </svg>

        {/* Bottom solid transition to content */}
        <svg 
          className="relative w-full h-[40px] md:h-[60px] text-background"
          viewBox="0 0 1440 60" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,20 C480,60 960,0 1440,30 L1440,60 L0,60 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Subtle surface shimmer - parallax */}
      <div 
        className="absolute top-[20%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      />

      {/* Content - slight parallax for depth */}
      <div 
        className="relative z-10 container mx-auto px-4 text-center"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <div className="animate-fade-in">
          <div className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <span className="text-white/90 text-xs md:text-sm font-medium tracking-wide">
              যুব সচেতনতা ও সামাজিক উন্নয়ন
            </span>
          </div>
        </div>

        <h1 className="animate-slide-up text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight drop-shadow-lg">
          প্রজন্ম জাগরণ সোসাইটি
        </h1>

        <p className="animate-slide-up text-base md:text-xl text-white/85 mb-4 md:mb-6 max-w-2xl mx-auto leading-relaxed drop-shadow-md" style={{ animationDelay: "0.2s" }}>
          আগামীর বাংলাদেশ গড়তে আজকের প্রজন্মকে জাগ্রত করি
        </p>

        <p className="animate-slide-up text-sm md:text-base text-white/70 mb-6 md:mb-10 max-w-xl mx-auto hidden sm:block" style={{ animationDelay: "0.3s" }}>
          সমাজে ইতিবাচক পরিবর্তন আনতে আমরা একসাথে কাজ করছি।
        </p>

        <div className="animate-slide-up flex flex-col sm:flex-row gap-3 justify-center" style={{ animationDelay: "0.4s" }}>
          <button
            onClick={() => {
              const element = document.querySelector("#donate");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-6 py-3 md:px-8 md:py-3.5 bg-white text-[hsl(205,85%,25%)] text-sm md:text-base font-bold rounded-full shadow-xl hover:shadow-2xl hover:bg-white/95 transition-all duration-300 hover:-translate-y-1"
          >
            দান করুন
          </button>
          <button
            onClick={() => {
              const element = document.querySelector("#contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-6 py-3 md:px-8 md:py-3.5 bg-transparent text-white text-sm md:text-base font-semibold rounded-full border-2 border-white/40 hover:bg-white/10 hover:border-white/60 backdrop-blur-sm transition-all duration-300"
          >
            স্বেচ্ছাসেবক হোন
          </button>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-20 md:bottom-28 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors"
          aria-label="Scroll down"
          style={{ transform: `translateX(-50%) translateY(${scrollY * 0.4}px)`, opacity: Math.max(0, 1 - scrollY / 300) }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs tracking-widest uppercase hidden md:block">স্ক্রল করুন</span>
            <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
              <div className="w-1.5 h-3 bg-white/60 rounded-full animate-bounce" />
            </div>
          </div>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;