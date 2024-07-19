import React from "react";
import AllMenu from "../AllMenu";
import { motion } from "framer-motion";

const TradisiTiga = () => {
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
          Famato Harimau
        </h1>
        <p className="mt-5">
          Famato Harimau adalah tradisi kuno dari Pulau Nias, Sumatra Utara,
          yang melibatkan perburuan harimau. Tradisi ini menunjukkan keberanian
          dan keterampilan berburu masyarakat Nias.
        </p>
        <p className="mt-5">
          Di masa lalu, harimau dianggap ancaman karena sering menyerang ternak
          dan manusia. Famato Harimau adalah cara pemuda Nias membuktikan mereka
          bisa melindungi komunitas mereka.
        </p>
        <p className="mt-5">
          Sekarang, perburuan harimau jarang dilakukan karena perlindungan satwa
          liar. Namun, nilai-nilai dalam tradisi ini masih dihormati dan
          diingat. Tradisi ini sering diceritakan sebagai cerita rakyat dan
          ditampilkan dalam upacara simbolis.
        </p>
      </motion.div>
    </>
  );
};

export default TradisiTiga;
