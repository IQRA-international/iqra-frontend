import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import picture1 from "../../public/5.png"
import picture2 from "../../public/6.png"
import picture3 from "../../public/7.png"

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
    <section id="consulting" className="py-20 px-4 bg-[#2d452b]">
      <div className="container mx-auto text-left">
        <h2
          className="text-6xl  font-semibold text-white mb-12"
        >
          Consultancy
        </h2>
        <h3 className="text-white text-2xl" style={{fontFamily:"Bitter"}}>Refining Strategy, Strengthening Teams, and Optimizing Operations</h3>
        <h3 className="text-white text-xl" style={{fontFamily:"Bitter"}}>Beyond business setup, IQRA International provides expert consulting services to help businesses refine strategy, structure teams, and maximize efficiency.
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 mt-16">
          {/* Workforce Training & Development */}
          <motion.div
            className="service-card p-6 bg-white border border-black rounded-xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
            initial={{ opacity: 0, y: 30 }} // Start from below (y: 30)
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }} // Slide up from bottom
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <img 
    src={picture1} 
    alt="Leadership Training" 
    className="w-full h-48 object-cover rounded-md mb-4"
  />
            <h3 className="text-2xl font-semibold text-[#506a13] mb-4"  style={{fontFamily:"PT Serif"}}>
            Business Growth & Strategy
            </h3>
            <ul className="text-lg text-[#506a13] space-y-4 pl-6 list-disc"  style={{fontFamily:"PT Serif"}}>
              <li>
              Developing scalable business models and revenue strategies.
              </li>
              <li>
              Identifying market opportunities and customer engagement strategies.

              </li>
              
            </ul>
          </motion.div>

          {/* Leadership & Management Training */}
          <motion.div
            className="service-card p-6 bg-white border border-black rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
            initial={{ opacity: 0, y: 30 }} // Start from below (y: 30)
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }} // Slide up from bottom
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
                <img 
    src={picture2} 
    alt="Leadership Training" 
    className="w-full h-48 object-cover rounded-md mb-4"
  />
            <h3 className="text-2xl font-semibold text-[#506a13] mb-4"  style={{fontFamily:"PT Serif"}}>
            Recruitment & Workforce Solutions
            </h3>
            <ul className="text-lg text-[#506a13] space-y-4 pl-6 list-disc"  style={{fontFamily:"PT Serif"}}>
              <li>Designing HR and talent acquisition plans for long-term growth.</li>
              <li>
              Structuring teams for sustainable success and efficiency.

              </li>
             
            </ul>
          </motion.div>

          {/* Digital & Social Media Training */}
          <motion.div
            className="service-card p-6 bg-white border border-black rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
            initial={{ opacity: 0, y: 30 }} // Start from below (y: 30)
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }} // Slide up from bottom
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
          >
                <img 
    src={picture3} 
    alt="Leadership Training" 
    className="w-full h-48 object-cover rounded-md mb-4"
  />
            <h3 className="text-2xl font-semibold text-[#506a13] mb-4"  style={{fontFamily:"PT Serif"}}>
            Operational Efficiency & Process Optimization
            </h3>
            <ul className="text-lg text-[#506a13] space-y-4 pl-6 list-disc" style={{fontFamily:"PT Serif"}}>
              <li>
              Improving workflow processes and supply chain management.
              </li>
              <li>
              Implementing cost-saving measures and operational best practices.

              </li>
             
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Consulting;
