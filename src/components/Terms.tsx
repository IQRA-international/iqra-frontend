import BackToHomeButton from "./BackHome";

const Terms = () => {
    return (
        <section
            id="terms"
            className="relative mt-20 bg-gradient-to-t from-[#2d452b] to-[#1b2c1a] px-4 pt-20 border-b-4 border-[#f5a623]"
        >
            <div className="container mx-auto text-left max-w-5xl">
                <h2 className="text-4xl sm:text-6xl font-semibold text-white mb-12">
                    Terms & Conditions
                </h2>

                <div className="space-y-10 text-white" style={{ fontFamily: "Bitter" }}>
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h3>
                        <p className="text-lg">
                            By accessing or using any services provided by IQRA International, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, you should refrain from using our services or website.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold mb-4">2. Services Provided</h3>
                        <p className="text-lg">
                            IQRA International offers business consulting, procurement, branding, fit-outs, recruitment, and strategic services tailored to client needs. We reserve the right to modify or discontinue services at any time without prior notice.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold mb-4">3. Client Responsibilities</h3>
                        <p className="text-lg">
                            Clients are responsible for providing accurate and complete information necessary to deliver our services effectively. Any delays or complications resulting from incomplete or incorrect information are not the responsibility of IQRA International.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold mb-4">4. Intellectual Property</h3>
                        <p className="text-lg">
                            All content, branding, designs, reports, and materials produced by IQRA International remain our intellectual property unless explicitly stated otherwise in a written agreement. Clients are not permitted to reproduce, resell, or distribute our work without prior consent.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold mb-4">5. Payment Terms</h3>
                        <p className="text-lg">
                            Payment terms are outlined in individual client agreements. Delayed payments may result in suspension of services. IQRA International reserves the right to charge late fees where applicable.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h3>
                        <p className="text-lg">
                            IQRA International will not be held liable for any indirect, incidental, or consequential damages arising from the use or inability to use our services. Our total liability under any circumstance shall be limited to the amount paid for the services in question.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold mb-4">7. Termination</h3>
                        <p className="text-lg">
                            We reserve the right to terminate any client engagement or restrict access to our services if there is a breach of these Terms, misuse of our platform, or unethical conduct.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold mb-4">8. Governing Law</h3>
                        <p className="text-lg">
                            These Terms & Conditions shall be governed by and interpreted in accordance with the laws of New South Wales, Australia. Any disputes will be subject to the exclusive jurisdiction of Australian courts.
                        </p>
                    </div>

                    <div>
                        <p className="text-lg italic">Last Updated: March 2025</p>
                    </div>

                    <div className="flex justify-center mb-10">
                        <BackToHomeButton />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Terms;
