import React, { useState } from "react";
import Button from "./Button";
import Modal from "./Modal";

// CardProps: Define the types for the Card's props
interface CardProps {
  title: string;
  description: string;
  extraInfo: string;
  image: string;
  buttonLabel: string;
}

// Create the Card component
const Card: React.FC<CardProps> = ({ title, description, image, buttonLabel, extraInfo }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      {/* Card Display */}
      <div className="border rounded-xl shadow-md pb-20 relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full object-cover rounded-t-md mb-4" 
        />
        <div className="px-4">
          <h3 className="text-xl text-left font-bold mb-2">{title}</h3>
          <p className="text-gray-600 text-left">{description}</p>
          <div className="absolute bottom-4 left-4 right-4">
            <Button 
              label={buttonLabel} 
              onClick={handleOpenModal} 
              styleClass="font-bold !border !border-green-500"
            />
          </div>
        </div>
      </div>

      {/* Full-Screen Modal */}
      {isModalOpen && (
        <Modal
          title={title}
          description={description}
          extraInfo={extraInfo}
          image={image}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default Card;