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






// import React, { useState } from "react";
// import { Rocket } from "lucide-react";

// const PropertyType = () => {

//   const [openCard, setOpenCard] = useState(null);

//   const properties = [
//     { name: "Hotel", icon: "🏨", desc: "A commercial property offering rooms." },
//     { name: "Home", icon: "🏡", desc: "A residential space for booking." },
//   ];

//   const vehicles = [
//     { name: "Buses", icon: "🚌", desc: "Add buses for travel and tours." },
//     { name: "Cabs", icon: "🚕", desc: "Register cabs for city rides." },
//     { name: "Bikes", icon: "🏍", desc: "Add bikes for short trips." },
//   ];

//   const handleToggle = (name) => {
//     setOpenCard(openCard === name ? null : name);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 px-4 py-10">
//       <div className="text-center max-w-5xl mx-auto">

//          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 flex items-center justify-center gap-3">
          
//           <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-2 rounded-full shadow-md">
//             🚀
//           </span>
//           Register Your Service
//         </h1>

//         {/* 🔷 PROPERTY SECTION */}
//         <h2 className="text-2xl font-bold text-blue-600 mb-2">
//           Are you a property owner?
//         </h2>

//         <p className="text-gray-600 mb-8">
//           Choose your property type to get started
//         </p>

//         {/* PROPERTY CARDS */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
//           {properties.map((p, i) => (
//             <div
//               key={i}
//               className="bg-white rounded-xl border p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 cursor-pointer"
//             >
//               <h3 className="text-xl font-semibold flex justify-center gap-2 mb-2">
//                 <span className="text-2xl">{p.icon}</span> {p.name}
//               </h3>
//               <p className="text-gray-500 text-sm">{p.desc}</p>
//             </div>
//           ))}
//         </div>

//         {/* 🔷 VEHICLE SECTION */}
//         <h2 className="text-2xl font-bold text-blue-600 mb-2">
//           Are you a vehicle owner?
//         </h2>

//         <p className="text-gray-600 mb-8">
//           Select your vehicle category
//         </p>

//         {/* VEHICLE CARDS */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

//           {vehicles.map((v, i) => (
//             <div key={i}>

//               {/* MAIN CARD */}
//               <div
//                 onClick={() => handleToggle(v.name)}
//                 className="bg-white rounded-xl border p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 cursor-pointer"
//               >
//                 <h3 className="text-xl font-semibold flex justify-center gap-2 mb-2">
//                   <span className="text-2xl">{v.icon}</span> {v.name}
//                 </h3>
//                 <p className="text-gray-500 text-sm">{v.desc}</p>
//               </div>

//               {/* 🔥 SUB OPTIONS */}
//               {openCard === v.name && (
//                 <div className="mt-4 space-y-3 animate-fadeIn">

//                   {/* CABS */}
//                   {v.name === "Cabs" && (
//                     <>
//                       <div className="bg-white border rounded-lg p-3 shadow hover:bg-blue-50 cursor-pointer">
//                         🚗 4 Seater
//                       </div>
//                       <div className="bg-white border rounded-lg p-3 shadow hover:bg-blue-50 cursor-pointer">
//                         🚐 6 Seater
//                       </div>
//                       <div className="bg-white border rounded-lg p-3 shadow hover:bg-blue-50 cursor-pointer">
//                         🚙 8 Seater
//                       </div>
//                     </>
//                   )}

//                   {/* BIKES */}
//                   {v.name === "Bikes" && (
//                     <>
//                       <div className="bg-white border rounded-lg p-3 shadow hover:bg-blue-50 cursor-pointer">
//                         🛵 Scooty
//                       </div>
//                       <div className="bg-white border rounded-lg p-3 shadow hover:bg-blue-50 cursor-pointer">
//                         🏍 Bullet
//                       </div>
//                       <div className="bg-white border rounded-lg p-3 shadow hover:bg-blue-50 cursor-pointer">
//                         🚴 Bike
//                       </div>
//                     </>
//                   )}

//                 </div>
//               )}

//             </div>
//           ))}

//         </div>

//       </div>
//     </div>
//   );
// };

// export default PropertyType;





import React, { useState } from "react";
import { Rocket } from "lucide-react";

