const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  userId: String,
  packageId: String,
  status: { type: String, default: "Booked" },
});

module.exports = mongoose.model("Booking", BookingSchema);
