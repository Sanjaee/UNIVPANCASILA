import React from "react";
import AllMenu from "../AllMenu";
import { motion } from "framer-motion";

const SilaDuaDua = () => {
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
          Gemar Melakukan Kegiatan Kemanusiaan
        </h1>
        <p className="mt-5">
          Gemar melakukan kegiatan kemanusiaan adalah langkah positif dalam
          mewujudkan kemanusiaan yang adil dan beradab. Dengan aktif terlibat
          dalam kegiatan kemanusiaan, seseorang dapat memberikan dampak positif
          pada lingkungan sekitar dan masyarakat secara luas. Tindakan ini
          mencerminkan nilai-nilai empati, kepedulian, dan tanggung jawab
          sosial, yang merupakan fondasi dari kemanusiaan yang adil dan beradab.
          Melalui partisipasi aktif dalam kegiatan kemanusiaan, kita dapat
          membantu mereka yang membutuhkan, menciptakan hubungan yang kuat dalam
          masyarakat, dan bersama-sama membangun dunia yang lebih baik.
        </p>
      </motion.div>
    </>
  );
};

export default SilaDuaDua;
