// Education + background section — data ready for WordPress/GraphQL
const backgroundItems = [
  {
    icon: "/assets/35fc7.svg",
    innerIcon: "/assets/e3179.svg",
    title: "Education",
    description:
      "An alumnus of Hyderabad Public School (HPS), Begumpet, an Engineer & an MBA.",
  },
  {
    icon: "/assets/b69e4.svg",
    innerIcon: null,
    title: "Corporate career",
    description:
      "Former General Manager & Chief of Corporate Communications at Steel Authority of India Ltd (SAIL).",
  },
];

export default function EducationSection() {
  return (
    <section className="bg-[#fffdf8] w-full py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[150px]">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* Left heading */}
          <div className="lg:w-[488px] shrink-0">
            <p className="font-sans font-bold text-[#bd2e65] text-[18px] tracking-[2.16px] uppercase mb-3">
              EDUCATION &amp; PROFESSIONAL BACKGROUND
            </p>
            <h2 className="font-serif not-italic text-[#18343e] text-[48px] lg:text-[64px] leading-normal">
              A broader journey behind the{" "}
              <em className="font-serif italic text-[#bd2e65]">books.</em>
            </h2>
          </div>

          {/* Right: education + career */}
          <div className="flex-1 flex flex-col sm:flex-row gap-8 sm:gap-12 items-start">
            {backgroundItems.map((item, i) => (
              <div key={item.title} className="flex items-start gap-6">
                {i > 0 && (
                  <div className="hidden sm:block w-px bg-[rgba(24,52,62,0.3)] self-stretch" />
                )}
                <div className="flex flex-col gap-4">
                  <img src={item.icon} alt="" width={80} height={80} className="block shrink-0" />
                  <div>
                    <p className="font-serif not-italic text-[#18343e] text-[28px] leading-normal mb-3">
                      {item.title}
                    </p>
                    <p className="font-sans font-normal text-[#18343e] text-[18px] leading-[28px] max-w-[280px]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Selected appearances */}
        <div className="mt-16 lg:mt-24 flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left heading */}
          <div className="lg:w-[488px] shrink-0">
            <p className="font-sans font-bold text-[#bd2e65] text-[18px] tracking-[2.16px] uppercase mb-3">
              SELECTED APPEARANCES
            </p>
            <h2 className="font-serif not-italic text-[#18343e] text-[48px] lg:text-[64px] leading-normal mb-4">
              Bringing stories to the{" "}
              <em className="font-serif italic text-[#bd2e65]">stage.</em>
            </h2>
            <p className="font-sans font-normal text-[#18343e] text-[20px] leading-[32px]">
              From literary festivals to global forums, sharing stories that spark curiosity,
              compassion and change.
            </p>
          </div>

          {/* Right: festivals lists */}
          <div className="flex-1 flex flex-col sm:flex-row gap-8 sm:gap-12 items-start">
            <ul className="list-disc font-sans font-normal text-[#18343e] text-[20px] leading-[40px] space-y-0 ml-6">
              {["Jaipur Literature Festival", "Bookaroo", "Hyderabad Literary Festival", "Bangalore Literature Festival", "Chandigarh Literature Festival"].map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <div className="hidden sm:block w-px bg-[#cbd1ce] self-stretch" />
            <ul className="list-disc font-sans font-normal text-[#18343e] text-[20px] leading-[40px] space-y-0 ml-6">
              {["Chennai Storytelling Festival", "Sharjah Children's Reading Festival", "IBBY World Congresses in Copenhagen & Athens", "Literary events in Sri Lanka"].map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
