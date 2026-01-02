import { Camera } from "lucide-react";

const GallerySection = () => {
  const galleryItems = [
    {
      title: "শিক্ষা কার্যক্রম",
      description: "সুবিধাবঞ্চিত শিশুদের পাঠদান"
    },
    {
      title: "বৃক্ষরোপণ",
      description: "পরিবেশ সংরক্ষণ অভিযান"
    },
    {
      title: "রক্তদান ক্যাম্প",
      description: "স্বেচ্ছাসেবী রক্তদান কর্মসূচি"
    },
    {
      title: "খাদ্য বিতরণ",
      description: "অসহায়দের পাশে দাঁড়ানো"
    },
    {
      title: "স্বাস্থ্য ক্যাম্প",
      description: "বিনামূল্যে স্বাস্থ্য সেবা"
    },
    {
      title: "যুব সম্মেলন",
      description: "নেতৃত্ব প্রশিক্ষণ কর্মশালা"
    }
  ];

  return (
    <section id="gallery" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            <Camera className="w-4 h-4 inline-block mr-2" />
            গ্যালারি
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            আমাদের কর্মকাণ্ডের ছবি
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            বিভিন্ন কার্যক্রমের স্মৃতিময় মুহূর্ত
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300"
            >
              {/* Placeholder gradient background */}
              <div 
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(135deg, 
                    hsl(${152 + index * 10} 40% ${35 + index * 5}%) 0%, 
                    hsl(${160 + index * 10} 35% ${45 + index * 5}%) 100%)`
                }}
              />
              
              {/* Placeholder icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Camera className="w-16 h-16 text-primary-foreground/30" />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-lg font-bold text-primary-foreground mb-1">{item.title}</h3>
                <p className="text-primary-foreground/80 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-muted-foreground mt-10">
          আরও ছবি শীঘ্রই যোগ করা হবে
        </p>
      </div>
    </section>
  );
};

export default GallerySection;
