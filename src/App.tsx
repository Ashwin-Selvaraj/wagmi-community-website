import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Activities from "./components/Activities";
import EventsAndImpact from "./components/EventsAndImpact";
import Roadmap from "./components/Roadmap";
import Impact from "./components/Impact";
import CommunityCTA from "./components/CommunityCTA";
import PartnersAndTeam from "./components/PartnersAndTeam";
import { COMMUNITY_NAME } from "./config/site";

export default function App() {
  return (
    <div className="min-h-screen bg-surface selection:bg-primary/30">
      <Navbar />
      <main>
        <Hero />
        <EventsAndImpact />
        <Activities />
        <Roadmap />
        <Impact />
        <PartnersAndTeam />
        <CommunityCTA />
      </main>
      
      <footer className="py-12 px-6 bg-surface border-t border-white/5 text-center">
        <div className="max-w-7xl mx-auto">
          <div className="text-xl font-bold tracking-tighter text-on-surface font-headline mb-4">{COMMUNITY_NAME}</div>
          <p className="text-on-surface-variant text-sm mb-8">Building the Ethereum ecosystem in Coimbatore & Tiruppur.</p>
          <div className="flex justify-center gap-8 mb-8">
            <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">Twitter</a>
            <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">GitHub</a>
            <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">Discord</a>
          </div>
          <p className="text-on-surface-variant/50 text-xs">© 2024 {COMMUNITY_NAME} Community. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
