// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import hotels from "../data/hotelsData";

// const BookingPage = () => {
//   const [showGuest, setShowGuest] = useState(false);
//   const { id } = useParams();

//   const hotel = hotels.find((h) => h.id === parseInt(id));

//   // ✅ ROOMS STATE
//   const [rooms, setRooms] = useState([
//     { adults: 1, children: 0, error: "" },
//   ]);

//   if (!hotel) return <div className="text-white p-6">Hotel Not Found</div>;

//   // ✅ ADD ROOM
//   const addRoom = () => {
//     if (rooms.length < 5) {
//       setRooms([...rooms, { adults: 1, children: 0, error: "" }]);
//     }
//   };

//   // ✅ REMOVE ROOM
//   const removeRoom = (index) => {
//     const updated = rooms.filter((_, i) => i !== index);
//     setRooms(updated);
//   };

//   // ✅ UPDATE WITH VALIDATION
//   const updateGuest = (index, type, value) => {
//     const updated = [...rooms];
//     let room = updated[index];
//     room.error = "";

//     if (type === "adults") {
//       if (value < 1) return;
//       if (value > 3) {
//         room.error = "Max 3 adults allowed. Book another room.";
//         return setRooms(updated);
//       }
//       room.adults = value;
//     }

//     if (type === "children") {
//       if (value < 0) return;
//       if (value > 3) {
//         room.error = "Max 3 children allowed. Book another room.";
//         return setRooms(updated);
//       }
//       room.children = value;
//     }

//     setRooms(updated);
//   };

//   // ✅ TOTALS
//   const totalRooms = rooms.length;
//   const totalGuests = rooms.reduce(
//     (sum, r) => sum + r.adults + r.children,
//     0
//   );

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

//           {/* ROOM SUMMARY */}
//           <div className="mt-4">
//             <div
//               onClick={() => setShowGuest(!showGuest)}
//               className="bg-black/40 border border-white/20 p-3 rounded-lg cursor-pointer"
//             >
//               {totalRooms} Rooms, {totalGuests} Guests
//             </div>
//           </div>

//           {/* DROPDOWN */}
//           {showGuest && (
//             <div className="mt-4 border border-white/20 rounded-2xl overflow-hidden">

//               {rooms.map((room, index) => (
//                 <div key={index} className="bg-black/40 p-4 border-b border-white/20">

//                   {/* HEADER */}
//                   <div className="flex justify-between items-center">
//                     <h3 className="mb-2 font-semibold text-lg">
//                       Room {index + 1}
//                     </h3>

//                     {rooms.length > 1 && (
//                       <button
//                         onClick={() => removeRoom(index)}
//                         className="text-red-400 text-sm"
//                       >
//                         Remove
//                       </button>
//                     )}
//                   </div>

//                   {/* ADULTS */}
//                   <div className="flex justify-between items-center mb-3">
//                     <p>Adults (5+)</p>
//                     <div className="flex items-center gap-3">
//                       <button
//                         onClick={() =>
//                           updateGuest(index, "adults", room.adults - 1)
//                         }
//                         className="w-9 h-9 border border-white/30 rounded-lg"
//                       >
//                         -
//                       </button>
//                       <span>{room.adults}</span>
//                       <button
//                         onClick={() =>
//                           updateGuest(index, "adults", room.adults + 1)
//                         }
//                         className="w-9 h-9 border border-white/30 rounded-lg"
//                       >
//                         +
//                       </button>
//                     </div>
//                   </div>

//                   {/* CHILDREN */}
//                   <div className="flex justify-between items-center">
//                     <p>Children (0–5)</p>
//                     <div className="flex items-center gap-3">
//                       <button
//                         onClick={() =>
//                           updateGuest(index, "children", room.children - 1)
//                         }
//                         className="w-9 h-9 border border-white/30 rounded-lg"
//                       >
//                         -
//                       </button>
//                       <span>{room.children}</span>
//                       <button
//                         onClick={() =>
//                           updateGuest(index, "children", room.children + 1)
//                         }
//                         className="w-9 h-9 border border-white/30 rounded-lg"
//                       >
//                         +
//                       </button>
//                     </div>
//                   </div>

