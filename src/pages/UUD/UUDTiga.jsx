import React from "react";
import AllMenu from "../AllMenu";
import { motion } from "framer-motion";

const UUDTiga = () => {
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
          Komisi Yudisial
        </h1>
        <p className="mt-5">
          Komisi Yudisial Republik Indonesia atau yang dikenal sebagai Komisi
          Yudisial (KY RI atau KY) adalah lembaga negara yang didirikan sesuai
          dengan Undang-Undang Dasar Negara Republik Indonesia Tahun 1945.
          Komisi ini memiliki wewenang khusus untuk mengusulkan pengangkatan
          hakim agung dan memegang peran penting dalam menjaga dan menegakkan
          kehormatan, keluhuran martabat, serta perilaku hakim.
        </p>
        <p className="mt-5">
          Sebagai lembaga mandiri, Komisi Yudisial berfungsi tanpa campur tangan
          atau pengaruh dari kekuasaan lainnya. Komisi ini bertanggung jawab
          kepada publik dan berkewajiban melaporkan kinerjanya secara tahunan
          kepada Dewan Perwakilan Rakyat (DPR). Transparansi dan akses informasi
          yang lengkap dan akurat dijaga oleh Komisi Yudisial untuk memastikan
          pertanggungjawaban kepada masyarakat.
        </p>
      </motion.div>
    </>
  );
};

export default UUDTiga;
