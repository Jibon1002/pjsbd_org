import { User, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
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
  <div className="bg-card rounded-lg p-2 text-center shadow-soft hover:shadow-elevated transition-all duration-300">
    <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-1.5 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center overflow-hidden ring-1 ring-primary/10">
      {member.image ? (
        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
      ) : (
        <User className="w-5 h-5 md:w-6 md:h-6 text-primary/60" />
      )}
    </div>
    <h3 className="text-[10px] md:text-xs font-bold text-foreground leading-tight line-clamp-2">
      {member.name}
    </h3>
    <p className="text-[9px] md:text-[10px] text-primary font-medium leading-tight mt-0.5">
      {member.role}
    </p>
  </div>
);

interface MemberGridProps {
  members: Member[];
}

const MemberGrid = ({ members }: MemberGridProps) => {
  const [showAll, setShowAll] = useState(false);
  const visibleMembers = showAll ? members : members.slice(0, 9);
  const hasMore = members.length > 9;

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-3 gap-2 md:gap-3 max-w-sm mx-auto">
        {visibleMembers.map((member, index) => (
          <MemberCard key={index} member={member} />
        ))}
      </div>
      {hasMore && (
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setShowAll(!showAll)}
          className="mt-4 text-primary hover:text-primary/80 hover:bg-primary/5 gap-1"
        >
          {showAll ? (
            <>
              সংক্ষিপ্ত করুন <ChevronUp className="w-4 h-4" />
            </>
          ) : (
            <>
              আরো দেখুন ({members.length - 9}+) <ChevronDown className="w-4 h-4" />
            </>
          )}
        </Button>
      )}
    </div>
  );
};

const TeamSection = () => {
  return (
    <section id="team" className="py-12 md:py-16 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        {/* Elegant Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
            নেতৃত্ব
          </h2>
          <div className="mt-3 flex items-center justify-center gap-2">
            <span className="h-[1px] w-8 bg-gradient-to-r from-transparent to-primary/60"></span>
            <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
            <span className="h-[1px] w-8 bg-gradient-to-l from-transparent to-primary/60"></span>
          </div>
        </div>

        {/* Tabs Navigation */}
        <Tabs defaultValue="executive" className="w-full">
          <div className="flex justify-center mb-6 overflow-x-auto scrollbar-hide">
            <TabsList className="inline-flex h-auto p-1 bg-muted/50 rounded-full gap-1">
              <TabsTrigger
                value="executive"
                className="px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium whitespace-nowrap transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm"
              >
                কার্যনির্বাহী কমিটি
              </TabsTrigger>
              <TabsTrigger
                value="general"
                className="px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium whitespace-nowrap transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm"
              >
                সাধারণ সদস্য
              </TabsTrigger>
              <TabsTrigger
                value="volunteers"
                className="px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium whitespace-nowrap transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm"
              >
                স্বেচ্ছাসেবক
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Tab Contents */}
          <TabsContent value="executive" className="mt-0 animate-fade-in">
            <MemberGrid members={executiveMembers} />
          </TabsContent>

          <TabsContent value="general" className="mt-0 animate-fade-in">
            <MemberGrid members={generalMembers} />
          </TabsContent>

          <TabsContent value="volunteers" className="mt-0 animate-fade-in">
            <MemberGrid members={volunteers} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default TeamSection;
