import { Users, Eye, MessageSquare, Vote, Trophy } from "lucide-react";

const steps = [
  {
    icon: Users,
    title: "Gather Your Friends",
    description: "Get 3-10+ players together and choose a topic category",
    color: "text-purple",
  },
  {
    icon: Eye,
    title: "Secret Word Assignment",
    description: "Everyone gets the same word except the Imposter",
    color: "text-indigo",
  },
  {
    icon: MessageSquare,
    title: "Discussion Round",
    description: "Give hints about your word. The Imposter must fake it!",
    color: "text-cyan",
  },
  {
    icon: Vote,
    title: "Vote & Accuse",
    description: "Who's acting suspicious? Cast your vote!",
    color: "text-pink",
  },
  {
    icon: Trophy,
    title: "Reveal the Truth",
    description: "Did the town catch the Imposter or were they fooled?",
    color: "text-accent",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple/10 rounded-full blur-[150px]" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            How to <span className="gradient-text">Play</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple rules, endless fun. Master the game in minutes.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple via-cyan to-pink opacity-30" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="relative group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="glass rounded-2xl p-6 h-full transition-all duration-300 hover:bg-card/80 hover:border-primary/30 hover:-translate-y-2">
                  {/* Step number */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-sm font-bold text-primary-foreground shadow-lg">
                    {index + 1}
                  </div>

                  <div className={`w-14 h-14 rounded-xl bg-muted/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className={`w-7 h-7 ${step.color}`} />
                  </div>

                  <h3 className="font-display text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
