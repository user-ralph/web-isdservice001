import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/minebeamitsumi_logo_1.png';

export default function SideBar() {
  
  // --- HARDCODED COLORS ---
  const brandColor = "#005bac";
  const grayText = "#6b7280"; // A nice neutral gray for sub-items

  return (
    <div className="drawer-side z-50">
      <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
      
      <ul className="menu bg-base-100 min-h-full w-80 p-4 shadow-xl">
        
        {/* LOGO - Now Clickable Redirects to Dashboard */}
        <li className="mb-6">
          <Link to="/dashboard" className="flex justify-center hover:bg-transparent py-4">
            <img 
              src={logo} 
              alt="MinebeaMitsumi Logo" 
              className="w-48 object-contain"
            />
          </Link>
        </li>

        {/* NESTED MENU: IT Assets Manager */}
        <li>
          <details open>
            {/* Header: Blue */}
            <summary className="font-bold text-lg" style={{ color: brandColor }}>
              IT Assets Manager
            </summary>
            <ul>
              {/* Sub-items: Gray */}
              <li>
                <Link to="/dashboard/it_assets/computers" style={{ color: grayText }}>
                  Personal Computers
                </Link>
              </li>
              <li>
                <Link to="/dashboard/it_assets/special_purpose" style={{ color: grayText }}>
                  Special Purpose Devices
                </Link>
              </li>
                           
              {/* --- ADDED NEW LINKS HERE --- */}
              <li>
                <Link to="/dashboard/it_assets/mini_pc" style={{ color: grayText }}>
                  Mini PC
                </Link>
              </li>
              <li>
                <Link to="/dashboard/it_assets/peripherals" style={{ color: grayText }}>
                  Peripherals
                </Link>
              </li>

            </ul>
          </details>
        </li>

        {/* STANDALONE ITEM: Reports */}
        <li>
          {/* Header: Blue */}
          <Link to="/dashboard/reports" className="font-bold text-lg mt-2" style={{ color: brandColor }}>
            Service Report
          </Link>
        </li>

      </ul>
    </div>
  );
}