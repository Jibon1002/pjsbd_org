import { User } from "lucide-react";
import nadimImage from "@/assets/team-nadim.jpg";
import bokkorImage from "@/assets/team-bokkor.jpg";
import sharifImage from "@/assets/team-sharif.jpg"; 
import imranImage from "@/assets/team-imran.jpg";
import shohidImage from "@/assets/team-shohid.jpg";
import uzzalImage from "@/assets/team-uzzal.jpg";
import jalilImage from "@/assets/team-jalil.jpg";
import tariqImage from "@/assets/team-tariq.jpg";
import rashedullmage from "@/assets/team-rashedul.jpg";

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
    name: "মোঃ উজ্জল হোসেন",
    role: "সাংগঠনিক সম্পাদক",
    image: uzzalImage,
  },
    {
    name: "এম. রাশেদুল ইসলাম",
    role: "ধর্ম বিষয়ক সম্পাদক",
    image: rashedulImage,
  },
    {
    name: "মোঃ আব্দুল জলিল",
    role: "স্বাস্থ্য সেবা বিষয়ক সম্পাদক",
    image: jalilImage,
  },
    {
    name: "তারিকুল ইসলাম",
    role: "নৈতিক পরামর্শক",
    image: tariqImage,
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
    name: "মোঃ শহিদুল ইসলাম শহিদ",
    role: "কার্যনির্বাহী সদস্য",
    image: shohidImage,
  },
];

const TeamSection = () => {
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

        <div className="grid grid-cols-3 gap-3 md:gap-4 max-w-3xl mx-auto">
          {teamMembers.slice(0, 9).map((member, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-2 md:p-3 text-center shadow-soft hover:shadow-elevated transition-all duration-300"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-2 bg-secondary rounded-full flex items-center justify-center overflow-hidden">
                {member.image ? (
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                ) : (
                  <User className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                )}
              </div>
              <h3 className="text-xs md:text-sm font-bold text-foreground mb-0.5 leading-tight">
                {member.name}
              </h3>
              <p className="text-[10px] md:text-xs text-primary font-medium leading-tight">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
