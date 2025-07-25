import { Link, useLocation } from "react-router-dom";

export default function Navbar({ toggleDarkMode, darkMode }) {
  const location = useLocation();

  const linkClass = (path) =>
    `px-4 py-2 rounded ${
      location.pathname === path
        ? "bg-blue-600 text-white"
        : "hover:bg-blue-100 dark:hover:bg-gray-700"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow">
      <nav className="max-w-7xl mx-auto text-white flex justify-between items-center px-4 h-16">
        <Link to="/" className="text-xl font-bold text-blue-600 dark:text-white">
          Cardify
        </Link>
        <div className="flex gap-4 items-center">
          <Link to="/" className={linkClass("/")}>
            Home
          </Link>
          <Link to="/generate" className={linkClass("/generate")}>
            Generator
          </Link>
          <Link to="/about" className={linkClass("/about")}>
            About
          </Link>
          
        </div>
      </nav>
    </header>
  );
}
