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

export const dynamic = "force-dynamic";
import { fetchGraphQL } from "@/lib/wpgraphql";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Ramendra Kumar | Writer, Storyteller & Speaker",

  description:
    "Meet Ramendra Kumar, an award-winning writer, storyteller and speaker.",

  openGraph: {
    title: "Ramendra Kumar | Writer, Storyteller & Speaker",
    description:
      "Meet Ramendra Kumar, an award-winning writer, storyteller and speaker.",
    images: [
      {
        url: "Ramender.jpg",
        width: 1200,
        height: 630,
        alt: "Ramendra Kumar",
      },
    ],
  },
};

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
