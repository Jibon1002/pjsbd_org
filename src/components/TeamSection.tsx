import { User } from "lucide-react";
import nadimImage from "@/assets/team-nadim.jpg";

const teamMembers = [
  {
    name: "মোঃ নাদিম মোস্তফা জীবন",
    role: "আহ্বায়ক",
    image: nadimImage,
  },
  {
    name: "আবু বক্কর সিদ্দিক",
    role: "সদস্য সচিব",
    image: null,
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

        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
          {teamMembers.map((member, index) => (
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
      </div>
    </section>
  );
};

export default TeamSection;
