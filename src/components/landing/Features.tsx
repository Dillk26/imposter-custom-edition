import { motion } from "framer-motion";
import { 
  Library, 
  PenTool, 
  Clock, 
  Palette, 
  Zap,
  GraduationCap,
  Settings,
  Users,
  Wifi,
  WifiOff,
  Smartphone
} from "lucide-react";

const features = [
  {
    icon: Library,
    title: "1,000+ Words",
    description: "Massive library across 20+ categories including foods, activities, brands, and more.",
    gradient: "from-purple to-indigo",
    stat: "1,000+",
  },
  {
    icon: PenTool,
    title: "Custom Topics",
    description: "Create unlimited personalized word lists. Perfect for inside jokes and friend groups.",
    gradient: "from-indigo to-cyan",
    stat: "∞",
  },
  {
    icon: GraduationCap,
    title: "College-Focused",
    description: "Campus locations, Greek life, and college town spots for 5+ universities.",
    gradient: "from-cyan to-accent",
    stat: "5+",
  },
  {
    icon: Settings,
    title: "Configurable",
    description: "Customize discussion timer, imposter count, and game rules to your liking.",
    gradient: "from-pink to-purple",
    stat: "100%",
  },
  {
    icon: Palette,
    title: "Beautiful Design",
    description: "Stunning gradients, smooth animations, and polished UX throughout.",
    gradient: "from-purple to-pink",
    stat: "✨",
  },
  {
    icon: Zap,
    title: "Instant Play",
    description: "One-tap game start from any category. No complex setup required.",
    gradient: "from-indigo to-purple",
    stat: "<1s",
  },
];

const gameModes = [
  {
    icon: Smartphone,
    title: "Pass-the-Phone",
    subtitle: "Works Offline",
    subtitleIcon: WifiOff,
    description: "One device, endless fun. Perfect for in-person game nights where everyone gathers around.",
    features: ["Single device for all players", "Works completely offline", "Perfect for gatherings", "Private word reveals"],
    gradient: "from-purple to-pink",
    glowColor: "purple",
  },
  {
    icon: Users,
    title: "Join-by-Code",
    subtitle: "Online Multiplayer",
    subtitleIcon: Wifi,
    description: "Kahoot-style multiplayer. Host creates a lobby, friends join with a code. Real-time sync.",
    features: ["Each player uses own device", "6-character join code", "Real-time player updates", "Perfect for remote play"],
    gradient: "from-cyan to-indigo",
    glowColor: "cyan",
  },
];

const Features = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-muted/20" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan/10 rounded-full blur-[120px]" />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Everything You Need for <span className="gradient-text">Epic Games</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Packed with features that make every game memorable.
          </p>
        </motion.div>

        {/* Game Modes - Interactive Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {gameModes.map((mode, index) => (
            <motion.div
              key={mode.title}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Glow effect */}
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-br ${mode.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
              />
              
              <motion.div 
                className="relative glass-strong rounded-3xl p-8 h-full border-2 border-transparent hover:border-primary/30 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <motion.div 
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${mode.gradient} flex items-center justify-center`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <mode.icon className="w-8 h-8 text-primary-foreground" />
                  </motion.div>
                  <div>
                    <h3 className="font-display text-2xl font-bold">{mode.title}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <mode.subtitleIcon className="w-4 h-4" />
                      <span className="text-sm">{mode.subtitle}</span>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6">{mode.description}</p>

                <ul className="space-y-3">
                  {mode.features.map((feature, i) => (
                    <motion.li 
                      key={feature}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.05 }}
                    >
                      <motion.div 
                        className={`w-5 h-5 rounded-full bg-gradient-to-br ${mode.gradient} opacity-30 flex items-center justify-center`}
                        whileHover={{ scale: 1.2, opacity: 1 }}
                      >
                        <div className="w-2 h-2 rounded-full bg-foreground" />
                      </motion.div>
                      <span className="text-sm">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Features Grid */}
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <motion.div 
                className="glass rounded-2xl p-6 h-full transition-all duration-300 hover:bg-card/80"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <motion.div 
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </motion.div>
                  <span className="text-2xl font-display font-bold gradient-text opacity-50 group-hover:opacity-100 transition-opacity">
                    {feature.stat}
                  </span>
                </div>
                
                <h3 className="font-display text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
