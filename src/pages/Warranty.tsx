import { Shield, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";

const Warranty = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <Shield className="w-16 h-16 text-primary mx-auto mb-4" />
          <h1 className="text-5xl md:text-6xl font-display font-bold">
            Warranty <span className="text-gradient">Information</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Quality assurance for your peace of mind
          </p>
        </div>

        {/* Main Content */}
        <div className="glass-card p-8 md:p-12 rounded-3xl space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-display font-bold text-gradient">
              Warranty Coverage
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              At Jackson Scale, we stand behind the quality of our products. Our warranty coverage 
              is based on the specific machine type and model you purchase.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-display font-semibold">Minimum Warranty Period</h3>
            <div className="glass-card p-6 rounded-xl bg-primary/5">
              <p className="text-lg font-medium">
                All Jackson Scale products come with a minimum warranty period of <span className="text-primary font-bold">1 year</span>.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-display font-semibold">Complete Warranty Details</h3>
            <p className="text-muted-foreground leading-relaxed">
              Detailed warranty information, including coverage terms, conditions, and extended warranty options, 
              will be provided to you once your weighing balance is purchased. This ensures you receive accurate 
              information specific to your chosen model.
            </p>
          </div>

          <div className="border-t border-border pt-8 space-y-4">
            <h3 className="text-xl font-display font-semibold">Need More Information?</h3>
            <p className="text-muted-foreground mb-6">
              For specific warranty details about a particular product or if you have any questions, 
              please contact us through any of the following channels:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <a href="tel:+919688106228" className="glass-card p-4 rounded-xl hover:glow-cyan transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <Phone className="w-5 h-5 text-primary" />
                  <h4 className="font-semibold">Phone</h4>
                </div>
                <p className="text-sm text-muted-foreground">+91 9688106228</p>
                <p className="text-sm text-muted-foreground">+91 7558158732</p>
              </a>

              <a href="mailto:jacksonscalesservice@gmail.com" className="glass-card p-4 rounded-xl hover:glow-cyan transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <Mail className="w-5 h-5 text-primary" />
                  <h4 className="font-semibold">Email</h4>
                </div>
                <p className="text-sm text-muted-foreground">jacksonscalesservice@gmail.com</p>
              </a>

              <div className="glass-card p-4 rounded-xl md:col-span-2">
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <h4 className="font-semibold">Visit Us</h4>
                </div>
                <p className="text-sm text-muted-foreground">Chengalpattu-603002, TamilNadu</p>
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <NavLink to="/contact">
                <Button size="lg" className="glass-card glow-cyan hover:glow-purple transition-all">
                  Contact Us for Details
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Warranty;
