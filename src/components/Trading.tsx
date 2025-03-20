import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import picture1 from "../../public/2.png"
import picture2 from "../../public/3.png"
import picture3 from "../../public/4.png"
import picture4 from "../../public/8.png"
import picture5 from "../../public/9.png"


const Trading= () => {
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
    <section id="trading" className="py-20 px-4 bg-gradient-to-t from-[#2d452b] to-[#1b2c1a]">
      <div className="container mx-auto text-left">
        <h2
          className="text-6xl  font-semibold text-white mb-12"
        >
          Reliable Business Procurement & Trading
        </h2>
        <h3 className="text-white text-2xl" style={{fontFamily:"Bitter"}}>Sourcing the Right Tools for Your Business Success</h3>
        <h3 className="text-white text-xl" style={{fontFamily:"Bitter"}}>Whether you're setting up a restaurant, office, training center, or retail space, we ensure you have the right supplies at the right price. Our strong supplier network allows us to offer cost-effective solutions without compromising on quality.</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-6 mt-16">
  {/* First Card - Up */}
  <motion.div
    className="service-card w-full h-[450px] p-6 bg-white border border-black rounded-xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out lg:-mt-5"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
  >
    <img src={picture1} alt="Leadership Training" className="w-full h-36 object-cover rounded-md mb-4" />
    <h3 className="text-lg font-semibold text-[#506a13] mb-3">Business Setup & Equipment Supply
    </h3>
    <ul className="text-sm text-[#506a13] space-y-3 pl-4 list-disc">
      <li>Full-service supply chain management for business essentials</li>
      <li>Sourcing, procurement, and installation of office, kitchen, and retail equipment</li>
      <li>Custom orders based on specific business needs
      </li>
    </ul>
  </motion.div>

  {/* Second Card - Down */}
  <motion.div
    className="service-card w-full h-[450px] p-6 bg-white border border-black rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out lg:mt-5"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
    transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
  >
    <img src={picture2} alt="Brand Growth" className="w-full h-36 object-cover rounded-md mb-4" />
    <h3 className="text-lg font-semibold text-[#506a13] mb-3">Office & Training Facility Supplies</h3>
    <ul className="text-sm text-[#506a13] space-y-3 pl-4 list-disc">
      <li>Desks, ergonomic chairs, whiteboards, and training resources</li>
      <li> Custom-designed office furniture tailored for workspace efficiency</li>
      <li>IT equipment procurement for training centers and corporate use      </li>
    </ul>
  </motion.div>

  {/* Third Card - Up */}
  <motion.div
    className="service-card w-full h-[450px] p-6 bg-white border border-black rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out lg:-mt-5"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
    transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
  >
    <img src={picture3} alt="HR Development" className="w-full h-36 object-cover rounded-md mb-4" />
    <h3 className="text-lg font-semibold text-[#506a13] mb-3">Vendor & Supply Chain Management</h3>
    <ul className="text-sm text-[#506a13] space-y-3 pl-4 list-disc">
      <li>Reliable partnerships with vetted suppliers for high-quality materials</li>
      <li>Cost-effective product sourcing with streamlined procurement processes</li>
      <li>Handling logistics, warehousing, and inventory management</li>
    </ul>
  </motion.div>

  {/* Fourth Card - Down */}
  <motion.div
    className="service-card w-full h-[450px] p-6 bg-white border border-black rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out lg:mt-5"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
    transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
  >
    <img src={picture4} alt="Investment Strategies" className="w-full h-36 object-cover rounded-md mb-4" />
    <h3 className="text-lg font-semibold text-[#506a13] mb-3">Custom Sourcing & Specialty Orders</h3>
    <ul className="text-sm text-[#506a13] space-y-3 pl-4 list-disc">
      <li>Assisting businesses in finding unique or hard-to-source products</li>
      <li>Custom procurement plans to meet specific operational demands</li>
      <li>Bulk order discounts and fast-track delivery options</li>
    </ul>
  </motion.div>

  {/* Fifth Card - Up */}
  <motion.div
    className="service-card w-full h-[450px] p-6 bg-white border border-black rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out lg:-mt-5"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
    transition={{ duration: 0.7, ease: "easeOut", delay: 0.8 }}
  >
    <img src={picture5} alt="Technology & AI" className="w-full h-36 object-cover rounded-md mb-4" />
    <h3 className="text-lg font-semibold text-[#506a13] mb-3">Restaurant & Café Fit-Outs</h3>
    <ul className="text-sm text-[#506a13] space-y-3 pl-4 list-disc">
      <li>Commercial-grade kitchen appliances and dining furniture</li>
      <li>Bespoke restaurant layouts with optimized interior design solutions</li>
      <li>Procurement of catering and hospitality equipment</li>
    </ul>
  </motion.div>
</div>



      </div>
    </section>
  );
};

export default Trading;
