import React from "react";
import AllMenu from "../AllMenu";
import { motion } from "framer-motion";

const KulinerTiga = () => {
  return (
    <>
      <AllMenu />
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full text-sm pl-[350px] pr-4 overflow-y-auto h-[500px] pb-20"
      >
        <h1 className="text-2xl text-[#D432A7] font-bold text-center">
          Kerak Telor
        </h1>
        <p className="mt-5">
          Kerak telur, hidangan khas Jakarta (Betawi), merupakan sajian autentik
          dengan bahan utama beras ketan putih, telur ayam atau bebek, dan ebi
          (udang kering diasinkan) yang disangrai hingga kering. Ditambah dengan
          bawang merah goreng, kerak telur kemudian dilengkapi dengan bumbu yang
          dihaluskan, termasuk kelapa sangrai, cabai merah, kencur, jahe,
          kunyit, sereh halus, merica butiran, garam, dan gula pasir.
        </p>
        <p className="mt-5">
          Penyajian kerak telur tidak terbatas pada acara khusus; hidangan ini
          dapat dinikmati pada hari-hari biasa. Lokasi populer untuk menikmati
          kerak telur adalah sekitar Kota Tua, Jakarta Barat. Secara sejarah,
          kerak telur telah mengakar sejak zaman kolonial Belanda dan diyakini
          diciptakan secara tidak sengaja oleh masyarakat Betawi pada tahun
          1920-an.
        </p>
        <p className="mt-5">
          Selain sebagai warisan kuliner bersejarah, kerak telur telah menjadi
          favorit di kalangan masyarakat Betawi. Pemeliharaan dan pelestarian
          hidangan ini dianggap penting untuk mempertahankan keberlanjutan
          budaya kuliner Betawi.
        </p>
      </motion.div>
    </>
  );
};

export default KulinerTiga;
