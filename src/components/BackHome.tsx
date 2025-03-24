import { Link } from "react-router-dom";

const BackToHomeButton = () => {
  return (
    <div className="mt-12 flex justify-center">
      <Link
        to="/"
        className="bg-white text-[#2d452b] font-semibold px-6 py-3 rounded-full border border-[#2d452b] hover:bg-[#f5a623] hover:text-white transition-all duration-300 ease-in-out"
      >
        ← Go Back
      </Link>
    </div>
  );
};

export default BackToHomeButton;
