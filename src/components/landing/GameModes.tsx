import { Smartphone, Wifi, WifiOff, Users } from "lucide-react";

const GameModes = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink/10 rounded-full blur-[120px]" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Two Ways to <span className="gradient-text">Play</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you have one device or many, we've got you covered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Pass the Phone Mode */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple/20 to-pink/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative glass-strong rounded-3xl p-8 h-full border-2 border-transparent hover:border-purple/30 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple to-pink flex items-center justify-center">
                  <Smartphone className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold">Pass-the-Phone</h3>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <WifiOff className="w-4 h-4" />
                    <span className="text-sm">Works Offline</span>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mb-6">
                One device, endless fun. Perfect for in-person game nights where 
                everyone gathers around a single phone.
              </p>

              <ul className="space-y-3">
                {[
                  "Single device shared among all players",
                  "Works completely offline",
                  "Perfect for in-person gatherings",
                  "Private word reveals",
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-purple/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-purple" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Join by Code Mode */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan/20 to-indigo/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative glass-strong rounded-3xl p-8 h-full border-2 border-transparent hover:border-cyan/30 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan to-indigo flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold">Join-by-Code</h3>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Wifi className="w-4 h-4" />
                    <span className="text-sm">Online Multiplayer</span>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mb-6">
                Kahoot-style multiplayer experience. Host creates a lobby, 
                friends join with a code. Real-time synchronization.
              </p>

              <ul className="space-y-3">
                {[
                  "Each player uses their own device",
                  "Host creates lobby with 6-character code",
                  "Real-time player list updates",
                  "Perfect for remote game nights",
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-cyan/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-cyan" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameModes;
