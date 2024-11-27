

const SecurityDocuments = () => {
    return (
        // container div
        <div className="px-5 py-5">
            {/* top header */}
            <div className="py-5">
                <h1 className="font-semibold text-[24px]">Security and Compliance</h1>
                <p className="text-[18px]">
                    At Renergy Hub, we are committed to maintaining
                    the highest standards of security and compliance in our
                    e-commerce operations.
                </p>
            </div>
            {/* contents */}
            <div>
                {/* data protection container */}
                <div className="px-5 py-6 mx-5">
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
                {/* Regulatory container */}
                <div className="px-5 py-6 mx-5">
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
                <div className="px-5 py-6 mx-5">
                    <div className="flex flex-col gap-4">
                        {/* Regulatory header */}
                        <div className="flex gap-3 font-semibold">
                            <img src="/credit-card.png" alt="card" />
                            <h2 className="text-[18px]">PCI Compliance</h2>
                        </div>

                        <div>
                            <h2 className="text-[#565656]">
                                Our operations comply with all relevant energy sector regulations and e-commerce laws, including:
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
            </div>
        </div>
    )
}

export default SecurityDocuments
