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

  return (
    <section id="donate" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full text-accent-foreground text-sm font-medium mb-4">
              <Heart className="w-4 h-4 fill-current" />
              দান করুন
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Support Our Work
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              আপনার ছোট সাহায্যও অনেক বড় পার্থক্য আনতে পারে। সমাজের উন্নয়নে আমাদের পাশে থাকুন।
            </p>
          </div>

          {/* Donation Cards */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* bKash */}
            <div className="group p-8 bg-card rounded-2xl shadow-soft hover:shadow-elevated transition-all duration-300 border-2 border-transparent hover:border-[#E2136E]/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#E2136E]/10 rounded-2xl flex items-center justify-center">
                  <img 
                    src="https://www.logo.wine/a/logo/BKash/BKash-Icon-Logo.wine.svg" 
                    alt="bKash Logo"
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">bKash</h3>
                  <p className="text-muted-foreground text-sm">Personal / Send Money</p>
                </div>
              </div>

              <div className="bg-secondary/50 rounded-xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Smartphone className="w-5 h-5 text-muted-foreground" />
                  <span className="text-xl font-bold text-foreground tracking-wide">{phoneNumber}</span>
                </div>
                <button
                  onClick={() => copyToClipboard(phoneNumber)}
                  className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
                  title="Copy number"
                >
                  {copiedNumber === phoneNumber ? (
                    <Check className="w-5 h-5 text-primary" />
                  ) : (
                    <Copy className="w-5 h-5 text-muted-foreground" />
                  )}
                </button>
              </div>
            </div>

            {/* Nagad */}
            <div className="group p-8 bg-card rounded-2xl shadow-soft hover:shadow-elevated transition-all duration-300 border-2 border-transparent hover:border-[#F6921E]/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#F6921E]/10 rounded-2xl flex items-center justify-center">
                  <img 
                    src="https://nagad.com.bd/wp-content/uploads/2023/07/Nagad-Logo.svg"
                    alt="Nagad Logo"
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Nagad</h3>
                  <p className="text-muted-foreground text-sm">Personal / Send Money</p>
                </div>
              </div>

              <div className="bg-secondary/50 rounded-xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Smartphone className="w-5 h-5 text-muted-foreground" />
                  <span className="text-xl font-bold text-foreground tracking-wide">{phoneNumber}</span>
                </div>
                <button
                  onClick={() => copyToClipboard(phoneNumber)}
                  className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
                  title="Copy number"
                >
                  {copiedNumber === phoneNumber ? (
                    <Check className="w-5 h-5 text-primary" />
                  ) : (
                    <Copy className="w-5 h-5 text-muted-foreground" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Trust message */}
          <div className="mt-12 text-center p-6 bg-secondary/30 rounded-2xl">
            <p className="text-muted-foreground">
              🙏 আপনার প্রতিটি দান সঠিকভাবে ব্যবহৃত হবে এবং সুবিধাবঞ্চিতদের কাছে পৌঁছে যাবে।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
