import { motion } from "motion/react";
import { CheckCircle2, Rocket, Flame, Zap, Settings, Leaf } from "lucide-react";

const phases = [
  {
    id: "01",
    title: "Community Foundation",
    description: "Started with local meetups in Coimbatore and Tiruppur, bringing together the first circle of enthusiasts.",
    status: "Completed",
    icon: Leaf,
    color: "text-primary",
    bgColor: "bg-primary/10",
    dotColor: "bg-primary"
  },
  {
    id: "02",
    title: "Knowledge & Awareness",
    description: "Organized multiple Ethereum-focused events, providing fundamental knowledge about wallets and security.",
    status: "Completed",
    icon: Rocket,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    dotColor: "bg-secondary"
  },
  {
    id: "03",
    title: "Community Growth",
    description: "Expanding the community through strategic partnerships and weekly networking sessions.",
    status: "Current State",
    icon: Flame,
    color: "text-tertiary",
    bgColor: "bg-tertiary/10",
    dotColor: "bg-tertiary"
  },
  {
    id: "04",
    title: "Structured Learning",
    description: "Introducing beginner-friendly onboarding curriculums and structured learning paths.",
    status: "Next Milestone",
    icon: Zap,
    color: "text-on-surface-variant",
    bgColor: "bg-white/5",
    dotColor: "bg-white/20"
  },
  {
    id: "05",
    title: "Builder Enablement",
    description: "Supporting developers moving from learning to building through mentorship programs.",
    status: "Late 2024",
    icon: Settings,
    color: "text-on-surface-variant",
    bgColor: "bg-white/5",
    dotColor: "bg-white/20"
  }
];

export default function Roadmap() {
  return (
    <section className="py-24 px-6 bg-surface overflow-hidden relative" id="roadmap">
      <div className="max-w-3xl mx-auto relative">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-12 w-1.5 bg-secondary rounded-full"></div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Evolution Path</h2>
        </div>

        <div className="relative pl-8 md:pl-12">
          {/* Vertical Line */}
          <div className="absolute left-[11px] md:left-[15px] top-0 bottom-0 w-px bg-white/10"></div>
          
          <div className="space-y-12">
            {phases.map((phase, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Dot/Indicator */}
                <div className={`absolute -left-[30px] md:-left-[42px] top-1 w-6 h-6 md:w-8 md:h-8 rounded-full bg-surface border-2 border-white/10 flex items-center justify-center z-10`}>
                  {phase.status.includes("Completed") ? (
                    <CheckCircle2 className="text-primary" size={14} />
                  ) : phase.status.includes("Current") ? (
                    <div className="w-2.5 h-2.5 rounded-full bg-tertiary animate-pulse shadow-[0_0_10px_rgba(255,149,149,0.5)]"></div>
                  ) : (
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
                  )}
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                    Phase {phase.id}
                  </span>
                  <div className="flex items-center gap-2 mb-1">
                    <phase.icon className={phase.color} size={18} />
                    <h3 className="text-lg md:text-xl font-bold">{phase.title}</h3>
                  </div>
                  <p className="text-on-surface-variant text-sm leading-relaxed max-w-xl">
                    {phase.description}
                  </p>
                  <p className="text-[10px] md:text-xs font-medium italic text-on-surface-variant/60 mt-1">
                    {phase.status}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
