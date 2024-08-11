import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import axios from "axios";

const MainDua = () => {
  const [data, setData] = useState(null); // Use null as the initial state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/galeri");
        setData(response.data[0]); // Assuming the response is an array
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return (
      <>
        {/* Skeleton for Desktop */}
        <div className="background-2 max-w-screen-2xl lg:flex hidden"></div>
        <div className="items-center max-w-screen-2xl justify-center w-full h-[658px] bg-white lg:flex hidden">
          <div className="flex items-start justify-center px-10 gap-14 text-white">
            <div className="flex flex-col items-center justify-center bg-[#DBA3D9] w-1/2 p-8 max-w-[540px] rounded-[32px] animate-pulse">
              <div className="h-20 w-full bg-gray-300 rounded mb-4"></div>
              <div className="object-cover w-full max-w-[468px] h-[268px] bg-gray-300"></div>
            </div>
            <div className="flex flex-col items-center justify-center bg-[#DBA3D9] w-1/2 p-8 max-w-[540px] rounded-[32px] animate-pulse">
              <div className="h-20 w-full bg-gray-300 rounded mb-4"></div>
              <div className="object-cover w-full max-w-[468px] h-[268px] bg-gray-300"></div>
            </div>
          </div>
        </div>

        {/* Skeleton for Mobile */}
        <div className="background-2-mobile max-w-screen-2xl lg:hidden flex"></div>
        <div className="items-center justify-center w-full mt-12 mb-14 bg-white lg:hidden flex">
          <div className="flex flex-col items-start justify-center px-10 gap-14 text-white">
            <div className="flex flex-col items-center justify-center bg-[#DBA3D9] w-full p-5 max-w-[540px] rounded-[32px] animate-pulse">
              <div className="h-10 w-full bg-gray-300 rounded mb-3"></div>
              <div className="object-cover w-full custom-300:h-[140px] custom-500:h-[250px] bg-gray-300"></div>
            </div>
            <div className="flex flex-col items-center justify-center bg-[#DBA3D9] w-full p-5 max-w-[540px] rounded-[32px] animate-pulse">
              <div className="h-10 w-full bg-gray-300 rounded mb-3"></div>
              <div className="object-cover w-full custom-300:h-[140px] custom-500:h-[250px] bg-gray-300"></div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <div className="background-2 max-w-screen-2xl lg:flex hidden"></div>
      <div className="items-center max-w-screen-2xl justify-center w-full h-[658px] bg-white lg:flex hidden">
        <div className="flex items-start justify-center px-10 gap-14 text-white">
          <div className="flex flex-col items-center justify-center bg-[#DBA3D9] w-1/2 p-8 max-w-[540px] rounded-[32px]">
            <p className="text-[20px] text-center h-20 font-bold line-clamp-2">
              {data.title_galeri_1}
            </p>
            <img
              className="object-cover w-full max-w-[468px] h-[268px]"
              src={data.gambar_url_galeri_1}
              alt="bg"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col items-center justify-center bg-[#DBA3D9] w-1/2 p-8 max-w-[540px] rounded-[32px]">
            <p className="text-[20px] text-center h-20 font-bold line-clamp-2">
              {data.title_galeri_2}
            </p>
            <img
              className="object-cover w-full max-w-[468px] h-[268px]"
              src={data.gambar_url_galeri_2}
              alt="bg"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="background-2-mobile max-w-screen-2xl lg:hidden flex"></div>
      <div className="items-center justify-center w-full mt-12 mb-14 bg-white lg:hidden flex">
        <div className="flex flex-col items-start justify-center px-10 gap-14 text-white">
          <div className="flex flex-col items-center justify-center bg-[#DBA3D9] w-full p-5 max-w-[540px] rounded-[32px]">
            <p className="text-[14px] text-center font-bold line-clamp-2">
              {data.title_galeri_1}
            </p>
            <img
              className="object-cover w-full custom-300:h-[140px] custom-500:h-[250px] mt-3"
              src={data.gambar_url_galeri_1}
              alt="bg"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col items-center justify-center bg-[#DBA3D9] w-full p-5 max-w-[540px] rounded-[32px]">
            <p className="text-[14px] text-center font-bold line-clamp-2">
              {data.title_galeri_2}
            </p>
            <img
              className="object-cover w-full custom-300:h-[140px] custom-500:h-[250px] mt-3"
              src={data.gambar_url_galeri_2}
              alt="bg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MainDua;
