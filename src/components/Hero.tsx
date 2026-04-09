import { motion } from "motion/react";

export default function Hero() {
  return (
    <header className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 overflow-hidden mesh-gradient">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-secondary/10 blur-[120px] rounded-full"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-block px-4 py-1.5 rounded-full bg-surface-container-highest text-primary text-xs font-bold uppercase tracking-[0.2em] mb-6 border border-outline-variant"
        >
          Onboarding the next wave of builders and believers into Ethereum.
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-4xl md:text-8xl font-bold tracking-tighter mb-6 leading-tight md:leading-none"
        >
          WAGMI <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-tertiary">
            Coimbatore & Tiruppur
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto mb-10"
        >
          A grassroots initiative making blockchain accessible. From first wallets to first dApps, we're building the local Web3 ecosystem together.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary rounded-3xl font-bold text-lg hover:shadow-[0_0_30px_rgba(149,169,255,0.4)] transition-all">
            Join Community
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-surface-container-highest text-on-surface rounded-3xl font-bold text-lg hover:bg-surface-container-high transition-all">
            Explore Events
          </button>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-16 md:mt-20 relative z-10 w-full max-w-6xl"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 px-4">
          {[
            { label: "Onboarded", value: "500+", color: "text-primary" },
            { label: "Events", value: "12+", color: "text-secondary" },
            { label: "Members", value: "1.2k+", color: "text-tertiary" },
            { label: "Events / Year", value: "6+", color: "text-on-surface" }
          ].map((stat, i) => (
            <div key={i} className="bg-surface-container-low/40 backdrop-blur-md p-5 md:p-6 rounded-2xl md:rounded-3xl border border-white/5 text-left">
              <p className={`${stat.color} font-headline text-2xl md:text-3xl font-bold mb-1`}>{stat.value}</p>
              <p className="text-on-surface-variant text-[10px] md:text-xs uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </header>
  );
}
