import React from 'react';
import { FaSearch } from "react-icons/fa";
import NewPCButton from '../buttons/NewPCButton';
import NewPCModal from '../modals/NewPCModal'; // Import the Modal

export default function AssetToolbar() {
  
  const handleNewRegistration = () => {
    // DaisyUI Method to open modal by ID
    document.getElementById('new_pc_modal').showModal();
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        
        {/* Search Bar */}
        <div className="relative w-full md:w-96">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearch className="text-gray-400" />
          </div>
          <input 
            type="text" 
            placeholder="Search by PC Number, User, or Location..." 
            className="input input-bordered w-full pl-10 focus:outline-none focus:border-primary"
          />
        </div>

        {/* Button triggers the modal */}
        <NewPCButton onClick={handleNewRegistration} />

      </div>

      {/* Render the Modal Component Here (It stays hidden until triggered) */}
      <NewPCModal />
    </>
  );
}