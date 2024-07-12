import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import SearchComponent from "./SearchComponent";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="custom-1000:h-16   custom-1200:h-24 custom-1200:text-[20px] px-20  z-50 bg-[#FF8ADE] w-full lg:flex hidden justify-between items-center top-0 fixed">
      <div className="flex items-center">
        <img
          className="custom-1200:w-16 custom-1000:w-10"
          src="LOGO.png"
          alt="Logo"
        />
        <img
          className="custom-1200:w-40 custom-1000:w-40 ml-2"
          src="LOGONAMA.png"
          alt="Logo Nama"
        />
      </div>

      <div className="flex items-center">
        <ul className="flex space-x-8 text-[#FFFFFF] custom-1200:text-[20px] custom-1000:text-sm font-semibold">
          {location.pathname === "/" ? (
            <a href="#main1" className="hover:text-blue-500 cursor-pointer">
              Beranda
            </a>
          ) : (
            <Link to="/#main1" className="hover:text-blue-500 cursor-pointer">
              Beranda
            </Link>
          )}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="hover:text-blue-500 cursor-pointer focus:outline-none"
            >
              Konten
            </button>
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.1 }}
                  className="absolute -left-16 transform -translate-x-1/2 mt-2 w-48 bg-white rounded-md shadow-lg z-50"
                >
                  <ul className="py-2 text-center">
                    <li>
                      <Link
                        to="/pancasila"
                        className="block px-4 py-2 text-gray-800 hover:bg-[#FFCDF1] hover:text-[#FF8ADE] transition duration-200"
                      >
                        Pancasila
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/undang-undang-dasar-1945"
                        className="block px-4 py-2 text-gray-800 hover:bg-[#FFCDF1] hover:text-[#FF8ADE] transition duration-200"
                      >
                        UUD 1945
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/bti"
                        className="block px-4 py-2 text-gray-800 hover:bg-[#FFCDF1] hover:text-[#FF8ADE] transition duration-200"
                      >
                        Bhinneka Tunggal Ika
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/negara-kesatuan-republik-indonesia"
                        className="block px-4 py-2 text-gray-800 hover:bg-[#FFCDF1] hover:text-[#FF8ADE] transition duration-200"
                      >
                        NKRI
                      </Link>
                    </li>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {location.pathname === "/" ? (
            <a href="#main1" className="hover:text-blue-500 cursor-pointer">
              Berita
            </a>
          ) : (
            <Link to="/#main1" className="hover:text-blue-500 cursor-pointer">
              Berita
            </Link>
          )}
        </ul>
        <div className="ml-8">
          <SearchComponent />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
