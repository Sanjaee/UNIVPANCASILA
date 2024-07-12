import React from "react";
import AllMenu from "../AllMenu";
import { motion } from "framer-motion";
const SilaTigaEmpat = () => {
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
          Jaga Persatuan dan Kesatuan Bangsa
        </h1>
        <p className="mt-5">
          Yang menekankan pentingnya memelihara hubungan harmonis dan keutuhan
          antarwarga negara Indonesia. Nilai ini mencerminkan kebutuhan untuk
          menjaga persatuan, menghormati keberagaman, serta membangun kesadaran
          kolektif sebagai satu bangsa.
        </p>
        <p className="mt-5">
          Dalam konteks ini, individu diharapkan menjauhi tindakan atau sikap
          yang dapat merusak persatuan dan kesatuan bangsa. Nilai ini mendorong
          untuk menghargai perbedaan suku, agama, ras, dan antar golongan
          sebagai kekayaan yang memperkuat Indonesia. Selain itu, menjaga
          persatuan dan kesatuan juga berarti memupuk sikap inklusif,
          mengedepankan dialog, serta menyelesaikan perbedaan dengan cara damai
          dan demokratis.
        </p>

        <p className="mt-5">
          Pentingnya menjaga persatuan dan kesatuan bangsa memperkuat fondasi
          kebangsaan, mencegah terjadinya konflik internal, dan memungkinkan
          Indonesia untuk bersatu dalam menghadapi tantangan dan meraih kemajuan
          bersama. Nilai ini merupakan pondasi bagi terciptanya masyarakat yang
          solidaritas, memiliki rasa kebersamaan, dan bersatu untuk mencapai
          visi dan misi negara.
        </p>
      </motion.div>
    </>
  );
};

export default SilaTigaEmpat;
