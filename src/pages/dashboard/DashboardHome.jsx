// src/pages/dashboard/DashboardHome.jsx
import React from 'react';
import StatCard from '../../components/common/StatCard';
import ActiveUsersCard from '../../components/common/ActiveUsersCard';
import RecentActivityCard from '../../components/common/RecentActivityCard';
import { FaListUl, FaDesktop, FaCalendarPlus } from "react-icons/fa"; 

export default function DashboardHome() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6 text-neutral">Welcome Back!</h1>
      
      {/* ROW 1: STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard title="Total Assets" value="12,902" variant="primary" icon={<FaListUl />} />
        <StatCard title="Total PC Assets" value="6,400" variant="default" icon={<FaDesktop />} />
        <StatCard title="Registered Asset this month" value="46" variant="default" icon={<FaCalendarPlus />} />
      </div>

      {/* ROW 2: TABLES */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 min-h-[400px]">
        <ActiveUsersCard />
        <RecentActivityCard />
      </div>
    </>
  );
}