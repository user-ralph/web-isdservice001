import React from 'react';
import { FaTrashAlt } from "react-icons/fa";

export default function ScrapButton({ onClick }) {
  return (
    <button 
      onClick={onClick}
      // Changed btn-xs to btn-sm
      className="btn btn-sm btn-ghost text-error hover:bg-error/10 tooltip"
      data-tip="Scrap Asset"
    >
      {/* Increased icon size */}
      <FaTrashAlt size={18} />
    </button>
  );
}