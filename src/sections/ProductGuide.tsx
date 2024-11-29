import React from 'react';
import ProductCard from '.././Components/ProductCard';

// Define the Product interface
interface Product {
  title: string;
  description: string;
  image: string;
  buttonLabel: string;
}

// Create the products array with the defined interface
const products: Product[] = [
  {
    title: "Monocystalline",
    description: "A solar panel with a high efficiency rate of around 20%. Monocrystalline panels are often used for...",
    image: "Monocrystalline.png",
    buttonLabel: "View More",
  },
  {
    title: "Polycrystalline",
    description: "A solar panel with an efficiency rate of around 15%. Polycrystalline panels are less efficient than...",
    image: "Polycrystalline.png",
    buttonLabel: "View More",
  },
  {
    title: "Thin firm",
    description: "A solar panel with an efficiency rate of around 7-10%. Thin-film panels are relatively low cost...",
    image: "Thin firm.png",
    buttonLabel: "View More",
  },
  {
    title: "String inverter",
    description: "A simple, affordable solution for unobstructed spaces. However, they can be inefficient in partial...",
    image: "String inverter.png",
    buttonLabel: "View More",
  },
  {
    title: "Micro inverter",
    description: "Attached to each solar panel, allowing each panel to convert DC to AC independently....",
    image: "Micro inverter.png",
    buttonLabel: "View More",
  },
  {
    title: "Hybrid inverter",
    description: "Combine the functions of an inverter charger and a charge controller. They can be used for... ",
    image: "Hybrid inverter.png",
    buttonLabel: "View More",
  },
  {
    title: "Horizontal-axis turbines",
    description: "Combine the functions of an inverter charger and a charge controller. They can be used for... ",
    image: "Horizontal-axis turbines.png",
    buttonLabel: "View More",
  },
  {
    title: "Vertical-axis turbines",
    description: "Combine the functions of an inverter charger and a charge controller. They can be used for... ",
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
      <p className="text-center max-w-2xl mx-auto">
        We provide detailed insights to help our customers understand each renewable energy product, compare options, and make informed decisions about the right products for their needs
      </p>
      {/* solar panels section  */}
      <div className="container mx-auto">
        <h2 className='text-3xl font-bold text-left mb-6'>Solar Panel</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 container mx-auto'>
          {solarPanels.map((product, index) => (
            <ProductCard key={`solar-${index}`} product={product} />
          ))}
        </div>

        {/* separator */}
        <div className="my-20">
        </div>

        {/* Batteries ssection */}
        <h2 className='text-3xl font-bold text-left mb-6'>Energy Solar Panels</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 container mx-auto'>
          {inverters.map((product, index) => (
            <ProductCard key={`inverter-${index}`} product={product} />
          ))}
        </div>

        {/* separator */}
        <div className="my-20">
        </div>

        {/* Wind Turbines section  */}
        <h2 className='text-3xl font-bold text-left mb-6 md:mb-8 lg:mb-10'>Wind Turbines</h2>
        <div className='flex justify-center space-around container mx-auto gap-6 md:gap-8 lg:gap-10'>
          {windTurbines.map((product, index) => (
            <ProductCard key={`wind-${index}`} product={product} />
          ))}
        </div>

      </div>

    </section>
  );
};

export default ProductGuide;