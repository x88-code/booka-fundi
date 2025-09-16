import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getFundis } from "../api/fundiApi";

const Home = () => {
  const [fundis, setFundis] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const data = await getFundis();
       console.log("📦 Fundis received from backend:", data);
      setFundis(data);
    };
    fetch();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Available Fundis</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {fundis.map((fundi) => (
          <div
            key={fundi._id}
            className="border p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{fundi.name}</h2>
            <p className="text-sm text-gray-600">{fundi.service} – {fundi.location}</p>
            <Link
              to={`/book/${fundi._id}`}
              className="mt-3 inline-block bg-blue-600 text-white px-4 py-2 rounded text-sm"
            >
              Book Now →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
