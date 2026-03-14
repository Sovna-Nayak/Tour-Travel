import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, Star, Users, MapPin, Award } from 'lucide-react';
import BookingCalendar from '../components/BookingCalendar';

const HeroSection = () => {
  const featuredDestinations = [
    { id: 1, name: 'Goa', price: '₹15,999', image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', rating: 4.5 },
    { id: 2, name: 'Manali', price: '₹12,499', image: 'https://images.unsplash.com/photo-1626621341517-bfba3f45c572?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', rating: 4.3 },
    { id: 3, name: 'Kerala', price: '₹18,999', image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', rating: 4.7 },
    { id: 4, name: 'Ladakh', price: '₹22,999', image: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', rating: 4.8 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="relative rounded-2xl overflow-hidden mb-12">
        <img 
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Travel Hero"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Explore the World with First Track Tour @ Travel</h1>
            <p className="text-xl mb-8">Discover amazing destinations at the best prices</p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition flex items-center mx-auto">
              <Search className="h-5 w-5 mr-2" />
              Start Your Journey
            </button>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Where to?"
            className="border rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
          />
          <input
            type="date"
            className="border rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
          />
          <select className="border rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500">
            <option>1 Traveler</option>
            <option>2 Travelers</option>
            <option>3 Travelers</option>
            <option>4+ Travelers</option>
          </select>
          <button className="bg-blue-600 text-white rounded-lg px-6 py-3 hover:bg-blue-700 transition">
            Search
          </button>
        </div>
      </div>

      {/* Calendar Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Check Availability</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <BookingCalendar />
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-4">Rental Availability</h3>
            <p className="text-gray-600 mb-4">Select dates to check rental availability</p>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span>Mountain View Villa</span>
                <span className="text-green-600">Available</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span>Beachside Apartment</span>
                <span className="text-red-600">Booked (Mar 15-20)</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span>City Center Studio</span>
                <span className="text-green-600">Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Destinations */}
      <h2 className="text-3xl font-bold mb-6">Popular Destinations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {featuredDestinations.map((dest) => (
          <div key={dest.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <img src={dest.image} alt={dest.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold">{dest.name}</h3>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-gray-600">{dest.rating}</span>
                </div>
              </div>
              <p className="text-gray-600 mb-3">Starting from <span className="text-blue-600 font-bold">{dest.price}</span></p>
              <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                View Packages
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <div className="text-center">
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <MapPin className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="font-semibold mb-2">100+ Destinations</h3>
          <p className="text-gray-600">Explore worldwide locations</p>
        </div>
        <div className="text-center">
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Calendar className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="font-semibold mb-2">Easy Booking</h3>
          <p className="text-gray-600">Simple and secure reservations</p>
        </div>
        <div className="text-center">
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="font-semibold mb-2">10k+ Happy Customers</h3>
          <p className="text-gray-600">Trusted by travelers worldwide</p>
        </div>
        <div className="text-center">
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Award className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="font-semibold mb-2">Best Price Guarantee</h3>
          <p className="text-gray-600">We match any lower price</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;