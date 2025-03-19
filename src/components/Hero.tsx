import iqralogo from "../../public/iqralogo.svg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="hero-background py-32 px-6 relative text-white"
      style={{
        backgroundImage: 'url("/hero.jpeg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto text-left relative z-10">
        {/* Logo with React Spring Animation */}
        <div className="flex justify-center mb-8">
          <div>
            <img
              src={iqralogo}
              alt="iqra Marketing Logo"
              className="h-48"
            />
          </div>
        </div>

        {/* Glass Effect Container with grid-rows-2 */}
        <div className="text-black mx-auto rounded-xl backdrop-blur-sm mb-8 max-w-4xl">
          <div className="grid grid-rows-2 gap-8">
            {/* Top Section: Main Heading and Main Description */}
            <div className="space-y-6 glass-container p-8 transform transition-all duration-300 ease-in-out hover:scale-105">
              {/* Main Heading */}
              <motion.h1
                className="maintitle text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                Attract Growth, Expand Potential
              </motion.h1>

              {/* Main Description */}
              <motion.p
                className="text-black sm:text-lg md:text-xl leading-relaxed mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <b>
                  <i>iqra Marketing</i>
                </b>{" "}
                provides businesses with the tools and strategies needed to enhance
                their brand, develop their workforce, and expand their market reach.
                We specialize in business development, recruitment, and professional
                training, helping institutions and service providers build
                sustainable growth strategies.
              </motion.p>
            </div>

            {/* Bottom Section: Why Choose Us List */}
            <div className="glass-container p-8 transform transition-all duration-300 ease-in-out hover:scale-105">
              <motion.p
                className="text-black sm:text-xl md:text-2xl leading-relaxed text-left"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
              >
                <b className="text-2xl md:text-4xl">Why Choose Us?</b>
              </motion.p>

              <ul className="list-disc pl-6 space-y-4 pt-4">
                <motion.li
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                >
                  <b>Industry Expertise –</b> Specializing in professional
                  development and marketing support for businesses.
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                >
                  <b>Tailored Business Solutions –</b> Every strategy is
                  customized to fit institutional needs.
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
                >
                  <b>Staff & Institutional Growth Focused –</b> No student
                  recruitment, only business-centric solutions.
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
                >
                  <b>Proven Marketing Strategies –</b> Implementing results-driven
                  approaches to brand and market positioning.
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
                >
                  <b>Magnet for Institutional Success –</b> Helping businesses
                  attract top professionals and expand their market reach.
                </motion.li>
              </ul>
            </div>
          </div>
        </div>

        {/* Button */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.7 }}
        >
          <a href="mailto:">
            <button className="bg-black hover:bg-white border border-gray-400 px-8 py-4 rounded-3xl hover:text-black text-white font-semibold text-md md:text-lg transition duration-300 ease-in-out">
              Get In Touch
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
