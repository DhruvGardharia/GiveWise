import React, { useState } from "react";
import { Heart, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");
    
    try {
      const response = await axios.post('/api/volunteers/login', {
        email: loginData.email,
        password: loginData.password
      });
  
      const data = response.data;
  
      // Axios doesn't expose `response.ok` – instead, check `response.status`
      if (response.status !== 200) {
        throw new Error(data.message || 'Login failed');
      }
  
      // Save user info
      localStorage.setItem('volunteerInfo', JSON.stringify(data.volunteer));
  
      setIsLoading(false);
      navigate(`/dash/${response.data.token}`);
    } catch (error) {
      setIsLoading(false);
      setErrorMessage(error.response?.data?.message || error.message || 'An error occurred during login');
    }
  };
  

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="/" className="flex items-center group">
                <Heart className="h-6 w-6 text-teal-600 mr-2 transition-transform group-hover:scale-110" />
                <span className="font-bold text-xl">GiveWise</span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <a href="/" className="text-gray-700 hover:text-teal-600 transition-colors">
                Home
              </a>
              <a href="#" className="text-gray-700 hover:text-teal-600 transition-colors">
                About Us
              </a>
              <a href="#" className="text-gray-700 hover:text-teal-600 transition-colors">
                Projects
              </a>
              <a href="#" className="text-gray-700 hover:text-teal-600 transition-colors">
                Contact
              </a>
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <a href="/volunteer">
                <button className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded transition-colors">
                  Volunteer
                </button>
              </a>
              <a href="/don">
                <button className="px-4 py-2 border border-teal-600 text-teal-600 hover:bg-teal-50 rounded transition-all">
                  Donate
                </button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-gray-700 hover:text-teal-600 focus:outline-none"
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
                <a
                  href="/"
                  className="text-gray-700 hover:text-teal-600 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-teal-600 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-teal-600 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Projects
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-teal-600 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Login Form */}
      <div className="flex-1 flex items-center justify-center bg-gray-50 py-12 px-4">
        <div className="w-full max-w-md">
          <div className="flex justify-center mb-8">
            <div className="bg-teal-100 p-3 rounded-full">
              <Heart className="h-8 w-8 text-teal-600" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="px-6 py-8">
              <h1 className="text-2xl font-bold text-center mb-6">Welcome Back</h1>
              <p className="text-gray-600 text-center mb-8">
                Sign in to your GiveWise account to continue your journey of making a difference.
              </p>

              {errorMessage && (
                <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-md border border-red-200">
                  {errorMessage}
                </div>
              )}

              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={loginData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label htmlFor="password" className="block text-gray-700 font-medium">
                      Password
                    </label>
                    <a href="#" className="text-sm text-teal-600 hover:text-teal-700">
                      Forgot password?
                    </a>
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={loginData.password}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-4 rounded-md transition-colors"
                >
                  {isLoading ? "Signing in..." : "Sign In"}
                </button>
              </form>

              <div className="text-center mt-6">
                <p className="text-gray-600">
                  Don't have an account?{" "}
                  <a href="/volunteer" className="text-teal-600 hover:text-teal-700 font-medium">
                    Sign up
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 border-t py-6">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          <div className="flex justify-center items-center mb-4">
            <Heart className="h-5 w-5 text-teal-600 mr-2" />
            <span className="font-bold">GiveWise</span>
          </div>
          <p>&copy; {new Date().getFullYear()} GiveWise. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LoginPage;