import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import MainDua from "./MainDua";

const Main = () => {
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
        id="main2"
        style={{
          backgroundImage: `url(${data.background_image_desktop})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "883px",
          width: "693px",
        }}
        className="relative hidden mt-[500px] mb-[500px] w-full max-w-screen-2xl lg:flex flex-col justify-center items-center"
      >
        <Link
          to="/berita"
          className="custom-1200:w-[507px] custom-1000:w-[400px] absolute custom-1200:-top-32 custom-1000:-top-20 custom-1200:-left-60 custom-1000:-left-32"
        >
          <img
            className="object-cover rounded-3xl custom-1200:w-[507px] custom-1000:w-[400px]"
            src={data.gambar_berita_satu}
            alt="bg"
          />
          <p className="mt-5 font-semibold text-[#000000] text-[15px]">
            {data.title_berita_satu}
          </p>
          <p className={`mt-2 text-[#FF35C7] font-semibold text-[15px]`}>
            {data.deskripsi_berita_satu}
          </p>
        </Link>
        <Link to="/berita" className="custom-1200:w-[507px] custom-1000:w-[400px] absolute custom-1200:top-[200px] custom-1000:top-[220px] custom-1200:-right-60 custom-1000:-right-32">
          <img
            className="object-cover rounded-3xl custom-1000:w-[400px] custom-1200:w-[507px]"
            src={data.gambar_berita_dua}
            alt="bg"
          />
          <p className="mt-5 font-semibold text-[#000000] text-[15px]">
            {data.title_berita_dua}
          </p>
          <p className={`mt-2 text-[#FF35C7] font-semibold text-[15px]`}>
            {data.deskripsi_berita_dua}
          </p>
        </Link>
        <Link to="/berita" className="custom-1200:w-[507px] custom-1000:w-[400px] absolute top-[550px] custom-1200:-left-60 custom-1000:-left-32">
          <img
            className="object-cover rounded-3xl custom-1000:w-[400px] custom-1200:w-[507px]"
            src={data.gambar_berita_tiga}
            alt="bg"
          />
          <p className="mt-5 font-semibold text-[#000000] text-[15px]">
            {data.title_berita_tiga}
          </p>
          <p className={`mt-2 text-[#FF35C7] font-semibold text-[15px]`}>
            {data.deskripsi_berita_tiga}
          </p>
        </Link>
        <Link to="/berita" className="custom-1200:w-[507px] custom-1000:w-[400px] absolute top-[890px] custom-1200:-right-60 custom-1000:-right-32">
          <img
            className="object-cover rounded-3xl custom-1000:w-[400px] custom-1200:w-[507px]"
            src={data.gambar_berita_empat}
            alt="bg"
          />
          <p className="mt-5 font-semibold text-[#000000] text-[15px]">
            {data.title_berita_empat}
          </p>
          <p className={`mt-2 text-[#FF35C7] font-semibold text-[15px]`}>
            {data.deskripsi_berita_empat}
          </p>
        </Link>
      </div>

      {/* Mobile */}
      <div
        
        style={{
          backgroundImage: `url(${data.background_image_mobile})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "1200px",
          width: "100%",
        }}
        className="relative  flex custom-500:mt-[250px] custom-300:mt-[140px] mb-[400px] w-full max-w-screen-2xl lg:hidden flex-col justify-center items-center"
      >
        <Link
        
          to="/berita"
          className="bg-white rounded px-10 w-full max-w-[500px]  absolute top-0"
        >
          <img
            className="w-full h-[200px]  object-cover rounded-xl"
            src={data.gambar_berita_satu}
            alt="bg"
          />
          <p className="mt-5 font-semibold text-[#000000] text-[15px]">
            {data.title_berita_satu}
          </p>
          <p className={`mt-2 text-[#FF35C7] font-semibold text-[15px]`}>
            {data.deskripsi_berita_satu}
          </p>
        </Link>

        <Link
          to="/berita"
          className="bg-white rounded px-10  absolute top-[400px] w-full max-w-[500px]"
        >
          <img
            className="w-full h-[200px]  object-cover rounded-xl"
            src={data.gambar_berita_dua}
            alt="bg"
          />
          <p className="mt-5 font-semibold text-[#000000] text-[15px]">
            {data.title_berita_dua}
          </p>
          <p className={`mt-2 text-[#FF35C7] font-semibold text-[15px]`}>
            {data.deskripsi_berita_dua}
          </p>
        </Link>

        <Link
          to="/berita"
          className="bg-white rounded px-10  absolute top-[800px] w-full max-w-[500px]"
        >
          <img
            className="w-full h-[200px]  object-cover rounded-xl"
            src={data.gambar_berita_tiga}
            alt="bg"
          />
          <p className="mt-5 font-semibold text-[#000000] text-[15px]">
            {data.title_berita_tiga}
          </p>
          <p className={`mt-2 text-[#FF35C7] font-semibold text-[15px]`}>
            {data.deskripsi_berita_tiga}
          </p>
        </Link>

        <Link
        
          to="/berita"
          className="bg-white rounded px-10  absolute top-[1200px] w-full max-w-[500px]"
        >
          <img
            className="w-full h-[200px]  object-cover rounded-xl"
            src={data.gambar_berita_empat}
            alt="bg"
          />
          <p className="mt-5 font-semibold text-[#000000] text-[15px]">
            {data.title_berita_empat}
          </p>
          <p className={`mt-2 text-[#FF35C7] font-semibold text-[15px]`}>
            {data.deskripsi_berita_empat}
          </p>
        </Link>
      </div>
      <MainDua data={data} />
    </>
  );
};

export default Main;
