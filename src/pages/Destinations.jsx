// pages/Destinations.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, Search } from 'lucide-react';

const Destinations = () => {
  const destinations = [
    {
      id: 1,
      name: "Goa",
      country: "India",
      description: "Famous for its beautiful beaches, vibrant nightlife, and Portuguese architecture.",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      rating: 4.5,
      packages: 45,
      popularSpots: ["Baga Beach", "Calangute", "Old Goa"]
    },
    {
      id: 2,
      name: "Manali",
      country: "India",
      description: "Hill station in Himachal Pradesh known for snow-capped mountains and adventure sports.",
      image: "/manali.jpg",
      rating: 4.7,
      packages: 38,
      popularSpots: ["Solang Valley", "Rohtang Pass", "Hadimba Temple"]
    },
    {
      id: 3,
      name: "Kerala",
      country: "India",
      description: "God's Own Country - famous for backwaters, Ayurveda, and lush greenery.",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      rating: 4.8,
      packages: 52,
      popularSpots: ["Alleppey", "Munnar", "Kochi"]
    },
    {
      id: 4,
      name: "Ladakh",
      country: "India",
      description: "Land of high passes, Buddhist monasteries, and stunning landscapes.",
      image: "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      rating: 4.9,
      packages: 29,
      popularSpots: ["Leh", "Nubra Valley", "Pangong Lake"]
    },
    {
      id: 5,
      name: "Jaipur",
      country: "India",
      description: "Pink City famous for royal palaces, forts, and vibrant culture.",
      image: "jaipur.jpg",
      rating: 4.6,
      packages: 41,
      popularSpots: ["Hawa Mahal", "Amer Fort", "City Palace"]
    },
    {
      id: 6,
      name: "Andaman",
      country: "India",
      description: "Tropical paradise with pristine beaches and water sports.",
      image: "andaman.jpg",
      rating: 4.7,
      packages: 33,
      popularSpots: ["Havelock", "Neil Island", "Port Blair"]
    },
    {
      id: 7,
      name: "Rishikesh",
      country: "India",
      description: "Yoga capital of the world, adventure sports and spirituality.",
      image: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      rating: 4.5,
      packages: 27,
      popularSpots: ["Lakshman Jhula", "River Rafting", "Yoga Camps"]
    },
    {
      id: 8,
      name: "Udaipur",
      country: "India",
      description: "City of Lakes, romantic destinations and magnificent palaces.",
      image: "udaipur.jpg",
      rating: 4.8,
      packages: 36,
      popularSpots: ["Lake Pichola", "City Palace", "Jag Mandir"]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Explore Destinations</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover amazing places across India. From beaches to mountains, find your perfect getaway.
        </p>
      </div>

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-12">
        <div className="relative">
          <input
            type="text"
            placeholder="Search destinations..."
            className="w-full px-6 py-4 pl-14 text-lg border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
          />
          <Search className="absolute left-5 top-4 h-6 w-6 text-gray-400" />
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 justify-center mb-12">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
          All
        </button>
        <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition">
          Beaches
        </button>
        <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition">
          Mountains
        </button>
        <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition">
          Heritage
        </button>
        <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition">
          Adventure
        </button>
        <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition">
          Spiritual
        </button>
      </div>

      {/* Destinations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {destinations.map((dest) => (
          <div key={dest.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition group">
            <div className="relative h-48 overflow-hidden">
              <img 
                src={dest.image} 
                alt={dest.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
              />
              <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-blue-600 shadow">
                {dest.packages} Packages
              </div>
            </div>
            
            <div className="p-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold text-gray-900">{dest.name}</h3>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm text-gray-600">{dest.rating}</span>
                </div>
              </div>
              
              <div className="flex items-center text-gray-500 text-sm mb-3">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{dest.country}</span>
              </div>
              
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {dest.description}
              </p>
              
              <div className="mb-4">
                <p className="text-xs text-gray-500 mb-2">Popular spots:</p>
                <div className="flex flex-wrap gap-1">
                  {dest.popularSpots.map((spot, index) => (
                    <span key={index} className="bg-blue-50 text-blue-600 px-2 py-1 rounded text-xs">
                      {spot}
                    </span>
                  ))}
                </div>
              </div>
              
              <Link 
                to={`/packages?destination=${dest.name.toLowerCase()}`}
                className="block w-full text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              >
                View Packages
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;