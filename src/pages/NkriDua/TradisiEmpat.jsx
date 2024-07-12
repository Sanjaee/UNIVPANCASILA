import React from "react";
import AllMenu from "../AllMenu";
import { motion } from "framer-motion";

const TradisiEmpat = () => {
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
          Ya ahowu Festival
        </h1>
        <p className="mt-5">
          Ya ahowu Festival adalah festival budaya tahunan yang diadakan di
          Pulau Nias, Sumatra Utara, Indonesia. Nama "Ya’ahowu" diambil dari
          salam khas Nias yang berarti "semoga sehat dan sejahtera." Festival
          ini bertujuan untuk merayakan dan mempromosikan kekayaan budaya serta
          tradisi masyarakat Nias.
        </p>
        <p className="mt-5">
          Festival ini pertama kali diselenggarakan sebagai bagian dari upaya
          untuk memperkenalkan Nias sebagai destinasi wisata budaya dan alam.
          Melalui festival ini, pemerintah daerah dan masyarakat setempat
          berharap dapat menarik lebih banyak wisatawan dan meningkatkan
          kesadaran akan keunikan budaya Nias.
        </p>
        <p className="mt-5">
          Ya ahowu Festival kini menjadi salah satu acara tahunan yang
          ditunggu-tunggu di Nias. Festival ini tidak hanya menarik wisatawan
          lokal, tetapi juga internasional. Media sosial dan promosi online
          telah membantu menyebarkan informasi tentang festival ini ke seluruh
          dunia.
        </p>
      </motion.div>
    </>
  );
};

export default TradisiEmpat;
