import React from 'react';
// Importing specific icons for each action type
import { FaLaptopMedical, FaTools, FaRecycle, FaCogs } from "react-icons/fa";

export default function RecentActivityCard() {
  const brandColor = "#005bac";

  // Mock Data
  const activities = [
    { 
      id: 101, 
      changeType: "New PC Registration", 
      controlNo: "P00021087", 
      remarks: "Registered Asset P00021087 for his ex.", 
      user: "Ralph Vincent Arienza", 
      time: "10 mins ago",
      icon: <FaLaptopMedical />,
      color: "text-success",
      bg: "bg-success/10"
    },
    { 
      id: 102, 
      changeType: "Repair", 
      controlNo: "P00001102",
      remarks: "Replaced faulty HDD with 512GB SSD on PC P00001102.", 
      user: "Jerick Miranda", 
      time: "45 mins ago",
      icon: <FaTools />,
      color: "text-warning",
      bg: "bg-warning/10"
    },
    { 
      id: 103, 
      changeType: "Configuration", 
      controlNo: "P00099321",
      remarks: "Installed Solidworks 2025 and configured network license for AEC.", 
      user: "Mary Grace Mariano", 
      time: "2 hours ago",
      icon: <FaCogs />,
      color: "text-info",
      bg: "bg-info/10"
    },
    { 
      id: 104, 
      changeType: "Scrap", 
      controlNo: "P00000091",
      remarks: "Decommissioned PC P00099321 due to motherboard failure (Beyond Economic Repair).", 
      user: "Orveine Paul Almagro", 
      time: "5 hours ago",
      icon: <FaRecycle />,
      color: "text-error",
      bg: "bg-error/10"
    },
    { 
      id: 105, 
      changeType: "Configuration", 
      controlNo: "P00022156",
      remarks: "Re-imaged OS (Windows 11) for new user assignment.", 
      user: "Glenly Calipayan Pernito", 
      time: "Yesterday",
      icon: <FaCogs />,
      color: "text-info",
      bg: "bg-info/10"
    },
  ];

  return (
    <div className="card w-full bg-base-100 shadow-sm h-full flex flex-col">
      <div className="card-body p-4 flex flex-col h-full">
        
        {/* 1. Fixed Header Section */}
        <div className="flex justify-between items-center mb-4 flex-none">
          <h2 className="card-title text-lg" style={{ color: brandColor }}>
            Recent Activity Log
          </h2>
          <button className="btn btn-xs btn-ghost text-xs">View Full History</button>
        </div>

        {/* 2. Scrollable Content Area */}
        {/* max-h-80 ensures it matches the height logic of ActiveUsersCard */}
        <div className="overflow-y-auto max-h-80 pr-2 scrollbar-thin border rounded-lg p-2 border-transparent">
          
          <ul className="timeline timeline-vertical timeline-compact w-full justify-start">
            {activities.map((log, index) => (
              <li key={log.id} className="w-full">
                
                {/* Connector Line (Top) */}
                {index > 0 && <hr className="bg-base-200" />}

                {/* Timeline Icon */}
                <div className="timeline-middle">
                  <div className={`p-2 rounded-full ${log.bg} ${log.color}`}>
                    {log.icon}
                  </div>
                </div>

                {/* Timeline Content */}
                <div className="timeline-end mb-6 w-full pl-2">
                  
                  {/* Row 1: Type + PC Number + Time */}
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className={`font-bold text-sm ${log.color}`}>
                      {log.changeType}
                    </span>
                    
                    {/* UPDATED: PC Number Badge with Brand Color */}
                    <span 
                      className="badge badge-sm text-white font-mono text-xs tracking-wider border-none"
                      style={{ backgroundColor: brandColor }}
                    >
                      {log.controlNo}
                    </span>

                    <time className="text-[10px] text-gray-400 font-mono ml-auto">
                      {log.time}
                    </time>
                  </div>

                  {/* Row 2: Remarks */}
                  <p className="text-xs text-gray-600 mb-2 leading-relaxed">
                    {log.remarks}
                  </p>

                  {/* Row 3: User Badge */}
                  <div className="flex items-center gap-2">
                    <div className="badge badge-ghost badge-sm text-[10px] text-gray-500 gap-2 pl-0 pr-2 h-6 bg-base-200/50">
                      <div className="bg-primary/10 text-primary rounded-full w-5 h-5 flex items-center justify-center text-[9px] font-bold">
                        {log.user.charAt(0)}
                      </div>
                      {log.user}
                    </div>
                  </div>

                </div>

                {/* Connector Line (Bottom) */}
                {index < activities.length - 1 && <hr className="bg-base-200" />}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}