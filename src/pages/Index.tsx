import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import GameModes from "@/components/landing/GameModes";
import Features from "@/components/landing/Features";
import TopicLibrary from "@/components/landing/TopicLibrary";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <GameModes />
      <div id="features">
        <Features />
      </div>
      <div id="topics">
        <TopicLibrary />
      </div>
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