const PropertyType = () => {

  const [openCard, setOpenCard] = useState(null);

  const properties = [
    { name: "Hotel", icon: "🏨", desc: "A commercial property offering private rooms, suites, and other accommodations for guests."},
    { name: "Home", icon: "🏡", desc: "A residential space where guests can book individual rooms or the entire home for short stays." },
  ];

  const vehicles = [
    { name: "Buses", icon: "🚌", desc: "Add buses for travel and tours." },
    { name: "Cabs", icon: "🚕", desc: "Register cabs for city rides." },
    { name: "Bikes", icon: "🏍", desc: "Add bikes for short trips." },
  ];

  const handleToggle = (name) => {
    setOpenCard(openCard === name ? null : name);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 px-4 py-10">

      <div className="text-center max-w-5xl mx-auto">

        {/* 🔷 HERO SECTION */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 flex items-center justify-center gap-3">
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-2 rounded-full shadow-md animate-pulse">
            <Rocket size={22} />
          </span>
          Register Your Service
        </h1>

        <p className="text-gray-500 mb-10 text-sm md:text-base">
          List your property or vehicle and start earning today 🚀
        </p>

        {/* 🔷 PROPERTY SECTION */}
        <div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-lg mb-10">

          <h2 className="text-2xl font-bold text-blue-600 mb-2">
            Are you a property owner?
          </h2>

          <p className="text-gray-600 mb-8">
            Choose your property type to get started
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {properties.map((p, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-200 p-6 shadow-md 
                hover:shadow-xl hover:-translate-y-1 hover:border-purple-400 
                transition duration-300 cursor-pointer"
              >
                <h3 className="text-xl font-semibold flex justify-center items-center gap-2 mb-2">
                  <span className="bg-purple-100 text-purple-600 p-2 rounded-full text-xl">
                    {p.icon}
                  </span>
                  {p.name}
                </h3>
                <p className="text-gray-500 text-sm">{p.desc}</p>
              </div>
            ))}
          </div>

        </div>

        {/* 🔷 DIVIDER */}
        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-gray-300 to-transparent my-10"></div>

        {/* 🔷 VEHICLE SECTION */}
        <div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-lg">

          <h2 className="text-2xl font-bold text-blue-600 mb-2">
            Are you a vehicle owner?
          </h2>

          <p className="text-gray-600 mb-8">
            Select your vehicle category
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {vehicles.map((v, i) => (
              <div key={i}>

                {/* MAIN CARD */}
                <div
                  onClick={() => handleToggle(v.name)}
                  className={`bg-white rounded-xl border p-6 shadow-md cursor-pointer transition duration-300
                  ${openCard === v.name 
                    ? "border-blue-500 bg-blue-50" 
                    : "hover:shadow-xl hover:-translate-y-1 hover:border-blue-400"}
                  `}
                >
                  <h3 className="text-xl font-semibold flex justify-center items-center gap-2 mb-2">
                    <span className="bg-blue-100 text-blue-600 p-2 rounded-full text-xl">
                      {v.icon}
                    </span>
                    {v.name}
                  </h3>
                  <p className="text-gray-500 text-sm">{v.desc}</p>
                </div>

                {/* 🔥 SUB OPTIONS */}
{openCard === v.name && (
  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fadeIn">

    {/* 🚕 CABS */}
    {v.name === "Cabs" && (
      <>
        <div className="bg-white border rounded-xl p-4 shadow-md hover:shadow-lg hover:-translate-y-1 transition cursor-pointer flex items-center gap-3">
          <span className="bg-blue-100 text-blue-600 p-2 rounded-full text-lg">🚗</span>
          <div>
            <p className="font-semibold">4 Seater</p>
            <p className="text-xs text-gray-500">Perfect for small families</p>
          </div>
        </div>

        <div className="bg-white border rounded-xl p-4 shadow-md hover:shadow-lg hover:-translate-y-1 transition cursor-pointer flex items-center gap-3">
          <span className="bg-blue-100 text-blue-600 p-2 rounded-full text-lg">🚐</span>
          <div>
            <p className="font-semibold">6 Seater</p>
            <p className="text-xs text-gray-500">Best for group travel</p>
          </div>
        </div>

        <div className="bg-white border rounded-xl p-4 shadow-md hover:shadow-lg hover:-translate-y-1 transition cursor-pointer flex items-center gap-3">
          <span className="bg-blue-100 text-blue-600 p-2 rounded-full text-lg">🚙</span>
          <div>
            <p className="font-semibold">8 Seater</p>
            <p className="text-xs text-gray-500">Ideal for large groups</p>
          </div>
        </div>
      </>
    )}

    {/* 🏍 BIKES */}
    {v.name === "Bikes" && (
      <>
        <div className="bg-white border rounded-xl p-4 shadow-md hover:shadow-lg hover:-translate-y-1 transition cursor-pointer flex items-center gap-3">
          <span className="bg-purple-100 text-purple-600 p-2 rounded-full text-lg">🛵</span>
          <div>
            <p className="font-semibold">Scooty</p>
            <p className="text-xs text-gray-500">Easy city rides</p>
          </div>
        </div>

        <div className="bg-white border rounded-xl p-4 shadow-md hover:shadow-lg hover:-translate-y-1 transition cursor-pointer flex items-center gap-3">
          <span className="bg-purple-100 text-purple-600 p-2 rounded-full text-lg">🏍</span>
          <div>
            <p className="font-semibold">Bullet</p>
            <p className="text-xs text-gray-500">Powerful long rides</p>
          </div>
        </div>

        <div className="bg-white border rounded-xl p-4 shadow-md hover:shadow-lg hover:-translate-y-1 transition cursor-pointer flex items-center gap-3">
          <span className="bg-purple-100 text-purple-600 p-2 rounded-full text-lg">🚴</span>
          <div>
            <p className="font-semibold">Bike</p>
            <p className="text-xs text-gray-500">Affordable daily rides</p>
          </div>
        </div>
      </>
    )}

  </div>
)}

              </div>
            ))}

          </div>

        </div>

      </div>
    </div>
  );
};

export default PropertyType;