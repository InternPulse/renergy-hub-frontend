import React from 'react';
import Button from "./Button";

// Define the types for the Card component's props
interface CardProps {
  title: string;
  description: string;
  image: string;
  buttonLabel: string;
  onButtonClick?: () => void;
}

// Create the Card component with TypeScript
const Card: React.FC<CardProps> = ({ 
  title, 
  description, 
  image, 
  buttonLabel, 
  onButtonClick 
}) => {
  return (
    <div className='border rounded-lg shadow-lg'>
      <img 
        src={image} 
        alt={title} 
        className='w-full object-cover rounded-md' 
      />
      <h3 className='text-xl font-bold mt-2'>{title}</h3>
      <p className='text-gray-600 my-2'>{description}</p>
      <Button 
        label={buttonLabel} 
        onClick={onButtonClick} 
        styleClass="bg-green-500 text-white" 
      />
    </div>
  );
};

export default Card;