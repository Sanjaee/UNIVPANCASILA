import React from "react";
import AllMenu from "../AllMenu";
import { motion } from "framer-motion";

const UudDuaDua = () => {
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
          Bahasa Melayu
        </h1>
        <p className="mt-5">
          Bahasa Melayu, atau bahasa Malaysia, adalah bahasa dalam rumpun bahasa
          Austronesia yang dominan di Asia Tenggara Maritim. Dengan sekitar 290
          juta penutur, termasuk 30 juta penutur bahasa Melayu dan 260 juta
          penutur bahasa Indonesia, bahasa ini menjadi bahasa kebangsaan dan
          resmi di Malaysia, Brunei Darussalam, dan Singapura. Bahasa Melayu
          juga menjadi akar dari bahasa Indonesia, yang merupakan bahasa resmi
          di Indonesia. Di samping itu, bahasa Melayu lokal menjadi dialek
          bahasa di Sumatra, Kalimantan, dan bentuk kreol di berbagai daerah di
          Indonesia.
        </p>
        <p className="mt-5">
          Bahasa Melayu memainkan peran penting dalam perdagangan dan kegiatan
          keagamaan di Kepulauan Nusantara dan menjadi bahasa perantara. Selain
          negara-negara sekitarnya, bahasa Melayu juga digunakan di Filipina,
          Sri Lanka, Thailand Selatan, Pulau Natal, Kepulauan Cocos, dan menjadi
          salah satu bahasa kerja di Timor Leste.
        </p>
        <p className="mt-5">
          Bahasa Melayu Klasik, dikenal sebagai bahasa istana atau Court Malay,
          adalah bahasa baku sastra yang berasal dari Kesultanan Melaka dan
          Johor-Riau. Bahasa ini juga dikenal sebagai bahasa Melayu Melaka,
          Johor, atau Riau. Terdapat pula dialek dan kreol Melayu yang berasal
          dari bahasa Melayu Klasik, dengan banyak perbedaan pengucapan dan
          kosakata di antara dialek-dialek tersebut. Contohnya, bahasa Melayu
          Riau berbeda dengan bahasa Melayu Palembang, Jambi, dan Bengkulu dalam
          hal pengucapan dan kosakata.
        </p>
      </motion.div>
    </>
  );
};

export default UudDuaDua;
