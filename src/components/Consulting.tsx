import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Consulting = () => {
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
    <section id="consulting" className="py-20 px-4 bg-[#c72a00]">
      <div className="container mx-auto text-left">
        <h2
          className="text-3xl text-center sm:text-4xl font-semibold text-white mb-12"
        >
          Consulting
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {/* Business Growth & Development Consulting */}
          <motion.div
            className="service-card p-6 bg-white border border-black rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
            initial={{ opacity: 0, y: 30 }} // Start below (y: 30)
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }} // Slide up from bottom
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-semibold text-black mb-4">
              Business Growth & Development Consulting
            </h3>
            <ul className="text-lg text-black space-y-4 pl-6 list-disc">
              <li>
                One-on-one consulting sessions to develop growth strategies
              </li>
              <li>
                Market research and analysis to identify expansion opportunities
              </li>
              <li>
                Business model innovation to improve efficiency and
                sustainability
              </li>
            </ul>
          </motion.div>

          {/* Recruitment & Workforce Consulting */}
          <motion.div
            className="service-card p-6 bg-white border border-black rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
            initial={{ opacity: 0, y: 30 }} // Start below (y: 30)
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }} // Slide up from bottom
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-black mb-4">
              Recruitment & Workforce Consulting
            </h3>
            <ul className="text-lg text-black space-y-4 pl-6 list-disc">
              <li>Talent acquisition and retention strategies</li>
              <li>
                Employer branding solutions to attract high-quality
                professionals
              </li>
              <li>
                Workforce planning to optimize team structures and performance
              </li>
            </ul>
          </motion.div>

          {/* Operational & Strategic Consulting */}
          <motion.div
            className="service-card p-6 bg-white border border-black rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
            initial={{ opacity: 0, y: 30 }} // Start below (y: 30)
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }} // Slide up from bottom
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold text-black mb-4">
              Operational & Strategic Consulting
            </h3>
            <ul className="text-lg text-black space-y-4 pl-6 list-disc">
              <li>Streamlining business processes for enhanced productivity</li>
              <li>
                Identifying operational gaps and implementing efficiency
                improvements
              </li>
              <li>
                Financial and risk advisory for long-term business stability
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Consulting;
