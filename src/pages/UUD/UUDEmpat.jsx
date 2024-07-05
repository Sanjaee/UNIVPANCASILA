import React from "react";
import AllMenu from "../AllMenu";
import { motion } from "framer-motion";

const UudEmpat = () => {
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
          MPR/DPR
        </h1>
        <p className="mt-5">
          Majelis Permusyawaratan Rakyat/Dewan Perwakilan Rakyat (MPR/DPR)
          adalah dua lembaga legislatif utama di Indonesia. MPR bertanggung
          jawab atas pembuatan dan perubahan Undang-Undang Dasar Negara Republik
          Indonesia. Setelah amandemen UUD 1945, MPR menjadi lembaga bikameral
          yang terdiri dari Dewan Perwakilan Rakyat (DPR) dan Dewan Perwakilan
          Daerah (DPD)DPR, sebagai bagian dari MPR, adalah lembaga perwakilan
          rakyat yang bertugas membahas dan menetapkan undang-undang. Anggotanya
          dipilih melalui pemilihan umum. DPD, bagian lain dari MPR, mewakili
          daerah-daerah di Indonesia dan memiliki kewenangan terbatas dalam
          pembuatan undang-undang.
        </p>
        <p className="mt-5">
          MPR/DPR memiliki peran kunci dalam sistem ketatanegaraan Indonesia,
          mengambil bagian dalam pembuatan undang-undang, pengangkatan presiden
          dan wakil presiden, serta fungsi pengawasan terhadap pemerintahan.
          Sidang MPR/DPR menjadi ajang penting dalam menentukan arah kebijakan
          dan legislatif negara.
        </p>
      </motion.div>
    </>
  );
};

export default UudEmpat;
