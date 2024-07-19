import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import axios from "axios";

const NkriPage = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/konten-empat"
        );
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
      <div className="w-full justify-center lg:flex items-center hidden ">
        <div className="mt-40 px-5 sm:px-10 flex  flex-col text-[#000000] sm:flex-row sm:justify-between items-center">
          <div className="flex items-center justify-center min-w-[300px]">
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              src={data.image}
              className="max-h-[442px] w-full h-full max-w-[442px] object-cover"
              alt="logo"
            />
          </div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="max-w-[866px] w-full sm:ml-10 mt-10 sm:mt-0"
          >
            <h1 className="text-[40px] font-bold text-[#FF8ADE]">
              {data.title}
            </h1>
            <div className="mt-5 text-[17px]">
              <p className="">{data.deskripsi_satu}</p>
              <p className="mt-5 ">{data.deskripsi_dua}</p>

              <p className="mt-5 ">{data.deskripsi_tiga}</p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="w-full  justify-center lg:flex flex-col items-center hidden px-10 py-20 text-[#FFFFFF]">
        {/* Kuliner */}
        <div className="bg-[#DBA3D9] w-full rounded-3xl px-10 py-10 max-w-screen-2xl">
          <h1 className="text-[30px]  font-bold"> Kuliner</h1>
          <div className="mx-10 mt-10">
            <div className="mt-10  flex  flex-col w-full">
              <Link
                className="shadow-lg  flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-12-1"
              >
                <p className="text-[20px]">Rendang</p>
                <img className=" h-3" src="./arrow.png" alt="" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-12-2"
              >
                <p className="text-[20px]">Karedok</p>
                <img className=" h-3" src="./arrow.png" alt="" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-12-3"
              >
                <p className="text-[20px]">Kerak Telor</p>
                <img className=" h-3" src="./arrow.png" alt="" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-12-4"
              >
                <p className="text-[20px]">Empal Gentong</p>
                <img className=" h-3" src="./arrow.png" alt="" />
              </Link>
            </div>
          </div>
        </div>

        {/*  Tradisi */}
        <div className="bg-[#DBA3D9] w-full rounded-3xl px-10 py-10 mt-5 max-w-screen-2xl">
          <h1 className="text-[30px]  font-bold"> Tradisi Nias</h1>
          <div className="mx-10 mt-10">
            <div className="mt-10  flex  flex-col w-full">
              <Link
                className="shadow-lg  flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-13-1"
              >
                <p className="text-[20px]">Fahombo Batu</p>
                <img className=" h-3" src="./arrow.png" alt="" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-13-2"
              >
                <p className="text-[20px]">Manafo</p>
                <img className=" h-3" src="./arrow.png" alt="" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-13-3"
              >
                <p className="text-[20px]">Famato Harimau</p>
                <img className=" h-3" src="./arrow.png" alt="" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-13-4"
              >
                <p className="text-[20px]">Ya ahowu Festival</p>
                <img className=" h-3" src="./arrow.png" alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}

      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="w-full justify-center lg:hidden items-center flex "
      >
        <div className="mt-40 px-6 flex  flex-col text-[#000000] sm:flex-row sm:justify-between items-center">
          <div className="flex items-center justify-center min-w-[300px]">
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              src={data.image}
              className="max-h-[442px] w-full h-full max-w-[442px] object-cover"
              alt="logo"
            />
          </div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="max-w-[866px] w-full sm:ml-10 mt-10 sm:mt-0"
          >
            <h1 className="text-[40px] font-bold text-[#FF8ADE]">
              {data.title}
            </h1>
            <div className="mt-5 text-[17px]">
              <p className="">{data.deskripsi_satu}</p>
              <p className="mt-5 ">{data.deskripsi_dua}</p>

              <p className="mt-5 ">{data.deskripsi_tiga}</p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="w-full  justify-center lg:hidden flex-col items-center flex px-5 py-10 text-[#FFFFFF]">
        {/* Kuliner */}
        <div className="bg-[#DBA3D9] w-full rounded-3xl px-5 py-7 max-w-screen-2xl">
          <h1 className="text-[30px]  font-bold"> Kuliner</h1>
          <div className=" mt-10">
            <div className="mt-10  flex  flex-col w-full">
              <Link
                className="shadow-lg  flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-12-1"
              >
                <p className="text-[20px]">Rendang</p>
                <img className=" h-3" src="./arrow.png" alt="" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-12-2"
              >
                <p className="text-[20px]">Karedok</p>
                <img className=" h-3" src="./arrow.png" alt="" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-12-3"
              >
                <p className="text-[20px]">Kerak Telor</p>
                <img className=" h-3" src="./arrow.png" alt="" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-12-4"
              >
                <p className="text-[20px]">Empal Gentong</p>
                <img className=" h-3" src="./arrow.png" alt="" />
              </Link>
            </div>
          </div>
        </div>

        {/*  Tradisi */}
        <div className="bg-[#DBA3D9] w-full rounded-3xl px-5 py-7 mt-5 max-w-screen-2xl">
          <h1 className="text-[30px]  font-bold"> Tradisi Nias</h1>
          <div className=" mt-10">
            <div className="mt-10  flex  flex-col w-full">
              <Link
                className="shadow-lg  flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-13-1"
              >
                <p className="text-[20px]">Fahombo Batu</p>
                <img className=" h-3" src="./arrow.png" alt="" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-13-2"
              >
                <p className="text-[20px]">Manafo</p>
                <img className=" h-3" src="./arrow.png" alt="" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-13-3"
              >
                <p className="text-[20px]">Famato Harimau</p>
                <img className=" h-3" src="./arrow.png" alt="" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-13-4"
              >
                <p className="text-[20px]">Ya ahowu Festival</p>
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

export default NkriPage;
