

const SecurityDocuments = () => {
    return (
        // container div
        <div className="bg-[#E6E6E6] flex gap-4 flex-col py-5 mx-4">
            {/* top header */}
            <div className="bg-white -mt-5 px-4 py-8">
                <h1 className="font-semibold text-[24px]">Security and Compliance</h1>
                <p className="text-[18px]">
                    At Renergy Hub, we are committed to maintaining
                    the highest standards of security and compliance in our
                    e-commerce operations.
                </p>
            </div>
            {/* data protection container */}
            <div className="shadow-sm rounded-sm bg-white -mt-4 px-10 py-8">
                <div className="flex flex-col gap-4">
                    {/* data protection header */}
                    <div className="flex gap-3 font-semibold">
                        <img src="/shield.png" alt="shield" />
                        <h2 className="text-[18px]">Data Protection</h2>
                    </div>

                    <div>
                        <h2 className="text-[#565656]">
                            We Employ industry- leading encryption and security measures to protection your personal and financial information.
                            We take the protection of your personal and financial information seriously. Our data protection measures include:
                        </h2>
                    </div>

                    <div>
                        <ul className="list-disc pl-5 text-[#565656]">
                            <li>End-to-end encryption for all data transmissions</li>
                            <li>Regular security audits and penetration testing</li>
                            <li>Strict access controls and authentication procedures for our staff</li>
                            <li>Secure, off-site data backups</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* PCI container */}
            <div className="shadow-sm rounded-sm bg-white px-10 py-8">
                <div className="flex flex-col gap-4">
                    {/* PCI header */}
                    <div className="flex gap-3 font-semibold">
                        <img src="/credit-card.png" alt="card" />
                        <h2 className="text-[18px]">PCI Compliance</h2>
                    </div>

                    <div>
                        <h2 className="text-[#565656]">
                            We adhere to the Payment Card Industry Data Security Standard (PCI DSS), which is a set of security standards designed to ensure that ALL companies that accept, 
                            process, store or transmit credit card information maintain a secure environment.
                        </h2>
                    </div>

                    <div>
                        <ul className="list-disc pl-5 text-[#565656]">
                            <li>Schedule quarterly security audits and vulnerability scans.</li>
                            <li>Document and address findings in a timely manner</li>
                            <li>Ensure compliance with relevant standards like ISO 27001, PCI DSS (if applicable), etc</li>
                            <li>Secure, off-site data backups</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Regulatory container */}
            <div className="shadow-sm rounded-sm bg-white px-10 py-8">
                <div className="flex flex-col gap-4">
                    {/* Regulatory header */}
                    <div className="flex gap-3 font-semibold">
                        <img src="/file-text.png" alt="file" />
                        <h2 className="text-[18px]">Regulatory Compliance</h2>
                    </div>

                    <div>
                        <h2 className="text-[#565656]">
                            Our operations comply with all relevant energy sector regulations and e-commerce laws, including:
                        </h2>
                    </div>

                    <div>
                        <ul className="list-disc pl-5 text-[#565656]">
                            <li>The Federal Trade Commission's (FTC) regulations on e-commerce and digital payments</li>
                            <li>The CAN-SPAM Act for our email marketing practices</li>
                            <li>The General Data Protection Regulation (GDPR) for our European customers</li>
                            <li>State-specific renewable energy regulations and incentives</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecurityDocuments
