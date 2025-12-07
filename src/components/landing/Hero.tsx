import { Button } from "@/components/ui/button";
import { Download, Sparkles, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import phoneWordScreen from "@/assets/phone-word-screen.png";
import phoneLobbyScreen from "@/assets/phone-lobby-screen.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-20">
      {/* Animated background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple/5 via-transparent to-transparent" />
      <motion.div 
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple/20 rounded-full blur-[120px]"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan/15 rounded-full blur-[100px]"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div 
        className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-pink/10 rounded-full blur-[80px]"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          {/* Text content */}
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-4 h-4 text-cyan" />
              <span className="text-sm text-muted-foreground">The Ultimate Social Deduction Game</span>
            </motion.div>

            <motion.h1 
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="gradient-text glow-text">Imposter:</span>
              <br />
              <span className="text-foreground">Custom Edition</span>
            </motion.h1>

            <motion.p 
              className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Unmask the imposter among your friends. 1,000+ words, custom topics, 
              and two ways to play. Perfect for game nights, parties, and unforgettable moments.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button variant="hero" size="xl" className="gap-3 group">
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                Download for iOS
              </Button>
              <Button variant="outline-glow" size="xl" className="gap-3 group">
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                Get on Android
              </Button>
            </motion.div>

            <motion.div 
              className="flex items-center gap-8 mt-10 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {[
                { value: "1,000+", label: "Words" },
                { value: "20+", label: "Categories" },
                { value: "3-10+", label: "Players" }
              ].map((stat, i) => (
                <motion.div 
                  key={stat.label}
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="text-2xl font-display font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Phone mockups - staggered */}
          <motion.div 
            className="flex-1 relative flex justify-center items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Background phone - lobby */}
            <motion.div 
              className="absolute -left-4 top-8 w-[220px] sm:w-[260px] opacity-60 blur-[1px]"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan/30 to-indigo/30 blur-[40px] scale-110" />
                <img 
                  src={phoneLobbyScreen} 
                  alt="Game Lobby Screen" 
                  className="relative w-full rounded-[2rem] shadow-2xl"
                />
              </div>
            </motion.div>

            {/* Main phone - word reveal */}
            <motion.div 
              className="relative w-[260px] sm:w-[300px] z-10"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="absolute inset-0 bg-gradient-primary opacity-40 blur-[60px] scale-110" />
              <img 
                src={phoneWordScreen} 
                alt="Word Reveal Screen" 
                className="relative w-full rounded-[2.5rem] shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-muted-foreground/50" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
