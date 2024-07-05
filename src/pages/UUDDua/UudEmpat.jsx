import React from "react";
import AllMenu from "../AllMenu";
import { motion } from "framer-motion";

const UudDuaEmpat = () => {
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
          Bahasa Bugis
        </h1>
        <p className="mt-5">
          Bahasa Bugis merupakan salah satu bahasa dari rumpun bahasa
          Austronesia yang digunakan oleh suku Bugis. Mayoritas penuturnya
          berada di Sulawesi Selatan. Wilayah penutur bahasa Bugis meliputi
          Kabupaten Maros, Kabupaten Pangkajene dan Kepulauan, Kabupaten Barru,
          Kabupaten Majene, Kabupaten Luwu, Kabupaten Sidenreng Rappang,
          Kabupaten Soppeng, Kabupaten Wajo, Kabupaten Bone, Kabupaten Sinjai,
          Kabupaten Pinrang, dan Kota Parepare.
        </p>
        <p className="mt-5">
          Selain itu, bahasa Bugis juga dipertuturkan di sebagian wilayah
          Kabupaten Enrekang, Kabupaten Majene, dan Kabupaten Bulukumba. Sebagai
          bagian penting dari identitas suku Bugis, bahasa Bugis memainkan peran
          utama dalam membentuk dan memelihara warisan budaya dan tradisi
          masyarakat Bugis di wilayah tersebut.
        </p>
      </motion.div>
    </>
  );
};

export default UudDuaEmpat;
