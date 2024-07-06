import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const NkriPage = () => {
  return (
    <>
      <Navbar />
      <div className="mt-32  flex mx-10 pb-20 items-start">
        {/* grid 1 */}
        <div className="flex flex-col w-full justify-center items-center  ">
          <h1 className="text-xl text-center font-bold text-[#D432A7]">
            Peluncuran Edugame Revolusioner: Universitas Pancasila Mendorong
            Pembelajaran Interaktif dan Inovatif
          </h1>
          <img className="mt-20" src="./berita1.png" alt="" />
          {/* berita */}
          <div className="mt-10 text-[20px] flex flex-col">
            <p>
              <span className="font-bold">Jakarta</span> – Universitas Pancasila
              dengan bangga meluncurkan kartu kuartet bertema edugame, inovasi
              terbaru yang dirancang untuk meningkatkan metode pembelajaran
              interaktif di kalangan mahasiswa.
            </p>

            <h1 className="font-bold mt-5 ">
              Inovasi Edukasi Melalui Permainan
            </h1>
            <p className="mt-2">
              Kartu kuartet edugame ini merupakan alat pembelajaran yang
              menggabungkan aspek edukasi dan permainan. Dirancang untuk membuat
              proses belajar menjadi lebih menyenangkan, setiap kartu dalam
              kuartet ini berisi informasi dan pertanyaan yang berkaitan dengan
              berbagai topik mata kuliah. Hal ini diharapkan dapat mendorong
              mahasiswa untuk berpikir kritis dan kreatif saat belajar.
            </p>

            <h1 className="font-bold mt-5 ">Antusiasme Mahasiswa</h1>
            <p className="mt-2">
              Peluncuran ini mendapatkan sambutan positif dari para mahasiswa.
              Surya, salah satu mahasiswa yang hadir, berkomentar, "Kartu
              kuartet edugame ini sangat menarik. Belajar jadi lebih seru dan
              tidak membosankan. Saya yakin ini akan sangat membantu kami dalam
              memahami materi kuliah."
            </p>

            <h1 className="font-bold mt-5 ">Harapan dan Tujuan</h1>
            <p className="mt-2">
              Dengan peluncuran kartu kuartet edugame ini, Universitas Pancasila
              berharap dapat menjadi pelopor dalam penerapan metode pembelajaran
              yang inovatif di Indonesia. Inisiatif ini diharapkan dapat
              menginspirasi institusi pendidikan lainnya untuk mengadopsi
              pendekatan serupa demi meningkatkan kualitas pendidikan nasional.
            </p>

            <h1 className="font-bold mt-5 ">Kesimpulan</h1>
            <p className="mt-2">
              Peluncuran kartu kuartet edugame di Universitas Pancasila menandai
              langkah penting menuju pembelajaran yang lebih interaktif dan
              menyenangkan. Inovasi ini diharapkan dapat membawa dampak positif
              bagi mahasiswa, mendorong mereka untuk terus belajar dengan
              semangat dan antusiasme yang tinggi. Dengan metode ini,
              Universitas Pancasila menunjukkan komitmennya dalam menciptakan
              lingkungan belajar yang dinamis dan inovatif.
            </p>
          </div>
        </div>

        {/* grid 2 */}
        <div className="flex w-full max-w-[472px]   flex-col  mx-5">
          <div className="w-full h-[635px] bg-[#ECECEC]"></div>
          <div className="w-full h-[472px] bg-[#ECECEC] mt-4"></div>
          {/* berita */}
          <div className="border-2 boeder-[#ECECEC] w-full my-4  "></div>
          {/* berita */}
          <div className="flex flex-col w-full text-sm justify-start ">
            <h1 className="text-xl font-bold text-[#D432A7]">Berita Lainnya</h1>
            <div className="flex  items-center mt-7">
              <img
                src="/berita2.png"
                className="w-full h-[120px] rounded-lg"
                alt=""
              />
              <p className="ml-6 font-bold">
                Peningkatan Kapasitas SDM dalam Mengelola Desa Hambalang Menjadi
                Desa Wisata Berbasis Alam, Religi, & Sport Tourism
              </p>
            </div>

            <div className="flex  items-center mt-7">
              <img
                src="/berita3.png"
                className="w-full h-[120px] rounded-lg"
                alt=""
              />
              <p className="ml-6 font-bold">
                Peningkatan Kapasitas SDM dalam Mengelola Desa Hambalang Menjadi
                Desa Wisata Berbasis Alam, Religi, & Sport Tourism
              </p>
            </div>

            <div className="flex  items-center mt-7">
              <img
                src="/berita4.png"
                className="w-full h-[120px] rounded-lg"
                alt=""
              />
              <p className="ml-6 font-bold">
                Peningkatan Kapasitas SDM dalam Mengelola Desa Hambalang Menjadi
                Desa Wisata Berbasis Alam, Religi, & Sport Tourism
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default NkriPage;
