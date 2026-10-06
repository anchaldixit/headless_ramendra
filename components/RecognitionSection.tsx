// Recognition section — data ready for WordPress/GraphQL
const roles = [
  {
    title: "Mentor",
    org: "Scholastic Writers Academy",
  },
  {
    title: "Jury Member",
    org: "Times of India Women AutHer Awards",
  },
  {
    title: "Author & Storyteller of the Year",
    org: "Talking Stories, London",
  },
];

export default function RecognitionSection() {
  return (
    <section id="recognition" className="bg-[#fde9e0] w-full py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[150px]">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left: awards */}
          <div className="lg:w-[500px] shrink-0">
            <p className="font-sans font-bold text-[#bd2e65] text-[18px] tracking-[2.16px] uppercase mb-6">
              RECOGNITION
            </p>

            <div className="relative mb-2" aria-hidden>
              <span className="font-serif not-italic text-[#103f4b] text-[140px] lg:text-[200px] leading-none opacity-[0.15] select-none pointer-events-none">
                41
              </span>
            </div>
            <p className="font-serif not-italic text-[#18343e] text-[48px] lg:text-[64px] leading-none mb-3 -mt-8 lg:-mt-14">
              national awards
            </p>
            <p className="font-serif not-italic text-[#18343e] text-[24px] lg:text-[28px] leading-normal mb-5">
              for children&apos;s literature
            </p>
            <p className="font-sans font-normal text-[#18343e] text-[20px] leading-[32px] max-w-[452px]">
              Recognition for stories that inform, inspire and ignite young minds across generations.
            </p>

            {/* Roles row */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-0 sm:divide-x sm:divide-[rgba(24,52,62,0.3)] mt-10">
              {roles.map((role) => (
                <div key={role.title} className="sm:px-6 first:pl-0 last:pr-0">
                  <p className="font-sans font-medium text-[#18343e] text-[20px] leading-[28px]">
                    {role.title}
                  </p>
                  <p className="font-sans font-normal text-[#18343e] text-[18px] leading-[24px]">
                    {role.org}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: award image + Lifetime Achievement */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="relative w-full overflow-hidden rounded-none h-[293px]">
              <img
                src="/assets/05230.png"
                alt="Ramendra Kumar receiving an award"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center">
              <p className="font-serif not-italic text-[#18343e] text-[28px] leading-normal">
                Lifetime Achievement Award
              </p>
              <p className="font-sans font-normal text-[#18343e] text-[20px] leading-[32px]">
                Public Relations Council of India (PRCI)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
