import { Target, Eye, Heart, Users } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: "আমাদের লক্ষ্য",
      description: "সমাজে সচেতনতা বৃদ্ধি করে যুব সমাজকে দেশ গঠনে অনুপ্রাণিত করা এবং একটি সুন্দর ভবিষ্যৎ নির্মাণে সহায়তা করা।"
    },
    {
      icon: Eye,
      title: "আমাদের দৃষ্টিভঙ্গি",
      description: "একটি শিক্ষিত, সচেতন এবং দায়িত্বশীল যুব সমাজ গড়ে তোলা যারা সমাজের ইতিবাচক পরিবর্তনে নেতৃত্ব দেবে।"
    },
    {
      icon: Heart,
      title: "আমাদের মূল্যবোধ",
      description: "সততা, সেবা, সহানুভূতি এবং দেশপ্রেম - এই মূল্যবোধগুলো আমাদের কাজের ভিত্তি।"
    },
    {
      icon: Users,
      title: "আমাদের দল",
      description: "উৎসাহী তরুণ স্বেচ্ছাসেবক যারা সমাজ পরিবর্তনে নিবেদিতপ্রাণ এবং সর্বদা সেবার জন্য প্রস্তুত।"
    }
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-secondary rounded-full text-primary text-sm font-medium mb-4">
            আমাদের সম্পর্কে
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            প্রজন্ম জাগরণ কাউন্সিল
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            আমরা একটি অরাজনৈতিক, অলাভজনক সামাজিক সংগঠন। সমাজের উন্নয়ন ও যুব সমাজের সচেতনতা বৃদ্ধিতে আমরা কাজ করছি। আমাদের বিশ্বাস, প্রতিটি তরুণ-তরুণীই দেশ গড়ার কারিগর।
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group p-6 md:p-8 bg-card rounded-2xl shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:shadow-glow transition-all duration-300">
                <value.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "৫০+", label: "স্বেচ্ছাসেবক" },
            { number: "২০+", label: "প্রকল্প সম্পন্ন" },
            { number: "১০০০+", label: "মানুষের সেবা" },
            { number: "৫+", label: "বছরের অভিজ্ঞতা" },
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-secondary/50 rounded-2xl">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
