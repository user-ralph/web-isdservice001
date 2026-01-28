import React from 'react';
import { FaTrashAlt, FaExclamationTriangle } from "react-icons/fa";

export default function ScrapAssetModal({ asset, onClose }) {
  
  if (!asset) return null;

  return (
    <dialog id="scrap_asset_modal" className="modal">
      <div className="modal-box">
        
        <div className="flex items-start gap-4 mb-4">
          <div className="p-3 bg-error/10 text-error rounded-full mt-1">
            <FaExclamationTriangle size={24} />
          </div>
          <div>
            <h3 className="font-bold text-lg text-error">Scrap Asset Confirmation</h3>
            <p className="py-2 text-sm text-gray-600">
              You are about to scrap asset <span className="font-bold text-black">{asset.pc_number}</span> ({asset.pc_name}). 
              This action cannot be undone.
            </p>
          </div>
        </div>

        {/* Reason Textarea */}
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-semibold">Reason for Scrapping</span>
          </label>
          <textarea 
            className="textarea textarea-bordered h-24 w-full" 
            placeholder="e.g. Motherboard failure, Beyond Economic Repair..."
          ></textarea>
        </div>

        <div className="modal-action">
          <form method="dialog">
            <button className="btn btn-ghost mr-2" onClick={onClose}>Cancel</button>
            <button className="btn btn-error text-white gap-2">
              <FaTrashAlt /> Confirm Scrap
            </button>
          </form>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button onClick={onClose}>close</button>
      </form>
    </dialog>
  );
}