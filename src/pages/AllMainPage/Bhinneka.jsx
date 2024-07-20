import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Loading from "../../components/Loading";
import { useEffect, useState } from "react";
import axios from "axios";

const Bhinneka = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/konten-tiga"
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
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="mt-32 px-10 sm:px-10 flex flex-col justify-center items-center text-[#000000]"
      >
        <div className="flex flex-col max-w-screen-2xl">
          <div className="w-full text-start">
            <h1 className="text-[40px]  font-bold  text-[#FF8ADE]">
              {data.title}
            </h1>
          </div>
          <p className="mt-5 text-[17px]">{data.deskripsi_satu}</p>

          <ol className="mt-5 ml-5 text-[17px] list-decimal list-outside">
            <li>{data.deskripsi_dua}</li>
            <li>{data.deskripsi_tiga}</li>
            <li>{data.deskripsi_empat}</li>
            <li>{data.deskripsi_lima}</li>
            <li>{data.deskripsi_enam}</li>
          </ol>

          <p className="mt-5 text-[17px]">{data.deskripsi_tujuh}</p>
          <img
            className="mt-16 w-full h-full max-h-[200px] object-cover"
            src={data.image}
             alt="bg"
          />
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
                to="/detail-delapan-1"
              >
                <p className="text-[20px]">Kicir Kicir</p>
                <img className=" h-3" src="./arrow.png"  alt="bg" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-delapan-2"
              >
                <p className="text-[20px]">Cublak Cublak Suweng</p>
                <img className=" h-3" src="./arrow.png"  alt="bg" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-delapan-3"
              >
                <p className="text-[20px]">Anging Mammirik</p>
                <img className=" h-3" src="./arrow.png"  alt="bg" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-delapan-4"
              >
                <p className="text-[20px]">Yamko Rambe Yamko</p>
                <img className=" h-3" src="./arrow.png"  alt="bg" />
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
                to="/detail-sembilan-1"
              >
                <p className="text-[20px]">Bedaya Ketawang</p>
                <img className=" h-3" src="./arrow.png"  alt="bg" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-sembilan-2"
              >
                <p className="text-[20px]">Jaipongan</p>
                <img className=" h-3" src="./arrow.png"  alt="bg" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-sembilan-3"
              >
                <p className="text-[20px]">Kecak</p>
                <img className=" h-3" src="./arrow.png"  alt="bg" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-sembilan-4"
              >
                <p className="text-[20px]">Kipas Pakarena</p>
                <img className=" h-3" src="./arrow.png"  alt="bg" />
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
                to="/detail-sepuluh-1"
              >
                <p className="text-[20px]">Tambang Emas</p>
                <img className=" h-3" src="./arrow.png"  alt="bg" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-sepuluh-2"
              >
                <p className="text-[20px]">Tambang Nikel</p>
                <img className=" h-3" src="./arrow.png"  alt="bg" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-sepuluh-3"
              >
                <p className="text-[20px]">Tambang Timah</p>
                <img className=" h-3" src="./arrow.png"  alt="bg" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-sepuluh-4"
              >
                <p className="text-[20px]">Tambang Besi</p>
                <img className=" h-3" src="./arrow.png"  alt="bg" />
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
                to="/detail-sebelas-1"
              >
                <p className="text-[20px]">Anoa</p>
                <img className=" h-3" src="./arrow.png"  alt="bg" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-sebelas-2"
              >
                <p className="text-[20px]">Orang Utan</p>
                <img className=" h-3" src="./arrow.png"  alt="bg" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-sebelas-3"
              >
                <p className="text-[20px]">Anggrek</p>
                <img className=" h-3" src="./arrow.png"  alt="bg" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-sebelas-4"
              >
                <p className="text-[20px]">Rafflesia Arnoldi</p>
                <img className=" h-3" src="./arrow.png"  alt="bg" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}

      <div className="w-full  justify-center lg:hidden flex-col items-center flex px-5 py-7 text-[#FFFFFF]">
        {/* Lagu Daerah */}
        <div className="bg-[#DBA3D9] w-full rounded-3xl px-10 py-10 max-w-screen-2xl">
          <h1 className="text-[30px]  font-bold"> Lagu Daerah</h1>
          <div className=" mt-10">
            <div className="mt-10  flex  flex-col w-full">
              <Link
                className="shadow-lg  flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-delapan-1"
              >
                <p className="text-[20px]">Kicir Kicir</p>
                <img className=" h-3" src="./arrow.png"  alt="bg" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-delapan-2"
              >
                <p className="text-[20px]">Cublak Cublak Suweng</p>
                <img className=" h-3" src="./arrow.png"  alt="bg" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-delapan-3"
              >
                <p className="text-[20px]">Anging Mammirik</p>
                <img className=" h-3" src="./arrow.png"  alt="bg" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-delapan-4"
              >
                <p className="text-[20px]">Yamko Rambe Yamko</p>
                <img className=" h-3" src="./arrow.png"  alt="bg" />
              </Link>
            </div>
          </div>
        </div>

        {/* Tarian Tradisional */}
        <div className="bg-[#DBA3D9] w-full rounded-3xl px-10 py-10 mt-5 max-w-screen-2xl">
          <h1 className="text-[30px]  font-bold"> Tarian Tradisional</h1>
          <div className=" mt-10">
            <div className="mt-10  flex  flex-col w-full">
              <Link
                className="shadow-lg  flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-sembilan-1"
              >
                <p className="text-[20px]">Bedaya Ketawang</p>
                <img className=" h-3" src="./arrow.png"  alt="bg" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-sembilan-2"
              >
                <p className="text-[20px]">Jaipongan</p>
                <img className=" h-3" src="./arrow.png"  alt="bg" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-sembilan-3"
              >
                <p className="text-[20px]">Kecak</p>
                <img className=" h-3" src="./arrow.png"  alt="bg" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-sembilan-4"
              >
                <p className="text-[20px]">Kipas Pakarena</p>
                <img className=" h-3" src="./arrow.png"  alt="bg" />
              </Link>
            </div>
          </div>
        </div>

        {/* Hasil Tambang */}
        <div className="bg-[#DBA3D9] w-full rounded-3xl px-10 py-10 mt-5 max-w-screen-2xl">
          <h1 className="text-[30px]  font-bold"> Hasil Tambang</h1>
          <div className=" mt-10">
            <div className="mt-10  flex  flex-col w-full">
              <Link
                className="shadow-lg  flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-sepuluh-1"
              >
                <p className="text-[20px]">Tambang Emas</p>
                <img className=" h-3" src="./arrow.png"  alt="bg" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-sepuluh-2"
              >
                <p className="text-[20px]">Tambang Nikel</p>
                <img className=" h-3" src="./arrow.png"  alt="bg" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-sepuluh-3"
              >
                <p className="text-[20px]">Tambang Timah</p>
                <img className=" h-3" src="./arrow.png"  alt="bg" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-sepuluh-4"
              >
                <p className="text-[20px]">Tambang Besi</p>
                <img className=" h-3" src="./arrow.png"  alt="bg" />
              </Link>
            </div>
          </div>
        </div>

        {/* Satwa & Puspa */}
        <div className="bg-[#DBA3D9] w-full rounded-3xl px-10 py-10 mt-5 max-w-screen-2xl">
          <h1 className="text-[30px]  font-bold">Satwa & Puspa</h1>
          <div className=" mt-10">
            <div className="mt-10  flex  flex-col w-full">
              <Link
                className="shadow-lg  flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-sebelas-1"
              >
                <p className="text-[20px]">Anoa</p>
                <img className=" h-3" src="./arrow.png"  alt="bg" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-sebelas-2"
              >
                <p className="text-[20px]">Orang Utan</p>
                <img className=" h-3" src="./arrow.png"  alt="bg" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-sebelas-3"
              >
                <p className="text-[20px]">Anggrek</p>
                <img className=" h-3" src="./arrow.png"  alt="bg" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-sebelas-4"
              >
                <p className="text-[20px]">Rafflesia Arnoldi</p>
                <img className=" h-3" src="./arrow.png"  alt="bg" />
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
