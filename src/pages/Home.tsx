import Hero from "../components/Hero";
import Services from "../components/Services";
import Trading from "../components/Trading";
import Consulting from "../components/Consulting";
import Training from "../components/Training";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>
      <Hero />
      {/* Marquee divider */}
      <div className="py-6 bg-[#0B1A0B] border-y border-[#EDE5D8]/[0.03] overflow-hidden">
        <div className="marquee-track">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 px-4">
              {["Business Setup", "Procurement", "Consulting", "Fit-Outs", "Branding", "Workforce", "Training", "Compliance", "Strategy", "Supply Chain"].map((t, j) => (
                <span key={j} className="flex items-center gap-8 whitespace-nowrap">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#EDE5D8]/15 font-medium">{t}</span>
                  <span className="w-1 h-1 rounded-full bg-[#D4A853]/30" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
      <Services />
      <div className="accent-line" />
      <Trading />
      <div className="accent-line-green" />
      <Consulting />
      <div className="accent-line" />
      <Training />
      <div className="accent-line-green" />
      <Contact />
    </>
  );
};

export default Home;
