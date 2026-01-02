import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "#home", label: "হোম" },
    { href: "#about", label: "আমাদের সম্পর্কে" },
    { href: "#activities", label: "কার্যক্রম" },
    { href: "#gallery", label: "গ্যালারি" },
    { href: "#donate", label: "দান করুন" },
    { href: "#contact", label: "যোগাযোগ" },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Main Footer */}
        <div className="py-12 md:py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* About */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-xl">প্র</span>
                </div>
                <div>
                  <h3 className="font-bold text-xl">প্রজন্ম জাগরণ কাউন্সিল</h3>
                  <p className="text-primary-foreground/60 text-sm">Projonmo Jagoron Council</p>
                </div>
              </div>
              <p className="text-primary-foreground/70 leading-relaxed max-w-md">
                সমাজে ইতিবাচক পরিবর্তন আনতে এবং যুব সমাজকে সচেতন করতে আমরা নিরলসভাবে কাজ করে যাচ্ছি। আমাদের সাথে থাকুন, একসাথে গড়ি সুন্দর আগামী।
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-6">দ্রুত লিংক</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-lg mb-6">যোগাযোগ</h4>
              <ul className="space-y-3 text-primary-foreground/70">
                <li>
                  <a 
                    href="mailto:projonmojagoroncouncil@gmail.com" 
                    className="hover:text-primary-foreground transition-colors break-all text-sm"
                  >
                    projonmojagoroncouncil@gmail.com
                  </a>
                </li>
                <li>
                  <a 
                    href="tel:+8801321061133" 
                    className="hover:text-primary-foreground transition-colors"
                  >
                    +880 1321-061133
                  </a>
                </li>
                <li>বাংলাদেশ</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/10" />

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm text-center md:text-left">
            © {currentYear} প্রজন্ম জাগরণ কাউন্সিল। সর্বস্বত্ব সংরক্ষিত।
          </p>
          <p className="flex items-center gap-1 text-primary-foreground/60 text-sm">
            <Heart className="w-4 h-4 fill-current text-red-400" />
            <span>দেশ ও জাতির সেবায় নিবেদিত</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
