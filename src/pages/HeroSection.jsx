import React, { useState, useEffect } from "react";
import { Search, Calendar, Star, Users, MapPin, Award } from 'lucide-react';
import BookingCalendar from '../components/BookingCalendar';

const HeroSection = () => {

  // ✅ Correct state
  const [travelers, setTravelers] = useState(1);
  const [open, setOpen] = useState(false);

  const increase = () => setTravelers(prev => prev + 1);
  const decrease = () => setTravelers(prev => (prev > 1 ? prev - 1 : 1));

  // ✅ Close dropdown on outside click
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("click", close);
    return () => window.removeEventListener("click", close);
  }, []);

  const featuredDestinations = [
    { id: 1, name: 'Goa', price: '₹15,999', image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=500&q=60', rating: 4.5 },
    { id: 2, name: 'Manali', price: '₹12,499', image: '/manali.jpg', rating: 4.3 },
    { id: 3, name: 'Kerala', price: '₹18,999', image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=500&q=60', rating: 4.7 },
    { id: 4, name: 'Ladakh', price: '₹22,999', image: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&w=500&q=60', rating: 4.8 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10
    bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-100 
    shadow-xl rounded-2xl">

      {/* Hero Section */}
      <div className="relative rounded-2xl overflow-hidden mb-14 shadow-lg">

        <img
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=2000&q=80"
          alt="Travel Hero"
          className="w-full h-[520px] object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-4">

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Explore the World with FirstTrack Tour & Travel
            </h1>

            <p className="text-lg md:text-xl mb-8 text-gray-200">
              Discover amazing destinations at the best prices
            </p>

            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl font-semibold flex items-center mx-auto transition shadow-lg">
              <Search className="h-5 w-5 mr-2" />
              Start Your Journey
            </button>

          </div>
        </div>
      </div>

        {/* Search Box (Updated Design) */}
        <div className="bg-white shadow-lg rounded-2xl p-4 mb-14">

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">

            {/* From */}
            <input
              type="text"
              placeholder="From"
              className="border border-gray-300 rounded-xl px-4 py-3 
              focus:ring-2 focus:ring-blue-500 outline-none 
              hover:border-black transition"
            />

            {/* To */}
            <input
              type="text"
              placeholder="To"
              className="border border-gray-300 rounded-xl px-4 py-3 
              focus:ring-2 focus:ring-blue-500 outline-none 
              hover:border-black transition"
            />

            {/* Date */}
            <div className="relative">
              <input
                type="date"
                className="border border-gray-300 rounded-xl px-4 py-3 w-full
                focus:ring-2 focus:ring-blue-500 outline-none 
                hover:border-black transition"
              />
            </div>

            {/* Travelers Dropdown */}
            <div className="relative">

              {/* Main Box */}
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setOpen(!open);
                }}
                className="border border-gray-300 rounded-xl px-4 py-3 
                flex justify-between items-center cursor-pointer
                hover:border-black transition"
              >
                <span>{travelers} Passenger{travelers > 1 ? "s" : ""}</span>
                <span>▼</span>
              </div>

              {/* Dropdown */}
              {open && (
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="absolute left-0 mt-2 w-full bg-white 
                  border border-gray-200 rounded-xl shadow-lg p-4 z-50"
                >
                  <div className="flex justify-between items-center">

                    <span className="font-medium text-gray-700">Passengers</span>

                    <div className="flex items-center gap-3">

                      <button
                        onClick={decrease}
                        className="w-8 h-8 rounded-full border border-gray-300 hover:bg-gray-100"
                      >
                        -
                      </button>

                      <span className="font-semibold">{travelers}</span>

                      <button
                        onClick={increase}
                        className="w-8 h-8 rounded-full bg-blue-600 text-white hover:bg-blue-700"
                      >
                        +
                      </button>

                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Search Button */}
            <button className="bg-blue-600 hover:bg-blue-700 text-white 
            rounded-xl px-6 py-3 transition font-medium">
              Search
            </button>

          </div>
        </div>



      {/* Calendar Section */}
      <div className="mb-14">

        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          Check Availability
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <BookingCalendar />

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">

            <h3 className="text-xl font-semibold mb-4">
              Rental Availability
            </h3>

            <p className="text-gray-600 mb-4">
              Select dates to check rental availability
            </p>

            <div className="space-y-3">

              <div className="flex justify-between p-3 bg-green-50 rounded-lg">
                <span>Mountain View Villa</span>
                <span className="text-green-600 font-medium">Available</span>
              </div>

              <div className="flex justify-between p-3 bg-red-50 rounded-lg">
                <span>Beachside Apartment</span>
                <span className="text-red-600 font-medium">Booked</span>
              </div>

              <div className="flex justify-between p-3 bg-green-50 rounded-lg">
                <span>City Center Studio</span>
                <span className="text-green-600 font-medium">Available</span>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Featured Destinations */}
      <h2 className="text-3xl font-bold mb-8 text-gray-800">
        Popular Destinations
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">

        {featuredDestinations.map((dest) => (
          <div key={dest.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden">

            <img src={dest.image} alt={dest.name} className="w-full h-48 object-cover" />

            <div className="p-4">

              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold">{dest.name}</h3>

                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 fill-current"/>
                  <span className="ml-1 text-gray-600">{dest.rating}</span>
                </div>
              </div>

              <p className="text-gray-600 mb-3">
                Starting from
                <span className="text-blue-600 font-bold ml-1">{dest.price}</span>
              </p>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition">
                View Packages
              </button>

            </div>
          </div>
        ))}

      </div>

    </div>
  );
};

export default HeroSection;