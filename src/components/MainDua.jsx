import React from "react";

const MainDua = () => {
  return (
    <div className="flex items-center max-w-screen-2xl justify-center w-full h-[658px] bg-[#f2a2dc]">
      <div className="flex items-start justify-center px-10 gap-14">
        {/* Gambar Pertama */}
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center">
            <div className="w-[507px] h-[290px] flex items-center justify-center bg-white  rounded-xl custom-1000:w-[407px] custom-1000:h-[290px] custom-1000:px-6 custom-1000:py-2">
              <img
                className="w-full h-full object-cover px-1 py-3 "
                src="./main21.png"
                alt="Digital Mobile Adventure"
              />
            </div>
          </div>
          <div className="text-xl font-bold mt-5 w-[390px]  text-center">
            <p>Digital Mobile Adventure</p>
          </div>
        </div>

        {/* Gambar Kedua */}
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center">
            <div className="w-[507px] h-[290px] flex items-center justify-center bg-white rounded-xl custom-1000:w-[407px] custom-1000:h-[290px] custom-1000:px-6 custom-1000:py-2">
              <img
                className="w-full h-full object-cover px-1 py-3 "
                src="./main22.png"
                alt="Program Wirausaha Muda Pemula KEMENPORA tahun 2022"
              />
            </div>
          </div>
          <div className="text-xl font-bold mt-5 w-[390px] text-center">
            <p>Program Wirausaha Muda Pemula KEMENPORA tahun 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDua;
