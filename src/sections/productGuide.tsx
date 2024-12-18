import React from 'react';
import ProductCard from '../components/ProductCard';

// Define the Product interface
interface Product {
  title: string;
  description: string;
  image: string;
  buttonLabel: string;
  extraInfo: string;
}

// Create the products array with the defined interface
const products: Product[] = [
  {
    title: "Monocystalline",
    description: "A solar panel with a high efficiency rate of around 20%. Monocrystalline panels are often used for...",
    extraInfo: "Monocrystalline panels are known for their longevity and compact design, making them ideal for space-constrained rooftops.",
    image: "Monocrystalline.png",
    buttonLabel: "View More",
  },
  {
    title: "Polycrystalline",
    description: "A solar panel with an efficiency rate of around 15%. Polycrystalline panels are less efficient than...",
    extraInfo: "Polycrystalline panels are more affordable but slightly less efficient, suitable for areas with ample space.",
    image: "Polycrystalline.png",
    buttonLabel: "View More",
  },
  {
    title: "Thin firm",
    description: "A solar panel with an efficiency rate of around 7-10%. Thin-film panels are relatively low cost...",
    extraInfo: "Thin-film panels are lightweight, making them easier to install, but they require a lot of space for optimal performance.",
    image: "Thin firm.png",
    buttonLabel: "View More",
  },
  {
    title: "String inverter",
    description: "A simple, affordable solution for unobstructed spaces. However, they can be inefficient in partial...",
    extraInfo: "String inverters work well in environments without shading but are less efficient if one panel underperforms.",
    image: "String inverter.png",
    buttonLabel: "View More",
  },
  {
    title: "Micro inverter",
    description: "Attached to each solar panel, allowing each panel to convert DC to AC independently....",
    extraInfo: "Micro inverters are ideal for shaded or complex installations as they optimize the performance of individual panels.",
    image: "Micro inverter.png",
    buttonLabel: "View More",
  },
  {
    title: "Hybrid inverter",
    description: "Combine the functions of an inverter charger and a charge controller. They can be used for... ",
    extraInfo: "Hybrid inverters are great for solar-plus-battery systems, allowing energy storage for later use.",
    image: "Hybrid inverter.png",
    buttonLabel: "View More",
  },
  {
    title: "Horizontal-axis turbines",
    description: "Combine the functions of an inverter charger and a charge controller. They can be used for... ",
    extraInfo: "Horizontal-axis turbines are highly efficient for large-scale energy production. They require an open area with consistent wind direction and are typically used in wind farms. They feature long blades that rotate parallel to the ground, converting wind energy into electricity.",
    image: "Horizontal-axis turbines.png",
    buttonLabel: "View More",
  },
  {
    title: "Vertical-axis turbines",
    description: "Combine the functions of an inverter charger and a charge controller. They can be used for... ",
    extraInfo: "Vertical-axis turbines are compact and can generate power regardless of wind direction. They are well-suited for urban or residential areas due to their smaller footprint and quieter operation, but they tend to be less efficient than horizontal-axis turbines.",
    image: "Vertical-axis turbines.png",
    buttonLabel: "View More",
  },
];

// Define the ProductGuide as a React Functional Component
const ProductGuide: React.FC = () => {

  // grouping sections 
  const solarPanels = products.slice(0, 3);
  const inverters = products.slice(3, 6);
  const windTurbines = products.slice(6);

  return (
    <section className='py-10'>
      <h2 className='text-3xl font-bold text-center mb-6'>Product Guide</h2>
      <p className="text-center max-w-2xl mx-auto mb-10 px-4">
        We provide detailed insights to help our customers understand each renewable energy product, compare options, and make informed decisions about the right products for their needs
      </p>
      {/* solar panels section  */}
      <div className="container mx-auto px-4">
        <h2 className='text-3xl font-bold text-left mb-6'>Solar Panel</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {solarPanels.map((product, index) => (
            <ProductCard key={`solar-${index}`} product={product} />
          ))}
        </div>

        {/* separator */}
        <div className="my-16">
        </div>

        {/* Batteries ssection */}
        <h2 className='text-3xl font-bold text-left mb-6'>Energy Solar Panels</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {inverters.map((product, index) => (
            <ProductCard key={`inverter-${index}`} product={product} />
          ))}
        </div>

        {/* separator */}
        <div className="my-20">
        </div>

        {/* Wind Turbines section  */}
        <h2 className='text-3xl font-bold text-left mb-6 md:mb-8 lg:mb-10'>Wind Turbines</h2>
        <div className='flex justify-center space-around gap-6 md:gap-8 lg:gap-10'>
          {windTurbines.map((product, index) => (
            <ProductCard key={`wind-${index}`} product={product} />
          ))}
        </div>

      </div>

    </section>
  );
};

export default ProductGuide;