import { FaMapMarkerAlt, FaEnvelope, FaBusinessTime } from "react-icons/fa";
import { motion } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
  const ref = useRef(null);

  return (
    <section id="contact" className="py-24 md:py-40 px-5 md:px-10 bg-[#0B1A0B] relative overflow-hidden">
      <div className="orb orb-gold bottom-[20%] right-[-10%]" />

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <div className="mb-16 md:mb-24">
          <motion.span className="shiny-text text-[10px] uppercase tracking-[0.25em] font-medium block mb-4"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            Let's Talk
          </motion.span>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold text-[#EDE5D8] tracking-tight leading-[0.95]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.25, 0.8, 0.25, 1], delay: 0.1 }}>
            Get in <em className="font-light">Touch</em>
          </motion.h2>
          <motion.p className="text-[#EDE5D8]/40 mt-5 max-w-lg text-sm md:text-base leading-relaxed font-light"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
            Ready to help build and grow your business. Let's discuss your needs and find the best solutions for you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Contact Info */}
          <motion.div className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}>
            <div className="border border-[#EDE5D8]/[0.06] p-7 md:p-8">
              <h3 className="text-lg font-semibold text-[#EDE5D8]/80 mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
                Contact Information
              </h3>
              <ul className="space-y-6">
                {[
                  { icon: FaMapMarkerAlt, label: "Address", value: "Suite 1, 38 Railway Pde,\nLakemba, NSW 2195" },
                  { icon: FaEnvelope, label: "Email", value: "info@iqrainternational.com.au", href: "mailto:Info@iqrainternational.com.au" },
                  { icon: FaBusinessTime, label: "ABN", value: "80 631 555 505" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 group">
                    <div className="w-9 h-9 border border-[#EDE5D8]/[0.06] flex items-center justify-center flex-shrink-0 group-hover:border-[#D4A853]/30 group-hover:bg-[#D4A853]/5 transition-all duration-300">
                      <item.icon className="text-[#D4A853]/60 text-xs" />
                    </div>
                    <div>
                      <p className="text-[#EDE5D8]/25 text-[9px] uppercase tracking-[0.2em] mb-1">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-[#EDE5D8]/60 text-sm hover:text-[#D4A853] transition-colors duration-300 whitespace-pre-line">{item.value}</a>
                      ) : (
                        <p className="text-[#EDE5D8]/60 text-sm whitespace-pre-line">{item.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div className="lg:col-span-3"
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}>
            <form action="https://formsubmit.co/info@iqrainternational.com.au" method="POST" className="space-y-4">
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://www.iqrainternational.com.au/thank-you" />
              <input type="hidden" name="_subject" value="New Enquiry from IQRA Website" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" name="name" placeholder="Full Name" required className="form-input" />
                <input type="email" name="email" placeholder="Email Address" required className="form-input" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" name="phone" placeholder="Phone Number" className="form-input" />
                <input type="text" name="business" placeholder="Business Name" className="form-input" />
              </div>
              <textarea name="message" placeholder="Tell us about your project..." required rows={5} className="form-input resize-none" />
              <button type="submit" className="btn-primary w-full text-[#EDE5D8] bg-[#2d452b] border border-[#EDE5D8]/[0.06] py-4 hover:border-[#D4A853]">
                <span className="btn-fill" />
                <span className="relative z-[1]">Send Enquiry →</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
