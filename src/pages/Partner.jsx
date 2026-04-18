// import React, { useState } from "react";
// import { Users, Building2, Car, Bike, Map, Phone, Mail } from "lucide-react";

// const Partner = () => {
//   const [form, setForm] = useState({
//     name: "",
//     business: "",
//     email: "",
//     phone: "",
//     city: "",
//     type: ""
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Partner Request Submitted ✅");
//     console.log(form);
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-8">

//       {/* HEADING */}
//       <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
//         Become a Partner
//       </h1>
//       <p className="text-center text-gray-500 mb-10">
//         Join First Track Tour & Travel and grow your business with us 🚀
//       </p>

//       {/* FORM SECTION */}
//       <div className="bg-white shadow-xl rounded-xl p-6 mb-10">
//         <h2 className="text-xl font-semibold mb-4">Register as Partner</h2>

//         <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             onChange={handleChange}
//             className="border p-3 rounded-lg"
//             required
//           />

//           <input
//             type="text"
//             name="business"
//             placeholder="Business Name"
//             onChange={handleChange}
//             className="border p-3 rounded-lg"
//             required
//           />

//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             onChange={handleChange}
//             className="border p-3 rounded-lg"
//             required
//           />

//           <input
//             type="text"
//             name="phone"
//             placeholder="Phone"
//             onChange={handleChange}
//             className="border p-3 rounded-lg"
//             required
//           />

//           <input
//             type="text"
//             name="city"
//             placeholder="City"
//             onChange={handleChange}
//             className="border p-3 rounded-lg"
//           />

//           <select
//             name="type"
//             onChange={handleChange}
//             className="border p-3 rounded-lg"
//             required
//           >
//             <option value="">Select Partner Type</option>
//             <option>Hotel Partner</option>
//             <option>Transport Partner</option>
//             <option>Bike Rental</option>
//             <option>Tour Guide</option>
//             <option>Travel Agency</option>
//           </select>

//           <button className="bg-blue-600 text-white py-3 rounded-lg col-span-2">
//             Submit
//           </button>
//         </form>
//       </div>

//       {/* PARTNER TYPES */}
//       <h2 className="text-2xl font-bold mb-6">Partner Categories</h2>

//       <div className="grid md:grid-cols-5 gap-4 mb-10">
//         {[
//           { name: "Hotel", icon: Building2 },
//           { name: "Transport", icon: Car },
//           { name: "Bike Rental", icon: Bike },
//           { name: "Tour Guide", icon: Map },
//           { name: "Agency", icon: Users }
//         ].map((item, i) => {
//           const Icon = item.icon;
//           return (
//             <div
//               key={i}
//               className="bg-white shadow rounded-xl p-5 text-center hover:scale-105 transition"
//             >
//               <Icon className="mx-auto mb-2 text-blue-600" />
//               <p>{item.name}</p>
//             </div>
//           );
//         })}
//       </div>

//       {/* BENEFITS */}
//       <h2 className="text-2xl font-bold mb-6">Why Partner With Us?</h2>

//       <div className="grid md:grid-cols-4 gap-4 mb-10">
//         {[
//           "More Bookings 📈",
//           "Online Visibility 🌍",
//           "Secure Payments 💳",
//           "Easy Dashboard 📊"
//         ].map((b, i) => (
//           <div key={i} className="bg-white shadow p-5 rounded-xl text-center">
//             {b}
//           </div>
//         ))}
//       </div>

//       {/* HOW IT WORKS */}
//       <h2 className="text-2xl font-bold mb-6">How It Works</h2>

//       <div className="grid md:grid-cols-4 gap-4 mb-10">
//         {[
//           "1. Register",
//           "2. Add Services",
//           "3. Get Bookings",
//           "4. Earn Money 💰"
//         ].map((step, i) => (
//           <div key={i} className="bg-white shadow p-5 rounded-xl text-center">
//             {step}
//           </div>
//         ))}
//       </div>

//       {/* CONTACT */}
//       <h2 className="text-2xl font-bold mb-6">Contact Us</h2>

//       <div className="bg-white shadow rounded-xl p-6 flex flex-col md:flex-row justify-between items-center gap-4">
//         <div className="flex items-center gap-2">
//           <Phone /> +91 9876543210
//         </div>

//         <div className="flex items-center gap-2">
//           <Mail /> support@firsttrack.com
//         </div>
//       </div>

