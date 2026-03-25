// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import hotels from "../data/hotelsData";

// const HotelDetails = () => {
//   const { id } = useParams();
//   const hotel = hotels.find((h) => h.id === parseInt(id));

//   // ROOM & GUEST STATE
//   const [showGuest, setShowGuest] = useState(false);
//   const [adults, setAdults] = useState(1);
//   const [children, setChildren] = useState(0);
//   const [rooms, setRooms] = useState(1);

//   // BOOKING STATE
//   const [checkIn, setCheckIn] = useState("");
//   const [checkOut, setCheckOut] = useState("");
//   const [roomType, setRoomType] = useState("");

//   if (!hotel) return <div className="p-6">Hotel not found</div>;

//   // ROOM PRICES
//   const roomPrices = {
//     Deluxe: hotel.price,
//     Suite: hotel.price + 3000,
//     Premium: hotel.price + 5000,
//   };

//   // CALCULATE NIGHTS
//   const calculateNights = () => {
//     if (!checkIn || !checkOut) return 0;
//     const inDate = new Date(checkIn);
//     const outDate = new Date(checkOut);
//     const diff = (outDate - inDate) / (1000 * 60 * 60 * 24);
//     return diff > 0 ? diff : 0;
//   };

//   const nights = calculateNights();

//   // PRICE LOGIC
//   const pricePerRoom = roomType ? roomPrices[roomType] : 0;

//   const extraAdultCharge =
//     adults > rooms ? (adults - rooms) * 500 : 0;

//   const childrenCharge = children * 200;

//   const basePrice =
//     pricePerRoom * rooms * nights +
//     extraAdultCharge * nights +
//     childrenCharge * nights;

//   const gst = basePrice * 0.12;
//   const discount = basePrice > 0 ? 500 : 0;
//   const total = basePrice + gst - discount;

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-6 grid md:grid-cols-3 gap-6">

//       {/* LEFT */}
//       <div className="md:col-span-2 space-y-6">

//         <img
//           src={hotel.image}
//           alt={hotel.name}
//           className="w-full h-80 object-cover rounded-xl"
//         />

//         <div>
//           <h1 className="text-2xl font-bold">{hotel.name}</h1>
//           <p className="text-gray-500">{hotel.location}</p>
//           <p className="text-green-600">⭐ {hotel.rating} Rating</p>
//         </div>

//         {/* AMENITIES */}
//         <div>
//           <h2 className="text-lg font-semibold mb-2">Amenities</h2>
//           <div className="flex flex-wrap gap-2">
//             {hotel.amenities.map((a, i) => (
//               <span key={i} className="bg-gray-100 px-3 py-1 rounded text-sm">
//                 {a}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* MAP */}
//         <iframe
//           title="map"
//           src={`https://maps.google.com/maps?q=${hotel.location}&output=embed`}
//           className="w-full h-60 rounded-xl border-0"
//         />

//       </div>

//       {/* RIGHT - BOOKING */}
//       <div className="bg-white shadow-xl rounded-xl p-5 h-fit sticky top-24">

//         <h2 className="text-xl font-semibold mb-4">Book Your Stay</h2>

//         {/* ROOM TYPE */}
//         <select
//           value={roomType}
//           onChange={(e) => setRoomType(e.target.value)}
//           className="w-full border p-2 rounded mb-3"
//         >
//           <option value="">Select Room Type</option>
//           <option value="Deluxe">Deluxe</option>
//           <option value="Suite">Suite (+₹3000)</option>
//           <option value="Premium">Premium (+₹5000)</option>
//         </select>

//         {/* ROOM & GUEST */}
//         <div className="relative mb-3">
//           <div
//             onClick={() => setShowGuest(!showGuest)}
//             className="w-full border p-3 rounded cursor-pointer"
//           >
//             {rooms} Room, {adults + children} Guest
//           </div>

//           {showGuest && (
//             <div className="absolute top-14 left-0 w-full bg-white shadow-xl rounded-xl p-4 z-50">

//               <h3 className="font-semibold mb-3">Room {rooms}</h3>

