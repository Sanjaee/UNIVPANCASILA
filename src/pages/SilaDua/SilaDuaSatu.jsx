import React from "react";
import AllMenu from "../AllMenu";
import { motion } from "framer-motion";

const SilaDuaSatu = () => {
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
          Menjunjung Tinggi Nilai Kemanusiaan
        </h1>
        <p className="mt-5">
          Menghormati dan menghargai hak asasi manusia, adil dan setara dalam
          perlakuan, toleransi dan menghargai keanekaragaman, berkomunikasi
          dengan beradab, serta memberdayakan melalui pendidikan, adalah
          landasan moral yang memandu interaksi manusia untuk menciptakan
          masyarakat yang adil dan beradab.
        </p>
      </motion.div>
    </>
  );
};

export default SilaDuaSatu;
