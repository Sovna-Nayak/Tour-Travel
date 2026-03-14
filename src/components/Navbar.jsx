// // components/Navbar.jsx
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Plane, Menu, X, User, Search } from 'lucide-react';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     // <nav className="bg-white shadow-lg sticky top-0 z-50">
//     // <nav className="bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 shadow-lg sticky top-0 z-50">
//     <nav className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 shadow-lg sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <Link to="/" className="flex items-center gap-1">
//           {/* <Link to="/" className="flex items-center space-x-0"> */}
//           <img
//                 src="/Logo1-removebg.png"
               
//                 // className="h-10 md:h-12 lg:h-14 object-contain"

//                 className="h-12 md:h-14 lg:h-16 object-contain"
//               />
//             {/* <Plane className="h-8 w-8 text-blue-600" /> */}
//             <span className="font-bold text-xl bg-gradient-to-r from-yellow-300 to-white bg-clip-text text-transparent">
//               First Track Tour & Travel
            
//           </span>
//             {/* <span className="font-bold text-xl text-gray-800">First Track Tour & Travel</span> */}
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             <Link to="/destinations" className="text-gray-600 hover:text-blue-600 transition">Destinations</Link>
//             <Link to="/packages" className="text-gray-600 hover:text-blue-600 transition">Packages</Link>
//             <Link to="/hotels" className="text-gray-600 hover:text-blue-600 transition">Hotels</Link>
//             <Link to="/transport" className="text-gray-600 hover:text-blue-600 transition">Transport</Link>
            
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Search destinations..."
//                 className="pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:border-blue-500"
//               />
//               <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
//             </div>

//             <Link to="/login" className="flex items-center space-x-1 bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition">
//               <User className="h-5 w-5" />
//               <span>Login</span>
//             </Link>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
//               {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <div className="md:hidden pb-4">
//             <div className="flex flex-col space-y-3">
//               <Link to="/destinations" className="text-gray-600 hover:text-blue-600">Destinations</Link>
//               <Link to="/packages" className="text-gray-600 hover:text-blue-600">Packages</Link>
//               <Link to="/hotels" className="text-gray-600 hover:text-blue-600">Hotels</Link>
//               <Link to="/transport" className="text-gray-600 hover:text-blue-600">Transport</Link>
//               <Link to="/login" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-center">Login</Link>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;





// components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, User, Search } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // <nav className="sticky top-0 z-50 backdrop-blur-md bg-gradient-to-r from-blue-600/90 via-sky-500/90 to-cyan-400/90 shadow-lg">
    <nav className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-1 group">
            <img
              src="/Logo3.png"
              className="h-12 object-contain transition-transform duration-300 group-hover:scale-110"
              alt="logo"
            />

            <span className="font-bold text-lg md:text-xl 
            bg-gradient-to-r from-yellow-300 to-white 
            bg-clip-text text-transparent">
              First Track Tour & Travel
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">

            <Link to="/destinations"
              className="text-white hover:text-yellow-200 transition duration-300">
              Destinations
            </Link>

            <Link to="/packages"
              className="text-white hover:text-yellow-200 transition duration-300">
              Packages
            </Link>

            <Link to="/hotels"
              className="text-white hover:text-yellow-200 transition duration-300">
              Hotels
            </Link>

            <Link to="/transport"
              className="text-white hover:text-yellow-200 transition duration-300">
              Transport
            </Link>

            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 rounded-full 
                border border-white/40 
                bg-white/20 text-white placeholder-white
                focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-white" />
            </div>

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
          <div className="md:hidden pb-4 animate-fadeIn">
            <div className="flex flex-col space-y-3 text-center">

              <Link to="/destinations" className="text-white hover:text-yellow-200">
                Destinations
              </Link>

              <Link to="/packages" className="text-white hover:text-yellow-200">
                Packages
              </Link>

              <Link to="/hotels" className="text-white hover:text-yellow-200">
                Hotels
              </Link>

              <Link to="/transport" className="text-white hover:text-yellow-200">
                Transport
              </Link>

              <Link
                to="/login"
                className="bg-white text-blue-600 px-4 py-2 rounded-lg">
                Login
              </Link>

            </div>
          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;