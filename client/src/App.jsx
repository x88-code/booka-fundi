import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BookFundi from "./pages/BookFundi";
import FundiLogin from "./pages/FundiLogin";
import FundiDashboard from "./pages/FundiDashboard";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/:fundiId" element={<BookFundi />} />
        <Route path="/fundi/login" element={<FundiLogin />} />
        <Route path="/fundi/dashboard" element={<FundiDashboard />} />
        <Route path="/dashboard/:fundiId" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
