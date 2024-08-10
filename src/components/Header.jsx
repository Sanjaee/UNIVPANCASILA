import React, { useState, useEffect } from "react";
import axios from "axios";

const Header = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/beranda");
        setData(response.data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {/* Desktop */}
      <div
        id="main1"
        className={`bg-[#FF8ADE] lg:flex mt-16 w-full max-w-screen-2xl h-full custom-1200:h-[424px] custom-1000:h-[324px] justify-end px-10 hidden`}
      >
        <div className="flex flex-col z-20 custom-1200:mt-40 -mr-40 custom-1000:mt-20">
          <img src='/td1.png' alt="bg" loading="lazy" />
        </div>
        <div className="w-full max-w-[915px] h-full max-h-[516px] relative">
          <img className="object-cover" src={data.gambar_slider} loading="lazy" alt="bg" />
        </div>
      </div>

      {/* Mobile */}
      <div
        id="main1"
        className={`bg-[#FF8ADE] lg:hidden mt-14 w-full max-w-screen-2xl  custom-500:h-[220px] custom-400:h-[150px] custom-300:h-[130px]  justify-end px-4 flex`}
      >
        <div className="flex flex-col z-20  -mr-40 mt-5">
          <img src="/td1.png" loading="lazy" alt="bg" />
        </div>
        <div className="w-[915px] h-[516px] relative">
          <img className="object-cover " loading="lazy" src={data.gambar_slider} alt="bg" />
        </div>
      </div>
    </>
  );
};

export default Header;
