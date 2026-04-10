import { useMemo, useState } from "react";
import EventCard from "./EventCard";
import EventModal from "./EventModal";
import { events, type CommunityEvent } from "../config/events";
import { COMMUNITY_NAME } from "../config/site";

const featuredCourse: CommunityEvent = {
  id: 999,
  title: "🚀 Zero to Smart Contracts: Solidity Bootcamp",
  description: "A beginner-friendly program to help you start building smart contracts on Ethereum.",
  fullDescription:
    "A step-by-step program for beginners who want to move from curiosity to confidence in Ethereum development. You will learn Solidity foundations and ship your first smart contract.",
  agenda: [
    "Ethereum and EVM fundamentals",
    "Solidity basics and contract lifecycle",
    "Deploying contracts with modern tooling",
    "Guided project and mentor support",
  ],
  type: "course",
  status: "upcoming",
  location: "Online",
  date: "",
  time: "",
  linkType: "form",
  link: "https://forms.google.com/",
};

export default function EventsSection() {
  const [selectedEvent, setSelectedEvent] = useState<CommunityEvent | null>(null);
  const hasEvents = events.length > 0;
  const visibleEvents = useMemo(() => (hasEvents ? events : [featuredCourse]), [hasEvents]);

  return (
    <section className="bg-surface-container-low px-6 py-20 md:py-24" id="events">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="mb-3 text-4xl font-bold tracking-tight md:text-5xl">Events</h2>
            <p className="max-w-2xl text-on-surface-variant">
              {`Discover beginner-friendly sessions, workshops, and courses designed to onboard and grow Web3 builders in the ${COMMUNITY_NAME} community.`}
            </p>
          </div>
          <a
            href="#impact"
            className="inline-flex items-center rounded-2xl border border-outline-variant bg-surface-container-highest px-6 py-3 text-sm font-bold transition-all hover:border-primary/40"
          >
            View Archive
          </a>
        </div>

        {!hasEvents ? (
          <div className="mb-8 rounded-3xl border border-dashed border-white/15 bg-surface-container px-6 py-6">
            <p className="text-lg font-semibold text-on-surface">No upcoming events yet. Stay tuned!</p>
            <a
              href="#community"
              className="mt-3 inline-flex rounded-xl bg-primary/20 px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary/30"
            >
              Join our community to stay updated
            </a>
          </div>
        ) : null}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleEvents.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} onViewDetails={setSelectedEvent} />
          ))}
        </div>
      </div>

      <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
    </section>
  );
}
