import Link from "next/link";
import { fetchGraphQL } from "@/lib/wpgraphql";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

// Hero section — "Meet Ramen." intro; text is ready for WordPress/GraphQL CMS data


type BooksPostsResponse = {
  posts: {
    edges: {
      node: {
        id: string;
        title: string;
        date: string;
      };
    }[];
  };
};

const booksData = await fetchGraphQL<BooksPostsResponse>(
  `
    query GetPostsEdges {
      posts {
        edges {
          node {
            id
            title
            date
          }
        }
      }
    }
  `,
);

const reviewBooks = booksData.posts.edges.map(
  (edge) => edge.node
);





export default async function HeroSection() {
  return (
    <section className="bg-[#ffe0a6] w-full">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row min-h-[640px]">
        {/* Left: hero image */}
        <div className="relative lg:w-1/2 shrink-0">
          <div className="relative w-full h-[420px] lg:h-[639px] overflow-hidden">
            <img
              src="/assets/202c3.png"
              alt="Ramendra Kumar"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>
          {/* Caption label */}
          <div className="bg-[#103f4b] px-5 py-3 inline-block">
            <p className="font-serif italic text-white text-[21px] leading-normal whitespace-nowrap">
              A story meets its audience
            </p>
          </div>
        </div>

        {/* Right: intro copy */}
        <div className="lg:w-1/2 flex items-start px-6 lg:pl-12 lg:pr-8 pt-10 lg:pt-[84px] pb-10">
          <div className="max-w-[482px] w-full">
            <p className="font-sans font-bold text-[#bd2e65] text-[17px] tracking-[2.04px] uppercase mb-3">
              WRITER · STORYTELLER · SPEAKER
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
              <a
                href="#contact"
                className="bg-[#bd2e65] text-white font-sans font-semibold text-[18px] px-6 py-3 hover:bg-[#a02455] transition-colors"
              >
                Send an enquiry
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=9044558419&amp;text=Hi,%20I’d%20like%20to%20discuss%20my books%20needs.&amp;type=phone_number&amp;app_absent=0"
                target="_blank"
                rel="noreferrer"
                className="border border-[rgba(24,52,62,0.3)] flex items-center gap-2 px-4 py-3 font-sans font-semibold text-[#18343e] text-[18px] hover:border-[#18343e] transition-colors"
              >
                <img src="/assets/a1730.png" alt="" width={21} height={21} className="shrink-0" />
                WhatsApp
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
