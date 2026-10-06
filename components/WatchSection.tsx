// Watch section — video/talk data ready for WordPress/GraphQL
const featuredVideos = [
  {
    src: "/assets/4fbcc.png",
    title: "Featured talk",
    label: "TEDx Talk",
    description: "Ramen on the power of stories and the life behind them.",
  },
  {
    src: "/assets/7fa5b.png",
    title: "Ramen, in motion",
    label: "On stage & with audiences",
    description: "Storytelling, speaking and the joy of connecting.",
  },
];

const moreVideos = [
  {
    src: "/assets/19312.png",
    title: "Spill The Ink",
    description: "Art, life and resilience.",
  },
  {
    src: "/assets/6b6e2.png",
    title: "The stories behind the storyteller",
    description: "Writing, books and life.",
  },
  {
    src: "/assets/9ff95.png",
    title: "Finding humour through cancer",
    description: "Cancer, humour and resilience.",
  },
];

export default function WatchSection() {
  return (
    <section id="watch" className="bg-[#103f4b] w-full py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[150px]">
        {/* Section heading */}
        <div className="max-w-[630px] mb-12">
          <p className="font-sans font-bold text-[#fecb69] text-[18px] tracking-[2.16px] uppercase mb-3">
            WATCH
          </p>
          <h2 className="font-serif not-italic text-white text-[48px] lg:text-[64px] leading-normal mb-4">
            Words are only{" "}
            <em className="font-serif italic text-[#fecb69]">half the story.</em>
          </h2>
          <p className="font-sans font-normal text-white text-[20px] leading-normal">
            On stage, in conversation, and wherever a story finds its audience.
          </p>
        </div>

        {/* Featured videos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
          {featuredVideos.map((video) => (
            <div key={video.title} className="relative group cursor-pointer">
              <div className="border border-white/24 h-[280px] lg:h-[370px] overflow-hidden relative">
                <img
                  src={video.src}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
                {/* Play icon */}
                <div className="absolute bottom-6 left-6">
                  <img src="/assets/0d1bb.svg" alt="Play" width={45} height={32} className="block" />
                </div>
              </div>
              <div className="mt-4">
                <p className="font-serif not-italic text-white text-[28px] leading-normal mb-2">
                  {video.label}
                </p>
                <p className="font-sans font-normal text-white text-[18px] leading-[28px]">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/24 my-12" />

        {/* More talks heading */}
        <h3 className="font-serif not-italic text-white text-[44px] leading-normal mb-8">
          More talks &amp; interviews
        </h3>

        {/* More videos grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {moreVideos.map((video) => (
            <div key={video.title} className="group cursor-pointer">
              <div className="relative h-[200px] overflow-hidden mb-4">
                <img
                  src={video.src}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                {/* Play icon */}
                <div className="absolute bottom-4 left-4">
                  <img src="/assets/0d1bb.svg" alt="Play" width={45} height={32} className="block" />
                </div>
              </div>
              <p className="font-serif not-italic text-white text-[24px] leading-normal mb-2">
                {video.title}
              </p>
              <p className="font-sans font-normal text-white text-[18px] leading-[28px]">
                {video.description}
              </p>
            </div>
          ))}
        </div>

        {/* Cancer Warrior feature card */}
        <div className="bg-[#15606d] grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
          <div className="h-[320px] lg:h-[521px] overflow-hidden">
            <img
              src="/assets/1d30d.png"
              alt="Crowned Mr India Cancer Warrior"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center gap-6 p-8 lg:p-12">
            <div>
              <h3 className="font-serif not-italic text-white text-[48px] lg:text-[62px] leading-normal mb-3">
                Crowned Mr India{" "}
                <em className="font-serif italic text-[#fecb69]">Cancer Warrior.</em>
              </h3>
              <p className="font-sans font-normal text-white text-[20px] leading-[28px] max-w-[394px]">
                Celebrating resilience, humour and living life to the fullest.
              </p>
            </div>
            <a
              href="#"
              className="font-sans font-medium text-[#fecb69] text-[20px] underline hover:no-underline transition-all"
            >
              See the moment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
