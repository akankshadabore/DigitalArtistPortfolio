import { Link } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";


export default function Header({ cartCount, onCartClick }) {
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        <Link to="/" className="text-2xl font-bold text-pink-600">
          Daniel — Art
        </Link>

        <nav className="flex-1 flex justify-center space-x-8">
          <Link
            to="/"
            className="text-gray-700 hover:text-pink-600 font-medium transition"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-700 hover:text-pink-600 font-medium transition"
          >
            About
          </Link>
          <Link
            to="/products"
            className="text-gray-700 hover:text-pink-600 font-medium transition"
          >
            Products
          </Link>
        </nav>

        <button
          onClick={onCartClick}
          className="relative hover:text-pink-600 text-gray-500 px-4 py-2  transition"
        >
            <FaCartArrowDown className="w-8 h-8"/>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-white text-pink-600 text-xs font-bold px-2 py-0.5 rounded-full shadow">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