//                   {/* ERROR */}
//                   {room.error && (
//                     <p className="text-red-400 text-sm mt-2">
//                       {room.error}
//                     </p>
//                   )}
//                 </div>
//               ))}

//               {/* ADD ROOM */}
//               <button
//                 onClick={addRoom}
//                 className="w-full py-3 border-t border-white/20 bg-white/5 hover:bg-white/10"
//               >
//                 + Add Another Room
//               </button>

//               {/* DONE */}
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
//             Continue
//           </button>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="space-y-6">

//           {/* HOTEL BANNER */}
//           <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden shadow-2xl">
//             <img
//               src={hotel.image}
//               alt={hotel.name}
//               className="w-full h-56 object-cover"
//             />
//             <div className="p-4">
//               <h3 className="text-xl font-bold">{hotel.name}</h3>
//               <p className="text-gray-400">{hotel.location}</p>
//             </div>
//           </div>

//           {/* BOOKING DETAILS */}
//           <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-2xl shadow-2xl">
//             <h3 className="text-lg font-semibold mb-3">Booking Details</h3>

//             {/* ROOM WISE */}
//             <div className="space-y-3 text-sm">
//               {rooms.map((room, index) => (
//                 <div key={index} className="flex justify-between border-b border-white/10 pb-2">
//                   <div>
//                     <p className="font-medium">Room {index + 1}</p>
//                     <p className="text-gray-400 text-xs">
//                       {room.adults} Adults · {room.children} Children
//                     </p>
//                   </div>
//                   <p>₹{hotel.price}</p>
//                 </div>
//               ))}
//             </div>

//             {/* TOTAL */}
//             <div className="mt-4 space-y-2 text-sm">
//               <p>Total Base Price: ₹{hotel.price * totalRooms}</p>
//               <p className="text-green-400">Discount: -₹500</p>
//               <p className="text-red-400">Taxes: ₹50</p>

//               <hr className="border-white/20" />

//               <p className="text-lg font-bold">
//                 Payable Amount: ₹{hotel.price * totalRooms - 500 + 50}
//               </p>
//             </div>
//           </div>

//         </div>

//       </div>
//     </div>
//   );
// };

// export default BookingPage;






import React, { useState } from "react";
import { useParams } from "react-router-dom";
import hotels from "../data/hotelsData";

