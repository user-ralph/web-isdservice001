import React, { useState, useEffect } from 'react';
import { FaTools, FaSave } from "react-icons/fa";

export default function EditAssetModal({ asset, onClose }) {
  const brandColor = "#005bac";

  // Form State
  const [formData, setFormData] = useState({
    pc_number: '',
    pc_name: '',
    device_type: '',
    serial_number: '',
    manufacturer: '',
    model: '',
    user: '',
    location: '',
    specs: {
      cpu: '',
      ram: '',
      storage: '',
      os: '',
      architecture: '',
      antivirus: '',
      ms_office: '',
      std_software: '',
      license_key: ''
    }
  });

  // Load data when asset prop changes
  useEffect(() => {
    if (asset) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFormData({
        pc_number: asset.pc_number || '',
        pc_name: asset.pc_name || '',
        device_type: asset.device_type || '',
        serial_number: asset.serial_number || '',
        manufacturer: asset.manufacturer || '',
        model: asset.model || '',
        user: asset.user || '',
        location: asset.location || '',
        specs: {
          cpu: asset.specs?.cpu || '',
          ram: asset.specs?.ram || '',
          storage: asset.specs?.storage || '',
          os: asset.specs?.os || '',
          architecture: asset.specs?.architecture || '64-bit',
          antivirus: asset.specs?.antivirus || '',
          ms_office: asset.specs?.ms_office || '',
          std_software: asset.specs?.std_software || 'Yes',
          license_key: asset.specs?.license_key || ''
        }
      });
    }
  }, [asset]);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSpecChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      specs: { ...prev.specs, [field]: value }
    }));
  };

  return (
    <dialog id="edit_asset_modal" className="modal">
      <div className="modal-box w-11/12 max-w-5xl max-h-[90vh] flex flex-col p-0 rounded-xl">
        
        {/* HEADER */}
        <div className="flex-none p-5 border-b flex items-center gap-3 bg-base-100 z-10">
          <div className="p-3 rounded-full" style={{ backgroundColor: `${brandColor}15`, color: brandColor }}>
            <FaTools size={20} />
          </div>
          <div>
            <h3 className="font-bold text-xl">Edit / Repair Asset</h3>
            <p className="text-xs text-gray-500">Update configuration or repair details for <span className="font-mono font-bold text-primary">{formData.pc_number}</span>.</p>
          </div>
          <form method="dialog" className="ml-auto">
            <button className="btn btn-sm btn-circle btn-ghost" onClick={onClose}>✕</button>
          </form>
        </div>

        {/* BODY */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Left Column */}
            <div className="space-y-4">
              <div className="pb-2 border-b border-gray-100"><h4 className="font-bold text-sm text-gray-400 uppercase">Asset Identification</h4></div>
              
              <div className="form-control">
                <label className="label py-1"><span className="label-text font-bold">PC Number</span></label>
                <input type="text" className="input input-bordered input-sm w-full font-mono bg-gray-100" value={formData.pc_number} readOnly />
              </div>

              <div className="flex gap-3">
                <div className="form-control w-2/3">
                  <label className="label py-1"><span className="label-text font-medium">PC Name</span></label>
                  <input type="text" className="input input-bordered input-sm w-full" value={formData.pc_name} onChange={(e) => handleChange('pc_name', e.target.value)} />
                </div>
                <div className="form-control w-1/3">
                  <label className="label py-1"><span className="label-text font-medium">Type</span></label>
                  <select className="select select-bordered select-sm w-full" value={formData.device_type} onChange={(e) => handleChange('device_type', e.target.value)}>
                    <option>Desktop</option>
                    <option>Laptop</option>
                  </select>
                </div>
              </div>

              <div className="form-control">
                  <label className="label py-1"><span className="label-text font-medium">Serial Number</span></label>
                  <input type="text" className="input input-bordered input-sm w-full" value={formData.serial_number} onChange={(e) => handleChange('serial_number', e.target.value)} />
              </div>

              <div className="flex gap-3">
                <div className="form-control w-1/2">
                   <label className="label py-1"><span className="label-text font-medium">Manufacturer</span></label>
                   <input type="text" className="input input-bordered input-sm w-full" value={formData.manufacturer} onChange={(e) => handleChange('manufacturer', e.target.value)} />
                </div>
                <div className="form-control w-1/2">
                   <label className="label py-1"><span className="label-text font-medium">Model</span></label>
                   <input type="text" className="input input-bordered input-sm w-full" value={formData.model} onChange={(e) => handleChange('model', e.target.value)} />
                </div>
              </div>

               <div className="pt-4 pb-2 border-b border-gray-100 mt-2"><h4 className="font-bold text-sm text-gray-400 uppercase">Assignment</h4></div>
               <div className="form-control">
                   <label className="label py-1"><span className="label-text font-medium">User In-Charge</span></label>
                   <input type="text" className="input input-bordered input-sm w-full" value={formData.user} onChange={(e) => handleChange('user', e.target.value)} />
               </div>
               <div className="form-control">
                   <label className="label py-1"><span className="label-text font-medium">Location</span></label>
                   <input type="text" className="input input-bordered input-sm w-full" value={formData.location} onChange={(e) => handleChange('location', e.target.value)} />
               </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
               <div className="pb-2 border-b border-gray-100"><h4 className="font-bold text-sm text-gray-400 uppercase">Technical Specifications</h4></div>
               
               <div className="flex gap-3">
                  <div className="form-control w-2/3">
                    <label className="label py-1"><span className="label-text font-medium">CPU</span></label>
                    <input type="text" className="input input-bordered input-sm w-full" value={formData.specs.cpu} onChange={(e) => handleSpecChange('cpu', e.target.value)} />
                  </div>
                  <div className="form-control w-1/3">
                    <label className="label py-1"><span className="label-text font-medium">RAM</span></label>
                    <input type="text" className="input input-bordered input-sm w-full" value={formData.specs.ram} onChange={(e) => handleSpecChange('ram', e.target.value)} />
                  </div>
               </div>

               <div className="form-control">
                  <label className="label py-1"><span className="label-text font-medium">Storage</span></label>
                  <input type="text" className="input input-bordered input-sm w-full" value={formData.specs.storage} onChange={(e) => handleSpecChange('storage', e.target.value)} />
               </div>

               <div className="flex gap-3">
                  <div className="form-control w-2/3">
                    <label className="label py-1"><span className="label-text font-medium">OS</span></label>
                    <input type="text" className="input input-bordered input-sm w-full" value={formData.specs.os} onChange={(e) => handleSpecChange('os', e.target.value)} />
                  </div>
                  <div className="form-control w-1/3">
                     <label className="label py-1"><span className="label-text font-medium">Arch</span></label>
                     <select className="select select-bordered select-sm w-full" value={formData.specs.architecture} onChange={(e) => handleSpecChange('architecture', e.target.value)}>
                        <option>64-bit</option>
                        <option>32-bit</option>
                     </select>
                  </div>
               </div>

               <div className="form-control">
                  <label className="label py-1"><span className="label-text font-medium">Antivirus</span></label>
                  <input type="text" className="input input-bordered input-sm w-full" value={formData.specs.antivirus} onChange={(e) => handleSpecChange('antivirus', e.target.value)} />
               </div>

               <div className="flex gap-3">
                  <div className="form-control w-1/2">
                    <label className="label py-1"><span className="label-text font-medium">MS Office</span></label>
                    <select className="select select-bordered select-sm w-full" value={formData.specs.ms_office} onChange={(e) => handleSpecChange('ms_office', e.target.value)}>
                        <option>Office 2016</option>
                        <option>Office 2019</option>
                        <option>Office 2021</option>
                        <option>Microsoft 365</option>
                    </select>
                  </div>
                  <div className="form-control w-1/2">
                     <label className="label py-1"><span className="label-text font-medium">Std Software</span></label>
                     <select className="select select-bordered select-sm w-full" value={formData.specs.std_software} onChange={(e) => handleSpecChange('std_software', e.target.value)}>
                        <option>Yes</option>
                        <option>No</option>
                     </select>
                  </div>
               </div>

               <div className="form-control">
                  <label className="label py-1"><span className="label-text font-medium">License Key</span></label>
                  <input type="text" className="input input-bordered input-sm w-full font-mono" value={formData.specs.license_key} onChange={(e) => handleSpecChange('license_key', e.target.value)} />
               </div>

            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="flex-none p-5 border-t bg-base-100 flex justify-end gap-2">
          <form method="dialog">
            <button className="btn btn-ghost" onClick={onClose}>Cancel</button>
          </form>
          <button className="btn text-white gap-2 border-none" style={{ backgroundColor: brandColor }}>
            <FaSave /> Update Asset
          </button>
        </div>

      </div>
      <form method="dialog" className="modal-backdrop">
        <button onClick={onClose}>close</button>
      </form>
    </dialog>
  );
}