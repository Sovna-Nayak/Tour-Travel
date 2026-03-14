// pages/Hotels.jsx
import React, { useState } from 'react';
import { Star, MapPin, Wifi, Coffee, ParkingCircle, Wind, Users, Search } from 'lucide-react';

const Hotels = () => {
  const [selectedRating, setSelectedRating] = useState(null);
  
  const hotels = [
    {
      id: 1,
      name: "Taj Mahal Palace",
      location: "Mumbai, Maharashtra",
      price: "₹15,999",
      rating: 5,
      reviews: 1245,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      amenities: ["Free WiFi", "Pool", "Spa", "Restaurant", "Parking"],
      rooms: ["Deluxe", "Suite", "Presidential"]
    },
    {
      id: 2,
      name: "The Leela Palace",
      location: "New Delhi",
      price: "₹12,499",
      rating: 5,
      reviews: 987,
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      amenities: ["Free WiFi", "Pool", "Gym", "Bar", "Business Center"],
      rooms: ["Executive", "Luxury", "Royal"]
    },
    {
      id: 3,
      name: "ITC Grand Bharat",
      location: "Gurugram, Haryana",
      price: "₹18,999",
      rating: 5,
      reviews: 756,
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      amenities: ["Free WiFi", "Golf Course", "Spa", "Multiple Restaurants", "Pool"],
      rooms: ["Luxury", "Diplomat", "Presidential"]
    },
    {
      id: 4,
      name: "The Oberoi Udaivilas",
      location: "Udaipur, Rajasthan",
      price: "₹22,999",
      rating: 5,
      reviews: 634,
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      amenities: ["Lake View", "Spa", "Pool", "Butler Service", "Fine Dining"],
      rooms: ["Premier", "Luxury", "Kohinoor"]
    },
    {
      id: 5,
      name: "The Westin Goa",
      location: "Goa",
      price: "₹8,999",
      rating: 4.5,
      reviews: 1567,
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      amenities: ["Beach Access", "Pool", "Spa", "Kids Club", "Restaurant"],
      rooms: ["Garden View", "Ocean View", "Suite"]
    },
    {
      id: 6,
      name: "JW Marriott Chandigarh",
      location: "Chandigarh",
      price: "₹9,499",
      rating: 4.5,
      reviews: 892,
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      amenities: ["Free WiFi", "Pool", "Gym", "Spa", "Multiple Restaurants"],
      rooms: ["Deluxe", "Executive", "Suite"]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-bold mb-8">Find Your Perfect Stay</h1>
      
      {/* Search Section */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <input
            type="text"
            placeholder="Destination"
            className="border rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 col-span-2"
          />
          <input
            type="date"
            className="border rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
          />
          <input
            type="date"
            className="border rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
          />
          <select className="border rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500">
            <option>2 Adults, 1 Room</option>
            <option>2 Adults, 2 Rooms</option>
            <option>4 Adults, 2 Rooms</option>
            <option>Family Suite</option>
          </select>
          <button className="bg-blue-600 text-white rounded-lg px-6 py-3 hover:bg-blue-700 transition md:col-span-1">
            Search
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-6 mb-8">
        <div className="flex-1 min-w-[200px]">
          <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
          <select className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500">
            <option>All Prices</option>
            <option>Under ₹5,000</option>
            <option>₹5,000 - ₹10,000</option>
            <option>₹10,000 - ₹20,000</option>
            <option>Above ₹20,000</option>
          </select>
        </div>
        
        <div className="flex-1 min-w-[200px]">
          <label className="block text-sm font-medium text-gray-700 mb-2">Star Rating</label>
          <div className="flex gap-2">
            {[5,4,3,2,1].map((rating) => (
              <button
                key={rating}
                onClick={() => setSelectedRating(rating)}
                className={`px-4 py-2 rounded-lg border transition ${
                  selectedRating === rating 
                    ? 'bg-blue-600 text-white border-blue-600' 
                    : 'bg-white text-gray-700 border-gray-300 hover:border-blue-500'
                }`}
              >
                {rating}★
              </button>
            ))}
          </div>
        </div>
        
        <div className="flex-1 min-w-[200px]">
          <label className="block text-sm font-medium text-gray-700 mb-2">Amenities</label>
          <select className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500">
            <option>Any Amenity</option>
            <option>Free WiFi</option>
            <option>Pool</option>
            <option>Spa</option>
            <option>Restaurant</option>
            <option>Parking</option>
          </select>
        </div>
      </div>

      {/* Hotels Grid */}
      <div className="space-y-6">
        {hotels.map((hotel) => (
          <div key={hotel.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img src={hotel.image} alt={hotel.name} className="h-48 w-full object-cover md:h-full" />
              </div>
              
              <div className="p-6 md:w-2/3">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900">{hotel.name}</h3>
                    <div className="flex items-center mt-1">
                      <MapPin className="h-4 w-4 text-gray-400 mr-1" />
                      <span className="text-gray-600">{hotel.location}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">{hotel.price}</div>
                    <p className="text-sm text-gray-500">per night</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  <div className="flex items-center bg-green-600 text-white px-2 py-1 rounded mr-3">
                    <span className="font-semibold mr-1">{hotel.rating}</span>
                    <Star className="h-4 w-4 fill-current" />
                  </div>
                  <span className="text-gray-600">{hotel.reviews} reviews</span>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">Amenities:</p>
                  <div className="flex flex-wrap gap-2">
                    {hotel.amenities.map((amenity, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm flex items-center">
                        {amenity === "Free WiFi" && <Wifi className="h-3 w-3 mr-1" />}
                        {amenity === "Pool" && <Wind className="h-3 w-3 mr-1" />}
                        {amenity === "Restaurant" && <Coffee className="h-3 w-3 mr-1" />}
                        {amenity === "Parking" && <ParkingCircle className="h-3 w-3 mr-1" />}
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">Room Types:</p>
                  <div className="flex flex-wrap gap-2">
                    {hotel.rooms.map((room, index) => (
                      <span key={index} className="border border-gray-300 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {room}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="h-4 w-4 mr-1" />
                    <span>Up to 4 guests</span>
                  </div>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                    Check Availability
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hotels;