import { motion } from "framer-motion";
import { Users, Eye, MessageSquare, Vote, Trophy } from "lucide-react";

const steps = [
  {
    icon: Users,
    title: "Gather Friends",
    description: "Get 3-10+ players and choose a topic",
    color: "from-purple to-indigo",
  },
  {
    icon: Eye,
    title: "Get Your Word",
    description: "Everyone sees the word except the Imposter",
    color: "from-indigo to-cyan",
  },
  {
    icon: MessageSquare,
    title: "Discuss & Deceive",
    description: "Give hints. The Imposter must fake it!",
    color: "from-cyan to-accent",
  },
  {
    icon: Vote,
    title: "Vote",
    description: "Who's acting suspicious? Cast your vote!",
    color: "from-pink to-purple",
  },
  {
    icon: Trophy,
    title: "Reveal",
    description: "Did you catch the Imposter?",
    color: "from-purple to-pink",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple/10 rounded-full blur-[150px]" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            How to <span className="gradient-text">Play</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple rules, endless fun. Master the game in 30 seconds.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line - animated */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2">
            <motion.div 
              className="h-full bg-gradient-to-r from-purple via-cyan to-pink rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              style={{ transformOrigin: "left" }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div 
                  className="glass rounded-2xl p-6 h-full transition-all duration-300"
                  whileHover={{ 
                    y: -10, 
                    backgroundColor: "hsl(var(--card) / 0.8)",
                    borderColor: "hsl(var(--primary) / 0.3)"
                  }}
                >
                  {/* Step number */}
                  <motion.div 
                    className={`absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-sm font-bold text-primary-foreground shadow-lg`}
                    whileHover={{ scale: 1.2 }}
                  >
                    {index + 1}
                  </motion.div>

                  <motion.div 
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} bg-opacity-20 flex items-center justify-center mb-4`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <step.icon className="w-7 h-7 text-primary-foreground" />
                  </motion.div>

                  <h3 className="font-display text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
