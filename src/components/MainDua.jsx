import React from "react";
import Footer from "./Footer";

const MainDua = ({ data }) => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${data.galery_baner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "128px",
          width: "100%",
        }}
        className="background-2 max-w-screen-2xl lg:flex hidden"
      ></div>
      <div className="items-center max-w-screen-2xl justify-center w-full h-[658px] bg-white lg:flex hidden">
        <div
        
          className="flex items-start justify-center px-10 gap-14 text-white"
        >
          <div className="flex flex-col items-center justify-center bg-[#DBA3D9] w-1/2 p-8 max-w-[540px] rounded-[32px]">
            <p className="text-[20px] text-center h-20 font-bold line-clamp-2">
              {data.galert_title_satu}
            </p>
            <img
              className="object-cover w-full max-w-[468px] h-[268px]"
              src={data.gambar_galery_satu}
              alt="bg"
            />
          </div>
          <div className="flex flex-col items-center justify-center bg-[#DBA3D9] w-1/2 p-8 max-w-[540px] rounded-[32px]">
            <p className="text-[20px] text-center h-20 font-bold line-clamp-2">
              {data.galert_title_dua}
            </p>
            <img
              className="object-cover w-full max-w-[468px] h-[268px]"
              src={data.gambar_galery_dua}
              alt="bg"
            />
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url(${data.galery_baner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50px",
          width: "100%",
        }}
        className="background-2 max-w-screen-2xl lg:hidden flex"
      ></div>
      <div className="items-center  justify-center w-full mt-12 mb-14 bg-white lg:hidden flex">
        <div className="flex flex-col items-start justify-center px-10 gap-14 text-white">
          <div className="flex flex-col items-center justify-center bg-[#DBA3D9] w-full p-5 max-w-[540px] rounded-[32px]">
            <p className="text-[14px] text-center  font-bold line-clamp-2">
              {data.galert_title_satu}
            </p>
            <img
              className="object-cover w-full custom-300:h-[140px] custom-500:h-[250px] mt-3"
              src={data.gambar_galery_satu}
              alt="bg"
            />
          </div>
          <div className="flex flex-col items-center justify-center bg-[#DBA3D9] w-full p-5 max-w-[540px] rounded-[32px]">
            <p className="text-[14px] text-center font-bold line-clamp-2">
              {data.galert_title_dua}
            </p>
            <img
              className="object-cover w-full  custom-300:h-[140px] custom-500:h-[250px] mt-3"
              src={data.gambar_galery_dua}
              alt="bg"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MainDua;