//     </div>
//   );
// };

// export default Partner;





import React from "react";
import { Plane, Bus, Train, Car, Bike } from "lucide-react";

const PropertyType = () => {

  // 🔷 PROPERTY DATA
  const properties = [
    {
      name: "Hotel",
      icon: "🏨",
      desc: "A commercial property offering private rooms, suites, and accommodations.",
    },
    {
      name: "Home",
      icon: "🏡",
      desc: "A residential space where guests can book rooms or the entire home.",
    },
  ];

  // 🔷 VEHICLE DATA
  const vehicles = [
    
    { name: "Buses", icon: <Bus size={20} />, desc: "Add buses for travel and tours." },
    { name: "Cabs", icon: <Car size={20} />, desc: "Register cabs for city rides." },
    { name: "Bikes", icon: <Bike size={20} />, desc: "Add bikes for short trips." },
  ];

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6">

      <div className="text-center">

        {/* 🔷 PROPERTY SECTION */}
        <h2 className="text-2xl font-bold text-blue-600 mb-2">
          Are you a property owner?
        </h2>

        <p className="text-lg font-semibold mb-6">
          What type of property do you want to register?
        </p>

        {/* PROPERTY CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10">
          {properties.map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-lg border p-4 shadow-sm cursor-pointer hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold mb-1 flex items-center justify-center gap-2">
                {p.icon} {p.name}
              </h3>
              <p className="text-gray-600 text-sm">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* 🔷 VEHICLE SECTION */}
        <h2 className="text-2xl font-bold text-blue-600 mb-2">
          Are you a Vehicle owner?
        </h2>

        <p className="text-lg font-semibold mb-6">
          What type of Vehicle do you want to register?
        </p>

        {/* VEHICLE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {vehicles.map((v, i) => (
            <div
              key={i}
              className="bg-white rounded-lg border p-4 shadow-sm cursor-pointer hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold mb-1 flex items-center justify-center gap-2">
                {v.icon} {v.name}
              </h3>
              <p className="text-gray-600 text-sm">{v.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default PropertyType;





// import React from "react";

// const PropertyType = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 px-4 py-6">

//       {/* 🔷 GRID LAYOUT */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

//         {/* 🔷 LEFT SIDE - PROPERTY */}
//         <div className="text-center">
//           <h2 className="text-2xl font-bold text-blue-600 mb-2">
//             Are you a property owner?
//           </h2>

//           <p className="text-lg font-semibold mb-6">
//             What type of property do you want to register?
//           </p>

//           {/* HOTEL */}
//           <div className="bg-white rounded-lg border p-4 mb-4 max-w-sm mx-auto shadow-sm cursor-pointer hover:shadow-md transition">
//             <h3 className="text-lg font-semibold mb-1">🏨 Hotel</h3>
//             <p className="text-gray-600 text-sm">
//               A commercial property offering private rooms.
//             </p>
//           </div>

//           {/* HOME */}
//           <div className="bg-white rounded-lg border p-4 max-w-sm mx-auto shadow-sm cursor-pointer hover:shadow-md transition">
//             <h3 className="text-lg font-semibold mb-1">🏡 Home</h3>
//             <p className="text-gray-600 text-sm">
//               A residential space for short stays.
//             </p>
//           </div>
//         </div>

//         {/* 🔷 RIGHT SIDE - VEHICLE */}
//         <div className="text-center">
//           <h2 className="text-2xl font-bold text-blue-600 mb-2">
//             Are you a Vehicle owner?
//           </h2>

//           <p className="text-lg font-semibold mb-6">
//             What type of Vehicle do you want to register?
//           </p>

//           {/* CAR */}
//           <div className="bg-white rounded-lg border p-4 mb-4 max-w-sm mx-auto shadow-sm cursor-pointer hover:shadow-md transition">
//             <h3 className="text-lg font-semibold mb-1">🚗 Car</h3>
//             <p className="text-gray-600 text-sm">
//               Register your car for rental services.
//             </p>
//           </div>

//           {/* BIKE */}
//           <div className="bg-white rounded-lg border p-4 max-w-sm mx-auto shadow-sm cursor-pointer hover:shadow-md transition">
//             <h3 className="text-lg font-semibold mb-1">🏍 Bike</h3>
//             <p className="text-gray-600 text-sm">
//               Add your bike for bookings.
//             </p>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default PropertyType;