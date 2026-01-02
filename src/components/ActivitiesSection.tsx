import { BookOpen, Users, Heart, Leaf, GraduationCap, Droplets } from "lucide-react";

const ActivitiesSection = () => {
  const activities = [
    { icon: BookOpen, title: "শিক্ষা", description: "বিনামূল্যে শিক্ষা ও বই বিতরণ", color: "bg-blue-500/10 text-blue-600" },
    { icon: Heart, title: "স্বাস্থ্য", description: "স্বাস্থ্য ক্যাম্প ও রক্তদান", color: "bg-red-500/10 text-red-600" },
    { icon: Leaf, title: "পরিবেশ", description: "বৃক্ষরোপণ ও পরিচ্ছন্নতা", color: "bg-green-500/10 text-green-600" },
    { icon: Users, title: "যুব উন্নয়ন", description: "দক্ষতা ও নেতৃত্ব প্রশিক্ষণ", color: "bg-purple-500/10 text-purple-600" },
    { icon: GraduationCap, title: "বৃত্তি", description: "মেধাবী শিক্ষার্থীদের সহায়তা", color: "bg-amber-500/10 text-amber-600" },
    { icon: Droplets, title: "দুর্যোগ ত্রাণ", description: "ত্রাণ সামগ্রী বিতরণ", color: "bg-cyan-500/10 text-cyan-600" }
  ];

  return (
    <section id="activities" className="py-12 md:py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-10">
          <span className="inline-block px-3 py-1 bg-primary/10 rounded-full text-primary text-xs font-medium mb-3">
            কার্যক্রম
          </span>
          <h2 className="text-xl md:text-3xl font-bold text-foreground mb-2">
            যা আমরা করছি
          </h2>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            সমাজের বিভিন্ন ক্ষেত্রে সক্রিয়ভাবে কাজ করছি
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="group p-4 md:p-5 bg-card rounded-xl shadow-soft hover:shadow-elevated transition-all duration-300 overflow-hidden"
            >
              <div className={`w-10 h-10 md:w-11 md:h-11 ${activity.color} rounded-lg flex items-center justify-center mb-3`}>
                <activity.icon className="w-5 h-5" />
              </div>
              <h3 className="text-sm md:text-base font-bold text-foreground mb-1">{activity.title}</h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{activity.description}</p>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-8 text-center">
          <button
            onClick={() => {
              const element = document.querySelector("#contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-5 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-lg shadow-soft hover:shadow-glow transition-all duration-300"
          >
            স্বেচ্ছাসেবক হোন
          </button>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
