import { 
  Library, 
  PenTool, 
  Clock, 
  Palette, 
  Shield, 
  Zap,
  GraduationCap,
  Settings
} from "lucide-react";

const features = [
  {
    icon: Library,
    title: "1,000+ Words",
    description: "Massive library across 20+ categories including foods, activities, brands, and more.",
    gradient: "from-purple to-indigo",
  },
  {
    icon: PenTool,
    title: "Custom Topics",
    description: "Create unlimited personalized word lists. Perfect for inside jokes and friend groups.",
    gradient: "from-indigo to-cyan",
  },
  {
    icon: GraduationCap,
    title: "College-Focused",
    description: "Campus locations, Greek life, and college town spots for 5+ universities.",
    gradient: "from-cyan to-accent",
  },
  {
    icon: Settings,
    title: "Configurable",
    description: "Customize discussion timer, imposter count, and game rules to your liking.",
    gradient: "from-pink to-purple",
  },
  {
    icon: Palette,
    title: "Beautiful Design",
    description: "Stunning gradients, smooth animations, and polished UX throughout.",
    gradient: "from-purple to-pink",
  },
  {
    icon: Zap,
    title: "Instant Play",
    description: "One-tap game start from any category. No complex setup required.",
    gradient: "from-indigo to-purple",
  },
  {
    icon: Shield,
    title: "Private Words",
    description: "Secure word reveals ensure no peeking during pass-the-phone mode.",
    gradient: "from-cyan to-indigo",
  },
  {
    icon: Clock,
    title: "Real-Time Sync",
    description: "Seamless multiplayer with instant updates in join-by-code mode.",
    gradient: "from-accent to-cyan",
  },
];

const Features = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden bg-muted/20">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.5)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.5)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      {/* Gradient overlays */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan/10 rounded-full blur-[120px]" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Packed with <span className="gradient-text">Features</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need for the ultimate social deduction experience.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="glass rounded-2xl p-6 h-full transition-all duration-300 hover:bg-card/80 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple/10">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                
                <h3 className="font-display text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
