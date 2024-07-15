// export default AdminPanel;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import AdminDashboard from "./components/Dashboard/Dashboard";


import Navbar from "./tables/navbar";
import { FaTachometerAlt, FaBoxOpen, FaTags, FaUser, FaTimes } from 'react-icons/fa';

const sidebarClasses = 'w-64 bg-white border-r border-gray-200 shadow-lg fixed lg:static h-full z-50';
const linkClasses = 'flex items-center p-4 mt-2 text-gray-600 hover:bg-gray-100 hover:text-green-500 rounded-lg transition-colors duration-200';

const menu = [
  { name: "Dashboard", path: "/admin", icon: <FaTachometerAlt /> },
  { name: "Courses", path: "/admin/courses", icon: <FaBoxOpen /> },

  { name: "CreateCourse", path: "/createCourse", icon: <FaTags /> },

  { name: "update Course", path: "/admin/updateCourse", icon: <FaUser /> },
  { name: "Teacher List", path: "/admin/teachers", icon: <FaUser /> },
  


];

function AdminPanel() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const menu = [
    { name: "Dashboard", path: "/admin", icon: <FaTachometerAlt /> },
    { name: "Courses", path: "/admin/courses", icon: <FaBoxOpen /> },
  
    { name: "CreateCourse", path: "/createCourse", icon: <FaTags /> },
  
    { name: "update Course", path: "/admin/updateCourse", icon: <FaUser /> },
    { name: "Teacher List", path: "/admin/teachers", icon: <FaUser /> },
    
  
  
  ];


  return (
    <section className="flex w-screen">










      {/*** 
      <div className={sidebarClasses}>
        <div className="p-4 flex justify-between items-center w-[280px]">
          <h1 className="text-2xl font-bold text-red-500">Admin</h1>
          <button className="text-gray-400 hover:text-green-500 lg:hidden" onClick={null}>
            <FaTimes />
          </button>
        </div>
        <nav className="mt-8 h-screen">
        
          {menu.map((item, index) => (
            <Link to={item.path} key={index} className={linkClasses}>
              {item.icon}
              <span className="ml-3">{item.name}</span>
            </Link>
          ))}


        </nav>
      </div>

      ***/}



      <div className="bg-[#eff4f8] w-fit">
        <Navbar toggleSidebar={toggleSidebar} />

        <div className="flex h-full">

          <div className='flex-grow '>
            <Routes>
              <Route path="/" element={<AdminDashboard />} />         

            </Routes>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AdminPanel;