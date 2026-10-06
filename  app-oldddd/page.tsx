import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import TestimonialSection from "@/components/TestimonialSection";
import WriteSection from "@/components/WriteSection";
import WatchSection from "@/components/WatchSection";
import BooksSection from "@/components/BooksSection";
import ImpactSection from "@/components/ImpactSection";
import RecognitionSection from "@/components/RecognitionSection";
import EducationSection from "@/components/EducationSection";
import SessionsSection from "@/components/SessionsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="w-full min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <StatsBar />
        <TestimonialSection />
        <WriteSection />
        <WatchSection />
        <BooksSection />
        <ImpactSection />
        <RecognitionSection />
        <EducationSection />
        <SessionsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
