import React from "react";
import AllMenu from "../AllMenu";
import { motion } from "framer-motion";

const SatwaTiga = () => {
  return (
    <>
      <AllMenu />
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full text-sm sm:pl-[350px] custom-300:pl-4 pr-4 overflow-y-auto h-[500px] pb-20"
      >
        <h1 className="text-2xl custom-1200:mt-10 text-[#FF8ADE] font-bold text-center">
          Anggrek
        </h1>
        <p className="mt-5">
          Suku anggrek-anggrekan atau Orchidaceae merupakan salah satu suku
          tumbuhan berbunga dengan jumlah jenis terbanyak. Anggota-anggotanya
          tersebar luas mulai dari daerah tropika basah hingga wilayah
          sirkumpolar, walaupun sebagian besar ditemukan di daerah tropika.
          Orchidaceae memiliki banyak jenis, dan kebanyakan hidup sebagai
          epifit, terutama yang berasal dari daerah tropika. Di daerah beriklim
          sedang, anggrek biasanya hidup di tanah dan mengembangkan umbi sebagai
          adaptasi terhadap musim dingin. Karakteristik organ-organ anggrek yang
          cenderung tebal dan "berdaging" (sukulen) memungkinkannya untuk
          bertahan dalam kondisi ketersediaan air yang terbatas. Anggrek epifit
          dapat hidup dari embun dan kelembapan udara.
        </p>
        <p className="mt-5">
          Suku Orchidaceae terkenal karena anggotanya yang memiliki bunga indah
          dan berwarna-warni, sehingga sering dijadikan tanaman hias. Beberapa
          anggota suku ini juga memiliki nilai ekonomi yang tinggi, seperti
          vanili yang dihasilkan dari beberapa spesies anggrek.
        </p>
        <p className="mt-5">
          Orchidaceae menjadi sumber inspirasi untuk nama Kereta api Argo
          Anggrek, sebuah layanan kereta api eksekutif yang melayani rute
          Surabaya Pasar Turi–Gambir. Nama ini mencerminkan keindahan dan
          keberagaman anggrek, sejalan dengan kualitas dan kenyamanan layanan
          kereta api tersebut.
        </p>
      </motion.div>
    </>
  );
};

export default SatwaTiga;
