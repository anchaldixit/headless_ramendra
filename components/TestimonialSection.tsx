import { fetchGraphQL } from "@/lib/wpgraphql";
import BookVideoPopup from "@/components/BookVideoPopup";

export type TestimonialSectionResponse = {
  page: {
    homapageFieldValue: {
      homepageHeroSectionFieldValue: {
        featuredBookAuthorQauts: string | null;
        featuredBookAuthorName: string | null;
        featuredBookCategory: string | null;
        featuredBookShortDetails: string | null;

        featuredBookVideo: {
          node: {
            file: string;
            filePath: string;
          } | null;
        } | null;

        featuredBookThumbnail: {
          node: {
            sourceUrl: string;
            altText: string | null;
          } | null;
        } | null;
      } | null;
    } | null;
  } | null;
};

export const GET_TESTIMONIAL_SECTION_DATA = `
  query GetTestimonialSectionData {
    page(id: 8, idType: DATABASE_ID) {
      homapageFieldValue {
        homepageHeroSectionFieldValue {
          featuredBookAuthorQauts
          featuredBookAuthorName
          featuredBookCategory
          featuredBookShortDetails

          featuredBookVideo {
            node {
              file
              filePath
            }
          }

          featuredBookThumbnail {
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

export default async function TestimonialSection() {
  const data = await fetchGraphQL<TestimonialSectionResponse>(
    GET_TESTIMONIAL_SECTION_DATA
  );

  const testimonialSections =
    data.page?.homapageFieldValue?.homepageHeroSectionFieldValue;

  /**
   * WordPress uploaded video URL
   */
  const videoPath =
    testimonialSections?.featuredBookVideo?.node?.filePath;

  const videoUrl = videoPath
    ? `https://orchid-otter-153984.hostingersite.com${videoPath}`
    : "";

  /**
   * Book thumbnail
   */
  const thumbnailUrl =
    testimonialSections?.featuredBookThumbnail?.node?.sourceUrl ||
    "/assets/f2b64.png";

  return (
    <section className="bg-[#fffdf8] w-full py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[150px]">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

          {/* Quote */}
          <div className="lg:w-[632px] shrink-0">

            <blockquote className="font-serif text-[#18343e] text-[40px] lg:text-[48px] leading-[60px]">
              {testimonialSections?.featuredBookAuthorQauts}
            </blockquote>

            <div className="mt-8 tracking-[2.88px]">

              <p className="font-sans font-bold text-[#18343e] text-[26px] leading-[32px]">
                {testimonialSections?.featuredBookAuthorName}
              </p>

              <p className="font-sans font-normal text-[#18343e] text-[24px] leading-[34px]">
                {testimonialSections?.featuredBookCategory}
              </p>

              <p className="font-sans font-normal text-[#18343e] text-[20px] leading-[32px]">
                {testimonialSections?.featuredBookShortDetails}
              </p>

            </div>
          </div>

          {/* Video / Book Image */}
          <div className="lg:flex-1 flex justify-center lg:justify-end">

            {videoUrl ? (
              <BookVideoPopup
                videoUrl={videoUrl}
                    thumbnailUrl={thumbnailUrl}
                    altText={
                      testimonialSections?.featuredBookThumbnail?.node
                        ?.altText || "Book by Ramendra Kumar"
                    }
              />
            ) : (
              <div className="w-[276px] h-[389px] overflow-hidden shrink-0">
                <img
                  src={thumbnailUrl}
                  alt={
                    testimonialSections?.featuredBookThumbnail?.node
                      ?.altText || "Book by Ramendra Kumar"
                  }
                  className="w-full h-full object-cover"
                />
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}