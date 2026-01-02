import { Quote } from "lucide-react";

const QuotesSection = () => {
  const quotes = [
    { text: "জ্ঞানই শক্তি। শিক্ষিত জাতি কখনো পরাজিত হয় না।", author: "রবীন্দ্রনাথ ঠাকুর" },
    { text: "মানুষের সেবাই সবচেয়ে বড় ধর্ম।", author: "স্বামী বিবেকানন্দ" },
    { text: "আজকের তরুণরাই আগামীর নেতা।", author: "শেখ মুজিবুর রহমান" },
    { text: "ছোট পদক্ষেপই বড় পরিবর্তন আনে।", author: "প্রজন্ম জাগরণ" }
  ];

  return (
    <section id="quotes" className="py-12 md:py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-10">
          <span className="inline-block px-3 py-1 bg-accent/20 rounded-full text-accent-foreground text-xs font-medium mb-3">
            উক্তি
          </span>
          <h2 className="text-xl md:text-3xl font-bold text-foreground mb-2">
            অনুপ্রেরণা
          </h2>
        </div>

        {/* Quotes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 max-w-3xl mx-auto">
          {quotes.map((quote, index) => (
            <div
              key={index}
              className="group relative p-4 md:p-5 bg-card rounded-xl shadow-soft transition-all duration-300"
            >
              <Quote className="w-4 h-4 text-primary/40 mb-2" />
              <blockquote>
                <p className="text-sm md:text-base text-foreground font-medium leading-relaxed mb-2">
                  "{quote.text}"
                </p>
                <footer className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-xs">
                      {quote.author.charAt(0)}
                    </span>
                  </div>
                  <cite className="text-xs text-muted-foreground not-italic">
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
