import React from "react";
import AllMenu from "../AllMenu";
import { motion } from "framer-motion";

const SilaDuaTiga = () => {
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
          Tenggang Rasa dan Tepa Selira
        </h1>
        <p className="mt-5">
          Tenggang rasa dan tepa selira merupakan aspek penting dalam
          menciptakan kemanusiaan yang adil dan beradab. Tenggang rasa
          mencerminkan sikap saling menghormati dan memahami perasaan orang
          lain, sementara tepa selira menunjukkan keharmonisan dan keselarasan
          dalam kehidupan bermasyarakat. Dengan mengedepankan tenggang rasa dan
          tepa selira, kita dapat menjaga hubungan yang harmonis, menghargai
          perbedaan, dan menciptakan lingkungan sosial yang adil bagi semua.
        </p>
      </motion.div>
    </>
  );
};

export default SilaDuaTiga;
