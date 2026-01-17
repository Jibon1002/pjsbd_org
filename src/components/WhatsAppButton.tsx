import React from "react";
import whatsappIcon from "@/assets/whatsapp-icon.png";

const WhatsAppButton: React.FC = () => {
  const phoneNumber = "8801321061133";
  const message =
    "Hello, I would like to know more about your organization.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 w-14 h-14 flex items-center justify-center z-[9999] hover:scale-110 transition-transform"
    >
      <img src={whatsappIcon} alt="WhatsApp" className="w-full h-full object-contain" />
    </a>
  );
};

export default WhatsAppButton;