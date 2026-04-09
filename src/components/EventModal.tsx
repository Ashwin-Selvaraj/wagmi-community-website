import { CalendarDays, Clock3, MapPin, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { type CommunityEvent } from "../config/events";

type EventModalProps = {
  event: CommunityEvent | null;
  onClose: () => void;
};

const prettyType = (type: CommunityEvent["type"]) => type.charAt(0).toUpperCase() + type.slice(1);
const prettyStatus = (status: CommunityEvent["status"]) =>
  status === "live" ? "Live" : "Upcoming";

export default function EventModal({ event, onClose }: EventModalProps) {
  return (
    <AnimatePresence>
      {event ? (
        <motion.div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-white/10 bg-surface-container p-6 md:p-8"
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.22 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full bg-surface-container-high p-2 text-on-surface-variant transition hover:text-on-surface"
              aria-label="Close event details"
            >
              <X size={16} />
            </button>

            <div className="mb-5 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-primary/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
                {prettyType(event.type)}
              </span>
              <span
                className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest ${
                  event.status === "live"
                    ? "bg-red-500/20 text-red-300 border border-red-400/40"
                    : "bg-emerald-500/15 text-emerald-300 border border-emerald-400/30"
                }`}
              >
                {prettyStatus(event.status)}
              </span>
              <span className="rounded-full bg-surface-container-high px-3 py-1 text-xs font-semibold text-on-surface-variant">
                {event.location}
              </span>
            </div>

            <h3 className="mb-3 text-2xl font-bold tracking-tight text-on-surface md:text-3xl">{event.title}</h3>

            <p className="mb-5 text-sm leading-relaxed text-on-surface-variant">
              {event.fullDescription ?? event.description}
            </p>

            <div className="mb-6 grid gap-2 text-sm text-on-surface-variant">
              {event.date ? (
                <p className="inline-flex items-center gap-2">
                  <CalendarDays size={16} />
                  {event.date}
                </p>
              ) : null}
              {event.time ? (
                <p className="inline-flex items-center gap-2">
                  <Clock3 size={16} />
                  {event.time}
                </p>
              ) : null}
              <p className="inline-flex items-center gap-2">
                <MapPin size={16} />
                {event.location === "Offline" ? event.venue ?? "Venue details shared after registration" : "Online"}
              </p>
            </div>

            {event.agenda?.length ? (
              <div className="mb-8">
                <p className="mb-3 text-xs font-bold uppercase tracking-widest text-on-surface-variant">Agenda / Topics Covered</p>
                <ul className="space-y-2 text-sm text-on-surface">
                  {event.agenda.map((topic) => (
                    <li key={topic} className="rounded-xl bg-surface-container-high px-4 py-2">
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <a
              href={event.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-xl bg-gradient-to-r from-primary to-primary-container px-5 py-3 text-sm font-bold text-on-primary transition hover:opacity-95"
            >
              {event.linkType === "luma" ? "Join via Luma" : "Register Now"}
            </a>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
