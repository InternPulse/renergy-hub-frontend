import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItem {
    id: string;
    title: string;
    content: string;
}

const accordionItems: AccordionItem[] = [
    {
        id: 'one',
        title: 'What does the Renergy Hub offer?',
        content: 'Renergy Hub provides innovative renewable energy solutions designed to help individuals and businesses transition to sustainable energy sources. Our product line includes solar panels, energy storage systems, and smart home energy management tools.',
    },
    {
        id: 'two',
        title: 'What are the benefits of Renergy Hub products?',
        content: 'Our products offer multiple benefits: significant reduction in electricity costs, decreased carbon footprint, increased energy independence, cutting-edge technology integration, and long-term sustainable energy solutions for both residential and commercial applications.',
    },
    {
        id: 'three',
        title: 'How do I install Renergy Hub products?',
        content: 'We offer comprehensive installation services. Our process includes a free home energy assessment, custom system design, professional installation by certified technicians, and post-installation support. We handle everything from initial consultation to final setup and connection.',
    },
    {
        id: 'four',
        title: 'How often should I inspect Renergy Hub products?',
        content: 'We recommend a professional inspection annually. However, our products are designed with self-monitoring capabilities. Our smart systems provide real-time performance tracking through a mobile app, alerting you to any maintenance needs or potential issues.',
    },
    {
        id: 'five',
        title: 'How can I purchase Renergy Hub products?',
        content: 'You can purchase our products through multiple channels: our official website, authorized dealers, direct consultation with our sales team, and select retail partners. We offer flexible financing options, including installment plans and green energy loans.',
    },
];

const FAQs: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<string | null>(null);

    const toggleAccordion = (id: string) => {
        setActiveIndex(prevIndex => prevIndex === id ? null : id);
    };

    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-lg overflow-hidden">
            <h2 className='text-left text-2xl font-bold mb-6 pt-6 pl-4'>FAQs</h2>
            {accordionItems.map((item) => (
                <div 
                    key={item.id} 
                    className={`border border-black-200 m-3 rounded transition-all duration-300 ease-in-out 
                        ${activeIndex === item.id ? 'bg-white' : 'bg-white'}`}
                >
                    <button
                        onClick={() => toggleAccordion(item.id)}
                        className="w-full flex justify-between items-center p-4 text-left 
                            focus:outline-none transition-colors"
                    >
                        <span className={`text-base sm:text-lg font-semibold
                            ${activeIndex === item.id ? 'text-green-500' : 'text-gray-800'}`}>
                            {item.title}
                        </span>
                        <ChevronDown 
                            className={`w-6 h-6 transform transition-transform duration-300 
                                ${activeIndex === item.id ? 'rotate-180 text-green-500' : 'text-gray-500'}`} 
                        />
                    </button>

                    {activeIndex === item.id && (
                        <div 
                            className="px-4 pb-4 text-sm sm:text-base text-gray-600 animate-fade-in"
                        >
                            {item.content}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default FAQs;