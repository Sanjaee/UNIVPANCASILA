import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import SearchComponent from "./SearchComponent";
import SearchComponentMobile from "./SearchComponentMobile";

const Navbar = () => {
  const [navbarData, setNavbarData] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fetchNavbarData = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/navbar");
        const data = await response.json();
        setNavbarData(data);
      } catch (error) {
        console.error("Failed to fetch navbar data:", error);
      }
    };

    fetchNavbarData();
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  if (!navbarData) {
    return null; // or a loading spinner
  }

  return (
    <>
      {/* Desktop */}
      <div
        className={`custom-1000:h-16 custom-1200:h-24 custom-1200:text-[20px] px-20 z-50 bg-[#FF8ADE] w-full lg:flex hidden justify-between items-center top-0 fixed`}
      >
        <div className="flex items-center">
          <img
            className="custom-1200:w-16 custom-1000:w-10"
            src={navbarData.logo_satu}
            alt="Logo"
          />
          <img
            className="custom-1200:w-40 custom-1000:w-40 ml-2"
            src={navbarData.logo_dua}
            alt="Logo Nama"
          />
        </div>

        <div className="flex items-center">
          <ul className="flex space-x-8 text-[#FFFFFF] custom-1200:text-[20px] custom-1000:text-sm font-semibold">
            <li>
              {location.pathname === "/" ? (
                <a
                  href="#main1"
                  className={`hover:text-[#121212] cursor-pointer`}
                >
                  Beranda
                </a>
              ) : (
                <Link
                  to="/#main1"
                  className={`hover:text-[#121212] cursor-pointer`}
                >
                  Beranda
                </Link>
              )}
            </li>
            <li className="relative">
              <button
                onClick={toggleDropdown}
                className={`hover:text-[#121212] cursor-pointer focus:outline-none`}
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
                          to="/konten-satu"
                          className={`block px-4 py-2 text-gray-800 hover:bg-[#FFCDF1] hover:text-[#FF8ADE] transition duration-200`}
                        >
                          {navbarData.text_conten_satu}
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/konten-dua"
                          className={`block px-4 py-2 text-gray-800 hover:bg-[#FFCDF1] hover:text-[#FF8ADE] transition duration-200`}
                        >
                          {navbarData.text_conten_dua}
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/konten-tiga"
                          className={`block px-4 py-2 text-gray-800 hover:bg-[#FFCDF1] hover:text-[#FF8ADE] transition duration-200`}
                        >
                          {navbarData.text_conten_tiga}
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/konten-empat"
                          className={`block px-4 py-2 text-gray-800 hover:bg-[#FFCDF1] hover:text-[#FF8ADE] transition duration-200`}
                        >
                          {navbarData.text_conten_empat}
                        </Link>
                      </li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
            <li>
              {location.pathname === "/" ? (
                <a
                  href="#main2"
                  className={`hover:text-[#121212] cursor-pointer`}
                >
                  Berita
                </a>
              ) : (
                <Link
                  to="/#main2"
                  className={`hover:text-[#121212] cursor-pointer`}
                >
                  Berita
                </Link>
              )}
            </li>
          </ul>
          <div className="ml-8">
            <SearchComponent />
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden flex justify-between items-center fixed top-0 h-14 z-50 bg-[#FF8ADE] w-full px-4">
        <div className="flex items-center">
          <img className="w-10" src={navbarData.logo_satu} alt="Logo" />
          <img
            className=" w-32 ml-2"
            src={navbarData.logo_dua}
            alt="Logo Nama"
          />
        </div>

        <div className="flex items-center">
          <button onClick={toggleSearch}>
            <img className="w-6 mr-2" src="./kcinput.png" alt="" />
          </button>
          <AnimatePresence>
            {isSearchOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed  top-14 left-0 py-2  bg-[#f173ce]  w-full  z-50"
              >
                <div className="px-4">
                  <button
                    className="text-white font-bold underline mb-5"
                    onClick={toggleSearch}
                  >
                    Batalkan Pencarian
                  </button>
                  <SearchComponentMobile />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <button onClick={toggleSidebar}>
            <img className="w-10" src="./hamburger.png" alt="" />
          </button>
          <AnimatePresence>
            {isSidebarOpen && (
              <>
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -100, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="fixed  top-0 left-0 h-full bg-[#FF8ADE] w-64 shadow-lg z-50"
                >
                  <div className="p-4">
                    <button
                      onClick={toggleSidebar}
                      className="text-white text-lg"
                    >
                      X
                    </button>

                    <ul className="mt-4">
                      <li>
                        {location.pathname === "/" ? (
                          <a
                            href="#main1"
                            className="block px-4 py-2 text-white hover:bg-[#FFCDF1] hover:text-[#FF8ADE] transition duration-200 w-full text-start"
                          >
                            Beranda
                          </a>
                        ) : (
                          <Link
                            to="/#main1"
                            className="block px-4 py-2 text-white hover:bg-[#FFCDF1] hover:text-[#FF8ADE] transition duration-200 w-full text-start"
                          >
                            Beranda
                          </Link>
                        )}
                      </li>
                      <li>
                        <button
                          onClick={toggleDropdown}
                          className="block px-4 py-2 text-white hover:bg-[#FFCDF1] hover:text-[#FF8ADE] transition duration-200 w-full text-start"
                        >
                          Konten
                        </button>
                        <AnimatePresence>
                          {isDropdownOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                            >
                              <ul className="py-2 ml-5 text-center">
                                <li>
                                  <Link
                                    to="/konten-satu"
                                    className="block px-4 py-2 text-white hover:bg-[#FFCDF1] hover:text-[#FF8ADE] transition duration-200 w-full text-start"
                                  >
                                    {navbarData.text_conten_satu}
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/konten-dua"
                                    className="block px-4 py-2 text-white hover:bg-[#FFCDF1] hover:text-[#FF8ADE] transition duration-200 w-full text-start"
                                  >
                                    {navbarData.text_conten_dua}
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/konten-tiga"
                                    className="block px-4 py-2 text-white hover:bg-[#FFCDF1] hover:text-[#FF8ADE] transition duration-200 w-full text-start"
                                  >
                                    {navbarData.text_conten_tiga}
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/konten-empat"
                                    className="block px-4 py-2 text-white hover:bg-[#FFCDF1] hover:text-[#FF8ADE] transition duration-200 w-full text-start"
                                  >
                                    {navbarData.text_conten_empat}
                                  </Link>
                                </li>
                              </ul>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </li>
                      <li>
                        {location.pathname === "/" ? (
                          <a
                            href="#main2"
                            className="block px-4 py-2 text-white hover:bg-[#FFCDF1] hover:text-[#FF8ADE] transition duration-200 w-full text-start"
                          >
                            Berita
                          </a>
                        ) : (
                          <Link
                            to="/#main2"
                            className="block px-4 py-2 text-white hover:bg-[#FFCDF1] hover:text-[#FF8ADE] transition duration-200 w-full text-start"
                          >
                            Berita
                          </Link>
                        )}
                      </li>
                    </ul>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="fixed inset-0 bg-black z-40"
                  onClick={toggleSidebar}
                />
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default Navbar;
