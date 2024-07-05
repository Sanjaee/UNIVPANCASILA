import React from "react";
import AllMenu from "../AllMenu";
import { motion } from "framer-motion";

const LaguEmpat = () => {
  return (
    <>
      <AllMenu />
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full text-sm pl-[350px] pr-4"
      >
        <h1 className="text-2xl text-[#D432A7] font-bold text-center">
          Yamko Rambe Yamko
        </h1>
        <p className="mt-5">
          Yamko Rambe Yamko adalah sebuah lagu daerah yang berasal dari Lembah
          Grime, wilayah berpenduduk di Kabupaten Jayapura. Lagu ini merupakan
          iringan dari tradisi permainan Kasep, yang dimiliki oleh tiga suku di
          Lembah Grime, yaitu Namblong, Gresi, dan Kemtuk.
        </p>
        <p className="mt-5">
          Pada tahun 1991, lagu Yamko Rambe Yamko diabadikan dalam album
          "Instrumentalia Indonesian Bamboo Music Angklung Part 3" oleh Tjoek
          Soeparlan. Album tersebut menghadirkan berbagai lagu daerah khas
          Indonesia, termasuk Yamko Rambe Yamko, sebagai bagian dari warisan
          budaya musik tradisional.
        </p>
      </motion.div>
    </>
  );
};

export default LaguEmpat;
