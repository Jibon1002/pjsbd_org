import { Quote } from "lucide-react";

const QuotesSection = () => {
  const quotes = [
    {
      text: "জ্ঞানই শক্তি। শিক্ষিত জাতি কখনো পরাজিত হয় না।",
      author: "রবীন্দ্রনাথ ঠাকুর"
    },
    {
      text: "মানুষের সেবাই সবচেয়ে বড় ধর্ম। অন্যের জন্য বাঁচাই প্রকৃত জীবন।",
      author: "স্বামী বিবেকানন্দ"
    },
    {
      text: "আজকের তরুণরাই আগামীর নেতা। তাদের হাতেই দেশের ভবিষ্যৎ।",
      author: "শেখ মুজিবুর রহমান"
    },
    {
      text: "ছোট ছোট পদক্ষেপই বড় পরিবর্তন আনে। শুরু করুন, বাকিটা হয়ে যাবে।",
      author: "প্রজন্ম জাগরণ কাউন্সিল"
    }
  ];

  return (
    <section id="quotes" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent/20 rounded-full text-accent-foreground text-sm font-medium mb-4">
            অনুপ্রেরণামূলক উক্তি
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            হৃদয়ে জাগুক অনুপ্রেরণা
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            মহান ব্যক্তিদের বাণী যা আমাদের পথ চলায় অনুপ্রেরণা জোগায়
          </p>
        </div>

        {/* Quotes Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {quotes.map((quote, index) => (
            <div
              key={index}
              className="group relative p-8 md:p-10 bg-card rounded-2xl shadow-soft hover:shadow-elevated transition-all duration-300"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Quote className="w-5 h-5 text-primary" />
              </div>

              {/* Decorative line */}
              <div className="absolute left-0 top-8 bottom-8 w-1 bg-gradient-to-b from-primary via-primary to-transparent rounded-full" />

              <blockquote className="pl-6">
                <p className="text-xl md:text-2xl text-foreground font-medium leading-relaxed mb-6">
                  "{quote.text}"
                </p>
                <footer className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-sm">
                      {quote.author.charAt(0)}
                    </span>
                  </div>
                  <cite className="text-muted-foreground not-italic font-medium">
                    — {quote.author}
                  </cite>
                </footer>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuotesSection;
