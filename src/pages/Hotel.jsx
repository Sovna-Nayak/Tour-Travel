

// import React, { useState } from "react";
// import { Star, MapPin } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const Hotels = () => {
//   const navigate = useNavigate();

//   // ✅ FILTER STATES
//   const [priceRange, setPriceRange] = useState(20000);
//   const [selectedRoomType, setSelectedRoomType] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [selectedAccommodation, setSelectedAccommodation] = useState("");
//   const [selectedFacility, setSelectedFacility] = useState("");
//   const [selectedDistrict, setSelectedDistrict] = useState("");

//   // ✅ HOTELS DATA (ADD district)
//   const hotels = [
//     { id: 1, name: "Taj Mahal Palace", location: "Mumbai", district: "Mumbai", price: 15999, rating: 5, reviews: 1245, amenities: ["Free WiFi","Pool","Spa","Restaurant","Parking"], image: "https://images.unsplash.com/photo-1566073771259-6a8506099945" },
//     { id: 2, name: "Budget Stay", location: "Pune", district: "Pune", price: 3500, rating: 1, reviews: 150, amenities: ["Free WiFi","Parking"], image: "/Budget_Stay.jpg" },
//     { id: 3, name: "Cozy Inn", location: "Delhi", district: "Delhi", price: 7000, rating: 2, reviews: 245, amenities: ["Free WiFi","Restaurant"], image: "https://images.unsplash.com/photo-1560343090-f0409e92791a" },
//     { id: 4, name: "ITC Grand Bharat", location: "Gurugram", district: "Gurugram", price: 18999, rating: 5, reviews: 756, amenities: ["Free WiFi","Golf Course","Spa","Multiple Restaurants","Pool"], image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4" },
//     { id: 5, name: "The Oberoi Udaivilas", location: "Udaipur", district: "Udaipur", price: 22999, rating: 5, reviews: 634, amenities: ["Lake View","Spa","Pool","Butler Service","Fine Dining"], image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b" },
//     { id: 6, name: "The Westin Goa", location: "Goa", district: "Goa", price: 8999, rating: 4, reviews: 1567, amenities: ["Beach Access","Pool","Spa","Kids Club","Restaurant"], image: "https://images.unsplash.com/photo-1582719508461-905c673771fd" },
//     { id: 7, name: "JW Marriott Chandigarh", location: "Chandigarh", district: "Chandigarh", price: 9499, rating: 4, reviews: 892, amenities: ["Free WiFi","Pool","Gym","Spa","Multiple Restaurants"], image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa" },
//     { id: 8, name: "Simple Stay", location: "Jaipur", district: "Jaipur", price: 4500, rating: 2, reviews: 180, amenities: ["Free WiFi"], image: "/Simple_Stay.jpg" },
//     { id: 9, name: "Elite Resort", location: "Goa", district: "Goa", price: 21000, rating: 5, reviews: 300, amenities: ["Pool","Spa","Restaurant","Beach Access"], image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b" },
//     { id: 10, name: "City Lodge", location: "Bangalore", district: "Bangalore", price: 6000, rating: 3, reviews: 200, amenities: ["Free WiFi","Restaurant"], image: "/City_Lodge.jpg" },

//     // 🟢 NEW Odisha Hotels
//   { id: 11, name: "Mayfair Lagoon", location: "Bhubaneswar", district: "Bhubaneswar", price: 8999, rating: 5, reviews: 950, amenities: ["Free WiFi","Pool","Spa","Restaurant"], image: "https://images.unsplash.com/photo-1566073771259-6a8506099945" },
//   { id: 12, name: "Swosti Premium", location: "Bhubaneswar", district: "Bhubaneswar", price: 6500, rating: 4, reviews: 500, amenities: ["Free WiFi","Restaurant","Parking"], image: "/Swosti_Premium_images.jpg" },
//   { id: 13, name: "Cuttack Residency", location: "Cuttack", district: "Cuttack", price: 4000, rating: 3, reviews: 220, amenities: ["Free WiFi","Parking"], image: "/Cuttack_Residency_images.jpg" },
//   { id: 14, name: "Sambalpur Inn", location: "Sambalpur", district: "Sambalpur", price: 3500, rating: 3, reviews: 150, amenities: ["Free WiFi"], image: "/Sambalpur_Inn_images.jpg" },
//   { id: 15, name: "Rourkela Grand", location: "Rourkela", district: "Rourkela", price: 5000, rating: 4, reviews: 300, amenities: ["Free WiFi","Restaurant","Parking"], image: "/Rourkela_Grand_images.jpg" },
//   ];



