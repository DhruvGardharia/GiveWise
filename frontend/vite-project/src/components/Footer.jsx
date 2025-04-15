import { Link } from "react-router-dom";
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Heart className="h-6 w-6 text-teal-600 mr-2" />
              <span className="font-bold text-xl">GiveWise</span>
            </div>
            <p className="text-gray-600 mb-4">
              Empowering communities through sustainable development and humanitarian aid.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-teal-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-teal-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-teal-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-teal-600 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-teal-600 transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-teal-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Get Involved</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/don" className="text-gray-600 hover:text-teal-600 transition-colors">
                  Donate
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-600 hover:text-teal-600 transition-colors">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-teal-600 transition-colors">
                  Fundraise
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-teal-600 transition-colors">
                  Partner with Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-teal-600 mr-2 mt-0.5" />
                <span className="text-gray-600">123 Charity Lane, New York, NY 10001</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-teal-600 mr-2" />
                <span className="text-gray-600">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-teal-600 mr-2" />
                <span className="text-gray-600">info@givewise.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} GiveWise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
