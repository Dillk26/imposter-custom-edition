import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Eye, EyeOff, Users, MessageCircle, Vote, Trophy, AlertTriangle } from "lucide-react";

const players = [
  { name: "Alex", isImposter: false },
  { name: "Jordan", isImposter: true },
  { name: "Sam", isImposter: false },
  { name: "Taylor", isImposter: false },
];

const hints = [
  { player: "Alex", hint: "It's something I use every morning", delay: 0 },
  { player: "Sam", hint: "You can find it in any kitchen", delay: 1.5 },
  { player: "Jordan", hint: "Uh... people really like it?", delay: 3, suspicious: true },
  { player: "Taylor", hint: "Mine is black and bitter", delay: 4.5 },
];

const InteractiveDemo = () => {
  const [phase, setPhase] = useState<"reveal" | "discussion" | "voting" | "result">("reveal");
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [showWord, setShowWord] = useState(false);
  const [hintsShown, setHintsShown] = useState(0);
  const [votes, setVotes] = useState<{ [key: string]: number }>({});
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!isPlaying) return;

    if (phase === "reveal") {
      const timer = setTimeout(() => {
        setShowWord(true);
        setTimeout(() => {
          setShowWord(false);
          if (currentPlayer < players.length - 1) {
            setCurrentPlayer(prev => prev + 1);
            setTimeout(() => setShowWord(true), 500);
          } else {
            setTimeout(() => setPhase("discussion"), 1000);
          }
        }, 2000);
      }, 500);
      return () => clearTimeout(timer);
    }

    if (phase === "discussion") {
      const interval = setInterval(() => {
        setHintsShown(prev => {
          if (prev >= hints.length) {
            clearInterval(interval);
            setTimeout(() => setPhase("voting"), 2000);
            return prev;
          }
          return prev + 1;
        });
      }, 2000);
      return () => clearInterval(interval);
    }

    if (phase === "voting") {
      const newVotes = { Alex: 1, Jordan: 3, Sam: 0, Taylor: 0 };
      setTimeout(() => {
        setVotes(newVotes);
        setTimeout(() => setPhase("result"), 2000);
      }, 1500);
    }

    if (phase === "result") {
      setTimeout(() => {
        // Reset
        setPhase("reveal");
        setCurrentPlayer(0);
        setShowWord(false);
        setHintsShown(0);
        setVotes({});
      }, 4000);
    }
  }, [phase, currentPlayer, isPlaying]);

  const startDemo = () => {
    setIsPlaying(true);
    setPhase("reveal");
    setCurrentPlayer(0);
    setShowWord(false);
    setHintsShown(0);
    setVotes({});
  };

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple/5 to-transparent" />
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan/10 rounded-full blur-[150px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            See It In <span className="gradient-text">Action</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch a complete round unfold. The word is "Coffee" - but can you spot the Imposter?
          </p>
        </motion.div>

        {/* Demo container */}
        <motion.div 
          className="glass-strong rounded-3xl p-8 lg:p-12 border-2 border-primary/20 relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          {/* Phase indicator */}
          <div className="flex items-center justify-center gap-2 mb-8">
            {[
              { id: "reveal", icon: Eye, label: "Word Reveal" },
              { id: "discussion", icon: MessageCircle, label: "Discussion" },
              { id: "voting", icon: Vote, label: "Voting" },
              { id: "result", icon: Trophy, label: "Result" },
            ].map((p, i) => (
              <div key={p.id} className="flex items-center gap-2">
                <motion.div 
                  className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all ${
                    phase === p.id 
                      ? 'bg-gradient-primary text-primary-foreground' 
                      : 'bg-muted/50 text-muted-foreground'
                  }`}
                  animate={{ scale: phase === p.id ? 1.05 : 1 }}
                >
                  <p.icon className="w-4 h-4" />
                  <span className="text-sm font-medium hidden sm:inline">{p.label}</span>
                </motion.div>
                {i < 3 && <div className="w-8 h-0.5 bg-muted/50 hidden sm:block" />}
              </div>
            ))}
          </div>

          {/* Demo content */}
          <div className="min-h-[300px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              {!isPlaying ? (
                <motion.div
                  key="start"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center"
                >
                  <p className="text-muted-foreground mb-6">Click to watch a simulated game round</p>
                  <motion.button
                    onClick={startDemo}
                    className="px-8 py-4 rounded-2xl bg-gradient-primary text-primary-foreground font-semibold text-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Start Demo
                  </motion.button>
                </motion.div>
              ) : phase === "reveal" ? (
                <motion.div
                  key="reveal"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple to-indigo flex items-center justify-center">
                      <Users className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm text-muted-foreground">Viewing word...</p>
                      <p className="font-display text-xl font-bold">{players[currentPlayer].name}</p>
                    </div>
                  </div>

                  <AnimatePresence mode="wait">
                    {showWord && (
                      <motion.div
                        key={currentPlayer}
                        initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                        className={`inline-block px-12 py-8 rounded-2xl ${
                          players[currentPlayer].isImposter 
                            ? 'bg-gradient-to-br from-red-600 to-red-800' 
                            : 'bg-gradient-to-br from-purple to-indigo'
                        }`}
                      >
                        {players[currentPlayer].isImposter ? (
                          <div className="flex flex-col items-center gap-2">
                            <EyeOff className="w-8 h-8 text-white" />
                            <span className="font-display text-3xl font-bold text-white">IMPOSTER</span>
                          </div>
                        ) : (
                          <div className="flex flex-col items-center gap-2">
                            <Eye className="w-8 h-8 text-white" />
                            <span className="font-display text-3xl font-bold text-white">Coffee</span>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ) : phase === "discussion" ? (
                <motion.div
                  key="discussion"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="w-full max-w-lg"
                >
                  <div className="text-center mb-6">
                    <MessageCircle className="w-8 h-8 text-cyan mx-auto mb-2" />
                    <p className="text-muted-foreground">Players are giving hints...</p>
                  </div>

                  <div className="space-y-3">
                    {hints.slice(0, hintsShown).map((hint, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className={`flex items-start gap-3 p-4 rounded-xl ${
                          hint.suspicious ? 'bg-red-500/10 border border-red-500/30' : 'bg-muted/30'
                        }`}
                      >
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                          hint.suspicious 
                            ? 'bg-gradient-to-br from-red-500 to-red-700' 
                            : 'bg-gradient-to-br from-purple to-indigo'
                        } text-primary-foreground`}>
                          {hint.player[0]}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-sm mb-1">{hint.player}</p>
                          <p className="text-muted-foreground">"{hint.hint}"</p>
                        </div>
                        {hint.suspicious && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="flex items-center gap-1 text-red-400 text-xs"
                          >
                            <AlertTriangle className="w-4 h-4" />
                            <span>Sus!</span>
                          </motion.div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ) : phase === "voting" ? (
                <motion.div
                  key="voting"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="w-full max-w-md"
                >
                  <div className="text-center mb-6">
                    <Vote className="w-8 h-8 text-pink mx-auto mb-2" />
                    <p className="text-muted-foreground">Votes are being cast...</p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {players.map(player => (
                      <motion.div
                        key={player.name}
                        className={`p-4 rounded-xl glass text-center ${
                          (votes[player.name] || 0) >= 2 ? 'border-2 border-red-500/50 bg-red-500/10' : ''
                        }`}
                        animate={{ scale: Object.keys(votes).length > 0 && votes[player.name] === 3 ? 1.05 : 1 }}
                      >
                        <p className="font-medium">{player.name}</p>
                        <motion.p 
                          className="text-2xl font-display font-bold gradient-text"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: Object.keys(votes).length > 0 ? 1 : 0 }}
                        >
                          {votes[player.name] || 0}
                        </motion.p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="text-center"
                >
                  <motion.div
                    initial={{ rotate: -180, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{ type: "spring", damping: 10 }}
                  >
                    <Trophy className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  </motion.div>
                  <h3 className="font-display text-3xl font-bold text-green-400 mb-2">
                    Town Wins!
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    <span className="text-red-400 font-medium">Jordan</span> was the Imposter
                  </p>
                  <p className="text-sm text-muted-foreground">
                    The word was: <span className="text-foreground font-medium">Coffee</span>
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveDemo;
