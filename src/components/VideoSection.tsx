import { Youtube } from "lucide-react";

const videos = [
  {
    id: "VIDEO_ID_1", // Replace with actual YouTube video ID
    title: "প্রজন্ম জাগরণ কার্যক্রম ১",
  },
  {
    id: "VIDEO_ID_2", // Replace with actual YouTube video ID
    title: "প্রজন্ম জাগরণ কার্যক্রম ২",
  },
  {
    id: "VIDEO_ID_3", // Replace with actual YouTube video ID
    title: "প্রজন্ম জাগরণ কার্যক্রম ৩",
  },
];

const VideoSection = () => {
  return (
    <section id="videos" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Youtube className="h-8 w-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-bengali">
              আমাদের ভিডিও
            </h2>
          </div>
          <p className="text-muted-foreground font-bengali max-w-2xl mx-auto">
            প্রজন্ম জাগরণের বিভিন্ন কার্যক্রমের ভিডিও দেখুন
          </p>
          <a
            href="https://www.youtube.com/@pjcbd_org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-primary hover:text-primary/80 transition-colors font-bengali"
          >
            <Youtube className="h-5 w-5" />
            আমাদের YouTube চ্যানেল দেখুন
          </a>
        </div>

        <div className="grid grid-cols-3 gap-2 md:gap-6">
          {videos.map((video, index) => (
            <div
              key={index}
              className="aspect-video rounded-lg overflow-hidden shadow-md bg-background"
            >
              <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
