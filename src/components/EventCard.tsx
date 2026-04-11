import type { FC } from "react";
import { CalendarDays, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { type CommunityEvent } from "../config/events";

type EventCardProps = {
  event: CommunityEvent;
  onViewDetails: (event: CommunityEvent) => void;
  index: number;
};

const typeStyles: Record<CommunityEvent["type"], string> = {
  event: "bg-primary/20 text-primary border border-primary/30",
  workshop: "bg-secondary/20 text-secondary border border-secondary/30",
  course: "bg-tertiary/20 text-tertiary border border-tertiary/30",
};

const prettyType = (type: CommunityEvent["type"]) => type.charAt(0).toUpperCase() + type.slice(1);
const statusStyles: Record<CommunityEvent["status"], string> = {
  live: "bg-red-500/20 text-red-300 border border-red-400/40",
  upcoming: "bg-emerald-500/15 text-emerald-300 border border-emerald-400/30",
};

const EventCard: FC<EventCardProps> = ({ event, onViewDetails, index }) => {
  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      whileHover={{ scale: 1.015, y: -4 }}
      onClick={() => onViewDetails(event)}
      className="group flex h-full min-h-[340px] w-full flex-col rounded-[2rem] border border-white/10 bg-gradient-to-b from-surface-container-high to-surface-container p-7 md:p-8 text-left shadow-[0_16px_40px_rgba(0,0,0,0.24)] transition-all hover:border-primary/40 hover:shadow-[0_26px_56px_rgba(0,0,0,0.36)]"
    >
      <div className="mb-5 flex items-center justify-between gap-2">
        <span
          className={`inline-flex whitespace-nowrap rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-widest ${typeStyles[event.type]}`}
        >
          {prettyType(event.type)}
        </span>
        <span
          className={`inline-flex items-center whitespace-nowrap rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-widest ${statusStyles[event.status]}`}
        >
          {event.status}
        </span>
      </div>

      <h3 className="mb-3 line-clamp-2 min-h-[64px] text-2xl font-bold tracking-tight text-on-surface">{event.title}</h3>
      <p className="mb-7 line-clamp-2 min-h-[56px] text-base leading-relaxed text-on-surface-variant">{event.description}</p>

      <div className="mb-8 min-h-[54px] flex flex-col gap-2 text-sm text-on-surface-variant">
        <span className="inline-flex items-center gap-2">
          <MapPin size={13} />
          {event.location}
        </span>
        {event.date ? (
          <span className="inline-flex items-center gap-2">
            <CalendarDays size={14} />
            {event.date}
            {event.time ? ` • ${event.time}` : ""}
          </span>
        ) : null}
      </div>

      <span className="mt-auto inline-flex items-center self-start rounded-xl bg-on-surface px-5 py-2.5 text-sm font-bold text-surface transition-colors group-hover:bg-primary group-hover:text-on-primary">
        View Details
      </span>
    </motion.button>
  );
};

export default EventCard;
