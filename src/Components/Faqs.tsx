import { FaChevronRight } from "react-icons/fa";

const Faqs = () => {
  return (
    <div className="flex flex-col items-center px-4 py-8 md:px-8 lg:px-16">
      <h2 className="text-2xl font-bold mb-6 text-center">FAQs</h2>
      <div className="w-full space-y-4">
        {[
          "What does Renergy Hub offer?",
          "What are the benefits of Renergy Hub products?",
          "How do I install Renergy Hub products?",
          "How often should I inspect Renergy Hub products?",
          "How can I purchase the Renergy Hub products?",
        ].map((question, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 border border-gray-300 rounded-lg hover:shadow-md transition-shadow cursor-pointer"
          >
            <p className="text-gray-700 cursor-pointer">{question}</p>
            <FaChevronRight className="text-gray-500" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
