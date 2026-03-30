import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SpotlightCard from "./SpotlightCard";
import picture1 from "../../public/2.png";
import picture2 from "../../public/3.png";
import picture3 from "../../public/4.png";

const cards = [
  { img: picture1, num: "01", title: "Leadership & Business Growth", desc: "Develop sustainable growth plans and long-term success strategies. Learn how to manage teams, delegate responsibilities, and drive performance." },
  { img: picture2, num: "02", title: "Branding & Marketing", desc: "Build a recognizable brand, improve online visibility, and utilize data insights to refine marketing efforts and business outreach." },
  { img: picture3, num: "03", title: "Workforce & HR Development", desc: "Equip teams with skills to meet business goals. Develop strategies for collaboration, reduce turnover, and create structured HR systems." },
];

const Training = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="training" className="py-24 md:py-40 px-5 md:px-10 bg-[#070F07] relative overflow-hidden">
      <div className="orb orb-gold top-[10%] left-[-10%]" />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <div className="mb-16 md:mb-24">
          <motion.span className="shiny-text text-[10px] uppercase tracking-[0.25em] font-medium block mb-4"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            Develop Your Team
          </motion.span>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold text-[#EDE5D8] tracking-tight leading-[0.95]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.25, 0.8, 0.25, 1], delay: 0.1 }}>
            Training <em className="font-light">Programs</em>
          </motion.h2>
          <motion.p className="text-[#EDE5D8]/40 mt-5 max-w-2xl text-sm md:text-base leading-relaxed font-light"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
            Practical training for sustainable business growth. Ensuring your owners, managers, and teams have the skills to adapt and succeed.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.25, 0.8, 0.25, 1], delay: 0.15 + i * 0.1 }}
            >
              <SpotlightCard className="card-dark h-full group cursor-default">
                <div className="img-wrap relative">
                  <img src={card.img} alt={card.title} className="w-full h-52 object-cover" />
                  {/* Number badge */}
                  <div className="absolute top-3 left-3 bg-[#0B1A0B]/80 backdrop-blur-sm border border-[#EDE5D8]/[0.06] text-[#D4A853] w-9 h-9 flex items-center justify-center text-[10px] font-medium tracking-widest">
                    {card.num}
                  </div>
                </div>
                <div className="p-7 md:p-8">
                  <h3 className="text-lg font-semibold text-[#EDE5D8]/80 mb-3 group-hover:text-[#D4A853] transition-colors duration-400" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {card.title}
                  </h3>
                  <p className="text-[#EDE5D8]/35 text-sm leading-relaxed font-light group-hover:text-[#EDE5D8]/55 transition-colors duration-400">
                    {card.desc}
                  </p>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Training;
