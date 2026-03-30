import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SpotlightCard from "./SpotlightCard";
import picture1 from "../../public/2.png";
import picture2 from "../../public/3.png";
import picture3 from "../../public/4.png";
import picture4 from "../../public/8.png";
import picture5 from "../../public/9.png";

const cards = [
  { img: picture1, title: "Business Setup & Equipment Supply", items: ["Full-service supply chain management", "Sourcing, procurement, and installation", "Custom orders for specific business needs"] },
  { img: picture2, title: "Office & Training Facility Supplies", items: ["Desks, ergonomic chairs, whiteboards", "Custom office furniture for efficiency", "IT equipment for training centers"] },
  { img: picture3, title: "Vendor & Supply Chain Management", items: ["Vetted supplier partnerships", "Streamlined procurement processes", "Logistics and inventory management"] },
  { img: picture4, title: "Custom Sourcing & Specialty Orders", items: ["Unique and hard-to-source products", "Custom procurement plans", "Bulk discounts and fast-track delivery"] },
  { img: picture5, title: "Restaurant & Café Fit-Outs", items: ["Commercial kitchen appliances", "Bespoke restaurant layouts", "Catering and hospitality equipment"] },
];

const Trading = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="trading" className="py-24 md:py-40 px-5 md:px-10 bg-[#070F07] relative overflow-hidden">
      <div className="orb orb-gold top-[5%] right-[-10%]" />
      <div className="orb orb-green bottom-[10%] left-[-10%]" />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <div className="mb-16 md:mb-24">
          <motion.span className="shiny-text text-[10px] uppercase tracking-[0.25em] font-medium block mb-4"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            Procurement & Trading
          </motion.span>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold text-[#EDE5D8] tracking-tight leading-[0.95]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.25, 0.8, 0.25, 1], delay: 0.1 }}>
            Reliable Business{" "}<em className="font-light">Procurement</em>
          </motion.h2>
          <motion.p className="text-[#EDE5D8]/40 mt-5 max-w-2xl text-sm md:text-base leading-relaxed font-light"
            initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}>
            Sourcing the right tools for your business success. Our strong supplier network delivers cost-effective solutions without compromising on quality.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.25, 0.8, 0.25, 1], delay: 0.15 + i * 0.08 }}
            >
              <SpotlightCard className="card-dark h-full group cursor-default">
                <div className="img-wrap">
                  <img src={card.img} alt="" className="w-full h-40 object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-sm font-semibold text-[#EDE5D8]/80 mb-3 group-hover:text-[#D4A853] transition-colors duration-400" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {card.title}
                  </h3>
                  <ul className="space-y-2">
                    {card.items.map((item, j) => (
                      <li key={j} className="text-[#EDE5D8]/35 text-xs leading-relaxed flex items-start gap-2 group-hover:text-[#EDE5D8]/55 transition-colors duration-400">
                        <span className="text-[#D4A853]/40 mt-[3px] flex-shrink-0 text-[6px]">●</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trading;
