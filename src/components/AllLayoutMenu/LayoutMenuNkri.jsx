import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const LayoutMenuNkri = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isNkriVisible, setIsNkriVisible] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Check the pathname and set the active menu based on it
    if (location.pathname.startsWith("/detail-12")) {
      setActiveMenu(11);
    } else if (location.pathname.startsWith("/detail-13")) {
      setActiveMenu(12);
    } else {
      setActiveMenu(null);
      setIsNkriVisible(false);
    }
  }, [location.pathname]);

  const handleButtonClick = (menuIndex) => {
    setActiveMenu(activeMenu === menuIndex ? null : menuIndex);
  };

  const toggleNkriVisibility = () => {
    setIsNkriVisible(!isNkriVisible);
  };
  return (
    <>
      <div className="flex items-center justify-center bg-[#FF8ADE] p-4 shadow-2xl">
        <button
          className="text-[20px] w-full font-bold text-white"
          onClick={toggleNkriVisibility}
        >
          NKRI
        </button>
      </div>
      <AnimatePresence>
        {isNkriVisible && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-2"
          >
            {/* kuliner */}
            <div>
              <button
                className="w-full text-left py-3 px-6 bg-[#FF8ADE] text-white transition-colors"
                onClick={() => handleButtonClick(11)}
              >
                Kuliner
              </button>
              <AnimatePresence>
                {activeMenu === 11 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-2 space-y-2 overflow-hidden"
                  >
                    <div className="flex flex-col bg-white">
                      <Link
                        className={`block py-2 px-4 ${
                          location.pathname === "/detail-12-1"
                            ? "bg-[#FFCEF1]"
                            : "hover:bg-[#FFCEF1]"
                        } transition-colors`}
                        to="/detail-12-1"
                      >
                        Rendang
                      </Link>
                      <Link
                        className={`block py-2 px-4 ${
                          location.pathname === "/detail-12-2"
                            ? "bg-[#FFCEF1]"
                            : "hover:bg-[#FFCEF1]"
                        } transition-colors`}
                        to="/detail-12-2"
                      >
                        Karedok
                      </Link>
                      <Link
                        className={`block py-2 px-4 ${
                          location.pathname === "/detail-12-3"
                            ? "bg-[#FFCEF1]"
                            : "hover:bg-[#FFCEF1]"
                        } transition-colors`}
                        to="/detail-12-3"
                      >
                        Kerak Telor
                      </Link>
                      <Link
                        className={`block py-2 px-4 ${
                          location.pathname === "/detail-12-4"
                            ? "bg-[#FFCEF1]"
                            : "hover:bg-[#FFCEF1]"
                        } transition-colors`}
                        to="/detail-12-4"
                      >
                        Empal Gentong
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Tradisi Nias */}
            <div>
              <button
                className="w-full text-left py-3 px-6 bg-[#FF8ADE] text-white line-clamp-1 whitespace-nowrap transition-colors"
                onClick={() => handleButtonClick(12)}
              >
                Tarian Tradisional
              </button>
              <AnimatePresence>
                {activeMenu === 12 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-2 space-y-2 overflow-hidden"
                  >
                    <div className="flex flex-col bg-white">
                      <Link
                        className={`block py-2 px-4 ${
                          location.pathname === "/detail-13-1"
                            ? "bg-[#FFCEF1]"
                            : "hover:bg-[#FFCEF1]"
                        } transition-colors`}
                        to="/detail-13-1"
                      >
                        Fahombo Batu
                      </Link>
                      <Link
                        className={`block py-2 px-4 ${
                          location.pathname === "/detail-13-2"
                            ? "bg-[#FFCEF1]"
                            : "hover:bg-[#FFCEF1]"
                        } transition-colors`}
                        to="/detail-13-2"
                      >
                        Manafo
                      </Link>
                      <Link
                        className={`block py-2 px-4 ${
                          location.pathname === "/detail-13-3"
                            ? "bg-[#FFCEF1]"
                            : "hover:bg-[#FFCEF1]"
                        } transition-colors`}
                        to="/detail-13-3"
                      >
                        Famato Harimau
                      </Link>
                      <Link
                        className={`block py-2 px-4 ${
                          location.pathname === "/detail-13-4"
                            ? "bg-[#FFCEF1]"
                            : "hover:bg-[#FFCEF1]"
                        } transition-colors`}
                        to="/detail-13-4"
                      >
                        Ya’ahowu Festival
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

export default LayoutMenuNkri;
