// // import React from "react";
// import { Facebook, Instagram, Phone, Mail, MapPin, Youtube, Linkedin } from "lucide-react";
// import { Link } from "react-router-dom";

// const Footer = () => {
//   return (
//     <footer className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-gray-300 pt-12 pb-6">

//       <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">

//         {/* About */}
//         <div>

//           {/* Logo */}
//           <Link to="/" className="flex items-center gap-2 mb-3 group">
//             <img
//               src="/LogoDesign.png"
//               className="h-10 object-contain transition-transform duration-300 group-hover:scale-110"
//               alt="logo"
//             />
//             <span className="text-white font-bold text-lg">
//               FirstTrack Tour & Travel
//             </span>
//           </Link>

//           <p className="text-sm text-gray-400">
//             Discover amazing destinations, affordable tour packages,
//             hotel booking, transport services and bike rentals.
//           </p>

//         </div>

//         {/* Quick Links */}
//         <div>
//           <h3 className="text-lg font-semibold text-white mb-4">
//             Quick Links
//           </h3>

//           <ul className="space-y-2">

//             <li>
//               <Link to="/" className="hover:text-yellow-400 transition">
//                 Home
//               </Link>
//             </li>

//             <li>
//               <Link to="/destinations" className="hover:text-yellow-400 transition">
//                 Destinations
//               </Link>
//             </li>

//             <li>
//               <Link to="/packages" className="hover:text-yellow-400 transition">
//                 Packages
//               </Link>
//             </li>

//             <li>
//               <Link to="/hotels" className="hover:text-yellow-400 transition">
//                 Hotels
//               </Link>
//             </li>

//             <li>
//               <Link to="/transport" className="hover:text-yellow-400 transition">
//                 Transport
//               </Link>
//             </li>

//           </ul>
//         </div>

//         {/* Customer Service */}
//         <div>
//           <h3 className="font-semibold mb-4">Customer Service</h3>
//           <ul className="space-y-2 text-gray-400">
//             <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
//             <li><Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
//             <li><Link to="/terms-of-use" className="hover:text-white">Terms Of Uses</Link></li>
//             <li><Link to="/refund-cancellation" className="hover:text-white">Refund & Cancellation</Link></li> 
          
//           </ul>
//         </div>

//             {/* <li className="hover:text-yellow-400 transition">
//               Tour Packages
//             </li>

//             <li className="hover:text-yellow-400 transition">
//               Hotel Booking
//             </li>

//             <li className="hover:text-yellow-400 transition">
//               Bike Rental
//             </li>

//             <li className="hover:text-yellow-400 transition">
//               Cab Booking
//             </li> */}


//         {/* Contact */}
//         <div>
//           <h3 className="text-lg font-semibold text-white mb-4">
//             Contact Us
//           </h3>

//           <div className="space-y-3 text-sm">

//             <p className="flex items-center gap-2">
//               <MapPin size={16}/> ABC, Odisha
//             </p>

//             <p className="flex items-center gap-2">
//               <Phone size={16}/> +91 1234567890
//             </p>

//             <p className="flex items-center gap-2">
//               <Mail size={16}/> firsttracktravel@gmail.com
//             </p>

//           </div>

//           {/* Social Icons */}
//           <div className="flex gap-4 mt-4">

//             <Facebook className="cursor-pointer hover:text-blue-400 transition"/>
//             <Instagram className="cursor-pointer hover:text-pink-400 transition"/>
//             <Youtube className="cursor-pointer hover:text-red-500 transition"/>
//             <Linkedin className="cursor-pointer hover:text-blue-500 transition"/>

//           </div>

//         </div>

//       </div>

//       {/* Bottom */}

//       <div className="border-t border-blue-700 mt-10 pt-5 text-center text-sm text-gray-400">

//         © 2026 First Track Tour & Travel. All Rights Reserved.

//       </div>

//     </footer>
//   );
// };

// export default Footer;



import { Facebook, Instagram, Phone, Mail, MapPin, Youtube, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-gray-300 pt-12 pb-6">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* About */}
        <div>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 mb-4 group">
            <img
              src="/LogoDesign.png"
              className="h-10 object-contain transition-transform duration-300 group-hover:scale-110"
              alt="logo"
            />
            <span className="text-white font-bold text-lg">
              FirstTrack Tour & Travel
            </span>
          </Link>

          <p className="text-sm text-gray-400 leading-relaxed">
            Discover amazing destinations, affordable tour packages,
            hotel booking, transport services and bike rentals.
          </p>

        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2 text-sm">

            <li>
              <Link to="/" className="hover:text-yellow-400 transition">
                Home
              </Link>
            </li>

            <li>
              <Link to="/destinations" className="hover:text-yellow-400 transition">
                Destinations
              </Link>
            </li>

            <li>
              <Link to="/packages" className="hover:text-yellow-400 transition">
                Packages
              </Link>
            </li>

            <li>
              <Link to="/hotels" className="hover:text-yellow-400 transition">
                Hotels
              </Link>
            </li>

            <li>
              <Link to="/transport" className="hover:text-yellow-400 transition">
                Transport
              </Link>
            </li>

          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Customer Service
          </h3>

          <ul className="space-y-2 text-sm text-gray-400">

            <li>
              <Link to="/faq" className="hover:text-yellow-400 transition">
                FAQ
              </Link>
            </li>

            <li>
              <Link to="/privacy-policy" className="hover:text-yellow-400 transition">
                Privacy Policy
              </Link>
            </li>

            <li>
              <Link to="/terms-of-use" className="hover:text-yellow-400 transition">
                Terms Of Use
              </Link>
            </li>

            <li>
              <Link to="/refund-cancellation" className="hover:text-yellow-400 transition">
                Refund & Cancellation
              </Link>
            </li>

          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact Us
          </h3>

          <div className="space-y-3 text-sm">

            <p className="flex items-center gap-2">
              <MapPin size={16}/> ABC, Odisha
            </p>

            <p className="flex items-center gap-2">
              <Phone size={16}/> +91 1234567890
            </p>

            <p className="flex items-center gap-2">
              <Mail size={16}/> firsttracktravel@gmail.com
            </p>

          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-5">

            <Facebook className="cursor-pointer hover:text-blue-400 hover:scale-110 transition" />

            <Instagram className="cursor-pointer hover:text-pink-400 hover:scale-110 transition" />

            <Youtube className="cursor-pointer hover:text-red-500 hover:scale-110 transition" />

            <Linkedin className="cursor-pointer hover:text-blue-500 hover:scale-110 transition" />

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-blue-700 mt-10 pt-5 text-center text-sm text-gray-400">

        © 2026 FirstTrack Tour & Travel. All Rights Reserved.

      </div>

    </footer>
  );
};

export default Footer;