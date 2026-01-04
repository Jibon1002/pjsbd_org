import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = [{
    href: "#home",
    label: "হোম"
  }, {
    href: "#about",
    label: "সম্পর্কে"
  }, {
    href: "#activities",
    label: "কার্যক্রম"
  }, {
    href: "#donate",
    label: "দান"
  }, {
    href: "#contact",
    label: "যোগাযোগ"
  }];
  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-card/95 backdrop-blur-md shadow-soft" : "bg-transparent"}`}>
      <div className="container mx-auto px-4 shadow-xl">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2" onClick={() => handleNavClick("#home")}>
            <img src={logo} alt="প্রজন্ম জাগরণ কাউন্সিল" className="w-8 h-8 rounded-md object-contain" />
            <span className={`font-bold text-sm hidden sm:block ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>
              প্রজন্ম জাগরণ কাউন্সিল
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map(link => <button key={link.href} onClick={() => handleNavClick(link.href)} className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-200 hover:bg-primary/10 ${scrolled ? "text-foreground hover:text-primary" : "text-primary-foreground/90 hover:text-primary-foreground"}`}>
                {link.label}
              </button>)}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className={`md:hidden p-1.5 rounded-md transition-colors ${scrolled ? "text-foreground hover:bg-muted" : "text-primary-foreground hover:bg-primary-foreground/10"}`} aria-label="Toggle menu">
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-80 pb-3" : "max-h-0"}`}>
          <div className="bg-card rounded-lg shadow-elevated p-1.5 mt-1.5">
            {navLinks.map(link => <button key={link.href} onClick={() => handleNavClick(link.href)} className="w-full text-left px-3 py-2 rounded-md text-sm text-foreground hover:bg-secondary transition-colors">
                {link.label}
              </button>)}
          </div>
        </div>
      </div>
    </nav>;
};
export default Navbar;
