import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
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
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-8">
              <span className="gradient-text">Privacy Policy</span>
            </h1>
            
            <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
              <p className="text-lg">
                Last updated: December 2024
              </p>

              <section className="glass rounded-2xl p-6 space-y-4">
                <h2 className="font-display text-2xl font-semibold text-foreground">Information We Collect</h2>
                <p>
                  When you use Imposter: Custom Edition, we may collect certain information to provide and improve our services:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Account information (email address) when you create an account</li>
                  <li>Custom topics you create within the app</li>
                  <li>Game activity and usage data</li>
                  <li>Device information for app optimization</li>
                </ul>
              </section>

              <section className="glass rounded-2xl p-6 space-y-4">
                <h2 className="font-display text-2xl font-semibold text-foreground">How We Use Your Information</h2>
                <p>
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Provide and maintain our game services</li>
                  <li>Save your custom topics and game preferences</li>
                  <li>Enable multiplayer functionality</li>
                  <li>Improve and optimize the app experience</li>
                  <li>Communicate with you about updates or support</li>
                </ul>
              </section>

              <section className="glass rounded-2xl p-6 space-y-4">
                <h2 className="font-display text-2xl font-semibold text-foreground">Data Security</h2>
                <p>
                  We implement appropriate security measures to protect your personal information. Your data is stored securely using industry-standard encryption and security practices.
                </p>
              </section>

              <section className="glass rounded-2xl p-6 space-y-4">
                <h2 className="font-display text-2xl font-semibold text-foreground">Your Rights</h2>
                <p>
                  You have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Access your personal data</li>
                  <li>Request deletion of your account and data</li>
                  <li>Opt out of promotional communications</li>
                  <li>Export your custom topics</li>
                </ul>
              </section>

              <section className="glass rounded-2xl p-6 space-y-4">
                <h2 className="font-display text-2xl font-semibold text-foreground">Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us through the Contact page.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;