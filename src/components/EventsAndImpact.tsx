import { motion } from "motion/react";
import { Calendar } from "lucide-react";
import { COMMUNITY_NAME } from "../config/site";

export default function EventsAndImpact() {
  return (
    <section className="py-24 px-6 bg-surface-container-low" id="events">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Upcoming Initiatives</h2>
            <p className="text-on-surface-variant">Reserve your spot at our next high-impact gatherings.</p>
          </div>
          <a
            href="#impact"
            className="inline-flex items-center px-6 py-3 rounded-2xl bg-surface-container-highest border border-outline-variant hover:border-primary/40 transition-all font-bold text-sm"
          >
            View Archive
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Event 1 */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="relative group overflow-hidden rounded-3xl md:rounded-[2.5rem] bg-surface min-h-[350px] md:min-h-[400px] flex flex-col justify-end p-6 md:p-8 border border-white/5"
          >
            <div className="absolute inset-0 z-0">
              <img 
                className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" 
                src="https://picsum.photos/seed/zk/800/600" 
                alt="ZK Proofs"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent"></div>
            </div>
            <div className="relative z-10">
              <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-[10px] font-bold mb-3 inline-block">WORKSHOP</span>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">ZK Proofs Masterclass</h3>
              <p className="text-on-surface-variant text-sm mb-6 flex items-center gap-2">
                <Calendar size={14} /> Oct 24 • Coimbatore
              </p>
              <button className="w-full py-3 md:py-4 bg-on-surface text-surface font-bold rounded-xl md:rounded-2xl hover:bg-primary hover:text-on-primary transition-all text-sm">
                Register Now
              </button>
            </div>
          </motion.div>

          {/* Event 2 */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="relative group overflow-hidden rounded-3xl md:rounded-[2.5rem] bg-surface min-h-[350px] md:min-h-[400px] flex flex-col justify-end p-6 md:p-8 border border-white/5"
          >
            <div className="absolute inset-0 z-0">
              <img 
                className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" 
                src="https://picsum.photos/seed/build/800/600" 
                alt="BuildETH"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent"></div>
            </div>
            <div className="relative z-10">
              <span className="px-3 py-1 rounded-full bg-secondary/20 text-secondary text-[10px] font-bold mb-3 inline-block">HACKATHON</span>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">{COMMUNITY_NAME} Build Tiruppur</h3>
              <p className="text-on-surface-variant text-sm mb-6 flex items-center gap-2">
                <Calendar size={14} /> Nov 12 • Tiruppur
              </p>
              <button className="w-full py-3 md:py-4 bg-on-surface text-surface font-bold rounded-xl md:rounded-2xl hover:bg-secondary hover:text-on-secondary transition-all text-sm">
                Join Waitlist
              </button>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
