// pages/Transport.jsx
import React, { useState } from 'react';
import { Plane, Bus, Car, Train, Clock, Users, Luggage, Wifi, Coffee } from 'lucide-react';

const Transport = () => {
  const [activeTab, setActiveTab] = useState('flights');
  
  const transportOptions = {
    flights: [
      {
        id: 1,
        airline: "IndiGo",
        flightNo: "6E-234",
        from: "Delhi (DEL)",
        to: "Mumbai (BOM)",
        departure: "06:00",
        arrival: "08:15",
        duration: "2h 15m",
        price: "₹3,999",
        stops: "Non-stop",
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
      },
      {
        id: 2,
        airline: "SpiceJet",
        flightNo: "SG-8721",
        from: "Delhi (DEL)",
        to: "Mumbai (BOM)",
        departure: "09:30",
        arrival: "11:50",
        duration: "2h 20m",
        price: "₹4,299",
        stops: "Non-stop",
        image: "https://images.unsplash.com/photo-1542296332-2e4473faf563?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
      },
      {
        id: 3,
        airline: "Air India",
        flightNo: "AI-865",
        from: "Delhi (DEL)",
        to: "Mumbai (BOM)",
        departure: "14:15",
        arrival: "16:40",
        duration: "2h 25m",
        price: "₹5,499",
        stops: "Non-stop",
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
      },
      {
        id: 4,
        airline: "Vistara",
        flightNo: "UK-945",
        from: "Delhi (DEL)",
        to: "Mumbai (BOM)",
        departure: "17:45",
        arrival: "20:10",
        duration: "2h 25m",
        price: "₹6,999",
        stops: "Non-stop",
        image: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
      }
    ],
    buses: [
      {
        id: 1,
        operator: "Volvo AC Sleeper",
        from: "Delhi",
        to: "Manali",
        departure: "19:30",
        arrival: "08:00",
        duration: "12h 30m",
        price: "₹1,299",
        type: "AC Sleeper",
        seats: 32
      },
      {
        id: 2,
        operator: "Scania Multi-Axle",
        from: "Delhi",
        to: "Jaipur",
        departure: "22:00",
        arrival: "05:00",
        duration: "7h",
        price: "₹899",
        type: "AC Seater",
        seats: 45
      }
    ],
    trains: [
      {
        id: 1,
        name: "Shatabdi Express",
        trainNo: "12001",
        from: "New Delhi",
        to: "Kanpur",
        departure: "06:00",
        arrival: "11:00",
        duration: "5h",
        price: "₹1,450",
        class: "CC"
      },
      {
        id: 2,
        name: "Rajdhani Express",
        trainNo: "12301",
        from: "Howrah",
        to: "New Delhi",
        departure: "16:50",
        arrival: "09:55",
        duration: "17h 5m",
        price: "₹3,295",
        class: "3A"
      }
    ],
    cabs: [
      {
        id: 1,
        type: "Hatchback",
        model: "Maruti Swift",
        capacity: 4,
        luggage: 2,
        price: "₹12/km",
        ac: true,
        image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
      },
      {
        id: 2,
        type: "Sedan",
        model: "Honda City",
        capacity: 4,
        luggage: 3,
        price: "₹16/km",
        ac: true,
        image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
      },
      {
        id: 3,
        type: "SUV",
        model: "Toyota Innova",
        capacity: 7,
        luggage: 4,
        price: "₹20/km",
        ac: true,
        image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
      }
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-bold mb-8">Book Your Transport</h1>
      
      {/* Transport Type Tabs */}
      <div className="flex flex-wrap gap-4 mb-8 border-b border-gray-200">
        {[
          { id: 'flights', label: 'Flights', icon: Plane },
          { id: 'buses', label: 'Buses', icon: Bus },
          { id: 'trains', label: 'Trains', icon: Train },
          { id: 'cabs', label: 'Cabs', icon: Car }
        ].map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`flex items-center px-6 py-3 font-medium border-b-2 transition ${
              activeTab === id
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <Icon className="h-5 w-5 mr-2" />
            {label}
          </button>
        ))}
      </div>

      {/* Search Bar */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <input
            type="text"
            placeholder="From"
            className="border rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            placeholder="To"
            className="border rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
          />
          <input
            type="date"
            className="border rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
          />
          <select className="border rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500">
            <option>1 Passenger</option>
            <option>2 Passengers</option>
            <option>3 Passengers</option>
            <option>4+ Passengers</option>
          </select>
          <button className="bg-blue-600 text-white rounded-lg px-6 py-3 hover:bg-blue-700 transition">
            Search
          </button>
        </div>
      </div>

      {/* Transport Listings */}
      {activeTab === 'flights' && (
        <div className="space-y-4">
          {transportOptions.flights.map((flight) => (
            <div key={flight.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="flex items-center mb-4 md:mb-0">
                  <img src={flight.image} alt={flight.airline} className="w-12 h-12 object-cover rounded-lg mr-4" />
                  <div>
                    <h3 className="font-semibold text-lg">{flight.airline}</h3>
                    <p className="text-sm text-gray-500">{flight.flightNo}</p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className="text-center">
                    <div className="font-bold text-xl">{flight.departure}</div>
                    <div className="text-sm text-gray-500">{flight.from}</div>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <Clock className="h-4 w-4 text-gray-400" />
                    <div className="text-sm text-gray-500">{flight.duration}</div>
                    <div className="text-xs text-green-600">{flight.stops}</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="font-bold text-xl">{flight.arrival}</div>
                    <div className="text-sm text-gray-500">{flight.to}</div>
                  </div>
                </div>
                
                <div className="text-right mt-4 md:mt-0">
                  <div className="text-2xl font-bold text-blue-600">{flight.price}</div>
                  <button className="mt-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                    Book
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'cabs' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {transportOptions.cabs.map((cab) => (
            <div key={cab.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <img src={cab.image} alt={cab.type} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{cab.type}</h3>
                <p className="text-gray-600 mb-3">{cab.model}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-2" />
                    <span>{cab.capacity} Passengers</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Luggage className="h-4 w-4 mr-2" />
                    <span>{cab.luggage} Luggage bags</span>
                  </div>
                  {cab.ac && (
                    <div className="flex items-center text-sm text-gray-600">
                      <Coffee className="h-4 w-4 mr-2" />
                      <span>Air Conditioned</span>
                    </div>
                  )}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">{cab.price}</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add similar sections for buses and trains */}
      {(activeTab === 'buses' || activeTab === 'trains') && (
        <div className="space-y-4">
          {transportOptions[activeTab].map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div>
                  <h3 className="font-semibold text-lg">{item.operator || item.name}</h3>
                  {item.trainNo && <p className="text-sm text-gray-500">Train No: {item.trainNo}</p>}
                </div>
                
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mt-4 md:mt-0">
                  <div className="text-center">
                    <div className="font-bold text-xl">{item.departure}</div>
                    <div className="text-sm text-gray-500">{item.from}</div>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <Clock className="h-4 w-4 text-gray-400" />
                    <div className="text-sm text-gray-500">{item.duration}</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="font-bold text-xl">{item.arrival}</div>
                    <div className="text-sm text-gray-500">{item.to}</div>
                  </div>
                </div>
                
                <div className="text-right mt-4 md:mt-0">
                  <div className="text-2xl font-bold text-blue-600">{item.price}</div>
                  <button className="mt-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                    Book
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Transport;