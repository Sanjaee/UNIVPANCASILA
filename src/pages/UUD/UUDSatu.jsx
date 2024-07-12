import React from "react";
import AllMenu from "../AllMenu";
import { motion } from "framer-motion";

const UudSatu = () => {
  return (
    <>
      <AllMenu />
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full text-sm pl-[350px] pr-4"
      >
        <h1 className="text-2xl custom-1200:mt-10 text-[#FF8ADE] font-bold text-center">
          BPK (Badan Pengawas Keuangan)
        </h1>
        <p className="mt-5">
          Badan Pemeriksa Keuangan Republik Indonesia (BPK RI), sebelumnya
          dikenal sebagai BEPEKA, adalah lembaga negara dalam sistem
          ketatanegaraan Indonesia. BPK memiliki kewenangan untuk memeriksa
          pengelolaan dan tanggung jawab keuangan negara. Sesuai dengan UUD
          1945, BPK diakui sebagai lembaga yang bebas dan mandiri.
        </p>
        <p className="mt-5">
          Anggota BPK dipilih oleh Dewan Perwakilan Rakyat, dengan
          mempertimbangkan masukan dari Dewan Perwakilan Daerah, dan diresmikan
          oleh Presiden. Sebelum menjabat, anggota BPK wajib mengucapkan sumpah
          atau janji sesuai dengan agamanya, yang dipandu oleh Ketua Mahkamah
          Agung.
        </p>
        <p className="mt-5">
          Sayangnya, beberapa kasus penerimaan suap yang melibatkan auditor BPK
          dalam pemberian status WTP (Wajar Tanpa Pengecualian) telah mencoreng
          kredibilitas lembaga ini. Kontroversi ini menimbulkan pertanyaan
          terhadap integritas BPK, memerlukan upaya pemulihan untuk memulihkan
          kepercayaan publik terhadap lembaga ini.
        </p>
      </motion.div>
    </>
  );
};

export default UudSatu;
