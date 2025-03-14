import React from "react";
import PackageList from "../components/PackageList";
import BookingForm from "../components/BookingForm";

const Home = () => {
  return (
    <div>
      <h1>Welcome to Travel Booking</h1>
      <PackageList />
      <BookingForm />
    </div>
  );
};

export default Home;
