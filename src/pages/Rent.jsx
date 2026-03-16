// import { useState } from "react";

// export default function Rent() {

//   const bikes = [
//     {
//       name: "Royal Enfield",
//       price: 500,
//       image: "/royal.jpg"
//     },
//     {
//       name: "KTM Duke",
//       price: 700,
//       image: "/ktm.jpg"
//     },
//     {
//       name: "Yamaha R15",
//       price: 600,
//       image: "/r15.jpg"
//     },
//     {
//       name: "Honda Activa",
//       price: 300,
//       image: "/activa.jpg"
//     }
//   ];

//   const [days, setDays] = useState(1);
//   const [selectedBike, setSelectedBike] = useState(null);

//   return (
//     <div className="min-h-screen bg-gray-100 p-10">

//       <h1 className="text-4xl font-bold text-center mb-10">
//         Bike Rental
//       </h1>

//       <div className="grid md:grid-cols-3 gap-8">

//         {bikes.map((bike, index) => {

//           const total = days * bike.price;

//           return (

//             <div
//               key={index}
//               className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition"
//             >

//               {/* Image */}
//               <img
//                 src={bike.image}
//                 alt={bike.name}
//                 className="rounded-lg mb-4 h-48 w-full object-cover"
//               />

//               {/* Bike Name */}
//               <h2 className="text-xl font-bold">
//                 {bike.name}
//               </h2>

//               {/* Price */}
//               <p className="text-gray-600">
//                 Price: ₹{bike.price} / Day
//               </p>

//               {/* Days Input */}
//               <input
//                 type="number"
//                 min="1"
//                 value={days}
//                 onChange={(e) => setDays(e.target.value)}
//                 className="border p-2 mt-3 w-full rounded"
//               />

//               {/* Total */}
//               <p className="mt-3 font-semibold">
//                 Total Price: ₹{total}
//               </p>

//               {/* Button */}
//               <button
//                 onClick={() => setSelectedBike(bike)}
//                 className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-2 mt-4 rounded w-full hover:scale-105 transition"
//               >
//                 Book Now
//               </button>

//             </div>

//           );
//         })}

//       </div>

//       {/* Booking Form Popup */}

//       {selectedBike && (

//         <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">

//           <div className="bg-white p-8 rounded-lg w-96">

//             <h2 className="text-2xl font-bold mb-4">
//               Book {selectedBike.name}
//             </h2>

//             <input
//               type="text"
//               placeholder="Your Name"
//               className="border p-2 w-full mb-3 rounded"
//             />

//             <input
//               type="text"
//               placeholder="Phone Number"
//               className="border p-2 w-full mb-3 rounded"
//             />

//             <button className="bg-green-500 text-white px-4 py-2 rounded w-full">
//               Confirm Booking
//             </button>

//             <button
//               onClick={() => setSelectedBike(null)}
//               className="mt-3 text-red-500 w-full"
//             >
//               Cancel
//             </button>

//           </div>

//         </div>

//       )}

//     </div>
//   );
// }






import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Rent() {

  const cardColors = [
    "bg-gradient-to-r from-blue-50 to-cyan-50",
    "bg-gradient-to-r from-green-50 to-emerald-50",
    "bg-gradient-to-r from-yellow-50 to-orange-50",
    "bg-gradient-to-r from-pink-50 to-rose-50"
  ];

  const bikes = [
    {
      name: "Royal Enfield Classic 350",
      price: 500,
      engine: "350cc",
      mileage: "35 km/l",
      fuel: "Petrol",
      image: "/royal.jpg"
    },
    {
      name: "KTM Duke 200",
      price: 700,
      engine: "200cc",
      mileage: "30 km/l",
      fuel: "Petrol",
      image: "/ktm.jpg"
    },
    {
      name: "Yamaha R15",
      price: 600,
      engine: "155cc",
      mileage: "40 km/l",
      fuel: "Petrol",
      image: "/r15.jpg"
    },
    {
      name: "Honda Activa",
      price: 300,
      engine: "110cc",
      mileage: "45 km/l",
      fuel: "Petrol",
      image: "/activa.jpg"
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const [days, setDays] = useState(1);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">

      <h1 className="text-4xl font-bold text-center mb-10">
        Bike Rental Services
      </h1>

      <div className="max-w-3xl mx-auto space-y-6">

        {bikes.map((bike, index) => {

          const total = days * bike.price;

          return (

            <div
              key={index}
              className={`${cardColors[index]} rounded-xl shadow-md overflow-hidden`}
            >

              {/* Header */}
              <div
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="flex justify-between items-center p-5 cursor-pointer hover:bg-white/40 transition"
              >

                <div>
                  <h2 className="text-lg font-semibold">{bike.name}</h2>
                  <p className="text-gray-600">₹{bike.price} / Day</p>
                </div>

                <ChevronDown
                  className={`transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />

              </div>

              {/* Dropdown Content */}
              {openIndex === index && (

                <div className="border-t p-5 space-y-4">

                  {/* Bike Image */}
                  <img
                    src={bike.image}
                    alt={bike.name}
                    className="w-full h-52 object-cover rounded-lg"
                  />

                  {/* Bike Details */}
                  <p>
                    <span className="font-semibold">Engine:</span> {bike.engine}
                  </p>

                  <p>
                    <span className="font-semibold">Mileage:</span> {bike.mileage}
                  </p>

                  <p>
                    <span className="font-semibold">Fuel:</span> {bike.fuel}
                  </p>

                  {/* Days Input */}
                  <input
                    type="number"
                    min="1"
                    value={days}
                    onChange={(e) => setDays(Number(e.target.value))}
                    className="border p-2 w-full rounded"
                  />

                  {/* Total Price */}
                  <p className="font-semibold text-lg">
                    Total Price: ₹{total}
                  </p>

                  {/* Button */}
                  <button className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700 transition">
                    Book Now
                  </button>

                </div>

              )}

            </div>

          );

        })}

      </div>

    </div>
  );
}