import { User, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

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
   DATA
===================== */

const centralLeadership: Member[] = [
  { name: "মোঃ নাদিম মোস্তফা জীবন", role: "আহ্বায়ক", image: nadimImage },
  { name: "মোঃ মিজানুর রহমান", role: "সহ-আহ্বায়ক", image: mizanImage },
  { name: "আবু বক্কর সিদ্দিক", role: "সদস্য সচিব", image: bokkorImage },
];

const executiveCommittee: Member[] = [
  { name: "মোঃ উজ্জ্বল হোসেন", role: "সাংগঠনিক সম্পাদক", image: uzzalImage },
  { name: "মাওঃ এম রাশেদুল ইসলাম", role: "ধর্ম বিষয়ক সম্পাদক", image: rashedulImage },
  { name: "আব্দুল জলিল", role: "স্বাস্থ্য সেবা বিষয়ক সম্পাদক", image: jalilImage },
  { name: "মোঃ শহিদুল ইসলাম", role: "কার্যনির্বাহী সদস্য", image: shohidImage },
  { name: "তারিকুল ইসলাম", role: "নৈতিক পরামর্শক", image: tariqImage },
];

const generalMembers: Member[] = [
  { name: "মোঃ ইমরান হোসেন", role: "সিনিয়র সদস্য", image: imranImage },
  { name: "মোঃ শরিফ হোসেন", role: "সাধারণ সদস্য", image: sharifImage },
];

const volunteers: Member[] = [
  { name: "আব্দুল্লাহ আল রাকিব", role: "স্বেচ্ছাসেবক", image: alrakibImage },
  { name: "স্বেচ্ছাসেবক ২", role: "স্বেচ্ছাসেবক", image: null },
  { name: "স্বেচ্ছাসেবক ৩", role: "স্বেচ্ছাসেবক", image: null },
];

/* =====================
   COMPONENTS
===================== */

const MemberCard = ({
  member,
  onClick,
}: {
  member: Member;
  onClick: () => void;
}) => (
  <div
    onClick={onClick}
    className="bg-card rounded-xl p-4 text-center shadow hover:shadow-lg transition cursor-pointer"
  >
    <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden bg-muted flex items-center justify-center">
      {member.image ? (
        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
      ) : (
        <User className="w-10 h-10 text-muted-foreground" />
      )}
    </div>
    <h3 className="font-semibold text-sm">{member.name}</h3>
    <p className="text-xs text-primary mt-1">{member.role}</p>
  </div>
);

const MemberGrid = ({ members }: { members: Member[] }) => {
  const [showAll, setShowAll] = useState(false);
  const [selected, setSelected] = useState<Member | null>(null);

  const visible = showAll ? members : members.slice(0, 9);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {visible.map((m, i) => (
          <MemberCard key={i} member={m} onClick={() => setSelected(m)} />
        ))}
      </div>

      {members.length > 9 && (
        <Button
          variant="ghost"
          size="sm"
          className="mt-4"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "সংক্ষিপ্ত করুন" : "আরো দেখুন"}
          {showAll ? <ChevronUp /> : <ChevronDown />}
        </Button>
      )}

      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="p-0 overflow-hidden">
          <DialogTitle className="sr-only">Member</DialogTitle>
          {selected && (
            <div className="relative">
              <div className="aspect-square">
                {selected.image ? (
                  <img src={selected.image} className="w-full h-full object-cover" />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <User className="w-20 h-20" />
                  </div>
                )}
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 text-white">
                <h3 className="font-bold">{selected.name}</h3>
                <p className="text-sm">{selected.role}</p>
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
    <section id="team" className="py-16">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-10">আমাদের টিম</h2>

        <Tabs defaultValue="executive">
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="executive">কার্যনির্বাহী</TabsTrigger>
            <TabsTrigger value="general">সাধারণ সদস্য</TabsTrigger>
            <TabsTrigger value="volunteers">স্বেচ্ছাসেবক</TabsTrigger>
          </TabsList>

          <TabsContent value="executive">
            <MemberGrid members={executiveCommittee} />
          </TabsContent>

          <TabsContent value="general">
            <MemberGrid members={generalMembers} />
          </TabsContent>

          <TabsContent value="volunteers">
            <MemberGrid members={volunteers} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default TeamSection;
