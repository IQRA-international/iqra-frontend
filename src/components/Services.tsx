import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Services = () => {
  const [inView, setInView] = useState(false);

  const observerOptions: IntersectionObserverInit = {
    rootMargin: "0px",
    threshold: 0.5, // 50% of the element must be visible to trigger the animation
  };

  const handleObserver = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setInView(true);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, observerOptions);
    const elements = document.querySelectorAll(".service-card");
    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="services" className="py-20 px-4 bg-white">
      <div className="container mx-auto text-left">
        <h2
          className="text-3xl text-initial sm:text-6xl font-semibold text-[#2d452b] mb-12"
        >
          Services
        </h2> 
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {/* Business Setup & Procurement */}
          <motion.div
            className="service-card p-6 bg-[#2d452b] border border-black rounded-4xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <img src="/icons/1.svg" alt="Business Setup & Procurement Icon" className="w-24 h-24 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-white mb-4 text-center">
              Business Setup & Procurement
            </h3>
            <ul className="text-lg text-white space-y-4 pl-6 list-disc">
              <li>Sourcing and supplying furniture, equipment, and business essentials.</li>
              <li>Ensuring businesses have high-quality materials for a fully operational setup.</li>
            </ul>
          </motion.div>

          {/* Retail & Hospitality Fit-Outs */}
          <motion.div
            className="service-card p-6 bg-[#2d452b] border border-black rounded-4xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
          >
            <img src="/icons/2.svg" alt="Retail & Hospitality Fit-Outs Icon" className="w-24 h-24 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-white mb-4 text-center">
              Retail & Hospitality Fit-Outs
            </h3>
            <ul className="text-lg text-white space-y-4 pl-6 list-disc">
              <li>Complete furnishing solutions for restaurants, cafés, and retail businesses.</li>
              <li>Supplying and installing commercial kitchen and dining furniture.</li>
            </ul>
          </motion.div>

          {/* Office & Training Facility Setup */}
          <motion.div
            className="service-card p-6 bg-[#2d452b] border border-black rounded-4xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <img src="/icons/3.svg" alt="Office & Training Facility Setup Icon" className="w-24 h-24 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-white mb-4 text-center">
              Office & Training Facility Setup
            </h3>
            <ul className="text-lg text-white space-y-4 pl-6 list-disc">
              <li>Equipping offices with workstations, desks, chairs, and learning materials.</li>
              <li>Custom design solutions for functional and productive workspaces.</li>
            </ul>
          </motion.div>

          {/* Branding & Digital Presence */}
          <motion.div
            className="service-card p-6 bg-[#2d452b] border border-black rounded-4xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
          >
            <img src="/icons/4.svg" alt="Branding & Digital Presence Icon" className="w-24 h-24 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-white mb-4 text-center">
              Branding & Digital Presence
            </h3>
            <ul className="text-lg text-white space-y-4 pl-6 list-disc">
              <li>Logo design, marketing materials, and signage.</li>
              <li>Establishing a strong digital presence through social media and web branding.</li>
            </ul>
          </motion.div>

          {/* Vendor & Supply Chain Management */}
          <motion.div
            className="service-card p-6 bg-[#2d452b] border border-black rounded-4xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <img src="/icons/5.svg" alt="Vendor & Supply Chain Management Icon" className="w-24 h-24 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-white mb-4 text-center">
              Vendor & Supply Chain Management
            </h3>
            <ul className="text-lg text-white space-y-4 pl-6 list-disc">
              <li>Helping businesses source products and materials at the best prices.</li>
              <li>Managing procurement, delivery, and vendor relationships.</li>
            </ul>
          </motion.div>

          {/* Workforce & Recruitment Consulting */}
          <motion.div
            className="service-card p-6 bg-[#2d452b] border border-black rounded-4xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
          >
            <img src="/icons/6.svg" alt="Workforce & Recruitment Consulting Icon" className="w-24 h-24 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-white mb-4 text-center">
              Workforce & Recruitment Consulting
            </h3>
            <ul className="text-lg text-white space-y-4 pl-6 list-disc">
              <li>Supporting businesses in hiring, training, and structuring efficient teams.</li>
              <li>Long-term HR and leadership development strategies.</li>
            </ul>
          </motion.div>

          {/* Operational & Strategic Consulting */}
          <motion.div
            className="service-card p-6 bg-[#2d452b] border border-black rounded-4xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <img src="/icons/7.svg" alt="Operational & Strategic Consulting Icon" className="w-24 h-24 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-white mb-4 text-center">
              Operational & Strategic Consulting
            </h3>
            <ul className="text-lg text-white space-y-4 pl-6 list-disc">
              <li>Identifying inefficiencies and streamlining workflow operations.</li>
              <li>Helping businesses scale with cost-effective and sustainable strategies.</li>
            </ul>
          </motion.div>

          {/* Compliance & Regulatory Guidance */}
          <motion.div
            className="service-card p-6 bg-[#2d452b] border border-black rounded-4xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
          >
            <img src="/icons/8.svg" alt="Compliance & Regulatory Guidance Icon" className="w-24 h-24 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-white mb-4 text-center">
              Compliance & Regulatory Guidance
            </h3>
            <ul className="text-lg text-white space-y-4 pl-6 list-disc">
              <li>Assisting businesses with Australian licensing and industry regulations.</li>
              <li>Ensuring businesses meet compliance standards for smooth operations.</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
