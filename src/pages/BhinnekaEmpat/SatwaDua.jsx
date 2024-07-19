import React from "react";
import AllMenu from "../AllMenu";
import { motion } from "framer-motion";

const SatwaDua = () => {
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
          Orang Utan
        </h1>
        <p className="mt-5">
          Orang utan, atau mawas, merupakan kera besar yang berasal dari hutan
          hujan Indonesia dan Malaysia. Saat ini, hewan ini hanya dapat
          ditemukan di sebagian Kalimantan dan Sumatra. Pada masa Pleistosen,
          mereka tersebar di seluruh Asia Tenggara dan Tiongkok Selatan. Orang
          utan termasuk dalam genus Pongo, dan sejak tahun 1996, mereka dibagi
          menjadi tiga spesies: orang utan Kalimantan (P. pygmaeus), orang utan
          Sumatra (P. abelii), dan orang utan Tapanuli (P. tapanuliensis) yang
          diidentifikasi pada tahun 2017. Orang utan adalah satu-satunya genus
          yang masih hidup dari subfamili Ponginae, secara genetik terpisah dari
          Hominidae lainnya (gorila, simpanse, dan manusia).
        </p>
        <p className="mt-5">
          Orang utan merupakan kera besar yang sangat arboreal, menghabiskan
          sebagian besar waktunya di pohon. Mereka memiliki kaki yang relatif
          pendek, lengannya panjang, dan rambut cokelat kemerahan yang melapisi
          tubuh mereka. Jantan dewasa memiliki berat sekitar 75 kg, sementara
          betina mencapai sekitar 37 kg. Orang utan jantan yang dominan memiliki
          bantalan pipi atau flensa khas dan sering mengeluarkan teriakan
          panjang untuk menarik perhatian betina atau mengintimidasi lawan.
          Mereka adalah primata yang sangat soliter, dengan ikatan sosial yang
          terbatas, terutama antara induk dan anaknya.
        </p>
        <p className="mt-5">
          Buah-buahan adalah komponen makanan utama orang utan, tetapi mereka
          juga dapat mengonsumsi dedaunan, kulit kayu, madu, serangga, dan telur
          burung. Orang utan dapat hidup lebih dari 30 tahun baik di alam liar
          maupun di penangkaran. Mereka terkenal sebagai primata yang sangat
          cerdas, menggunakan berbagai peralatan dan membangun sarang tidur
          setiap malam dari ranting dan dedaunan.
        </p>

        <p className="mt-5">
          Populasi orang utan terancam karena aktivitas manusia, termasuk
          perburuan liar, perusakan habitat, dan perdagangan hewan peliharaan
          ilegal. Ketiga spesies orang utan saat ini terdaftar dalam kategori
          terancam kritis. Banyak organisasi konservasi dan rehabilitasi
          berdedikasi untuk menjaga kelangsungan hidup mereka di alam liar.
        </p>
      </motion.div>
    </>
  );
};

export default SatwaDua;
