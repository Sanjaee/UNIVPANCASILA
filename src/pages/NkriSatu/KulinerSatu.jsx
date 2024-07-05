import React from "react";
import AllMenu from "../AllMenu";
import { motion } from "framer-motion";

const KulinerSatu = () => {
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
          Rendang
        </h1>
        <p className="mt-5">
          Rendang adalah hidangan daging yang dihasilkan melalui proses memasak
          suhu rendah dalam waktu lama dengan rempah-rempah dan santan.
          Prosesnya memakan waktu berjam-jam hingga daging menjadi hitam pekat.
          Rendang bisa bertahan berminggu-minggu pada suhu ruangan. Di Rumah
          Makan Padang dan di seluruh dunia, rendang populer. Masakan ini
          terkenal di Indonesia, Malaysia, Singapura, Brunei, Filipina, dan
          Thailand.
        </p>
        <p className="mt-5">
          Minangkabau, daerah asal rendang, menyajikannya dalam upacara adat dan
          perayaan istimewa. Meskipun teknik dan bumbu rendang bervariasi, pada
          2018, rendang diresmikan sebagai salah satu hidangan nasional
          Indonesia. Pernah meraih peringkat pertama dalam daftar "50 Hidangan
          Terlezat Dunia" versi CNN International pada 2011.
        </p>
        <p className="mt-5">
          Rendang juga digunakan sebagai bantuan pangan dalam bencana alam
          karena ketahanannya dan kandungan gizinya. Dengan olahan bumbu rendang
          yang dijajal bersama makanan lain seperti spageti, mi, burger, hingga
          sushi.
        </p>
      </motion.div>
    </>
  );
};

export default KulinerSatu;
