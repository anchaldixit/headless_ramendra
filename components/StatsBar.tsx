// Stats bar — data ready for WordPress/GraphQL

import { fetchGraphQL } from "@/lib/wpgraphql";
import { TestimonialSectionResponse } from "./TestimonialSection";
import { stat } from "fs/promises";
export type StateBarSectionResponse = {
  page: {
    homapageFieldValue: {
      homepageHeroSectionFieldValue: {
        statsbarLabelOne: string | null;
        books: string | null;
        statsbarLabelSecond: string | null;
        languages: string | null;
        statsbarLabelThird: string | null;
        storiesInSchoolTextbooks: string | null;
        statsbarLabelFourth: string | null;
        nbtCopiesSold: string | null;
      } | null;
    } | null;
  } | null;
};

export const GET_STATS_BAR_DATA = `
  query GetStatsBarData {
    page(id: 8, idType: DATABASE_ID) {
      homapageFieldValue {
        homepageHeroSectionFieldValue {
          statsbarLabelOne
          books
          statsbarLabelSecond
          languages
          statsbarLabelThird
          storiesInSchoolTextbooks
          nbtCopiesSold
          statsbarLabelFourth
        }
      }
    }
  }
`;

const data = await fetchGraphQL<StateBarSectionResponse>(
  GET_STATS_BAR_DATA
);

const statsData = data.page?.homapageFieldValue?.homepageHeroSectionFieldValue;




// const stats = [
//   { value: "55", label: "Books" },
//   { value: "33", label: "Languages" },
//   { value: "31", label: "Stories in school textbooks" },
//   { value: "1.5M+", label: "NBT copies sold" },
// ];

export default function StatsBar() {
  return (
    <section className="bg-[#fff4dc] w-full py-8 lg:h-[187px] flex items-center">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[150px] w-full">
        <div className="flex flex-wrap justify-center gap-10 lg:gap-20 text-center">
          {/* {stats.map((stat) => ( */}
            <div className="shrink-0">
              <p className="font-serif not-italic text-[#18343e] text-[52px] leading-normal">
                {statsData?.books}
              </p>
              <p className="font-sans font-medium text-[#5f5f60] text-[22px] leading-[44px]">
                {statsData?.statsbarLabelOne}
              </p>
            </div>

             <div className="shrink-0">
              <p className="font-serif not-italic text-[#18343e] text-[52px] leading-normal">
                {statsData?.languages}
              </p>
              <p className="font-sans font-medium text-[#5f5f60] text-[22px] leading-[44px]">
                {statsData?.statsbarLabelSecond}
              </p>
            </div>

             <div className="shrink-0">
              <p className="font-serif not-italic text-[#18343e] text-[52px] leading-normal">
                {statsData?.storiesInSchoolTextbooks}
              </p>
              <p className="font-sans font-medium text-[#5f5f60] text-[22px] leading-[44px]">
                {statsData?.statsbarLabelThird}
              </p>
            </div>

              <div className="shrink-0">
              <p className="font-serif not-italic text-[#18343e] text-[52px] leading-normal">
                {statsData?.nbtCopiesSold}
              </p>
              <p className="font-sans font-medium text-[#5f5f60] text-[22px] leading-[44px]">
                {statsData?.statsbarLabelFourth}
              </p>
            </div>

          {/* ))} */}
        </div>
      </div>
    </section>
  );
}
