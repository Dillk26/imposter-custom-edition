import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Sparkles, Library, Star, Crown, Shuffle, Lock, Unlock, PenTool } from "lucide-react";
import appCategoriesScreen from "@/assets/app-categories-screen.png";

const mainCategories = [
  { 
    name: "Common Concepts", 
    icon: "🎯",
    gradient: "from-purple to-indigo",
    subcategories: ["Foods", "Activities", "Objects", "Brands", "Countries"],
    totalWords: 250,
  },
  { 
    name: "Cities", 
    icon: "🏙️",
    gradient: "from-cyan to-blue-500",
    subcategories: ["College Towns", "LA Neighborhoods", "NYC Areas", "Austin Spots"],
    totalWords: 150,
  },
  { 
    name: "Schools", 
    icon: "🎓",
    gradient: "from-pink to-rose-500",
    subcategories: ["UCLA", "USC", "Berkeley", "Indiana", "Wisconsin"],
    totalWords: 100,
  },
  { 
    name: "Greek Life", 
    icon: "🏛️",
    gradient: "from-amber-500 to-orange-500",
    subcategories: ["UCLA Greek", "IU Greek", "USC Greek", "Berkeley Greek", "Wisconsin Greek"],
    totalWords: 150,
  },
];

const sampleWords = {
  "Foods": ["Pizza", "Sushi", "Tacos", "Ramen", "Ice Cream", "Coffee"],
  "UCLA": ["Royce Hall", "Powell Library", "Bruin Bear", "The Hill", "Diddy Riese"],
  "Greek Life": ["Alpha Phi", "Sigma Chi", "Kappa Kappa Gamma", "Beta Theta Pi"],
};

const customExamples = [
  { name: "Inside Jokes", icon: "😂", words: ["That One Time", "The Couch Spot", "No Context"] },
  { name: "Friend Group", icon: "👥", words: ["Movie Night", "Taco Tuesday", "The Groupchat"] },
  { name: "Local Spots", icon: "📍", words: ["Our Coffee Shop", "The Park Bench", "Corner Pizza"] },
  { name: "Shared Memories", icon: "💭", words: ["Spring Break '23", "That Road Trip", "Finals Week"] },
];

