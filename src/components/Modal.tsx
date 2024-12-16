import React from "react";

interface ModalProps {
  title: string;
  description: string;
  extraInfo: string;
  image: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ title, extraInfo, image, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 z-50 flex justify-center items-center">
      <div className="bg-white w-full h-full md:w-[80%] md:h-[90%] rounded-lg relative p-6 shadow-lg overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-6 text-white hover:text-green-500 text-4xl font-bold"
        >
          &times;
        </button>
       {/* content for modal  */}
        <img 
          src={image} 
          alt={title} 
          className="w-full h-72 object-cover rounded-md mb-6" 
        />
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-gray-700 text-lg leading-relaxed">{extraInfo}</p>
      </div>
    </div>
  );
};

export default Modal;