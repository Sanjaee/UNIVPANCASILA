import React from "react";
import AllMenu from "../AllMenu";
import { motion } from "framer-motion";

const TarianSatu = () => {
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
          Bedaya Ketawang
        </h1>
        <p className="mt-5">
          Tari Bedaya Ketawang (Bedhaya Ketawang) adalah sebuah tarian kebesaran
          yang hanya dipentaskan pada saat penobatan dan acara Tingalandalem
          Jumenengan Sunan Surakarta, yakni upacara peringatan kenaikan tahta
          raja. Nama "Bedhaya Ketawang" berasal dari kata "bedhaya" yang berarti
          penari wanita di istana, sementara "ketawang" bermakna langit, merujuk
          pada sesuatu yang tinggi, mulia, dan suci.
        </p>
        <p className="mt-5">
          Tarian ini memiliki nilai sakral dan suci karena melibatkan unsur
          Ketuhanan, mengingat bahwa segala sesuatu terjadi sesuai dengan
          kehendak Tuhan Yang Maha Esa. Bedhaya Ketawang hanya dipertunjukkan
          pada acara kerajaan tertentu, menjadikannya tarian yang sangat
          dihormati dan dianggap suci. Tarian ini menjadi simbol keluhuran dan
          kemuliaan yang terkait dengan acara khusus penobatan raja di kerajaan
          Surakarta.
        </p>
        <p className="mt-5">
          Bedhaya Ketawang merupakan bagian integral dari warisan budaya Jawa
          yang kaya dan menjadi manifestasi artistik dari kebesaran dan
          keagungan acara kerajaan.
        </p>
      </motion.div>
    </>
  );
};

export default TarianSatu;
