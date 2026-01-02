import { Heart, Smartphone, Copy, Check } from "lucide-react";
import { useState } from "react";
const DonateSection = () => {
  const [copiedNumber, setCopiedNumber] = useState<string | null>(null);
  const phoneNumber = "01321-061133";
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text.replace("-", ""));
    setCopiedNumber(text);
    setTimeout(() => setCopiedNumber(null), 2000);
  };
  return <section id="donate" className="py-12 md:py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="max-w-2xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-6 md:mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-accent-foreground text-xs font-medium mb-3 bg-secondary-foreground">
              <Heart className="w-3 h-3 fill-current" />
              দান করুন
            </span>
            <h2 className="text-xl md:text-3xl font-bold text-foreground mb-2">
              Support Our Work
            </h2>
            <p className="text-sm text-muted-foreground">
              আপনার সাহায্য বড় পার্থক্য আনতে পারে
            </p>
          </div>

          {/* Donation Cards */}
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {/* bKash */}
            <div className="p-4 md:p-5 bg-card rounded-xl shadow-soft border border-transparent hover:border-[#E2136E]/20 transition-all">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-10 h-10 bg-[#E2136E]/10 rounded-lg flex items-center justify-center">
                  <img src="https://www.logo.wine/a/logo/BKash/BKash-Icon-Logo.wine.svg" alt="bKash" className="w-6 h-6 object-contain" />
                </div>
                <h3 className="text-sm md:text-base font-bold text-foreground">bKash</h3>
              </div>
              <div className="bg-secondary/50 rounded-lg px-2 py-1.5 flex items-center justify-between gap-1">
                <div className="flex items-center gap-1 min-w-0">
                  <Smartphone className="w-3 h-3 text-muted-foreground shrink-0" />
                  <span className="text-xs font-bold text-foreground whitespace-nowrap">{phoneNumber}</span>
                </div>
                <button onClick={() => copyToClipboard(phoneNumber)} className="p-1 rounded-md hover:bg-primary/10 transition-colors shrink-0">
                  {copiedNumber === phoneNumber ? <Check className="w-3 h-3 text-primary px-[2px]" /> : <Copy className="w-3 h-3 text-muted-foreground" />}
                </button>
              </div>
            </div>

            {/* Nagad */}
            <div className="p-4 md:p-5 bg-card rounded-xl shadow-soft border border-transparent hover:border-[#F6921E]/20 transition-all">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-10 h-10 bg-[#F6921E]/10 rounded-lg flex items-center justify-center">
                  <img src="https://download.logo.wine/logo/Nagad/Nagad-Logo.wine.png" alt="Nagad" className="w-6 h-6 object-contain" />
                </div>
                <h3 className="text-sm md:text-base font-bold text-foreground">Nagad</h3>
              </div>
              <div className="bg-secondary/50 rounded-lg px-2 py-1.5 flex items-center justify-between gap-1">
                <div className="flex items-center gap-1 min-w-0">
                  <Smartphone className="w-3 h-3 text-muted-foreground shrink-0" />
                  <span className="text-xs font-bold text-foreground whitespace-nowrap">{phoneNumber}</span>
                </div>
                <button onClick={() => copyToClipboard(phoneNumber)} className="p-1 rounded-md hover:bg-primary/10 transition-colors shrink-0">
                  {copiedNumber === phoneNumber ? <Check className="w-3 h-3 text-primary" /> : <Copy className="w-3 h-3 text-muted-foreground" />}
                </button>
              </div>
            </div>
          </div>

          {/* Trust message */}
          <p className="mt-4 text-center text-xs text-muted-foreground">
            🙏 আপনার দান সুবিধাবঞ্চিতদের কাছে পৌঁছে যাবে
          </p>
        </div>
      </div>
    </section>;
};
export default DonateSection;