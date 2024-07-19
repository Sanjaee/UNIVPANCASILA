import React from "react";
import AllMenu from "../AllMenu";
import { motion } from "framer-motion";

const KulinerDua = () => {
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
          Karedok
        </h1>
        <p className="mt-5">
          Karedok, sebuah kuliner khas Sunda di Indonesia, menggoda selera
          dengan kombinasi sayuran segar dan saus kacang yang kaya rasa. Sayuran
          mentah yang digunakan meliputi mentimun, taoge, kol, kacang panjang,
          ubi, labu siam, daun kemangi, dan terong atau leunca. Keberagaman
          sayuran ini menciptakan perpaduan warna, tekstur, dan nutrisi yang
          menggiurkan.
        </p>
        <p className="mt-5">
          Saus kacang yang melapisi karedok merupakan campuran yang diolah
          dengan hati-hati. Bumbu kacang ini terdiri dari cabai merah untuk
          kepedasan, bawang putih untuk aroma, kencur untuk kelezatan, kacang
          tanah untuk kekayaan rasa, air asam untuk keasaman, gula kawung untuk
          manis, garam untuk keseimbangan rasa, dan terasi untuk aroma khas.
          Proses penggilingan dan pencampuran bumbu ini menjadi kunci
          keharmonisan cita rasa saus kacang yang melengkapi kelezatan karedok.
        </p>
        <p className="mt-5">
          Dengan paduan sayuran segar dan saus kacang yang lezat, karedok tidak
          hanya memikat lidah, tetapi juga menyajikan pengalaman kuliner yang
          memanjakan indera.
        </p>
      </motion.div>
    </>
  );
};

export default KulinerDua;
