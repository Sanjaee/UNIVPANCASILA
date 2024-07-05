import React from "react";
import AllMenu from "../AllMenu";
import { motion } from "framer-motion";
const TradisiSatu = () => {
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
          Fahombo Batu
        </h1>
        <p className="mt-5">
          Fahombo Batu, atau lompat batu, adalah tradisi unik dari Pulau Nias,
          Indonesia. Dalam tradisi ini, pemuda Nias melompati batu setinggi
          sekitar 2 meter sebagai bagian dari upacara adat.
        </p>
        <p className="mt-5">
          Lompat batu dulu adalah cara pemuda Nias membuktikan bahwa mereka
          sudah dewasa dan siap menjadi prajurit. Melompat batu menunjukkan
          keberanian, kekuatan, dan kelincahan.
        </p>
        <p className="mt-5">
          Pemuda yang mengikuti upacara ini mengenakan pakaian tradisional Nias
          dan melompati batu berbentuk trapesium. Acara ini biasanya diiringi
          musik dan tarian tradisional, membuat suasana menjadi meriah.
        </p>

        <p className="mt-5">
          Melompati batu bukan hanya tantangan fisik. Ini adalah simbol
          keberanian dan kematangan. Mereka yang berhasil melompati batu
          dihormati oleh komunitasnya.
        </p>

        <p className="mt-5">
          Saat ini, Fahombo Batu masih dilakukan untuk melestarikan budaya Nias.
          Tradisi ini menarik banyak wisatawan dan menjadi salah satu daya tarik
          budaya Nias.
        </p>
      </motion.div>
    </>
  );
};

export default TradisiSatu;
