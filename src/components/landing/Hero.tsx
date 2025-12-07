import { Button } from "@/components/ui/button";
import { Download, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-20">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple/5 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple/20 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan/15 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-pink/10 rounded-full blur-[80px] animate-pulse-glow" style={{ animationDelay: '3s' }} />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4 text-cyan" />
              <span className="text-sm text-muted-foreground">The Ultimate Social Deduction Game</span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-slide-up">
              <span className="gradient-text">Imposter:</span>
              <br />
              <span className="text-foreground">Custom Edition</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Unmask the imposter among your friends. 1,000+ words, custom topics, 
              and two ways to play. Perfect for game nights, parties, and unforgettable moments.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Button variant="hero" size="xl" className="gap-3">
                <Download className="w-5 h-5" />
                Download for iOS
              </Button>
              <Button variant="outline-glow" size="xl" className="gap-3">
                <Download className="w-5 h-5" />
                Get on Android
              </Button>
            </div>

            <div className="flex items-center gap-8 mt-10 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-center">
                <div className="text-2xl font-display font-bold gradient-text">1,000+</div>
                <div className="text-sm text-muted-foreground">Words</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <div className="text-2xl font-display font-bold gradient-text">20+</div>
                <div className="text-sm text-muted-foreground">Categories</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <div className="text-2xl font-display font-bold gradient-text">3-10+</div>
                <div className="text-sm text-muted-foreground">Players</div>
              </div>
            </div>
          </div>

          {/* Phone mockup */}
          <div className="flex-1 relative animate-float">
            <div className="relative w-[280px] sm:w-[320px] mx-auto">
              {/* Glow effect behind phone */}
              <div className="absolute inset-0 bg-gradient-primary opacity-30 blur-[60px] scale-110" />
              
              {/* Phone frame */}
              <div className="relative glass-strong rounded-[3rem] p-3 shadow-2xl">
                <div className="bg-background rounded-[2.5rem] overflow-hidden aspect-[9/19]">
                  {/* Phone screen content */}
                  <div className="h-full bg-gradient-to-b from-card to-background p-6 flex flex-col">
                    {/* Status bar */}
                    <div className="flex justify-between items-center mb-8">
                      <span className="text-xs text-muted-foreground">9:41</span>
                      <div className="flex gap-1">
                        <div className="w-4 h-2 bg-muted-foreground rounded-sm" />
                        <div className="w-4 h-2 bg-muted-foreground rounded-sm" />
                      </div>
                    </div>
                    
                    {/* App content preview */}
                    <div className="text-center flex-1 flex flex-col justify-center">
                      <div className="text-6xl mb-4">🎭</div>
                      <h3 className="font-display text-xl font-bold gradient-text mb-2">Your Word Is:</h3>
                      <div className="glass rounded-xl p-4 mb-6">
                        <span className="text-2xl font-display font-bold">???</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Don't let anyone see!
                      </p>
                    </div>

                    {/* Bottom indicator */}
                    <div className="w-32 h-1 bg-muted-foreground/30 rounded-full mx-auto" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
