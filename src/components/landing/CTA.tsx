import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple/5 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-purple/20 via-cyan/20 to-pink/20 rounded-full blur-[150px]" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="glass-strong rounded-3xl p-12 text-center border-2 border-primary/20">
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Ready to Find the <span className="gradient-text">Imposter</span>?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Download now and bring the ultimate social deduction game to your next 
            game night, party, or hangout.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" className="gap-3">
              <Download className="w-5 h-5" />
              Download for iOS
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline-glow" size="xl" className="gap-3">
              <Download className="w-5 h-5" />
              Get on Android
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-8">
            Free to download • No account required • Works offline
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
