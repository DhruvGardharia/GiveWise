// src/components/Header.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleSignIn = () => {
    window.location.href = "/login";
  };

  return (
    <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              <Heart className="h-6 w-6 text-teal-600 mr-2 transition-transform group-hover:scale-110" />
              <span className="font-bold text-xl">GiveWise</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-teal-600 transition-colors">
              Home
            </Link>
            <Link to="#" className="text-gray-700 hover:text-teal-600 transition-colors">
              About Us
            </Link>
            <Link to="#" className="text-gray-700 hover:text-teal-600 transition-colors">
              Projects
            </Link>
            <Link to="#" className="text-gray-700 hover:text-teal-600 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              className="text-gray-700 hover:text-teal-600 hover:bg-teal-50 px-4 py-2 rounded-md"
              onClick={handleSignIn}
            >
              Sign In
            </button>
            <Link to="/don">
              <button className="border border-teal-600 text-teal-600 hover:bg-teal-50 transition-all px-4 py-2 rounded-md">
                Donate
              </button>
            </Link>
            <Link to="/login">
              <button className="bg-teal-600 hover:bg-teal-700 transition-all text-white px-4 py-2 rounded-md">
                Volunteer
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-teal-600 focus:outline-none"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b shadow-sm">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-teal-600 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="#"
                className="text-gray-700 hover:text-teal-600 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="#"
                className="text-gray-700 hover:text-teal-600 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                to="#"
                className="text-gray-700 hover:text-teal-600 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
            <div className="flex flex-col space-y-3 pt-3 border-t">
              <button
                className="justify-center text-gray-700 hover:text-teal-600 hover:bg-teal-50 px-4 py-2 rounded-md"
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleSignIn();
                }}
              >
                Sign In
              </button>
              <Link to="/don" className="w-full" onClick={() => setMobileMenuOpen(false)}>
                <button className="w-full border border-teal-600 text-teal-600 hover:bg-teal-50 px-4 py-2 rounded-md">
                  Donate
                </button>
              </Link>
              <Link to="/login" className="w-full" onClick={() => setMobileMenuOpen(false)}>
                <button className="w-full bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-md">
                  Volunteer
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
