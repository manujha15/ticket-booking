import React, { useEffect, useState } from "react";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch bookings from the backend
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/bookings"); // Replace with your backend API
        const data = await response.json();
        setBookings(data); // Set fetched bookings in state
      } catch (error) {
        console.error("Error fetching bookings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  // Delete booking from backend & update state
  const deleteBooking = async (bookingId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/bookings/${bookingId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setBookings(bookings.filter((booking) => booking._id !== bookingId));
      } else {
        console.error("Failed to delete booking");
      }
    } catch (error) {
      console.error("Error deleting booking:", error);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container" style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>My Bookings</h2>
      {bookings.length === 0 ? (
        <p>No bookings available.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {bookings.map((b) => (
            <li key={b._id} style={{ marginBottom: "10px", padding: "10px", border: "1px solid #ccc", borderRadius: "5px", display: "flex", justifyContent: "space-between", alignItems: "center", width: "60%", margin: "10px auto" }}>
              <span>{b.travelerName} | {b.arrivalStation} → {b.destinationStation} | Age: {b.age} | Gender: {b.gender} | Status: {b.status || "Pending"}</span>
              <button 
                onClick={() => deleteBooking(b._id)} 
                style={{
                  backgroundColor: "red", 
                  color: "white", 
                  border: "none", 
                  padding: "5px 10px", 
                  cursor: "pointer", 
                  borderRadius: "5px"
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyBookings;
