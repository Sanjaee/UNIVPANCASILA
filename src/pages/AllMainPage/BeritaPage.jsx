import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import Loading from "../../components/Loading";

const BeritaPage = () => {
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
      <div className="w-full justify-center flex items-center">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="mt-48 max-w-screen-2xl  lg:flex hidden mx-10 pb-20 items-start"
        >
          {/* grid 1 */}
          <div className="flex flex-col w-full justify-center items-center  ">
            <div className="flex flex-col ">
              <h1 className="text-[25px] text-[#000000]  font-bold ">
                Peluncuran Edugame Revolusioner
              </h1>
              <h1 className="text-[25px] text-[#FF8ADE] font-bold">
                Universitas Pancasila Mendorong Pembelajaran Interaktif dan
                Inovatif
              </h1>
            </div>
            <img
              className="mt-10 w-full h-[376px] object-cover"
              src="./berita1.png"
              alt=""
            />
            {/* berita */}
            <div className="mt-10 text-[20px] flex flex-col">
              <p>
                <span className="font-bold">Jakarta</span> – Universitas
                Pancasila dengan bangga meluncurkan kartu kuartet bertema
                edugame, inovasi terbaru yang dirancang untuk meningkatkan
                metode pembelajaran interaktif di kalangan mahasiswa.
              </p>

              <h1 className="font-bold mt-5 ">
                Inovasi Edukasi Melalui Permainan
              </h1>
              <p className="mt-2">
                Kartu kuartet edugame ini merupakan alat pembelajaran yang
                menggabungkan aspek edukasi dan permainan. Dirancang untuk
                membuat proses belajar menjadi lebih menyenangkan, setiap kartu
                dalam kuartet ini berisi informasi dan pertanyaan yang berkaitan
                dengan berbagai topik mata kuliah. Hal ini diharapkan dapat
                mendorong mahasiswa untuk berpikir kritis dan kreatif saat
                belajar.
              </p>

              <h1 className="font-bold mt-5 ">Antusiasme Mahasiswa</h1>
              <p className="mt-2">
                Peluncuran ini mendapatkan sambutan positif dari para mahasiswa.
                Surya, salah satu mahasiswa yang hadir, berkomentar, "Kartu
                kuartet edugame ini sangat menarik. Belajar jadi lebih seru dan
                tidak membosankan. Saya yakin ini akan sangat membantu kami
                dalam memahami materi kuliah."
              </p>

              <h1 className="font-bold mt-5 ">Harapan dan Tujuan</h1>
              <p className="mt-2">
                Dengan peluncuran kartu kuartet edugame ini, Universitas
                Pancasila berharap dapat menjadi pelopor dalam penerapan metode
                pembelajaran yang inovatif di Indonesia. Inisiatif ini
                diharapkan dapat menginspirasi institusi pendidikan lainnya
                untuk mengadopsi pendekatan serupa demi meningkatkan kualitas
                pendidikan nasional.
              </p>

              <h1 className="font-bold mt-5 ">Kesimpulan</h1>
              <p className="mt-2">
                Peluncuran kartu kuartet edugame di Universitas Pancasila
                menandai langkah penting menuju pembelajaran yang lebih
                interaktif dan menyenangkan. Inovasi ini diharapkan dapat
                membawa dampak positif bagi mahasiswa, mendorong mereka untuk
                terus belajar dengan semangat dan antusiasme yang tinggi. Dengan
                metode ini, Universitas Pancasila menunjukkan komitmennya dalam
                menciptakan lingkungan belajar yang dinamis dan inovatif.
              </p>
            </div>
          </div>

          {/* grid 2 */}
          <div className="flex w-full max-w-[472px]   flex-col  mx-5">
            {/* karir */}
            <div className="w-full  flex flex-col ">
              <div className="w-full h-[50px] bg-[#DBA3D9] rounded-xl flex items-center justify-start ">
                <h1 className="ml-5 text-white text-[20px] font-bold">Karir</h1>
              </div>
              {/* karir 1 */}
              <div className="flex items-start mt-10 ">
                <img
                  className="w-full max-w-[210px] h-[120px] object-cover rounded-lg "
                  src="/bgkarir.png"
                  alt=""
                />
                <div className="ml-5">
                  <p className="font-semibold line-clamp-2">
                    Wokshop and Coaching Visit Industry{" "}
                  </p>
                  <p className="text-[15px] line-clamp-3 mt-1 text-[#FF8ADE]">
                    Wokshop and Coaching Visit Industry to Umas Usman Business
                    School
                  </p>
                </div>
              </div>

              {/* karir 2 */}
              <div className="flex items-start mt-7 ">
                <img
                  className="w-full max-w-[210px] h-[120px] object-cover rounded-lg "
                  src="/bgkarir2.png"
                  alt=""
                />
                <div className="ml-5">
                  <p className="font-semibold line-clamp-2">
                    Lowongan Kerja PT Eagle Indo Pharma
                  </p>
                  <p className="text-[15px] line-clamp-3 mt-1 text-[#FF8ADE]">
                    Selengkapnya &#10095;
                  </p>
                </div>
              </div>

              {/* karir 3 */}
              <div className="flex items-start mt-7 ">
                <img
                  className="w-full max-w-[210px] h-[120px] object-cover rounded-lg"
                  src="/bgkarir3.png"
                  alt=""
                />
                <div className="ml-5">
                  <p className="font-semibold line-clamp-2">
                    Lowongan Kerja Watsons
                  </p>
                  <p className="text-[15px] line-clamp-3 mt-1 text-[#FF8ADE]">
                    Selengkapnya &#10095;
                  </p>
                </div>
              </div>
            </div>
            <div className="border-2 boeder-[#ECECEC] w-full my-5  "></div>
            {/* Penghargaan */}
            <div className="w-full  flex flex-col ">
              <div className="w-full h-[50px] bg-[#DBA3D9] rounded-xl flex items-center justify-start ">
                <h1 className="ml-5 text-white text-[20px] font-bold">
                  Penghargaan
                </h1>
              </div>
              {/* Penghargaan 1 */}
              <div className="flex items-start mt-10 ">
                <img
                  className="w-full max-w-[210px] h-[120px] object-cover rounded-lg "
                  src="/bgkarir4.png"
                  alt=""
                />
                <div className="ml-5">
                  <p className="font-semibold line-clamp-2">
                    Program Pembinaan Mahasiswa
                  </p>
                  <p className="text-[15px] line-clamp-3 mt-1 text-[#FF8ADE]">
                    Program pembinaan Mahasiswa Wirausaha (P2MW) 2024
                  </p>
                </div>
              </div>

              {/* Penghargaan 2 */}
              <div className="flex items-start mt-7 ">
                <img
                  className="w-full max-w-[210px] h-[120px] object-cover rounded-lg "
                  src="/bgkarir5.png"
                  alt=""
                />
                <div className="ml-5">
                  <p className="font-semibold line-clamp-2">
                    Pembinaan Wirausaha
                  </p>
                  <p className="text-[15px] line-clamp-3 mt-1 text-[#FF8ADE]">
                    Mahasiswa Pariwisata UP mendapat hibah Program Pembinaan
                    Wirausaha (P2MW) 2023
                  </p>
                </div>
              </div>

              {/* Penghargaan 3 */}
              <div className="flex items-start mt-7 ">
                <img
                  className="w-full max-w-[210px] h-[120px] object-cover rounded-lg"
                  src="/bgkarir6.png"
                  alt=""
                />
                <div className="ml-5">
                  <p className="font-semibold line-clamp-2">
                    Business Model Canva (BMC)
                  </p>
                  <p className="text-[15px] line-clamp-3 mt-1 text-[#FF8ADE]">
                    Business Model Canva (BMC) di acara Wonderpreneur Fest 2023
                  </p>
                </div>
              </div>
            </div>
            {/* berita */}
            <div className="border-2 boeder-[#ECECEC] w-full my-4  "></div>
            {/* berita */}
            <div className="flex flex-col w-full text-sm justify-start ">
              <h1 className="text-xl font-bold text-[#FF8ADE]">
                Berita Lainnya
              </h1>
              <div className="flex  items-center mt-7">
                <img
                  src="/berita2.png"
                  className="w-full h-[120px] rounded-lg"
                  alt=""
                />
                <p className="ml-6 font-bold">
                  Peningkatan Kapasitas SDM dalam Mengelola Desa Hambalang
                  Menjadi Desa Wisata Berbasis Alam, Religi, & Sport Tourism
                </p>
              </div>

              <div className="flex  items-center mt-7">
                <img
                  src="/berita3.png"
                  className="w-full h-[120px] rounded-lg"
                  alt=""
                />
                <p className="ml-6 font-bold">
                  Peningkatan Kapasitas SDM dalam Mengelola Desa Hambalang
                  Menjadi Desa Wisata Berbasis Alam, Religi, & Sport Tourism
                </p>
              </div>

              <div className="flex  items-center mt-7">
                <img
                  src="/berita4.png"
                  className="w-full h-[120px] rounded-lg"
                  alt=""
                />
                <p className="ml-6 font-bold">
                  Peningkatan Kapasitas SDM dalam Mengelola Desa Hambalang
                  Menjadi Desa Wisata Berbasis Alam, Religi, & Sport Tourism
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </>
  );
};

export default BeritaPage;
