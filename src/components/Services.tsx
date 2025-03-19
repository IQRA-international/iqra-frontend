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
    <section id="services" className="py-20 px-4 bg-[#c72a00]">
      <div className="container mx-auto text-left">
        <h2
          className="text-3xl text-center sm:text-4xl font-semibold text-white mb-12"
        >
          Core Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {/* Business Development & Recruitment */}
          <motion.div
            className="service-card p-6 bg-white border border-black rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-semibold text-black mb-4">
              Business Development & Recruitment
            </h3>
            <ul className="text-lg text-black space-y-4 pl-6 list-disc">
              <li>Recruitment strategies for hiring qualified professionals</li>
              <li>
                Market positioning to enhance institutional and brand
                credibility
              </li>
              <li>Employer branding solutions to attract top talent</li>
            </ul>
          </motion.div>

          {/* Training & Professional Development */}
          <motion.div
            className="service-card p-6 bg-white border border-black rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-black mb-4">
              Training & Professional Development
            </h3>
            <ul className="text-lg text-black space-y-4 pl-6 list-disc">
              <li>
                Workforce training programs to develop leadership and
                operational excellence
              </li>
              <li>
                Coaching sessions tailored for institutions and service
                providers
              </li>
              <li>
                Customized staff training programs to enhance workplace
                efficiency
              </li>
            </ul>
          </motion.div>

          {/* Marketing & Branding Support */}
          <motion.div
            className="service-card p-6 bg-white border border-black rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold text-black mb-4">
              Marketing & Branding Support
            </h3>
            <ul className="text-lg text-black space-y-4 pl-6 list-disc">
              <li>
                Social media marketing tailored for institutions and businesses
              </li>
              <li>Content strategy and brand management</li>
              <li>
                Campaign planning for business visibility and reputation
                building
              </li>
            </ul>
          </motion.div>

          {/* Product & Service Development */}
          <motion.div
            className="service-card p-6 bg-white border border-black rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-black mb-4">
              Product & Service Development
            </h3>
            <ul className="text-lg text-black space-y-4 pl-6 list-disc">
              <li>Market research for new product and service positioning</li>
              <li>Business strategy consulting for scaling operations</li>
              <li>
                Digital presence optimization through website and social media
                strategies
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Button */}
        <div className="flex justify-center mt-12">
          <button
            className="bg-black hover:bg-[#293c4d] border border-gray-400 px-8 py-4 rounded-3xl text-white font-semibold text-md md:text-lg transition duration-300 ease-in-out"
          >
            Book a Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
