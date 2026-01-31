import React from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Added Link import
import { MdOutlineMenu } from "react-icons/md"; 
import { BiSolidUserBadge } from "react-icons/bi"; 

export default function NavigationBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear session logic here
    navigate('/login');
  };

  // --- HARDCODED COLORS ---
  const brandColor = "#005bac"; 
  const logoutColor = "#e50214";

  return (
    <div className="navbar bg-base-100 shadow-sm px-4">
      
      {/* --- LEFT SIDE: Sidebar Trigger + Logo --- */}
      <div className="flex-1 gap-2">
        
        {/* Drawer Toggle */}
        <label 
          htmlFor="my-drawer-3" 
          className="btn btn-square btn-ghost"
        >
          {/* APPLIED BRAND COLOR TO ICON */}
          <MdOutlineMenu size={28} style={{ color: brandColor }} />
        </label>

        {/* Brand Title - Now Clickable Redirects to Dashboard */}
        <Link 
          to="/dashboard" 
          className="btn btn-ghost text-xl font-bold" 
          style={{ color: brandColor }}
        >
          MyISD Service
        </Link>
      </div>

      {/* --- RIGHT SIDE: User Dropdown --- */}
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          
          {/* Dropdown Trigger */}
          <div 
            tabIndex={0} 
            role="button" 
            className="btn m-1 btn-ghost flex items-center gap-2"
          >
            {/* APPLIED BRAND COLOR TO USER ICON */}
            <BiSolidUserBadge size={26} style={{ color: brandColor }} />
            
            <span className="font-medium">Ralph Vincent Arienza</span>
          </div>

          {/* Dropdown Menu Items */}
          <ul 
            tabIndex={0} 
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow-sm border border-base-200"
          >
            <li><a>Profile Settings</a></li>
            <li><a>System Logs</a></li>
            
            <div className="divider my-0"></div>
            
            {/* LOGOUT WITH SPECIFIC RED COLOR */}
            <li onClick={handleLogout}>
              <a className="font-semibold" style={{ color: logoutColor }}>
                Logout
              </a>
            </li>
          </ul>

        </div>
      </div>
    </div>
  );
}