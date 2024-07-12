import React from "react";
import AllMenu from "../AllMenu";
import { motion } from "framer-motion";

const UudDua = () => {
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
          Mahkamah Konstitusi
        </h1>
        <p className="mt-5">
          Mahkamah Konstitusi Republik Indonesia (MKRI) adalah lembaga tinggi
          negara dalam sistem ketatanegaraan Indonesia, berperan sebagai
          pemegang kekuasaan kehakiman bersama-sama dengan Mahkamah Agung. MKRI
          memiliki wewenang khusus dalam mengadili perkara-perkara yang
          berkaitan dengan ketentuan konstitusi dan undang-undang yang berkaitan
          dengan pemilihan umum.
        </p>
        <p className="mt-5">
          MKRI didirikan sebagai langkah untuk menjamin pelaksanaan supremasi
          hukum dan menjaga keberlanjutan konstitusi. Anggota MKRI dipilih oleh
          Dewan Perwakilan Rakyat dan diresmikan oleh Presiden setelah melalui
          proses seleksi yang ketat.
        </p>
        <p className="mt-5">
          Sebagai pengawal konstitusi, MKRI memegang peran penting dalam
          menegakkan keadilan dan melindungi hak-hak konstitusional warga
          negara. Keputusan MKRI memiliki kekuatan hukum tetap dan mengikat
          semua pihak, termasuk lembaga-lembaga negara lainnya.
        </p>
        <p className="mt-5">
          Dengan demikian, MKRI menjadi satu-satunya lembaga yang memiliki
          kewenangan untuk memastikan kesesuaian setiap peraturan
          perundang-undangan dengan konstitusi dan berperan sebagai penjaga
          konstitusi di Indonesia.
        </p>
      </motion.div>
    </>
  );
};

export default UudDua;
