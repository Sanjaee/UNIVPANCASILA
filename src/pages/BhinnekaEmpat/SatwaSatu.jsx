import React from "react";
import AllMenu from "../AllMenu";
import { motion } from "framer-motion";

const SatwaSatu = () => {
  return (
    <>
      <AllMenu />
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full text-sm pl-[350px] pr-4 overflow-y-auto h-[500px] pb-20"
      >
        <h1 className="text-2xl text-[#D432A7] font-bold text-center">Anoa</h1>
        <p className="mt-5">
          Anoa (Bubalus sp.), atau kerbau kenit, merupakan kerbau endemik yang
          secara alami berhabitat di daratan Pulau Sulawesi dan Pulau Buton.
          Kerbau ini sering disebut sebagai kerbau kerdil. Anoa termasuk dalam
          kelompok fauna peralihan dan menjadi mamalia yang tergolong dalam
          famili Bovidae.
        </p>
        <p className="mt-5">
          Anoa mendiami hampir seluruh pulau Sulawesi, yang merupakan bagian
          dari kawasan Wallacea. Kawasan ini mencakup pulau-pulau seperti
          Sulawesi, Maluku, Halmahera, Kepulauan Flores, dan pulau-pulau kecil
          di Nusa Tenggara. Kawasan Wallacea dikenal karena kekayaan flora dan
          fauna endemiknya, serta menjadi peralihan antara benua Asia dan
          Australia. Anoa menjadi salah satu satwa endemik yang dilindungi di
          Pulau Sulawesi dan mendiami Kawasan Hutan Lindung Desa Sangginora
          Kabupaten Poso.
        </p>
        <p className="mt-5">
          Ada dua spesies anoa yang diakui, yaitu Anoa pegunungan (Bubalus
          quarlesi) dan Anoa dataran rendah (Bubalus depressicornis). Meskipun
          sebelumnya terdapat perdebatan mengenai status taksonomi keduanya,
          penelitian terbaru menggunakan teknik DNA barcode telah membuktikan
          bahwa keduanya adalah spesies yang berbeda. Kedua jenis anoa ini
          tinggal di hutan yang jarang dijamah manusia dan termasuk satwa liar
          yang sulit dijinakkan.
        </p>

        <p className="mt-5">
          Anoa dilindungi oleh Undang-Undang di Indonesia sejak tahun 1931, dan
          perlindungannya diperkuat dengan Undang-Undang No. 5 Tahun 1990 serta
          Peraturan Pemerintah No. 7 Tahun 1999. Keduanya memiliki perbedaan
          dalam bentuk tanduk dan ukuran tubuh, di mana Anoa pegunungan
          cenderung lebih kecil dengan tanduk melingkar, sedangkan Anoa dataran
          rendah lebih besar dengan tanduk kasar berpenampang segitiga.
        </p>
      </motion.div>
    </>
  );
};

export default SatwaSatu;
