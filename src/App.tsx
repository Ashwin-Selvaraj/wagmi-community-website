import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Activities from "./components/Activities";
import EventsAndImpact from "./components/EventsAndImpact";
import Roadmap from "./components/Roadmap";
import Impact from "./components/Impact";
import CommunityCTA from "./components/CommunityCTA";
import PartnersAndTeam from "./components/PartnersAndTeam";
import PageSection from "./components/PageSection";
import { COMMUNITY_NAME } from "./config/site";

export default function App() {
  return (
    <div className="min-h-screen bg-surface selection:bg-primary/30">
      <Navbar />
      <main className="space-y-4 px-3 pb-[max(5.25rem,calc(4.65rem+env(safe-area-inset-bottom,0px)))] pt-3 md:space-y-10 md:px-5 md:pb-10 md:pt-5">
        <PageSection forcedPages={1}>
          <Hero />
        </PageSection>
        <PageSection fillViewport={false}>
          <EventsAndImpact />
        </PageSection>
        <div className="relative overflow-hidden rounded-[2rem] border border-white/5 p-1.5 md:rounded-[2.75rem] md:p-3">
          <Activities />
        </div>
        <PageSection forcedPages={1}>
          <Roadmap />
        </PageSection>
        <PageSection forcedPages={1}>
          <Impact />
        </PageSection>
        <PageSection forcedPages={1}>
          <PartnersAndTeam />
        </PageSection>
        <PageSection forcedPages={1} fillViewport={false}>
          <CommunityCTA />
        </PageSection>
      </main>
      
      <footer className="mx-3 mb-3 rounded-[2rem] border border-white/5 bg-surface px-5 py-10 text-center md:mx-5 md:mb-5 md:rounded-[2.75rem] md:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-3 font-headline text-lg font-bold tracking-tighter text-on-surface md:mb-4 md:text-xl">{COMMUNITY_NAME}</div>
          <p className="mb-6 text-sm text-on-surface-variant md:mb-12">Building the WEB3 ecosystem in Coimbatore & Tiruppur.</p>
          <p className="text-on-surface-variant/50 text-xs">© 2024 {COMMUNITY_NAME} Community. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
