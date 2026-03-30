import { Link } from "react-router-dom";

const BackToHomeButton = () => {
  return (
    <div className="mt-16 flex justify-center">
      <Link to="/" className="btn-back">← Go Back</Link>
    </div>
  );
};

export default BackToHomeButton;
