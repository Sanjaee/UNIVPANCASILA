import React from "react";
import MainDua from "./MainDua";
import Footer from "./Footer";

const Main = () => {
  return (
    <>
      <div className="background-1 font-bold  flex-col flex justify-start items-center  ">
        <div className="grid grid-cols-2 mt-40 ">
          <div className="flex items-center justify-center">
            <img
              className="custom-1200:w-[507px] custom-1000:w-[407px]"
              src="./berita1.png"
              alt=""
            />
          </div>
          <div className="flex items-center justify-center  px-10">
            <p className="custom-1200:text-[20px] custom-1000:text-[14px] text-center text-[#000000]">
              Peluncuran Edugame Revolusioner: Universitas Pancasila Mendorong
              Pembelajaran Interaktif dan Inovatif
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 mt-48 ">
          <div className="flex items-center justify-center">
            <p className="custom-1200:text-[20px]  custom-1000:text-[14px] text-center px-10 text-[#000000]">
              Universitas Pancasila (UP) Melaksanakan Kegiatan Modul Kebhinekaan
              II Bersama dengan Seluruh Mahasiswa Inbound Program Pertukaran...
            </p>
          </div>
          <div className="flex items-center justify-center ">
            <img
              className="custom-1200:w-[507px] custom-1000:w-[407px]"
              src="./bgmain2.png"
              alt=""
            />
          </div>
        </div>

        <div className="grid grid-cols-2 mt-48 ">
          <div className="flex items-center justify-center">
            <img
              className="custom-1200:w-[507px] custom-1000:w-[407px]"
              src="./bgmain3.png"
              alt=""
            />
          </div>
          <div className="flex items-center justify-center ">
            <p className="custom-1200:text-[20px] px-10 custom-1000:text-[14px] text-center text-[#000000]">
              Pelepasan 140 Mahasiswa Program MSIB Batch VI & Pembekalan Studi
              Lanjut
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 mt-48 ">
          <div className="flex items-center justify-center">
            <p className="custom-1200:text-[20px] custom-1000:text-[14px] text-center text-[#000000]">
              Universitas Pancasila (UP) Melaksanakan Kegiatan Modul Kebhinekaan
              II Bersama dengan Seluruh Mahasiswa Inbound Program Pertukaran...
            </p>
          </div>
          <div className="flex items-center justify-center ">
            <img
              className="custom-1200:w-[507px] custom-1000:w-[407px]"
              src="./bgmain4.png"
              alt=""
            />
          </div>
        </div>

        <div className="w-full h-[419px] grid grid-cols-2  custom-1000:mt-[640px] custom-1200:mt-96 bg-black ">
          <div className="flex justify-center items-center">
            <h1 className="text-white text-7xl font-bold">Galery</h1>
          </div>
          <div className="parallelogram-container flex justify-center items-center">
            <img className="w-[376px]" src="./bggedung.png" alt="Gedung" />
          </div>
        </div>
      </div>
      <MainDua />
      <Footer />
    </>
  );
};

export default Main;
