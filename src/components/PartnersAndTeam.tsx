import { motion } from "motion/react";
import { TEAM_MEMBERS } from "../config/site";

export default function PartnersAndTeam() {
  return (
    <section className="bg-surface w-full min-w-0" id="team">
      <div className="section-y section-x">
        <div className="mx-auto w-full max-w-7xl">
          <div className="section-heading-gap flex items-center gap-4">
            <div className="h-12 w-1.5 bg-primary rounded-full"></div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Team</h2>
          </div>
          
          {TEAM_MEMBERS.length ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 md:gap-8 lg:grid-cols-4">
              {TEAM_MEMBERS.map((member, i) => (
                <motion.div 
                  key={`${member.name}-${i}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="group relative rounded-3xl overflow-hidden bg-surface-container-low border border-white/5 flex flex-col"
                >
                  <div className="aspect-[4/3] md:aspect-[4/5] overflow-hidden">
                    <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={member.image} alt={member.name} referrerPolicy="no-referrer" />
                  </div>
                  <div className="p-6 md:p-8">
                    <h4 className="text-xl md:text-2xl font-bold mb-1">{member.name}</h4>
                    <p className="text-primary font-bold text-xs uppercase tracking-widest mb-4">{member.title}</p>
                    <p className="text-on-surface-variant text-sm italic leading-relaxed">
                      "{member.description}"
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-white/10 bg-surface-container-low px-6 py-10 text-center">
              <p className="text-on-surface-variant text-sm">
                Add `VITE_TEAM_NAME_1`, `VITE_TEAM_TITLE_1`, `VITE_TEAM_DESCRIPTION_1`, and `VITE_TEAM_IMAGE_1` in your env to show team members.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