//   // ✅ FILTER LOGIC (MERGED)
//   const filteredHotels = hotels.filter((hotel) => {
//     return (
//       (selectedDistrict ? hotel.district === selectedDistrict : true) &&
//       hotel.price <= priceRange &&
//       (selectedRoomType ? hotel.type === selectedRoomType : true) &&
//       (selectedCategory ? hotel.category === selectedCategory : true) &&
//       (selectedAccommodation
//         ? hotel.accommodation === selectedAccommodation
//         : true) &&
//       (selectedFacility
//         ? hotel.amenities.includes(selectedFacility)
//         : true)
//     );
//   });

//   return (
//     <div className="max-w-7xl mx-auto px-3 sm:px-4 py-6">

//       <h1 className="text-2xl sm:text-3xl font-bold mb-4">
//         Find Your Stay
//       </h1>

//       {/* ✅ DISTRICT FILTER (SCROLLABLE MOBILE) */}
//       <div className="flex gap-2 overflow-x-auto pb-2 mb-4 scrollbar-hide scroll-container">
//   {[
//     "Mumbai", "Pune", "Delhi", "Goa", "Udaipur",
//     "Gurugram", "Chandigarh", "Jaipur", "Bangalore",
//     "Bhubaneswar", "Cuttack", "Sambalpur", "Rourkela"
//   ].map((city) => (
//     <button
//       key={city}
//       onClick={() => setSelectedDistrict(city)}
//       className={`px-3 py-1 rounded-full whitespace-nowrap border transition-all duration-200 ${
//         selectedDistrict === city
//           ? "bg-blue-600 text-white scale-105 shadow-md"
//           : "bg-white text-gray-700 hover:bg-blue-100 hover:text-blue-600 hover:scale-105"
//       }`}
//     >
//       {city}
//     </button>
//   ))}

//   <button
//     onClick={() => {
//       setSelectedDistrict("");
//       document.querySelector(".scroll-container")?.scrollTo({
//         left: 0,
//         behavior: "smooth",
//       });
//     }}
//     className="text-red-500 px-3 py-1 border rounded-full whitespace-nowrap hover:bg-red-100 transition"
//   >
//     Clear
//   </button>
// </div>

//       <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

//         {/* ✅ FILTER PANEL */}
//         <div className="bg-white p-4 rounded-lg shadow space-y-6">

//           {/* PRICE */}
//           <div>
//             <h2 className="font-semibold mb-2">Price Range</h2>
//             <input
//               type="range"
//               min="500"
//               max="20000"
//               value={priceRange}
//               onChange={(e) => setPriceRange(e.target.value)}
//               className="w-full"
//             />
//             <div className="flex justify-between text-sm">
//               <span>₹500</span>
//               <span>₹{priceRange}</span>
//             </div>
//           </div>

//           {/* ROOM TYPE */}
//           <div>
//             <h2 className="font-semibold mb-2">Rooms & Suites</h2>
//             {["Couple Friendly", "International Guests", "Business Travellers"].map((item) => (
//               <label key={item} className="flex gap-2 mb-2 text-sm">
//                 <input
//                   type="radio"
//                   name="roomType"
//                   onChange={() => setSelectedRoomType(item)}
//                 />
//                 {item}
//               </label>
//             ))}
//           </div>

//           {/* CATEGORY */}
//           <div>
//             <h2 className="font-semibold mb-2">Category</h2>
//             {["Resort", "Executive", "Home", "Hotel Rooms"].map((item) => (
//               <label key={item} className="flex gap-2 mb-2 text-sm">
//                 <input
//                   type="radio"
//                   name="category"
//                   onChange={() => setSelectedCategory(item)}
//                 />
//                 {item}
//               </label>
//             ))}
//           </div>

//           {/* ACCOMMODATION */}
//           <div>
//             <h2 className="font-semibold mb-2">Accommodation</h2>
//             {["Hotel", "Guest House"].map((item) => (
//               <label key={item} className="flex gap-2 mb-2 text-sm">
//                 <input
//                   type="radio"
//                   name="accommodation"
//                   onChange={() => setSelectedAccommodation(item)}
//                 />
//                 {item}
//               </label>
//             ))}
//           </div>

//           {/* FACILITY */}
//           <div>
//             <h2 className="font-semibold mb-2">Facilities</h2>
//             {["Free WiFi", "Pool", "Spa", "Restaurant", "Parking"].map((item) => (
//               <label key={item} className="flex gap-2 mb-2 text-sm">
//                 <input
//                   type="radio"
//                   name="facility"
//                   onChange={() => setSelectedFacility(item)}
//                 />
//                 {item}
//               </label>
//             ))}
//           </div>

//         </div>

//         {/* ✅ HOTEL LIST */}
//         <div className="md:col-span-3 space-y-4">

