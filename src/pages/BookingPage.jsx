// import React from "react";
// import { useParams } from "react-router-dom";
// import hotels from "../data/hotelsData";

// const BookingPage = () => {
//   const [showGuest, setShowGuest] = React.useState(false);
//   const { id } = useParams();

//   const hotel = hotels.find((h) => h.id === parseInt(id));

//   if (!hotel) return <div className="text-white p-6">Hotel Not Found</div>;

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-purple-950 text-white py-10">
//       <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-6">

//         {/* LEFT FORM */}
//         <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-2xl">
//           <h2 className="text-2xl font-bold mb-4">Enter your details</h2>

//           <div className="grid md:grid-cols-2 gap-3">
//             <input className="bg-black/40 border border-white/20 p-3 rounded-lg" placeholder="Full Name" />
//             <input className="bg-black/40 border border-white/20 p-3 rounded-lg" placeholder="Email" />
//           </div>

//           <input className="w-full mt-3 bg-black/40 border border-white/20 p-3 rounded-lg" placeholder="Phone Number" />

//           {/* ROOM & GUEST SUMMARY (CLICKABLE) */}
//           <div className="mt-4">
//             <div onClick={() => setShowGuest(!showGuest)} className="bg-black/40 border border-white/20 p-3 rounded-lg cursor-pointer">
//               1 Room, 1 Guest
//             </div>
//           </div>

//           {/* ROOM & GUEST SECTION */}
//           {showGuest && (
//             <div className="mt-4 border border-white/20 rounded-2xl overflow-hidden">

//               {/* ROOM CARD */}
//               <div className="bg-black/40 p-4">
//                 <h3 className="mb-4 font-semibold text-lg">Room 1</h3>

//                 <div className="flex justify-between items-center mb-4">
//                   <p>Adults (5+)</p>
//                   <div className="flex items-center gap-3">
//                     <button className="w-9 h-9 border border-white/30 rounded-lg">-</button>
//                     <span className="text-lg">1</span>
//                     <button className="w-9 h-9 border border-white/30 rounded-lg">+</button>
//                   </div>
//                 </div>

//                 <div className="flex justify-between items-center">
//                   <p>Children (0–5)</p>
//                   <div className="flex items-center gap-3">
//                     <button className="w-9 h-9 border border-white/30 rounded-lg">-</button>
//                     <span className="text-lg">0</span>
//                     <button className="w-9 h-9 border border-white/30 rounded-lg">+</button>
//                   </div>
//                 </div>
//               </div>

//               <button className="w-full py-3 border-t border-white/20 bg-white/5 hover:bg-white/10 transition">
//                 + Add Another Room
//               </button>

//               <button
//                 onClick={() => setShowGuest(false)}
//                 className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 py-3"
//               >
//                 Done
//               </button>
//             </div>
//           )}

//           <div className="grid md:grid-cols-2 gap-3 mt-3">
//             <input type="date" className="bg-black/40 border border-white/20 p-3 rounded-lg" />
//             <input type="date" className="bg-black/40 border border-white/20 p-3 rounded-lg" />
//           </div>

//           <button className="w-full mt-5 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 py-3 rounded-lg">
//             Done
//           </button>
//         </div>

//         {/* RIGHT HOTEL INFO */}
//         <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-2xl">
//           <img
//             src={hotel.image}
//             alt={hotel.name}
//             className="w-full h-48 object-cover rounded-xl"
//           />

//           <h3 className="text-xl font-bold mt-4">{hotel.name}</h3>
//           <p className="text-gray-400">{hotel.location}</p>

//           <div className="mt-4 space-y-2 text-sm">
//             <p>1 Night · 1 Room · 1 Guest</p>
//             <p>Total Base Price: ₹{hotel.price}</p>
//             <p className="text-green-400">Discount: -₹500</p>
//             <p className="text-red-400">Taxes: ₹50</p>

//             <hr className="border-white/20" />

//             <p className="text-lg font-bold">
//               Payable Amount: ₹{hotel.price - 500 + 50}
//             </p>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default BookingPage;



import React from "react";
import { useParams } from "react-router-dom";
import hotels from "../data/hotelsData";

const BookingPage = () => {
  const [showGuest, setShowGuest] = React.useState(false);
  const { id } = useParams();

  const hotel = hotels.find((h) => h.id === parseInt(id));

  if (!hotel) return <div className="text-white p-6">Hotel Not Found</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-purple-950 text-white py-10">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-6">

        {/* LEFT FORM */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-2xl">
          <h2 className="text-2xl font-bold mb-4">Enter your details</h2>

          <div className="grid md:grid-cols-2 gap-3">
            <input className="bg-black/40 border border-white/20 p-3 rounded-lg" placeholder="Full Name" />
            <input className="bg-black/40 border border-white/20 p-3 rounded-lg" placeholder="Email" />
          </div>

          <input className="w-full mt-3 bg-black/40 border border-white/20 p-3 rounded-lg" placeholder="Phone Number" />

          {/* ROOM SUMMARY */}
          <div className="mt-4">
            <div onClick={() => setShowGuest(!showGuest)} className="bg-black/40 border border-white/20 p-3 rounded-lg cursor-pointer">
              1 Room, 1 Guest
            </div>
          </div>

          {/* DROPDOWN */}
          {showGuest && (
            <div className="mt-4 border border-white/20 rounded-2xl overflow-hidden">

              <div className="bg-black/40 p-4">
                <h3 className="mb-4 font-semibold text-lg">Room 1</h3>

                <div className="flex justify-between items-center mb-4">
                  <p>Adults (5+)</p>
                  <div className="flex items-center gap-3">
                    <button className="w-9 h-9 border border-white/30 rounded-lg">-</button>
                    <span>1</span>
                    <button className="w-9 h-9 border border-white/30 rounded-lg">+</button>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <p>Children (0–5)</p>
                  <div className="flex items-center gap-3">
                    <button className="w-9 h-9 border border-white/30 rounded-lg">-</button>
                    <span>0</span>
                    <button className="w-9 h-9 border border-white/30 rounded-lg">+</button>
                  </div>
                </div>
              </div>

              <button className="w-full py-3 border-t border-white/20 bg-white/5 hover:bg-white/10">
                + Add Another Room
              </button>

              <button
                onClick={() => setShowGuest(false)}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 py-3"
              >
                Done
              </button>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-3 mt-3">
            <input type="date" className="bg-black/40 border border-white/20 p-3 rounded-lg" />
            <input type="date" className="bg-black/40 border border-white/20 p-3 rounded-lg" />
          </div>

          <button className="w-full mt-5 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 py-3 rounded-lg">
            Continue
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">

          {/* HOTEL BANNER */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={hotel.image}
              alt={hotel.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">{hotel.name}</h3>
              <p className="text-gray-400">{hotel.location}</p>
            </div>
          </div>

          {/* BOOKING DETAILS */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-2xl shadow-2xl">
            <h3 className="text-lg font-semibold mb-3">Booking Details</h3>

            <div className="space-y-2 text-sm">
              <p>1 Night · 1 Room · 1 Guest</p>
              <p>Total Base Price: ₹{hotel.price}</p>
              <p className="text-green-400">Discount: -₹500</p>
              <p className="text-red-400">Taxes: ₹50</p>

              <hr className="border-white/20" />

              <p className="text-lg font-bold">
                Payable Amount: ₹{hotel.price - 500 + 50}
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default BookingPage;