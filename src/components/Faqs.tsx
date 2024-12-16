import { useState } from "react";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";

interface Faq {
  question: string;
  answer: string;
}

const Faqs: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: Faq[] = [
    {
      question: "What does Renergy Hub offer?",
      answer: "Renergy Hub offers innovative and sustainable energy solutions for homes, businesses, and communities.",
    },
    {
      question: "What are the benefits of Renergy Hub products?",
      answer: "They provide reliable, eco-friendly energy, reduce utility costs, and support a sustainable future.",
    },
    {
      question: "How do I install Renergy Hub products?",
      answer: "Installation is simple and handled by certified professionals or guided by clear user instructions.",
    },
    {
      question: "How often should I inspect Renergy Hub products?",
      answer: "Regular inspections every 6–12 months are recommended to ensure optimal performance.",
    },
    {
      question: "How can I purchase the Renergy Hub products?",
      answer: "Products can be purchased directly from our website or through authorized distributors.",
    },
  ];

  const toggleAnswer = (index: number): void => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col px-4 py-8 md:px-8 lg:px-32">
      <h2 className="text-2xl font-bold mb-6">FAQs</h2>
      <div className="w-full space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg hover:shadow-md transition-shadow"
          >
            <div
              className="flex items-center justify-between p-4 cursor-pointer"
              onClick={() => toggleAnswer(index)}
            >
              <p className="text-gray-700">{faq.question}</p>
              {activeIndex === index ? (
                <FaChevronDown className="text-gray-500" />
              ) : (
                <FaChevronRight className="text-gray-500" />
              )}
            </div>
            {activeIndex === index && (
              <div className="p-4 text-gray-600 bg-green-50">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
