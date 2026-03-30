import { motion } from "framer-motion";
import SplitText from "./SplitText";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
      {/* Background with Ken Burns */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/hero.jpeg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          animation: "kenBurns 20s ease-in-out infinite alternate",
        }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#0B1A0B]/70 via-[#0B1A0B]/50 to-[#0B1A0B]/80" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#0B1A0B]/40 via-transparent to-[#0B1A0B]/40" />

      {/* Gradient orbs */}
      <div className="orb orb-green top-[10%] right-[-10%] z-[2]" />
      <div className="orb orb-gold bottom-[10%] left-[-5%] z-[2]" />

      {/* Content */}
      <div className="relative z-10 text-center px-5 sm:px-8 md:px-12 max-w-5xl mx-auto">
        {/* Label */}
        <motion.p
          className="shiny-text text-[10px] md:text-xs uppercase tracking-[0.3em] mb-6 md:mb-8 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          IQRA International
        </motion.p>

        {/* Main heading with SplitText */}
        <h1
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold leading-[0.95] tracking-tight text-[#EDE5D8]"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          <SplitText delay={0.4}>Tailored Solutions for</SplitText>
          <br />
          <span className="inline-block overflow-hidden">
            <motion.em
              className="font-light not-italic"
              style={{ fontStyle: "italic" }}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.7, ease: [0.25, 0.8, 0.25, 1], delay: 0.9 }}
            >
              Business Growth
            </motion.em>
          </span>
          {" "}
          <SplitText delay={1.0}>& Operations</SplitText>
        </h1>

        {/* Subtitle */}
        <motion.p
          className="mt-8 md:mt-12 max-w-xl mx-auto text-sm md:text-base leading-relaxed text-[#EDE5D8]/50 font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.3 }}
        >
          From product sourcing and operational setup to branding and workforce consulting — strategic, cost-effective support to establish, refine, and scale.
        </motion.p>

        {/* CTA */}
        <motion.div
          className="mt-10 md:mt-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
        >
          <a href="mailto:Info@iqrainternational.com.au">
            <span className="btn-primary inline-block text-[#EDE5D8] bg-[#2d452b] border border-[#EDE5D8]/10 px-10 py-4 rounded-full hover:border-[#D4A853] transition-all duration-500 hover:shadow-lg hover:shadow-[#D4A853]/10">
              <span className="btn-fill rounded-full" />
              <span className="relative z-[1]">Book a Consultation →</span>
            </span>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
      >
        <span className="text-[#EDE5D8]/20 text-[9px] uppercase tracking-[0.3em]">Scroll</span>
        <svg width="14" height="20" viewBox="0 0 14 20" fill="none" className="text-[#EDE5D8]/20" style={{ animation: "scrollBounce 2s ease-in-out infinite" }}>
          <path d="M7 3V15M7 15L2 10M7 15L12 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
