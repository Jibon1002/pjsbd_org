import { Camera } from "lucide-react";
import galleryEducation from "@/assets/gallery-education.jpg";
import galleryTreePlanting from "@/assets/gallery-tree-planting.jpg";
import galleryBloodDonation from "@/assets/gallery-blood-donation.jpg";
import galleryFoodDistribution from "@/assets/gallery-food-distribution.jpg";
import galleryHealthCamp from "@/assets/gallery-health-camp.jpg";
import galleryYouthConference from "@/assets/gallery-youth-conference.jpg";

const GallerySection = () => {
  const galleryItems = [
    { title: "শিক্ষা", description: "পাঠদান", image: galleryEducation },
    { title: "বৃক্ষরোপণ", description: "পরিবেশ", image: galleryTreePlanting },
    { title: "রক্তদান", description: "সেবা", image: galleryBloodDonation },
    { title: "খাদ্য বিতরণ", description: "সহায়তা", image: galleryFoodDistribution },
    { title: "স্বাস্থ্য ক্যাম্প", description: "চিকিৎসা", image: galleryHealthCamp },
    { title: "যুব সম্মেলন", description: "প্রশিক্ষণ", image: galleryYouthConference }
  ];

  return (
    <section id="gallery" className="py-12 md:py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-10">
          <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 rounded-full text-primary text-xs font-medium mb-3">
            <Camera className="w-3 h-3" />
            গ্যালারি
          </span>
          <h2 className="text-xl md:text-3xl font-bold text-foreground">
            আমাদের কার্যক্রম
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative aspect-square bg-card rounded-lg md:rounded-xl overflow-hidden shadow-soft"
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-x-0 bottom-0 p-2 md:p-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-xs md:text-sm font-bold text-primary-foreground">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
