import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SpotlightCard from "./SpotlightCard";

const services = [
  { icon: "/icons/1.svg", title: "Business Setup & Procurement", desc: "Sourcing and supplying furniture, equipment, and business essentials for a fully operational setup." },
  { icon: "/icons/2.svg", title: "Retail & Hospitality Fit-Outs", desc: "Complete furnishing solutions for restaurants, cafés, and retail — from commercial kitchens to dining spaces." },
  { icon: "/icons/3.svg", title: "Office & Training Facility Setup", desc: "Equipping offices with workstations, desks, chairs, and custom designs for productive workspaces." },
  { icon: "/icons/4.svg", title: "Branding & Digital Presence", desc: "Logo design, marketing materials, signage, and establishing a strong digital and social media presence." },
  { icon: "/icons/5.svg", title: "Vendor & Supply Chain Management", desc: "Helping businesses source products at the best prices while managing procurement and vendor relationships." },
  { icon: "/icons/6.svg", title: "Workforce & Recruitment Consulting", desc: "Supporting hiring, training, and structuring efficient teams with long-term HR development strategies." },
  { icon: "/icons/7.svg", title: "Operational & Strategic Consulting", desc: "Identifying inefficiencies and streamlining operations to help businesses scale sustainably." },
  { icon: "/icons/8.svg", title: "Compliance & Regulatory Guidance", desc: "Assisting with Australian licensing, industry regulations, and compliance standards for smooth operations." },
];

const Services = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 md:py-40 px-5 md:px-10 bg-[#0B1A0B] relative overflow-hidden">
      {/* Orb */}
      <div className="orb orb-green top-[20%] left-[-15%]" />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <motion.span
            className="shiny-text text-[10px] uppercase tracking-[0.25em] font-medium block mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            What We Do
          </motion.span>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold text-[#EDE5D8] tracking-tight leading-[0.95]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1], delay: 0.1 }}
          >
            Our Services
          </motion.h2>
          <motion.p
            className="text-[#EDE5D8]/40 mt-5 max-w-lg text-sm md:text-base leading-relaxed font-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Comprehensive solutions to establish, grow, and optimize your business from the ground up.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.25, 0.8, 0.25, 1], delay: 0.1 + i * 0.06 }}
            >
              <SpotlightCard className="card-dark card-accent h-full p-7 md:p-8 group cursor-default">
                <img
                  src={s.icon} alt=""
                  className="w-12 h-12 mb-5 opacity-60 group-hover:opacity-100 icon-float transition-opacity duration-400"
                  style={{ animationDelay: `${i * 0.5}s` }}
                />
                <h3 className="text-base font-semibold text-[#EDE5D8]/80 mb-2 group-hover:text-[#D4A853] transition-colors duration-400" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {s.title}
                </h3>
                <p className="text-[#EDE5D8]/35 text-sm leading-relaxed font-light group-hover:text-[#EDE5D8]/55 transition-colors duration-400">
                  {s.desc}
                </p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
