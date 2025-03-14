import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import BookingForm from "./components/BookingForm";
import MyBookings from "./pages/MyBookings";

function Home() {
  const [bookings, setBookings] = useState([]);

  const addBooking = (booking) => {
    setBookings([...bookings, booking]);
  };

  return (
    <div className="container">
      <h1>Welcome to Travel Booking</h1>
      <BookingForm onBook={addBooking} />

      <Link to="/my-bookings">
        <button className="view-bookings">View My Bookings</button>
      </Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-bookings" element={<MyBookings />} />
      </Routes>
    </Router>
  );
}

export default App;

