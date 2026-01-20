import { useEffect, useState } from "react";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-[70vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-10 md:pt-16">
      {/* Deep ocean gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(210,100%,12%)] via-[hsl(205,85%,25%)] to-[hsl(200,80%,40%)]" />
      
      {/* Underwater light rays with parallax */}
      <div 
        className="absolute inset-0 overflow-hidden"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      >
        <div className="absolute top-0 left-1/4 w-[2px] h-[60%] bg-gradient-to-b from-white/20 via-white/5 to-transparent rotate-[15deg] origin-top" />
        <div className="absolute top-0 left-1/3 w-[3px] h-[70%] bg-gradient-to-b from-white/15 via-white/3 to-transparent rotate-[8deg] origin-top" />
        <div className="absolute top-0 right-1/3 w-[2px] h-[55%] bg-gradient-to-b from-white/18 via-white/5 to-transparent rotate-[-10deg] origin-top" />
        <div className="absolute top-0 right-1/4 w-[3px] h-[65%] bg-gradient-to-b from-white/12 via-white/3 to-transparent rotate-[-5deg] origin-top" />
      </div>

      {/* Floating bubbles with parallax */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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

      {/* Ocean waves - multiple layers with parallax */}
      <div className="absolute bottom-0 left-0 right-0">
        {/* Back wave */}
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

        {/* Middle wave */}
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

        {/* Front wave */}
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

        {/* Bottom solid transition */}
        <svg 
          className="relative w-full h-[40px] md:h-[60px] text-background"
          viewBox="0 0 1440 60" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0 C480,60 960,60 1440,0 L1440,60 L0,60 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Main Content with parallax */}
      <div 
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      >
        {/* Glowing orb behind title */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[hsl(200,100%,50%)]/20 rounded-full blur-[100px] animate-pulse-glow" />
        
        {/* Organization name with glow effect */}
        <div className="relative">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fadeIn drop-shadow-2xl">
            <span className="block bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
              পূর্বাশা
            </span>
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2 text-cyan-100/90">
              সামাজিক উন্নয়ন সংস্থা
            </span>
          </h1>
        </div>

        {/* Tagline */}
        <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-8 md:mb-10 leading-relaxed animate-slideUp font-light">
          সমাজের অবহেলিত ও দরিদ্র মানুষদের পাশে দাঁড়িয়ে 
          <span className="block">তাদের জীবনমান উন্নয়নে কাজ করছি</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slideUp" style={{ animationDelay: '0.3s' }}>
          <a
            href="#donate"
            className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-full hover:from-cyan-300 hover:to-blue-400 transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/30"
          >
            <span className="mr-2">💙</span>
            অনুদান দিন
          </a>
          <a
            href="#activities"
            className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-full hover:bg-white/20 hover:border-white/50 transition-all duration-300"
          >
            আমাদের কার্যক্রম
          </a>
        </div>

        {/* Stats */}
        <div className="mt-12 md:mt-16 grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto animate-fadeIn" style={{ animationDelay: '0.5s' }}>
          <div className="text-center">
            <div className="text-2xl md:text-4xl font-bold text-white drop-shadow-lg">৫০০+</div>
            <div className="text-xs md:text-sm text-white/70 mt-1">সেবা গ্রহীতা</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-4xl font-bold text-white drop-shadow-lg">২৫+</div>
            <div className="text-xs md:text-sm text-white/70 mt-1">সক্রিয় সদস্য</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-4xl font-bold text-white drop-shadow-lg">১০+</div>
            <div className="text-xs md:text-sm text-white/70 mt-1">প্রকল্প সম্পন্ন</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
