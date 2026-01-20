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
    <section id="home" className="relative min-h-[60vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      {/* Clean ocean gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(210,80%,20%)] via-[hsl(200,75%,35%)] to-[hsl(195,70%,45%)]" />
      
      {/* Subtle mesh overlay for depth */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `radial-gradient(circle at 20% 80%, hsl(200,90%,60%) 0%, transparent 50%),
                          radial-gradient(circle at 80% 20%, hsl(210,85%,50%) 0%, transparent 40%),
                          radial-gradient(circle at 50% 50%, hsl(195,80%,55%) 0%, transparent 60%)`
      }} />

      {/* Animated wave layers */}
      <div className="absolute bottom-0 left-0 right-0">
        {/* Back wave */}
        <svg 
          className="absolute bottom-[50px] md:bottom-[70px] left-0 w-[200%] h-[60px] md:h-[90px] opacity-20"
          viewBox="0 0 1440 90" 
          preserveAspectRatio="none"
          style={{ 
            animation: 'wave 12s linear infinite',
            transform: `translateY(${scrollY * 0.12}px)`
          }}
        >
          <path 
            d="M0,45 C360,90 720,0 1080,45 C1260,70 1380,60 1440,45 L1440,90 L0,90 Z"
            fill="hsl(200,80%,70%)"
          />
        </svg>

        {/* Middle wave */}
        <svg 
          className="absolute bottom-[25px] md:bottom-[35px] left-0 w-[200%] h-[50px] md:h-[70px] opacity-30"
          viewBox="0 0 1440 70" 
          preserveAspectRatio="none"
          style={{ 
            animation: 'wave-reverse 10s linear infinite',
            transform: `translateY(${scrollY * 0.08}px)`
          }}
        >
          <path 
            d="M0,35 C240,70 480,0 720,35 C960,70 1200,0 1440,35 L1440,70 L0,70 Z"
            fill="hsl(195,85%,65%)"
          />
        </svg>

        {/* Front wave */}
        <svg 
          className="absolute bottom-0 left-0 w-[200%] h-[40px] md:h-[55px] opacity-40"
          viewBox="0 0 1440 55" 
          preserveAspectRatio="none"
          style={{ 
            animation: 'wave 8s linear infinite',
            transform: `translateY(${scrollY * 0.04}px)`
          }}
        >
          <path 
            d="M0,28 C180,55 360,0 540,28 C720,55 900,0 1080,28 C1260,55 1380,40 1440,28 L1440,55 L0,55 Z"
            fill="hsl(190,90%,75%)"
          />
        </svg>

        {/* Bottom transition */}
        <div className="relative w-full h-[30px] md:h-[45px] bg-background" />
      </div>

      {/* Main Content */}
      <div 
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      >
        {/* Organization Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 animate-fadeIn">
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
          <span className="text-white/90 text-sm font-medium">সক্রিয় সংগঠন</span>
        </div>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight animate-slideUp">
          পূর্বাশা সামাজিক
          <span className="block text-cyan-200">উন্নয়ন সংস্থা</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed animate-slideUp" style={{ animationDelay: '0.2s' }}>
          সমাজের অবহেলিত ও দরিদ্র মানুষদের পাশে দাঁড়িয়ে তাদের জীবনমান উন্নয়নে কাজ করছি
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slideUp" style={{ animationDelay: '0.4s' }}>
          <a
            href="#donate"
            className="inline-flex items-center justify-center px-8 py-3 bg-white text-[hsl(200,75%,35%)] font-semibold rounded-full hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            অনুদান দিন
          </a>
          <a
            href="#activities"
            className="inline-flex items-center justify-center px-8 py-3 bg-transparent border-2 border-white/50 text-white font-semibold rounded-full hover:bg-white/10 hover:border-white transition-all duration-300"
          >
            আমাদের কার্যক্রম
          </a>
        </div>
      </div>

      {/* Floating elements for depth */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/4 left-[10%] w-32 h-32 bg-white/5 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * -0.15}px)` }}
        />
        <div 
          className="absolute top-1/3 right-[15%] w-40 h-40 bg-cyan-300/10 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * -0.1}px)` }}
        />
        <div 
          className="absolute bottom-1/3 left-[20%] w-24 h-24 bg-blue-400/10 rounded-full blur-2xl"
          style={{ transform: `translateY(${scrollY * -0.2}px)` }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
