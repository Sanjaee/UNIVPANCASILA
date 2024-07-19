import React from "react";
import AllMenu from "../AllMenu";
import { motion } from "framer-motion";

const SilaTigaDua = () => {
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
          Bangga Sebagai Bangsa Indonesia
        </h1>
        <p className="mt-5">
          Rasa bangga sebagai bangsa Indonesia dalam persatuan mencerminkan
          kebanggaan atas identitas dan jati diri sebagai bagian dari negara
          Indonesia yang berdaulat. Nilai ini menekankan pentingnya rasa
          memiliki dan memahami sejarah, budaya, serta keberagaman yang ada di
          Indonesia. Dengan merasa bangga sebagai bangsa Indonesia, individu
          diharapkan dapat bersatu untuk mencapai tujuan bersama, memajukan
          negara, dan meningkatkan kesejahteraan bersama.
        </p>
        <p className="mt-5">
          Rasa bangga ini juga mengandung makna untuk menjaga dan melestarikan
          nilai-nilai luhur, tradisi, serta warisan budaya yang dimiliki oleh
          Indonesia. Dalam persatuan, rasa bangga menjadi perekat yang kuat
          untuk memupuk semangat gotong royong dan kerja sama demi kepentingan
          bersama. Melalui rasa bangga sebagai bangsa Indonesia, diharapkan
          masyarakat dapat bersama-sama mengatasi tantangan, membangun citra
          positif, dan menjaga keutuhan negara.
        </p>
      </motion.div>
    </>
  );
};

export default SilaTigaDua;
