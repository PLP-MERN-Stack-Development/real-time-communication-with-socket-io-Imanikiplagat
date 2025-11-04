// src/components/Navbar.jsx
import { useNavigate } from "react-router-dom";

const Navbar = ({ username, title = "Global Chat" }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("username");
    navigate("/");
  };

  return (
    <nav className="flex justify-between items-center bg-blue-500 text-white px-6 py-3">
      <h1 className="font-semibold text-lg">{title}</h1>
      <div className="flex items-center gap-4">
        <span className="text-sm">👤 {username}</span>
        <button
          onClick={handleLogout}
          className="bg-white text-blue-500 px-3 py-1 rounded hover:bg-gray-100 transition"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
