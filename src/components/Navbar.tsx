import { motion } from "motion/react";
import { Home, Calendar, MapPinned, Users, Shield, LayoutGrid, Sparkles } from "lucide-react";
import { type ComponentType, useEffect, useRef, useState } from "react";
import { COMMUNITY_NAME } from "../config/site";
import PillNav from "./PillNav";

type NavItem = {
  id: string;
  label: string;
  href: string;
  icon?: ComponentType<{ size?: number }>;
  /** Shown in the mobile bottom icon bar. */
  quickNav?: boolean;
};

const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home", href: "#home", icon: Home, quickNav: true },
  { id: "events", label: "Events", href: "#events", icon: Calendar, quickNav: true },
  { id: "ecosystem", label: "Ecosystem", href: "#ecosystem", icon: LayoutGrid, quickNav: true },
  { id: "roadmap", label: "Roadmap", href: "#roadmap", icon: MapPinned, quickNav: true },
  { id: "impact", label: "Impact", href: "#impact", icon: Sparkles, quickNav: true },
  { id: "team", label: "Team", href: "#team", icon: Users, quickNav: true },
];

const BOTTOM_NAV_ITEMS = NAV_ITEMS.filter((item) => item.quickNav);

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const activeRef = useRef(activeSection);

  useEffect(() => {
    activeRef.current = activeSection;
  }, [activeSection]);

  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.id).filter((id, i, arr) => arr.indexOf(id) === i);
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    let raf = 0;

    const onScrollOrResize = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const y = window.scrollY;
        setIsScrolled(y > 24);

        if (!sections.length) return;

        if (y < 120) {
          if (activeRef.current !== "home") {
            activeRef.current = "home";
            setActiveSection("home");
          }
          return;
        }

        const triggerOffset = 140;
        let nextActive = "home";
        for (const section of sections) {
          const sectionTop = section.getBoundingClientRect().top + window.scrollY;
          if (y + triggerOffset >= sectionTop) {
            nextActive = section.id;
          } else {
            break;
          }
        }
        if (nextActive !== activeRef.current) {
          activeRef.current = nextActive;
          setActiveSection(nextActive);
        }
      });
    };

    onScrollOrResize();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, []);

  const setSectionFromHref = (href: string) => {
    const id = href.replace(/^#/, "");
    if (!id) return;
    activeRef.current = id;
    setActiveSection(id);
  };

  return (
    <>
      {/* Desktop Top Nav */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed left-1/2 z-50 hidden w-[95%] max-w-6xl -translate-x-1/2 items-center gap-6 rounded-full border backdrop-blur-xl transition-[top,box-shadow,padding,background-color,border-color,backdrop-filter] duration-300 ease-in-out md:flex ${
          isScrolled
            ? "top-4 border-white/10 bg-surface/92 px-8 py-2.5 shadow-[0px_20px_40px_rgba(0,0,0,0.45)] backdrop-blur-2xl"
            : "top-6 border-white/5 bg-surface/72 px-8 py-3 shadow-[0px_24px_48px_rgba(0,0,0,0.4)] backdrop-blur-xl"
        }`}
      >
        <div className="flex min-w-[200px] max-w-[min(280px,28vw)] items-center gap-2 text-xl font-bold tracking-tighter text-on-surface font-headline">
          <Shield className="shrink-0 text-primary" size={24} aria-hidden />
          <span className="truncate">{COMMUNITY_NAME}</span>
        </div>
        <PillNav
          items={NAV_ITEMS.map((item) => ({ label: item.label, href: item.href }))}
          activeHref={`#${activeSection}`}
          className="w-full min-w-0"
          ease="power2.inOut"
          baseColor="#f6f3f5"
          pillColor="#95a9ff"
          hoveredPillTextColor="#0e0e10"
          pillTextColor="#f6f3f5"
          initialLoadAnimation={false}
          showLogo={false}
          showMobileToggle={false}
          onItemClick={(href) => setSectionFromHref(href)}
        />
        <a
          href="#community"
          className="inline-flex min-h-11 min-w-[8.5rem] shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-primary to-primary-container px-5 py-2.5 text-sm font-semibold text-on-primary transition-[transform,opacity] duration-200 ease-out hover:opacity-95 active:scale-[0.98]"
        >
          Join Community
        </a>
      </motion.nav>

      {/* Mobile top bar: brand (left) + primary CTA (right) */}
      <header
        className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.07] bg-surface/[0.96] shadow-[0_4px_32px_rgba(0,0,0,0.35)] backdrop-blur-2xl backdrop-saturate-150 md:hidden"
        style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
      >
        <div
          className="mx-auto flex h-14 max-w-2xl items-center justify-between gap-3"
          style={{
            paddingLeft: "max(1rem, env(safe-area-inset-left, 0px))",
            paddingRight: "max(1rem, env(safe-area-inset-right, 0px))",
          }}
        >
          <a
            href="#home"
            className="group flex min-w-0 flex-1 items-center gap-2.5 rounded-xl py-1 pr-1 outline-none transition-opacity hover:opacity-95 focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
            onClick={() => {
              activeRef.current = "home";
              setActiveSection("home");
            }}
          >
            <span
              className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-b from-surface-container-high to-surface-container shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
              aria-hidden
            >
              <Shield className="size-[18px] text-primary" strokeWidth={2} />
            </span>
            <span className="min-w-0 text-left">
              <span className="block truncate font-headline text-[0.9375rem] font-bold leading-tight tracking-tight text-on-surface sm:text-base">
                {COMMUNITY_NAME}
              </span>
              <span className="mt-0.5 block truncate text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-on-surface-variant sm:text-[0.6875rem]">
                Web3 community
              </span>
            </span>
          </a>
          <a
            href="#community"
            className="inline-flex min-h-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-primary to-primary-container px-3.5 py-2 text-xs font-semibold text-on-primary shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset] transition-[transform,opacity,box-shadow] duration-200 ease-out hover:opacity-95 hover:shadow-[0_0_24px_rgba(149,169,255,0.25)] active:scale-[0.98] sm:min-h-11 sm:px-4 sm:text-sm"
          >
            Join Community
          </a>
        </div>
      </header>

      {/* Mobile Bottom Nav — quick section icons */}
      <div
        className="fixed left-1/2 z-50 flex h-[4.25rem] w-[min(98vw,36rem)] max-w-full -translate-x-1/2 items-center justify-around gap-0.5 rounded-full border border-white/10 bg-surface/92 px-1.5 shadow-2xl backdrop-blur-xl backdrop-saturate-150 md:hidden"
        style={{
          bottom: "max(1rem, env(safe-area-inset-bottom, 0px))",
        }}
      >
        {BOTTOM_NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <motion.a
              key={`mobile-${item.id}`}
              href={item.href}
              aria-label={item.label}
              aria-current={isActive ? "page" : undefined}
              onClick={() => {
                activeRef.current = item.id;
                setActiveSection(item.id);
              }}
              whileTap={{ scale: 0.94 }}
              transition={{ type: "spring", stiffness: 520, damping: 28 }}
              className={`relative flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-full p-2.5 transition-colors duration-200 ease-in-out sm:min-h-12 sm:min-w-12 sm:p-3 ${
                isActive
                  ? "text-on-primary shadow-[0_0_15px_rgba(149,169,255,0.4)]"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              {isActive ? (
                <motion.span
                  layoutId="mobile-nav-pill"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  className="absolute inset-0 rounded-full bg-primary"
                />
              ) : null}
              {Icon ? <Icon size={20} className="relative z-10" /> : null}
            </motion.a>
          );
        })}
      </div>
    </>
  );
}
