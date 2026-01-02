import { BookOpen, Users, Heart, Leaf, GraduationCap, Droplets } from "lucide-react";

const ActivitiesSection = () => {
  const activities = [
    {
      icon: BookOpen,
      title: "শিক্ষা কার্যক্রম",
      description: "সুবিধাবঞ্চিত শিশুদের বিনামূল্যে শিক্ষা প্রদান, বই বিতরণ এবং শিক্ষা উপকরণ সরবরাহ।",
      color: "bg-blue-500/10 text-blue-600"
    },
    {
      icon: Heart,
      title: "স্বাস্থ্য সেবা",
      description: "বিনামূল্যে স্বাস্থ্য ক্যাম্প, রক্তদান কর্মসূচি এবং স্বাস্থ্য সচেতনতামূলক প্রচারণা।",
      color: "bg-red-500/10 text-red-600"
    },
    {
      icon: Leaf,
      title: "পরিবেশ সংরক্ষণ",
      description: "বৃক্ষরোপণ অভিযান, পরিচ্ছন্নতা কার্যক্রম এবং পরিবেশ সচেতনতা বৃদ্ধি।",
      color: "bg-green-500/10 text-green-600"
    },
    {
      icon: Users,
      title: "যুব উন্নয়ন",
      description: "দক্ষতা উন্নয়ন প্রশিক্ষণ, ক্যারিয়ার কাউন্সেলিং এবং নেতৃত্ব প্রশিক্ষণ কর্মশালা।",
      color: "bg-purple-500/10 text-purple-600"
    },
    {
      icon: GraduationCap,
      title: "বৃত্তি প্রদান",
      description: "মেধাবী ও অসচ্ছল শিক্ষার্থীদের বৃত্তি প্রদান করে তাদের শিক্ষা জীবন সহায়তা।",
      color: "bg-amber-500/10 text-amber-600"
    },
    {
      icon: Droplets,
      title: "দুর্যোগ ত্রাণ",
      description: "প্রাকৃতিক দুর্যোগে ক্ষতিগ্রস্তদের পাশে দাঁড়ানো এবং ত্রাণ সামগ্রী বিতরণ।",
      color: "bg-cyan-500/10 text-cyan-600"
    }
  ];

  return (
    <section id="activities" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            আমাদের কার্যক্রম
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            যা আমরা করছি
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            সমাজের বিভিন্ন ক্ষেত্রে আমরা সক্রিয়ভাবে কাজ করে যাচ্ছি। প্রতিটি কার্যক্রম আমাদের লক্ষ্য অর্জনে সহায়ক।
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="group relative p-8 bg-card rounded-2xl shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
              
              <div className={`relative w-16 h-16 ${activity.color} rounded-2xl flex items-center justify-center mb-6`}>
                <activity.icon className="w-8 h-8" />
              </div>
              
              <h3 className="relative text-xl font-bold text-foreground mb-3">{activity.title}</h3>
              <p className="relative text-muted-foreground leading-relaxed">{activity.description}</p>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">আমাদের কার্যক্রমে অংশ নিতে চান?</p>
          <button
            onClick={() => {
              const element = document.querySelector("#contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
          >
            স্বেচ্ছাসেবক হিসেবে যোগ দিন
          </button>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
