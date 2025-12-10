import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-purple/5 to-transparent" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-10 h-10 rounded-xl overflow-hidden">
              <img src={logo} alt="Imposter Logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <span className="font-display font-bold text-lg">Imposter: Custom Edition</span>
              <p className="text-xs text-muted-foreground">The Ultimate Social Deduction Game</p>
            </div>
          </motion.div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            {[
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms of Service", href: "/terms" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <motion.a 
                key={link.label}
                href={link.href} 
                className="hover:text-foreground transition-colors"
                whileHover={{ y: -2 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
