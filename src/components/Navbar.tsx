import { motion } from "motion/react";
import { Home, Calendar, Map, Users, Shield } from "lucide-react";

export default function Navbar() {
  return (
    <>
      {/* Desktop Top Nav */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl rounded-full bg-surface/70 backdrop-blur-xl border border-white/5 shadow-[0px_24px_48px_rgba(0,0,0,0.4)] hidden md:flex justify-between items-center px-8 py-3 z-50"
      >
        <div className="text-xl font-bold tracking-tighter text-on-surface font-headline flex items-center gap-2">
          <Shield className="text-primary" size={24} />
          WAGMI
        </div>
        <div className="flex items-center gap-8">
          <a className="text-on-surface-variant font-medium font-headline text-sm tracking-tight hover:text-on-surface transition-all duration-300" href="#events">Events</a>
          <a className="text-on-surface-variant font-medium font-headline text-sm tracking-tight hover:text-on-surface transition-all duration-300" href="#ecosystem">Ecosystem</a>
          <a className="text-primary font-bold border-b-2 border-primary pb-1 font-headline text-sm tracking-tight" href="#roadmap">Roadmap</a>
          <a className="text-on-surface-variant font-medium font-headline text-sm tracking-tight hover:text-on-surface transition-all duration-300" href="#impact">Impact</a>
          <a className="text-on-surface-variant font-medium font-headline text-sm tracking-tight hover:text-on-surface transition-all duration-300" href="#team">Team</a>
        </div>
        <button className="bg-gradient-to-r from-primary to-primary-container text-on-primary font-semibold px-6 py-2 rounded-full scale-95 active:scale-90 transition-transform text-sm">
          Join Sanctum
        </button>
      </motion.nav>

      {/* Mobile Top Bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-surface/80 backdrop-blur-lg border-b border-white/5 flex items-center justify-between px-6 z-50">
        <div className="text-lg font-bold tracking-tighter text-on-surface font-headline flex items-center gap-2">
          <Shield className="text-primary" size={20} />
          Ether-Luxe
        </div>
        <div className="w-8 h-8 rounded-full bg-surface-container-highest border border-white/10 overflow-hidden">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeK-PSV66FMUqdJelXiEwS4KQJMbNzdnwGZpfLNsgfvXuObdiuVehsH1GwOv8sql-0zhyS8ZeDkw0z7HQdx3wrNslQJdrWEdmykX6ld3kaojBGV54lQKhqBf77NeDbRkizgqzdoyaKph6-HvBQkSqcgLzdE7EPMX_n3Jyoh4Z9L94sA_OQ6mq_8Tfs5MLw-X0y4bx2Hg68yk1W5VdCvdtigGw6q0Ea0jD4nqlgELFJMIEOn63p54O4fEY7dUYluNEuNpxhCxxObEvL" alt="User" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Mobile Bottom Nav */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] h-16 bg-surface/90 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-around px-4 z-50 shadow-2xl">
        <a href="#" className="p-3 rounded-full bg-primary text-on-primary shadow-[0_0_15px_rgba(149,169,255,0.4)]">
          <Home size={20} />
        </a>
        <a href="#events" className="p-3 text-on-surface-variant hover:text-on-surface transition-colors">
          <Calendar size={20} />
        </a>
        <a href="#roadmap" className="p-3 text-on-surface-variant hover:text-on-surface transition-colors">
          <Map size={20} />
        </a>
        <a href="#team" className="p-3 text-on-surface-variant hover:text-on-surface transition-colors">
          <Users size={20} />
        </a>
      </div>
    </>
  );
}
