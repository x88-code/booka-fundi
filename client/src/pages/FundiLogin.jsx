import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FundiLogin = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        phone,
        password,
      });

      localStorage.setItem("fundiToken", res.data.token);
      localStorage.setItem("fundiInfo", JSON.stringify(res.data.fundi));

      alert("✅ Login successful");
      navigate("/fundi/dashboard");
    } catch (err) {
      console.error(err);
      alert("❌ Login failed");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded">
      <h2 className="text-2xl font-bold mb-4">Fundi Login</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default FundiLogin;
