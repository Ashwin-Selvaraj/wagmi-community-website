import { motion } from "motion/react";
import { GraduationCap, Users, Terminal, Rocket, ArrowRight } from "lucide-react";
import LetterGlitch from "../../components/LetterGlitch.jsx";

const activities = [
  {
    title: "Web3 Onboarding",
    description: "Simplified sessions for absolute beginners to start their crypto journey safely.",
    icon: GraduationCap,
    color: "text-primary",
    bgColor: "bg-primary/10",
    hoverBorder: "hover:border-primary/20",
    linkText: "Learn more"
  },
  {
    title: "Ethereum Workshops",
    description: "Hands-on technical deep-dives for developers looking to master Solidity and smart contracts.",
    icon: Users,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    hoverBorder: "hover:border-secondary/20",
    linkText: "View schedule"
  },
  {
    title: "Community Meetups",
    description: "Casual networking and knowledge sharing sessions with fellow Web3 enthusiasts.",
    icon: Terminal,
    color: "text-tertiary",
    bgColor: "bg-tertiary/10",
    hoverBorder: "hover:border-tertiary/20",
    linkText: "Hack with us"
  },
  {
    title: "Builder Support",
    description: "Resources and mentorship for local projects to go from idea to deployment.",
    icon: Rocket,
    color: "text-on-surface",
    bgColor: "bg-white/10",
    hoverBorder: "hover:border-white/20",
    linkText: "Apply now"
  }
];

export default function Activities() {
  return (
    <section className="relative isolate overflow-hidden rounded-[1.5rem] md:rounded-[2.25rem] pt-24 pb-24 px-6 bg-surface" id="ecosystem">
      <div className="absolute inset-0 -z-20 rounded-[1.5rem] md:rounded-[2.25rem] overflow-hidden">
        <LetterGlitch
          className="h-full w-full"
          glitchColors={["#95a9ff", "#c57eff", "#9bf7ff"]}
          glitchSpeed={42}
          centerVignette={false}
          outerVignette
          smooth
        />
      </div>
      <div className="absolute inset-0 -z-10 rounded-[1.5rem] md:rounded-[2.25rem] bg-gradient-to-b from-surface/62 via-surface/54 to-surface/64" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16 flex items-center gap-4">
          <div className="h-12 w-1.5 bg-primary rounded-full"></div>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight"
          >
            What We Do
          </motion.h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {activities.map((activity, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group p-6 md:p-8 rounded-2xl md:rounded-3xl bg-surface-container-low/70 hover:bg-surface-container-high/80 backdrop-blur-sm transition-all duration-500 border border-white/5 ${activity.hoverBorder} flex flex-col items-start`}
            >
              <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl ${activity.bgColor} flex items-center justify-center ${activity.color} mb-5 md:6 group-hover:scale-110 transition-transform`}>
                <activity.icon size={28} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:3">{activity.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-4 md:6">
                {activity.description}
              </p>
              <a className={`mt-auto ${activity.color} font-bold flex items-center gap-2 group-hover:gap-4 transition-all text-sm md:text-base`} href="#">
                {activity.linkText} <ArrowRight size={18} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
