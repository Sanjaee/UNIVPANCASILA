import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const LayoutMenuUud = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const [isUUDVisible, setIsUUDVisible] = useState(true);

  const location = useLocation();

  useEffect(() => {
    // Check the pathname and set the active menu based on it
    if (location.pathname.startsWith("/detail-enam")) {
      setActiveMenu(5);
    } else if (location.pathname.startsWith("/detail-tujuh")) {
      setActiveMenu(6);
    } else {
      setActiveMenu(null);
      setIsUUDVisible(false);
    }
  }, [location.pathname]);

  const handleButtonClick = (menuIndex) => {
    setActiveMenu(activeMenu === menuIndex ? null : menuIndex);
  };

  // UUD
  const toggleUUDVisibility = () => {
    setIsUUDVisible(!isUUDVisible);
  };

  return (
    <>
      <div className="flex items-center justify-center bg-[#FF8ADE] p-3 shadow-2xl">
        <button
          className="text-[20px] w-full font-bold text-white"
          onClick={toggleUUDVisibility}
        >
          UUD
        </button>
      </div>
      <AnimatePresence>
        {isUUDVisible && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-2"
          >
            {/* UUD 1 */}
            <div>
              <button
                className="w-full text-left py-3 px-6 bg-[#FF8ADE] text-white transition-colors"
                onClick={() => handleButtonClick(5)}
              >
                Lembaga Negara
              </button>
              <AnimatePresence>
                {activeMenu === 5 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-2 space-y-2 overflow-hidden"
                  >
                    <div className="flex flex-col bg-white">
                      <Link
                        className={`block py-2 px-4 ${
                          location.pathname === "/detail-enam-1"
                            ? "bg-[#FFCEF1]"
                            : "hover:bg-[#FFCEF1]"
                        } transition-colors`}
                        to="/detail-enam-1"
                      >
                        BPK (Badan Pengawas Keuangan)
                      </Link>
                      <Link
                        className={`block py-2 px-4 ${
                          location.pathname === "/detail-enam-2"
                            ? "bg-[#FFCEF1]"
                            : "hover:bg-[#FFCEF1]"
                        } transition-colors`}
                        to="/detail-enam-2"
                      >
                        Mahkamah Konstitusi
                      </Link>
                      <Link
                        className={`block py-2 px-4 ${
                          location.pathname === "/detail-enam-3"
                            ? "bg-[#FFCEF1]"
                            : "hover:bg-[#FFCEF1]"
                        } transition-colors`}
                        to="/detail-enam-3"
                      >
                        Komisi Yudisial
                      </Link>
                      <Link
                        className={`block py-2 px-4 ${
                          location.pathname === "/detail-enam-4"
                            ? "bg-[#FFCEF1]"
                            : "hover:bg-[#FFCEF1]"
                        } transition-colors`}
                        to="/detail-enam-4"
                      >
                        MPR/DPR
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* UUD 2 */}
            <div>
              <button
                className="w-full text-left py-3 px-6 bg-[#FF8ADE] text-white line-clamp-1 whitespace-nowrap transition-colors"
                onClick={() => handleButtonClick(6)}
              >
                Bahasa Daerah
              </button>
              <AnimatePresence>
                {activeMenu === 6 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-2 space-y-2 overflow-hidden"
                  >
                    <div className="flex flex-col bg-white">
                      <Link
                        className={`block py-2 px-4 ${
                          location.pathname === "/detail-tujuh-1"
                            ? "bg-[#FFCEF1]"
                            : "hover:bg-[#FFCEF1]"
                        } transition-colors`}
                        to="/detail-tujuh-1"
                      >
                        Bahasa Keyeli
                      </Link>
                      <Link
                        className={`block py-2 px-4 ${
                          location.pathname === "/detail-tujuh-2"
                            ? "bg-[#FFCEF1]"
                            : "hover:bg-[#FFCEF1]"
                        } transition-colors`}
                        to="/detail-tujuh-2"
                      >
                        Bahasa Melayu
                      </Link>
                      <Link
                        className={`block py-2 px-4 ${
                          location.pathname === "/detail-tujuh-3"
                            ? "bg-[#FFCEF1]"
                            : "hover:bg-[#FFCEF1]"
                        } transition-colors`}
                        to="/detail-tujuh-3"
                      >
                        Bahasa Minang
                      </Link>
                      <Link
                        className={`block py-2 px-4 ${
                          location.pathname === "/detail-tujuh-4"
                            ? "bg-[#FFCEF1]"
                            : "hover:bg-[#FFCEF1]"
                        } transition-colors`}
                        to="/detail-tujuh-4"
                      >
                        Bahasa Bugis
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

export default LayoutMenuUud;
