import React from "react";
import AllMenu from "../AllMenu";
import { motion } from "framer-motion";

const TambangEmpat = () => {
  return (
    <>
      <AllMenu />
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full text-sm pl-[350px] pr-4 overflow-y-auto h-[500px] pb-20"
      >
        <h1 className="text-2xl custom-1200:mt-10 text-[#FF8ADE] font-bold text-center">
          Tambang Besi
        </h1>
        <p className="mt-5">
          Tambang besi adalah lokasi eksploitasi atau penambangan bijih besi
          yang merupakan sumber daya alam penting untuk produksi logam besi.
          Bijih besi diperoleh melalui proses penambangan dan pengolahan untuk
          diolah menjadi bahan baku utama dalam industri besi dan baja.Contoh
          tambang besi di Indonesia meliputi:
        </p>
        <ol className="mt-5 list-decimal list-inside">
          <li>
            Tambang Gading Sengir, Kalimantan Barat: Salah satu tambang besi
            terbesar di Kalimantan Barat, Tambang Gading Sengir memiliki
            cadangan bijih besi yang signifikan.
          </li>
          <li>
            Tambang Batu Ampar, Kalimantan Timur: Terletak di Kutai Kartanegara,
            tambang ini menjadi penyuplai bijih besi penting di Kalimantan
            Timur.
          </li>
          <li>
            Tambang Soroako, Sulawesi Selatan: Meskipun lebih dikenal sebagai
            tambang nikel, Tambang Soroako di Sulawesi Selatan juga menghasilkan
            bijih besi dalam jumlah yang cukup.
          </li>
          <li>
            Tambang Tembang, Jawa Tengah: Terletak di daerah Karimunjawa, Jawa
            Tengah, Tambang Tembang mencakup eksploitasi bijih emas dan besi.
          </li>
          <li>
            Tambang Iron Hill, Aceh: Iron Hill di Aceh dikenal memiliki deposit
            bijih besi yang signifikan.
          </li>
        </ol>

        <p className="mt-5">
          Tambang besi memainkan peran krusial dalam mendukung industri
          konstruksi, manufaktur, dan infrastruktur dengan menyediakan bahan
          baku untuk produksi besi dan baja yang merupakan komponen utama dalam
          berbagai struktur dan peralatan. Proses penambangan dan pengolahan
          bijih besi membutuhkan teknologi canggih untuk memastikan eksploitasi
          sumber daya alam ini dilakukan secara berkelanjutan dan efisien.
        </p>
      </motion.div>
    </>
  );
};

export default TambangEmpat;
