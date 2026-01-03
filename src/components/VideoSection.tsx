import { Youtube } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Add your YouTube video IDs here (latest first)
// Get video ID from YouTube URL: https://www.youtube.com/watch?v=VIDEO_ID
const videos = [
  { id: "VIDEO_ID_1", title: "ভিডিও ১" },
  // { id: "VIDEO_ID_2", title: "ভিডিও ২" },
  // { id: "VIDEO_ID_3", title: "ভিডিও ৩" },
  // { id: "VIDEO_ID_4", title: "ভিডিও ৪" },
];

const VideoSection = () => {
  if (videos.length === 0) return null;

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

        {videos.length <= 3 ? (
          // Simple grid for 3 or fewer videos
          <div className={`grid gap-2 md:gap-6 ${
            videos.length === 1 ? 'grid-cols-1 max-w-2xl mx-auto' : 
            videos.length === 2 ? 'grid-cols-2 max-w-4xl mx-auto' : 
            'grid-cols-3'
          }`}>
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
        ) : (
          // Carousel for more than 3 videos
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {videos.map((video, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/3">
                  <div className="aspect-video rounded-lg overflow-hidden shadow-md bg-background">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 -translate-x-1/2" />
            <CarouselNext className="right-0 translate-x-1/2" />
          </Carousel>
        )}
      </div>
    </section>
  );
};

export default VideoSection;
