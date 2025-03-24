import BackToHomeButton from "./BackHome";

const Location = () => {
    return (
        <section
            id="location"
            className="relative mt-20 bg-gradient-to-t from-[#2d452b] to-[#1b2c1a] px-4 pt-20 border-b-4 border-[#f5a623]"
        >
            <div className="container mx-auto text-left max-w-5xl">
                <h2 className="text-4xl sm:text-6xl font-semibold text-white mb-12">
                    Our Location
                </h2>

                <div className="space-y-6 text-white" style={{ fontFamily: "Bitter" }}>
                    <p className="text-lg">
                        <strong>Address:</strong> Suite 1, 38 Railway Parade, Lakemba, NSW 2195, Australia
                    </p>

                    <div className="rounded-lg overflow-hidden shadow-lg border-4 border-white">
                        <iframe
                            title="IQRA Location Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.611880982196!2d151.07350797626586!3d-33.91995827321902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12bdc8fba9277b%3A0x4691d8d0f963ad02!2s38%20Railway%20Parade%2C%20Lakemba%20NSW%202195%2C%20Australia!5e0!3m2!1sen!2sau!4v1711222763734!5m2!1sen!2sau"
                            width="100%"
                            height="450"
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full"
                        ></iframe>
                    </div>
                </div>
                <BackToHomeButton />
            </div>
        </section>
    );
};

export default Location;
