import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Training = () => {
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
    <section id="training" className="py-20 px-4 bg-[#e2dddc]">
      <div className="container mx-auto text-left">
        <h2
          className="text-3xl text-center sm:text-4xl font-semibold text-black mb-12"
        >
          Training
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {/* Workforce Training & Development */}
          <motion.div
            className="service-card p-6 bg-white border border-black rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
            initial={{ opacity: 0, y: 30 }} // Start from below (y: 30)
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }} // Slide up from bottom
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-semibold text-black mb-4">
              Workforce Training & Development
            </h3>
            <ul className="text-lg text-black space-y-4 pl-6 list-disc">
              <li>
                Industry-specific training modules for corporate teams and
                institutions
              </li>
              <li>
                Interactive training programs to enhance workforce skills and
                productivity
              </li>
              <li>
                Compliance training to align with industry regulations and
                standards
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
            <h3 className="text-2xl font-semibold text-black mb-4">
              Leadership & Management Training
            </h3>
            <ul className="text-lg text-black space-y-4 pl-6 list-disc">
              <li>Executive coaching and leadership skill development</li>
              <li>
                Conflict resolution, team-building, and effective communication
                training
              </li>
              <li>
                Change management strategies for adapting to business growth
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
            <h3 className="text-2xl font-semibold text-black mb-4">
              Digital & Social Media Training
            </h3>
            <ul className="text-lg text-black space-y-4 pl-6 list-disc">
              <li>
                Social media best practices for businesses and institutions
              </li>
              <li>
                Content creation, engagement strategies, and digital branding
                training
              </li>
              <li>
                Data-driven marketing techniques for increasing visibility and
                outreach
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Training;