//           {filteredHotels.length === 0 && (
//             <p className="text-gray-500 text-center">No hotels found</p>
//           )}

//           {filteredHotels.map((hotel) => (
//             <div
//               key={hotel.id}
//               className="bg-white rounded-lg shadow flex flex-col sm:flex-row overflow-hidden"
//             >
//               <img
//                 src={hotel.image}
//                 alt={hotel.name}
//                 className="h-40 w-full sm:w-1/3 object-cover"
//               />

//               <div className="p-4 flex-1">
//                 <h3 className="font-semibold text-lg">{hotel.name}</h3>

//                 <div className="flex items-center text-gray-600 text-sm">
//                   <MapPin className="h-4 w-4 mr-1" />
//                   {hotel.location}
//                 </div>

//                 <div className="text-blue-600 font-bold mt-1">
//                   ₹{hotel.price}
//                 </div>

//                 <div className="flex items-center gap-2 mt-2">
//                   <div className="bg-green-600 text-white px-2 py-1 rounded flex items-center">
//                     {hotel.rating} <Star className="h-4 w-4 ml-1" />
//                   </div>
//                 </div>

//                 <div className="flex flex-wrap gap-1 mt-2">
//                   {hotel.amenities.map((a, i) => (
//                     <span key={i} className="bg-gray-100 px-2 py-1 text-xs rounded">
//                       {a}
//                     </span>
//                   ))}
//                 </div>

//                 <div className="flex justify-between mt-4">
//                   <button
//                     onClick={() => navigate(`/hotel/${hotel.id}`)}
//                     className="border px-3 py-1 rounded"
//                   >
//                     View
//                   </button>

//                   <button
//                     onClick={() => navigate(`/booking/${hotel.id}`)}
//                     className="bg-blue-600 text-white px-3 py-1 rounded"
//                   >
//                     Book
//                   </button>
//                 </div>

//               </div>
//             </div>
//           ))}

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hotels;





