import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Loading from "../../components/Loading";
import { useEffect, useState } from "react";

const Bhinneka = () => {
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
        className="mt-24 px-5 sm:px-10 flex flex-col justify-center items-center text-[#000000]"
      >
        <h1 className="text-3xl font-bold  text-[#D432A7]">
          Bhinneka Tunggal Ika
        </h1>
        <p className="mt-5 text-sm">
          Bhinneka Tunggal Ika adalah semboyan yang mencerminkan semangat
          persatuan dan kesatuan dalam keberagaman di Indonesia. Motto ini
          tercetus dari bahasa Jawa Kuno dan memiliki makna mendalam, yaitu
          "Berbeda-beda tetapi tetap satu." Beberapa poin penting yang dapat
          dijelaskan dari makna Bhinneka Tunggal Ika adalah:
        </p>

        <ol className="mt-5 text-sm list-decimal list-outside">
          <li>
            Keragaman Budaya: Indonesia dikenal sebagai negara dengan keragaman
            budaya yang kaya. Bhinneka Tunggal Ika menekankan bahwa meskipun
            terdapat perbedaan suku, agama, ras, dan golongan, bangsa Indonesia
            tetap satu kesatuan yang utuh.
          </li>
          <li>
            Hidup Bermasyarakat: Semboyan ini menekankan pentingnya hidup
            bersama dalam harmoni dan menghargai perbedaan. Meskipun masyarakat
            Indonesia memiliki latar belakang yang beragam, semangat Bhinneka
            Tunggal Ika mengajarkan untuk hidup saling menghormati dan bekerja
            sama.
          </li>
          <li>
            Persatuan Bangsa: Bhinneka Tunggal Ika adalah cermin dari
            keberhasilan Indonesia sebagai bangsa yang mampu menyatukan
            perbedaan menjadi kekuatan bersama. Persatuan ini menjadi pondasi
            bagi Negara Kesatuan Republik Indonesia.
          </li>
          <li>
            Toleransi dan Keharmonisan: Semboyan ini juga memiliki akar budaya
            dalam ajaran kakawin Sutasoma yang mengajarkan toleransi antara umat
            Hindu Siwa dan umat Buddha. Hal ini mencerminkan semangat toleransi
            dan keharmonisan antarumat beragama di Indonesia.
          </li>
          <li>
            Identitas Nasional: Bhinneka Tunggal Ika bukan hanya semboyan,
            tetapi juga menjadi bagian dari identitas nasional Indonesia.
            Kata-kata ini terpatri dalam Lambang Negara Garuda Pancasila dan
            mencerminkan nilai-nilai Pancasila.
          </li>
        </ol>

        <p className="mt-5 text-sm">
          Makna mendalam dari Bhinneka Tunggal Ika terus dijunjung tinggi
          sebagai landasan moral dan spiritual dalam kehidupan masyarakat
          Indonesia. Semboyan ini mengajarkan bahwa keberagaman adalah kekayaan,
          bukan pemisah, dan bahwa bersatu dalam perbedaan adalah kunci
          keharmonisan bangsa.
        </p>
        <img className="mt-16" src="./btkbg.png" alt="" />
      </motion.div>

      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="background-2 mt-24 px-10"
      >
        <h1 className="text-[30px] font-bold pt-20 text-white">Lagu Daerah</h1>
        <div className="mt-10 text-[#FF8ADE] flex ml-20 flex-col w-[538px]">
          <Link
            className="  flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-lg"
            to="/lagu-1"
          >
            <p className="text-[20px]">Kicir Kicir</p>
            <img className=" h-3" src="./arrowuud.png" alt="" />
          </Link>
          <Link
            className=" mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-md"
            to="/lagu-2"
          >
            <p className="text-[20px]">Cublak Cublak Suweng</p>
            <img className=" h-3" src="./arrowuud.png" alt="" />
          </Link>
          <Link
            className=" mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-md"
            to="/lagu-3"
          >
            <p className="text-[20px]">Anging Mammirik</p>
            <img className=" h-3" src="./arrowuud.png" alt="" />
          </Link>
          <Link
            className=" mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-md"
            to="/lagu-4"
          >
            <p className="text-[20px]">Yamko Rambe Yamko</p>
            <img className=" h-3" src="./arrowuud.png" alt="" />
          </Link>
        </div>
        {/* tarian */}
        <div className="flex flex-col">
          <h1 className="text-[30px] font-bold pt-20 text-white">
            Tarian Tradisional
          </h1>
          <div className="mt-10 text-[#FF8ADE] flex ml-20 flex-col w-[538px]">
            <Link
              className="  flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-lg"
              to="/tarian-1"
            >
              <p className="text-[20px]">Bedaya Ketawang</p>
              <img className=" h-3" src="./arrowuud.png" alt="" />
            </Link>
            <Link
              className=" mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-md"
              to="/tarian-2"
            >
              <p className="text-[20px]">Jaipongan</p>
              <img className=" h-3" src="./arrowuud.png" alt="" />
            </Link>
            <Link
              className=" mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-md"
              to="/tarian-3"
            >
              <p className="text-[20px]">Kecak</p>
              <img className=" h-3" src="./arrowuud.png" alt="" />
            </Link>
            <Link
              className=" mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-md"
              to="/tarian-4"
            >
              <p className="text-[20px]">Kipas Pakarena</p>
              <img className=" h-3" src="./arrowuud.png" alt="" />
            </Link>
          </div>
        </div>

        {/* tambang */}
        <div className="flex flex-col">
          <h1 className="text-[30px] font-bold pt-20 text-white">
            Hasil Tambang
          </h1>
          <div className="mt-10 text-[#FF8ADE] flex ml-20 flex-col w-[538px]">
            <Link
              className="  flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-lg"
              to="/tambang-1"
            >
              <p className="text-[20px]">Tambang Emas</p>
              <img className=" h-3" src="./arrowuud.png" alt="" />
            </Link>
            <Link
              className=" mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-md"
              to="/tambang-2"
            >
              <p className="text-[20px]">Tambang Nikel</p>
              <img className=" h-3" src="./arrowuud.png" alt="" />
            </Link>
            <Link
              className=" mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-md"
              to="/tambang-3"
            >
              <p className="text-[20px]">Tambang Timah</p>
              <img className=" h-3" src="./arrowuud.png" alt="" />
            </Link>
            <Link
              className=" mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-md"
              to="/tambang-4"
            >
              <p className="text-[20px]">Tambang Besi</p>
              <img className=" h-3" src="./arrowuud.png" alt="" />
            </Link>
          </div>
        </div>

        {/* satwa */}

        <div className="flex flex-col">
          <h1 className="text-[30px] font-bold pt-20 text-white">
            Satwa & Puspa
          </h1>
          <div className="mt-10 text-[#FF8ADE] flex ml-20 flex-col w-[538px]">
            <Link
              className="  flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-lg"
              to="/satwa-1"
            >
              <p className="text-[20px]">Anoa</p>
              <img className=" h-3" src="./arrowuud.png" alt="" />
            </Link>
            <Link
              className=" mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-md"
              to="/satwa-2"
            >
              <p className="text-[20px]">Orang Utan</p>
              <img className=" h-3" src="./arrowuud.png" alt="" />
            </Link>
            <Link
              className=" mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-md"
              to="/satwa-3"
            >
              <p className="text-[20px]">Anggrek</p>
              <img className=" h-3" src="./arrowuud.png" alt="" />
            </Link>
            <Link
              className=" mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-md"
              to="/satwa-4"
            >
              <p className="text-[20px]">Rafflesia Arnoldi</p>
              <img className=" h-3" src="./arrowuud.png" alt="" />
            </Link>
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default Bhinneka;
