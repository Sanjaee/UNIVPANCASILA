import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
const LayoutMenuBhinneka = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isBhinnekaVisible, setIsBhinnekaVisible] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Check the pathname and set the active menu based on it
    if (location.pathname.startsWith("/lagu")) {
      setActiveMenu(7);
    } else if (location.pathname.startsWith("/tarian")) {
      setActiveMenu(8);
    } else if (location.pathname.startsWith("/tambang")) {
      setActiveMenu(9);
    } else if (location.pathname.startsWith("/satwa")) {
      setActiveMenu(10);
    } else {
      setActiveMenu(null);
      setIsBhinnekaVisible(false);
    }
  }, [location.pathname]);

  const handleButtonClick = (menuIndex) => {
    setActiveMenu(activeMenu === menuIndex ? null : menuIndex);
  };

  // BHINNEKA
  const toggleBHINNEKAVisibility = () => {
    setIsBhinnekaVisible(!isBhinnekaVisible);
  };
  return (
    <>
      <div className="flex items-center justify-center bg-[#FF8ADE] p-4 shadow-2xl">
        <button
          className="text-[20px] w-full font-bold text-white"
          onClick={toggleBHINNEKAVisibility}
        >
          Bhinneka Tunggal Ika
        </button>
      </div>
      <AnimatePresence>
        {isBhinnekaVisible && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-2"
          >
            {/* Lagu */}
            <div>
              <button
                className="w-full text-left py-3 px-6 bg-[#FF8ADE] text-white transition-colors"
                onClick={() => handleButtonClick(7)}
              >
                Lagu Daerah
              </button>
              <AnimatePresence>
                {activeMenu === 7 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-2 space-y-2 overflow-hidden"
                  >
                    <div className="flex flex-col bg-white">
                      <Link
                        className={`block py-2 px-4 ${
                          location.pathname === "/lagu-1"
                            ? "bg-[#FFCEF1]"
                            : "hover:bg-[#FFCEF1]"
                        } transition-colors`}
                        to="/lagu-1"
                      >
                        Kicir Kicir
                      </Link>
                      <Link
                        className={`block py-2 px-4 ${
                          location.pathname === "/lagu-2"
                            ? "bg-[#FFCEF1]"
                            : "hover:bg-[#FFCEF1]"
                        } transition-colors`}
                        to="/lagu-2"
                      >
                        Cublak Cublak Suweng
                      </Link>
                      <Link
                        className={`block py-2 px-4 ${
                          location.pathname === "/lagu-3"
                            ? "bg-[#FFCEF1]"
                            : "hover:bg-[#FFCEF1]"
                        } transition-colors`}
                        to="/lagu-3"
                      >
                        Anging Mammirik
                      </Link>
                      <Link
                        className={`block py-2 px-4 ${
                          location.pathname === "/lagu-4"
                            ? "bg-[#FFCEF1]"
                            : "hover:bg-[#FFCEF1]"
                        } transition-colors`}
                        to="/lagu-4"
                      >
                        Yamko Rambe Yamko
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Tarian */}
            <div>
              <button
                className="w-full text-left py-3 px-6 bg-[#FF8ADE] text-white line-clamp-1 whitespace-nowrap transition-colors"
                onClick={() => handleButtonClick(8)}
              >
                Tarian Tradisional
              </button>
              <AnimatePresence>
                {activeMenu === 8 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-2 space-y-2 overflow-hidden"
                  >
                    <div className="flex flex-col bg-white">
                      <Link
                        className={`block py-2 px-4 ${
                          location.pathname === "/tarian-1"
                            ? "bg-[#FFCEF1]"
                            : "hover:bg-[#FFCEF1]"
                        } transition-colors`}
                        to="/tarian-1"
                      >
                        Bedaya Ketawang
                      </Link>
                      <Link
                        className={`block py-2 px-4 ${
                          location.pathname === "/tarian-2"
                            ? "bg-[#FFCEF1]"
                            : "hover:bg-[#FFCEF1]"
                        } transition-colors`}
                        to="/tarian-2"
                      >
                        Jaipongan
                      </Link>
                      <Link
                        className={`block py-2 px-4 ${
                          location.pathname === "/tarian-3"
                            ? "bg-[#FFCEF1]"
                            : "hover:bg-[#FFCEF1]"
                        } transition-colors`}
                        to="/tarian-3"
                      >
                        Kecak
                      </Link>
                      <Link
                        className={`block py-2 px-4 ${
                          location.pathname === "/tarian-4"
                            ? "bg-[#FFCEF1]"
                            : "hover:bg-[#FFCEF1]"
                        } transition-colors`}
                        to="/tarian-4"
                      >
                        Kipas Pakarena
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Hasil Tambang */}
            <div>
              <button
                className="w-full text-left py-3 px-6 bg-[#FF8ADE] text-white line-clamp-1 whitespace-nowrap transition-colors"
                onClick={() => handleButtonClick(9)}
              >
                Hasil Tambang
              </button>
              <AnimatePresence>
                {activeMenu === 9 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-2 space-y-2 overflow-hidden"
                  >
                    <div className="flex flex-col bg-white">
                      <Link
                        className={`block py-2 px-4 ${
                          location.pathname === "/tambang-1"
                            ? "bg-[#FFCEF1]"
                            : "hover:bg-[#FFCEF1]"
                        } transition-colors`}
                        to="/tambang-1"
                      >
                        Tambang Emas
                      </Link>
                      <Link
                        className={`block py-2 px-4 ${
                          location.pathname === "/tambang-2"
                            ? "bg-[#FFCEF1]"
                            : "hover:bg-[#FFCEF1]"
                        } transition-colors`}
                        to="/tambang-2"
                      >
                        Tambang Nikel
                      </Link>
                      <Link
                        className={`block py-2 px-4 ${
                          location.pathname === "/tambang-3"
                            ? "bg-[#FFCEF1]"
                            : "hover:bg-[#FFCEF1]"
                        } transition-colors`}
                        to="/tambang-3"
                      >
                        Tambang Timah
                      </Link>
                      <Link
                        className={`block py-2 px-4 ${
                          location.pathname === "/tambang-4"
                            ? "bg-[#FFCEF1]"
                            : "hover:bg-[#FFCEF1]"
                        } transition-colors`}
                        to="/tambang-4"
                      >
                        Tambang Besi
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Sila Ke-4 */}
            <div>
              <button
                className="w-full text-left py-3 px-6 bg-[#FF8ADE] text-white line-clamp-1 whitespace-nowrap transition-colors"
                onClick={() => handleButtonClick(10)}
              >
                Satwa & Puspa
              </button>
              <AnimatePresence>
                {activeMenu === 10 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-2 space-y-2 overflow-hidden"
                  >
                    <div className="flex flex-col bg-white">
                      <Link
                        className={`block py-2 px-4 ${
                          location.pathname === "/satwa-1"
                            ? "bg-[#FFCEF1]"
                            : "hover:bg-[#FFCEF1]"
                        } transition-colors`}
                        to="/satwa-1"
                      >
                        Anoa
                      </Link>
                      <Link
                        className={`block py-2 px-4 ${
                          location.pathname === "/satwa-2"
                            ? "bg-[#FFCEF1]"
                            : "hover:bg-[#FFCEF1]"
                        } transition-colors`}
                        to="/satwa-2"
                      >
                        Orang Utan
                      </Link>
                      <Link
                        className={`block py-2 px-4 ${
                          location.pathname === "/satwa-3"
                            ? "bg-[#FFCEF1]"
                            : "hover:bg-[#FFCEF1]"
                        } transition-colors`}
                        to="/satwa-3"
                      >
                        Anggrek
                      </Link>
                      <Link
                        className={`block py-2 px-4 ${
                          location.pathname === "/satwa-4"
                            ? "bg-[#FFCEF1]"
                            : "hover:bg-[#FFCEF1]"
                        } transition-colors`}
                        to="/satwa-4"
                      >
                        Rafflesia Arnoldi
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LayoutMenuBhinneka;
