import { Heart } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "#home", label: "হোম" },
    { href: "#about", label: "সম্পর্কে" },
    { href: "#activities", label: "কার্যক্রম" },
    { href: "#donate", label: "দান" },
    { href: "#contact", label: "যোগাযোগ" },
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
                <img src={logo} alt="প্রজন্ম জাগরণ কাউন্সিল" className="w-8 h-8 rounded-md object-contain" />
                <h3 className="font-bold text-sm">প্রজন্ম জাগরণ কাউন্সিল</h3>
              </div>
              <p className="text-primary-foreground/70 text-xs leading-relaxed max-w-xs">
                সমাজে ইতিবাচক পরিবর্তন আনতে কাজ করছি।
              </p>
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
            © {currentYear} প্রজন্ম জাগরণ কাউন্সিল
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
