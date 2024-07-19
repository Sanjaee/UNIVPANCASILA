import React from "react";
import AllMenu from "../AllMenu";
import { motion } from "framer-motion";

const LaguSatu = () => {
  return (
    <>
      <AllMenu />
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full text-sm sm:pl-[350px] custom-300:pl-4 pr-4"
      >
        <h1 className="text-2xl custom-1200:mt-10 text-[#FF8ADE] font-bold text-center">
          Kicir Kicir
        </h1>
        <p className="mt-5">
          Lagu Kicir-Kicir sebenarnya muncul dari tradisi pantun Nusantara,
          terutama dipengaruhi oleh pantun Melayu dan syair. Lirik lagu ini
          menunjukkan keterikatan dengan pola rima, jumlah suku kata, dan
          struktur larik yang mirip dengan pantun dan syair. Setiap baitnya
          memiliki dua larik pertama yang berisi sampiran, diikuti oleh dua
          larik selanjutnya yang berisi isi. Ciri ini menandakan bahwa lagu ini
          merupakan pengembangan dari bentuk pantun dan syair.
        </p>
        <p className="mt-5">
          Budaya Betawi memiliki hubungan erat dengan budaya Melayu dan
          Tionghoa. Karena itu, jejak perpaduan budaya Melayu dan Tionghoa
          terlihat dalam sebagian besar produk budaya Betawi, termasuk lagu
          daerah seperti Kicir-Kicir. Musik dan lirik lagu ini mencerminkan
          kekayaan warisan budaya dan keragaman masyarakat Betawi.
        </p>

        <p className="mt-5">
          Lagu Kicir-Kicir menjadi salah satu representasi keberagaman budaya di
          Indonesia, yang mencerminkan harmoni antara berbagai elemen budaya
          yang berkembang di Nusantara.
        </p>
      </motion.div>
    </>
  );
};

export default LaguSatu;
