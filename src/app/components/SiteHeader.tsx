"use client";

import { useState } from "react";

const navLinks = [
  { href: "#about", label: "品牌故事" },
  { href: "#products", label: "商品" },
  { href: "#ingredients", label: "成分" },
  { href: "#ritual", label: "保養儀式" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-ink/10 bg-cream/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6 md:py-5">
        <a href="#" className="font-serif text-lg tracking-[0.3em] text-forest sm:text-xl">
          森息 <span className="text-xs tracking-[0.4em] text-moss sm:text-sm">SENSI</span>
        </a>

        <ul className="hidden gap-8 text-sm tracking-widest text-ink/70 md:flex lg:gap-10">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-forest">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#products"
            className="rounded-full border border-forest px-4 py-2 text-xs tracking-widest text-forest transition hover:bg-forest hover:text-cream sm:px-5"
          >
            選購
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "關閉選單" : "開啟選單"}
            className="flex h-10 w-10 items-center justify-center text-forest md:hidden"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <ul
          id="mobile-menu"
          className="border-t border-ink/10 bg-cream px-5 pb-4 text-sm tracking-widest text-ink/80 md:hidden"
        >
          {navLinks.map((l) => (
            <li key={l.href} className="border-b border-ink/5 last:border-0">
              <a href={l.href} onClick={() => setOpen(false)} className="block py-4 hover:text-forest">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
