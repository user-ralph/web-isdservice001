import React from 'react';
import { FaEdit } from "react-icons/fa";

export default function EditButton({ onClick }) {
  return (
    <button 
      onClick={onClick}
      // Changed btn-xs to btn-sm for larger hit area
      className="btn btn-sm btn-ghost text-primary hover:bg-primary/10 tooltip"
      data-tip="Edit / Repair"
    >
      {/* Increased icon size */}
      <FaEdit size={18} />
    </button>
  );
}