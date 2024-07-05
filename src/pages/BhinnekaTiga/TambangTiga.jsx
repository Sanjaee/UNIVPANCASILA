import React from "react";
import AllMenu from "../AllMenu";
import { motion } from "framer-motion";

const TambangTiga = () => {
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
          Tambang Timah
        </h1>
        <p className="mt-5">
          Tambang timah adalah tempat penambangan bijih timah, logam yang
          memiliki berbagai aplikasi dalam industri. Bijih timah diekstraksi
          melalui proses penambangan dan pengolahan untuk mendapatkan logam
          timah yang digunakan dalam pembuatan berbagai produk, termasuk solder,
          timah cor, dan baterai.Contoh tambang timah di Indonesia meliputi:
        </p>
        <ol className="mt-5 list-decimal list-inside">
          <li>
            Tambang Timah Bangka-Belitung: Bangka-Belitung dikenal sebagai salah
            satu produsen timah terbesar di dunia. Pulau Bangka dan Belitung
            memiliki banyak tambang timah yang menyumbang signifikan terhadap
            produksi global.
          </li>
          <li>
            Tambang Timah Kundur, Riau: Terletak di Pulau Kundur, Riau, tambang
            ini juga merupakan sumber produksi timah yang penting di Indonesia.
          </li>
          <li>
            Tambang Timah Kamativi, Bangka Tengah: Merupakan tambang timah yang
            terletak di Kabupaten Bangka Tengah, Bangka Belitung.
          </li>
          <li>
            Tambang Timah Pemali, Bangka Tengah: Tambang ini berada di Bangka
            Tengah dan menjadi salah satu kontributor utama dalam produksi timah
            di Indonesia.
          </li>
          <li>
            Tambang Timah Rintis, Bangka Selatan: Terletak di Kabupaten Bangka
            Selatan, tambang ini juga turut andil dalam industri timah di
            Indonesia.
          </li>
        </ol>

        <p className="mt-5">
          Produksi timah dari tambang-tambang ini sangat penting dalam
          perekonomian Indonesia dan industri global karena timah memiliki sifat
          yang memungkinkannya digunakan dalam berbagai aplikasi teknologi dan
          manufaktur. Meskipun penting dalam pembuatan logam dan produk berbasis
          timah, perlu diterapkan praktik penambangan yang bertanggung jawab
          untuk menjaga keberlanjutan sumber daya dan lingkungan.
        </p>
      </motion.div>
    </>
  );
};

export default TambangTiga;
