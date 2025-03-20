import { FaMapMarkerAlt, FaEnvelope, FaBusinessTime } from "react-icons/fa";
import { motion } from "framer-motion";
import logo from "/icons/9.svg"
import banner from "/icons/10.svg"

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4 bg-[#f7f4f0] text-white">
      <div className="container mx-auto max-w-5xl">
        {/* Left-Aligned Text */}
        <div className="max-w-xl text-left">
          <img src={logo} alt="Iqra International" className="w-full h-full mx-auto" />
          <h3
            className="text-2xl font-semibold text-black pt-1"
            style={{ fontFamily: "Bitter" }}
          >
            is ready to help build and grow your business.
            <br />
            Let’s discuss your needs and find the best solutions for you.
          </h3>
        </div>

        {/* Main Container with Two Columns */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mt-10"
          style={{ fontFamily: "Bitter" }}
        >
          <div>
            {/* Contact Information Box - SHORTER HEIGHT */}
            <motion.div
              className="p-6 bg-[#2d4b2a] text-white rounded-lg shadow-lg h-auto max-h-[250px] flex flex-col justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <ul className="space-y-3 text-lg">
                <li className="flex items-center">
                  <FaMapMarkerAlt className="text-xl text-[#c4d8b5] mr-3" />
                  Suite 1, 38 Railway Pde, Lakemba, NSW 2195
                </li>
                <li className="flex items-center">
                  <FaEnvelope className="text-xl text-[#c4d8b5] mr-3" />
                  <a
                    href="mailto:Info@iqrainternational.com.au"
                    className="underline"
                  >
                    info@iqrainternational.com.au
                  </a>
                </li>
                <li className="flex items-center">
                  <FaBusinessTime className="text-xl text-[#c4d8b5] mr-3" />
                  ABN: 80 631 555 505
                </li>
              </ul>
            </motion.div>
            <div className="my-auto">
              <img src={banner} alt="Iqra International" className="w-full h-full mx-auto p-10" />
            </div>
          </div>

          {/* Enquiry Form - TALLER HEIGHT */}
          <motion.div
            className="p-6 bg-[#2d4b2a] text-white rounded-lg shadow-lg h-auto flex flex-col justify-between"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">Submit your enquiry</h3>
            <form className="space-y-4 flex-grow">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 rounded-md bg-white text-black border-none"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 rounded-md bg-white text-black border-none"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full p-3 rounded-md bg-white text-black border-none"
              />
              <input
                type="text"
                placeholder="Business Name (if applicable)"
                className="w-full p-3 rounded-md bg-white text-black border-none"
              />
              <textarea
                placeholder="Enquiry Details"
                className="w-full p-3 h-24 rounded-md bg-white text-black border-none"
              ></textarea>
              <button className="w-full bg-[#f4e8d5] text-[#2d4b2a] py-3 rounded-md font-semibold">
                Submit
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
