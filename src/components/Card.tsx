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
    <div className='border rounded-xl shadow-md pb-20 relative'>
      <img 
        src={image} 
        alt={title} 
        className='w-full object-cover rounded-t-md mb-4' 
      />
      <div className="px-4">   
      <h3 className='text-xl text-left font-bold mb-2'>{title}</h3>
      <p className='text-gray-600 text-left' >{description}</p>
      <div className="absolute bottom-4 left-4 right-4">
      <Button label={buttonLabel} onClick={onButtonClick} styleClass="font-bold !border !border-green-500"/>
      </div>
    </div>
      </div>
  );
};

export default Card;