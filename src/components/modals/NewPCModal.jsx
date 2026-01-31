import React, { useState } from 'react';
import { FaLaptop, FaSave } from "react-icons/fa";

export default function NewPCModal() {
  const brandColor = "#005bac";

  // State
  const [pcNumber, setPcNumber] = useState('');
  const [pcName, setPcName] = useState(''); 

  const handlePcNumberChange = (e) => {
    // Only allow digits
    const value = e.target.value.replace(/\D/g, ''); 
    
    // UPDATED: Limit to 4 Digits
    if (value.length <= 4) {
      setPcNumber(value);
      // Auto-fill PC Name with P000 + 4 digits
      setPcName(value ? `P000${value}` : ''); 
    }
  };

  const handlePcNameChange = (e) => {
    setPcName(e.target.value);
  };

  return (
    <dialog id="new_pc_modal" className="modal">
      <div className="modal-box w-11/12 max-w-5xl max-h-[90vh] flex flex-col p-0 rounded-xl">
        
        {/* --- 1. FIXED HEADER --- */}
        <div className="flex-none p-5 border-b flex items-center gap-3 bg-base-100 z-10">
          <div 
            className="p-3 rounded-full" 
            style={{ 
              backgroundColor: `${brandColor}15`, 
              color: brandColor 
            }}
          >
            <FaLaptop size={20} />
          </div>

          <div>
            <h3 className="font-bold text-xl">New PC Registration</h3>
            <p className="text-xs text-gray-500">Enter asset details and technical specifications.</p>
          </div>
          <form method="dialog" className="ml-auto">
            <button className="btn btn-sm btn-circle btn-ghost">✕</button>
          </form>
        </div>

        {/* --- 2. SCROLLABLE FORM CONTENT --- */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* LEFT COLUMN: Asset & Assignment */}
            <div className="space-y-4">
              <div className="pb-2 border-b border-gray-100">
                <h4 className="font-bold text-sm text-gray-400 uppercase tracking-wider">Asset Identification</h4>
              </div>
              
              {/* PC Number */}
              <div className="form-control">
                <label className="label py-1">
                  <span className="label-text font-bold" style={{ color: '#1f2937' }}>PC Number</span>
                </label>
                <label className="input input-bordered input-sm flex items-center gap-2 bg-gray-50">
                  <span className="font-bold text-gray-500">P000</span>
                  <input 
                    type="text" 
                    className="grow bg-transparent focus:outline-none font-mono" 
                    placeholder="XXXX"  // Updated Placeholder
                    value={pcNumber}
                    onChange={handlePcNumberChange}
                  />
                </label>
              </div>

              {/* Name & Type */}
              <div className="flex gap-3">
                <div className="form-control w-2/3">
                  <label className="label py-1"><span className="label-text font-medium">PC Name / Hostname</span></label>
                  <input 
                    type="text" 
                    placeholder="e.g. P0001234" 
                    className="input input-bordered input-sm w-full font-bold" 
                    value={pcName}
                    onChange={handlePcNameChange}
                  />
                </div>
                <div className="form-control w-1/3">
                  <label className="label py-1"><span className="label-text font-medium">Device Type</span></label>
                  <select className="select select-bordered select-sm w-full">
                    <option disabled selected>Select</option>
                    <option>Desktop</option>
                    <option>Laptop</option>
                  </select>
                </div>
              </div>

              {/* Serial & Manufacturer */}
              <div className="form-control">
                <label className="label py-1"><span className="label-text font-medium">Serial Number</span></label>
                <input type="text" placeholder="e.g. 8H2K922" className="input input-bordered input-sm w-full" />
              </div>

              <div className="flex gap-3">
                <div className="form-control w-1/2">
                  <label className="label py-1"><span className="label-text font-medium">Manufacturer</span></label>
                  <input type="text" placeholder="Dell, HP" className="input input-bordered input-sm w-full" />
                </div>
                <div className="form-control w-1/2">
                  <label className="label py-1"><span className="label-text font-medium">Model</span></label>
                  <input type="text" placeholder="Optiplex 7090" className="input input-bordered input-sm w-full" />
                </div>
              </div>

              {/* Assignment Section */}
              <div className="pt-4 pb-2 border-b border-gray-100 mt-2">
                <h4 className="font-bold text-sm text-gray-400 uppercase tracking-wider">Assignment & Location</h4>
              </div>

              <div className="form-control">
                <label className="label py-1"><span className="label-text font-medium">User In-Charge</span></label>
                <input type="text" placeholder="Search Personnel..." className="input input-bordered input-sm w-full" />
              </div>

              <div className="form-control">
                <label className="label py-1"><span className="label-text font-medium">Location</span></label>
                <input type="text" placeholder="e.g. Building 9" className="input input-bordered input-sm w-full" />
              </div>
            </div>

            {/* RIGHT COLUMN: Technical Specs */}
            <div className="space-y-4">
              <div className="pb-2 border-b border-gray-100">
                <h4 className="font-bold text-sm text-gray-400 uppercase tracking-wider">Technical Specifications</h4>
              </div>

              {/* CPU & RAM */}
              <div className="flex gap-3">
                <div className="form-control w-2/3">
                  <label className="label py-1"><span className="label-text font-medium">CPU</span></label>
                  <input type="text" placeholder="e.g. Intel Core i7-11700" className="input input-bordered input-sm w-full" />
                </div>
                <div className="form-control w-1/3">
                  <label className="label py-1"><span className="label-text font-medium">RAM</span></label>
                  <input type="text" placeholder="16GB" className="input input-bordered input-sm w-full" />
                </div>
              </div>

              {/* Storage */}
              <div className="form-control">
                <label className="label py-1"><span className="label-text font-medium">Storage</span></label>
                <input type="text" placeholder="e.g. 512GB NVMe SSD" className="input input-bordered input-sm w-full" />
              </div>

              {/* OS & Arch */}
              <div className="flex gap-3">
                <div className="form-control w-2/3">
                  <label className="label py-1"><span className="label-text font-medium">Operating System</span></label>
                  <input type="text" placeholder="e.g. Windows 11 24H2" className="input input-bordered input-sm w-full" />
                </div>
                <div className="form-control w-1/3">
                  <label className="label py-1"><span className="label-text font-medium">Architecture</span></label>
                  <select className="select select-bordered select-sm w-full">
                    <option>64-bit</option>
                    <option>32-bit</option>
                  </select>
                </div>
              </div>

              {/* Antivirus */}
              <div className="form-control">
                <label className="label py-1"><span className="label-text font-medium">Antivirus</span></label>
                <input type="text" placeholder="e.g. Crowdstrike" className="input input-bordered input-sm w-full" />
              </div>

              {/* Office & Software */}
              <div className="flex gap-3">
                <div className="form-control w-1/2">
                  <label className="label py-1"><span className="label-text font-medium">Microsoft Office</span></label>
                  <select className="select select-bordered select-sm w-full">
                    <option disabled selected>Select</option>
                    <option>Office 2016</option>
                    <option>Office 2019</option>
                    <option>Office 2021</option>
                    <option>Office 2024</option>
                    <option>Microsoft 365</option>
                  </select>
                </div>
                <div className="form-control w-1/2">
                  <label className="label py-1"><span className="label-text font-medium">Std. Software Installed?</span></label>
                  <select className="select select-bordered select-sm w-full">
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
              </div>

              {/* License Key */}
              <div className="form-control">
                <label className="label py-1"><span className="label-text font-medium">License Key</span></label>
                <input type="text" placeholder="XXXXX-XXXXX-XXXXX-XXXXX" className="input input-bordered input-sm w-full font-mono" />
              </div>

            </div>
          </div>
        </div>

        {/* --- 3. FIXED FOOTER --- */}
        <div className="flex-none p-5 border-t bg-base-100 flex justify-end gap-2">
          <form method="dialog">
            <button className="btn btn-ghost">Cancel</button>
          </form>
          <button 
            className="btn text-white gap-2 shadow-md hover:brightness-110 border-none"
            style={{ backgroundColor: brandColor }}
          >
            <FaSave /> Register Asset
          </button>
        </div>

      </div>
      
      {/* Backdrop Click to Close */}
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}