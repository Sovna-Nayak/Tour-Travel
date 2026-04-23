import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, User, Search } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    // <nav className="sticky top-0 z-50 backdrop-blur-md bg-gradient-to-r from-blue-600/90 via-sky-500/90 to-cyan-400/90 shadow-lg">
    <nav className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 shadow-lg sticky top-0 z-50">

      <div className="w-full px-2 lg:px-4">

        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-1 group">
            <img
              src="/Logo1-removebg.png"
              className="h-16 object-contain transition-transform duration-300 group-hover:scale-110"
              alt="logo"
            />

          
          <div className="leading-tight">
  
              <div className="font-bold text-lg md:text-xl 
                bg-gradient-to-r from-yellow-400 to-white 
                bg-clip-text text-transparent">
                First Track
              </div>

              <div className="font-semibold text- md:text-base ml-6 mt-1 text-cyan-300">
                Tour & Travel
              </div>

          </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
          <NavLink 
            to="/" 
            className={({ isActive }) =>
              `relative text-white font-bold cursor-pointer 
              hover:text-yellow-200 transition duration-300
              
              after:content-[''] after:absolute after:left-0 after:-bottom-1 
              after:h-[2px] after:bg-yellow-300 
              after:transition-all after:duration-300
              
              hover:after:w-full
              ${isActive ? "after:w-full" : "after:w-0"}`
            }
          >
            HOME
          </NavLink>


          <NavLink 
            to="/destinations"
            className={({ isActive }) =>
              `relative text-white font-bold cursor-pointer 
              hover:text-yellow-200 transition duration-300
              
              after:content-[''] after:absolute after:left-0 after:-bottom-1 
              after:h-[2px] after:bg-yellow-300 
              after:transition-all after:duration-300
              
              hover:after:w-full
              ${isActive ? "after:w-full" : "after:w-0"}`
            }
          >
            DESTINATION
          </NavLink>

           <NavLink 
              to="/packages"
              className={({ isActive }) =>
                `relative text-white font-bold cursor-pointer 
                hover:text-yellow-200 transition duration-300
                
                after:content-[''] after:absolute after:left-0 after:-bottom-1 
                after:h-[2px] after:bg-yellow-300 
                after:transition-all after:duration-300
                
                hover:after:w-full
                ${isActive ? "after:w-full" : "after:w-0"}`
              }
            >
              PACKAGES
            </NavLink>

            <NavLink 
                to="/hotels"
                className={({ isActive }) =>
                  `relative text-white font-bold cursor-pointer 
                  hover:text-yellow-200 transition duration-300
                  
                  after:content-[''] after:absolute after:left-0 after:-bottom-1 
                  after:h-[2px] after:bg-yellow-300 
                  after:transition-all after:duration-300
                  
                  hover:after:w-full
                  ${isActive ? "after:w-full" : "after:w-0"}`
                }
              >
                HOTELS
              </NavLink>

              <NavLink 
                to="/vehicle"
                className={({ isActive }) =>
                  `relative text-white font-bold cursor-pointer 
                  hover:text-yellow-200 transition duration-300
                  
                  after:content-[''] after:absolute after:left-0 after:-bottom-1 
                  after:h-[2px] after:bg-yellow-300 
                  after:transition-all after:duration-300
                  
                  hover:after:w-full
                  ${isActive ? "after:w-full" : "after:w-0"}`
                }
              >
              VEHICLE
              </NavLink>

            <NavLink 
              to="/partner"
              className={({ isActive }) =>
                `relative text-white font-bold cursor-pointer 
                hover:text-yellow-200 transition duration-300
                
                after:content-[''] after:absolute after:left-0 after:-bottom-1 
                after:h-[2px] after:bg-yellow-300 
                after:transition-all after:duration-300
                
                hover:after:w-full
                ${isActive ? "after:w-full" : "after:w-0"}`
              }
            >
              PARTNER
            </NavLink>
          
  

            {/* Login Button */}
            <Link
              to="/login"
              className="flex items-center gap-1 
              bg-white text-blue-600 px-4 py-2 rounded-lg 
              hover:bg-yellow-200 transition duration-300">
              <User className="h-5 w-5" />
              Login
            </Link>

          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={28}/> : <Menu size={28}/>}
            </button>
          </div>

        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="fixed inset-0 z-50">

            {/* Overlay */}
            <div
              className="absolute inset-0 bg-black/30 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            ></div>

            {/* Sidebar */}
            <div
          className={`absolute top-0 right-0 h-full w-[85%] max-w-sm 
          bg-gradient-to-b from-slate-900 via-gray-900 to-black 
          text-white shadow-2xl transform transition-transform duration-300 
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >

      {/* Header */}
      <div className="flex justify-between items-center px-4 py-4 border-b border-white/20">
        <h1 className="font-bold text-lg">First Track</h1>

        <button onClick={() => setIsOpen(false)} className="text-2xl">
          ✖
        </button>
      </div>

      {/* Links */}
      <div className="flex flex-col gap-5 px-6 py-6 text-lg">
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/destinations" onClick={() => setIsOpen(false)}>Destinations</Link>
        <Link to="/packages" onClick={() => setIsOpen(false)}>Packages</Link>
        <Link to="/hotels" onClick={() => setIsOpen(false)}>Hotels</Link>
        <Link to="/vehicle" onClick={() => setIsOpen(false)}>Vehicle</Link>
        <Link to="/partner" onClick={() => setIsOpen(false)}>Partner</Link>
      </div>

      {/* Bottom Button */}
      <div className="absolute bottom-0 w-full p-4">
        <Link
          to="/login"
          onClick={() => setIsOpen(false)}
          className="block text-center bg-white text-blue-600 py-3 rounded-xl"
        >
          Login
        </Link>
      </div>

    </div>
  </div>
)}


      </div>
    </nav>
  );
};

export default Navbar;