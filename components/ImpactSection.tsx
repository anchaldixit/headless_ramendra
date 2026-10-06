import type { ReactNode } from 'react';
// import { fetchGraphQL } from "@/lib/wpgraphql";

// import Image from "next/image";


// export type ImpactSectionResponse = {
//   page: {
//     homapageFieldValue: {
//       homepageImpactSectionFieldValue: {
//         impactMainHeading: string | null;
//         impactLeftSideKeyPoints: {
//           impactLeftSidePoints: string | null;
//           impactRightSidePoints: string | null;
//         }[] | null;
//       } | null;
//     } | null;
//   } | null;
// };

// export const GET_IMPACT_DATA = `
//   query GetImpactData {
//     page(id: 8, idType: DATABASE_ID) {
//       homapageFieldValue {
//         homepageImpactSectionFieldValue {
//           impactMainHeading
//           impactLeftSideKeyPoints {
//             impactLeftSidePoints
//             impactRightSidePoints
//           }
//         }
//       }
//     }
//   }
// `;

// const data = await fetchGraphQL<ImpactSectionResponse>(
//   GET_IMPACT_DATA
// );

// const impactData =
//   data.page?.homapageFieldValue?.homepageImpactSectionFieldValue;



// Impact section — data ready for WordPress/GraphQL
const leftStats = [
  {
    text: (
      <>
        <strong className="text-[#087984]">1.5 million+</strong>
        {" copies through the National Book Trust....."}
      </>
    ),
  },
  {
    text: (
      <>
        {"Featured in "}
        <strong className="text-[#087984]">31 school textbooks</strong>
        {" across CBSE, ICSE and other boards; six books recommended by CBSE as supplementary reading."}
      </>
    ),
  },
  {
    text: (
      <>
        {"One story appeared in a "}
        <strong className="text-[#087984]">ninth-grade reader in Norway.</strong>
      </>
    ),
  },
  {
    text: (
      <>
        <em className="italic">Paplu, the Giant</em>
        {" reached children through Pratham Books' One Day, One Story initiative: 600+ Story Champions, 1,000+ sessions and "}
        <strong className="text-[#087984]">25+ languages</strong>
        {". Google volunteers extended its reach, and Radio Mirchi adapted it into a five-language audiobook."}
      </>
    ),
  },
];

const rightStats = [
  {
    text: (
      <>
        {"Stories translated into "}
        <strong className="text-[#087984]">33 languages</strong>
        {"."}
      </>
    ),
  },
  {
    text: (
      <>
        <em className="italic">Internet in the Jungle</em>
        {" appeared in a Grade 5 textbook in Sri Lanka, with "}
        <strong className="text-[#087984]">3.2 lakh copies</strong>
        {" distributed."}
      </>
    ),
  },
  {
    text: (
      <>
        {"One story became a Japanese "}
        <strong className="text-[#087984]">Kamishibai</strong>
        {"; two more were adapted in English."}
      </>
    ),
  },
];

type StatItem = { text: ReactNode };

function StatList({ items }: { items: StatItem[] }) {
  return (
    <div className="flex flex-col">
      {items.map((item, i) => (
        <div key={i}>
          <div className="w-full h-px bg-[#cbd1ce]" />
          <p className="font-sans font-normal text-[#18343e] text-[20px] leading-[28px] py-4">
            {item.text}
          </p>
        </div>
      ))}
      <div className="w-full h-px bg-[#cbd1ce]" />
    </div>
  );
}

export default function ImpactSection() {
  return (
    <section id="impact" className="bg-[#fffdf8] w-full py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[150px]">
        {/* Heading */}
        <div className="max-w-[630px] mb-12">
          <p className="font-sans font-bold text-[#bd2e65] text-[18px] tracking-[2.16px] uppercase mb-3">
            IMPACT
          </p>
          <h2 className="font-serif not-italic text-[#18343e] text-[48px] lg:text-[64px] leading-normal">
            A story travels{" "}
            <em className="font-serif italic text-[#bd2e65]">further</em>
            <br />
            than its pages.
          </h2>
       </div>

      

        {/* Two column stat lists */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
          <StatList items={leftStats} />
          <StatList items={rightStats} />
        </div>
      </div>
    </section>
  );
}
