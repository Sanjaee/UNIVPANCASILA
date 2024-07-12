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
        className="mt-32 px-10 sm:px-10 flex flex-col justify-center items-center text-[#000000]"
      >
        <div className="flex flex-col max-w-screen-2xl">
          <div className="w-full text-start">
            <h1 className="text-[40px]  font-bold  text-[#FF8ADE]">
              Bhinneka Tunggal Ika
            </h1>
          </div>
          <p className="mt-5 text-[17px]">
            Bhinneka Tunggal Ika adalah semboyan yang mencerminkan semangat
            persatuan dan kesatuan dalam keberagaman di Indonesia. Motto ini
            tercetus dari bahasa Jawa Kuno dan memiliki makna mendalam, yaitu
            "Berbeda-beda tetapi tetap satu." Beberapa poin penting yang dapat
            dijelaskan dari makna Bhinneka Tunggal Ika adalah:
          </p>

          <ol className="mt-5 ml-5 text-[17px] list-decimal list-outside">
            <li>
              Keragaman Budaya: Indonesia dikenal sebagai negara dengan
              keragaman budaya yang kaya. Bhinneka Tunggal Ika menekankan bahwa
              meskipun terdapat perbedaan suku, agama, ras, dan golongan, bangsa
              Indonesia tetap satu kesatuan yang utuh.
            </li>
            <li>
              Hidup Bermasyarakat: Semboyan ini menekankan pentingnya hidup
              bersama dalam harmoni dan menghargai perbedaan. Meskipun
              masyarakat Indonesia memiliki latar belakang yang beragam,
              semangat Bhinneka Tunggal Ika mengajarkan untuk hidup saling
              menghormati dan bekerja sama.
            </li>
            <li>
              Persatuan Bangsa: Bhinneka Tunggal Ika adalah cermin dari
              keberhasilan Indonesia sebagai bangsa yang mampu menyatukan
              perbedaan menjadi kekuatan bersama. Persatuan ini menjadi pondasi
              bagi Negara Kesatuan Republik Indonesia.
            </li>
            <li>
              Toleransi dan Keharmonisan: Semboyan ini juga memiliki akar budaya
              dalam ajaran kakawin Sutasoma yang mengajarkan toleransi antara
              umat Hindu Siwa dan umat Buddha. Hal ini mencerminkan semangat
              toleransi dan keharmonisan antarumat beragama di Indonesia.
            </li>
            <li>
              Identitas Nasional: Bhinneka Tunggal Ika bukan hanya semboyan,
              tetapi juga menjadi bagian dari identitas nasional Indonesia.
              Kata-kata ini terpatri dalam Lambang Negara Garuda Pancasila dan
              mencerminkan nilai-nilai Pancasila.
            </li>
          </ol>

          <p className="mt-5 text-[17px]">
            Makna mendalam dari Bhinneka Tunggal Ika terus dijunjung tinggi
            sebagai landasan moral dan spiritual dalam kehidupan masyarakat
            Indonesia. Semboyan ini mengajarkan bahwa keberagaman adalah
            kekayaan, bukan pemisah, dan bahwa bersatu dalam perbedaan adalah
            kunci keharmonisan bangsa.
          </p>
          <img className="mt-16" src="./bgbtk.png" alt="" />
        </div>
      </motion.div>

      <div className="w-full  justify-center lg:flex flex-col items-center hidden px-10 py-20 text-[#FFFFFF]">
        {/* Lagu Daerah */}
        <div className="bg-[#DBA3D9] w-full rounded-3xl px-10 py-10 max-w-screen-2xl">
          <h1 className="text-[30px]  font-bold"> Lagu Daerah</h1>
          <div className="mx-10 mt-10">
            <div className="mt-10  flex  flex-col w-full">
              <Link
                className="shadow-lg  flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/lagu-1"
              >
                <p className="text-[20px]">Kicir Kicir</p>
                <img className=" h-3" src="./arrow.png" alt="" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/lagu-2"
              >
                <p className="text-[20px]">Cublak Cublak Suweng</p>
                <img className=" h-3" src="./arrow.png" alt="" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/lagu-3"
              >
                <p className="text-[20px]">Anging Mammirik</p>
                <img className=" h-3" src="./arrow.png" alt="" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/lagu-4"
              >
                <p className="text-[20px]">Yamko Rambe Yamko</p>
                <img className=" h-3" src="./arrow.png" alt="" />
              </Link>
            </div>
          </div>
        </div>

        {/* Tarian Tradisional */}
        <div className="bg-[#DBA3D9] w-full rounded-3xl px-10 py-10 mt-5 max-w-screen-2xl">
          <h1 className="text-[30px]  font-bold"> Tarian Tradisional</h1>
          <div className="mx-10 mt-10">
            <div className="mt-10  flex  flex-col w-full">
              <Link
                className="shadow-lg  flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/tarian-1"
              >
                <p className="text-[20px]">Bedaya Ketawang</p>
                <img className=" h-3" src="./arrow.png" alt="" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/tarian-2"
              >
                <p className="text-[20px]">Jaipongan</p>
                <img className=" h-3" src="./arrow.png" alt="" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/tarian-3"
              >
                <p className="text-[20px]">Kecak</p>
                <img className=" h-3" src="./arrow.png" alt="" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/tarian-4"
              >
                <p className="text-[20px]">Kipas Pakarena</p>
                <img className=" h-3" src="./arrow.png" alt="" />
              </Link>
            </div>
          </div>
        </div>

        {/* Hasil Tambang */}
        <div className="bg-[#DBA3D9] w-full rounded-3xl px-10 py-10 mt-5 max-w-screen-2xl">
          <h1 className="text-[30px]  font-bold"> Hasil Tambang</h1>
          <div className="mx-10 mt-10">
            <div className="mt-10  flex  flex-col w-full">
              <Link
                className="shadow-lg  flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/tambang-1"
              >
                <p className="text-[20px]">Tambang Emas</p>
                <img className=" h-3" src="./arrow.png" alt="" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/tambang-2"
              >
                <p className="text-[20px]">Tambang Nikel</p>
                <img className=" h-3" src="./arrow.png" alt="" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/tambang-3"
              >
                <p className="text-[20px]">Tambang Timah</p>
                <img className=" h-3" src="./arrow.png" alt="" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/tambang-4"
              >
                <p className="text-[20px]">Tambang Besi</p>
                <img className=" h-3" src="./arrow.png" alt="" />
              </Link>
            </div>
          </div>
        </div>

        {/* Satwa & Puspa */}
        <div className="bg-[#DBA3D9] w-full rounded-3xl px-10 py-10 mt-5 max-w-screen-2xl">
          <h1 className="text-[30px]  font-bold">Satwa & Puspa</h1>
          <div className="mx-10 mt-10">
            <div className="mt-10  flex  flex-col w-full">
              <Link
                className="shadow-lg  flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/satwa-1"
              >
                <p className="text-[20px]">Anoa</p>
                <img className=" h-3" src="./arrow.png" alt="" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/satwa-2"
              >
                <p className="text-[20px]">Orang Utan</p>
                <img className=" h-3" src="./arrow.png" alt="" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/satwa-3"
              >
                <p className="text-[20px]">Anggrek</p>
                <img className=" h-3" src="./arrow.png" alt="" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/satwa-4"
              >
                <p className="text-[20px]">Rafflesia Arnoldi</p>
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

export default Bhinneka;
