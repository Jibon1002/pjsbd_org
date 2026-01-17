import React from "react";
import { MessageCircle } from "lucide-react";

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
      className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg z-[9999] hover:scale-110 transition-transform"
    >
      <MessageCircle className="w-7 h-7" fill="white" />
    </a>
  );
};

export default WhatsAppButton;