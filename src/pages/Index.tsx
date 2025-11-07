import { ArrowRight, Zap, Shield, Cpu, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import heroImage from "@/assets/hero-weighing.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-aurora opacity-50" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwRjBGRiIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="inline-block glass-card px-4 py-2 rounded-full">
                <span className="text-sm font-medium text-primary">AI-Powered Precision</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
                Precision in <br />
                <span className="text-gradient">Every Gram</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl">
                The Future of Weighing. Advanced industrial scales with AI-powered automation, 
                delivering unmatched accuracy for modern industry.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <NavLink to="/products">
                  <Button size="lg" className="glass-card glow-cyan hover:glow-purple transition-all group">
                    Explore Products
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </NavLink>
                <NavLink to="/contact">
                  <Button size="lg" variant="outline" className="glass-card border-primary/50 hover:bg-primary/10">
                    Get in Touch
                  </Button>
                </NavLink>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-gradient-neon opacity-20 blur-3xl rounded-full" />
              <img 
                src={heroImage} 
                alt="Futuristic weighing scale with holographic display" 
                className="relative rounded-2xl glass-card shadow-2xl w-full"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Why Choose <span className="text-gradient">Jackson Scale</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Cutting-edge technology meets industrial precision
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Real-time measurements with sub-millisecond response times"
              },
              {
                icon: Shield,
                title: "Ultra Precise",
                description: "±0.001g accuracy with AI-powered calibration"
              },
              {
                icon: Cpu,
                title: "Smart Automation",
                description: "Seamless integration with industrial IoT systems"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="glass-card p-8 rounded-2xl hover:glow-cyan transition-all group cursor-pointer"
              >
                <feature.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-display font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Chatbot CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-neon opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="glass-card p-12 rounded-3xl text-center max-w-4xl mx-auto glow-purple">
            <MessageSquare className="w-16 h-16 text-primary mx-auto mb-6 animate-pulse-slow" />
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ask Jackson <span className="text-gradient">AI</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get instant answers about our products, technical specs, and solutions
            </p>
            <Button size="lg" className="glass-card glow-cyan hover:glow-purple transition-all">
              Chat with AI Assistant
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
