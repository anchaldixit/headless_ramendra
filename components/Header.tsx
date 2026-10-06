"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Watch", href: "#watch" },
  { label: "Books", href: "#books" },
  { label: "Impact", href: "#impact" },
  { label: "Recognition", href: "#recognition" },
  { label: "Sessions", href: "#sessions" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="bg-[#fffdf7] h-[92px] w-full sticky top-0 z-50 shadow-sm">
      <div className="max-w-[1440px] mx-auto h-full px-6 lg:px-[150px] flex items-center justify-between">
        {/* Logo + identity */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-baseline gap-0 shrink-0" onClick={closeMenu}>
            <span
              className="font-serif italic text-[#18343e] text-[42px] leading-none"
              aria-label="Ramen"
            >
              Ramen<span className="text-[#bd2e65]">.</span>
            </span>
          </Link>
          <div className="hidden md:block w-px h-[23px] bg-[#cbd1ce] mx-3" aria-hidden />
          <div className="hidden md:block">
            <p className="font-sans font-bold text-[#18343e] text-[16px] tracking-[2.56px] uppercase leading-none">
              Ramendra Kumar
            </p>
            <p className="font-sans font-normal text-black text-[13px] tracking-[0.52px] uppercase leading-none mt-1">
              <span>WRITER </span>
              <span className="font-black text-[#bd2e65] text-[16px]">·</span>
              <span> STORYTELLER </span>
              <span className="font-black text-[#bd2e65] text-[16px]">·</span>
              <span> SPEAKER</span>
            </p>
          </div>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden lg:flex items-center gap-[30px]" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-sans font-normal text-black text-[18px] hover:text-[#bd2e65] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden md:flex bg-[#bd2e65] text-white font-sans font-semibold text-[18px] px-6 py-3 hover:bg-[#a02455] transition-colors"
        >
          Contact
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="block w-6 h-0.5 bg-[#18343e]" />
          <span className="block w-6 h-0.5 bg-[#18343e]" />
          <span className="block w-6 h-0.5 bg-[#18343e]" />
        </button>
      </div>

      {/* Mobile navigation */}
      {menuOpen && (
        <div
          id="mobile-nav"
          className="md:hidden absolute top-[92px] left-0 right-0 bg-[#fffdf7] border-t border-[#cbd1ce] z-50 px-6 py-4 flex flex-col gap-4 shadow-lg"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={closeMenu}
              className="font-sans font-normal text-black text-[18px] hover:text-[#bd2e65]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={closeMenu}
            className="bg-[#bd2e65] text-white font-sans font-semibold text-[18px] px-6 py-3 text-center"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
