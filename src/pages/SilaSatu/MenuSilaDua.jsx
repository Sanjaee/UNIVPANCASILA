import React from "react";
import AllMenu from "../AllMenu";
import { motion } from "framer-motion";

const MenuSilaDua = () => {
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
          Tidak Paksakan Kepercayaan
        </h1>
        <p className="mt-5">
          Penting untuk diingat bahwa dalam nilai Ketuhanan Yang Maha Esa,
          prinsip tidak memaksa kepercayaan menjadi esensial. Hal ini
          mencerminkan sikap toleransi dan penghormatan terhadap kebebasan
          beragama dan berkeyakinan. Nilai ini mengakui hak setiap individu
          untuk memilih dan menjalankan keyakinan agama atau spiritualnya tanpa
          adanya paksaan dari pihak lain.
        </p>
        <p className="mt-5">
          Tidak memaksakan kepercayaan dalam Ketuhanan Yang Maha Esa menciptakan
          lingkungan yang inklusif, menghargai perbedaan, dan mempromosikan
          kerukunan antarumat beragama. Setiap orang memiliki kebebasan untuk
          menentukan jalan rohaninya sendiri, dan nilai ini menekankan
          pentingnya menghormati pluralitas keyakinan dalam masyarakat.
        </p>
        <p className="mt-5">
          Dengan pendekatan yang tidak memaksakan kepercayaan, Indonesia
          meneguhkan prinsip Bhinneka Tunggal Ika, yang mengajarkan bahwa
          meskipun beragam, bangsa Indonesia tetap satu kesatuan. Kebebasan
          beragama dan sikap saling menghormati dalam menjalankan kepercayaan
          menjadi landasan yang kuat untuk membangun persatuan dan kesatuan di
          tengah keragaman budaya dan agama.
        </p>
      </motion.div>
    </>
  );
};

export default MenuSilaDua;
