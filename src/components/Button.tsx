import React from 'react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  styleClass?: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, styleClass }) => {
  return (
    <button 
      className={`px-10 py-2 rounded ${styleClass}`} 
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;