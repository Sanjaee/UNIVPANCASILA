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
      <div className="w-full justify-center lg:flex items-center hidden ">
        <div className="mt-40 px-5 sm:px-10 flex  flex-col text-[#000000] sm:flex-row sm:justify-between items-center">
          <div className="flex items-center justify-center min-w-[300px]">
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              src="./bgnkri.png"
              className="max-h-[442px] w-full h-full max-w-[442px]"
              alt="logo"
            />
          </div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="max-w-[866px] w-full sm:ml-10 mt-10 sm:mt-0"
          >
            <h1 className="text-[40px] font-bold text-[#FF8ADE]">
              Negara Kesatuan Republik Indonesia
            </h1>
            <div className="mt-5 text-[17px]">
              <p className="">
                Indonesia, atau Republik Indonesia, adalah negara kepulauan di
                Asia Tenggara, melintasi garis khatulistiwa. Dikenal sebagai
                negara lintas benua, Indonesia terbesar ke-14 di dunia dengan
                luas wilayah 1.904.569 km², terdiri dari 17.504 pulau. Dengan
                penduduk lebih dari 277 juta jiwa, Indonesia adalah negara
                berpenduduk terbanyak ke-4, dengan mayoritas penganut Islam.
              </p>
              <p className="mt-5 ">
                Sejarah Indonesia dipengaruhi oleh bangsa pendatang dan
                penjajah. Sriwijaya, kerajaan Hindu-Buddha di Palembang,
                memainkan peran penting dalam perdagangan abad ke-7. Islam masuk
                di abad ke-8, diikuti penjajahan Eropa pada akhir abad ke-15.
                Indonesia meraih kemerdekaan pada 17 Agustus 1945, setelah era
                kolonial Belanda.
              </p>

              <p className="mt-5 ">
                Dengan beragam suku, bahasa, dan agama, semboyan "Bhinneka
                Tunggal Ika" mencerminkan keberagaman yang menyatu. Ibu kota
                saat ini adalah Jakarta, dengan rencana pemindahan ke Ibu Kota
                Nusantara di Kalimantan. Indonesia adalah anggota berbagai
                organisasi internasional seperti PBB, ASEAN, dan APEC.
              </p>
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
                to="/kuliner-1"
              >
                <p className="text-[20px]">Rendang</p>
                <img className=" h-3" src="./arrow.png" alt="" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/kuliner-2"
              >
                <p className="text-[20px]">Karedok</p>
                <img className=" h-3" src="./arrow.png" alt="" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/kuliner-3"
              >
                <p className="text-[20px]">Kerak Telor</p>
                <img className=" h-3" src="./arrow.png" alt="" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/kuliner-4"
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
                to="/tradisi-1"
              >
                <p className="text-[20px]">Fahombo Batu</p>
                <img className=" h-3" src="./arrow.png" alt="" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/tradisi-2"
              >
                <p className="text-[20px]">Manafo</p>
                <img className=" h-3" src="./arrow.png" alt="" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/tradisi-3"
              >
                <p className="text-[20px]">Famato Harimau</p>
                <img className=" h-3" src="./arrow.png" alt="" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/tradisi-4"
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
