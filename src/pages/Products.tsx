import { useState } from "react";
import { Scale, Truck, Package, Factory } from "lucide-react";
import { Button } from "@/components/ui/button";

type Category = "all" | "bench" | "industrial" | "portable" | "specialty";

const Products = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const categories = [
    { id: "all" as Category, label: "All Products" },
    { id: "bench" as Category, label: "Bench Scales" },
    { id: "industrial" as Category, label: "Industrial Scales" },
    { id: "portable" as Category, label: "Portable Scales" },
    { id: "specialty" as Category, label: "Specialty Systems" },
  ];

  const products = [
    {
      category: "bench",
      icon: Scale,
      name: "Precision Bench Scale X1",
      capacity: "5kg - 0.01g",
      description: "High-precision bench scale with AI calibration",
      price: "$1,299"
    },
    {
      category: "industrial",
      icon: Factory,
      name: "Industrial Platform I500",
      capacity: "500kg - 0.1kg",
      description: "Heavy-duty platform scale for industrial use",
      price: "$4,599"
    },
    {
      category: "portable",
      icon: Package,
      name: "Portable Digital P200",
      capacity: "200g - 0.001g",
      description: "Ultra-portable scale with rechargeable battery",
      price: "$599"
    },
    {
      category: "specialty",
      icon: Truck,
      name: "Truck Scale T2000",
      capacity: "2000kg - 1kg",
      description: "Heavy vehicle weighing system with automation",
      price: "$12,999"
    },
    {
      category: "bench",
      icon: Scale,
      name: "Analytical Balance A100",
      capacity: "100g - 0.0001g",
      description: "Laboratory-grade analytical balance",
      price: "$2,899"
    },
    {
      category: "industrial",
      icon: Factory,
      name: "Floor Scale F1000",
      capacity: "1000kg - 0.5kg",
      description: "Low-profile floor scale for warehouse use",
      price: "$3,299"
    },
  ];

  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-5xl md:text-6xl font-display font-bold">
            Our <span className="text-gradient">Products</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our complete range of precision weighing solutions, 
            engineered for accuracy and built for the future
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <Button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              variant={activeCategory === cat.id ? "default" : "outline"}
              className={
                activeCategory === cat.id 
                  ? "glass-card glow-cyan" 
                  : "glass-card border-primary/30 hover:border-primary"
              }
            >
              {cat.label}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <div 
              key={index}
              className="glass-card p-6 rounded-2xl hover:glow-cyan transition-all group cursor-pointer"
            >
              <div className="bg-gradient-neon/10 w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <product.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-xl font-display font-semibold mb-2">{product.name}</h3>
              <div className="text-primary font-mono text-sm mb-3">{product.capacity}</div>
              <p className="text-muted-foreground mb-4">{product.description}</p>
              
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-2xl font-display font-bold text-gradient">{product.price}</span>
                <Button size="sm" variant="outline" className="glass-card border-primary/50">
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
