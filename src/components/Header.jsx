import React from "react";

const Header = () => {
  return (
    <div className="bg-[#FF8ADE] lg:flex mt-16 w-full  max-w-screen-2xl h-full custom-1200:h-[424px] custom-1000:h-[324px]  justify-end px-10 hidden">
      <div className="flex flex-col z-20 custom-1200:mt-40  -mr-40 custom-1000:mt-20">
        <img src="./td1.png" alt="" />
      </div>
      <div className=" w-full max-w-[915px] h-full max-h-[516px] bg-slate-200  relative">
        <img className="object-cover" src="./tdslider.png" alt="" />
        <a
          className="absolute custom-1200:-bottom-16 custom-1200:right-10 custom-1100:-bottom-20 custom-1100:right-5 custom-1000:-bottom-10 custom-1000:right-5  custom-1200:px-10 custom-1200:py-2 custom-1000:px-5 custom-1000:py-1 custom-1200:text-[25px] custom-1000:text-[20px] border border-black rounded-lg  bg-white "
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Daftar &#10095;
        </a>
      </div>
    </div>
  );
};

export default Header;
