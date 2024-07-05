import React from "react";

const Header = () => {
  return (
    <div className="h-[600px] bg-[#ffffff]">
      <div className="bg-[#FF8ADE] h-[380px]  "></div>
      <div className="flex justify-end items-center -mt-80 px-10">
        <div className="flex flex-col relative z-10  text-white">
          <h1 className="text-6xl font-bold absolute -top-20 -left-56">
            UNIVERSITAS
          </h1>
          <h1 className="text-6xl absolute font-bold -top-5 -left-56">
            PANCASILA
          </h1>
          <div className="flex items-center absolute top-16 -left-16">
            <div className="flex items-center ">
              <img className=" h-[7px]" src="./garis.png" alt="" />
              <img src="./titik.png" alt="" />
            </div>
          </div>
        </div>

        <div className="relative">
          <img className="w-[750px]" src="slider.png" alt="" />
          <button className="bg-white border border-black absolute bottom-5 right-5  text-lg   text-black px-9 py-1 rounded-md">
            Daftar &#10095;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
