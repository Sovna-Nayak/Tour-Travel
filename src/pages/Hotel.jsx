
import React, { useState } from "react";
import { Star, MapPin } from "lucide-react";

const Hotels = () => {
  const [selectedPrice, setSelectedPrice] = useState("All Prices");
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedAmenities, setSelectedAmenities] = useState("Any Amenity");
  const [showAll, setShowAll] = useState(false);
  const [filteredHotels, setFilteredHotels] = useState(null);

  const hotels = [
    { id: 1, name: "Taj Mahal Palace", location: "Mumbai", price: 15999, rating: 5, reviews: 1245, amenities: ["Free WiFi","Pool","Spa","Restaurant","Parking"], image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
    { id: 2, name: "Budget Stay", location: "Pune", price: 3500, rating: 1, reviews: 150, amenities: ["Free WiFi","Parking"], image: "/Budget_Stay.jpg" },
    { id: 3, name: "Cozy Inn", location: "Delhi", price: 7000, rating: 2, reviews: 245, amenities: ["Free WiFi","Restaurant"], image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
    { id: 4, name: "ITC Grand Bharat", location: "Gurugram", price: 18999, rating: 5, reviews: 756, amenities: ["Free WiFi","Golf Course","Spa","Multiple Restaurants","Pool"], image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
    { id: 5, name: "The Oberoi Udaivilas", location: "Udaipur", price: 22999, rating: 5, reviews: 634, amenities: ["Lake View","Spa","Pool","Butler Service","Fine Dining"], image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
    { id: 6, name: "The Westin Goa", location: "Goa", price: 8999, rating: 4, reviews: 1567, amenities: ["Beach Access","Pool","Spa","Kids Club","Restaurant"], image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
    { id: 7, name: "JW Marriott Chandigarh", location: "Chandigarh", price: 9499, rating: 4, reviews: 892, amenities: ["Free WiFi","Pool","Gym","Spa","Multiple Restaurants"], image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
    { id: 8, name: "Simple Stay", location: "Jaipur", price: 4500, rating: 2, reviews: 180, amenities: ["Free WiFi"], image: "/Simple_Stay.jpg" },
    { id: 9, name: "Elite Resort", location: "Goa", price: 21000, rating: 5, reviews: 300, amenities: ["Pool","Spa","Restaurant","Beach Access"], image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
    { id: 10, name: "City Lodge", location: "Bangalore", price: 6000, rating: 3, reviews: 200, amenities: ["Free WiFi","Restaurant"], image: "/City_Lodge.jpg" },
  ];

  const applyFilters = () => {
    const filtered = hotels.filter(hotel => {
      let priceMatch = true;
      if(selectedPrice === "Under ₹5,000") priceMatch = hotel.price < 5000;
      else if(selectedPrice === "₹5,000 - ₹10,000") priceMatch = hotel.price >= 5000 && hotel.price <= 10000;
      else if(selectedPrice === "₹10,000 - ₹20,000") priceMatch = hotel.price > 10000 && hotel.price <= 20000;
      else if(selectedPrice === "Above ₹20,000") priceMatch = hotel.price > 20000;

      let ratingMatch = selectedRating ? hotel.rating === selectedRating : true;
      let amenityMatch = selectedAmenities === "Any Amenity" ? true : hotel.amenities.includes(selectedAmenities);

      return priceMatch && ratingMatch && amenityMatch;
    });

    setFilteredHotels(filtered);
    setShowAll(true);
  };

  const hotelsToShow = filteredHotels ? filteredHotels : showAll ? hotels : hotels.slice(0,4);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4">Find Your Perfect Stay</h1>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-5 items-end">
        <div className="flex-1 min-w-[120px]">
          <label className="block text-sm text-gray-700 mb-1">Price</label>
          <select value={selectedPrice} onChange={e => setSelectedPrice(e.target.value)} className="w-full border rounded px-2 py-2 text-sm focus:border-blue-500">
            <option>All Prices</option>
            <option>Under ₹5,000</option>
            <option>₹5,000 - ₹10,000</option>
            <option>₹10,000 - ₹20,000</option>
            <option>Above ₹20,000</option>
          </select>
        </div>

        <div className="flex-1 min-w-[120px]">
          <label className="block text-sm text-gray-700 mb-1">Rating</label>
          <div className="flex gap-1 flex-wrap">
            {[5,4,3,2,1].map(r =>
              <button key={r} onClick={() => setSelectedRating(r)}
                className={`px-2 py-1 text-sm rounded border ${selectedRating === r ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-300 hover:border-blue-500'}`}>
                {r}★
              </button>
            )}
          </div>
        </div>

        <div className="flex-1 min-w-[120px]">
          <label className="block text-sm text-gray-700 mb-1">Amenities</label>
          <select value={selectedAmenities} onChange={e => setSelectedAmenities(e.target.value)} className="w-full border rounded px-2 py-2 text-sm focus:border-blue-500">
            <option>Any Amenity</option>
            <option>Free WiFi</option>
            <option>Pool</option>
            <option>Spa</option>
            <option>Restaurant</option>
            <option>Parking</option>
            <option>Beach Access</option>
          </select>
        </div>

        <div className="flex-shrink-0">
          <button onClick={applyFilters} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-sm">Search</button>
        </div>
      </div>

      {/* Hotels Grid */}
      <div className="space-y-4">
        {hotelsToShow.map(hotel => (
          <div key={hotel.id} className="bg-white rounded-lg shadow hover:shadow-xl transition overflow-hidden flex flex-col md:flex-row">
            <img src={hotel.image} alt={hotel.name} className="h-40 w-full md:h-48 md:w-1/3 object-cover"/>
            <div className="p-4 md:p-6 flex-1">
              <h3 className="text-lg sm:text-xl font-semibold">{hotel.name}</h3>
              <div className="flex items-center text-gray-600 text-sm my-1"><MapPin className="h-4 w-4 mr-1"/> {hotel.location}</div>
              <div className="text-blue-600 font-bold text-base sm:text-lg">{`₹${hotel.price.toLocaleString()}`} <span className="text-gray-500 text-xs sm:text-sm">per night</span></div>
              <div className="flex items-center gap-2 my-1 text-sm">
                <div className="bg-green-600 text-white px-2 py-1 rounded flex items-center">{hotel.rating} <Star className="h-4 w-4"/></div>
                <span className="text-gray-600 text-xs sm:text-sm">{hotel.reviews} reviews</span>
              </div>
              <div className="flex flex-wrap gap-1 text-xs sm:text-sm mt-2">
                {hotel.amenities.map((a,i) => <span key={i} className="bg-gray-100 px-2 py-1 rounded">{a}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>

      {!showAll && !filteredHotels && (
        <div className="text-center mt-4">
          <button onClick={() => setShowAll(true)} className="text-blue-600 hover:underline text-sm">View All Hotels</button>
        </div>
      )}
    </div>
  );
};

export default Hotels;