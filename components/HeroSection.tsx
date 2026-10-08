import Link from "next/link";
import { fetchGraphQL } from "@/lib/wpgraphql";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getImageUrl } from "@/lib/imageUrl";
// Hero section — "Meet Ramen." intro; text is ready for WordPress/GraphQL CMS data

export type HeroSectionResponse = {
  page: {
    homapageFieldValue: {
      homepageHeroSectionFieldValue: {
        heroSectionImageUpperText: string | null;
        boultPoints: string | null;
        whatsappNumber: string | null;
        heroSectionImage: {
          node: {
            sourceUrl: string;
            altText: string | null;
          } | null;
        } | null; 
      } | null;
    } | null;
  } | null;
};

export const GET_HERO_SECTION_DATA = `
  query GetHeroSectionData {
    page(id: 8, idType: DATABASE_ID) {
      homapageFieldValue {
        homepageHeroSectionFieldValue {
          heroSectionImageUpperText
          boultPoints
          whatsappNumber
          heroSectionImage {
            node {
              sourceUrl
              altText
            }
          }
        }
      }
    }
  }
`;


export default async function HeroSection() {

  const data = await fetchGraphQL<HeroSectionResponse>(
    GET_HERO_SECTION_DATA
  );

  const heroSections = data.page?.homapageFieldValue?.homepageHeroSectionFieldValue;

  if (!heroSections) {
    notFound();
  }
  return (
    <section className="bg-[#ffe0a6] w-full">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row min-h-[640px]">
        {/* Left: hero image */}
        <div className="relative lg:w-1/2 shrink-0">
          <div className="relative w-full h-[420px] lg:h-[639px] overflow-hidden">
             <img
                src={getImageUrl(heroSections?.heroSectionImage?.node?.sourceUrl || "/assets/f2b64.png")}
                alt={heroSections?.heroSectionImage?.node?.altText || "Book by Ramendra Kumar"} 
                className="absolute inset-0 w-full h-full object-cover object-center"
              />

          </div>
          {/* Caption label */}
          <div className="bg-[#103f4b] px-5 py-3 inline-block">
            <p className="font-serif italic text-white text-[21px] leading-normal whitespace-nowrap">
              {heroSections?.heroSectionImageUpperText || "Book by Ramendra Kumar"}
            </p>
          </div>
        </div>

        {/* Right: intro copy */}
        <div className="lg:w-1/2 flex items-start px-6 lg:pl-12 lg:pr-8 pt-10 lg:pt-[84px] pb-10">
          <div className="max-w-[482px] w-full">
            <p className="font-sans font-bold text-[#bd2e65] text-[17px] tracking-[2.04px] uppercase mb-3">
              {heroSections?.boultPoints || "WRITER · STORYTELLER · TEDX SPEAKER · DANCER · CANCER WARRIOR"}
            </p>

            <h1 className="font-serif not-italic text-[#18343e] leading-none mb-5">
              <span className="text-[84px] leading-none block">Meet</span>
              <span className="font-serif italic text-[#bd2e65] text-[84px] leading-[88px]">
                Ramen.
              </span>
            </h1>

            <div className="font-sans font-normal text-[#18343e] text-[20px] leading-[28px] mb-8 space-y-2">
              <p>
                What would you call a person who is a writer by{" "}
                <em className="italic">passion</em>, a storyteller by{" "}
                <em className="italic">obsession</em>, a 'perfect husband' by{" "}
                <em className="italic">aspiration</em>, a dancer by{" "}
                <em className="italic">inspiration</em>, a communicator by{" "}
                <em className="italic">profession</em>, and a cancer warrior by{" "}
                <em className="italic">determination</em>?
              </p>
              <p>
                You would probably call him insane.{" "}
                <strong className="font-bold">I call myself Ramen.</strong>
              </p>
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <a href="#contact"
                className="bg-[#bd2e65] text-white font-sans font-semibold text-[18px] px-6 py-3 hover:bg-[#a02455] transition-colors"
              >Send an enquiry
              </a>
              <a
                href={`https://api.whatsapp.com/send/?phone=${heroSections?.whatsappNumber || '9044558419'}&text=Hi,%20I’d%20like%20to%20discuss%20my books%20needs.&amp;type=phone_number&amp;app_absent=0`}
                target="_blank"
                rel="noreferrer"
                className="border border-[rgba(24,52,62,0.3)] flex items-center gap-2 px-4 py-3 font-sans font-semibold text-[#18343e] text-[18px] hover:border-[#18343e] transition-colors"
              >
                <img src="/assets/a1730.png" alt="" width={25} height={25} className="shrink-0" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