const TopicLibrary = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [showSubcategories, setShowSubcategories] = useState(false);
  const [customTopicDemo, setCustomTopicDemo] = useState(false);
  const [customWords, setCustomWords] = useState<string[]>(["Taco Tuesday", "The Couch"]);
  const [newWord, setNewWord] = useState("");

  const addWord = () => {
    if (newWord.trim() && customWords.length < 6) {
      setCustomWords([...customWords, newWord.trim()]);
      setNewWord("");
    }
  };

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-pink/10 rounded-full blur-[150px]"
          animate={{ x: [0, 50, 0], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-purple/10 rounded-full blur-[120px]"
          animate={{ x: [0, -50, 0], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 12, repeat: Infinity, delay: 2 }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan/5 rounded-full blur-[150px]"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section header - EMPHASIZE THE DIFFERENTIATOR */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple/20 to-pink/20 border border-primary/30 mb-6"
            whileHover={{ scale: 1.05 }}
            animate={{ 
              boxShadow: ["0 0 20px rgba(139,92,246,0.2)", "0 0 40px rgba(139,92,246,0.4)", "0 0 20px rgba(139,92,246,0.2)"]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Crown className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary">What Makes Us Different</span>
          </motion.div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="gradient-text">1,000+ Words.</span> <br className="sm:hidden" /><span className="text-foreground">20+ Categories.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The largest topic library of any Imposter game — <span className="text-foreground font-medium">plus unlimited custom topics</span>. 
            From everyday objects to campus-specific content no other game has.
          </p>
        </motion.div>

        {/* Main content - Two columns */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Left: Category Explorer */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                <Library className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl font-bold">Explore Categories</h3>
            </div>

            {/* Category tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
              {mainCategories.map((cat, i) => (
                <motion.button
                  key={cat.name}
                  onClick={() => { setActiveCategory(i); setShowSubcategories(true); }}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    activeCategory === i 
                      ? 'bg-gradient-primary text-primary-foreground shadow-lg' 
                      : 'glass hover:bg-muted/80'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="mr-2">{cat.icon}</span>
                  {cat.name}
                </motion.button>
              ))}
            </div>

            {/* Category detail card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="glass-strong rounded-2xl p-6 border border-primary/20"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{mainCategories[activeCategory].icon}</span>
                    <div>
                      <h4 className="font-display text-xl font-bold">{mainCategories[activeCategory].name}</h4>
                      <p className="text-sm text-muted-foreground">{mainCategories[activeCategory].totalWords}+ words</p>
                    </div>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
                    {mainCategories[activeCategory].subcategories.length} subcategories
                  </div>
                </div>

                {/* Subcategories */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {mainCategories[activeCategory].subcategories.map((sub, i) => (
                    <motion.span
                      key={sub}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                      className={`px-3 py-1.5 rounded-lg text-sm bg-gradient-to-br ${mainCategories[activeCategory].gradient} bg-opacity-20`}
                    >
                      {sub}
                    </motion.span>
                  ))}
                </div>

                {/* Sample words preview */}
                <div className="border-t border-border/50 pt-4">
                  <p className="text-xs text-muted-foreground mb-2">Sample words:</p>
                  <div className="flex flex-wrap gap-2">
                    {(sampleWords[mainCategories[activeCategory].subcategories[0] as keyof typeof sampleWords] || 
                      ["Word 1", "Word 2", "Word 3"]).map((word, i) => (
                      <motion.span
                        key={word}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="px-2 py-1 rounded-md bg-muted/50 text-xs"
                      >
                        {word}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              {[
                { label: "Total Words", value: "1,000+" },
                { label: "Categories", value: "20+" },
                { label: "Universities", value: "5" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-4 glass rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <p className="font-display text-2xl font-bold gradient-text">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Phone mockup with floating categories */}
          <motion.div 
            className="relative flex justify-center items-center min-h-[350px] sm:min-h-[500px] mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Floating category badges - hidden on very small screens */}
            {[
              { name: "Foods", emoji: "🍕", pos: "left-4 sm:-left-4 top-8 sm:top-12", delay: 0 },
              { name: "Greek", emoji: "🏛️", pos: "right-4 sm:-right-4 top-20 sm:top-24", delay: 0.5 },
              { name: "UCLA", emoji: "🐻", pos: "left-2 sm:-left-8 bottom-24 sm:bottom-32", delay: 1 },
              { name: "Cities", emoji: "🏙️", pos: "right-2 sm:-right-8 bottom-12 sm:bottom-16", delay: 1.5 },
            ].map((badge) => (
              <motion.div
                key={badge.name}
                className={`absolute ${badge.pos} glass px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg sm:rounded-xl flex items-center gap-1.5 sm:gap-2 z-20 hidden sm:flex`}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: badge.delay }}
                animate={{ y: [0, -8, 0] }}
                style={{ animationDelay: `${badge.delay}s`, animationDuration: '3s' }}
              >
                <span>{badge.emoji}</span>
                <span className="text-xs sm:text-sm font-medium">{badge.name}</span>
              </motion.div>
            ))}

            {/* Phone */}
            <motion.div 
              className="relative w-[220px] sm:w-[280px] md:w-[320px]"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="absolute inset-0 bg-gradient-primary opacity-30 blur-[60px] scale-110" />
              <img 
                src={appCategoriesScreen} 
                alt="Browse Categories Screen" 
                className="relative w-full rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Custom Topics Feature - THE DIFFERENTIATOR - BIGGER AND BOLDER */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Attention-grabbing border glow */}
          <motion.div 
            className="absolute -inset-1 bg-gradient-to-r from-purple via-pink to-cyan rounded-[2rem] blur-sm opacity-50"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          
          <div className="relative glass-strong rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-12 border-2 border-primary/40 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple/10 via-transparent to-cyan/10" />
            
            <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Content */}
              <div>
                <motion.div 
                  className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-purple/30 to-pink/30 mb-4 sm:mb-6"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
                  <span className="text-xs sm:text-sm font-bold">Exclusive Feature</span>
                </motion.div>
                
                <h3 className="font-display text-2xl sm:text-3xl lg:text-5xl font-bold mb-6">
                  Create <span className="gradient-text">Unlimited Custom Topics</span>
                </h3>
                
                <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-6 sm:mb-8">
                  <span className="text-foreground font-semibold">No other Imposter game offers this.</span> Build personalized word lists 
                  for inside jokes, shared memories, or your friend group's unique experiences.
                </p>

                {/* Feature list with better styling */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                  {[
                    { icon: Plus, text: "Unlimited word lists" },
                    { icon: Unlock, text: "Public or private" },
                    { icon: Sparkles, text: "Inside jokes" },
                    { icon: Shuffle, text: "Min 4 words" },
                  ].map((feature, i) => (
                    <motion.div 
                      key={feature.text}
                      className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg sm:rounded-xl bg-muted/30"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-3 h-3 sm:w-4 sm:h-4 text-primary-foreground" />
                      </div>
                      <span className="text-xs sm:text-sm font-medium">{feature.text}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Use case examples - hidden on very small screens */}
                <div className="hidden sm:block">
                  <p className="text-sm text-muted-foreground mb-4">Popular custom topic ideas:</p>
                  <div className="flex flex-wrap gap-2">
                    {customExamples.map((example, i) => (
                      <motion.span
                        key={example.name}
                        className="px-3 py-1.5 rounded-full glass text-sm flex items-center gap-2"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                      >
                        <span>{example.icon}</span>
                        {example.name}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Interactive demo */}
              <div className="relative">
                <motion.div 
                  className="glass-strong rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-primary/20"
                >
                  <div className="flex items-center justify-between mb-4 sm:mb-6 gap-2">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                        <PenTool className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-sm sm:text-base">My Friend Group</h4>
                        <p className="text-xs text-muted-foreground">Custom Topic</p>
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground px-2 sm:px-3 py-1 rounded-full bg-muted flex items-center gap-1 flex-shrink-0">
                      <Lock className="w-3 h-3" />
                      {customWords.length}
                    </span>
                  </div>
                  
                  {/* Word list */}
                  <div className="space-y-2 mb-4 max-h-[150px] sm:max-h-[200px] overflow-y-auto">
                    <AnimatePresence>
                      {customWords.map((word, i) => (
                        <motion.div 
                          key={word}
                          layout
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg sm:rounded-xl bg-muted/50 group"
                        >
                          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-primary flex items-center justify-center text-xs text-primary-foreground font-bold flex-shrink-0">
                            {i + 1}
                          </div>
                          <span className="text-xs sm:text-sm flex-1">{word}</span>
                          <motion.button
                            onClick={() => setCustomWords(customWords.filter(w => w !== word))}
                            className="opacity-0 group-hover:opacity-100 text-muted-foreground hover:text-red-400 transition-all"
                            whileHover={{ scale: 1.2 }}
                          >
                            ×
                          </motion.button>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>

                  {/* Add word input */}
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={newWord}
                      onChange={(e) => setNewWord(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && addWord()}
                      placeholder="Add a word..."
                      className="flex-1 h-9 sm:h-11 rounded-lg sm:rounded-xl bg-muted/30 border border-border/50 px-3 sm:px-4 text-xs sm:text-sm focus:outline-none focus:border-primary/50 transition-colors"
                    />
                    <motion.button 
                      onClick={addWord}
                      className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Plus className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
                    </motion.button>
                  </div>

                  <p className="text-xs text-muted-foreground text-center mt-3 sm:mt-4">
                    Try adding words above!
                  </p>
                </motion.div>

                {/* Floating decorative elements - hidden on mobile */}
                <motion.div 
                  className="absolute -top-6 -right-6 px-3 py-2 rounded-xl glass text-sm font-medium border border-green-500/30 bg-green-500/10 hidden sm:block"
                  animate={{ y: [0, -5, 0], rotate: [0, 2, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  ✨ Ready to play!
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TopicLibrary;
