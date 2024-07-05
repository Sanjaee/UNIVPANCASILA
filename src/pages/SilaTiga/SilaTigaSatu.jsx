import React from "react";
import AllMenu from "../AllMenu";
import { motion } from "framer-motion";

const SilaTigaSatu = () => {
  return (
    <>
      <AllMenu />
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full text-sm pl-[350px] pr-4"
      >
        <h1 className="text-2xl text-[#D432A7] font-bold text-center">
          Cinta Tanah Air dan Bangsa
        </h1>
        <p className="mt-5">
          Cinta tanah air dan bangsa merupakan nilai yang sangat penting dalam
          persatuan Indonesia. Ini mencerminkan rasa kecintaan dan kesetiaan
          terhadap Indonesia sebagai tanah air yang dipenuhi dengan keberagaman
          budaya, suku, dan agama. Nilai ini menekankan pentingnya memiliki rasa
          kebanggaan dan tanggung jawab terhadap negeri ini, serta bersatu untuk
          membangun masa depan yang lebih baik.
        </p>
        <p className="mt-5">
          Dalam konteks persatuan, cinta tanah air dan bangsa juga mengajarkan
          untuk menghargai perbedaan dan menjaga persatuan di tengah
          keanekaragaman. Hal ini menunjukkan bahwa meskipun kita berasal dari
          latar belakang yang berbeda, kita tetap satu sebagai bangsa Indonesia.
          Dengan mencintai tanah air dan bangsa, kita diharapkan dapat bekerja
          sama untuk mencapai kemajuan dan kesejahteraan bersama, tanpa
          memandang perbedaan yang ada.
        </p>
      </motion.div>
    </>
  );
};

export default SilaTigaSatu;