//               {/* ADULTS */}
//               <div className="flex justify-between mb-3">
//                 <div>
//                   <p>Adults</p>
//                   <p className="text-xs text-gray-500">Ages 5+</p>
//                 </div>

//                 <div className="flex gap-2">
//                   <button onClick={() => setAdults(Math.max(1, adults - 1))} className="px-3 border">-</button>
//                   <span>{adults}</span>
//                   <button onClick={() => setAdults(adults + 1)} className="px-3 border">+</button>
//                 </div>
//               </div>

//               {/* CHILDREN */}
//               <div className="flex justify-between mb-3">
//                 <div>
//                   <p>Children</p>
//                   <p className="text-xs text-gray-500">0-5</p>
//                 </div>

//                 <div className="flex gap-2">
//                   <button onClick={() => setChildren(Math.max(0, children - 1))} className="px-3 border">-</button>
//                   <span>{children}</span>
//                   <button onClick={() => setChildren(children + 1)} className="px-3 border">+</button>
//                 </div>
//               </div>

//               <button
//                 onClick={() => setRooms(rooms + 1)}
//                 className="w-full bg-blue-600 text-white py-2 rounded"
//               >
//                 Add Room
//               </button>

//             </div>
//           )}
//         </div>

//         {/* DATES */}
//         <input
//           type="date"
//           value={checkIn}
//           onChange={(e) => setCheckIn(e.target.value)}
//           className="w-full border p-2 rounded mb-3"
//         />

//         <input
//           type="date"
//           value={checkOut}
//           onChange={(e) => setCheckOut(e.target.value)}
//           className="w-full border p-2 rounded mb-3"
//         />

//         {/* PRICE */}
//         <div className="text-sm space-y-1 mt-4">

//           <p>Rooms: {rooms}</p>
//           <p>Guests: {adults + children}</p>
//           <p>Nights: {nights}</p>

//           <hr />

//           <p>Room Price: ₹{pricePerRoom} × {rooms} × {nights}</p>

//           {extraAdultCharge > 0 && (
//             <p>Extra Adults: ₹{extraAdultCharge} × {nights}</p>
//           )}

//           {children > 0 && (
//             <p>Children: ₹{childrenCharge} × {nights}</p>
//           )}

//           <hr />

//           <p>Base Price: ₹{basePrice}</p>
//           <p className="text-green-600">Discount: -₹{discount}</p>
//           <p className="text-red-500">GST: ₹{gst.toFixed(0)}</p>

//           <hr />

//           <p className="font-bold text-lg">
//             Total: ₹{total.toFixed(0)}
//           </p>

//         </div>

