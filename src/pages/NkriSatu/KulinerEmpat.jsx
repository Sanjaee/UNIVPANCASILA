import React from "react";
import AllMenu from "../AllMenu";
import { motion } from "framer-motion";

const KulinerEmpat = () => {
  return (
    <>
      <AllMenu />
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full text-sm sm:pl-[350px] custom-300:pl-4 pr-4 overflow-y-auto h-[500px] pb-20"
      >
        <h1 className="text-2xl custom-1200:mt-10 text-[#FF8ADE] font-bold text-center">
          Empal Gentong
        </h1>
        <p className="mt-5">
          Empal gentong adalah hidangan khas Cirebon, Jawa Barat, serupa dengan
          gulai, dimasak dengan kayu bakar dalam gentong tanah liat. Bahan
          utamanya melibatkan usus, babat, dan daging sapi. Asalnya dari
          Kabupaten Cirebon, makanan ini diantaranya melengkapi kelezatan
          kuliner khas Cirebon, seperti tahu gejrot dan docang.
        </p>
        <p className="mt-5">
          Proses memasaknya menggunakan kayu bakar dan gentong memberikan cita
          rasa khas. Empal gentong disajikan dengan kucai (Allium tuberosum) dan
          sambal dari cabai kering yang digiling. Makanan ini dapat dinikmati
          dengan nasi atau lontong, yang dalam tradisi Cirebon hanyalah beras
          dalam silinder daun pisang, direbus selama 4 jam.
        </p>
      </motion.div>
    </>
  );
};

export default KulinerEmpat;
