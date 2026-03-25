import { Facebook, Instagram, Phone, Mail, MapPin, Youtube, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    // <footer className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-gray-300 pt-12 pb-6">
    <footer className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-gray-300 pt-12 pb-6">

      {/* <div className="h-[1px] bg-gradient-to-r from-transparent via-amber-400 to-transparent mb-6"> */}
      {/* <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"> */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

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
              First Track Tour & Travel
            </span>
          </Link>

          <p className="text-sm text-gray-400 leading-relaxed">
            Discover amazing destinations, affordable tour packages,
            hotel booking, transport services and bike rentals.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link to="/" className="hover:text-yellow-400 transition">Home</Link></li>
            <li><Link to="/destinations" className="hover:text-yellow-400 transition">Destinations</Link></li>
            <li><Link to="/packages" className="hover:text-yellow-400 transition">Packages</Link></li>
            <li><Link to="/hotels" className="hover:text-yellow-400 transition">Hotels</Link></li>
            <li><Link to="/transport" className="hover:text-yellow-400 transition">Transport</Link></li>
            <li><Link to="/rent" className="hover:text-yellow-400 transition">Rent Bike</Link></li>
            {/* <li><Link to="/about" className="hover:text-yellow-400 transition">About</Link></li>
            <li><Link to="/blog" className="hover:text-yellow-400 transition">Blog</Link></li>
            <li><Link to="/support" className="hover:text-yellow-400 transition">Support</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-400 transition">Contact</Link></li> */}
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Useful Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link to="/" className="hover:text-yellow-400 transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-yellow-400 transition">About</Link></li>
            <li><Link to="/blog" className="hover:text-yellow-400 transition">Blog</Link></li>
            <li><Link to="/support" className="hover:text-yellow-400 transition">Support</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-400 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Customer Service</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link to="/faq" className="hover:text-yellow-400 transition">FAQ</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-yellow-400 transition">Privacy Policy</Link></li>
            <li><Link to="/terms-of-use" className="hover:text-yellow-400 transition">Terms Of Use</Link></li>
            <li><Link to="/refund-cancellation" className="hover:text-yellow-400 transition">Refund & Cancellation</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <div className="space-y-3 text-sm text-gray-400">
            <p className="flex items-center gap-2"><MapPin size={16}/> Saheed Nagar, Bhubaneswar, Odisha, India - 751007</p>
            <p className="flex items-center gap-2"><Phone size={16}/> +91 9876543210</p>
            <p className="flex items-center gap-2"><Mail size={16}/> info@firsttracktour.com</p>
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