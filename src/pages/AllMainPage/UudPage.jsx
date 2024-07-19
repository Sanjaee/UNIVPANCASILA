import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import Loading from "../../components/Loading";
import axios from "axios";

const UudPage = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/konten-dua");
        setData(response.data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 500); // Simulate loading time
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <Navbar />
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="mt-24 px-5 sm:px-10 lg:flex flex-col items-center justify-center text-[#000000] hidden "
      >
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className=" flex justify-center items-center mt-10"
        >
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="flex items-center justify-center min-w-[300px]"
          >
            <img
              src={data.image}
              className="max-h-[310.48px] w-full h-full max-w-[270.48px] object-cover "
              alt="logo"
            />
          </motion.div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="max-w-[866px] w-full sm:ml-10 mt-10 sm:mt-0"
          >
            <div>
              <h1 className="text-[40px] font-bold text-[#FF8ADE] ">
                {data.title}
              </h1>

              <p className="text-[17px] mt-7 text-[#000000] ">
                {data.deskripsi_satu}
              </p>

              <p className="mt-5 text-[17px] text-[#000000]">
                {data.deskripsi_dua}
              </p>
            </div>
          </motion.div>
        </motion.div>
        <div className="flex flex-col max-w-screen-2xl">
          <p className="mt-10 text-[17px]">
            {data.deskripsi_tiga}
          </p>
          <p className="mt-5 text-[17px]">
            {data.deskripsi_empat}
          </p>
        </div>
      </motion.div>

      {/* uud */}

      <div className="w-full  justify-center lg:flex flex-col items-center hidden px-10 py-20 text-[#FFFFFF]">
        {/* Lembaga Negara */}
        <div className="bg-[#DBA3D9] w-full rounded-3xl px-10 py-10 max-w-screen-2xl">
          <h1 className="text-[30px]  font-bold"> Lembaga Negara</h1>
          <div className="mx-10 mt-10">
            <div className="mt-10  flex  flex-col w-full">
              <Link
                className="shadow-lg  flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-enam-1"
              >
                <p className="text-[20px]">BPK (Badan Pengawas Keuangan)</p>
                <img className=" h-3" src="./arrow.png" alt="" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-enam-2"
              >
                <p className="text-[20px]">Mahkamah Konstitusi</p>
                <img className=" h-3" src="./arrow.png" alt="" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-enam-3"
              >
                <p className="text-[20px]">Komisi Yudisial</p>
                <img className=" h-3" src="./arrow.png" alt="" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-enam-4"
              >
                <p className="text-[20px]">MPR/DPR</p>
                <img className=" h-3" src="./arrow.png" alt="" />
              </Link>
            </div>
          </div>
        </div>

        {/*  Bahasa Daerah */}
        <div className="bg-[#DBA3D9] w-full rounded-3xl px-10 py-10 mt-5 max-w-screen-2xl">
          <h1 className="text-[30px]  font-bold"> Bahasa Daerah</h1>
          <div className="mx-10 mt-10">
            <div className="mt-10  flex  flex-col w-full">
              <Link
                className="shadow-lg  flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-tujuh-1"
              >
                <p className="text-[20px]">Bahasa Melayu</p>
                <img className=" h-3" src="./arrow.png" alt="" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-tujuh-2"
              >
                <p className="text-[20px]">Bahasa Keyeli</p>
                <img className=" h-3" src="./arrow.png" alt="" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-tujuh-3"
              >
                <p className="text-[20px]">Bahasa Minang</p>
                <img className=" h-3" src="./arrow.png" alt="" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-tujuh-4"
              >
                <p className="text-[20px]">Bahasa Bugis</p>
                <img className=" h-3" src="./arrow.png" alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>


      {/* mobile */}


      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="mt-24 px-5 sm:px-10 lg:hidden flex-col items-center justify-center text-[#000000] flex "
      >
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className=" flex flex-col justify-center items-center mt-10"
        >
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="flex items-center justify-center min-w-[300px]"
          >
            <img
              src={data.image}
              className="max-h-[310.48px] w-full h-full max-w-[270.48px] object-cover "
              alt="logo"
            />
          </motion.div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="max-w-[866px] w-full  mt-20 "
          >
            <div>
              <h1 className="text-[30px] font-bold text-[#FF8ADE] ">
                {data.title}
              </h1>

              <p className="text-[17px] mt-7 text-[#000000] ">
                {data.deskripsi_satu}
              </p>

              <p className="mt-5 text-[17px] text-[#000000]">
                {data.deskripsi_dua}
              </p>
            </div>
          </motion.div>
        </motion.div>
        <div className="flex flex-col max-w-screen-2xl">
          <p className="mt-10 text-[17px]">
            {data.deskripsi_tiga}
          </p>
          <p className="mt-5 text-[17px]">
            {data.deskripsi_empat}
          </p>
        </div>
      </motion.div>

      <div className="w-full  justify-center lg:hidden flex-col items-center flex px-5 py-20 text-[#FFFFFF]">
        {/* Lembaga Negara */}
        <div className="bg-[#DBA3D9] w-full rounded-3xl px-5 py-7 max-w-screen-2xl">
          <h1 className="text-[30px]  font-bold"> Lembaga Negara</h1>
          <div className=" mt-10">
            <div className="mt-10  flex  flex-col w-full">
              <Link
                className="shadow-lg  flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-enam-1"
              >
                <p className="text-[20px]">BPK (Badan Pengawas Keuangan)</p>
                <img className=" h-3" src="./arrow.png" alt="" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-enam-2"
              >
                <p className="text-[20px]">Mahkamah Konstitusi</p>
                <img className=" h-3" src="./arrow.png" alt="" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-enam-3"
              >
                <p className="text-[20px]">Komisi Yudisial</p>
                <img className=" h-3" src="./arrow.png" alt="" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-enam-4"
              >
                <p className="text-[20px]">MPR/DPR</p>
                <img className=" h-3" src="./arrow.png" alt="" />
              </Link>
            </div>
          </div>
        </div>

        {/*  Bahasa Daerah */}
        <div className="bg-[#DBA3D9] w-full rounded-3xl px-5 py-7 mt-5 max-w-screen-2xl">
          <h1 className="text-[30px]  font-bold"> Bahasa Daerah</h1>
          <div className=" mt-10">
            <div className="mt-10  flex  flex-col w-full">
              <Link
                className="shadow-lg  flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-tujuh-1"
              >
                <p className="text-[20px]">Bahasa Melayu</p>
                <img className=" h-3" src="./arrow.png" alt="" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-tujuh-2"
              >
                <p className="text-[20px]">Bahasa Keyeli</p>
                <img className=" h-3" src="./arrow.png" alt="" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-tujuh-3"
              >
                <p className="text-[20px]">Bahasa Minang</p>
                <img className=" h-3" src="./arrow.png" alt="" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-tujuh-4"
              >
                <p className="text-[20px]">Bahasa Bugis</p>
                <img className=" h-3" src="./arrow.png" alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UudPage;
