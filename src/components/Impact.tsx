import { ExternalLink, CheckCircle2, Users2 } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import {
  IMPACT_COMMUNITY_REACH,
  IMPACT_EVENTS_HOSTED,
  IMPACT_FOCUS,
  PAST_EVENTS,
  type PastEvent,
} from "../config/site";

const FALLBACK_EVENT_IMAGE =
  "https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&w=1200&q=80";

const extractOgImage = (html: string): string | null => {
  const ogRegex = /<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i;
  const twitterRegex = /<meta[^>]+name=["']twitter:image["'][^>]+content=["']([^"']+)["']/i;
  const ogMatch = html.match(ogRegex)?.[1];
  if (ogMatch) return ogMatch;
  const twitterMatch = html.match(twitterRegex)?.[1];
  return twitterMatch ?? null;
};

const resolveEventImage = async (event: PastEvent): Promise<string> => {
  if (event.image) return event.image;

  const endpoints = [
    event.url,
    `https://r.jina.ai/http://${event.url.replace(/^https?:\/\//, "")}`,
  ];

  for (const endpoint of endpoints) {
    try {
      const response = await fetch(endpoint);
      if (!response.ok) continue;
      const html = await response.text();
      const extracted = extractOgImage(html);
      if (extracted) return extracted;
    } catch {
      // noop: try next strategy
    }
  }

  return FALLBACK_EVENT_IMAGE;
};

export default function Impact() {
  const [eventImages, setEventImages] = useState<Record<string, string>>({});

  const events = useMemo(() => PAST_EVENTS, []);

  useEffect(() => {
    let cancelled = false;

    const run = async () => {
      const entries = await Promise.all(
        events.map(async (event) => {
          const image = await resolveEventImage(event);
          return [event.url, image] as const;
        })
      );

      if (!cancelled) {
        setEventImages(Object.fromEntries(entries));
      }
    };

    run();

    return () => {
      cancelled = true;
    };
  }, [events]);

  return (
    <section className="section-x section-y bg-surface-container-low w-full min-w-0" id="impact">
      <div className="mx-auto w-full max-w-7xl">
        <div className="bg-surface rounded-[2rem] border border-white/5 p-6 sm:p-8 md:p-10 lg:p-12 md:rounded-[2.5rem]">
          <div className="section-heading-gap">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Last Season&apos;s Impact</h2>
            <p className="text-on-surface-variant max-w-3xl">
              A snapshot of high-signal events that strengthened our local WEB3 ecosystem with practical learning,
              community conversations, and sustained builder momentum.
            </p>
          </div>

          <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:mb-8 sm:gap-4">
            <div className="rounded-2xl bg-surface-container-low border border-white/10 px-5 py-4">
              <div className="flex items-center gap-3 mb-1">
                <CheckCircle2 size={18} className="text-primary" />
                <p className="text-xs uppercase tracking-widest text-on-surface-variant">Events Hosted</p>
              </div>
              <p className="text-2xl font-bold">{IMPACT_EVENTS_HOSTED}</p>
            </div>
            <div className="rounded-2xl bg-surface-container-low border border-white/10 px-5 py-4">
              <div className="flex items-center gap-3 mb-1">
                <Users2 size={18} className="text-secondary" />
                <p className="text-xs uppercase tracking-widest text-on-surface-variant">Community Reach</p>
              </div>
              <p className="text-2xl font-bold">{IMPACT_COMMUNITY_REACH}</p>
            </div>
            <div className="rounded-2xl bg-surface-container-low border border-white/10 px-5 py-4">
              <p className="text-xs uppercase tracking-widest text-on-surface-variant mb-1">Focus</p>
              <p className="text-2xl font-bold">{IMPACT_FOCUS}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-5">
            {events.map((event, idx) => (
              <article
                key={event.url}
                className={`group relative min-w-0 overflow-hidden border border-white/10 bg-surface-container-low transition-all duration-300 hover:border-primary/50 ${
                  idx % 2 === 0 ? "rounded-[2rem]" : "rounded-[1.4rem]"
                }`}
              >
                <a href={event.url} target="_blank" rel="noreferrer" className="block">
                  <img
                    src={eventImages[event.url] ?? FALLBACK_EVENT_IMAGE}
                    alt={event.title}
                    className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <p className="font-semibold text-white leading-snug line-clamp-3">{event.title}</p>
                    <div className="mt-2 inline-flex items-center gap-2 text-xs text-primary">
                      View on Luma
                      <ExternalLink size={13} />
                    </div>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
