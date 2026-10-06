// Write section — data ready for WordPress/GraphQL

import Link from "next/link";
import { fetchGraphQL } from "@/lib/wpgraphql";
import type { Metadata } from "next";


export type WriteSectionResponse = {
  page: {
    homapageFieldValue: {
      homepageHeroSectionFieldValue: {
        boultPoints: string;
        heroSectionImageUpperText: string;
        write: string;
        writeSectionDesbctionInFirstWords: string;
        writeSectionHeadingInFirstWords: string;
        firstSectionWriteHeading: string;
        thirdSectionWriteHeading: string;
        thirdSectionWriteDescription: string;
        third: string;
        secondSectionWriteDescription: string;
        secondSectionWriteHeading: string;
        secondWriteSectionHeadingInFirstWords: string;
        writeFeaturedImage: {
          node: {
            altText: string;
            sourceUrl: string;
          } | null;
        } | null;
      } | null;
    } | null;
  } | null;
};

export const GET_WRITE_SECTION_DATA = `
  query GetWriteSectionData {
    page(id: 8, idType: DATABASE_ID) {
      homapageFieldValue {
        homepageHeroSectionFieldValue {
          boultPoints
          heroSectionImageUpperText
          write
          writeSectionDesbctionInFirstWords
          writeSectionHeadingInFirstWords
          firstSectionWriteHeading
          thirdSectionWriteHeading
          thirdSectionWriteDescription
          third
          secondSectionWriteDescription
          secondSectionWriteHeading
          secondWriteSectionHeadingInFirstWords
          writeFeaturedImage {
            node {
              altText
              sourceUrl
            }
          }
        }
      }
    }
  }
`;

const data = await fetchGraphQL<WriteSectionResponse>(
  GET_WRITE_SECTION_DATA
);

const writeSection =
  data.page?.homapageFieldValue?.homepageHeroSectionFieldValue;


export default function WriteSection() {
  return (
    <section className="bg-[#ffe0a6] w-full py-12 lg:py-16">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[150px]">
        <p className="font-sans font-bold text-[#bd2e65] text-[18px] tracking-[2.16px] uppercase mb-6">
          {writeSection?.write}
        </p>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
          {/* Autograph */}
          <div className="border border-[#c7c5c5] w-[237px] h-[237px] shrink-0 overflow-hidden">
            {writeSection?.writeFeaturedImage?.node && (
              <img
                className="w-full h-full object-cover"
                src={writeSection.writeFeaturedImage.node.sourceUrl}
                alt={writeSection.writeFeaturedImage.node.altText}
              />
            )}
          </div>

          {/* Why / What / Who */}
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-10 lg:gap-12 flex-1">

              <div  className="flex-1 min-w-0">
                <p className="font-serif not-italic text-[30px] leading-normal mb-3">
                  <em className="font-serif italic text-[#bd2e65]"> {writeSection?.writeSectionHeadingInFirstWords} {" "}</em>
                  {writeSection?.firstSectionWriteHeading}
                </p>
                <p className="font-sans font-normal text-[#18343e] text-[18px] leading-[28px]">
                  {writeSection?.writeSectionDesbctionInFirstWords}
                </p>
              </div> 

              <div className="flex-1 min-w-0">
                <p className="font-serif not-italic text-[30px] leading-normal mb-3">
                  <em className="font-serif italic text-[#bd2e65]">{writeSection?.secondWriteSectionHeadingInFirstWords}{" "}</em>
                  {writeSection?.secondSectionWriteHeading}
                </p>
                <p className="font-sans font-normal text-[#18343e] text-[18px] leading-[28px]">
                  {writeSection?.secondSectionWriteDescription}
                </p>
              </div>

              <div className="flex-1 min-w-0">
                <p className="font-serif not-italic text-[30px] leading-normal mb-3">
                  <em className="font-serif italic text-[#bd2e65]">{writeSection?.third} </em>
                   {writeSection?.thirdSectionWriteHeading}
                </p>
                <p className="font-sans font-normal text-[#18343e] text-[18px] leading-[28px]">
                  {writeSection?.thirdSectionWriteDescription}
                </p>
              </div>

          </div>
        </div>
      </div>
    </section>
  );
}
