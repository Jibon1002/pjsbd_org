import { User, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import nadimImage from "@/assets/team-nadim.jpg";
import bokkorImage from "@/assets/team-bokkor.jpg";
import sharifImage from "@/assets/team-sharif.jpg"; 
import imranImage from "@/assets/team-imran.jpg";
import shohidImage from "@/assets/team-shohid.jpg";
import uzzalImage from "@/assets/team-uzzal.jpg";
import jalilImage from "@/assets/team-jalil.jpg";
import tariqImage from "@/assets/team-tariq.jpg";
import rashedulImage from "@/assets/team-rashedul.jpg";

const executiveMembers = [
  { name: "মোঃ নাদিম মোস্তফা জীবন", role: "আহ্বায়ক", image: nadimImage },
  { name: "আবু বক্কর সিদ্দিক", role: "সদস্য সচিব", image: bokkorImage },
  { name: "মোঃ উজ্জল হোসেন", role: "সাংগঠনিক সম্পাদক", image: uzzalImage },
  { name: "এম. রাশেদুল ইসলাম", role: "ধর্ম বিষয়ক সম্পাদক", image: rashedulImage },
  { name: "মোঃ আব্দুল জলিল", role: "স্বাস্থ্য সেবা বিষয়ক সম্পাদক", image: jalilImage },
  { name: "তারিকুল ইসলাম", role: "নৈতিক পরামর্শক", image: tariqImage },
  { name: "মোঃ ইমরান হোসেন", role: "জনসংযোগ সম্পাদক", image: imranImage },
  { name: "মোঃ শরীফ হোসেন", role: "প্রচার সম্পাদক", image: sharifImage },
  { name: "মোঃ শহিদুল ইসলাম শহিদ", role: "কার্যনির্বাহী সদস্য", image: shohidImage },
];

const generalMembers = [
  { name: "সাধারণ সদস্য ১", role: "সদস্য", image: null },
  { name: "সাধারণ সদস্য ২", role: "সদস্য", image: null },
  { name: "সাধারণ সদস্য ৩", role: "সদস্য", image: null },
];

const volunteers = [
  { name: "স্বেচ্ছাসেবক ১", role: "স্বেচ্ছাসেবক", image: null },
  { name: "স্বেচ্ছাসেবক ২", role: "স্বেচ্ছাসেবক", image: null },
  { name: "স্বেচ্ছাসেবক ৩", role: "স্বেচ্ছাসেবক", image: null },
];

interface Member {
  name: string;
  role: string;
  image: string | null;
}

const MemberCard = ({ member }: { member: Member }) => (
  <div className="bg-card rounded-xl p-4 md:p-5 text-center shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
    <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-3 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center overflow-hidden ring-2 ring-primary/10">
      {member.image ? (
        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
      ) : (
        <User className="w-8 h-8 md:w-10 md:h-10 text-primary/60" />
      )}
    </div>
    <h3 className="text-sm md:text-base font-bold text-foreground mb-1 leading-tight">
      {member.name}
    </h3>
    <p className="text-xs md:text-sm text-primary font-medium">
      {member.role}
    </p>
  </div>
);

const TeamSection = () => {
  const tabsListRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
    if (tabsListRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = tabsListRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (tabsListRef.current) {
      const scrollAmount = 150;
      tabsListRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="team" className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        {/* Elegant Header */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            নেতৃত্ব
          </h2>
          <div className="mt-4 flex items-center justify-center gap-3">
            <span className="h-[2px] w-12 bg-gradient-to-r from-transparent to-primary/60"></span>
            <span className="h-2 w-2 rounded-full bg-primary"></span>
            <span className="h-[2px] w-12 bg-gradient-to-l from-transparent to-primary/60"></span>
          </div>
        </div>

        {/* Tabs Navigation */}
        <Tabs defaultValue="executive" className="w-full">
          <div className="relative flex items-center justify-center mb-8">
            {/* Left scroll button */}
            <button
              onClick={() => scroll('left')}
              className={`absolute left-0 z-10 p-2 rounded-full bg-card shadow-md transition-opacity md:hidden ${
                canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <ChevronLeft className="w-4 h-4 text-foreground" />
            </button>

            {/* Tabs List */}
            <div
              ref={tabsListRef}
              onScroll={checkScroll}
              className="overflow-x-auto scrollbar-hide"
            >
              <TabsList className="inline-flex h-auto p-1.5 bg-muted/50 rounded-full gap-1 md:gap-2">
                <TabsTrigger
                  value="executive"
                  className="px-4 md:px-6 py-2.5 md:py-3 rounded-full text-sm md:text-base font-medium whitespace-nowrap transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md"
                >
                  কার্যনির্বাহী কমিটি
                </TabsTrigger>
                <TabsTrigger
                  value="general"
                  className="px-4 md:px-6 py-2.5 md:py-3 rounded-full text-sm md:text-base font-medium whitespace-nowrap transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md"
                >
                  সাধারণ সদস্য
                </TabsTrigger>
                <TabsTrigger
                  value="volunteers"
                  className="px-4 md:px-6 py-2.5 md:py-3 rounded-full text-sm md:text-base font-medium whitespace-nowrap transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md"
                >
                  স্বেচ্ছাসেবক
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Right scroll button */}
            <button
              onClick={() => scroll('right')}
              className={`absolute right-0 z-10 p-2 rounded-full bg-card shadow-md transition-opacity md:hidden ${
                canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <ChevronRight className="w-4 h-4 text-foreground" />
            </button>
          </div>

          {/* Tab Contents */}
          <TabsContent value="executive" className="mt-0 animate-fade-in">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 max-w-6xl mx-auto">
              {executiveMembers.map((member, index) => (
                <MemberCard key={index} member={member} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="general" className="mt-0 animate-fade-in">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 max-w-6xl mx-auto">
              {generalMembers.map((member, index) => (
                <MemberCard key={index} member={member} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="volunteers" className="mt-0 animate-fade-in">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 max-w-6xl mx-auto">
              {volunteers.map((member, index) => (
                <MemberCard key={index} member={member} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default TeamSection;
