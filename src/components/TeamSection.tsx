import { User, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

// Import team images
import tariqImage from "@/assets/team-tariq.jpg";
import rashedulImage from "@/assets/team-rashedul.jpg";
import nadimImage from "@/assets/team-nadim.jpg";
import jalilImage from "@/assets/team-jalil.jpg";
import uzzalImage from "@/assets/team-uzzal.jpg";
import alrakibImage from "@/assets/team-alrakib.jpg";
import imranImage from "@/assets/team-imran.jpg";
import bokkorImage from "@/assets/team-bokkor.jpg";
import sharifImage from "@/assets/team-sharif.jpg";
import shohidImage from "@/assets/team-shohid.jpg";
import mizanImage from "@/assets/team-mizan.jpg";

interface Member {
  name: string;
  role: string;
  image: string | null;
}

const executiveMembers: Member[] = [
   { name: "মোঃ নাদিম মোস্তফা জীবন", role: "আহ্বায়ক", image: nadimImage }, 
   { name: "মোঃ মিজানুর রহমান", role: "সহ-আহ্বায়ক", image: mizanImage }, 
  { name: "আবু বক্কর সিদ্দিক", role: "সদস্য সচিব", image: bokkorImage }, 
  { name: "মোঃ উজ্জ্বল হোসেন", role: "সাংগঠনিক সম্পাদক", image: uzzalImage }, 
  { name: "মাওঃ এম রাশেদুল ইসলাম ", role: "ধর্ম বিষয়ক সম্পাদক", image: rashedulImage }, 
  { name: "আব্দুল জলিল", role: "স্বাস্থ্য সেবা বিষয়ক সম্পাদক", image: jalilImage },
  { name: "মোঃ শহিদুল ইসলাম", role: "কার্যনির্বাহী সদস্য ", image: shohidImage }, 
  { name: "তারিকুল ইসলাম", role: "নৈতিক পরামর্শক", image: tariqImage },
  { name: "মোঃ ইমরান হোসেন", role: "সিনিয়র সদস্য", image: imranImage },
  { name: "মোঃ শরিফ হোসেন", role: "সদস্য", image: sharifImage },
];

const generalMembers: Member[] = [
  { name: "সদস্য ১", role: "সাধারণ সদস্য", image: null },
  { name: "সদস্য ২", role: "সাধারণ সদস্য", image: null },
  { name: "সদস্য ৩", role: "সাধারণ সদস্য", image: null },
];

const volunteers: Member[] = [
  { name: "আব্দুল্লাহ আল রাকিব", role: "স্বেচ্ছাসেবক", image: alrakibImage },
  { name: "স্বেচ্ছাসেবক ২", role: "স্বেচ্ছাসেবক", image: null },
  { name: "স্বেচ্ছাসেবক ৩", role: "স্বেচ্ছাসেবক", image: null },
];

const MemberCard = ({ member }: { member: Member }) => (
  <div className="bg-card rounded-xl p-3 md:p-5 text-center shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
    <div className="w-12 h-12 md:w-20 md:h-20 lg:w-24 lg:h-24 mx-auto mb-2 md:mb-4 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center overflow-hidden ring-2 ring-primary/10">
      {member.image ? (
        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
      ) : (
        <User className="w-6 h-6 md:w-10 md:h-10 lg:w-12 lg:h-12 text-primary/60" />
      )}
    </div>
    <h3 className="text-xs md:text-base lg:text-lg font-bold text-foreground leading-tight line-clamp-2">
      {member.name}
    </h3>
    <p className="text-[10px] md:text-sm lg:text-base text-primary font-medium leading-tight mt-0.5 md:mt-1">
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
      <div className="grid grid-cols-3 gap-2 md:gap-4 lg:gap-6 max-w-xs md:max-w-2xl lg:max-w-4xl mx-auto">
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
    <section id="team" className="py-12 md:py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        {/* Elegant Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            নেতৃত্ব
          </h2>
          <div className="mt-3 flex items-center justify-center gap-2">
            <span className="h-[1px] w-8 md:w-12 bg-gradient-to-r from-transparent to-primary/60"></span>
            <span className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-primary"></span>
            <span className="h-[1px] w-8 md:w-12 bg-gradient-to-l from-transparent to-primary/60"></span>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="executive" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-6 md:mb-8 h-auto p-1 bg-muted/50">
            <TabsTrigger 
              value="executive" 
              className="text-[10px] md:text-sm py-2 md:py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              কার্যনির্বাহী কমিটি
            </TabsTrigger>
            <TabsTrigger 
              value="general" 
              className="text-[10px] md:text-sm py-2 md:py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              সাধারণ সদস্য
            </TabsTrigger>
            <TabsTrigger 
              value="volunteers" 
              className="text-[10px] md:text-sm py-2 md:py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              স্বেচ্ছাসেবক
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="executive" className="mt-0">
            <MemberGrid members={executiveMembers} />
          </TabsContent>
          
          <TabsContent value="general" className="mt-0">
            <MemberGrid members={generalMembers} />
          </TabsContent>
          
          <TabsContent value="volunteers" className="mt-0">
            <MemberGrid members={volunteers} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default TeamSection;
