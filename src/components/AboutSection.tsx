import { Target, Eye, Heart, Users } from "lucide-react";
const AboutSection = () => {
  const values = [{
    icon: Target,
    title: "আমাদের লক্ষ্য",
    description: "যুব সমাজকে দেশ গঠনে অনুপ্রাণিত করা।"
  }, {
    icon: Eye,
    title: "দৃষ্টিভঙ্গি",
    description: "সচেতন যুব সমাজ গড়ে তোলা।"
  }, {
    icon: Heart,
    title: "মূল্যবোধ",
    description: "সততা, সেবা ও দেশপ্রেম।"
  }, {
    icon: Users,
    title: "আমাদের দল",
    description: "নিবেদিতপ্রাণ স্বেচ্ছাসেবক।"
  }];
  return <section id="about" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <span className="inline-block px-3 py-1 bg-secondary rounded-full text-primary text-xs font-medium mb-3">
            আমাদের সম্পর্কে
          </span>
          <h2 className="text-xl md:text-3xl font-bold text-foreground mb-3">
            প্রজন্ম জাগরণ কাউন্সিল
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            আমরা একটি অরাজনৈতিক, অলাভজনক সামাজিক সংগঠন। সমাজের উন্নয়নে কাজ করছি।
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
          {values.map((value, index) => <div key={index} className="group p-4 md:p-5 bg-card rounded-xl shadow-soft hover:shadow-elevated transition-all duration-300">
              <div className="w-10 h-10 md:w-11 md:h-11 bg-secondary rounded-lg flex items-center justify-center mb-3 group-hover:bg-primary transition-all duration-300">
                <value.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-sm md:text-base font-bold text-foreground mb-1">{value.title}</h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{value.description}</p>
            </div>)}
        </div>

        {/* Statistics */}
        <div className="mt-8 md:mt-12 grid grid-cols-4 gap-2 md:gap-4">
          {[{
          number: "৫০+",
          label: "স্বেচ্ছাসেবক"
        }, {
          number: "২০+",
          label: "প্রকল্প"
        }, {
          number: "১০০০+",
          label: "সেবা"
        }, {
          number: "৫+",
          label: "বছর"
        }].map((stat, index) => {})}
        </div>
      </div>
    </section>;
};
export default AboutSection;