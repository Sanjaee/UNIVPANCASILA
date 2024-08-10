import LayoutMenuSila from "./AllLayoutMenu/LayoutMenuSila";
import LayoutMenuUud from "./AllLayoutMenu/LayoutMenuUud";
import LayoutMenuBhinneka from "./AllLayoutMenu/LayoutMenuBhinneka";
import LayoutMenuNkri from "./AllLayoutMenu/LayoutMenuNkri";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const LayoutMenu = ({ children }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <>
      {/* Desktop */}
      <div className="hidden sm:flex overflow-hidden">
        <div className="h-full w-80 text-sm fixed z-10 bg-[#FF8ADE] shadow-lg pt-16 pb-44  overflow-y-auto">
          {/* Sila */}
          <LayoutMenuSila />

          {/* UUD */}
          <LayoutMenuUud />

          {/* Bhinneka Tunggal Ika */}

          <LayoutMenuBhinneka />

          {/* NKRI */}

          <LayoutMenuNkri />
        </div>

        <div className="mt-24 overflow-y-auto">{children}</div>
      </div>

      {/* Mobile */}
      <div className="flex sm:hidden overflow-hidden">
        <AnimatePresence>
          {isDropdownOpen && (
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.1 }}
              className="h-full w-80 text-sm fixed z-10 bg-[#FF8ADE] shadow-lg pt-16 pb-44  overflow-y-auto"
            >
              {/* Sila */}
              <LayoutMenuSila />

              {/* UUD */}
              <LayoutMenuUud />

              {/* Bhinneka Tunggal Ika */}

              <LayoutMenuBhinneka />

              {/* NKRI */}

              <LayoutMenuNkri />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-24 overflow-y-auto">
          {children}
          <button
            onClick={toggleDropdown}
            className="fixed bottom-24 left-5 z-50 rounded-full bg-[#FF8ADE] p-3"
          >
            <img src="./hamburger.png" loading="lazy" alt="bg" />
          </button>
        </div>
      </div>
    </>
  );
};

export default LayoutMenu;
