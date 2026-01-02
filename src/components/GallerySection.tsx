import { Camera } from "lucide-react";

const GallerySection = () => {
  const galleryItems = [
    { title: "শিক্ষা", description: "পাঠদান" },
    { title: "বৃক্ষরোপণ", description: "পরিবেশ" },
    { title: "রক্তদান", description: "সেবা" },
    { title: "খাদ্য বিতরণ", description: "সহায়তা" },
    { title: "স্বাস্থ্য ক্যাম্প", description: "চিকিৎসা" },
    { title: "যুব সম্মেলন", description: "প্রশিক্ষণ" }
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
              <div 
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(135deg, 
                    hsl(${152 + index * 10} 40% ${35 + index * 5}%) 0%, 
                    hsl(${160 + index * 10} 35% ${45 + index * 5}%) 100%)`
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Camera className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground/30" />
              </div>
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
