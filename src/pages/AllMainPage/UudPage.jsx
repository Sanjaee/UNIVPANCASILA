import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import Loading from "../../components/Loading";

const UudPage = () => {
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
              src="./uudbook.png"
              className="max-h-[270.48px] w-full h-full max-w-[270.48px]  "
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
                Undang-Undang Dasar
              </h1>
              <h1 className="text-[40px] font-bold text-[#FF8ADE] ">
                Negara Republik Indonesia Tahun 1945
              </h1>
              <p className="text-[17px] mt-7 text-[#000000] ">
                Undang-Undang Dasar Negara Republik Indonesia Tahun 1945
                (disingkat UUD 1945; terkadang juga disingkat UUD '45, UUD RI
                1945, atau UUD NRI 1945) adalah konstitusi dan sumber hukum
                tertinggi yang berlaku di Republik Indonesia. UUD 1945 menjadi
                perwujudan dari dasar negara (ideologi) Indonesia, yaitu
                Pancasila, yang disebutkan secara gamblang dalam Pembukaan UUD
                1945.
              </p>

              <p className="mt-5 text-[17px] text-[#000000]">
                Perumusan UUD 1945 dimulai dengan kelahiran dasar negara
                Pancasila pada tanggal 1 Juni 1945 dalam sidang pertama BPUPK.
                Perumusan UUD yang rill sendiri mulai dilakukan pada tanggal 10
                Juli 1945 dengan dimulainya sidang kedua BPUPK untuk menyusun
                konstitusi. UUD 1945 diberlakukan secara resmi sebagai
                konstitusi negara Indonesia oleh PPKI pada tanggal 18 Agustus
                1945. Pemberlakuannya sempat dihentikan selama 9 tahun dengan
                berlakunya Konstitusi RIS dan UUDS 1950. UUD 1945 kembali
                berlaku sebagai konstitusi negara melalui Dekret Presiden yang
                dikeluarkan oleh Presiden Soekarno pada tanggal 5 Juli 1959.
                Setelah memasuki masa reformasi, UUD 1945 mengalami empat kali
                perubahan (amendemen) dari tahun 1999–2002.
              </p>
            </div>
          </motion.div>
        </motion.div>
        <div className="flex flex-col max-w-screen-2xl">
          <p className="mt-10 text-[17px]">
            UUD 1945 memiliki otoritas hukum tertinggi dalam sistem pemerintahan
            negara Indonesia, sehingga seluruh lembaga negara di Indonesia harus
            tunduk pada UUD 1945 dan penyelenggaraan negara harus mengikuti
            ketentuan UUD 1945. Selain itu, setiap peraturan perundang-undangan
            di Indonesia tidak boleh bertentangan dengan UUD 1945. Mahkamah
            Konstitusi berwenang melakukan pengujian atas undang-undang,
            sementara Mahkamah Agung atas peraturan di bawah undang-undang, yang
            bertentangan dengan ketentuan UUD 1945.
          </p>
          <p className="mt-5 text-[17px]">
            Wewenang untuk melakukan pengubahan terhadap UUD 1945 dimiliki
            Majelis Permusyawaratan Rakyat, seperti yang telah dilakukan oleh
            lembaga ini sebanyak empat kali. Ketentuan mengenai perubahan UUD
            1945 diatur dalam Pasal 37 UUD 1945.
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
                to="/uud-1"
              >
                <p className="text-[20px]">BPK (Badan Pengawas Keuangan)</p>
                <img className=" h-3" src="./arrow.png" alt="" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/uud-2"
              >
                <p className="text-[20px]">Mahkamah Konstitusi</p>
                <img className=" h-3" src="./arrow.png" alt="" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/uud-3"
              >
                <p className="text-[20px]">Komisi Yudisial</p>
                <img className=" h-3" src="./arrow.png" alt="" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/uud-4"
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
                to="/bahasa-1"
              >
                <p className="text-[20px]">Bahasa Melayu</p>
                <img className=" h-3" src="./arrow.png" alt="" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/bahasa-2"
              >
                <p className="text-[20px]">Bahasa Keyeli</p>
                <img className=" h-3" src="./arrow.png" alt="" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/bahasa-3"
              >
                <p className="text-[20px]">Bahasa Minang</p>
                <img className=" h-3" src="./arrow.png" alt="" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/bahasa-4"
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
