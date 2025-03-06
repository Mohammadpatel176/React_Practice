import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { FaUser, FaCalendar, FaBars, FaTachometerAlt, FaSignOutAlt } from "react-icons/fa";
import { Menu, MenuItem } from "@mui/material";
import DashboardMain from "./Dashboard";
import { useNavigate } from "react-router-dom";
const Sidebar = ({ isOpen }) => (
  <div className={`h-screen bg-gradient-to-br from-blue-900 to-teal-600 p-5 text-white fixed top-16 left-0 transition-all duration-300 ${isOpen ? "w-64" : "w-16 flex flex-col items-center"}`}>
    <h2 className="text-2xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-600 animate-gradient">
      {isOpen ? "HelloDoc" : "H"}
    </h2>
    <nav>
      <ul className="space-y-4">
        <li className="group relative">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-teal-300" : "text-white"}><FaTachometerAlt className="text-xl" /></NavLink>
          {!isOpen && <span className="absolute left-10 top-1/2 transform -translate-y-1/2 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100">Dashboard</span>}
        </li>
        <li className="group relative">
          <NavLink to="/patients"><FaUser className="text-xl" /></NavLink>
          {!isOpen && <span className="absolute left-10 top-1/2 transform -translate-y-1/2 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100">Patients</span>}
        </li>
        <li className="group relative">
          <NavLink to="/appointments"><FaCalendar className="text-xl" /></NavLink>
          {!isOpen && <span className="absolute left-10 top-1/2 transform -translate-y-1/2 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100">Appointments</span>}
        </li>
      </ul>
    </nav>
  </div>
);

const Topbar = ({ toggleSidebar }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
 const navigator=useNavigate();
  const RemoveData=()=>{
    localStorage.clear();
    handleMenuClose();
    navigator('/');
  }
  return (
    <div className="w-full bg-white shadow-md p-4 fixed flex justify-between items-center pl-16 pr-8 top-0 left-0 h-16 z-10000">
      <button onClick={toggleSidebar} className="text-2xl"><FaBars /></button>
      <div className="relative">
        <img
          src="https://via.placeholder.com/40" 
          alt="Profile" 
          className="rounded-full cursor-pointer" 
          onClick={handleMenuOpen}
        />
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
          <MenuItem onClick={handleMenuClose}><FaTachometerAlt className="mr-2" /> Dashboard</MenuItem>
          <MenuItem onClick={RemoveData}><FaSignOutAlt className="mr-2" /> Logout</MenuItem>
        </Menu>
      </div>
    </div>
  );
};

const Dashboard = () => <DashboardMain/>;
const Patients = () => <div className="p-6">Manage Patients</div>;
const Appointments = () => <div className="p-6">Manage Appointments</div>;

const MainContent = ({ isOpen }) => (
  <div className={`transition-all duration-300 ${isOpen ? "ml-64" : "ml-16"} mt-16 p-6` }>
    {/* <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/patients" element={<Patients />} />
      <Route path="/appointments" element={<Appointments />} />
    </Routes> */}
  </div>
);

const DashboarLayout = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="flex h-screen">
        <Sidebar isOpen={isOpen} />
        <div className="flex flex-col flex-1">
          <Topbar toggleSidebar={toggleSidebar} />
          <MainContent isOpen={isOpen} />
        </div>
      </div>
  );
};

export default DashboarLayout;
