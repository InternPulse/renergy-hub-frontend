import React from 'react';
import ProductCard from '../components/ProductCard';

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
  return (
    <section className='py-10'>
      <h2 className='text-3xl font-bold text-center mb-6'>Product Guide</h2>
      <p>We provides detailed insights to help our customers understand each renewable energy product, compare options, and make informed decisions about the right products for their needs</p>
      <h2 className='text-3xl font-bold text-left mb-6'>Solar Panel</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 container mx-auto'>
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductGuide;