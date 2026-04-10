// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import hotels from "../data/hotelsData";

// const HotelDetails = () => {
//   const { id } = useParams();
//   const hotel = hotels.find((h) => h.id === parseInt(id));

//   const [showGuest, setShowGuest] = useState(false);

//   const [rooms, setRooms] = useState([
//     { adults: 1, children: 0, error: "" },
//   ]);

//   const [checkIn, setCheckIn] = useState("");
//   const [checkOut, setCheckOut] = useState("");
//   const [roomType, setRoomType] = useState("");

//   if (!hotel) return <div className="p-6 text-white">Hotel not found</div>;

//   const roomPrices = {
//     Deluxe: hotel.price,
//     Suite: hotel.price + 3000,
//     Premium: hotel.price + 5000,
//   };

//   const calculateNights = () => {
//     if (!checkIn || !checkOut) return 0;
//     const diff =
//       (new Date(checkOut) - new Date(checkIn)) /
//       (1000 * 60 * 60 * 24);
//     return diff > 0 ? diff : 0;
//   };

//   const nights = calculateNights();
//   const pricePerRoom = roomType ? roomPrices[roomType] : 0;

//   const addRoom = () => {
//     setRooms([...rooms, { adults: 1, children: 0, error: "" }]);
//   };

//   const removeRoom = (index) => {
//     setRooms(rooms.filter((_, i) => i !== index));
//   };

//   const updateGuest = (index, type, value) => {
//     const updated = [...rooms];
//     let room = updated[index];
//     room.error = "";

//     if (type === "adults") {
//       if (value < 1) return;
//       if (value > 3) {
//         room.error = "Max 3 adults allowed";
//         return setRooms(updated);
//       }
//       room.adults = value;
//     }

//     if (type === "children") {
//       if (value < 0) return;
//       if (value > 3) {
//         room.error = "Max 3 children allowed";
//         return setRooms(updated);
//       }
//       room.children = value;
//     }

//     setRooms(updated);
//   };

//   const totalRooms = rooms.length;
//   const totalAdults = rooms.reduce((sum, r) => sum + r.adults, 0);
//   const totalChildren = rooms.reduce((sum, r) => sum + r.children, 0);
//   const totalGuests = totalAdults + totalChildren;

//   const extraAdultCharge =
//     totalAdults > totalRooms ? (totalAdults - totalRooms) * 500 : 0;

//   const childrenCharge = totalChildren * 200;

//   const basePrice =
//     pricePerRoom * totalRooms * nights +
//     extraAdultCharge * nights +
//     childrenCharge * nights;

//   const gst = basePrice * 0.12;
//   const discount = basePrice > 0 ? 500 : 0;
//   const total = basePrice + gst - discount;

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-purple-950 text-white">

//       <div className="max-w-7xl mx-auto px-3 sm:px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-6">

//         {/* LEFT */}
//         <div className="md:col-span-2 space-y-6">

//           <img
//             src={hotel.image}
//             alt={hotel.name}
//             className="w-full h-60 sm:h-80 object-cover rounded-2xl"
//           />

//           <div>
//             <h1 className="text-2xl sm:text-3xl font-bold">
//               {hotel.name}
//             </h1>
//             <p className="text-gray-400">{hotel.location}</p>
//             <p className="text-yellow-400">⭐ {hotel.rating}</p>
//           </div>

//           <div>
//             <h2 className="text-lg font-semibold mb-2">Amenities</h2>
//             <div className="flex flex-wrap gap-2">
//               {hotel.amenities.map((a, i) => (
//                 <span key={i} className="bg-white/10 px-3 py-1 rounded-full text-sm">
//                   {a}
//                 </span>
//               ))}
//             </div>
//           </div>

//           <iframe
//             title="map"
//             src={`https://maps.google.com/maps?q=${hotel.location}&output=embed`}
//             className="w-full h-60 rounded-2xl border-0"
//           />
//         </div>

//         {/* RIGHT */}
//         <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 sm:p-6">

//           <h2 className="text-xl sm:text-2xl mb-4">Book Your Stay</h2>

//           <select
//             value={roomType}
//             onChange={(e) => setRoomType(e.target.value)}
//             className="w-full p-3 mb-3 bg-black/40 rounded-lg"
//           >
//             <option value="">Select Room Type</option>
//             <option value="Deluxe">Deluxe</option>
//             <option value="Suite">Suite (+₹3000)</option>
//             <option value="Premium">Premium (+₹5000)</option>
//           </select>

//           {/* GUEST */}
//           <div className="mb-3 relative">
//             <div
//               onClick={() => setShowGuest(!showGuest)}
//               className="bg-black/40 p-3 rounded-lg cursor-pointer"
//             >
//               {totalRooms} Rooms · {totalGuests} Guests
//             </div>

//             {showGuest && (
//               <div className="absolute left-0 w-full bg-slate-900 border border-white/20 rounded-xl mt-2 z-50 max-h-80 overflow-y-auto">

//                 {rooms.map((room, index) => (
//                   <div key={index} className="p-4 border-b border-white/20">

//                     <div className="flex justify-between items-center">
//                       <h3 className="font-semibold">Room {index + 1}</h3>

//                       {rooms.length > 1 && (
//                         <button
//                           onClick={() => removeRoom(index)}
//                           className="text-red-400 text-sm"
//                         >
//                           Remove
//                         </button>
//                       )}
//                     </div>

//                     {/* ADULTS */}
//                     <div className="flex justify-between items-center mt-4">
//                       <p>Adults</p>

//                       <div className="flex items-center gap-3">
//                         <button
//                           onClick={() => updateGuest(index, "adults", room.adults - 1)}
//                           disabled={room.adults === 1}
//                           className="w-9 h-9 border border-white/30 rounded-lg disabled:opacity-30 hover:bg-white/10"
//                         >
//                           -
//                         </button>

//                         <span className="min-w-[20px] text-center">
//                           {room.adults}
//                         </span>

//                         <button
//                           onClick={() => updateGuest(index, "adults", room.adults + 1)}
//                           className="w-9 h-9 border border-white/30 rounded-lg hover:bg-white/10"
//                         >
//                           +
//                         </button>
//                       </div>
//                     </div>

//                     {/* CHILDREN */}
//                     <div className="flex justify-between items-center mt-3">
//                       <p>Children</p>

//                       <div className="flex items-center gap-3">
//                         <button
//                           onClick={() => updateGuest(index, "children", room.children - 1)}
//                           disabled={room.children === 0}
//                           className="w-9 h-9 border border-white/30 rounded-lg disabled:opacity-30 hover:bg-white/10"
//                         >
//                           -
//                         </button>

//                         <span className="min-w-[20px] text-center">
//                           {room.children}
//                         </span>

//                         <button
//                           onClick={() => updateGuest(index, "children", room.children + 1)}
//                           className="w-9 h-9 border border-white/30 rounded-lg hover:bg-white/10"
//                         >
//                           +
//                         </button>
//                       </div>
//                     </div>

//                     {room.error && (
//                       <p className="text-red-400 text-sm mt-2">
//                         {room.error}
//                       </p>
//                     )}
//                   </div>
//                 ))}

//                 <button
//                   onClick={addRoom}
//                   className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600"
//                 >
//                   + Add Room
//                 </button>
//               </div>
//             )}
//           </div>

//           {/* DATES */}
//           <input
//             type="date"
//             value={checkIn}
//             onChange={(e) => setCheckIn(e.target.value)}
//             className="w-full p-3 mb-2 bg-black/40 rounded-lg"
//           />

//           <input
//             type="date"
//             value={checkOut}
//             onChange={(e) => setCheckOut(e.target.value)}
//             className="w-full p-3 mb-3 bg-black/40 rounded-lg"
//           />

//           {/* PRICE */}
//           <div className="text-sm space-y-1">
//             <p>{totalRooms} Rooms · {totalGuests} Guests</p>
//             <p>{nights} Nights</p>

//             <hr className="border-white/20" />

//             {rooms.map((room, i) => (
//               <p key={i}>
//                 Room {i + 1}: ₹{pricePerRoom} × {nights}
//               </p>
//             ))}

//             {extraAdultCharge > 0 && (
//               <p>Extra Adults: ₹{extraAdultCharge} × {nights}</p>
//             )}

//             {totalChildren > 0 && (
//               <p>Children: ₹{childrenCharge} × {nights}</p>
//             )}

//             <hr className="border-white/20" />

//             <p>Base Price: ₹{basePrice}</p>
//             <p className="text-green-400">Discount: -₹{discount}</p>
//             <p className="text-red-400">GST: ₹{gst.toFixed(0)}</p>

//             <hr className="border-white/20" />

//             <p className="font-bold text-lg">
//               Total: ₹{total.toFixed(0)}
//             </p>
//           </div>

//           <button
//             disabled={!roomType || nights === 0}
//             className="w-full mt-4 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 py-3 rounded-lg disabled:bg-gray-600"
//           >
//             Pay Now
//           </button>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default HotelDetails;








import React, { useState } from "react";
import { useParams } from "react-router-dom";
import hotels from "../data/hotelsData";

const HotelDetails = () => {
  const { id } = useParams();
  const hotel = hotels.find((h) => h.id === parseInt(id));

  const [showGuest, setShowGuest] = useState(false);

  const [rooms, setRooms] = useState([
    { adults: 1, children: 0, error: "" },
  ]);

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [roomType, setRoomType] = useState("");

  if (!hotel) return <div className="p-6 text-white">Hotel not found</div>;

  const roomPrices = {
    Deluxe: hotel.price,
    Suite: hotel.price + 3000,
    Premium: hotel.price + 5000,
  };

  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0;
    const diff =
      (new Date(checkOut) - new Date(checkIn)) /
      (1000 * 60 * 60 * 24);
    return diff > 0 ? diff : 0;
  };

  const nights = calculateNights();
  const pricePerRoom = roomType ? roomPrices[roomType] : 0;

  const addRoom = () => {
    setRooms([...rooms, { adults: 1, children: 0, error: "" }]);
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
  const totalAdults = rooms.reduce((sum, r) => sum + r.adults, 0);
  const totalChildren = rooms.reduce((sum, r) => sum + r.children, 0);
  const totalGuests = totalAdults + totalChildren;

  const extraAdultCharge =
    totalAdults > totalRooms ? (totalAdults - totalRooms) * 500 : 0;

  const childrenCharge = totalChildren * 200;

  const basePrice =
    pricePerRoom * totalRooms * nights +
    extraAdultCharge * nights +
    childrenCharge * nights;

  const gst = basePrice * 0.12;
  const discount = basePrice > 0 ? 500 : 0;
  const total = basePrice + gst - discount;

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-purple-950 text-white">

      {/* CONTAINER */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT SECTION */}
        <div className="lg:col-span-2 space-y-5">

          <img
            src={hotel.image}
            alt={hotel.name}
            className="w-full h-52 sm:h-72 md:h-80 object-cover rounded-2xl"
          />

          <div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
              {hotel.name}
            </h1>
            <p className="text-gray-400 text-sm sm:text-base">
              {hotel.location}
            </p>
            <p className="text-yellow-400 text-sm">
              ⭐ {hotel.rating}
            </p>
          </div>

          {/* Amenities */}
          <div>
            <h2 className="text-base sm:text-lg font-semibold mb-2">
              Amenities
            </h2>

            <div className="flex flex-wrap gap-2">
              {hotel.amenities.map((a, i) => (
                <span
                  key={i}
                  className="bg-white/10 px-2 py-1 rounded-full text-xs sm:text-sm"
                >
                  {a}
                </span>
              ))}
            </div>
          </div>

          {/* MAP */}
          <iframe
            title="map"
            src={`https://maps.google.com/maps?q=${hotel.location}&output=embed`}
            className="w-full h-52 sm:h-60 rounded-2xl border-0"
          />
        </div>

        {/* RIGHT SECTION */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 sm:p-5 sticky top-4 h-fit">

          <h2 className="text-lg sm:text-xl mb-4">
            Book Your Stay
          </h2>

          {/* ROOM TYPE */}
          <select
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
            className="w-full p-3 mb-3 bg-black/40 rounded-lg text-sm"
          >
            <option value="">Select Room Type</option>
            <option value="Deluxe">Deluxe</option>
            <option value="Suite">Suite (+₹3000)</option>
            <option value="Premium">Premium (+₹5000)</option>
          </select>

          {/* GUEST SELECTOR */}
          <div className="mb-3 relative">
            <div
              onClick={() => setShowGuest(!showGuest)}
              className="bg-black/40 p-3 rounded-lg cursor-pointer text-sm"
            >
              {totalRooms} Rooms · {totalGuests} Guests
            </div>

            {showGuest && (
              <div className="absolute left-0 w-full bg-slate-900 border border-white/20 rounded-xl mt-2 z-50 max-h-72 overflow-y-auto shadow-xl">

                {rooms.map((room, index) => (
                  <div key={index} className="p-3 border-b border-white/20">

                    <div className="flex justify-between items-center">
                      <h3 className="text-sm font-semibold">
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
                    <div className="flex justify-between mt-3 text-sm">
                      <p>Adults</p>

                      <div className="flex gap-2 items-center">
                        <button
                          onClick={() => updateGuest(index, "adults", room.adults - 1)}
                          disabled={room.adults === 1}
                          className="px-2 border rounded"
                        >-</button>

                        <span>{room.adults}</span>

                        <button
                          onClick={() => updateGuest(index, "adults", room.adults + 1)}
                          className="px-2 border rounded"
                        >+</button>
                      </div>
                    </div>

                    {/* CHILDREN */}
                    <div className="flex justify-between mt-2 text-sm">
                      <p>Children</p>

                      <div className="flex gap-2 items-center">
                        <button
                          onClick={() => updateGuest(index, "children", room.children - 1)}
                          disabled={room.children === 0}
                          className="px-2 border rounded"
                        >-</button>

                        <span>{room.children}</span>

                        <button
                          onClick={() => updateGuest(index, "children", room.children + 1)}
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
              </div>
            )}
          </div>

          {/* DATES */}
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="w-full p-3 mb-2 bg-black/40 rounded-lg text-sm"
          />

          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="w-full p-3 mb-3 bg-black/40 rounded-lg text-sm"
          />

          {/* PRICE */}
          <div className="text-xs sm:text-sm space-y-1">

            <p>{totalRooms} Rooms · {totalGuests} Guests</p>
            <p>{nights} Nights</p>

            <hr className="border-white/20" />

            <p>Base Price: ₹{basePrice}</p>
            <p className="text-green-400">Discount: -₹{discount}</p>
            <p className="text-red-400">GST: ₹{gst.toFixed(0)}</p>

            <hr className="border-white/20" />

            <p className="font-bold text-base sm:text-lg">
              Total: ₹{total.toFixed(0)}
            </p>
          </div>

          <button
            disabled={!roomType || nights === 0}
            className="w-full mt-4 py-3 text-sm bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg disabled:bg-gray-600"
          >
            Pay Now
          </button>

        </div>
      </div>
    </div>
  );
};

export default HotelDetails;