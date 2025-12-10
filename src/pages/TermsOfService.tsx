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
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-2">
              <span className="gradient-text">Terms of Service</span>
            </h1>
            <p className="text-muted-foreground">Imposter Custom Edition</p>

            <div className="grid gap-4 sm:grid-cols-2 mt-6 mb-10">
              <div className="glass rounded-2xl p-4">
                <p className="text-sm text-muted-foreground">
                  <strong>Effective Date:</strong> December 10, 2025
                </p>
              </div>
              <div className="glass rounded-2xl p-4">
                <p className="text-sm text-muted-foreground">
                  <strong>Last Updated:</strong> December 10, 2025
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <section className="glass rounded-2xl p-6 space-y-3">
                <h2 className="font-display text-2xl font-semibold text-foreground">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground">
                  Welcome to Imposter Custom Edition ("the App," "we," "our," or "us"). These Terms of Service ("Terms") govern your access to and use of the App. By creating an account, accessing, or using the App, you agree to be bound by these Terms and our Privacy Policy. If you do not agree, you may not use the App.
                </p>
                <p className="text-muted-foreground">
                  These Terms form a legally binding agreement between you and Dillon Khoubian (the "Developer").
                </p>
              </section>

              <section className="glass rounded-2xl p-6 space-y-4">
                <h2 className="font-display text-2xl font-semibold text-foreground">2. Eligibility</h2>
                <div className="space-y-3">
                  <div>
                    <h3 className="font-display text-xl font-medium text-foreground">2.1 Age Requirements</h3>
                    <p className="text-muted-foreground">
                      You must be at least 13 years old to create an account and use the App. If you are between 13 and 18 (or the age of majority in your jurisdiction), you must have your parent or legal guardian's permission. By using the App, you represent and warrant that you meet these requirements.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-medium text-foreground">2.2 Account Registration</h3>
                    <p className="text-muted-foreground mb-2">To access certain features, you must create an account by providing:</p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>A valid email address</li>
                      <li>A secure password</li>
                      <li>An optional display name</li>
                      <li>Or by signing in with Google</li>
                    </ul>
                    <p className="text-muted-foreground">You are responsible for maintaining credential confidentiality, all account activity, and promptly notifying us of unauthorized use. You may not share accounts, create multiple accounts, or use another person's account without permission.</p>
                  </div>
                </div>
              </section>

              <section className="glass rounded-2xl p-6 space-y-4">
                <h2 className="font-display text-2xl font-semibold text-foreground">3. Description of Service</h2>
                <div className="space-y-3">
                  <div>
                    <h3 className="font-display text-xl font-medium text-foreground">3.1 Game Overview</h3>
                    <p className="text-muted-foreground">Imposter Custom Edition is a social party game where players receive secret words, one or more players are designated as imposters, and players discuss and vote to identify the imposters.</p>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-medium text-foreground">3.2 Game Modes</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Pass-the-phone mode: local gameplay on a single device</li>
                      <li>Join-by-code mode: multiplayer gameplay across devices</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-medium text-foreground">3.3 Custom Content</h3>
                    <p className="text-muted-foreground">You may create custom topics with category names, word lists (minimum 4 words), and choose public or private visibility.</p>
                  </div>
                </div>
              </section>

              <section className="glass rounded-2xl p-6 space-y-4">
                <h2 className="font-display text-2xl font-semibold text-foreground">4. User Conduct</h2>
                <div className="space-y-3">
                  <div>
                    <h3 className="font-display text-xl font-medium text-foreground">4.1 Acceptable Use</h3>
                    <p className="text-muted-foreground mb-2">You agree not to:</p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Violate laws or regulations</li>
                      <li>Infringe others' rights</li>
                      <li>Harass, threaten, or intimidate users</li>
                      <li>Impersonate any person or entity</li>
                      <li>Upload or transmit malware</li>
                      <li>Attempt unauthorized access or disrupt the App</li>
                      <li>Use bots or automated systems</li>
                      <li>Collect or harvest user information</li>
                      <li>Use the App for commercial purposes without authorization</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-medium text-foreground">4.2 User-Generated Content</h3>
                    <p className="text-muted-foreground mb-2">When creating custom topics, your content must not contain:</p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Hate speech or discriminatory content</li>
                      <li>Sexually explicit material</li>
                      <li>Violence or illegal activity promotion</li>
                      <li>Others' personal information without consent</li>
                      <li>Spam or misleading information</li>
                    </ul>
                    <p className="text-muted-foreground">You warrant you have rights to the content and it does not violate third-party rights.</p>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-medium text-foreground">4.3 Public Content</h3>
                    <p className="text-muted-foreground">If you mark topics as public, other users can view and use them. You retain ownership but grant us a license to display and distribute the content. You may switch to private or delete content at any time.</p>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-medium text-foreground">4.4 Content Moderation</h3>
                    <p className="text-muted-foreground">We may review, remove, or report violating content and suspend or terminate accounts. We are not obligated to monitor all content.</p>
                  </div>
                </div>
              </section>

              <section className="glass rounded-2xl p-6 space-y-4">
                <h2 className="font-display text-2xl font-semibold text-foreground">5. Intellectual Property Rights</h2>
                <div className="space-y-3">
                  <div>
                    <h3 className="font-display text-xl font-medium text-foreground">5.1 App Ownership</h3>
                    <p className="text-muted-foreground">The App, including design, code, and original content, is owned by the Developer and protected by intellectual property laws. You receive a limited, non-exclusive, non-transferable, revocable license for personal, non-commercial use.</p>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-medium text-foreground">5.2 Your Content</h3>
                    <p className="text-muted-foreground">You retain ownership of custom topics. For public topics, you grant us a worldwide, non-exclusive, royalty-free license to store, display, and make content available to users. The license ends when you delete or make content private.</p>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-medium text-foreground">5.3 Feedback</h3>
                    <p className="text-muted-foreground">If you provide feedback or ideas, you grant us the right to use them without obligation.</p>
                  </div>
                </div>
              </section>

              <section className="glass rounded-2xl p-6 space-y-4">
                <h2 className="font-display text-2xl font-semibold text-foreground">6. Third-Party Services</h2>
                <div className="space-y-3">
                  <div>
                    <h3 className="font-display text-xl font-medium text-foreground">6.1 Firebase and Google Services</h3>
                    <p className="text-muted-foreground">The App uses Firebase and Google Cloud Platform for authentication, data storage, and functionality. Your use is also governed by Google's terms and privacy policy.</p>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-medium text-foreground">6.2 Third-Party Links</h3>
                    <p className="text-muted-foreground">The App may contain links to third-party sites. We are not responsible for their content or practices. Access at your own risk.</p>
                  </div>
                </div>
              </section>

              <section className="glass rounded-2xl p-6 space-y-4">
                <h2 className="font-display text-2xl font-semibold text-foreground">7. Disclaimers and Limitations of Liability</h2>
                <div className="space-y-3">
                  <div>
                    <h3 className="font-display text-xl font-medium text-foreground">7.1 "AS IS" Disclaimer</h3>
                    <p className="text-muted-foreground">THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, including merchantability, fitness for a particular purpose, non-infringement, uninterrupted operation, or accuracy.</p>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-medium text-foreground">7.2 Limitation of Liability</h3>
                    <p className="text-muted-foreground">To the maximum extent permitted by law, the Developer is not liable for indirect, incidental, special, consequential, punitive damages, or loss of profits, data, use, goodwill, or other intangible losses arising from use of the App, unauthorized access, user conduct, third-party services, or any related matters. Total liability will not exceed the amount you paid to use the App in the preceding twelve months, or $100, whichever is greater.</p>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-medium text-foreground">7.3 User Interactions</h3>
                    <p className="text-muted-foreground">You are solely responsible for interactions with other users. We are not responsible for user conduct, disputes, or resulting harm. Use caution and good judgment.</p>
                  </div>
                </div>
              </section>

              <section className="glass rounded-2xl p-6 space-y-3">
                <h2 className="font-display text-2xl font-semibold text-foreground">8. Indemnification</h2>
                <p className="text-muted-foreground">You agree to indemnify and hold harmless the Developer and its affiliates from claims, damages, losses, costs, or expenses (including attorneys' fees) arising from your use of the App, violation of these Terms or others' rights, user-generated content, or related conduct.</p>
              </section>

              <section className="glass rounded-2xl p-6 space-y-4">
                <h2 className="font-display text-2xl font-semibold text-foreground">9. Termination</h2>
                <div className="space-y-3">
                  <div>
                    <h3 className="font-display text-xl font-medium text-foreground">9.1 Your Right to Terminate</h3>
                    <p className="text-muted-foreground">You may terminate your account at any time by deleting it in settings, ceasing use, or contacting us for deletion.</p>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-medium text-foreground">9.2 Our Right to Terminate</h3>
                    <p className="text-muted-foreground">We may suspend or terminate access at any time, with or without notice, for violations, illegal or harmful conduct, prolonged inactivity, technical or security reasons, or discontinuation of the App.</p>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-medium text-foreground">9.3 Effect of Termination</h3>
                    <p className="text-muted-foreground">Upon termination, your license ends, account data is deleted per retention policies, and you must stop using the App. Provisions that naturally survive (disclaimers, limitations, indemnification) remain in effect.</p>
                  </div>
                </div>
              </section>

              <section className="glass rounded-2xl p-6 space-y-3">
                <h2 className="font-display text-2xl font-semibold text-foreground">10. Privacy</h2>
                <p className="text-muted-foreground">Your use of the App is also governed by our Privacy Policy, which is incorporated by reference. Please review it to understand our data practices.</p>
              </section>

              <section className="glass rounded-2xl p-6 space-y-4">
                <h2 className="font-display text-2xl font-semibold text-foreground">11. Changes to Terms</h2>
                <div className="space-y-3">
                  <div>
                    <h3 className="font-display text-xl font-medium text-foreground">11.1 Modification Rights</h3>
                    <p className="text-muted-foreground">We may modify these Terms at any time. We will update the "Last Updated" date and provide notice for material changes. Changes are effective upon posting unless stated otherwise.</p>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-medium text-foreground">11.2 Continued Use</h3>
                    <p className="text-muted-foreground">Continued use after changes become effective constitutes acceptance. If you disagree, stop using the App and delete your account.</p>
                  </div>
                </div>
              </section>

              <section className="glass rounded-2xl p-6 space-y-4">
                <h2 className="font-display text-2xl font-semibold text-foreground">12. Dispute Resolution</h2>
                <div className="space-y-3">
                  <div>
                    <h3 className="font-display text-xl font-medium text-foreground">12.1 Governing Law</h3>
                    <p className="text-muted-foreground">These Terms are governed by the laws of California, United States, without regard to conflict of law provisions.</p>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-medium text-foreground">12.2 Informal Resolution</h3>
                    <p className="text-muted-foreground">You agree to contact us to attempt to resolve disputes informally in good faith before filing a claim.</p>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-medium text-foreground">12.3 Arbitration (Optional)</h3>
                    <p className="text-muted-foreground">An arbitration clause may apply subject to legal review. Consult counsel before relying on arbitration provisions.</p>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-medium text-foreground">12.4 Class Action Waiver</h3>
                    <p className="text-muted-foreground">To the extent permitted by law, disputes must be brought individually and not as part of a class, collective, or representative action.</p>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-medium text-foreground">12.5 Jurisdiction and Venue</h3>
                    <p className="text-muted-foreground">For disputes not subject to arbitration, you agree to the personal jurisdiction and venue of courts in California (or your specified jurisdiction, if different).</p>
                  </div>
                </div>
              </section>

              <section className="glass rounded-2xl p-6 space-y-4">
                <h2 className="font-display text-2xl font-semibold text-foreground">13. General Provisions</h2>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Entire Agreement:</strong> These Terms and the Privacy Policy are the entire agreement.</p>
                  <p><strong>Severability:</strong> Invalid provisions are modified to the minimum extent and the rest remain in force.</p>
                  <p><strong>Waiver:</strong> Failure to enforce a provision is not a waiver.</p>
                  <p><strong>Assignment:</strong> You may not assign without consent; we may assign freely.</p>
                  <p><strong>No Third-Party Beneficiaries:</strong> None are created unless expressly stated.</p>
                  <p><strong>Force Majeure:</strong> We are not liable for performance failures beyond our reasonable control.</p>
                  <p><strong>Export Controls:</strong> You must comply with applicable export and re-export laws.</p>
                </div>
              </section>

              <section className="glass rounded-2xl p-6 space-y-4">
                <h2 className="font-display text-2xl font-semibold text-foreground">14. App Store Terms</h2>
                <div className="space-y-3">
                  <div>
                    <h3 className="font-display text-xl font-medium text-foreground">14.1 Additional Terms</h3>
                    <p className="text-muted-foreground">Use of the App is also subject to platform terms (Apple App Store, Google Play, etc.).</p>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-medium text-foreground">14.2 Platform Requirements</h3>
                    <p className="text-muted-foreground">These Terms are between you and the Developer, not Apple or Google. Platform providers are not obligated to support the App and are not liable for related claims. You must comply with applicable third-party terms.</p>
                  </div>
                </div>
              </section>

              <section className="glass rounded-2xl p-6 space-y-3">
                <h2 className="font-display text-2xl font-semibold text-foreground">15. Contact Information</h2>
                <p className="text-muted-foreground">If you have questions about these Terms, contact us at <a className="text-primary hover:underline" href="mailto:impostercustomedition@gmail.com">impostercustomedition@gmail.com</a>. We aim to respond within 30 days. For legal notices, include "Legal Notice" in the subject line.</p>
              </section>

              <section className="glass rounded-2xl p-6 space-y-3">
                <h2 className="font-display text-2xl font-semibold text-foreground">16. Acknowledgment</h2>
                <p className="text-muted-foreground">By using Imposter Custom Edition, you acknowledge you have read and understood these Terms, agree to be bound, understand violations may result in termination, and agree to our Privacy Policy.</p>
              </section>

              <section className="glass rounded-2xl p-6 space-y-3">
                <h2 className="font-display text-2xl font-semibold text-foreground">Developer Information</h2>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li><strong>Developer:</strong> Dillon Khoubian</li>
                  <li><strong>App Name:</strong> Imposter Custom Edition</li>
                  <li><strong>Bundle ID:</strong> com.dillonkhoubian.impostercustom</li>
                </ul>
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
