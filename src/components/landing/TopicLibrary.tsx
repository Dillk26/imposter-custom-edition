const categories = [
  { name: "Foods", count: "50+", emoji: "🍕" },
  { name: "Activities", count: "50+", emoji: "🎮" },
  { name: "Objects", count: "50+", emoji: "📱" },
  { name: "Brands", count: "50+", emoji: "🏷️" },
  { name: "Countries", count: "50+", emoji: "🌍" },
  { name: "College Towns", count: "30+", emoji: "🎓" },
  { name: "Popular Cities", count: "40+", emoji: "🏙️" },
  { name: "UCLA", count: "40+", emoji: "🐻" },
  { name: "USC", count: "40+", emoji: "✌️" },
  { name: "Berkeley", count: "40+", emoji: "🐻" },
  { name: "Greek Life", count: "100+", emoji: "🏛️" },
  { name: "Custom", count: "∞", emoji: "✨" },
];

const TopicLibrary = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-pink/10 rounded-full blur-[150px] -translate-y-1/2" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-purple/10 rounded-full blur-[120px]" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Endless <span className="gradient-text">Topics</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From everyday objects to campus-specific content. Plus, create your own!
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category, index) => (
            <div
              key={category.name}
              className="glass rounded-full px-6 py-3 flex items-center gap-3 hover:bg-card/80 hover:border-primary/30 transition-all duration-300 hover:scale-105 cursor-default"
              style={{ animationDelay: `${index * 0.03}s` }}
            >
              <span className="text-2xl">{category.emoji}</span>
              <div className="text-left">
                <div className="font-medium text-sm">{category.name}</div>
                <div className="text-xs text-muted-foreground">{category.count} words</div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom topics highlight */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="glass-strong rounded-3xl p-8 text-center border-2 border-primary/20">
            <div className="text-5xl mb-4">✨</div>
            <h3 className="font-display text-2xl font-bold mb-3">Create Custom Topics</h3>
            <p className="text-muted-foreground mb-6">
              Build unlimited word lists for inside jokes, specific interests, or your friend group's 
              unique experiences. Share them publicly or keep them private.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Inside Jokes", "TV Shows", "Friend Names", "Local Spots", "Anything!"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopicLibrary;
