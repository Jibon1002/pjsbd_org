import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link
    const subject = encodeURIComponent(`প্রজন্ম জাগরণ কাউন্সিল - ${formData.name} থেকে বার্তা`);
    const body = encodeURIComponent(`নাম: ${formData.name}\nইমেইল: ${formData.email}\n\nবার্তা:\n${formData.message}`);
    window.location.href = `mailto:projonmojagoroncouncil@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
              যোগাযোগ
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              আমাদের সাথে যোগাযোগ করুন
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              যেকোনো প্রশ্ন, পরামর্শ বা স্বেচ্ছাসেবক হিসেবে যোগদানের জন্য আমাদের সাথে যোগাযোগ করুন
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 md:gap-16">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-8">যোগাযোগের তথ্য</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-card rounded-xl shadow-soft">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">ইমেইল</h4>
                    <a 
                      href="mailto:projonmojagoroncouncil@gmail.com" 
                      className="text-muted-foreground hover:text-primary transition-colors break-all"
                    >
                      projonmojagoroncouncil@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-card rounded-xl shadow-soft">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">ফোন</h4>
                    <a 
                      href="tel:+8801321061133" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +880 1321-061133
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-card rounded-xl shadow-soft">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">ঠিকানা</h4>
                    <p className="text-muted-foreground">বাংলাদেশ</p>
                  </div>
                </div>
              </div>

              {/* Social note */}
              <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/10">
                <p className="text-muted-foreground text-sm">
                  📱 আমাদের সোশ্যাল মিডিয়া পেজগুলো শীঘ্রই যুক্ত হবে। আপডেট পেতে আমাদের সাথে থাকুন!
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card rounded-2xl shadow-soft p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">বার্তা পাঠান</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    আপনার নাম
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="আপনার পুরো নাম"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    ইমেইল
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="example@email.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    বার্তা
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                    placeholder="আপনার বার্তা লিখুন..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
                >
                  <Send className="w-5 h-5" />
                  বার্তা পাঠান
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
