import BackToHomeButton from "./BackHome";

const sections = [
  { title: "1. Acceptance of Terms", text: "By accessing or using any services provided by IQRA International, you agree to be bound by these Terms & Conditions." },
  { title: "2. Services Provided", text: "IQRA International offers business consulting, procurement, branding, fit-outs, recruitment, and strategic services tailored to client needs." },
  { title: "3. Client Responsibilities", text: "Clients are responsible for providing accurate and complete information necessary to deliver our services effectively." },
  { title: "4. Intellectual Property", text: "All content, branding, designs, reports, and materials produced by IQRA International remain our intellectual property unless explicitly stated otherwise." },
  { title: "5. Payment Terms", text: "Payment terms are outlined in individual client agreements. Delayed payments may result in suspension of services." },
  { title: "6. Limitation of Liability", text: "IQRA International will not be held liable for any indirect, incidental, or consequential damages arising from the use of our services." },
  { title: "7. Termination", text: "We reserve the right to terminate any client engagement or restrict access to our services if there is a breach of these Terms." },
  { title: "8. Governing Law", text: "These Terms & Conditions shall be governed by the laws of New South Wales, Australia." },
];

const Terms = () => {
  return (
    <div className="legal-page px-5 md:px-10">
      <div className="max-w-4xl mx-auto">
        <span className="shiny-text text-[10px] uppercase tracking-[0.25em] font-medium block mb-4">Legal</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mt-2 mb-12">Terms & Conditions</h2>
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

export default Terms;
