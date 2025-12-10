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

            <div className="space-y-6">
              <section className="glass rounded-2xl p-6 space-y-4">
                <p className="text-muted-foreground">
                  This privacy policy applies to the Imposter: Custom Edition app (hereby referred to as "Application") for mobile devices that was created by Dillon Khoubian (hereby referred to as "Service Provider") as a Free service. This service is intended for use "AS IS".
                </p>
              </section>

              <section className="glass rounded-2xl p-6 space-y-4">
                <h2 className="font-display text-2xl font-semibold text-foreground">Information Collection and Use</h2>
                <p className="text-muted-foreground">
                  The Application collects information when you download and use it. This information may include information such as
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Your device's Internet Protocol address (e.g. IP address)</li>
                  <li>The pages of the Application that you visit, the time and date of your visit, the time spent on those pages</li>
                  <li>The time spent on the Application</li>
                  <li>The operating system you use on your mobile device</li>
                </ul>
                <p className="text-muted-foreground">
                  The Application does not gather precise information about the location of your mobile device.
                </p>
                <p className="text-muted-foreground">
                  The Application collects your device's location, which helps the Service Provider determine your approximate geographical location and make use of in below ways:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li><strong>Geolocation Services:</strong> The Service Provider utilizes location data to provide features such as personalized content, relevant recommendations, and location-based services.</li>
                  <li><strong>Analytics and Improvements:</strong> Aggregated and anonymized location data helps the Service Provider to analyze user behavior, identify trends, and improve the overall performance and functionality of the Application.</li>
                  <li><strong>Third-Party Services:</strong> Periodically, the Service Provider may transmit anonymized location data to external services. These services assist them in enhancing the Application and optimizing their offerings.</li>
                </ul>
                <p className="text-muted-foreground">
                  The Service Provider may use the information you provided to contact you from time to time to provide you with important information, required notices and marketing promotions.
                </p>
                <p className="text-muted-foreground">
                  For a better experience, while using the Application, the Service Provider may require you to provide us with certain personally identifiable information, including but not limited to Email, UserID, Password. The information that the Service Provider request will be retained by them and used as described in this privacy policy.
                </p>
              </section>

              <section className="glass rounded-2xl p-6 space-y-4">
                <h2 className="font-display text-2xl font-semibold text-foreground">Third Party Access</h2>
                <p className="text-muted-foreground">
                  Only aggregated, anonymized data is periodically transmitted to external services to aid the Service Provider in improving the Application and their service. The Service Provider may share your information with third parties in the ways that are described in this privacy statement.
                </p>
                <p className="text-muted-foreground">
                  The Service Provider may disclose User Provided and Automatically Collected Information:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>as required by law, such as to comply with a subpoena, or similar legal process;</li>
                  <li>when they believe in good faith that disclosure is necessary to protect their rights, protect your safety or the safety of others, investigate fraud, or respond to a government request;</li>
                  <li>with their trusted services providers who work on their behalf, do not have an independent use of the information we disclose to them, and have agreed to adhere to the rules set forth in this privacy statement.</li>
                </ul>
              </section>

              <section className="glass rounded-2xl p-6 space-y-4">
                <h2 className="font-display text-2xl font-semibold text-foreground">Opt-Out Rights</h2>
                <p className="text-muted-foreground">
                  You can stop all collection of information by the Application easily by uninstalling it. You may use the standard uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or network.
                </p>
              </section>

              <section className="glass rounded-2xl p-6 space-y-4">
                <h2 className="font-display text-2xl font-semibold text-foreground">Data Retention Policy</h2>
                <p className="text-muted-foreground">
                  The Service Provider will retain User Provided data for as long as you use the Application and for a reasonable time thereafter. If you'd like them to delete User Provided Data that you have provided via the Application, please contact them at{" "}
                  <a href="mailto:impostercustomedition@gmail.com" className="text-primary hover:underline">
                    impostercustomedition@gmail.com
                  </a>{" "}
                  and they will respond in a reasonable time.
                </p>
              </section>

              <section className="glass rounded-2xl p-6 space-y-4">
                <h2 className="font-display text-2xl font-semibold text-foreground">Children</h2>
                <p className="text-muted-foreground">
                  The Service Provider does not use the Application to knowingly solicit data from or market to children under the age of 13.
                </p>
                <p className="text-muted-foreground">
                  The Service Provider does not knowingly collect personally identifiable information from children. The Service Provider encourages all children to never submit any personally identifiable information through the Application and/or Services. The Service Provider encourage parents and legal guardians to monitor their children's Internet usage and to help enforce this Policy by instructing their children never to provide personally identifiable information through the Application and/or Services without their permission. If you have reason to believe that a child has provided personally identifiable information to the Service Provider through the Application and/or Services, please contact the Service Provider (
                  <a href="mailto:impostercustomedition@gmail.com" className="text-primary hover:underline">
                    impostercustomedition@gmail.com
                  </a>
                  ) so that they will be able to take the necessary actions. You must also be at least 16 years of age to consent to the processing of your personally identifiable information in your country (in some countries we may allow your parent or guardian to do so on your behalf).
                </p>
              </section>

              <section className="glass rounded-2xl p-6 space-y-4">
                <h2 className="font-display text-2xl font-semibold text-foreground">Security</h2>
                <p className="text-muted-foreground">
                  The Service Provider is concerned about safeguarding the confidentiality of your information. The Service Provider provides physical, electronic, and procedural safeguards to protect information the Service Provider processes and maintains.
                </p>
              </section>

              <section className="glass rounded-2xl p-6 space-y-4">
                <h2 className="font-display text-2xl font-semibold text-foreground">Changes</h2>
                <p className="text-muted-foreground">
                  This Privacy Policy may be updated from time to time for any reason. The Service Provider will notify you of any changes to the Privacy Policy by updating this page with the new Privacy Policy. You are advised to consult this Privacy Policy regularly for any changes, as continued use is deemed approval of all changes.
                </p>
                <p className="text-muted-foreground">
                  This privacy policy is effective as of 2025-12-10
                </p>
              </section>

              <section className="glass rounded-2xl p-6 space-y-4">
                <h2 className="font-display text-2xl font-semibold text-foreground">Your Consent</h2>
                <p className="text-muted-foreground">
                  By using the Application, you are consenting to the processing of your information as set forth in this Privacy Policy now and as amended by us.
                </p>
              </section>

              <section className="glass rounded-2xl p-6 space-y-4">
                <h2 className="font-display text-2xl font-semibold text-foreground">Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have any questions regarding privacy while using the Application, or have questions about the practices, please contact the Service Provider via email at{" "}
                  <a href="mailto:impostercustomedition@gmail.com" className="text-primary hover:underline">
                    impostercustomedition@gmail.com
                  </a>
                  .
                </p>
                <p className="text-muted-foreground text-sm mt-4">
                  This privacy policy page was generated by{" "}
                  <a href="https://app-privacy-policy-generator.nisrulz.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    App Privacy Policy Generator
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
