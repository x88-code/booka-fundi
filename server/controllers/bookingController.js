import Booking from '../models/Booking.js';

// Create a new booking
export const createBooking = async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    console.log("✅ Booking saved:", booking);
    res.status(201).json(booking);
  } catch (err) {
    console.error("❌ Booking error:", err.message);
    res.status(400).json({ message: err.message });
  }
};

// Get all bookings for a specific fundi
export const getFundiBookings = async (req, res) => {
  const { fundiId } = req.params;

  try {
    const bookings = await Booking.find({ fundiId }).sort({ date: -1 });
    console.log(`📦 Bookings for fundi ${fundiId}:`, bookings);
    res.status(200).json(bookings);
  } catch (err) {
    console.error("❌ Fetch error:", err.message);
    res.status(500).json({ message: err.message });
  }
};
