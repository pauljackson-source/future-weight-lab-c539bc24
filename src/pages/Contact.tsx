import { useState } from "react";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-5xl md:text-6xl font-display font-bold">
            Get in <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to revolutionize your weighing operations? Let's discuss how 
            Jackson Scale can transform your business
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass-card p-8 rounded-3xl">
            <h2 className="text-2xl font-display font-bold mb-6">Send us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="glass-card border-primary/30"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@company.com"
                  required
                  className="glass-card border-primary/30"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Company</label>
                <Input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company name"
                  className="glass-card border-primary/30"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirements..."
                  required
                  rows={5}
                  className="glass-card border-primary/30"
                />
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                className="w-full glass-card glow-cyan hover:glow-purple transition-all"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="space-y-4">
              {[
                { icon: Phone, title: "Phone", content: "+91 9688106228 / +91 7558158732", href: "tel:+919688106228" },
                { icon: Mail, title: "Email", content: "jacksonscalesservice@gmail.com", href: "mailto:jacksonscalesservice@gmail.com" },
                { icon: MapPin, title: "Address", content: "Chengalpattu-603002, TamilNadu", href: null }
              ].map((item, index) => (
                <a 
                  key={index} 
                  href={item.href || undefined}
                  className={`glass-card p-6 rounded-2xl hover:glow-cyan transition-all ${item.href ? 'cursor-pointer' : ''}`}
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-neon/10 w-12 h-12 rounded-xl flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{item.title}</div>
                      <div className="font-medium">{item.content}</div>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="glass-card p-4 rounded-2xl h-64 flex items-center justify-center">
              <div className="text-center space-y-2">
                <MapPin className="w-12 h-12 text-primary mx-auto" />
                <p className="text-muted-foreground">Interactive Map</p>
                <p className="text-sm text-muted-foreground/70">Integration Coming Soon</p>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a 
              href="https://wa.me/919688106228" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-card p-6 rounded-2xl text-center glow-purple hover:glow-cyan transition-all block"
            >
              <MessageSquare className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-display font-semibold mb-2">Need Instant Support?</h3>
              <p className="text-sm text-muted-foreground mb-4">Chat with us on WhatsApp</p>
              <Button variant="outline" className="glass-card border-primary/50">
                Open WhatsApp Chat
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
