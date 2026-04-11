import { motion } from "motion/react";
import { COMMUNITY_NAME, HERO_STATS } from "../config/site";
import ASCIIText from "../../components/ASCIIText.jsx";

export default function Hero() {
  return (
    <header
      id="home"
      className="relative flex min-h-[100dvh] flex-col justify-between overflow-x-hidden text-center section-x pb-6 pt-[calc(3.5rem+env(safe-area-inset-top,0px)+0.625rem)] mesh-gradient md:pb-14 md:pt-28"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-secondary/10 blur-[120px] rounded-full"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto w-full">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-5 text-[clamp(1.85rem,6.5vw,2.5rem)] font-bold leading-tight tracking-tighter sm:mb-6 sm:text-4xl md:mb-6 md:text-8xl md:leading-none"
        >
          <span className="relative mx-auto mb-2 block min-h-[4.5rem] w-full max-w-[min(100%,520px)] max-sm:min-h-[6rem] sm:min-h-[5rem] md:max-w-[920px] lg:h-[220px] lg:min-h-[220px]">
            <div className="absolute inset-0 opacity-80">
              <ASCIIText
                text={COMMUNITY_NAME}
                enableWaves
                asciiFontSize={7}
                textFontSize={250}
                planeBaseHeight={13}
              />
            </div>
          </span>
          {/* <br className="hidden md:block" /> */}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-tertiary">
            Coimbatore & Tiruppur
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-on-surface-variant sm:mb-10 sm:text-lg md:text-xl"
        >
          A grassroots initiative making blockchain accessible. From first wallets to first dApps, we're building the local Web3 ecosystem together.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
        >
          <a
            href="#community"
            className="inline-flex min-h-12 w-full items-center justify-center rounded-3xl bg-gradient-to-r from-primary to-primary-container px-6 py-3.5 text-base font-bold text-on-primary transition-all hover:shadow-[0_0_30px_rgba(149,169,255,0.4)] sm:w-auto sm:px-8 sm:py-4 sm:text-lg"
          >
            Join Community
          </a>
          <a
            href="#events"
            className="inline-flex min-h-12 w-full items-center justify-center rounded-3xl bg-surface-container-highest px-6 py-3.5 text-base font-bold text-on-surface transition-colors hover:bg-surface-container-high sm:w-auto sm:px-8 sm:py-4 sm:text-lg"
          >
            Explore Events
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="relative z-10 mx-auto mt-6 w-full max-w-6xl sm:mt-8 md:mt-12"
      >
        <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 lg:grid-cols-4">
          {HERO_STATS.map((stat, i) => (
            <div
              key={`${stat.label}-${i}`}
              className="rounded-2xl border border-white/5 bg-surface-container-low/40 p-4 text-left backdrop-blur-md sm:p-5 md:rounded-3xl md:p-6"
            >
              <p className={`${stat.color} mb-0.5 font-headline text-xl font-bold sm:mb-1 sm:text-2xl md:text-3xl`}>{stat.value}</p>
              <p className="text-on-surface-variant text-[11px] uppercase leading-snug tracking-wider sm:text-xs md:tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </header>
  );
}
