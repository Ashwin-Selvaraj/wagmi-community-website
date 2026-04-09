import { motion } from "motion/react";
import { Calendar, CheckCircle2, Users2 } from "lucide-react";

export default function EventsAndImpact() {
  return (
    <section className="py-24 px-6 bg-surface-container-low" id="events">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Upcoming Initiatives</h2>
            <p className="text-on-surface-variant">Reserve your spot at our next high-impact gatherings.</p>
          </div>
          <button className="px-6 py-3 rounded-2xl bg-surface-container-highest border border-outline-variant hover:border-primary/40 transition-all font-bold text-sm">
            View Archive
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-24">
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
              <h3 className="text-2xl md:text-3xl font-bold mb-2">WAGMI Build Tiruppur</h3>
              <p className="text-on-surface-variant text-sm mb-6 flex items-center gap-2">
                <Calendar size={14} /> Nov 12 • Tiruppur
              </p>
              <button className="w-full py-3 md:py-4 bg-on-surface text-surface font-bold rounded-xl md:rounded-2xl hover:bg-secondary hover:text-on-secondary transition-all text-sm">
                Join Waitlist
              </button>
            </div>
          </motion.div>
        </div>

        {/* Impact Section */}
        <div className="bg-surface p-10 md:p-16 rounded-[3rem] border border-white/5" id="impact">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Last Season's Impact</h2>
              <p className="text-on-surface-variant mb-10 leading-relaxed">
                Our previous series of "Solidity Summits" brought together the brightest minds in Southeast Asia to solve scaling bottlenecks. The results speak for themselves.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-full bg-surface-container-highest flex items-center justify-center text-primary border border-primary/20">
                    <CheckCircle2 size={32} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl">14 OSS Projects</h4>
                    <p className="text-sm text-on-surface-variant">Founded during our monthly hackathons.</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-full bg-surface-container-highest flex items-center justify-center text-secondary border border-secondary/20">
                    <Users2 size={32} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl">2.5k Attendees</h4>
                    <p className="text-sm text-on-surface-variant">Across 12 regional meetups in Q1-Q3.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 blur-[80px] rounded-full"></div>
              <img 
                className="rounded-3xl shadow-2xl relative z-10 border border-white/10" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDL9lSxLw4bCg1ppaiVae82S9wXlXf6P_t-6Q6h9PW-vAIuCoYZRlJ-XgGQ2_Rco264ct3htY8y3JvY2TkOvxCjIdSlBPtwnxyfLu3y87reo9UADzKg_r7p2hD_m7HGztKXzU0MXoGqOF-HNnqy3nvU3eEJdER-Y2XQpslAT-YaLS6M5Sv-N58ZSXNqogENIzzz_Kr8Um-_qp0uzMkpg4Ue9QMeI48kK8gNrsyAIRgFsIGrbxhhWbRucP114BBJH4Wk2towSU4Leayx" 
                alt="Developers working"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
