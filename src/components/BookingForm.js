import React, { useState } from "react";

const BookingForm = ({ onBook }) => {
  const [travelerName, setTravelerName] = useState("");
  const [arrivalStation, setArrivalStation] = useState("");
  const [destinationStation, setDestinationStation] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("Male");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!travelerName || !arrivalStation || !destinationStation || !age) {
      alert("Please fill all the fields!");
      return;
    }

    const newBooking = { travelerName, arrivalStation, destinationStation, age, gender };

    // Save in localStorage
    const existingBookings = JSON.parse(localStorage.getItem("travelBookings")) || [];
    existingBookings.push(newBooking);
    localStorage.setItem("travelBookings", JSON.stringify(existingBookings));

    onBook(newBooking); // Update bookings in parent component
    alert("Booking Confirmed!");

    // Clear input fields
    setTravelerName("");
    setArrivalStation("");
    setDestinationStation("");
    setAge("");
    setGender("Male");
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <input type="text" placeholder="Traveler Name" value={travelerName} onChange={(e) => setTravelerName(e.target.value)} />
      <input type="text" placeholder="Arrival Station" value={arrivalStation} onChange={(e) => setArrivalStation(e.target.value)} />
      <input type="text" placeholder="Destination Station" value={destinationStation} onChange={(e) => setDestinationStation(e.target.value)} />
      <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
      <select value={gender} onChange={(e) => setGender(e.target.value)}>
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
      </select>
      <button type="submit">Confirm Booking</button>
    </form>
  );
};

export default BookingForm;
