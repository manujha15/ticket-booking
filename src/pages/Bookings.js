import React, { useState } from "react";
import BookingForm from "../components/BookingForm";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  const addBooking = (booking) => {
    setBookings([...bookings, booking]);
  };

  return (
    <div className="container">
      <h2>Book a Trip</h2>
      <BookingForm onBook={addBooking} />
      
      <h3>Booked Trips</h3>
      <ul>
        {bookings.map((b, index) => (
          <li key={index}>
            {b.travelerName} | {b.arrivalStation} → {b.destinationStation} | Age: {b.age} | Gender: {b.gender}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Bookings;


