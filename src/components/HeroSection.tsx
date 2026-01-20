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
    <section id="home" className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      {/* Deep ocean gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(210,100%,12%)] via-[hsl(205,85%,25%)] to-[hsl(200,80%,40%)]" />
      
      {/* Subtle light rays */}
      <div className="absolute inset-0 overflow-hidden opacity-50">
        <div className="absolute top-0 left-1/4 w-[1px] h-[50%] bg-gradient-to-b from-white/15 to-transparent rotate-[12deg] origin-top" />
        <div className="absolute top-0 right-1/3 w-[1px] h-[45%] bg-gradient-to-b from-white/10 to-transparent rotate-[-8deg] origin-top" />
      </div>

      {/* Ocean waves */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          className="absolute bottom-[20px] md:bottom-[30px] left-0 w-[200%] h-[40px] md:h-[60px] text-[hsl(200,75%,45%)]/30 animate-wave"
          viewBox="0 0 1440 60" 
          preserveAspectRatio="none"
          style={{ animationDuration: '8s' }}
        >
          <path d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z" fill="currentColor" />
        </svg>
        <svg 
          className="absolute bottom-0 left-0 w-[200%] h-[30px] md:h-[45px] text-[hsl(200,80%,55%)]/40 animate-wave-reverse"
          viewBox="0 0 1440 45" 
          preserveAspectRatio="none"
          style={{ animationDuration: '6s' }}
        >
          <path d="M0,22 C180,45 360,0 540,22 C720,45 900,0 1080,22 C1260,45 1380,30 1440,22 L1440,45 L0,45 Z" fill="currentColor" />
        </svg>
        <div className="relative w-full h-[25px] md:h-[35px] bg-background" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        {/* Organization name */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 leading-tight animate-fadeIn">
          প্রজন্ম জাগরণ সোসাইটি
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg text-white/70 max-w-xl mx-auto mb-6 leading-relaxed animate-slideUp">
          সমাজের অবহেলিত ও দরিদ্র মানুষদের পাশে দাঁড়িয়ে তাদের জীবনমান উন্নয়নে কাজ করছি
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-row gap-3 justify-center animate-slideUp" style={{ animationDelay: '0.2s' }}>
          <a
            href="#donate"
            className="inline-flex items-center justify-center px-6 py-2.5 bg-white text-[hsl(200,80%,30%)] text-sm font-semibold rounded-full hover:bg-white/90 transition-all duration-300 shadow-lg"
          >
            অনুদান দিন
          </a>
          <a
            href="#activities"
            className="inline-flex items-center justify-center px-6 py-2.5 bg-white/10 border border-white/30 text-white text-sm font-semibold rounded-full hover:bg-white/20 transition-all duration-300"
          >
            কার্যক্রম
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
