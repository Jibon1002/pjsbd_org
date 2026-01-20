import { User, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

// Images
import tariqImage from "@/assets/team-tariq.jpg";
import rashedulImage from "@/assets/team-rashedul.jpg";
import nadimImage from "@/assets/team-nadim.jpg";
import jalilImage from "@/assets/team-jalil.jpg";
import uzzalImage from "@/assets/team-uzzal.jpg";
// import alrakibImage from "@/assets/team-alrakib.jpg"; // Available if needed
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

/* =====================
   CATEGORIZED DATA
===================== */

const centralLeadership: Member[] = [
  { name: "মোঃ নাদিম মোস্তফা জীবন", role: "আহ্বায়ক", image: nadimImage },
  { name: "মোঃ মিজানুর রহমান", role: "সহ-আহ্বায়ক", image: mizanImage },
  { name: "আবু বক্কর সিদ্দিক", role: "সদস্য সচিব", image: bokkorImage },
];

const executiveCommittee: Member[] = [
  { name: "মোঃ উজ্জ্বল হোসেন", role: "সাংগঠনিক সম্পাদক", image: uzzalImage },
  { name: "মাওঃ এম. রাশেদুল ইসলাম", role: "ধর্ম বিষয়ক সম্পাদক", image: rashedulImage },
  { name: "আব্দুল জলিল", role: "স্বাস্থ্য সেবা বিষয়ক সম্পাদক", image: jalilImage },
  { name: "মোঃ শহিদুল ইসলাম", role: "কার্যনির্বাহী সদস্য", image: shohidImage },
];

const advisoryRoles: Member[] = [
  { name: "তারিকুল ইসলাম", role: "নৈতিক পরামর্শক", image: tariqImage },
];

const generalMembers: Member[] = [
  { name: "মোঃ ইমরান হোসেন", role: "সিনিয়র সদস্য", image: imranImage },
  { name: "মোঃ শরিফ হোসেন", role: "সাধারণ সদস্য", image: sharifImage },
];

/* =====================
   COMPONENTS
===================== */

const MemberCard = ({ member, onClick }: { member: Member; onClick: () => void }) => (
  <div
    onClick={onClick}
    className="bg-card border border-border rounded-lg p-2 sm:p-4 text-center shadow-sm hover:shadow-md transition cursor-pointer flex flex-col items-center w-full"
  >
    {/* Responsive image sizing for 3-column layout */}
    <div className="w-14 h-14 xs:w-16 xs:h-16 sm:w-24 sm:h-24 mb-2 rounded-full overflow-hidden bg-muted flex items-center justify-center border-2 border-primary/10">
      {member.image ? (
        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
      ) : (
        <User className="w-6 h-6 sm:w-10 sm:h-10 text-muted-foreground" />
      )}
    </div>
    
    {/* Text sizing adjusted for mobile density */}
    <h3 className="font-bold text-[10px] sm:text-sm leading-tight line-clamp-2 min-h-[2.5em] flex items-center justify-center">
      {member.name}
    </h3>
    <p className="text-[9px] sm:text-xs text-primary font-medium mt-1 truncate w-full">
      {member.role}
    </p>
  </div>
);

const MemberGrid = ({ members }: { members: Member[] }) => {
  const [showAll, setShowAll] = useState(false);
  const [selected, setSelected] = useState<Member | null>(null);

  // Default to 9 for the "3x3" grid appearance
  const visible = showAll ? members : members.slice(0, 9);

  return (
    <>
      <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-6 justify-items-center">
        {visible.map((m, i) => (
          <MemberCard key={i} member={m} onClick={() => setSelected(m)} />
        ))}
      </div>

      {members.length > 9 && (
        <div className="flex justify-center mt-6">
          <Button variant="outline" size="sm" onClick={() => setShowAll(!showAll)}>
            {showAll ? "সংক্ষিপ্ত করুন" : "আরো দেখুন"}
            {showAll ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
          </Button>
        </div>
      )}

      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-[90vw] sm:max-w-xs p-0 overflow-hidden border-none bg-transparent shadow-2xl">
          <DialogTitle className="sr-only">Member Details</DialogTitle>
          {selected && (
            <div className="relative rounded-2xl overflow-hidden bg-white dark:bg-slate-900">
              <div className="aspect-square bg-muted">
                {selected.image ? (
                  <img src={selected.image} className="w-full h-full object-cover" />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <User className="w-20 h-20 text-muted-foreground" />
                  </div>
                )}
              </div>
              <div className="p-6 text-center">
                <h3 className="font-bold text-xl mb-1">{selected.name}</h3>
                <p className="text-primary font-semibold">{selected.role}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

/* =====================
   MAIN SECTION
===================== */

const TeamSection = () => {
  return (
    <section id="team" className="py-12 px-2 sm:py-16 sm:px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">আমাদের টিম</h2>
          <p className="text-muted-foreground text-sm sm:text-base">প্রজন্ম জাগরণ সোসাইটি</p>
        </div>

        {/* Central Leadership - Forced 3x3 Grid */}
        <div className="mb-12">
          <h3 className="text-lg sm:text-xl font-bold text-center mb-6 text-primary border-b border-primary/10 pb-2 inline-block mx-auto flex w-fit">
            কেন্দ্রীয় নেতৃত্ব
          </h3>
          <MemberGrid members={centralLeadership} />
        </div>

        {/* Tabs for Other Categories */}
        <Tabs defaultValue="executive" className="w-full">
          <TabsList className="grid grid-cols-3 mb-8 h-auto p-1 bg-muted/50 rounded-lg">
            <TabsTrigger value="executive" className="text-[11px] sm:text-sm py-2">কার্যনির্বাহী</TabsTrigger>
            <TabsTrigger value="advisory" className="text-[11px] sm:text-sm py-2">উপদেষ্টা</TabsTrigger>
            <TabsTrigger value="general" className="text-[11px] sm:text-sm py-2">সদস্যবৃন্দ</TabsTrigger>
          </TabsList>

          <TabsContent value="executive" className="focus-visible:outline-none">
            <h4 className="text-base sm:text-lg font-semibold mb-6 text-center text-muted-foreground">কার্যনির্বাহী পরিষদ</h4>
            <MemberGrid members={executiveCommittee} />
          </TabsContent>

          <TabsContent value="advisory" className="focus-visible:outline-none">
            <h4 className="text-base sm:text-lg font-semibold mb-6 text-center text-muted-foreground">উপদেষ্টা ও বিশেষ দায়িত্ব</h4>
            <MemberGrid members={advisoryRoles} />
          </TabsContent>

          <TabsContent value="general" className="focus-visible:outline-none">
            <h4 className="text-base sm:text-lg font-semibold mb-6 text-center text-muted-foreground">সাধারণ পরিষদ</h4>
            <MemberGrid members={generalMembers} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default TeamSection;
