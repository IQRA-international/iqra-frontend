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
        {/* Glass Effect Container with grid-rows-2 */}
        <div className="text-black mx-auto rounded-xl backdrop-blur-sm max-w-4xl">
          <div className="grid grid-rows-2">
            {/* Top Section: Main Heading and Main Description */}
            <div className="green-container p-8">
              {/* Main Heading */}
              <motion.h1
                className="maintitle text-white text-2xl sm:text-3xl md:text-5xl font-extrabold"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                Tailored Solutions for Business Growth & Operations
              </motion.h1>
            </div>

            {/* Bottom Section: Why Choose Us List */}
            <div className="white-container p-8 text-2xl text-[#2d452b]" style={{fontFamily:"Bitter"}}>
              <ul className="">
                <motion.li
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                >
                  <b>IQRA International</b> provides tailored business solutions, from product sourcing and operational setup to branding and workforce consulting. We help businesses establish, refine, and scale with strategic, cost-effective support.
                </motion.li>
              </ul>
            </div>
          </div>
        </div>

        {/* Button */}
        <motion.div
          className="flex justify-center pt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.7 }}
        >
          <a href="mailto:Info@iqrainternational.com.au">
            <button className="bg-white hover:bg-[#1c3a23] border border-gray-400 px-8 py-2 rounded-full font-extrabold text-[#2d452b] hover:text-white text-xl md:text-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
              Book a<br/> Consultation
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
