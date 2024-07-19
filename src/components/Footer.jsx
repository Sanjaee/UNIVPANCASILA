import React from "react";

const Footer = ({ isFixed }) => {
  return (
    <>
      <div
        className={`lg:flex hidden z-50 ${isFixed} bottom-0 justify-center text-[20px]  text-white items-center h-[92px] sm:h-12 md:h-16 bg-[#FF8ADE] w-full`}
      >
        <p>© Copyright Cahaya Riset Teknologi 2024</p>
      </div>

      <div
        className={`lg:hidden flex z-50 ${isFixed} bottom-0 justify-center text-sm text-white items-center h-16 bg-[#FF8ADE] w-full`}
      >
        <p>© Copyright Cahaya Riset Teknologi 2024</p>
      </div>
    </>
  );
};

export default Footer;
