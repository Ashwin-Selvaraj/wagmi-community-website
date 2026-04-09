"use client";

import Link from "next/link";
import { useState } from "react";

type NavItem = {
  label: string;
  href: string;
};

type NavbarProps = {
  brandLabel?: string;
  brandHref?: string;
  navItems?: NavItem[];
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
};

const DEFAULT_ITEMS: NavItem[] = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Events", href: "#" },
  { label: "Roadmap", href: "#" },
  { label: "Team", href: "#" },
];

export default function Navbar({
  brandLabel = "WAGMI",
  brandHref = "#",
  navItems = DEFAULT_ITEMS,
  ctaLabel = "Join Community",
  ctaHref = "#",
  className = "",
}: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`sticky top-0 z-50 px-4 pt-4 sm:px-6 ${className}`}>
      <nav
        className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-[#0b1020]/85 px-4 py-3 shadow-[0_0_45px_rgba(90,96,255,0.12)] backdrop-blur-md sm:px-6"
        aria-label="Main navigation"
      >
        <Link
          href={brandHref}
          className="text-sm font-semibold tracking-[0.22em] text-white sm:text-base"
        >
          {brandLabel}
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="text-sm text-slate-300 transition-colors duration-200 hover:text-white"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Link
            href={ctaHref}
            className="rounded-full border border-indigo-400/40 bg-indigo-500/80 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-400"
          >
            {ctaLabel}
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-white/15 p-2 text-slate-200 transition hover:text-white lg:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span className="sr-only">
            {isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          </span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-5 w-5"
          >
            {isMenuOpen ? (
              <path d="M6 6L18 18M6 18L18 6" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="mx-auto mt-2 w-full max-w-6xl rounded-2xl border border-white/10 bg-[#0b1020]/95 p-4 shadow-[0_0_40px_rgba(90,96,255,0.14)] backdrop-blur-md lg:hidden"
        >
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={`mobile-${item.label}`}>
                <Link
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-sm text-slate-200 transition hover:bg-white/5 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={ctaHref}
            className="mt-3 inline-flex w-full items-center justify-center rounded-full border border-indigo-400/40 bg-indigo-500/80 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-400"
            onClick={() => setIsMenuOpen(false)}
          >
            {ctaLabel}
          </Link>
        </div>
      )}
    </header>
  );
}
