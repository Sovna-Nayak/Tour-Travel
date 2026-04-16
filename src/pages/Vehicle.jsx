import React, { useState } from 'react';
import { Plane, Bus, Car, Train, Clock, Users, Luggage, Coffee } from 'lucide-react';

const Vehicle = () => {
  const [activeTab, setActiveTab] = useState('flights');
  const [date, setDate] = useState("");
  const [passengers, setPassengers] = useState(0);

  const formatDate = (value) => {
    if (!value) return "";
    const [year, month, day] = value.split("-");
    return `${day}-${month}-${year}`;
  };

  const VehicleOptions = {
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
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=500"
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
        image: "https://images.unsplash.com/photo-1542296332-2e4473faf563?w=500"
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
        image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=500"
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
        price: "₹1,299"
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
        price: "₹1,450"
      }
    ],
  
   bikes : [
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
  ]
};

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">

      <h1 className="text-2xl md:text-4xl font-bold mb-6">
        Book Your vehicle 
      </h1>

      {/* TABS */}
      <div className="flex flex-wrap gap-4 mb-6 border-b">
        {[
          { id: 'flights', label: 'Flights', icon: Plane },
          { id: 'buses', label: 'Buses', icon: Bus },
          { id: 'trains', label: 'Trains', icon: Train },
          { id: 'cabs', label: 'Cabs', icon: Car },
          { id: 'bikes', label: 'Bikes', icon: Users }
        ].map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`flex items-center px-4 py-2 border-b-2 ${
              activeTab === id
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500'
            }`}
          >
            <Icon className="mr-2" size={18} />
            {label}
          </button>
        ))}
      </div>

      {/* SEARCH */}
      <div className="bg-white shadow-lg rounded-xl p-5 mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">

          <input
            type="text"
            placeholder="From"
            className="border rounded-lg px-4 py-3"
          />

          <input
            type="text"
            placeholder="To"
            className="border rounded-lg px-4 py-3"
          />

          {/* DATE FIX */}
          <div className="relative w-full">
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full border rounded-lg px-4 py-3 text-transparent"
            />

            <span className="absolute left-4 top-3 text-gray-500 pointer-events-none">
              {date ? formatDate(date) : "dd-mm-yyyy"}
            </span>

            <span className="absolute right-3 top-3 text-gray-500">
              📅
            </span>
          </div>

          <div className="border rounded-lg px-4 py-2 flex items-center justify-between">
            
          <span className="text-gray-600">
            {passengers} Passenger{passengers !== 1 && "s"}
          </span>

          <div className="flex items-center gap-2">

            {/* MINUS BUTTON */}
            <button
              onClick={() => setPassengers(passengers > 0 ? passengers - 1 : 0)}
              className="bg-gray-200 px-3 py-1 rounded"
            >
              -
            </button>

            {/* PLUS BUTTON */}
            <button
              onClick={() => setPassengers(passengers + 1)}
              className="bg-blue-600 text-white px-3 py-1 rounded"
            >
              +
            </button>

          </div>

          </div>

          <button className="bg-blue-600 text-white rounded-lg px-4 py-3">
            Search
          </button>

        </div>
      </div>

      {/* FLIGHTS */}
      {activeTab === 'flights' && (
        <div className="space-y-4">
          {VehicleOptions.flights.map((f) => (
            <div key={f.id} className="bg-white p-4 rounded-xl shadow flex flex-col md:flex-row justify-between">

              <div className="flex items-center gap-3">
                <img src={f.image} className="w-12 h-12 rounded" />
                <div>
                  <h3 className="font-semibold">{f.airline}</h3>
                  <p className="text-sm text-gray-500">{f.flightNo}</p>
                </div>
              </div>

              <div className="flex gap-6 items-center mt-3 md:mt-0">
                <div>
                  <b>{f.departure}</b>
                  <p className="text-xs">{f.from}</p>
                </div>

                <div className="text-center">
                  <Clock size={14} />
                  <p className="text-xs">{f.duration}</p>
                </div>

                <div>
                  <b>{f.arrival}</b>
                  <p className="text-xs">{f.to}</p>
                </div>
              </div>

              <div className="mt-3 md:mt-0 text-right">
                <div className="text-blue-600 font-bold">{f.price}</div>
                <button className="bg-blue-600 text-white px-3 py-1 rounded mt-1">
                  Book
                </button>
              </div>

            </div>
          ))}
        </div>
      )}

      {/* CABS */}
      {activeTab === 'cabs' && (
        <div className="grid md:grid-cols-3 gap-4">
          {VehicleOptions.cabs.map((c) => (
            <div key={c.id} className="bg-white rounded-xl shadow overflow-hidden">
              <img src={c.image} className="h-40 w-full object-cover" />
              <div className="p-4">
                <h3 className="font-semibold">{c.type}</h3>
                <p className="text-sm text-gray-500">{c.model}</p>

                <div className="text-sm mt-2">
                  <div className="flex items-center"><Users size={14}/> {c.capacity}</div>
                  <div className="flex items-center"><Luggage size={14}/> {c.luggage}</div>
                  {c.ac && <div className="flex items-center"><Coffee size={14}/> AC</div>}
                </div>

                <div className="flex justify-between mt-3">
                  <span className="text-blue-600 font-bold">{c.price}</span>
                  <button className="bg-blue-600 text-white px-3 py-1 rounded">
                    Book
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* BUSES + TRAINS */}
      {(activeTab === 'buses' || activeTab === 'trains') && (
        <div className="space-y-4">
          {VehicleOptions[activeTab].map((item, i) => (
            <div key={i} className="bg-white p-4 rounded-xl shadow flex justify-between flex-col md:flex-row">

              <div>
                <h3 className="font-semibold">{item.operator || item.name}</h3>
                {item.trainNo && <p className="text-sm">{item.trainNo}</p>}
              </div>

              <div className="flex gap-6 mt-2 md:mt-0">
                <div><b>{item.departure}</b><p>{item.from}</p></div>
                <div><b>{item.arrival}</b><p>{item.to}</p></div>
              </div>

              <div className="mt-2 md:mt-0 text-right">
                <div className="text-blue-600 font-bold">{item.price}</div>
                <button className="bg-blue-600 text-white px-3 py-1 rounded mt-1">
                  Book
                </button>
              </div>

            </div>
          ))}
        </div>
      )}

    {/* bikes */}    
      {activeTab === 'bikes' && (
        <div className="grid md:grid-cols-3 gap-4">
          {VehicleOptions.bikes.map((r) => (
            <div key={r.id} className="bg-white rounded-xl shadow overflow-hidden">
              <img src={r.image} className="h-40 w-full object-cover" />
              <div className="p-4">
                <h3 className="font-semibold">{r.type}</h3>
                <p className="text-sm text-gray-500">{r.model}</p>

                <div className="text-sm mt-2">
                  <p>Seats: {r.seats}</p>
                  <p>Fuel: {r.fuel}</p>
                </div>

                <div className="flex justify-between mt-3">
                  <span className="text-blue-600 font-bold">{r.price}</span>
                  <button className="bg-blue-600 text-white px-3 py-1 rounded">
                    Rent Now
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

export default Vehicle;