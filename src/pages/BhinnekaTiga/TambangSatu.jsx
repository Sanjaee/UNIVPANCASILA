import React from "react";
import AllMenu from "../AllMenu";
import { motion } from "framer-motion";

const TambangSatu = () => {
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
          Tambang Emas
        </h1>
        <p className="mt-5">
          Tambang emas adalah lokasi ekstraksi bijih emas dari tanah. Emas
          memiliki nilai ekonomi dan estetika yang tinggi, membuatnya menjadi
          komoditas yang dicari dalam industri perhiasan, investasi, dan
          teknologi. Proses penambangan emas melibatkan berbagai metode,
          termasuk penambangan terbuka dan penambangan bawah tanah. Contoh
          tambang emas di Indonesia meliputi:
        </p>
        <ol className="mt-5 list-decimal list-inside">
          <li>
            Tambang Emas Martabe, Sumatera Utara: Terletak di Sumatera Utara,
            tambang Martabe merupakan salah satu produsen emas terbesar di
            Indonesia.
          </li>
          <li>
            Tambang Emas Gosowong, Halmahera Utara: Tambang ini terletak di
            Pulau Halmahera, Maluku Utara, dan memiliki cadangan emas yang
            signifikan.
          </li>
          <li>
            Tambang Emas Cikotok, Jawa Barat: Merupakan salah satu tambang emas
            tertua di Indonesia, dan terus beroperasi hingga saat ini.
          </li>
          <li>
            Tambang Emas Tujuh Bukit, Jambi: Terletak di Jambi, tambang ini
            merupakan salah satu produsen emas utama di Indonesia.
          </li>
          <li>
            Tambang Emas Pongkor, Jawa Barat: Terletak di Kabupaten Bogor, Jawa
            Barat, tambang ini telah beroperasi sejak tahun 1994 dan
            menghasilkan emas serta perak.
          </li>
        </ol>

        <p className="mt-5">
          Penting untuk mencatat bahwa kegiatan pertambangan emas dapat memiliki
          dampak lingkungan yang signifikan, termasuk deforestasi, pencemaran
          air, dan perubahan ekosistem. Oleh karena itu, pengelolaan
          pertambangan emas yang berkelanjutan dan bertanggung jawab menjadi
          kunci untuk meminimalkan dampak negatifnya.
        </p>
      </motion.div>
    </>
  );
};

export default TambangSatu;
