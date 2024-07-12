import React from "react";
import Footer from "./Footer";

const MainDua = () => {
  return (
    <>
      <div className="background-2 max-w-screen-2xl lg:flex hidden"></div>
      <div className=" items-center max-w-screen-2xl justify-center w-full h-[658px] bg-white lg:flex hidden">
        <div className="flex items-start justify-center px-10 gap-14 text-white">
          {/* Gambar Pertama */}
          <div className="flex flex-col items-center justify-center bg-[#DBA3D9] w-1/2 p-8 max-w-[540px] rounded-[32px]">
            <p className="text-[20px] text-center h-20 font-bold line-clamp-2">
              Program Wirausaha
            </p>
            <img
              className="object-cover w-full max-w-[468px] h-[268px]"
              src="./main21.png"
              alt=""
            />
          </div>

          {/* Gambar Kedua */}
          <div className="flex flex-col items-center justify-center bg-[#DBA3D9] w-1/2 p-8 max-w-[540px] rounded-[32px] ">
            <p className="text-[20px] text-center h-20 font-bold line-clamp-2  ">
              Program Wirausaha Muda Pemula KEMENPORA tahun 2022 Program Program
            </p>
            <img
              className="object-cover  w-full max-w-[468px] h-[268px]"
              src="./main22.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MainDua;
