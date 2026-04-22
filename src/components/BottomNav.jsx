import React from "react";
import { Home, Map, Hotel, Car, User } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menus = [
    { name: "Home", icon: Home, path: "/" },
    { name: "Trips", icon: Map, path: "/packages" },
    { name: "Blogs", icon: Hotel, path: "/blog" },
    { name: "Vehicle", icon: Car, path: "/vehicle" },
    { name: "Profile", icon: User, path: "/login" },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t shadow-lg z-[9999] md:hidden">
      <div className="flex justify-around items-center h-16">
        {menus.map((menu, i) => {
          const Icon = menu.icon;
          const isActive = location.pathname === menu.path;

          return (
            <div
              key={i}
              onClick={() => navigate(menu.path)}
              className="flex flex-col items-center justify-center px-3 py-2 cursor-pointer"
            >
              {/* ICON */}
              <div
                className={`w-11 h-11 flex items-center justify-center rounded-full transition-all duration-300 active:scale-95
                  ${
                    isActive
                      ? "bg-blue-100 text-blue-600 shadow-sm"
                      : "text-gray-500 md:hover:text-blue-500 md:hover:bg-gray-100"
                  }`}
              >
                <Icon size={22} />
              </div>

              {/* TEXT */}
              <span
                className={`text-[11px] mt-1 transition-colors duration-300
                  ${
                    isActive
                      ? "text-blue-600 font-medium"
                      : "text-gray-500 md:hover:text-blue-500"
                  }`}
              >
                {menu.name}
              </span>

              {/* DOT */}
              {isActive && (
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1"></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNav;