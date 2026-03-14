// components/BookingCalendar.jsx
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const BookingCalendar = ({ onDateSelect, bookedDates = [] }) => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
    if (onDateSelect) {
      onDateSelect(newDate);
    }
  };

  // Function to check if date is booked
  const isDateBooked = (date) => {
    return bookedDates.some(bookedDate => 
      new Date(bookedDate).toDateString() === date.toDateString()
    );
  };

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="text-lg font-semibold mb-4">Select Booking Dates</h3>
      <Calendar
        onChange={handleDateChange}
        value={date}
        tileClassName={({ date, view }) => {
          if (view === 'month' && isDateBooked(date)) {
            return 'bg-red-100 text-red-600 rounded-full';
          }
        }}
        className="border-0 shadow-none"
      />
      
      <div className="mt-4 flex items-center space-x-4 text-sm">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-green-100 rounded-full mr-2"></div>
          <span>Available</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-red-100 rounded-full mr-2"></div>
          <span>Booked</span>
        </div>
      </div>

      {/* Selected Dates Display */}
      <div className="mt-4 p-3 bg-blue-50 rounded-lg">
        <p className="text-sm text-gray-600">Selected Dates:</p>
        <p className="font-semibold">
          {date.toDateString()}
        </p>
      </div>
    </div>
  );
};

export default BookingCalendar;