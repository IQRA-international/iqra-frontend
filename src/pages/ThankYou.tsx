import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ThankYou = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-[#0B1A0B] text-[#EDE5D8] px-6 relative overflow-hidden">
      <div className="orb orb-green top-[20%] right-[-10%]" />
      <div className="orb orb-gold bottom-[20%] left-[-10%]" />

      <div className="text-center max-w-lg relative z-10">
        <motion.div
          className="mx-auto mb-8 w-16 h-16 border border-[#D4A853]/30 flex items-center justify-center"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
        >
          <motion.svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4A853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <motion.path d="M5 13l4 4L19 7" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 0.6 }} />
          </motion.svg>
        </motion.div>

        <motion.span className="shiny-text text-[10px] uppercase tracking-[0.3em] font-medium block mb-6"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}>
          Enquiry Received
        </motion.span>

        <motion.h1
          className="text-4xl sm:text-5xl font-semibold tracking-tight leading-[0.95] mb-6"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}>
          Thank You
        </motion.h1>

        <motion.p className="text-[#EDE5D8]/40 text-sm md:text-base leading-relaxed font-light mb-12"
          initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.6 }}>
          We've received your enquiry. A member of our team will get back to you shortly.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.8 }}>
          <Link to="/" className="btn-primary inline-block text-[#EDE5D8] border border-[#EDE5D8]/10 px-10 py-4 hover:border-[#D4A853]">
            <span className="btn-fill" />
            <span className="relative z-[1]">← Return Home</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ThankYou;
