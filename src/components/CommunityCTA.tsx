import { motion } from "motion/react";
import { MessageSquare, Send, Phone } from "lucide-react";
import { COMMUNITY_NAME } from "../config/site";

export default function CommunityCTA() {
  return (
    <section className="py-24 px-6 bg-surface relative overflow-hidden" id="community">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-surface-container-low/60 backdrop-blur-2xl p-10 md:p-20 rounded-[3rem] border border-white/5 shadow-2xl"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 leading-tight">
            Start your Web3 journey with <span className="text-primary">{COMMUNITY_NAME}</span>
          </h2>
          <p className="text-on-surface-variant text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Connect with our regional chapters and join the movement today. We're building the future of the decentralized web, together.
          </p>
          
          <div className="flex justify-center items-center gap-6 md:gap-10">
            <motion.a 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="#" 
              className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#5865F2] flex items-center justify-center text-white shadow-[0_0_20px_rgba(88,101,242,0.4)]"
            >
              <MessageSquare size={28} />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="#" 
              className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#0088cc] flex items-center justify-center text-white shadow-[0_0_20px_rgba(0,136,204,0.4)]"
            >
              <Send size={28} />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="#" 
              className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-[0_0_20px_rgba(37,211,102,0.4)]"
            >
              <Phone size={28} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
