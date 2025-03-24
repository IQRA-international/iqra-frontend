import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#2d452b] to-[#1b2c1a] text-white px-4">
      <div className="text-center max-w-xl">
        <h1 className="text-4xl sm:text-6xl font-bold mb-6">Thank You!</h1>
        <p className="text-xl mb-8" style={{ fontFamily: "Bitter" }}>
          We’ve received your enquiry. A member of our team will get back to you shortly.
        </p>
        <Link
          to="/"
          className="bg-white text-[#2d452b] font-semibold px-6 py-3 rounded-full hover:bg-[#f5a623] hover:text-white transition-all duration-300"
        >
          ← Return to Home
        </Link>
      </div>
    </section>
  );
};

export default ThankYou;
