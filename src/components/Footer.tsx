import { Heart, Facebook, Instagram, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";

// TikTok icon component (not available in lucide-react)
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "#home", label: "হোম" },
    { href: "#about", label: "সম্পর্কে" },
    { href: "#activities", label: "কার্যক্রম" },
    { href: "#donate", label: "দান" },
    { href: "#contact", label: "যোগাযোগ" },
  ];

  const socialLinks = [
    { href: "https://www.facebook.com/ProjonmoJagoronSociety/", icon: Facebook, label: "Facebook" },
    { href: "https://www.instagram.com/pjsbd_org/", icon: Instagram, label: "Instagram" },
    { href: "https://www.youtube.com/@pjsbd_org", icon: Youtube, label: "YouTube" },
    { href: "https://www.tiktok.com/@pjcbd.org", icon: TikTokIcon, label: "TikTok" },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="py-8 md:py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* About */}
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-3">
                <img src={logo} alt="প্রজন্ম জাগরণ সোসাইটি" className="w-8 h-8 rounded-md object-contain" />
                <h3 className="font-bold text-sm">প্রজন্ম জাগরণ সোসাইটি</h3>
              </div>
              <p className="text-primary-foreground/70 text-xs leading-relaxed max-w-xs mb-4">
                সমাজে ইতিবাচক পরিবর্তন আনতে কাজ করছি।
              </p>
              {/* Social Links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-xs mb-3">লিংক</h4>
              <ul className="space-y-1.5">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <button onClick={() => handleNavClick(link.href)} className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-xs">
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-xs mb-3">যোগাযোগ</h4>
              <ul className="space-y-1.5 text-primary-foreground/70 text-xs">
                <li>
                  <a href="tel:+8801321061133" className="hover:text-primary-foreground transition-colors">
                    01321-061133
                  </a>
                </li>
                <li>বাংলাদেশ</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10" />

        <div className="py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-primary-foreground/60 text-xs">
            © {currentYear} প্রজন্ম জাগরণ সোসাইটি 
          </p>
          <p className="flex items-center gap-1 text-primary-foreground/60 text-xs">
            <Heart className="w-3 h-3 fill-current text-red-400" />
            <span>জাতির সেবায়</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
