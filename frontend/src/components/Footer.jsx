import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  PhoneCall,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1E1E1E] w-full ">
      <div className="container mx-auto p-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold title mb-4">nomify</h2>
            <p className="text-gray-300 mb-6">
              Your one-stop destination for premium electronics and tech
              gadgets. Explore the future with us.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-zinc-800 hover:bg-sky-700 transition-colors p-2 rounded-full"
              >
                <Facebook className="h-5 w-5 text-white" />
              </a>
              <a
                href="#"
                className="bg-zinc-800 hover:bg-sky-700 transition-colors p-2 rounded-full"
              >
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a
                href="#"
                className="bg-zinc-800 hover:bg-sky-700 transition-colors p-2 rounded-full"
              >
                <Twitter className="h-5 w-5 text-white" />
              </a>
              <a
                href="#"
                className="bg-zinc-800 hover:bg-sky-700 transition-colors p-2 rounded-full"
              >
                <Youtube className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-sky-700 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-sky-700 transition-colors"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-sky-700 transition-colors"
                >
                  Categories
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-sky-700 transition-colors"
                >
                  Deals
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-sky-700 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-sky-700 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Customer Service
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-sky-700 transition-colors"
                >
                  My Account
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-sky-700 transition-colors"
                >
                  Track Order
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-sky-700 transition-colors"
                >
                  Wishlist
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-sky-700 transition-colors"
                >
                  Customer Support
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-sky-700 transition-colors"
                >
                  Returns & Refunds
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-sky-700 transition-colors"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-sky-700 mt-0.5" />
                <span className="text-gray-300">
                  123 Tech Street, Digital City
                  <br />
                  CA 92123, USA
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <PhoneCall className="h-5 w-5 text-sky-700" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-sky-700" />
                <span className="text-gray-300">support@nomify.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2023 nomify. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
