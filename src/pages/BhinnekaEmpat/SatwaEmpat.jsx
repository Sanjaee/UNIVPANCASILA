import React from "react";
import AllMenu from "../AllMenu";
import { motion } from "framer-motion";

const SatwaEmpat = () => {
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
          Rafflesia Arnoldi
        </h1>
        <p className="mt-5">
          Padma raksasa (Rafflesia arnoldii) merupakan tumbuhan parasit obligat
          yang terkenal karena memiliki bunga berukuran sangat besar, bahkan
          dianggap sebagai bunga terbesar di dunia. Bunga Rafflesia terkenal
          sebagai bunga yang unik karena hanya terdiri dari bunga mekar tanpa
          daun, akar, dan batang. Sebagai parasit obligat, Rafflesia bergantung
          pada inangnya, yaitu tumbuhan merambat (liana) Tetrastigma, untuk
          tumbuh dan berkembang. Tumbuhan ini tidak memiliki daun dan tidak
          mampu melakukan fotosintesis.
        </p>
        <p className="mt-5">
          Rafflesia memiliki struktur jaringan yang mirip dengan fungsi akar
          yang disebut haustarium. Meskipun tanpa kemampuan fotosintesis,
          Rafflesia dapat mengekstrak nutrisi yang diperlukan dari inangnya
          melalui haustarium. Proses ini memungkinkan Rafflesia untuk tumbuh dan
          menghasilkan bunga yang besar.
        </p>
        <p className="mt-5">
          Bunga Rafflesia sendiri terkenal karena ukurannya yang mencolok.
          Tumbuhan ini tumbuh di hutan-hutan di Asia Tenggara, terutama
          Indonesia, dan menjadi daya tarik bagi para pengamat alam dan pecinta
          flora. Keunikan dan keindahan bunga Rafflesia membuatnya menjadi
          subjek penelitian dan perhatian di bidang botani.
        </p>
      </motion.div>
    </>
  );
};

export default SatwaEmpat;
