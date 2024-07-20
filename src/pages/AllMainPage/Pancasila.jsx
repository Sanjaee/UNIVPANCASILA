import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import Navbar from "../../components/Navbar";
import Loading from "../../components/Loading";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

const Pancasila = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/konten-satu"
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
      <div className="w-full justify-center lg:flex items-center hidden">
        <div className="mt-40 px-5 sm:px-10 flex flex-col text-[#000000] sm:flex-row sm:justify-between items-center">
          <div className="flex items-center justify-center min-w-[300px]">
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              src={data.image}
              className="max-h-[270.48px] w-full h-full max-w-[270.48px] object-cover"
              alt="logo"
            />
          </div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="max-w-[866px] w-full sm:ml-10 mt-10 sm:mt-0"
          >
            <h1 className={`text-[40px] font-bold text-[#FF8ADE]`}>
              {data.title}
            </h1>
            <div className="mt-5 text-[17px]">
              <p>{data.deskripsi_satu}</p>
              <p className="mt-5">{data.deskripsi_dua}</p>
              <ol className="mt-5 list-decimal list-inside">
                <li>{data.deskripsi_tiga}</li>
                <li>{data.deskripsi_empat}</li>
                <li>{data.deskripsi_lima}</li>
                <li>{data.deskripsi_enam}</li>
                <li>{data.deskripsi_tujuh}</li>
              </ol>
              <p className="mt-5">{data.deskripsi_delapan}</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* sila */}
      <div className="w-full  justify-center lg:flex flex-col items-center hidden px-10 py-20 text-[#FFFFFF]">
        {/* sila 1 */}
        <div className="bg-[#DBA3D9] w-full rounded-3xl px-10 py-10 max-w-screen-2xl">
          <h1 className="text-[30px]  font-bold">
            {" "}
            Sila Ke-1: Ketuhanan Yang Maha Esa
          </h1>
          <div className="mx-10 mt-10">
            <div className="  flex  flex-col w-full">
              <Link
                className="shadow-lg  flex p-2 justify-between items-center px-6 w-full border border-[#FFFFFF] rounded-xl"
                to="/detail-satu-1"
              >
                <p className="text-[20px]">Menghormati Antar Agama</p>
                <img className=" h-3" src="./arrow.png" alt="bg" />
              </Link>
              <Link
                className="shadow-lg  mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-satu-2"
              >
                <p className="text-[20px]">Tidak Paksakan Kepercayaan</p>
                <img className=" h-3" src="./arrow.png" alt="bg" />
              </Link>
              <Link
                className="shadow-lg  mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-satu-3"
              >
                <p className="text-[20px]">Taat Beribadah</p>
                <img className=" h-3" src="./arrow.png" alt="bg" />
              </Link>
              <Link
                className="shadow-lg  mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-satu-4"
              >
                <p className="text-[20px]">Hidup Sederhana</p>
                <img className=" h-3" src="./arrow.png" alt="bg" />
              </Link>
            </div>
          </div>
        </div>

        {/* sila 2 */}

        <div className="bg-[#DBA3D9] w-full rounded-3xl px-10 py-10 mt-5 max-w-screen-2xl">
          <h1 className="text-[30px]  font-bold">
            {" "}
            Sila Ke-2: Kemanusiaan Yang Adil Dan Beradab
          </h1>

          <div className="mx-10 mt-10">
            <div className="mt-10  flex  flex-col w-full">
              <Link
                className="shadow-lg  flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-dua-1"
              >
                <p className="text-[20px]">
                  Menjunjung Tinggi Nilai Kemanusiaan
                </p>
                <img className=" h-3" src="./arrow.png" alt="bg" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-dua-2"
              >
                <p className="text-[20px]">
                  Gemar Melakukan Kegiatan Kemanusiaan
                </p>
                <img className=" h-3" src="./arrow.png" alt="bg" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-dua-3"
              >
                <p className="text-[20px]">Tenggang Rasa dan Tepa Selira</p>
                <img className=" h-3" src="./arrow.png" alt="bg" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-dua-4"
              >
                <p className="text-[20px]">Saling Tolong Menolong</p>
                <img className=" h-3" src="./arrow.png" alt="bg" />
              </Link>
            </div>
          </div>
        </div>

        {/* sila 3 */}
        <div className="bg-[#DBA3D9] w-full rounded-3xl px-10 py-10 mt-5 max-w-screen-2xl">
          <h1 className="text-[30px]  font-bold">
            {" "}
            Sila Ke-3: Persatuan Indonesia
          </h1>
          <div className="mx-10 mt-10">
            <div className="mt-10  flex  flex-col w-full">
              <Link
                className="shadow-lg  flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-tiga-1"
              >
                <p className="text-[20px]">Cinta Tanah Air dan Bangsa</p>
                <img className=" h-3" src="./arrow.png" alt="bg" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-tiga-2"
              >
                <p className="text-[20px]">Bangga Sebagai Bangsa Indonesia</p>
                <img className=" h-3" src="./arrow.png" alt="bg" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-tiga-3"
              >
                <p className="text-[20px]">Berkorban untuk Bangsa dan Negara</p>
                <img className=" h-3" src="./arrow.png" alt="bg" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-tiga-4"
              >
                <p className="text-[20px]">
                  Jaga Persatuan dan Kesatuan Bangsa
                </p>
                <img className=" h-3" src="./arrow.png" alt="bg" />
              </Link>
            </div>
          </div>
        </div>

        {/* sila 4 */}
        <div className="bg-[#DBA3D9] w-full rounded-3xl px-10 py-10 mt-5 max-w-screen-2xl">
          <h1 className="text-[30px]  font-bold">
            Sila Ke-4: Kerakyatan Yang Dipimpin Oleh Hikmat Kebijaksanaan Dalam
            Permusyawaratan Perwakilan
          </h1>

          <div className="mx-10 mt-10">
            <div className="mt-10  flex  flex-col w-full">
              <Link
                className="shadow-lg  flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-empat-1"
              >
                <p className="text-[20px]">Hormati Hasil Musyawarah</p>
                <img className=" h-3" src="./arrow.png" alt="bg" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-empat-2"
              >
                <p className="text-[20px]">Menjunjung Nilai Kebenaran</p>
                <img className=" h-3" src="./arrow.png" alt="bg" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-empat-3"
              >
                <p className="text-[20px]">Musyawarah dan Mufakat</p>
                <img className=" h-3" src="./arrow.png" alt="bg" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-empat-4"
              >
                <p className="text-[20px]">Tidak Paksakan Kehendak</p>
                <img className=" h-3" src="./arrow.png" alt="bg" />
              </Link>
            </div>
          </div>
        </div>

        {/* sila 5 */}
        <div className="bg-[#DBA3D9] w-full rounded-3xl px-10 py-10 mt-5 max-w-screen-2xl">
          <h1 className="text-[30px]  font-bold">
            Sila Ke-5: Keadilan Sosial Bagi Seluruh Rakyat Indonesia
          </h1>
          <div className="mx-10 mt-10">
            <div className="mt-10  flex  flex-col w-full">
              <Link
                className="shadow-lg  flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-lima-1"
              >
                <p className="text-[20px]">Adil Terhadap Sesama</p>
                <img className=" h-3" src="./arrow.png" alt="bg" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-lima-2"
              >
                <p className="text-[20px]">Hormati Hak Orang Lain</p>
                <img className=" h-3" src="./arrow.png" alt="bg" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-lima-3"
              >
                <p className="text-[20px]">Musyawarah dan Mufakat</p>
                <img className=" h-3" src="./arrow.png" alt="bg" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-lima-4"
              >
                <p className="text-[20px]">Bekerja Keras</p>
                <img className=" h-3" src="./arrow.png" alt="bg" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* mobile */}

      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="w-full justify-center lg:hidden items-center flex flex-col"
      >
        <div className="mt-40 px-10 sm:px-10 flex flex-col text-[#000000]   items-center">
          <div className="flex items-center justify-center min-w-[300px]">
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              src={data.image}
              className="max-h-[270.48px] w-full h-full max-w-[270.48px] object-cover"
              alt="logo"
            />
          </div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="max-w-[866px] w-full mt-20 "
          >
            <h1 className={`text-[40px] font-bold text-[#FF8ADE]`}>
              {data.title}
            </h1>
            <div className="mt-5 text-[17px]">
              <p>{data.deskripsi_satu}</p>
              <p className="mt-5">{data.deskripsi_dua}</p>
              <ol className="mt-5 list-decimal list-inside">
                <li>{data.deskripsi_tiga}</li>
                <li>{data.deskripsi_empat}</li>
                <li>{data.deskripsi_lima}</li>
                <li>{data.deskripsi_enam}</li>
                <li>{data.deskripsi_tujuh}</li>
              </ol>
              <p className="mt-5">{data.deskripsi_delapan}</p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="w-full  justify-center lg:hidden flex-col items-center flex px-10 py-20 text-[#FFFFFF]">
        {/* sila 1 */}
        <div className="bg-[#DBA3D9] w-full rounded-3xl px-5 py-7 max-w-screen-2xl">
          <h1 className="text-[20px]  font-bold">
            {" "}
            Sila Ke-1: Ketuhanan Yang Maha Esa
          </h1>
          <div className=" mt-10">
            <div className="  flex  flex-col w-full">
              <Link
                className="shadow-lg  flex p-2 justify-between items-center px-6 w-full border border-[#FFFFFF] rounded-xl"
                to="/detail-satu-1"
              >
                <p className="text-[20px]">Menghormati Antar Agama</p>
                <img className=" h-3" src="./arrow.png" alt="bg" />
              </Link>
              <Link
                className="shadow-lg  mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-satu-2"
              >
                <p className="text-[20px]">Tidak Paksakan Kepercayaan</p>
                <img className=" h-3" src="./arrow.png" alt="bg" />
              </Link>
              <Link
                className="shadow-lg  mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-satu-3"
              >
                <p className="text-[20px]">Taat Beribadah</p>
                <img className=" h-3" src="./arrow.png" alt="bg" />
              </Link>
              <Link
                className="shadow-lg  mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-satu-4"
              >
                <p className="text-[20px]">Hidup Sederhana</p>
                <img className=" h-3" src="./arrow.png" alt="bg" />
              </Link>
            </div>
          </div>
        </div>

        {/* sila 2 */}

        <div className="bg-[#DBA3D9] w-full rounded-3xl px-5 py-7 mt-5 max-w-screen-2xl">
          <h1 className="text-[20px]  font-bold">
            {" "}
            Sila Ke-2: Kemanusiaan Yang Adil Dan Beradab
          </h1>

          <div className=" mt-10">
            <div className="mt-10  flex  flex-col w-full">
              <Link
                className="shadow-lg  flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-dua-1"
              >
                <p className="text-[20px]">
                  Menjunjung Tinggi Nilai Kemanusiaan
                </p>
                <img className=" h-3" src="./arrow.png" alt="bg" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-dua-2"
              >
                <p className="text-[20px]">
                  Gemar Melakukan Kegiatan Kemanusiaan
                </p>
                <img className=" h-3" src="./arrow.png" alt="bg" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-dua-3"
              >
                <p className="text-[20px]">Tenggang Rasa dan Tepa Selira</p>
                <img className=" h-3" src="./arrow.png" alt="bg" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-dua-4"
              >
                <p className="text-[20px]">Saling Tolong Menolong</p>
                <img className=" h-3" src="./arrow.png" alt="bg" />
              </Link>
            </div>
          </div>
        </div>

        {/* sila 3 */}
        <div className="bg-[#DBA3D9] w-full rounded-3xl px-5 py-7 mt-5 max-w-screen-2xl">
          <h1 className="text-[20px]  font-bold">
            {" "}
            Sila Ke-3: Persatuan Indonesia
          </h1>
          <div className=" mt-10">
            <div className="mt-10  flex  flex-col w-full">
              <Link
                className="shadow-lg  flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-tiga-1"
              >
                <p className="text-[20px]">Cinta Tanah Air dan Bangsa</p>
                <img className=" h-3" src="./arrow.png" alt="bg" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-tiga-2"
              >
                <p className="text-[20px]">Bangga Sebagai Bangsa Indonesia</p>
                <img className=" h-3" src="./arrow.png" alt="bg" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-tiga-3"
              >
                <p className="text-[20px]">Berkorban untuk Bangsa dan Negara</p>
                <img className=" h-3" src="./arrow.png" alt="bg" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-tiga-4"
              >
                <p className="text-[20px]">
                  Jaga Persatuan dan Kesatuan Bangsa
                </p>
                <img className=" h-3" src="./arrow.png" alt="bg" />
              </Link>
            </div>
          </div>
        </div>

        {/* sila 4 */}
        <div className="bg-[#DBA3D9] w-full rounded-3xl px-5 py-7 mt-5 max-w-screen-2xl">
          <h1 className="text-[20px]  font-bold">
            Sila Ke-4: Kerakyatan Yang Dipimpin Oleh Hikmat Kebijaksanaan Dalam
            Permusyawaratan Perwakilan
          </h1>

          <div className=" mt-10">
            <div className="mt-10  flex  flex-col w-full">
              <Link
                className="shadow-lg  flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-empat-1"
              >
                <p className="text-[20px]">Hormati Hasil Musyawarah</p>
                <img className=" h-3" src="./arrow.png" alt="bg" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-empat-2"
              >
                <p className="text-[20px]">Menjunjung Nilai Kebenaran</p>
                <img className=" h-3" src="./arrow.png" alt="bg" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-empat-3"
              >
                <p className="text-[20px]">Musyawarah dan Mufakat</p>
                <img className=" h-3" src="./arrow.png" alt="bg" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-empat-4"
              >
                <p className="text-[20px]">Tidak Paksakan Kehendak</p>
                <img className=" h-3" src="./arrow.png" alt="bg" />
              </Link>
            </div>
          </div>
        </div>

        {/* sila 5 */}
        <div className="bg-[#DBA3D9] w-full rounded-3xl px-5 py-7 mt-5 max-w-screen-2xl">
          <h1 className="text-[20px]  font-bold">
            Sila Ke-5: Keadilan Sosial Bagi Seluruh Rakyat Indonesia
          </h1>
          <div className=" mt-10">
            <div className="mt-10  flex  flex-col w-full">
              <Link
                className="shadow-lg  flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-lima-1"
              >
                <p className="text-[20px]">Adil Terhadap Sesama</p>
                <img className=" h-3" src="./arrow.png" alt="bg" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-lima-2"
              >
                <p className="text-[20px]">Hormati Hak Orang Lain</p>
                <img className=" h-3" src="./arrow.png" alt="bg" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-lima-3"
              >
                <p className="text-[20px]">Musyawarah dan Mufakat</p>
                <img className=" h-3" src="./arrow.png" alt="bg" />
              </Link>
              <Link
                className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-xl"
                to="/detail-lima-4"
              >
                <p className="text-[20px]">Bekerja Keras</p>
                <img className=" h-3" src="./arrow.png" alt="bg" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Pancasila;
