import React from "react";
import AllMenu from "../AllMenu";
import { motion } from "framer-motion";

const TambangDua = () => {
  return (
    <>
      <AllMenu />
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full text-sm pl-[350px] pr-4 overflow-y-auto h-[500px] pb-20"
      >
        <h1 className="text-2xl text-[#D432A7] font-bold text-center">
          Tambang Nikel
        </h1>
        <p className="mt-5">
          Tambang nikel adalah tempat penambangan bijih nikel, logam yang
          digunakan dalam berbagai industri, terutama dalam produksi baja
          nirkarat (stainless steel). Nikel memiliki sifat tahan karat dan tahan
          korosi, membuatnya sangat penting dalam pembuatan produk-produk yang
          membutuhkan ketahanan terhadap kondisi lingkungan yang ekstrem.Contoh
          tambang nikel di Indonesia meliputi:
        </p>
        <ol className="mt-5 list-decimal list-inside">
          <li>
            Tambang Nikel Sulawesi Tenggara (NST): Terletak di wilayah Sulawesi
            Tenggara, tambang ini merupakan salah satu tambang nikel terbesar di
            Indonesia.
          </li>
          <li>
            Tambang Nikel Obi, Maluku: Pulau Obi, Maluku, juga memiliki tambang
            nikel yang berkontribusi terhadap produksi nikel di Indonesia.
          </li>
          <li>
            Tambang Nikel Pomalaa, Sulawesi Tenggara: Merupakan salah satu
            tambang nikel yang terintegrasi, mencakup kegiatan penambangan dan
            pengolahan nikel.
          </li>
          <li>
            Tambang Nikel Halmahera, Maluku Utara: Pulau Halmahera di Maluku
            Utara juga memiliki deposit nikel yang dieksploitasi untuk memenuhi
            permintaan pasar.
          </li>
          <li>
            Tambang Nikel Morowali, Sulawesi Tengah: Terletak di Kabupaten
            Morowali, Sulawesi Tengah, tambang ini merupakan bagian dari upaya
            pemerintah untuk meningkatkan nilai tambah industri nikel di
            Indonesia.
          </li>
        </ol>

        <p className="mt-5">
          Industri nikel di Indonesia memiliki dampak signifikan terhadap
          ekonomi nasional, tetapi juga memerlukan manajemen yang bijaksana
          dalam menjaga lingkungan dan mendukung pembangunan berkelanjutan.
          Selain itu, penting untuk menerapkan praktik pertambangan yang
          bertanggung jawab untuk melibatkan komunitas setempat dan menjaga
          dampak lingkungan agar minimal.
        </p>
      </motion.div>
    </>
  );
};

export default TambangDua;
