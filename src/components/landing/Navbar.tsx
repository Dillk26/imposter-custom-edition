import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "#how-it-works", label: "How It Works" },
  { href: "#features", label: "Features" },
  { href: "#topics", label: "Topics" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 glass-strong border-b border-border/50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a 
            href="/" 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
          >
            <motion.div 
              className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center"
              whileHover={{ rotate: 10 }}
            >
              <span className="text-xl">🎭</span>
            </motion.div>
            <span className="font-display font-bold text-lg hidden sm:block">
              Imposter
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a 
                key={link.href}
                href={link.href} 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
                whileHover={{ y: -2 }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          {/* Download Button */}
          <div className="hidden md:block">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="gradient" size="default" className="gap-2">
                <Download className="w-4 h-4" />
                Download
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div 
          className="md:hidden overflow-hidden"
          initial={false}
          animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="py-4 border-t border-border/50">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button variant="gradient" size="default" className="gap-2 w-full">
                <Download className="w-4 h-4" />
                Download
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
