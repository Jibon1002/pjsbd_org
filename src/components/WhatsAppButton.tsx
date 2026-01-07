import React from "react";

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
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        width: "56px",
        height: "56px",
        backgroundColor: "#25D366",
        color: "#ffffff",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "28px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
        zIndex: 9999,
        textDecoration: "none",
        cursor: "pointer",
      }}
    >
      💬
    </a>
  );
};

export default WhatsAppButton;