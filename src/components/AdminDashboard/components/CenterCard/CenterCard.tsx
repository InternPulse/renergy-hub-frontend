import React from 'react';

interface CenterCardProps {
  type: string;
}

const CenterCard: React.FC<CenterCardProps> = () => {
  const vendorImages = [
    'https://via.placeholder.com/100',
    'https://via.placeholder.com/100',
    'https://via.placeholder.com/100',
    'https://via.placeholder.com/100',
    'https://via.placeholder.com/100',
    'https://via.placeholder.com/100',
  ];

  const buyerImages = [
    'https://via.placeholder.com/100',
    'https://via.placeholder.com/100',
    'https://via.placeholder.com/100',
    'https://via.placeholder.com/100',
    'https://via.placeholder.com/100',
    'https://via.placeholder.com/100',
  ];

  return (
    <div className="p-4">
      <h2 className="text-center text-xl mb-4">All User Mgt.</h2>
      <div className="flex justify-between gap-8">
        {/* Left Section - Vendors */}
        <div className="flex-1">
          <h5 className="text-lg text-center mb-2">Vendors</h5>
          <div className="grid grid-cols-2 gap-4">
            {vendorImages.map((src, index) => (
              <img key={index} src={src} alt={`Vendor ${index + 1}`} className="w-20 h-12 rounded" />
            ))}
          </div>
        </div>

        {/* Right Section - Buyers */}
        <div className="flex-1">
          <h5 className="text-lg text-center mb-2">Buyers</h5>
          <div className="grid grid-cols-2 gap-4">
            {buyerImages.map((src, index) => (
              <img key={index} src={src} alt={`Buyer ${index + 1}`} className="w-20 h-12 rounded-full" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CenterCard;