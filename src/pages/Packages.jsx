import React, { useState } from 'react';
import { Star, Clock, Users } from 'lucide-react';


const Packages = () => {
  const [days, setDays] = useState(null);
  const [open, setOpen] = useState(false);
  const [travelers, setTravelers] = useState("Adult"); 
  const packages = [
    {
      id: 1,
      name: "Goa Beach Paradise",
      duration: "4 Nights / 5 Days",
      price: "₹15,999",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      rating: 4.5,
      reviews: 128,
      maxPeople: 4,
      highlights: ["Beach Resort", "Water Sports", "Sightseeing"]
    },
    {
      id: 2,
      name: "Manali Adventure",
      duration: "5 Nights / 6 Days",
      price: "₹18,999",
      image: "Manali_Adventure.jpg",
      rating: 4.7,
      reviews: 95,
      maxPeople: 6,
      highlights: ["Snow Activities", "River Rafting", "Camping"]
    },
    {
      id: 3,
      name: "Kerala Backwaters",
      duration: "5 Nights / 6 Days",
      price: "₹22,499",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      rating: 4.8,
      reviews: 156,
      maxPeople: 4,
      highlights: ["Houseboat Stay", "Ayurveda Spa", "Cultural Shows"]
    },
    {
      id: 4,
      name: "Ladakh Bike Trip",
      duration: "7 Nights / 8 Days",
      price: "₹29,999",
      image: "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      rating: 4.9,
      reviews: 87,
      maxPeople: 8,
      highlights: ["Royal Enfield", "High Mountain Passes", "Camping"]
    },
    {
      id: 5,
      name: "Jaipur Royal Heritage",
      duration: "3 Nights / 4 Days",
      price: "₹12,999",
      image: "Jaipur_Royal_Heritage.jpg",
      rating: 4.4,
      reviews: 112,
      maxPeople: 6,
      highlights: ["Palace Visit", "Elephant Ride", "Local Market"]
    },
    {
      id: 6,
      name: "Andaman Island Escape",
      duration: "6 Nights / 7 Days",
      price: "₹32,999",
      image: "Andaman_Island_Escape.jpg",
      rating: 4.6,
      reviews: 78,
      maxPeople: 4,
      highlights: ["Scuba Diving", "Sea Walking", "Island Hopping"]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-bold mb-8">Travel Packages</h1>
      
      {/* Filters */}
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">

{/* Dropdown Box */}
<div
onClick={() => setOpen(!open)}
className="border rounded-lg px-4 py-2 bg-white cursor-pointer transition-all duration-300"
>

{/* Top Row */}
<div className="flex justify-between items-center">
  <span className="text-gray-600">Days</span>
  <span className="font-semibold">
    {days ? days : ""}
  </span>
</div>

{/* Expand Section */}
{open && (
  <div className="mt-3 pt-3 border-t flex justify-between items-center">

    <span className="text-gray-600">Select Days</span>

    <div className="flex items-center gap-3">
      <button
        onClick={(e) => {
          e.stopPropagation();
          setDays(days > 1 ? days - 1 : 1);
        }}
        className="bg-gray-200 px-3 py-1 rounded"
      >
        -
      </button>

      <span className="font-semibold">
        {days ? days : 1}
      </span>

      <button
        onClick={(e) => {
          e.stopPropagation();
          setDays((days || 0) + 1);
        }}
        className="bg-gray-200 px-3 py-1 rounded"
      >
        +
      </button>
    </div>

  </div>
)}

</div>
</div>
              {/* Duration Counter */}
              {/* <div className="border rounded-lg px-4 py-2 flex items-center justify-between">
                <span className="text-gray-600">Days</span> */}

                {/* <div className="flex items-center gap-2">
                  <button
                    onClick={() => setDays(days > 1 ? days - 1 : 1)}
                    className="bg-gray-200 px-2 rounded hover:bg-gray-300"
                  >
                    -
                  </button>

                  <span className="font-semibold">{days}</span>

                  <button
                    onClick={() => setDays(days + 1)}
                    className="bg-gray-200 px-2 rounded hover:bg-gray-300"
                  >
                    +
                  </button>
                </div> */}
              {/* </div> */}

              {/* Budget */}
              <select className="border rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500">
                <option>Budget</option>
                <option>Under ₹15,000</option>
                <option>₹15,000 - ₹25,000</option>
                <option>Above ₹25,000</option>
              </select>

              {/* Travelers */}
              <select
                value={travelers}
                onChange={(e) => setTravelers(e.target.value)}
                className="border rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
              >
                <option value="Adult">Adult</option>
                <option value="Couple">Couple</option>
                <option value="Family">Family</option>
                <option value="Group">Group</option>
              </select>

              {/* Button */}
              <button className="bg-blue-600 text-white rounded-lg px-6 py-2 hover:bg-blue-700 transition">
                Apply Filters
              </button>

            </div>
         </div>
      {/* <div className="bg-white rounded-lg shadow p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <select className="border rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500">
            <option>Duration</option>
            <option>1-3 Days</option>
            <option>4-6 Days</option>
            <option>7+ Days</option>
          </select>
          <select className="border rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500">
            <option>Budget</option>
            <option>Under ₹15,000</option>
            <option>₹15,000 - ₹25,000</option>
            <option>Above ₹25,000</option>
          </select>
          <select className="border rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500">
            <option>Travelers</option>
            <option>Solo</option>
            <option>Couple</option>
            <option>Family</option>
            <option>Group</option>
          </select>
          <button className="bg-blue-600 text-white rounded-lg px-6 py-2 hover:bg-blue-700 transition">
            Apply Filters
          </button>
        </div>
      </div> */}

      {/* Packages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map((pkg) => (
          <div key={pkg.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="relative">
              <img src={pkg.image} alt={pkg.name} className="w-full h-48 object-cover" />
              <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-blue-600">
                {pkg.price}
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold">{pkg.name}</h3>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-gray-600">{pkg.rating}</span>
                </div>
              </div>
              
              <div className="flex items-center text-gray-500 text-sm mb-3">
                <Clock className="h-4 w-4 mr-1" />
                <span className="mr-3">{pkg.duration}</span>
                <Users className="h-4 w-4 mr-1" />
                <span>Max {pkg.maxPeople} People</span>
              </div>
              
              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-2">Highlights:</p>
                <div className="flex flex-wrap gap-2">
                  {pkg.highlights.map((highlight, index) => (
                    <span key={index} className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs">
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-500">{pkg.reviews} reviews</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;