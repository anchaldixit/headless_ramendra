import { fetchGraphQL } from "@/lib/wpgraphql";

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
            sourceUrl: string;
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
              sourceUrl
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

const data = await fetchGraphQL<TestimonialSectionResponse>(
  GET_TESTIMONIAL_SECTION_DATA
);

const testimonialSections =
  data.page?.homapageFieldValue?.homepageHeroSectionFieldValue;

export default function TestimonialSection() {
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

          {/* Book image */}
           <div className="lg:flex-1 flex justify-center lg:justify-end">
            <div className="w-[276px] h-[389px] overflow-hidden shrink-0">
              <img
                src={testimonialSections?.featuredBookThumbnail?.node?.sourceUrl || "/assets/f2b64.png"}
                alt={testimonialSections?.featuredBookThumbnail?.node?.altText || "Book by Ramendra Kumar"} 
                className="w-full h-full object-cover"
              />
            </div>
          </div> 

        </div>
      </div>
    </section>
  );
}