import { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaBusinessTime } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
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
    const elements = document.querySelectorAll(".contact-card");
    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="contact" className="py-20 px-4 bg-[#a6a6a6] text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-semibold text-black mb-8">
          Contact Us
        </h2>

        {/* Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Address */}
          <motion.div
            className="contact-card p-6 bg-white border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
            initial={{ opacity: 0, y: 30 }} // Start below (y: 30)
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }} // Slide up from bottom
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="flex items-center mb-4">
              <FaMapMarkerAlt className="text-4xl text-[#c72a00] mr-4" />
              <h3 className="text-xl font-semibold text-black">Address</h3>
            </div>
            <p className="text-lg sm:text-xl font-medium text-[#c72a00]">
              <b>Suite 2, 38 Railway Pde, Lakemba, NSW 2195</b>
            </p>
          </motion.div>

          {/* Email */}
          <motion.div
            className="contact-card p-6 bg-white border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
            initial={{ opacity: 0, y: 30 }} // Start below (y: 30)
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }} // Slide up from bottom
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <div className="flex items-center mb-4">
              <FaEnvelope className="text-4xl text-[#c72a00] mr-4" />
              <h3 className="text-xl font-semibold text-black">Email</h3>
            </div>
            <p className="text-lg sm:text-xl font-medium text-[#c72a00]">
              <b>
                <a
                  href="mailto:"
                  className="text-[#58a6f8] hover:underline"
                >
                  iqra@gmail.com
                </a>
              </b>
            </p>
          </motion.div>

          {/* ABN */}
          <motion.div
            className="contact-card p-6 bg-white border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
            initial={{ opacity: 0, y: 30 }} // Start below (y: 30)
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }} // Slide up from bottom
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
          >
            <div className="flex items-center mb-4">
              <FaBusinessTime className="text-4xl text-[#c72a00] mr-4" />
              <h3 className="text-xl font-semibold text-black">ABN</h3>
            </div>
            <p className="text-lg sm:text-xl font-medium text-[#c72a00]">
              <b>93 615 746 426</b>
            </p>
          </motion.div>
        </div>

        {/* Drop us a mail */}
        <div className="flex justify-center mt-8">
          <a href="mailto:">
            <button className="bg-black hover:bg-white border border-gray-400 px-8 py-4 rounded-3xl text-white font-semibold text-md md:text-lg transition duration-300 ease-in-out">
              Drop Us a Mail
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
