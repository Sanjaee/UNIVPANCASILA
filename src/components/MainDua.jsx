import React from "react";

const MainDua = () => {
  return (
    <div className="w-full h-[658px] bg-[#f2a2dc] grid grid-cols-2">
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center">
          <div className="custom-1200:w-[589px] flex items-center justify-center  custom-1000:w-[489px]  h-[345px] bg-white custom-1200:px-9 custom-1000:px-6 custom-1200:py-6 custom-1000:py-3 rounded-xl">
            <img className="w-full" src="./main21.png" alt="" />
          </div>
        </div>
        <p className="text-xl font-bold mt-5">Digital Mobile Adventure</p>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center">
          <div className="custom-1200:w-[589px] flex items-center justify-center  custom-1000:w-[489px]  h-[345px] bg-white custom-1200:px-9 custom-1000:px-6 custom-1200:py-6 custom-1000:py-3 rounded-xl">
            <img className="w-full" src="./main22.png" alt="" />
          </div>
        </div>
        <p className="text-xl font-bold mt-5 text-center px-7">
          Program Wirausaha Muda Pemula KEMENPORA tahun 2022
        </p>
      </div>
    </div>
  );
};

export default MainDua;
