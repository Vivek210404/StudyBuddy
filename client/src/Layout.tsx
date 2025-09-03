import Navbar from "./components/navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
