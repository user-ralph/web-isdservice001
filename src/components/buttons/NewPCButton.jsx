import React from 'react';
import { FaPlus } from "react-icons/fa";

export default function NewPCButton({ onClick }) {
  const brandColor = "#005bac";

  return (
    <button 
      onClick={onClick}
      className="btn text-white w-full md:w-auto gap-2 shadow-md hover:brightness-110 border-none"
      style={{ backgroundColor: brandColor }}
    >
      <FaPlus />
      New PC Registration
    </button>
  );
}