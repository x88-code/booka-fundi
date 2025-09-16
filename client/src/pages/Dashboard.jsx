import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const { fundiId } = useParams();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/bookings/${fundiId}`);
        setBookings(res.data);
      } catch (err) {
        console.error("❌ Error fetching bookings:", err);
      }
    };

    fetchBookings();
  }, [fundiId]);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">📋 Your Bookings</h1>
      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <ul className="space-y-4">
          {bookings.map((b) => (
            <li
              key={b._id}
              className="border rounded-lg p-4 shadow hover:shadow-md transition"
            >
              <p><strong>Name:</strong> {b.name}</p>
              <p><strong>Phone:</strong> {b.phone}</p>
              <p><strong>Date:</strong> {b.date}</p>
              <p><strong>Notes:</strong> {b.notes}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dashboard;
