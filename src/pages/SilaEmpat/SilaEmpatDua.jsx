import React from "react";
import AllMenu from "../AllMenu";
import { motion } from "framer-motion";

const SilaEmpatDua = () => {
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
          Menjunjung Nilai Kebenaran
        </h1>
        <p className="mt-5">
          Pentingnya menjaga kejujuran, keadilan, dan kebenaran dalam berbagai
          aspek kehidupan. Sila Keempat, "Kerakyatan yang Dipimpin oleh Hikmat
          Kebijaksanaan dalam Permusyawaratan Perwakilan," mengajarkan bahwa
          kebenaran harus dijunjung tinggi dalam proses pengambilan keputusan
          dan penyelenggaraan pemerintahan.
        </p>
        <p className="mt-5">
          Dalam konteks ini, menjunjung nilai kebenaran berarti tidak hanya
          mengutamakan kepentingan pribadi atau kelompok tetapi juga berkomitmen
          untuk mengungkap dan menghadapi kebenaran secara obyektif. Ini
          mencakup transparansi, akuntabilitas, dan keterbukaan dalam
          penyelenggaraan pemerintahan dan keputusan publik.
        </p>
        <p className="mt-5">
          Selain itu, menjunjung nilai kebenaran juga berarti menentang segala
          bentuk penyelewengan atau manipulasi informasi yang dapat merugikan
          kepentingan umum. Masyarakat yang menjunjung tinggi nilai kebenaran
          cenderung menciptakan lingkungan yang terbuka untuk diskusi, kritik
          yang membangun, dan partisipasi aktif dalam proses keputusan.
        </p>
        <p className="mt-5">
          Dengan mengedepankan nilai kebenaran, Sila Keempat membimbing
          masyarakat Indonesia untuk menciptakan tatanan demokratis yang
          berlandaskan pada prinsip keadilan, persamaan, dan penegakan hukum.
          Ini juga mencerminkan semangat gotong-royong dalam mencapai tujuan
          bersama untuk kemajuan dan kesejahteraan bangsa.
        </p>
      </motion.div>
    </>
  );
};

export default SilaEmpatDua;
