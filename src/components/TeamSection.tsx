import { User, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

// Images (Ensure these paths are correct in your project)
import tariqImage from "@/assets/team-tariq.jpg";
import rashedulImage from "@/assets/team-rashedul.jpg";
import nadimImage from "@/assets/team-nadim.jpg";
import jalilImage from "@/assets/team-jalil.jpg";
import uzzalImage from "@/assets/team-uzzal.jpg";
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

const MemberCard = ({ member, onClick }: { member: Member; onClick: () => void }) => (
  <div
    onClick={onClick}
    className="bg-card border border-border rounded-lg p-1.5 sm:p-4 text-center shadow-sm hover:shadow-md transition cursor-pointer flex flex-col items-center w-full"
  >
    {/* Force fixed sizes on mobile so 3 fit across */}
    <div className="w-12 h-12 xs:w-16 xs:h-16 sm:w-24 sm:h-24 mb-1.5 rounded-full overflow-hidden bg-muted flex items-center justify-center border border-primary/10">
      {member.image ? (
        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
      ) : (
        <User className="w-6 h-6 sm:w-10 sm:h-10 text-muted-foreground" />
      )}
    </div>
    
    <h3 className="font-bold text-[9px] leading-[1.1] xs:text-[11px] sm:text-sm line-clamp-2 min-h-[2.2em] flex items-center justify-center">
      {member.name}
    </h3>
    <p className="text-[8px] xs:text-[10px] sm:text-xs text-primary font-medium mt-0.5 truncate w-full">
      {member.role}
    </p>
  </div>
);

const MemberGrid = ({ members }: { members: Member[] }) => {
  const [showAll, setShowAll] = useState(false);
  const [selected, setSelected] = useState<Member | null>(null);

  const visible = showAll ? members : members.slice(0, 9);

  return (
    <>
      {/* grid-cols-3: FORCED 3 columns on mobile
          gap-1.5: Very small gap to prevent overflow 
      */}
      <div className="grid grid-cols-3 gap-1.5 sm:gap-6 w-full max-w-full">
        {visible.map((m, i) => (
          <MemberCard key={i} member={m} onClick={() => setSelected(m)} />
        ))}
      </div>

      {members.length > 9 && (
        <div className="flex justify-center mt-6">
          <Button variant="outline" size="sm" onClick={() => setShowAll(!showAll)}>
            {showAll ? "সংক্ষিপ্ত করুন" : "আরো দেখুন"}
          </Button>
        </div>
      )}

      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-[90vw] sm:max-w-xs p-0 overflow-hidden border-none bg-transparent">
          <DialogTitle className="sr-only">Details</DialogTitle>
          {selected && (
            <div className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden">
              <div className="aspect-square bg-muted">
                {selected.image ? (
                  <img src={selected.image} className="w-full h-full object-cover" />
                ) : (
                  <div className="flex items-center justify-center h-full"><User className="w-20" /></div>
                )}
              </div>
              <div className="p-4 text-center">
                <h3 className="font-bold text-lg">{selected.name}</h3>
                <p className="text-primary">{selected.role}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

const TeamSection = () => {
  return (
    <section id="team" className="py-10 px-1 sm:px-4 overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">আমাদের টিম</h2>
          <p className="text-muted-foreground text-xs uppercase tracking-widest mt-1">প্রজন্ম জাগরণ সোসাইটি</p>
        </div>

        <div className="mb-10">
          <h3 className="text-md font-bold text-center mb-4 text-primary">কেন্দ্রীয় নেতৃত্ব</h3>
          <MemberGrid members={centralLeadership} />
        </div>

        <Tabs defaultValue="executive" className="w-full">
          <TabsList className="grid grid-cols-3 mb-6 h-auto p-1">
            <TabsTrigger value="executive" className="text-[10px] sm:text-sm py-2">কার্যনির্বাহী</TabsTrigger>
            <TabsTrigger value="advisory" className="text-[10px] sm:text-sm py-2">উপদেষ্টা</TabsTrigger>
            <TabsTrigger value="general" className="text-[10px] sm:text-sm py-2">সদস্যবৃন্দ</TabsTrigger>
          </TabsList>

          <TabsContent value="executive"><MemberGrid members={executiveCommittee} /></TabsContent>
          <TabsContent value="advisory"><MemberGrid members={advisoryRoles} /></TabsContent>
          <TabsContent value="general"><MemberGrid members={generalMembers} /></TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default TeamSection;
