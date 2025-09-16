import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const FundiDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("fundiToken");
    const fundi = JSON.parse(localStorage.getItem("fundiInfo"));

    if (!token || !fundi?._id) {
      alert("Please login to view your dashboard.");
      navigate("/fundi/login");
      return;
    }

    const fetchBookings = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/bookings/${fundi._id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setBookings(res.data);
      } catch (err) {
        console.error("❌ Failed to fetch bookings", err);
        alert("Failed to load dashboard.");
      }
    };

    fetchBookings();
  }, [navigate]);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">📋 Your Bookings</h1>
      {bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        <div className="space-y-4">
          {bookings.map((booking) => (
            <div
              key={booking._id}
              className="border p-4 rounded shadow-sm bg-white"
            >
              <p><strong>Client:</strong> {booking.name}</p>
              <p><strong>Phone:</strong> {booking.phone}</p>
              <p><strong>Date:</strong> {booking.date}</p>
              <p><strong>Notes:</strong> {booking.notes}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FundiDashboard;
