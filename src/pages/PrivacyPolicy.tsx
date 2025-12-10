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
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
              <span className="gradient-text">Privacy Policy</span>
            </h1>
            
            <p className="text-muted-foreground mb-2">
              <strong>App Name:</strong> Imposter Custom Edition
            </p>
            <p className="text-muted-foreground mb-8">
              <strong>Last Updated:</strong> December 9, 2025
            </p>

            <div className="space-y-6">
              <section className="glass rounded-2xl p-6 space-y-4">
                <h2 className="font-display text-2xl font-semibold text-foreground">1. Introduction</h2>
                <p className="text-muted-foreground">
                  Imposter Custom Edition ("we," "our," or "us"), developed by Dillon Khoubian, is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclosure, and safeguard your information when you use our mobile application (the "App").
                </p>
                <p className="text-muted-foreground">
                  By accessing or using the App, you agree to the terms of this Privacy Policy. If you do not agree with the terms of this Policy, please do not access the App.
                </p>
              </section>

              <section className="glass rounded-2xl p-6 space-y-4">
                <h2 className="font-display text-2xl font-semibold text-foreground">2. Information We Collect</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-display text-xl font-medium text-foreground mb-2">A. Personal Data (Authentication)</h3>
                    <p className="text-muted-foreground mb-2">To create an account and enable multiplayer features, we collect:</p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li><strong>Email Address:</strong> Required for account uniqueness and recovery.</li>
                      <li><strong>Display Name:</strong> How you appear to other players.</li>
                      <li><strong>User ID (UID):</strong> A unique identifier assigned to your account.</li>
                      <li><strong>Credentials:</strong> Passwords are collected but immediately hashed and stored securely via our third-party provider; we do not have access to your raw password.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-display text-xl font-medium text-foreground mb-2">B. Gameplay Data</h3>
                    <p className="text-muted-foreground mb-2">To facilitate the game mechanics, we collect and temporarily store:</p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li><strong>Game Codes:</strong> Unique 6-character identifiers for game rooms.</li>
                      <li><strong>Game State:</strong> Information on who is the "imposter," word assignments, and voting history within a specific game session.</li>
                      <li><strong>Player Names:</strong> Temporary names used during a specific game round.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-display text-xl font-medium text-foreground mb-2">C. User-Generated Content</h3>
                    <p className="text-muted-foreground mb-2">If you create custom game topics:</p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li><strong>Topic Data:</strong> Category names, topic titles, and word lists you input.</li>
                      <li><strong>Visibility Settings:</strong> Whether you have marked a topic as "Private" or "Public."</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-display text-xl font-medium text-foreground mb-2">D. Device and Technical Information</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li><strong>Device Info:</strong> Platform (iOS/Android) and App Version.</li>
                      <li><strong>Logs:</strong> Error logs (only collected during development modes) and authentication tokens.</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="glass rounded-2xl p-6 space-y-4">
                <h2 className="font-display text-2xl font-semibold text-foreground">3. How We Use Your Information</h2>
                <p className="text-muted-foreground mb-2">We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li><strong>Provide Services:</strong> Create accounts, synchronize game states across multiple devices (Multiplayer Mode), and manage "Pass-the-phone" local play.</li>
                  <li><strong>Manage Content:</strong> Store your custom topics and display Public topics to other users if you choose to share them.</li>
                  <li><strong>Improve App Performance:</strong> Identify bugs and ensure app stability.</li>
                </ul>
              </section>

              <section className="glass rounded-2xl p-6 space-y-4">
                <h2 className="font-display text-2xl font-semibold text-foreground">4. Third-Party Service Providers</h2>
                <p className="text-muted-foreground">
                  We do not sell your data. However, we utilize third-party services to operate the App. Specifically, we use Google Firebase (Google LLC) for:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li><strong>Authentication:</strong> To manage user log-ins securely.</li>
                  <li><strong>Cloud Firestore:</strong> To store game data and user-generated content.</li>
                </ul>
                <p className="text-muted-foreground">
                  Data stored with Google Firebase is subject to Google's privacy practices and may be stored on servers located outside your country of residence.
                </p>
                <p className="text-muted-foreground">
                  <strong>Google Privacy Policy:</strong>{" "}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    https://policies.google.com/privacy
                  </a>
                </p>
              </section>

              <section className="glass rounded-2xl p-6 space-y-4">
                <h2 className="font-display text-2xl font-semibold text-foreground">5. Data Retention</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li><strong>Account Data:</strong> Retained until you delete your account.</li>
                  <li><strong>Custom Topics:</strong> Retained until you manually delete the topic or delete your account.</li>
                  <li><strong>Game Data:</strong> Stored temporarily. Game history is deleted once a game is completed or abandoned. We do not maintain a permanent history of your matches.</li>
                </ul>
              </section>

              <section className="glass rounded-2xl p-6 space-y-4">
                <h2 className="font-display text-2xl font-semibold text-foreground">6. Security of Your Information</h2>
                <p className="text-muted-foreground mb-2">
                  We use administrative, technical, and physical security measures to help protect your personal information.
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li><strong>Encryption:</strong> Data is encrypted in transit (HTTPS/TLS) and at rest via Firebase.</li>
                  <li><strong>Access:</strong> Users can only access their own data or data related to an active game they have joined.</li>
                  <li><strong>Storage:</strong> Sensitive credentials (tokens) are stored using platform-secure storage (iOS Keychain/Android EncryptedSharedPreferences).</li>
                </ul>
                <p className="text-muted-foreground">
                  While we have taken reasonable steps to secure the personal information you provide, please be aware that no security measures are perfect or impenetrable.
                </p>
              </section>

              <section className="glass rounded-2xl p-6 space-y-4">
                <h2 className="font-display text-2xl font-semibold text-foreground">7. User-Generated Content & Sharing</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li><strong>Public Topics:</strong> If you mark a custom topic as "Public," it becomes accessible to all authenticated users of the App. You may change this to "Private" or delete the topic at any time.</li>
                  <li><strong>Game Rooms:</strong> Game data is only visible to users who have the specific 6-digit game code.</li>
                </ul>
              </section>

              <section className="glass rounded-2xl p-6 space-y-4">
                <h2 className="font-display text-2xl font-semibold text-foreground">8. Children's Privacy</h2>
                <p className="text-muted-foreground">
                  This App is intended for general audiences. We do not knowingly solicit information from or market to children under the age of 13. If we learn that we have collected information from a child under age 13 without verification of parental consent, we will delete that information.
                </p>
              </section>

              <section className="glass rounded-2xl p-6 space-y-4">
                <h2 className="font-display text-2xl font-semibold text-foreground">9. Your Rights</h2>
                <p className="text-muted-foreground mb-2">
                  Depending on your location (including the EU/GDPR or California/CCPA), you have certain rights regarding your data:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li><strong>Access:</strong> You can view your custom topics and profile within the App.</li>
                  <li><strong>Deletion:</strong> You may delete your custom topics or your entire account directly within the App settings. Account deletion permanently removes your personal data.</li>
                  <li><strong>Correction:</strong> You may update your Display Name within the App.</li>
                </ul>
              </section>

              <section className="glass rounded-2xl p-6 space-y-4">
                <h2 className="font-display text-2xl font-semibold text-foreground">10. Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have questions or comments about this Privacy Policy, please contact us at:
                </p>
                <p className="text-muted-foreground">
                  <strong>Developer:</strong> Dillon Khoubian
                </p>
                <p className="text-muted-foreground">
                  <strong>Email:</strong>{" "}
                  <a href="mailto:Impostercustomedition@gmail.com" className="text-primary hover:underline">
                    Impostercustomedition@gmail.com
                  </a>
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
