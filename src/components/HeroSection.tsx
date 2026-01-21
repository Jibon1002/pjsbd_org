const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[70vh] md:min-h-[75vh] flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      {/* Beautiful blue gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400" />

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent animate-pulse" style={{ animationDuration: '4s' }} />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-float" style={{ animationDelay: '0s', animationDuration: '8s' }} />
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-white rounded-full animate-float" style={{ animationDelay: '2s', animationDuration: '10s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-white rounded-full animate-float" style={{ animationDelay: '4s', animationDuration: '12s' }} />
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-white rounded-full animate-float" style={{ animationDelay: '1s', animationDuration: '9s' }} />
      </div>

      {/* Beautiful wave animations */}
      <div className="absolute bottom-0 left-0 right-0">
        {/* Wave 1 - Back */}
        <svg
          className="absolute bottom-0 left-0 w-[300%] h-[100px] md:h-[150px] text-white/5"
          style={{ animation: 'wave 25s linear infinite' }}
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,160 C320,280 640,40 960,160 C1280,280 1600,40 1920,160 L1920,320 L0,320 Z"
          />
        </svg>

        {/* Wave 2 - Middle */}
        <svg
          className="absolute bottom-0 left-0 w-[300%] h-[80px] md:h-[120px] text-white/10"
          style={{ animation: 'wave 20s linear infinite reverse' }}
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,96 C240,224 480,32 720,96 C960,160 1200,32 1440,96 L1440,320 L0,320 Z"
          />
        </svg>

        {/* Wave 3 - Front */}
        <svg
          className="absolute bottom-0 left-0 w-[200%] h-[60px] md:h-[100px] text-white/15"
          style={{ animation: 'wave 15s linear infinite' }}
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,192 C360,288 720,96 1080,192 C1440,288 1800,96 2160,192 L2160,320 L0,320 Z"
          />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Organization name with fade-in animation */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight opacity-0"
          style={{ animation: 'fadeIn 1s ease-out 0.2s forwards' }}
        >
          প্রজন্ম জাগরণ সোসাইটি
        </h1>

        {/* Subtitle with slide-up animation */}
        <p
          className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed opacity-0"
          style={{ animation: 'slideUp 1s ease-out 0.5s forwards' }}
        >
          সমাজের অবহেলিত ও দরিদ্র মানুষদের পাশে দাঁড়িয়ে তাদের জীবনমান উন্নয়নে কাজ করছি
        </p>

        {/* CTA Buttons with staggered animation */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0"
          style={{ animation: 'slideUp 1s ease-out 0.8s forwards' }}
        >
          <a
            href="#donate"
            className="group relative inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 text-sm md:text-base font-semibold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">অনুদান দিন</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#activities"
            className="group inline-flex items-center justify-center px-8 py-3 bg-white/10 backdrop-blur-sm border-2 border-white/50 text-white text-sm md:text-base font-semibold rounded-full hover:bg-white/20 hover:border-white hover:scale-105 transition-all duration-300"
          >
            কার্যক্রম
          </a>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
