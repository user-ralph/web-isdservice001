import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../components/navigation/NavigationBar';
import SideBar from '../components/navigation/SideBar';

export default function DashboardLayout() {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      
      <div className="drawer-content flex flex-col bg-base-200 min-h-screen">
        
        {/* STICKY NAVBAR WRAPPER */}
        {/* top-0: sticks to top */}
        {/* z-50: ensures it stays on top of other content */}
        <div className="sticky top-0 z-50 w-full">
          <NavigationBar />
        </div>
        
        {/* DYNAMIC CONTENT AREA */}
        <div className="p-8">
           <Outlet /> 
        </div>

      </div> 
      
      <SideBar />
      
    </div>
  );
}