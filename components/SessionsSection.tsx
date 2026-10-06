import type { ReactNode } from 'react';

// Sessions section — session data ready for WordPress/GraphQL
type Session = {
  number: number;
  title: string;
  description: ReactNode;
  cta: string;
  href: string;
  audience: string;
  duration: string;
  groupSize: string;
};

const sessions: Session[] = [
  {
    number: 1,
    title: "Meet the Author",
    description:
      "An interactive session around books, stories, storytelling and conversations with young readers.",
    cta: "Invite Ramen",
    href: "#contact",
    audience: "Children & young adults",
    duration: "45–60 minutes",
    groupSize: "Classroom to auditorium",
  },
  {
    number: 2,
    title: "Corporate & Institutional Sessions",
    description: (
      <>
        <strong className="font-medium">The 4 Ps of Excellence</strong>
        {" Passion, Priority, Potential, Perspective.\n"}
        <strong className="font-medium">Managing Every Tumour with Humour</strong>
        {" A personal and uplifting exploration of resilience, hope, healing and humour."}
      </>
    ),
    cta: "Book a Corporate Session",
    href: "#contact",
    audience: "Teams, professionals, colleges & institutions",
    duration: "45–60 minutes",
    groupSize: "Flexible",
  },
  {
    number: 3,
    title: "Parenting Workshops",
    description:
      "Connecting before correcting, through humour, stories and practical insights on empathy, trust and communication.",
    cta: "Request a Parenting Workshop",
    href: "#contact",
    audience: "Parents & parent communities",
    duration: "45–60 minutes",
    groupSize: "Flexible",
  },
];

export default function SessionsSection() {
  return (
    <section id="sessions" className="bg-[#fffdf8] w-full py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[150px]">
        {/* Heading */}
        <div className="max-w-[630px] mb-10">
          <p className="font-sans font-bold text-[#bd2e65] text-[18px] tracking-[2.16px] uppercase mb-3">
            BOOK A SESSION
          </p>
          <h2 className="font-serif not-italic text-[#18343e] text-[48px] lg:text-[64px] leading-normal mb-4">
            {"Let's make room"}
            <br />
            {"for a "}
            <em className="font-serif italic text-[#bd2e65]">good story.</em>
          </h2>
          <p className="font-sans font-normal text-[#18343e] text-[20px] leading-[28px]">
            For young readers, working teams and parent communities.
          </p>
        </div>

        {/* Session list */}
        <div className="flex flex-col divide-y divide-[#cbd1ce] border-t border-[#cbd1ce]">
          {sessions.map((session) => (
            <div
              key={session.number}
              className="py-8 lg:py-10 flex flex-col lg:flex-row gap-8 lg:gap-16 items-start"
            >
              {/* Session info */}
              <div className="lg:w-[530px] shrink-0">
                <ol className="list-decimal text-[#18343e] font-serif not-italic text-[28px] leading-normal" start={session.number}>
                  <li className="ms-10">
                    <span>{session.title}</span>
                  </li>
                </ol>
                <div className="mt-3 ml-2 space-y-2">
                  <p className="font-sans font-normal text-[#18343e] text-[18px] leading-[28px]">
                    {session.description}
                  </p>
                  <a
                    href={session.href}
                    className="block font-sans font-medium text-[#bd2e65] text-[20px] leading-[32px] underline hover:no-underline transition-all"
                  >
                    {session.cta}
                  </a>
                </div>
              </div>

              {/* Session details */}
              <div className="flex flex-wrap gap-8 text-[18px]">
                <div className="flex flex-col gap-3 min-w-[160px]">
                  <p className="font-sans font-bold text-[#bd2e65] tracking-[2.16px] uppercase leading-[18px]">
                    Audience
                  </p>
                  <p className="font-sans font-normal text-[#18343e] leading-[28px]">
                    {session.audience}
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="font-sans font-bold text-[#bd2e65] tracking-[2.16px] uppercase leading-[18px]">
                    Duration
                  </p>
                  <p className="font-sans font-normal text-[#18343e] leading-[28px]">
                    {session.duration}
                  </p>
                </div>
                <div className="flex flex-col gap-3 min-w-[160px]">
                  <p className="font-sans font-bold text-[#bd2e65] tracking-[2.16px] uppercase leading-[18px]">
                    Group size
                  </p>
                  <p className="font-sans font-normal text-[#18343e] leading-[28px]">
                    {session.groupSize}
                  </p>
                </div>
              </div>
            </div>
          ))}
          <div className="h-px w-full" />
        </div>
      </div>
    </section>
  );
}
