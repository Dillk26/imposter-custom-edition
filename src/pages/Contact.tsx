import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // EmailJS configuration
    // Fallback values for production (GitHub Pages doesn't support .env at runtime)
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_tt7chlt";
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_6qlllik";
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "OOSMCwB0YyxlaOIXG";

    if (!serviceId || !templateId || !publicKey) {
      toast({
        title: "Configuration Error",
        description: "Email service is not configured. Please contact us directly at impostercustomedition@gmail.com",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: name,
          from_email: email,
          message: message,
          to_email: "impostercustomedition@gmail.com",
        },
        publicKey
      );

      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });

      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact us directly at impostercustomedition@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-12">
              <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
                <span className="gradient-text">Contact Us</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Have questions, feedback, or just want to say hi? We'd love to hear from you!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Form */}
              <motion.div
                className="glass-strong rounded-2xl p-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h2 className="font-display text-xl font-semibold">Send a Message</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:outline-none transition-colors resize-none"
                      placeholder="How can we help?"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full gap-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="glass rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan to-indigo flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold">Email Us</h3>
                      <p className="text-sm text-muted-foreground">For general inquiries</p>
                    </div>
                  </div>
                  <a 
                    href="mailto:impostercustomedition@gmail.com" 
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    impostercustomedition@gmail.com
                  </a>
                </div>

                <div className="glass rounded-2xl p-6">
                  <h3 className="font-display font-semibold mb-4">Frequently Asked Questions</h3>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p><strong className="text-foreground">How do I create custom topics?</strong><br />
                      Tap "Create Category" from the home screen and add your custom words.
                    </p>
                    <p><strong className="text-foreground">Can I play offline?</strong><br />
                      Yes! Pass-the-Phone mode works completely offline.
                    </p>
                    <p><strong className="text-foreground">How many players can join?</strong><br />
                      You can play with 3-10+ players in either game mode.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;