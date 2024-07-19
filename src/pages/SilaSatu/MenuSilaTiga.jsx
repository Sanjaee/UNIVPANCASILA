import React from "react";
import AllMenu from "../AllMenu";
import { motion } from "framer-motion";

const MenuSilaTiga = () => {
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
          Taat Beribadah
        </h1>
        <p className="mt-5">
          Taat beribadah dalam Ketuhanan Yang Maha Esa mencerminkan kewajiban
          untuk menjalankan ibadah dengan penuh kesadaran, ketaatan, dan rasa
          tanggung jawab kepada Tuhan yang diakui oleh seluruh bangsa Indonesia.
          Nilai ini menunjukkan pentingnya menjalankan ibadah sebagai bentuk
          penghormatan, ketaatan, dan pengakuan terhadap keberadaan Tuhan
          sebagai sumber kehidupan dan keadilan.
        </p>
        <p className="mt-5">
          Taat beribadah juga mencakup aspek kedisiplinan dalam menjalankan
          ajaran agama, seperti melakukan ritual ibadah, mengamalkan nilai-nilai
          moral, dan menjalankan norma-norma agama yang dianut. Dengan taat
          beribadah, seseorang menunjukkan komitmen dan dedikasinya dalam
          memperkuat hubungan spiritualnya dengan Tuhan, serta berkontribusi
          positif dalam membangun moralitas dan etika dalam masyarakat.
        </p>
      </motion.div>
    </>
  );
};

export default MenuSilaTiga;
