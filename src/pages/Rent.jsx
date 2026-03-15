import { useState } from "react";

export default function Rent() {
  const [days, setDays] = useState(1);
  const pricePerDay = 500;

  const total = days * pricePerDay;

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Bike Rental</h1>

      <div className="bg-white shadow-lg p-6 rounded-lg w-96">

        <h2 className="text-xl font-semibold">Royal Enfield</h2>
        <p>Price: ₹500 / Day</p>

        <input
          type="number"
          min="1"
          value={days}
          onChange={(e) => setDays(e.target.value)}
          className="border p-2 mt-3 w-full"
        />

        <p className="mt-3 font-bold">Total Price: ₹{total}</p>

        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">
          Book Now
        </button>

      </div>
    </div>
  );
}