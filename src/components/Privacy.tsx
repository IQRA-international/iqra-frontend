import BackToHomeButton from "./BackHome";

const sections = [
  { title: "1. Overview", text: "At IQRA International, we are committed to protecting the privacy and personal information of our clients, partners, and website visitors. This Privacy Policy outlines how we collect, use, store, and safeguard the information you provide to us through our services and digital platforms." },
  { title: "2. Information We Collect", text: "We may collect personal and business-related information including, but not limited to: your name, contact details, company information, project requirements, and communication history." },
  { title: "3. How We Use Your Information", text: "Information collected is used to deliver tailored business solutions, respond to inquiries, improve our services, and manage client relationships. We may also use your data for internal analytics, marketing communication (with your consent), and legal compliance." },
  { title: "4. Data Security", text: "We implement industry-standard security measures to protect your information against unauthorized access, alteration, disclosure, or destruction." },
  { title: "5. Third-Party Sharing", text: "We do not sell or rent your personal information to third parties. Any third-party services used are contractually obligated to comply with data protection regulations." },
  { title: "6. Your Rights", text: "You have the right to access, correct, or delete your personal information. Contact us at info@iqrainternational.com.au." },
  { title: "7. Policy Updates", text: "This Privacy Policy may be updated periodically to reflect changes in our practices or legal requirements." },
];

const Privacy = () => {
  return (
    <div className="legal-page px-5 md:px-10">
      <div className="max-w-4xl mx-auto">
        <span className="shiny-text text-[10px] uppercase tracking-[0.25em] font-medium block mb-4">Legal</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mt-2 mb-12">Privacy Policy</h2>
        <div className="space-y-10">
          {sections.map((s, i) => (
            <div key={i}>
              <h3 className="font-semibold mb-3">{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
          <p className="text-[#EDE5D8]/25 text-xs italic">Last Updated: March 2025</p>
        </div>
        <BackToHomeButton />
      </div>
    </div>
  );
};

export default Privacy;
