import React from "react";
import AllMenu from "../AllMenu";
import { motion } from "framer-motion";

const UudDuaSatu = () => {
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
          Bahasa Keyeli
        </h1>
        <p className="mt-5">
          Bahasa Kayeli adalah sebuah bahasa Austronesia yang digunakan di
          daerah Maluku Tengah, Pulau Buru utara, dan Teluk Namlea di selatan,
          provinsi Maluku, Indonesia. Sayangnya, bahasa ini mengalami risiko
          kepunahan.
        </p>
        <p className="mt-5">
          Status mendekati kepunahan membawa dampak serius terhadap
          keberlanjutan bahasa Kayeli. Upaya pelestarian dan revitalisasi
          mungkin diperlukan untuk memastikan kelangsungan hidup bahasa ini.
        </p>
      </motion.div>
    </>
  );
};

export default UudDuaSatu;