import React, { useState } from "react";
import { Star, MapPin, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hotels = () => {
  const navigate = useNavigate();

  // ✅ SEARCH STATE (FIXED)
  const [searchTerm, setSearchTerm] = useState("");

  // ✅ FILTER STATES
  const [priceRange, setPriceRange] = useState(20000);
  const [selectedRoomType, setSelectedRoomType] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedAccommodation, setSelectedAccommodation] = useState("");
  const [selectedFacility, setSelectedFacility] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");

  // ✅ HOTELS DATA
  const hotels = [
    { id: 1, name: "Taj Mahal Palace", location: "Mumbai", district: "Mumbai", price: 15999, rating: 5, reviews: 1245, amenities: ["Free WiFi","Pool","Spa","Restaurant","Parking"], image: "https://images.unsplash.com/photo-1566073771259-6a8506099945" },
    { id: 2, name: "Budget Stay", location: "Pune", district: "Pune", price: 3500, rating: 1, reviews: 150, amenities: ["Free WiFi","Parking"], image: "/Budget_Stay.jpg" },
    { id: 3, name: "Cozy Inn", location: "Delhi", district: "Delhi", price: 7000, rating: 2, reviews: 245, amenities: ["Free WiFi","Restaurant"], image: "https://images.unsplash.com/photo-1560343090-f0409e92791a" },
    { id: 4, name: "ITC Grand Bharat", location: "Gurugram", district: "Gurugram", price: 18999, rating: 5, reviews: 756, amenities: ["Free WiFi","Golf Course","Spa","Multiple Restaurants","Pool"], image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4" },
    { id: 5, name: "The Oberoi Udaivilas", location: "Udaipur", district: "Udaipur", price: 22999, rating: 5, reviews: 634, amenities: ["Lake View","Spa","Pool","Butler Service","Fine Dining"], image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b" },
    { id: 6, name: "The Westin Goa", location: "Goa", district: "Goa", price: 8999, rating: 4, reviews: 1567, amenities: ["Beach Access","Pool","Spa","Kids Club","Restaurant"], image: "https://images.unsplash.com/photo-1582719508461-905c673771fd" },
    { id: 7, name: "JW Marriott Chandigarh", location: "Chandigarh", district: "Chandigarh", price: 9499, rating: 4, reviews: 892, amenities: ["Free WiFi","Pool","Gym","Spa","Multiple Restaurants"], image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa" },
    { id: 8, name: "Simple Stay", location: "Jaipur", district: "Jaipur", price: 4500, rating: 2, reviews: 180, amenities: ["Free WiFi"], image: "/Simple_Stay.jpg" },
    { id: 9, name: "Elite Resort", location: "Goa", district: "Goa", price: 21000, rating: 5, reviews: 300, amenities: ["Pool","Spa","Restaurant","Beach Access"], image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b" },
    { id: 10, name: "City Lodge", location: "Bangalore", district: "Bangalore", price: 6000, rating: 3, reviews: 200, amenities: ["Free WiFi","Restaurant"], image: "/City_Lodge.jpg" },

    { id: 11, name: "Mayfair Lagoon", location: "Bhubaneswar", district: "Bhubaneswar", price: 8999, rating: 5, reviews: 950, amenities: ["Free WiFi","Pool","Spa","Restaurant"], image: "https://images.unsplash.com/photo-1566073771259-6a8506099945" },
    { id: 12, name: "Swosti Premium", location: "Bhubaneswar", district: "Bhubaneswar", price: 6500, rating: 4, reviews: 500, amenities: ["Free WiFi","Restaurant","Parking"], image: "/Swosti_Premium_images.jpg" },
    { id: 13, name: "Cuttack Residency", location: "Cuttack", district: "Cuttack", price: 4000, rating: 3, reviews: 220, amenities: ["Free WiFi","Parking"], image: "/Cuttack_Residency_images.jpg" },
    { id: 14, name: "Sambalpur Inn", location: "Sambalpur", district: "Sambalpur", price: 3500, rating: 3, reviews: 150, amenities: ["Free WiFi"], image: "/Sambalpur_Inn_images.jpg" },
    { id: 15, name: "Rourkela Grand", location: "Rourkela", district: "Rourkela", price: 5000, rating: 4, reviews: 300, amenities: ["Free WiFi","Restaurant","Parking"], image: "/Rourkela_Grand_images.jpg" },
  ];

  // ✅ FILTER LOGIC
  const filteredHotels = hotels.filter((hotel) => {
    return (
      (selectedDistrict ? hotel.district === selectedDistrict : true) &&
      hotel.price <= priceRange &&

      // ✅ SEARCH
      (searchTerm
        ? hotel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          hotel.location.toLowerCase().includes(searchTerm.toLowerCase())
        : true)
    );
  });

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-4 py-6">

      {/* 🔍 SEARCH BAR */}
      <div className="flex items-center gap-2 mb-4">
        <div className="flex items-center flex-1 border rounded-lg px-3 shadow-sm bg-white">
          <Search className="text-gray-500" size={18} />
          <input
            type="text"
            placeholder="Search hotel or location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 px-2 py-2 outline-none"
          />
        </div>

        {/* CLEAR BUTTON */}
        <button
          onClick={() => setSearchTerm("")}
          className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300"
        >
          Clear
        </button>
      </div>

      <h1 className="text-2xl sm:text-3xl font-bold mb-4">
        Find Your Stay
      </h1>

      {/* DISTRICT FILTER */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-4">
        {["Mumbai","Pune","Delhi","Goa","Udaipur","Gurugram","Chandigarh","Jaipur","Bangalore","Bhubaneswar","Cuttack","Sambalpur","Rourkela"]
          .map((city) => (
            <button
              key={city}
              onClick={() => setSelectedDistrict(city)}
              className={`px-3 py-1 rounded-full border ${
                selectedDistrict === city
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700"
              }`}
            >
              {city}
            </button>
        ))}

        <button
          onClick={() => setSelectedDistrict("")}
          className="text-red-500 px-3 py-1 border rounded-full"
        >
          Clear
        </button>
      </div>

      {/* HOTEL LIST */}
      <div className="space-y-4">
        {filteredHotels.length === 0 && (
          <p className="text-center text-gray-500">No hotels found</p>
        )}

        {filteredHotels.map((hotel) => (
          <div key={hotel.id} className="bg-white rounded-lg shadow flex overflow-hidden">
            
            <img
              src={hotel.image}
              alt={hotel.name}
              className="h-40 w-1/3 object-cover"
            />

            <div className="p-4 flex-1">
              <h3 className="font-semibold text-lg">{hotel.name}</h3>

              <div className="flex items-center text-gray-600 text-sm">
                <MapPin className="h-4 w-4 mr-1" />
                {hotel.location}
              </div>

              <div className="text-blue-600 font-bold mt-1">
                ₹{hotel.price}
              </div>

              <div className="flex items-center mt-2">
                <div className="bg-green-600 text-white px-2 py-1 rounded flex items-center">
                  {hotel.rating} <Star className="h-4 w-4 ml-1" />
                </div>
              </div>

              <div className="flex justify-between mt-4">
                <button
                  onClick={() => navigate(`/hotel/${hotel.id}`)}
                  className="border px-3 py-1 rounded"
                >
                  View
                </button>

                <button
                  onClick={() => navigate(`/booking/${hotel.id}`)}
                  className="bg-blue-600 text-white px-3 py-1 rounded"
                >
                  Book
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Hotels;