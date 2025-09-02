import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);

    Swal.fire({
      title: "Logged Out",
      text: "You have been logged out successfully!",
      icon: "success",
      background: "#1a202c",
      color: "#fff",
      confirmButtonColor: "#3085d6",
    });

    navigate("/login");
  };

  return (
    <div className="flex items-center justify-between text-white">
      <img className="w-50 p-6" src="/assets/logo-dark.png" alt="logo" />
      <nav className="flex gap-18">
        <Link
          to="/"
          className="border-b-2 border-transparent hover:border-white transition-all duration-300"
        >
          Home
        </Link>
        <Link
          to="/"
          className="border-b-2 border-transparent hover:border-white transition-all duration-300"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="border-b-2 border-transparent hover:border-white transition-all duration-300"
        >
          Contact
        </Link>
      </nav>
      <div className="p-6 cursor-pointer">
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
}
