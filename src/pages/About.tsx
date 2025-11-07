import { Award, Users, Globe, TrendingUp } from "lucide-react";

const About = () => {
  const milestones = [
    { year: "2015", title: "Company Founded", description: "Started with a vision to revolutionize industrial weighing" },
    { year: "2017", title: "AI Integration", description: "Pioneered AI-powered calibration technology" },
    { year: "2019", title: "Global Expansion", description: "Expanded operations to 25+ countries" },
    { year: "2021", title: "IoT Platform Launch", description: "Released cloud-connected weighing platform" },
    { year: "2023", title: "Industry Leader", description: "Recognized as top innovator in precision weighing" },
    { year: "2025", title: "Future Ready", description: "Continuous innovation in automation and AI" }
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Team Members" },
    { icon: Globe, value: "50+", label: "Countries Served" },
    { icon: Award, value: "25+", label: "Industry Awards" },
    { icon: TrendingUp, value: "99.9%", label: "Customer Satisfaction" }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-5xl md:text-6xl font-display font-bold">
            About <span className="text-gradient">Jackson Scale</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leading the future of precision weighing with cutting-edge technology, 
            unwavering commitment to quality, and a passion for innovation
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="glass-card p-6 rounded-2xl text-center hover:glow-cyan transition-all">
              <stat.icon className="w-10 h-10 text-primary mx-auto mb-3" />
              <div className="text-3xl font-display font-bold text-gradient mb-1">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission */}
        <div className="glass-card p-12 rounded-3xl mb-20 text-center">
          <h2 className="text-3xl font-display font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            To empower industries worldwide with the most accurate, intelligent, and reliable 
            weighing solutions, driving efficiency and precision in every measurement
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h2 className="text-4xl font-display font-bold text-center mb-12">
            Our <span className="text-gradient">Journey</span>
          </h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-neon opacity-30" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={index}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="glass-card p-6 rounded-2xl inline-block hover:glow-cyan transition-all">
                      <div className="text-2xl font-display font-bold text-primary mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-display font-semibold mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-4 h-4 rounded-full bg-primary glow-cyan" />
                  </div>
                  
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div>
          <h2 className="text-4xl font-display font-bold text-center mb-12">
            Our <span className="text-gradient">Values</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description: "Constantly pushing boundaries with cutting-edge technology"
              },
              {
                title: "Precision",
                description: "Uncompromising accuracy in every product we create"
              },
              {
                title: "Reliability",
                description: "Building trust through consistent quality and performance"
              }
            ].map((value, index) => (
              <div 
                key={index}
                className="glass-card p-8 rounded-2xl text-center hover:glow-purple transition-all"
              >
                <h3 className="text-2xl font-display font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
