import React from 'react';
import Card from "./Card";

// Define the structure of a product
interface Product {
  title: string;
  description: string;
  image: string;
  buttonLabel: string;
  extraInfo: string
}

// Define the props for the ProductCard component
interface ProductCardProps {
  product: Product;
}

// Create the ProductCard component with TypeScript
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // Destructure the product object
  const { title, description, image, buttonLabel, extraInfo } = product;

  return (
    <Card
      title={title}
      description={description}
      image={image}
      buttonLabel={buttonLabel}
      extraInfo={extraInfo}
    />
  );
};

export default ProductCard;