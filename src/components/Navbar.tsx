import { motion } from "motion/react";
import { Home, Calendar, MapPinned, Users, Shield } from "lucide-react";
import { type ComponentType, useEffect, useRef, useState } from "react";
import { COMMUNITY_NAME } from "../config/site";
import PillNav from "./PillNav";

type NavItem = {
  id: string;
  label: string;
  href: string;
  icon?: ComponentType<{ size?: number }>;
};

const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home", href: "#home", icon: Home },
  { id: "events", label: "Events", href: "#events", icon: Calendar },
  { id: "ecosystem", label: "Ecosystem", href: "#ecosystem" },
  { id: "roadmap", label: "Roadmap", href: "#roadmap", icon: MapPinned },
  { id: "impact", label: "Impact", href: "#impact" },
  { id: "team", label: "Team", href: "#team", icon: Users },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const activeRef = useRef(activeSection);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    activeRef.current = activeSection;
  }, [activeSection]);

  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.id).filter((id, index, arr) => arr.indexOf(id) === index);
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) return;

    const updateActiveSection = () => {
      if (window.scrollY < 120) {
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
        if (window.scrollY + triggerOffset >= sectionTop) {
          nextActive = section.id;
        } else {
          break;
        }
      }

      if (nextActive !== activeRef.current) {
        activeRef.current = nextActive;
        setActiveSection(nextActive);
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <>
      {/* Desktop Top Nav */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed left-1/2 z-50 hidden w-[95%] max-w-6xl -translate-x-1/2 items-center gap-6 rounded-full border backdrop-blur-xl md:flex ${
          isScrolled
            ? "top-4 border-white/10 bg-surface/90 px-8 py-2.5 shadow-[0px_20px_40px_rgba(0,0,0,0.45)]"
            : "top-6 border-white/5 bg-surface/70 px-8 py-3 shadow-[0px_24px_48px_rgba(0,0,0,0.4)]"
        }`}
      >
        <div className="min-w-[220px] text-xl font-bold tracking-tighter text-on-surface font-headline flex items-center gap-2">
          <Shield className="text-primary" size={24} />
          {COMMUNITY_NAME}
        </div>
        <PillNav
          items={NAV_ITEMS.map((item) => ({ label: item.label, href: item.href }))}
          activeHref={`#${activeSection}`}
          className="w-full"
          ease="power2.easeOut"
          baseColor="#f6f3f5"
          pillColor="#95a9ff"
          hoveredPillTextColor="#0e0e10"
          pillTextColor="#f6f3f5"
          initialLoadAnimation={false}
          showLogo={false}
          showMobileToggle={false}
          onItemClick={(href) => {
            const id = href.replace(/^#/, "");
            if (!id) return;
            activeRef.current = id;
            setActiveSection(id);
          }}
        />
        <a
          href="#community"
          className="shrink-0 bg-gradient-to-r from-primary to-primary-container text-on-primary font-semibold px-6 py-2 rounded-full scale-95 active:scale-90 transition-transform text-sm"
        >
          Join Sanctum
        </a>
      </motion.nav>

      {/* Mobile Top Bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-surface/80 backdrop-blur-lg border-b border-white/5 flex items-center justify-between px-6 z-50">
        <div className="text-lg font-bold tracking-tighter text-on-surface font-headline flex items-center gap-2">
          <Shield className="text-primary" size={20} />
          {COMMUNITY_NAME}
        </div>
        <div className="w-8 h-8 rounded-full bg-surface-container-highest border border-white/10 overflow-hidden">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeK-PSV66FMUqdJelXiEwS4KQJMbNzdnwGZpfLNsgfvXuObdiuVehsH1GwOv8sql-0zhyS8ZeDkw0z7HQdx3wrNslQJdrWEdmykX6ld3kaojBGV54lQKhqBf77NeDbRkizgqzdoyaKph6-HvBQkSqcgLzdE7EPMX_n3Jyoh4Z9L94sA_OQ6mq_8Tfs5MLw-X0y4bx2Hg68yk1W5VdCvdtigGw6q0Ea0jD4nqlgELFJMIEOn63p54O4fEY7dUYluNEuNpxhCxxObEvL" alt="User" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Mobile Bottom Nav */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] h-16 bg-surface/90 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-around px-4 z-50 shadow-2xl">
        {NAV_ITEMS.filter((item) => item.icon).map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <motion.a
              key={`mobile-${item.id}`}
              href={item.href}
              onClick={() => {
                activeRef.current = item.id;
                setActiveSection(item.id);
              }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.92 }}
              className={`relative rounded-full p-3 transition-colors ${
                isActive
                  ? "text-on-primary shadow-[0_0_15px_rgba(149,169,255,0.4)]"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              {isActive && (
                <motion.span
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 rounded-full bg-primary"
                />
              )}
              {Icon ? <Icon size={20} className="relative z-10" /> : null}
            </motion.a>
          );
        })}
      </div>
    </>
  );
}