const BookingPage = () => {
  const [showGuest, setShowGuest] = useState(false);
  const { id } = useParams();

  const hotel = hotels.find((h) => h.id === parseInt(id));

  const [rooms, setRooms] = useState([
    { adults: 1, children: 0, error: "" },
  ]);

  if (!hotel) return <div className="text-white p-6">Hotel Not Found</div>;

  const addRoom = () => {
    if (rooms.length < 5) {
      setRooms([...rooms, { adults: 1, children: 0, error: "" }]);
    }
  };

  const removeRoom = (index) => {
    setRooms(rooms.filter((_, i) => i !== index));
  };

  const updateGuest = (index, type, value) => {
    const updated = [...rooms];
    let room = updated[index];
    room.error = "";

    if (type === "adults") {
      if (value < 1) return;
      if (value > 3) {
        room.error = "Max 3 adults allowed";
        return setRooms(updated);
      }
      room.adults = value;
    }

    if (type === "children") {
      if (value < 0) return;
      if (value > 3) {
        room.error = "Max 3 children allowed";
        return setRooms(updated);
      }
      room.children = value;
    }

    setRooms(updated);
  };

  const totalRooms = rooms.length;
  const totalGuests = rooms.reduce(
    (sum, r) => sum + r.adults + r.children,
    0
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-purple-950 text-white py-6 sm:py-10">

      <div className="max-w-6xl mx-auto px-3 sm:px-4 grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* LEFT FORM */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-4 sm:p-6 rounded-2xl shadow-xl">

          <h2 className="text-lg sm:text-2xl font-bold mb-4">
            Enter your details
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input className="bg-black/40 p-3 rounded-lg text-sm" placeholder="Full Name" />
            <input className="bg-black/40 p-3 rounded-lg text-sm" placeholder="Email" />
          </div>

          <input className="w-full mt-3 bg-black/40 p-3 rounded-lg text-sm" placeholder="Phone Number" />

          {/* ROOM SUMMARY */}
          <div className="mt-4 relative">
            <div
              onClick={() => setShowGuest(!showGuest)}
              className="bg-black/40 p-3 rounded-lg cursor-pointer text-sm"
            >
              {totalRooms} Rooms, {totalGuests} Guests
            </div>

            {/* DROPDOWN */}
            {showGuest && (
              <div className="absolute left-0 w-full bg-slate-900 border border-white/20 rounded-xl mt-2 z-50 max-h-72 overflow-y-auto shadow-xl">

                {rooms.map((room, index) => (
                  <div key={index} className="p-3 border-b border-white/20 text-sm">

                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold">
                        Room {index + 1}
                      </h3>

                      {rooms.length > 1 && (
                        <button
                          onClick={() => removeRoom(index)}
                          className="text-red-400 text-xs"
                        >
                          Remove
                        </button>
                      )}
                    </div>

                    {/* ADULTS */}
                    <div className="flex justify-between mt-3">
                      <p>Adults</p>

                      <div className="flex gap-2 items-center">
                        <button
                          onClick={() =>
                            updateGuest(index, "adults", room.adults - 1)
                          }
                          className="px-2 border rounded"
                        >-</button>

                        <span>{room.adults}</span>

                        <button
                          onClick={() =>
                            updateGuest(index, "adults", room.adults + 1)
                          }
                          className="px-2 border rounded"
                        >+</button>
                      </div>
                    </div>

                    {/* CHILDREN */}
                    <div className="flex justify-between mt-2">
                      <p>Children</p>

                      <div className="flex gap-2 items-center">
                        <button
                          onClick={() =>
                            updateGuest(index, "children", room.children - 1)
                          }
                          className="px-2 border rounded"
                        >-</button>

                        <span>{room.children}</span>

                        <button
                          onClick={() =>
                            updateGuest(index, "children", room.children + 1)
                          }
                          className="px-2 border rounded"
                        >+</button>
                      </div>
                    </div>

                    {room.error && (
                      <p className="text-red-400 text-xs mt-1">
                        {room.error}
                      </p>
                    )}
                  </div>
                ))}

                <button
                  onClick={addRoom}
                  className="w-full py-2 text-sm bg-purple-600"
                >
                  + Add Room
                </button>

                <button
                  onClick={() => setShowGuest(false)}
                  className="w-full py-2 text-sm bg-blue-600"
                >
                  Done
                </button>
              </div>
            )}
          </div>

          {/* DATES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
            <input type="date" className="bg-black/40 p-3 rounded-lg text-sm" />
            <input type="date" className="bg-black/40 p-3 rounded-lg text-sm" />
          </div>

          <button className="w-full mt-5 py-3 text-sm bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg">
            Continue
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-5 lg:sticky lg:top-6 h-fit">

          {/* HOTEL */}
          <div className="bg-white/10 border border-white/20 rounded-2xl overflow-hidden">
            <img
              src={hotel.image}
              alt={hotel.name}
              className="w-full h-48 sm:h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg sm:text-xl font-bold">
                {hotel.name}
              </h3>
              <p className="text-gray-400 text-sm">
                {hotel.location}
              </p>
            </div>
          </div>

          {/* DETAILS */}
          <div className="bg-white/10 border border-white/20 p-4 rounded-2xl">

            <h3 className="text-base sm:text-lg font-semibold mb-3">
              Booking Details
            </h3>

            <div className="space-y-2 text-xs sm:text-sm">
              {rooms.map((room, index) => (
                <div key={index} className="flex justify-between border-b border-white/10 pb-2">
                  <div>
                    <p className="font-medium">Room {index + 1}</p>
                    <p className="text-gray-400 text-xs">
                      {room.adults}A · {room.children}C
                    </p>
                  </div>
                  <p>₹{hotel.price}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 text-xs sm:text-sm space-y-1">
              <p>Total: ₹{hotel.price * totalRooms}</p>
              <p className="text-green-400">Discount: -₹500</p>
              <p className="text-red-400">Taxes: ₹50</p>

              <hr className="border-white/20" />

              <p className="text-base sm:text-lg font-bold">
                Pay: ₹{hotel.price * totalRooms - 500 + 50}
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default BookingPage;