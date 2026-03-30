import BackToHomeButton from "./BackHome";

const Location = () => {
  return (
    <div className="legal-page px-5 md:px-10">
      <div className="max-w-5xl mx-auto">
        <span className="shiny-text text-[10px] uppercase tracking-[0.25em] font-medium block mb-4">Find Us</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mt-2 mb-8">Our Location</h2>
        <p className="text-[#EDE5D8]/55 text-sm mb-8">
          <strong className="text-[#EDE5D8]/80">Address:</strong> Suite 1, 38 Railway Parade, Lakemba, NSW 2195, Australia
        </p>
        <div className="overflow-hidden border border-[#EDE5D8]/[0.06]">
          <iframe
            title="IQRA Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.611880982196!2d151.07350797626586!3d-33.91995827321902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12bdc8fba9277b%3A0x4691d8d0f963ad02!2s38%20Railway%20Parade%2C%20Lakemba%20NSW%202195%2C%20Australia!5e0!3m2!1sen!2sau!4v1711222763734!5m2!1sen!2sau"
            width="100%" height="450" loading="lazy" allowFullScreen
            referrerPolicy="no-referrer-when-downgrade" className="w-full"
          />
        </div>
        <BackToHomeButton />
      </div>
    </div>
  );
};

export default Location;
