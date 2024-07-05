import React from "react";
import AllMenu from "../AllMenu";
import { motion } from "framer-motion";

const TarianTiga = () => {
  return (
    <>
      <AllMenu />
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full text-sm pl-[350px] pr-4"
      >
        <h1 className="text-2xl text-[#D432A7] font-bold text-center">Kecak</h1>
        <p className="mt-5">
          Kecak adalah dramatari seni khas Bali yang mengisahkan kisah Ramayana,
          khususnya fokus pada pertarungan antara Rama dan Rahwana. Tarian ini
          melibatkan puluhan atau lebih penari laki-laki yang duduk berbaris
          melingkar. Dengan irama tertentu, mereka bersama-sama menyerukan "cak"
          sambil mengangkat kedua lengan, menggambarkan adegan ketika barisan
          kera membantu Rama dalam perang melawan Rahwana.
        </p>
        <p className="mt-5">
          Awalnya, Kecak berasal dari ritual sanghyang, sebuah tradisi tarian di
          mana penari berada dalam kondisi tidak sadar, berkomunikasi dengan
          Tuhan atau roh para leluhur, dan menyampaikan harapan-harapannya
          kepada masyarakat.
        </p>
        <p className="mt-5">
          Para penari dalam Kecak mengenakan kain kotak-kotak yang melingkari
          pinggang mereka, sementara penari lain memerankan tokoh-tokoh utama
          dari Ramayana seperti Rama, Shinta, Rahwana, Hanoman, dan Sugriwa.
          Musik tari ini diambil dari ritual tarian sanghyang, dan tidak
          menggunakan alat musik, hanya kincringan yang dikenakan pada kaki
          penari yang memerankan tokoh Ramayana.
        </p>

        <p className="mt-5">
          Pada sekitar tahun 1930-an, Wayan Limbak dan pelukis Jerman Walter
          Spies bekerja sama menciptakan tarian Kecak berdasarkan tradisi
          Sanghyang dan kisah Ramayana. Wayan Limbak kemudian mempopulerkan
          tarian ini saat berkeliling dunia bersama rombongan penari Bali-nya.
        </p>
      </motion.div>
    </>
  );
};

export default TarianTiga;
