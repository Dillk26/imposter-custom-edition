import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { motion } from "framer-motion";

const TermsOfService = () => {
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
              <span className="gradient-text">Terms of Service</span>
            </h1>
            
            <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
              <p className="text-lg">
                Last updated: December 2024
              </p>

              <section className="glass rounded-2xl p-6 space-y-4">
                <h2 className="font-display text-2xl font-semibold text-foreground">Acceptance of Terms</h2>
                <p>
                  By downloading, installing, or using Imposter: Custom Edition, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the app.
                </p>
              </section>

              <section className="glass rounded-2xl p-6 space-y-4">
                <h2 className="font-display text-2xl font-semibold text-foreground">Use of the App</h2>
                <p>
                  You agree to use Imposter: Custom Edition only for lawful purposes and in accordance with these Terms. You agree not to:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Use the app in any way that violates applicable laws or regulations</li>
                  <li>Create custom topics containing offensive, harmful, or inappropriate content</li>
                  <li>Attempt to interfere with the app's functionality or security</li>
                  <li>Use the app to harass, abuse, or harm other users</li>
                </ul>
              </section>

              <section className="glass rounded-2xl p-6 space-y-4">
                <h2 className="font-display text-2xl font-semibold text-foreground">User Content</h2>
                <p>
                  You retain ownership of custom topics you create. By making topics public, you grant us a license to display and distribute them within the app. We reserve the right to remove content that violates these terms.
                </p>
              </section>

              <section className="glass rounded-2xl p-6 space-y-4">
                <h2 className="font-display text-2xl font-semibold text-foreground">Intellectual Property</h2>
                <p>
                  The app, including its design, features, and content (excluding user-generated content), is owned by us and protected by intellectual property laws. You may not copy, modify, or distribute the app without permission.
                </p>
              </section>

              <section className="glass rounded-2xl p-6 space-y-4">
                <h2 className="font-display text-2xl font-semibold text-foreground">Disclaimer of Warranties</h2>
                <p>
                  The app is provided "as is" without warranties of any kind. We do not guarantee that the app will be error-free, uninterrupted, or meet your specific requirements.
                </p>
              </section>

              <section className="glass rounded-2xl p-6 space-y-4">
                <h2 className="font-display text-2xl font-semibold text-foreground">Changes to Terms</h2>
                <p>
                  We may update these Terms of Service from time to time. Continued use of the app after changes constitutes acceptance of the updated terms.
                </p>
              </section>

              <section className="glass rounded-2xl p-6 space-y-4">
                <h2 className="font-display text-2xl font-semibold text-foreground">Contact</h2>
                <p>
                  For questions about these Terms of Service, please contact us through the Contact page.
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

export default TermsOfService;