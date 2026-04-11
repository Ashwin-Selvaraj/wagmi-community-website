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
      <main className="px-3 pb-6 pt-4 md:px-5 md:pb-10 md:pt-5 space-y-6 md:space-y-10">
        <PageSection forcedPages={1}>
          <Hero />
        </PageSection>
        <PageSection>
          <EventsAndImpact />
        </PageSection>
        <div className="relative overflow-hidden rounded-[2rem] border border-white/5 p-2 md:rounded-[2.75rem] md:p-3">
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
      
      <footer className="mx-3 mb-3 md:mx-5 md:mb-5 py-16 md:py-20 px-6 md:px-8 bg-surface border border-white/5 rounded-[2rem] md:rounded-[2.75rem] text-center">
        <div className="max-w-7xl mx-auto">
          <div className="text-xl font-bold tracking-tighter text-on-surface font-headline mb-4">{COMMUNITY_NAME}</div>
          <p className="text-on-surface-variant text-sm mb-10 md:mb-12">Building the WEB3 ecosystem in Coimbatore & Tiruppur.</p>
          <p className="text-on-surface-variant/50 text-xs">© 2024 {COMMUNITY_NAME} Community. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
