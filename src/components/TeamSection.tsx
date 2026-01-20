/* =====================
   TEAM SECTION (3x3 GRID)
===================== */

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
    className="bg-card border border-border rounded-xl p-4 text-center shadow-sm hover:shadow-md transition cursor-pointer"
  >
    <div className="w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden bg-muted flex items-center justify-center border-2 border-primary/10">
      {member.image ? (
        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
      ) : (
        <User className="w-10 h-10 text-muted-foreground" />
      )}
    </div>
    <h3 className="font-semibold text-sm leading-tight">{member.name}</h3>
    <p className="text-xs text-primary font-medium mt-1">{member.role}</p>
  </div>
);

const MemberGrid = ({ members }: { members: Member[] }) => {
  const [showAll, setShowAll] = useState(false);
  const [selected, setSelected] = useState<Member | null>(null);

  // Show max 9 by default
  const visible = showAll ? members : members.slice(0, 9);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
        <DialogContent className="sm:max-w-xs p-0 overflow-hidden border-none bg-transparent">
          <DialogTitle className="sr-only">Member Details</DialogTitle>
          {selected && (
            <div className="relative rounded-lg overflow-hidden">
              <div className="aspect-square bg-muted">
                {selected.image ? (
                  <img src={selected.image} className="w-full h-full object-cover" />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <User className="w-20 h-20 text-muted-foreground" />
                  </div>
                )}
              </div>
              <div className="bg-white dark:bg-slate-900 p-4 text-center">
                <h3 className="font-bold text-lg">{selected.name}</h3>
                <p className="text-primary font-medium">{selected.role}</p>
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
    <section id="team" className="py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">আমাদের টিম</h2>
          <p className="text-muted-foreground">প্রজন্ম জাগরণ সোসাইটি</p>
        </div>

        {/* Central Leadership */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-center mb-6 text-primary">কেন্দ্রীয় নেতৃত্ব</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
            {centralLeadership.map((m, i) => (
              <MemberCard key={i} member={m} onClick={() => {}} />
            ))}
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="executive" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="executive">কার্যনির্বাহী</TabsTrigger>
            <TabsTrigger value="advisory">উপদেষ্টা</TabsTrigger>
            <TabsTrigger value="general">সদস্যবৃন্দ</TabsTrigger>
          </TabsList>

          <TabsContent value="executive">
            <h4 className="text-lg font-semibold mb-4 text-center">কার্যনির্বাহী পরিষদ</h4>
            <MemberGrid members={executiveCommittee} />
          </TabsContent>

          <TabsContent value="advisory">
            <h4 className="text-lg font-semibold mb-4 text-center">উপদেষ্টা ও বিশেষ দায়িত্ব</h4>
            <MemberGrid members={advisoryRoles} />
          </TabsContent>

          <TabsContent value="general">
            <h4 className="text-lg font-semibold mb-4 text-center">সাধারণ পরিষদ</h4>
            <MemberGrid members={generalMembers} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default TeamSection;
