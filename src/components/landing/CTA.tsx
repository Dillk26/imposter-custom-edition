import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight, Sparkles } from "lucide-react";
import appImposterScreen from "@/assets/app-imposter-screen.png";
import appResultsScreen from "@/assets/app-results-screen.png";

const CTA = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple/5 to-transparent" />
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-purple/20 via-cyan/20 to-pink/20 rounded-full blur-[150px]"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div 
          className="glass-strong rounded-3xl p-8 lg:p-12 text-center border-2 border-primary/20 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Floating phones in background */}
          <motion.img 
            src={appImposterScreen}
            alt=""
            className="absolute -left-20 top-1/2 -translate-y-1/2 w-40 opacity-20 blur-sm hidden lg:block"
            animate={{ y: [0, -20, 0], rotate: [-5, -10, -5] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.img 
            src={appResultsScreen}
            alt=""
            className="absolute -right-20 top-1/2 -translate-y-1/2 w-40 opacity-20 blur-sm hidden lg:block"
            animate={{ y: [0, 20, 0], rotate: [5, 10, 5] }}
            transition={{ duration: 6, repeat: Infinity, delay: 2 }}
          />

          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
          >
            <Sparkles className="w-4 h-4 text-cyan" />
            <span className="text-sm text-muted-foreground">Free to Download</span>
          </motion.div>

          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4 relative z-10">
            Ready to Find the <span className="gradient-text">Imposter</span>?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto relative z-10">
            Download now and bring the ultimate social deduction game to your next 
            game night, party, or hangout. 1,000+ words waiting for you.
          </p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button variant="hero" size="xl" className="gap-3 group">
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              Download for iOS
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline-glow" size="xl" className="gap-3 group">
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              Get on Android
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          <motion.p 
            className="text-sm text-muted-foreground mt-8 relative z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Free to download • Works offline
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
