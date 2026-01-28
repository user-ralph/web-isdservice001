import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Layout
import DashboardLayout from './layouts/DashboardLayout';

// Pages
import Login from './pages/auth/Login';
import DashboardHome from './pages/dashboard/DashboardHome';
import Computers from './pages/dashboard/it_assets/Computers'; // The new page
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* PROTECTED DASHBOARD ROUTES */}
        {/* 1. The Layout wraps these routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          
          {/* 2. Index Route (Dashboard Home) - renders when URL is /dashboard */}
          <Route index element={<DashboardHome />} />
          
          {/* 3. Nested Route (Computers) - renders when URL is /dashboard/it_assets/computers */}
          <Route path="it_assets/computers" element={<Computers />} />
          
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;