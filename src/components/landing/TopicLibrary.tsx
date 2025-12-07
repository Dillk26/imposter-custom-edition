import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus, Sparkles, Check, ArrowRight } from "lucide-react";
import phoneTopicsScreen from "@/assets/phone-topics-screen.png";

const categories = [
  { name: "Foods", count: 50, emoji: "🍕", color: "from-orange-500 to-red-500" },
  { name: "Activities", count: 50, emoji: "🎮", color: "from-purple to-indigo" },
  { name: "Objects", count: 50, emoji: "📱", color: "from-cyan to-blue-500" },
  { name: "Brands", count: 50, emoji: "🏷️", color: "from-pink to-rose-500" },
  { name: "Countries", count: 50, emoji: "🌍", color: "from-green-500 to-emerald-500" },
  { name: "College Towns", count: 30, emoji: "🎓", color: "from-indigo to-purple" },
  { name: "Popular Cities", count: 40, emoji: "🏙️", color: "from-amber-500 to-orange-500" },
  { name: "UCLA", count: 40, emoji: "🐻", color: "from-blue-500 to-yellow-500" },
  { name: "USC", count: 40, emoji: "✌️", color: "from-red-600 to-yellow-500" },
  { name: "Berkeley", count: 40, emoji: "🐻", color: "from-blue-600 to-yellow-400" },
  { name: "Indiana", count: 40, emoji: "🏀", color: "from-red-600 to-red-800" },
  { name: "Wisconsin", count: 40, emoji: "🦡", color: "from-red-600 to-white" },
  { name: "Greek Life", count: 100, emoji: "🏛️", color: "from-purple to-pink" },
];

const customExamples = [
  "Inside Jokes",
  "TV Shows", 
  "Friend Names",
  "Local Spots",
  "Memes",
  "Song Lyrics",
  "Movies",
  "Anything!"
];

const TopicLibrary = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [customWords, setCustomWords] = useState<string[]>(["Taco Tuesday", "The Couch Spot", "That One Time..."]);

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-pink/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-purple/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 text-cyan" />
            <span className="text-sm text-muted-foreground">What Sets Us Apart</span>
          </motion.div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            1,000+ Words. <span className="gradient-text">Endless Fun.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The largest topic library of any Imposter game. From everyday objects to campus-specific content - 
            plus create your own unlimited custom topics.
          </p>
        </motion.div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Interactive category grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-2xl font-bold mb-6">20+ Built-in Categories</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {categories.map((category, index) => (
                <motion.div
                  key={category.name}
                  className="relative group cursor-pointer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03 }}
                  onMouseEnter={() => setHoveredCategory(category.name)}
                  onMouseLeave={() => setHoveredCategory(null)}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className={`glass rounded-xl p-4 h-full transition-all duration-300 ${
                    hoveredCategory === category.name ? 'bg-card/80 border-primary/50' : ''
                  }`}>
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform`}>
                      <span className="text-lg">{category.emoji}</span>
                    </div>
                    <div className="font-medium text-sm">{category.name}</div>
                    <div className="text-xs text-muted-foreground">{category.count}+ words</div>
                  </div>
                  
                  {/* Glow effect on hover */}
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-br ${category.color} rounded-xl blur-xl opacity-0 -z-10`}
                    animate={{ opacity: hoveredCategory === category.name ? 0.3 : 0 }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Phone mockup with topics */}
          <motion.div 
            className="relative flex justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="w-[280px] sm:w-[320px]"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="absolute inset-0 bg-gradient-primary opacity-30 blur-[60px] scale-110" />
              <img 
                src={phoneTopicsScreen} 
                alt="Topics Selection Screen" 
                className="relative w-full rounded-[2.5rem] shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Custom Topics Feature - THE DIFFERENTIATOR */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="glass-strong rounded-3xl p-8 lg:p-12 border-2 border-primary/30 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple/10 via-transparent to-cyan/10" />
            
            <div className="relative grid lg:grid-cols-2 gap-8 items-center">
              {/* Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary mb-4">
                  <Plus className="w-4 h-4" />
                  <span className="text-sm font-medium">Exclusive Feature</span>
                </div>
                
                <h3 className="font-display text-3xl lg:text-4xl font-bold mb-4">
                  Create <span className="gradient-text">Custom Topics</span>
                </h3>
                
                <p className="text-muted-foreground mb-6">
                  No other Imposter game lets you do this. Build unlimited word lists for inside jokes, 
                  specific interests, or your friend group's unique experiences. Share publicly or keep private.
                </p>

                <ul className="space-y-3 mb-8">
                  {[
                    "Unlimited custom word lists",
                    "Share with friends or keep private",
                    "Perfect for inside jokes & personal content",
                    "Minimum 4 words, no maximum"
                  ].map((feature) => (
                    <motion.li 
                      key={feature}
                      className="flex items-center gap-3"
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-5 h-5 rounded-full bg-gradient-primary flex items-center justify-center">
                        <Check className="w-3 h-3 text-primary-foreground" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <Button variant="gradient" size="lg" className="gap-2 group">
                  Start Creating
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Interactive demo */}
              <div className="relative">
                <div className="glass rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-display font-semibold">My Custom Topic</h4>
                    <span className="text-xs text-muted-foreground px-2 py-1 rounded-full bg-muted">
                      {customWords.length} words
                    </span>
                  </div>
                  
                  {/* Word list */}
                  <div className="space-y-2 mb-4">
                    {customWords.map((word, i) => (
                      <motion.div 
                        key={word}
                        className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 group"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ backgroundColor: "hsl(var(--muted))" }}
                      >
                        <div className="w-6 h-6 rounded-full bg-gradient-primary flex items-center justify-center text-xs text-primary-foreground font-medium">
                          {i + 1}
                        </div>
                        <span className="text-sm">{word}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Add word input mockup */}
                  <div className="flex gap-2">
                    <div className="flex-1 h-10 rounded-lg bg-muted/30 border border-border/50 flex items-center px-3">
                      <span className="text-sm text-muted-foreground">Add a new word...</span>
                    </div>
                    <motion.button 
                      className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Plus className="w-5 h-5 text-primary-foreground" />
                    </motion.button>
                  </div>
                </div>

                {/* Floating example tags */}
                <div className="absolute -top-4 -right-4 flex flex-wrap gap-2 max-w-[200px]">
                  {customExamples.slice(0, 4).map((tag, i) => (
                    <motion.span
                      key={tag}
                      className="px-3 py-1 rounded-full glass text-xs font-medium"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      animate={{ y: [0, -5, 0] }}
                      style={{ animationDelay: `${i * 0.5}s`, animationDuration: '3s' }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TopicLibrary;
