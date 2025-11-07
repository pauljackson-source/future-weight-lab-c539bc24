import { Cpu, Workflow, Gauge, Network } from "lucide-react";
import { Button } from "@/components/ui/button";
import automationImage from "@/assets/automation-hero.jpg";

const Automation = () => {
  const solutions = [
    {
      icon: Cpu,
      title: "AI-Powered Calibration",
      description: "Self-learning algorithms automatically adjust for environmental factors and maintain peak accuracy"
    },
    {
      icon: Workflow,
      title: "Process Automation",
      description: "Seamless integration with conveyor systems, sorting mechanisms, and quality control workflows"
    },
    {
      icon: Gauge,
      title: "Real-Time Monitoring",
      description: "Cloud-connected dashboards provide instant insights into your weighing operations"
    },
    {
      icon: Network,
      title: "IoT Integration",
      description: "Connect with existing industrial systems via Industry 4.0 protocols and APIs"
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <div className="inline-block glass-card px-4 py-2 rounded-full">
              <span className="text-sm font-medium text-primary">Smart Industrial Systems</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-display font-bold leading-tight">
              Automation <br />
              <span className="text-gradient">Solutions</span>
            </h1>
            
            <p className="text-xl text-muted-foreground">
              Transform your weighing operations with AI-driven automation. 
              Reduce errors, increase throughput, and gain unprecedented insights 
              into your industrial processes.
            </p>
            
            <Button size="lg" className="glass-card glow-cyan hover:glow-purple transition-all">
              Request Demo
            </Button>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-neon opacity-20 blur-3xl rounded-full" />
            <img 
              src={automationImage}
              alt="Industrial automation with AI weighing systems"
              className="relative rounded-2xl glass-card shadow-2xl w-full animate-float"
            />
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="mb-20">
          <h2 className="text-4xl font-display font-bold text-center mb-12">
            Advanced <span className="text-gradient">Capabilities</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div 
                key={index}
                className="glass-card p-8 rounded-2xl hover:glow-cyan transition-all group"
              >
                <solution.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-display font-semibold mb-3">{solution.title}</h3>
                <p className="text-muted-foreground">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features List */}
        <div className="glass-card p-12 rounded-3xl">
          <h2 className="text-3xl font-display font-bold mb-8 text-center">
            Complete <span className="text-gradient">Integration Package</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Zero-touch calibration system",
              "Predictive maintenance alerts",
              "Multi-scale synchronization",
              "Custom workflow automation",
              "Data analytics & reporting",
              "Remote system management",
              "Compliance documentation",
              "24/7 AI-assisted support"
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary glow-cyan" />
                <span className="text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Automation;
