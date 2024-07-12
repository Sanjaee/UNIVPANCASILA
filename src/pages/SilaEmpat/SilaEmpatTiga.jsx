import React from "react";
import AllMenu from "../AllMenu";
import { motion } from "framer-motion";

const SilaEmpatTiga = () => {
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
          Musyawarah dan Mufakat
        </h1>
        <p className="mt-5">
          Mencerminkan semangat partisipasi aktif rakyat Indonesia dalam
          pengambilan keputusan yang mengarah pada kesejahteraan bersama. Nilai
          ini menekankan pentingnya menjalankan proses musyawarah, di mana
          berbagai pihak berkumpul untuk membahas dan menyusun kebijakan atau
          keputusan yang memengaruhi kehidupan bersama.
        </p>
        <p className="mt-5">
          Dalam musyawarah, setiap suara dan pendapat dihargai, dan tujuan
          utamanya adalah mencapai mufakat atau kesepakatan bersama. Mufakat
          menciptakan kondisi di mana keputusan yang diambil merupakan hasil
          kesepakatan bersama, dan semua pihak merasa terlibat dan memiliki
          tanggung jawab terhadap keputusan tersebut.
        </p>
        <p className="mt-5">
          Musyawarah dan mufakat menjadi dasar bagi penyelenggaraan pemerintahan
          yang demokratis dan inklusif. Nilai ini mencerminkan semangat adil,
          rasa tanggung jawab bersama, serta keadilan dalam pengambilan
          keputusan. Dengan menjunjung tinggi musyawarah dan mufakat, Pancasila
          mengajarkan bahwa kekuasaan berasal dari rakyat dan dijalankan untuk
          kepentingan rakyat.
        </p>
      </motion.div>
    </>
  );
};

export default SilaEmpatTiga;
