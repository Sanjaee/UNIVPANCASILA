import React from "react";
import AllMenu from "../AllMenu";
import { motion } from "framer-motion";

const TradisiDua = () => {
  return (
    <>
      <AllMenu />
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full text-sm pl-[350px] pr-4 overflow-y-auto h-[500px] pb-20"
      >
        <h1 className="text-2xl custom-1200:mt-10 text-[#FF8ADE] font-bold text-center">
          Manafo
        </h1>
        <p className="mt-5">
          Manafo adalah tradisi adat dari Pulau Nias, Sumatra Utara. Tradisi ini
          dilakukan untuk menghormati leluhur dan menjaga hubungan baik di
          antara anggota komunitas.
        </p>

        <p className="mt-5">
          Masyarakat Nias sangat menghargai leluhur mereka. Tradisi Manafo
          adalah cara untuk menunjukkan rasa hormat dan syukur kepada leluhur
          serta menjaga keharmonisan sosial.Proses Pelaksanaannya adalah:
        </p>
        <ol className="mt-5 list-decimal list-inside">
          <li>
            Persiapan: Keluarga atau komunitas menyiapkan makanan, minuman, dan
            persembahan.
          </li>
          <li>
            Ritual Utama: Pada hari pelaksanaan, ritual dimulai dengan doa dan
            pemberian persembahan kepada leluhur. Ritual ini dipimpin oleh
            pemuka adat atau tokoh masyarakat.
          </li>
          <li>
            Pemberian Persembahan: Persembahan biasanya berupa makanan
            tradisional, sirih, pinang, dan hasil bumi.
          </li>
          <li>
            Pesta Adat: Setelah ritual, acara dilanjutkan dengan pesta adat yang
            melibatkan seluruh komunitas. Pesta ini diiringi tarian dan musik
            tradisional Nias.
          </li>
        </ol>
        <p className="mt-5">
          Manafo adalah tradisi penting di Nias yang menunjukkan penghormatan
          kepada leluhur dan mempererat hubungan sosial. Tradisi ini juga
          berperan dalam melestarikan budaya Nias yang kaya dan unik.
        </p>
      </motion.div>
    </>
  );
};

export default TradisiDua;
