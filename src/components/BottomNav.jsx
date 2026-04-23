import React, { useState } from "react";

import { Home, Map, Hotel, Car, User } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const BottomNav = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const menus = [
    { name: "Home", icon: Home, path: "/" },
    { name: "Trips", icon: Map, path: "/packages" },
    { name: "Blogs", icon: Hotel, path: "/blogs" },
    { name: "Vehicle", icon: Car, path: "/vehicle" },
    { name: "Profile", icon: User, path: "/login" },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 shadow-[0_-4px_15px_rgba(0,0,0,0.2)] md:hidden">

  {/* ✅ Reduced height */}
  <div className="flex justify-around items-center h-16">

    {menus.map((menu, i) => {
      const Icon = menu.icon;
      const isActive = location.pathname === menu.path;

      return (
        <div
          key={i}
          onClick={() => navigate(menu.path)}
          className="flex flex-col items-center justify-center cursor-pointer"
        >
          {/* ✅ ICON SMALL */}
          <div
            className={`w-9 h-9 flex items-center justify-center rounded-full transition-all duration-300 active:scale-95
              ${
                isActive
                  ? "bg-white text-purple-600 shadow-md"
                  : "text-white/80"
              }`}
          >
            <Icon size={18} />
          </div>

          {/* ✅ TEXT */}
          <span
            className={`text-[10px] mt-1
              ${
                isActive
                  ? "text-white font-medium"
                  : "text-white/80"
              }`}
          >
            {menu.name}
          </span>

          {/* ✅ DOT */}
          {isActive && (
            <div className="w-1 h-1 bg-white rounded-full mt-1"></div>
          )}
        </div>
      );
    })}
  </div>
</div>
  );
};

export default BottomNav;