import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const LayoutMenuSila = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isSilaVisible, setIsSilaVisible] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Check the pathname and set the active menu based on it
    if (location.pathname.startsWith("/detail-satu")) {
      setActiveMenu(0);
    } else if (location.pathname.startsWith("/detail-dua")) {
      setActiveMenu(1);
    } else if (location.pathname.startsWith("/detail-tiga")) {
      setActiveMenu(2);
    } else if (location.pathname.startsWith("/detail-empat")) {
      setActiveMenu(3);
    } else if (location.pathname.startsWith("/detail-lima")) {
      setActiveMenu(4);
    } else {
      setActiveMenu(null);
      setIsSilaVisible(false);
    }
  }, [location.pathname]);

  const handleButtonClick = (menuIndex) => {
    setActiveMenu(activeMenu === menuIndex ? null : menuIndex);
  };

  // Sila
  const toggleSilaVisibility = () => {
    setIsSilaVisible(!isSilaVisible);
  };

  return (
    <>
      <div className="flex items-center justify-center bg-[#FF8ADE] p-3 custom-1000:mt-2 custom-1200:mt-8 shadow-2xl">
        <button
          className="text-[20px] w-full font-bold text-white"
          onClick={toggleSilaVisibility}
        >
          Pancasila
        </button>
      </div>
      <AnimatePresence>
        {isSilaVisible && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-2"
          >
            {/* Sila Ke-1 */}
            <div>
              <button
                className="w-full text-left py-3 px-6 bg-[#FF8ADE] text-white transition-colors"
                onClick={() => handleButtonClick(0)}
              >
                Sila Ke-1: Ketuhanan Yang Maha Esa
              </button>
              <AnimatePresence>
                {activeMenu === 0 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-2 space-y-2 overflow-hidden"
                  >
                    <div className="flex flex-col bg-white">
                      <Link
                        className={`block py-2 px-4 ${
                          location.pathname === "/detail-satu-1"
                            ? "bg-[#FFCEF1]"
                            : "hover:bg-[#FFCEF1]"
                        } transition-colors`}
                        to="/detail-satu-1"
                      >
                        Menghormati Antar Agama
                      </Link>
                      <Link
                        className={`block py-2 px-4 ${
                          location.pathname === "/detail-satu-2"
                            ? "bg-[#FFCEF1]"
                            : "hover:bg-[#FFCEF1]"
                        } transition-colors`}
                        to="/detail-satu-2"
                      >
                        Tidak Paksakan Kepercayaan
                      </Link>
                      <Link
                        className={`block py-2 px-4 ${
                          location.pathname === "/detail-satu-3"
                            ? "bg-[#FFCEF1]"
                            : "hover:bg-[#FFCEF1]"
                        } transition-colors`}
                        to="/detail-satu-3"
                      >
                        Taat Beribadah
                      </Link>
                      <Link
                        className={`block py-2 px-4 ${
                          location.pathname === "/detail-satu-4"
                            ? "bg-[#FFCEF1]"
                            : "hover:bg-[#FFCEF1]"
                        } transition-colors`}
                        to="/detail-satu-4"
                      >
                        Hidup Sederhana
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Sila Ke-2 */}
            <div>
              <button
                className="w-full text-left py-3 px-6 bg-[#FF8ADE] text-white line-clamp-1 whitespace-nowrap transition-colors"
                onClick={() => handleButtonClick(1)}
              >
                Sila Ke-2: Kemanusiaan yang Adil dan Beradab
              </button>
              <AnimatePresence>
                {activeMenu === 1 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-2 space-y-2 overflow-hidden"
                  >
                    <div className="flex flex-col bg-white">
                      <Link
                        className={`block py-2 px-4 ${
                          location.pathname === "/detail-dua-1"
                            ? "bg-[#FFCEF1]"
                            : "hover:bg-[#FFCEF1]"
                        } transition-colors`}
                        to="/detail-dua-1"
                      >
                        Menjunjung Tinggi Nilai Kemanusiaan
                      </Link>
                      <Link
                        className={`block py-2 px-4 ${
                          location.pathname === "/detail-dua-2"
                            ? "bg-[#FFCEF1]"
                            : "hover:bg-[#FFCEF1]"
                        } transition-colors`}
                        to="/detail-dua-2"
                      >
                        Gemar Melakukan Kegiatan Kemanusiaan
                      </Link>
                      <Link
                        className={`block py-2 px-4 ${
                          location.pathname === "/detail-dua-3"
                            ? "bg-[#FFCEF1]"
                            : "hover:bg-[#FFCEF1]"
                        } transition-colors`}
                        to="/detail-dua-3"
                      >
                        Tenggang Rasa dan Tepa Selira
                      </Link>
                      <Link
                        className={`block py-2 px-4 ${
                          location.pathname === "/detail-dua-4"
                            ? "bg-[#FFCEF1]"
                            : "hover:bg-[#FFCEF1]"
                        } transition-colors`}
                        to="/detail-dua-4"
                      >
                        Saling Tolong Menolong
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Sila Ke-3 */}
            <div>
              <button
                className="w-full text-left py-3 px-6 bg-[#FF8ADE] text-white line-clamp-1 whitespace-nowrap transition-colors"
                onClick={() => handleButtonClick(2)}
              >
                Sila Ke-3: Persatuan Indonesia
              </button>
              <AnimatePresence>
                {activeMenu === 2 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-2 space-y-2 overflow-hidden"
                  >
                    <div className="flex flex-col bg-white">
                      <Link
                        className={`block py-2 px-4 ${
                          location.pathname === "/detail-tiga-1"
                            ? "bg-[#FFCEF1]"
                            : "hover:bg-[#FFCEF1]"
                        } transition-colors`}
                        to="/detail-tiga-1"
                      >
                        Cinta Tanah Air dan Bangsa
                      </Link>
                      <Link
                        className={`block py-2 px-4 ${
                          location.pathname === "/detail-tiga-2"
                            ? "bg-[#FFCEF1]"
                            : "hover:bg-[#FFCEF1]"
                        } transition-colors`}
                        to="/detail-tiga-2"
                      >
                        Bangga Sebagai Bangsa Indonesia
                      </Link>
                      <Link
                        className={`block py-2 px-4 ${
                          location.pathname === "/detail-tiga-3"
                            ? "bg-[#FFCEF1]"
                            : "hover:bg-[#FFCEF1]"
                        } transition-colors`}
                        to="/detail-tiga-3"
                      >
                        Berkorban untuk Bangsa dan Negara
                      </Link>
                      <Link
                        className={`block py-2 px-4 ${
                          location.pathname === "/detail-tiga-4"
                            ? "bg-[#FFCEF1]"
                            : "hover:bg-[#FFCEF1]"
                        } transition-colors`}
                        to="/detail-tiga-4"
                      >
                        Jaga Persatuan dan Kesatuan Bangsa
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
                onClick={() => handleButtonClick(3)}
              >
                Sila Ke-4: Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan
                dalam Permusyawaratan Perwakilan
              </button>
              <AnimatePresence>
                {activeMenu === 3 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-2 space-y-2 overflow-hidden"
                  >
                    <div className="flex flex-col bg-white">
                      <Link
                        className={`block py-2 px-4 ${
                          location.pathname === "/detail-empat-1"
                            ? "bg-[#FFCEF1]"
                            : "hover:bg-[#FFCEF1]"
                        } transition-colors`}
                        to="/detail-empat-1"
                      >
                        Hormati Hasil Musyawarah
                      </Link>
                      <Link
                        className={`block py-2 px-4 ${
                          location.pathname === "/detail-empat-2"
                            ? "bg-[#FFCEF1]"
                            : "hover:bg-[#FFCEF1]"
                        } transition-colors`}
                        to="/detail-empat-2"
                      >
                        Menjunjung Nilai Kebenaran
                      </Link>
                      <Link
                        className={`block py-2 px-4 ${
                          location.pathname === "/detail-empat-3"
                            ? "bg-[#FFCEF1]"
                            : "hover:bg-[#FFCEF1]"
                        } transition-colors`}
                        to="/detail-empat-3"
                      >
                        Musyawarah dan Mufakat
                      </Link>
                      <Link
                        className={`block py-2 px-4 ${
                          location.pathname === "/detail-empat-4"
                            ? "bg-[#FFCEF1]"
                            : "hover:bg-[#FFCEF1]"
                        } transition-colors`}
                        to="/detail-empat-4"
                      >
                        Tidak Paksakan Kehendak
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Sila Ke-5 */}
            <div>
              <button
                className="w-full text-left py-3 px-6 bg-[#FF8ADE] text-white line-clamp-1 whitespace-nowrap transition-colors"
                onClick={() => handleButtonClick(4)}
              >
                Sila Ke-5: Keadilan Sosial Bagi Seluruh Rakyat Indonesia
              </button>
              <AnimatePresence>
                {activeMenu === 4 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-2 space-y-2 overflow-hidden"
                  >
                    <div className="flex flex-col bg-white">
                      <Link
                        className={`block py-2 px-4 ${
                          location.pathname === "/detail-lima-1"
                            ? "bg-[#FFCEF1]"
                            : "hover:bg-[#FFCEF1]"
                        } transition-colors`}
                        to="/detail-lima-1"
                      >
                        Adil Terhadap Sesama
                      </Link>
                      <Link
                        className={`block py-2 px-4 ${
                          location.pathname === "/detail-lima-2"
                            ? "bg-[#FFCEF1]"
                            : "hover:bg-[#FFCEF1]"
                        } transition-colors`}
                        to="/detail-lima-2"
                      >
                        Hormati Hak Orang Lain
                      </Link>
                      <Link
                        className={`block py-2 px-4 ${
                          location.pathname === "/detail-lima-3"
                            ? "bg-[#FFCEF1]"
                            : "hover:bg-[#FFCEF1]"
                        } transition-colors`}
                        to="/detail-lima-3"
                      >
                        Seimbang Hak dan Kewajiban
                      </Link>
                      <Link
                        className={`block py-2 px-4 ${
                          location.pathname === "/detail-lima-4"
                            ? "bg-[#FFCEF1]"
                            : "hover:bg-[#FFCEF1]"
                        } transition-colors`}
                        to="/detail-lima-4"
                      >
                        Bekerja Keras
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

export default LayoutMenuSila;
