import { User } from "lucide-react";
import nadimImage from "@/assets/team-nadim.jpg";
import bokkorImage from "@/assets/team-bokkor.jpg";
import sharifImage from "@/assets/team-sharif.jpg";
import imranImage from "@/assets/team-imran.jpg";
import imranImage from "@/assets/team-shohid.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const teamMembers = [
  {
    name: "মোঃ নাদিম মোস্তফা জীবন",
    role: "আহ্বায়ক",
    image: nadimImage,
  },
  {
    name: "আবু বক্কর সিদ্দিক",
    role: "সদস্য সচিব",
    image: bokkorImage,
  },
  {
    name: "মোঃ ইমরান হোসেন",
    role: "জনসংযোগ সম্পাদক",
    image: imranImage,
  },
  {
    name: "মোঃ শরীফ হোসেন",
    role: "প্রচার সম্পাদক",
    image: sharifImage,
  },
   {
    name: "মোঃ শহিদুল ইসলাম (শহিদ)",
    role: "কার্যনির্বাহী সদস্য",
    image: shohidImage,
  },
];

const TeamSection = () => {
  // Group members into pairs (2 per slide)
  const memberPairs: typeof teamMembers[] = [];
  for (let i = 0; i < teamMembers.length; i += 2) {
    memberPairs.push(teamMembers.slice(i, i + 2));
  }

  return (
    <section id="team" className="py-12 md:py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <span className="inline-block px-3 py-1 bg-secondary rounded-full text-primary text-xs font-medium mb-3">
            আমাদের দল
          </span>
          <h2 className="text-xl md:text-2xl font-bold text-foreground">
            নেতৃত্ব
          </h2>
        </div>

        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full max-w-lg mx-auto"
        >
          <CarouselContent>
            {memberPairs.map((pair, pairIndex) => (
              <CarouselItem key={pairIndex}>
                <div className="grid grid-cols-2 gap-4">
                  {pair.map((member, index) => (
                    <div
                      key={index}
                      className="bg-card rounded-xl p-4 text-center shadow-soft hover:shadow-elevated transition-all duration-300"
                    >
                      <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-3 bg-secondary rounded-full flex items-center justify-center overflow-hidden">
                        {member.image ? (
                          <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                        ) : (
                          <User className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                        )}
                      </div>
                      <h3 className="text-sm md:text-base font-bold text-foreground mb-1">
                        {member.name}
                      </h3>
                      <p className="text-xs md:text-sm text-primary font-medium">
                        {member.role}
                      </p>
                    </div>
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-4 md:-left-12" />
          <CarouselNext className="-right-4 md:-right-12" />
        </Carousel>
      </div>
    </section>
  );
};

export default TeamSection;
