// Footer — reusable across all pages; social/contact data ready for WordPress/GraphQL
const socialLinks = [
  { name: "LinkedIn", icon: "/assets/eb9c0.svg", href: "https://linkedin.com" },
  { name: "Instagram", icon: "/assets/9e82f.svg", href: "https://instagram.com" },
  { name: "YouTube", icon: "/assets/9e82f.svg", href: "https://youtube.com" },
];

export default function Footer() {
  return (
    <footer className="bg-[#103f4b] w-full">
      {/* Divider */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[150px]">
        <div className="w-full h-px bg-white/24 mt-0" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-[150px] py-10">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          {/* Logo block */}
          <div className="shrink-0">
            <div className="flex items-center gap-3">
              <span className="font-serif italic text-white text-[42px] leading-none">
                Ramen<span className="text-[#bd2e65]">.</span>
              </span>
              <div className="w-px h-[23px] bg-[#cbd1ce] mx-3 hidden sm:block" />
              <div className="hidden sm:block">
                <p className="font-sans font-bold text-white text-[17px] tracking-[2.72px] uppercase leading-none">
                  Ramendra Kumar
                </p>
                <p className="font-sans text-[14.5px] tracking-[0.58px] uppercase leading-none mt-1">
                  <span className="text-white">WRITER </span>
                  <span className="font-black text-[#bd2e65]">·</span>
                  <span className="text-[#fecb69]"> STORYTELLER </span>
                  <span className="font-black text-[#bd2e65]">·</span>
                  <span className="text-white"> SPEAKER</span>
                </p>
              </div>
            </div>
          </div>

          {/* Contact + Social */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <p className="font-sans font-normal text-white text-[18px]">
              <a href="mailto:hello@ramendra.in" className="underline hover:text-[#fecb69] transition-colors">
                hello@ramendra.in
              </a>
              <span className="text-white/60 mx-3">|</span>
              <span>Bengaluru, India</span>
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-5">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <img src="/assets/eb9c0.svg" alt="LinkedIn" width={36} height={36} className="block" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                <img src="/assets/9e82f.svg" alt="Instagram" width={36} height={36} className="block" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
                <img src="/assets/9e82f.svg" alt="YouTube" width={36} height={36} className="block" />
              </a>
              <a href="#" target="_blank" rel="noreferrer" aria-label="Profile">
                <img
                  src="/assets/f0577.png"
                  alt="Profile"
                  width={36}
                  height={36}
                  className="block rounded-full object-cover"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[150px]">
        <div className="w-full h-px bg-white/24" />
        <div className="py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="font-sans font-normal text-[#c6c3c3] text-[18px]">© 2026 Ramendra Kumar</p>
          <p className="font-sans font-normal text-[#c6c3c3] text-[18px]">
            Web Design &amp; Development{" "}
            <a href="http://atwozsites.com/" target="_black" className="underline hover:text-white transition-colors">
              a2z Sites
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