//         {/* BUTTON */}
//         <button
//           disabled={!roomType || nights === 0}
//           className="w-full mt-4 bg-blue-600 text-white py-2 rounded disabled:bg-gray-400"
//         >
//           Pay Now
//         </button>

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
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);

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
    const inDate = new Date(checkIn);
    const outDate = new Date(checkOut);
    const diff = (outDate - inDate) / (1000 * 60 * 60 * 24);
    return diff > 0 ? diff : 0;
  };

  const nights = calculateNights();
  const pricePerRoom = roomType ? roomPrices[roomType] : 0;

  const extraAdultCharge = adults > rooms ? (adults - rooms) * 500 : 0;
  const childrenCharge = children * 200;

  const basePrice =
    pricePerRoom * rooms * nights +
    extraAdultCharge * nights +
    childrenCharge * nights;

  const gst = basePrice * 0.12;
  const discount = basePrice > 0 ? 500 : 0;
  const total = basePrice + gst - discount;

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-purple-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.2),transparent_60%)]"></div>

      <div className="relative max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-3 gap-6">

        {/* LEFT */}
        <div className="md:col-span-2 space-y-6">

          <img
            src={hotel.image}
            alt={hotel.name}
            className="w-full h-80 object-cover rounded-2xl shadow-2xl hover:scale-[1.02] transition duration-500"
          />

          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
              {hotel.name}
            </h1>
            <p className="text-gray-400">{hotel.location}</p>
            <p className="text-yellow-400 font-semibold">⭐ {hotel.rating} Rating</p>
          </div>

          {/* AMENITIES */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Amenities</h2>
            <div className="flex flex-wrap gap-2">
              {hotel.amenities.map((a, i) => (
                <span
                  key={i}
                  className="bg-gradient-to-r from-white/10 to-purple-500/10 backdrop-blur-md px-3 py-1 rounded-full text-sm border border-white/20 hover:scale-105 transition"
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
            className="w-full h-60 rounded-2xl border-0 shadow-lg"
          />
        </div>

        {/* RIGHT */}
        <div className="bg-gradient-to-br from-white/10 to-purple-900/20 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl p-6 h-fit sticky top-24">

          <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
            Book Your Stay
          </h2>

          <select
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
            className="w-full bg-black/40 border border-white/20 p-3 rounded-lg mb-3 focus:ring-2 focus:ring-purple-500"
          >
            <option value="">Select Room Type</option>
            <option value="Deluxe">Deluxe</option>
            <option value="Suite">Suite (+₹3000)</option>
            <option value="Premium">Premium (+₹5000)</option>
          </select>

          {/* GUEST */}
          <div className="relative mb-3">
            <div
              onClick={() => setShowGuest(!showGuest)}
              className="w-full bg-black/40 border border-white/20 p-3 rounded-lg cursor-pointer hover:border-purple-400"
            >
              {rooms} Room, {adults + children} Guest
            </div>

            {showGuest && (
              <div className="absolute top-14 left-0 w-full bg-slate-900 border border-white/20 shadow-xl rounded-xl p-4 z-50">

                <h3 className="font-semibold mb-3">Room {rooms}</h3>

                <div className="flex justify-between mb-3">
                  <p>Adults</p>
                  <div className="flex gap-2">
                    <button onClick={() => setAdults(Math.max(1, adults - 1))} className="px-3 border">-</button>
                    <span>{adults}</span>
                    <button onClick={() => setAdults(adults + 1)} className="px-3 border">+</button>
                  </div>
                </div>

                <div className="flex justify-between mb-3">
                  <p>Children</p>
                  <div className="flex gap-2">
                    <button onClick={() => setChildren(Math.max(0, children - 1))} className="px-3 border">-</button>
                    <span>{children}</span>
                    <button onClick={() => setChildren(children + 1)} className="px-3 border">+</button>
                  </div>
                </div>

                <button
                  onClick={() => setRooms(rooms + 1)}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 py-2 rounded-lg hover:opacity-90"
                >
                  Add Room
                </button>

              </div>
            )}
          </div>

          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="w-full bg-black/40 border border-white/20 p-3 rounded-lg mb-3 focus:ring-2 focus:ring-purple-500"
          />

          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="w-full bg-black/40 border border-white/20 p-3 rounded-lg mb-3 focus:ring-2 focus:ring-purple-500"
          />

          {/* PRICE */}
          <div className="text-sm space-y-1 mt-4">
            <p>Rooms: {rooms}</p>
            <p>Guests: {adults + children}</p>
            <p>Nights: {nights}</p>

            <hr className="border-white/20" />

            <p>Room Price: ₹{pricePerRoom} × {rooms} × {nights}</p>

            {extraAdultCharge > 0 && (
              <p>Extra Adults: ₹{extraAdultCharge} × {nights}</p>
            )}

            {children > 0 && (
              <p>Children: ₹{childrenCharge} × {nights}</p>
            )}

            <hr className="border-white/20" />

            <p>Base Price: ₹{basePrice}</p>
            <p className="text-green-400">Discount: -₹{discount}</p>
            <p className="text-red-400">GST: ₹{gst.toFixed(0)}</p>

            <hr className="border-white/20" />

            <p className="font-bold text-xl bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
              Total: ₹{total.toFixed(0)}
            </p>
          </div>

          <button
            disabled={!roomType || nights === 0}
            className="w-full mt-4 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 py-3 rounded-lg disabled:bg-gray-600 hover:opacity-90"
          >
            Pay Now
          </button>

        </div>
      </div>
    </div>
  );
};

export default HotelDetails;
