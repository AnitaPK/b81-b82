import React, { useEffect, useState } from 'react'
import { Link, Outlet, useNavigate } from "react-router-dom";
import {
  FaTasks,
  FaUser,
  FaUsers,
  FaPlusCircle,
  FaHome,
  FaSignOutAlt,
} from "react-icons/fa";
import { getUserInfo } from '../api/api';

const Asidebar = () => {
     const [user, setUser] = useState()
    
    const navigate = useNavigate();



  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const userMenus = [
    { title: "Dashboard", path: "/dashboard", icon: <FaHome /> },
    { title: "My Tasks", path: "/my-tasks", icon: <FaTasks /> },
    { title: "Profile", path: "/profile", icon: <FaUser /> },
  ];

  const adminMenus = [
    { title: "Dashboard", path: "/dashboard", icon: <FaHome /> },
    { title: "All Tasks", path: "/all-tasks", icon: <FaTasks /> },
    { title: "Create Task", path: "/create-task", icon: <FaPlusCircle /> },
    { title: "Users", path: "/users", icon: <FaUsers /> },
    { title: "Profile", path: "/profile", icon: <FaUser /> },
  ];

  async function fetchData(){
      const data = await getUserInfo()
      setUser(data.loggedUser)
    }
  
    useEffect(()=>{
      fetchData()
    },[])
  

  const menus = user?.role === "admin" ? adminMenus : userMenus;
  return (
    <div className="d-flex">
        <aside
          className="bg-dark text-white p-3"
          style={{ width: "240px", minHeight: "100vh" }}
        >
          <h5 className="mb-4">Menu</h5>

          {menus.map((menu, index) => (
            <Link
              key={index}
              to={menu.path}
              className="d-flex align-items-center gap-2 text-white text-decoration-none mb-3"
            >
              {menu.icon}
              <span>{menu.title}</span>
            </Link>
          ))}
        </aside>
        </div>
  )
}

export default Asidebar