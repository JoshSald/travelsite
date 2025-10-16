// Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo / Brand */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">TravelSite</h2>
          <p className="text-gray-400">
            Explore the world with us. Find the best deals on flights, hotels,
            and attractions.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="font-semibold text-white mb-3">Explore</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/hotels" className="hover:text-white transition">
                Hotels
              </Link>
            </li>
            <li>
              <Link to="/flights" className="hover:text-white transition">
                Flights
              </Link>
            </li>
            <li>
              <Link to="/attractions" className="hover:text-white transition">
                Attractions
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources / Links */}
        <div>
          <h3 className="font-semibold text-white mb-3">Resources</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white transition">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.59-2.46.69a4.3 4.3 0 001.88-2.37 8.59 8.59 0 01-2.72 1.04 4.28 4.28 0 00-7.3 3.9 12.14 12.14 0 01-8.8-4.46 4.28 4.28 0 001.33 5.71 4.26 4.26 0 01-1.94-.54v.05a4.28 4.28 0 003.43 4.2 4.28 4.28 0 01-1.93.07 4.28 4.28 0 003.99 2.97 8.57 8.57 0 01-5.3 1.83c-.34 0-.67-.02-1-.06a12.1 12.1 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19-.01-.37-.02-.56A8.7 8.7 0 0024 4.56a8.44 8.44 0 01-2.54.7z" />
              </svg>
            </a>
            <a href="#" className="hover:text-white transition">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.4 2.88 8.13 6.84 9.44v-6.66H8.05v-2.78h2.83v-2.12c0-2.8 1.68-4.35 4.24-4.35 1.23 0 2.52.22 2.52.22v2.77h-1.42c-1.4 0-1.83.87-1.83 1.76v2.01h3.12l-.5 2.78h-2.62v6.66c3.96-1.31 6.84-5.04 6.84-9.44 0-5.5-4.46-9.96-9.96-9.96z" />
              </svg>
            </a>
            <a href="#" className="hover:text-white transition">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0zm-6.16 7.06c0-.77-.03-1.75-.67-2.37-.66-.64-1.58-.67-1.98-.67s-1.32.03-1.98.67c-.64.62-.67 1.6-.67 2.37 0 .77.03 1.75.67 2.37.66.64 1.58.67 1.98.67s1.32-.03 1.98-.67c.64-.62.67-1.6.67-2.37zM12 8.91c-2.56 0-4.64 2.08-4.64 4.64S9.44 18.2 12 18.2s4.64-2.08 4.64-4.64S14.56 8.91 12 8.91zm7.35-1.36c-.14-.33-.54-.57-.88-.57-.34 0-.74.24-.88.57-.2.46-.33 1.06-.33 1.93s.13 1.47.33 1.93c.14.33.54.57.88.57.34 0 .74-.24.88-.57.2-.46.33-1.06.33-1.93s-.13-1.47-.33-1.93z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} TravelSite. All rights reserved.
      </div>
    </footer>
  );
}
