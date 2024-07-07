import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";

const NkriPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500); // Simulate loading time
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
        className="custom-1000:mt-24 custom-1200:mt-32  text-[#000000] px-5 sm:px-10 flex flex-col justify-center items-center text-[#000000]"
      >
        <h1 className="text-3xl font-bold  text-[#D432A7]">
          Negara Kesatuan Republik Indonesia
        </h1>
        <p className="mt-5 ">
          Indonesia, atau Republik Indonesia, adalah negara kepulauan di Asia
          Tenggara, melintasi garis khatulistiwa. Dikenal sebagai negara lintas
          benua, Indonesia terbesar ke-14 di dunia dengan luas wilayah 1.904.569
          km², terdiri dari 17.504 pulau. Dengan penduduk lebih dari 277 juta
          jiwa, Indonesia adalah negara berpenduduk terbanyak ke-4, dengan
          mayoritas penganut Islam.
        </p>

        <p className="mt-5 ">
          Sejarah Indonesia dipengaruhi oleh bangsa pendatang dan penjajah.
          Sriwijaya, kerajaan Hindu-Buddha di Palembang, memainkan peran penting
          dalam perdagangan abad ke-7. Islam masuk di abad ke-8, diikuti
          penjajahan Eropa pada akhir abad ke-15. Indonesia meraih kemerdekaan
          pada 17 Agustus 1945, setelah era kolonial Belanda.
        </p>

        <p className="mt-5 ">
          Dengan beragam suku, bahasa, dan agama, semboyan "Bhinneka Tunggal
          Ika" mencerminkan keberagaman yang menyatu. Ibu kota saat ini adalah
          Jakarta, dengan rencana pemindahan ke Ibu Kota Nusantara di
          Kalimantan. Indonesia adalah anggota berbagai organisasi internasional
          seperti PBB, ASEAN, dan APEC.
        </p>
        <img className="mt-16" src="./bgnkri.png" alt="" />
      </motion.div>
      {/* Kuliner */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="background-3 mt-24 px-10"
      >
        <h1 className="text-[30px] font-bold pt-20 text-white">Kuliner</h1>

        <div className="mt-10 text-[#FF8ADE] flex ml-20 flex-col w-[538px]">
          <Link
            className="  flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-lg"
            to="/kuliner-1"
          >
            <p className="text-[20px]">Rendang</p>
            <img className=" h-3" src="./arrowuud.png" alt="" />
          </Link>
          <Link
            className=" mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-md"
            to="/kuliner-2"
          >
            <p className="text-[20px]">Karedok</p>
            <img className=" h-3" src="./arrowuud.png" alt="" />
          </Link>
          <Link
            className=" mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-md"
            to="/kuliner-3"
          >
            <p className="text-[20px]">Kerak Telor</p>
            <img className=" h-3" src="./arrowuud.png" alt="" />
          </Link>
          <Link
            className=" mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-md"
            to="/kuliner-4"
          >
            <p className="text-[20px]">Empal Gentong</p>
            <img className=" h-3" src="./arrowuud.png" alt="" />
          </Link>
        </div>

        {/* Tradisi Nias */}
        <div className="flex flex-col">
          <h1 className="text-[30px] font-bold pt-20 text-white">
            Tradisi Nias
          </h1>
          <div className="mt-10 text-[#FF8ADE] flex ml-20 flex-col w-[538px]">
            <Link
              className="  flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-lg"
              to="/tradisi-1"
            >
              <p className="text-[20px]">Fahombo Batu</p>
              <img className=" h-3" src="./arrowuud.png" alt="" />
            </Link>
            <Link
              className=" mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-md"
              to="/tradisi-2"
            >
              <p className="text-[20px]">Manafo</p>
              <img className=" h-3" src="./arrowuud.png" alt="" />
            </Link>
            <Link
              className=" mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-md"
              to="/tradisi-3"
            >
              <p className="text-[20px]">Famato Harimau</p>
              <img className=" h-3" src="./arrowuud.png" alt="" />
            </Link>
            <Link
              className=" mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-md"
              to="/tradisi-4"
            >
              <p className="text-[20px]">Ya’ahowu Festival</p>
              <img className=" h-3" src="./arrowuud.png" alt="" />
            </Link>
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default NkriPage;
