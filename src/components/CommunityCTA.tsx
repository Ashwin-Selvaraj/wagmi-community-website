import { motion } from "motion/react";
import { Instagram, Twitter, MessageCircle } from "lucide-react";
import {
  COMMUNITY_NAME,
  COMMUNITY_INSTAGRAM_URL,
  COMMUNITY_TWITTER_URL,
  COMMUNITY_WHATSAPP_URL,
} from "../config/site";

export default function CommunityCTA() {
  return (
    <section
      className="section-x relative w-full min-w-0 overflow-hidden rounded-[1.5rem] bg-surface pb-6 pt-8 md:rounded-[2.25rem] md:py-12 lg:py-14"
      id="community"
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-[1.5rem] bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 md:rounded-[2.25rem]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[1.75rem] border border-white/5 bg-surface-container-low/60 p-6 shadow-2xl backdrop-blur-2xl sm:rounded-[2rem] sm:p-8 md:rounded-[2.5rem] md:p-10 lg:rounded-[2.75rem]"
          >
            <h2 className="mb-4 text-4xl font-bold leading-tight tracking-tighter md:mb-5 md:text-5xl lg:text-6xl">
              Start your Web3 journey with <span className="text-primary">{COMMUNITY_NAME}</span>
            </h2>
            <p className="mx-auto mb-6 max-w-2xl text-base leading-relaxed text-on-surface-variant md:mb-10 md:text-lg lg:text-xl">
              Connect with our regional chapters and join the movement today. We're building the future of the decentralized web, together.
            </p>

            <div className="flex items-center justify-center gap-6 md:gap-10">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href={COMMUNITY_INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="flex h-16 w-16 items-center justify-center rounded-full bg-[#E4405F] text-white shadow-[0_0_20px_rgba(228,64,95,0.4)] md:h-20 md:w-20"
              >
                <Instagram size={28} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href={COMMUNITY_TWITTER_URL}
                target="_blank"
                rel="noreferrer"
                className="flex h-16 w-16 items-center justify-center rounded-full bg-[#1D9BF0] text-white shadow-[0_0_20px_rgba(29,155,240,0.4)] md:h-20 md:w-20"
              >
                <Twitter size={28} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href={COMMUNITY_WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_0_20px_rgba(37,211,102,0.4)] md:h-20 md:w-20"
              >
                <MessageCircle size={28} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
