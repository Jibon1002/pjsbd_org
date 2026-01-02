import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`প্রজন্ম জাগরণ - ${formData.name}`);
    const body = encodeURIComponent(`নাম: ${formData.name}\nইমেইল: ${formData.email}\n\nবার্তা:\n${formData.message}`);
    window.location.href = `mailto:projonmojagoroncouncil@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-12 md:py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-6 md:mb-8">
            <span className="inline-block px-3 py-1 bg-primary/10 rounded-full text-primary text-xs font-medium mb-3">
              যোগাযোগ
            </span>
            <h2 className="text-xl md:text-3xl font-bold text-foreground mb-2">
              যোগাযোগ করুন
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-card rounded-lg shadow-soft">
                <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs font-semibold text-foreground">ইমেইল</h4>
                  <a href="mailto:projonmojagoroncouncil@gmail.com" className="text-xs text-muted-foreground hover:text-primary transition-colors break-all">
                    projonmojagoroncouncil@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-card rounded-lg shadow-soft">
                <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-foreground">ফোন</h4>
                  <a href="tel:+8801321061133" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                    +880 1321-061133
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-card rounded-lg shadow-soft">
                <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-foreground">ঠিকানা</h4>
                  <p className="text-xs text-muted-foreground">বাংলাদেশ</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card rounded-xl shadow-soft p-4 md:p-5">
              <h3 className="text-sm font-bold text-foreground mb-4">বার্তা পাঠান</h3>
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2.5 bg-secondary/50 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  placeholder="আপনার নাম"
                  required
                />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2.5 bg-secondary/50 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  placeholder="ইমেইল"
                  required
                />
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={3}
                  className="w-full px-3 py-2.5 bg-secondary/50 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                  placeholder="বার্তা লিখুন..."
                  required
                />
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-lg shadow-soft hover:shadow-glow transition-all duration-300"
                >
                  <Send className="w-4 h-4" />
                  পাঠান
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
