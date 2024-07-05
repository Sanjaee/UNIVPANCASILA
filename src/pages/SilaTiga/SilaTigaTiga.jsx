import React from "react";
import AllMenu from "../AllMenu";
import { motion } from "framer-motion";

const SilaTigaTiga = () => {
  return (
    <>
      <AllMenu />
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full text-sm pl-[350px] pr-4"
      >
        <h1 className="text-2xl text-[#D432A7] font-bold text-center">
          Berkorban untuk Bangsa dan Negara
        </h1>
        <p className="mt-5">
          Berkorban untuk bangsa dan negara dalam persatuan Indonesia adalah
          nilai yang menekankan pentingnya pengabdian tanpa pamrih demi
          kepentingan bersama. Nilai ini mencerminkan semangat pengorbanan,
          loyalitas, dan keberanian untuk melindungi serta memajukan negara
          Indonesia. Individu yang mengamalkan nilai ini bersedia mengorbankan
          waktu, tenaga, bahkan jiwa dan raganya demi kepentingan negara dan
          masyarakat.
        </p>
        <p className="mt-5">
          Berkorban untuk bangsa dan negara juga mencakup semangat rela berjuang
          dalam situasi sulit, baik dalam menjaga keamanan, mengatasi bencana
          alam, maupun berkontribusi pada pembangunan nasional. Nilai ini
          menjadi landasan moral yang kuat untuk menjaga persatuan dan kesatuan
          Indonesia, karena setiap warga negara diharapkan memiliki kesadaran
          akan tanggung jawabnya terhadap keberlanjutan dan kemajuan bangsa.
        </p>
        <p className="mt-5">
          Pentingnya berkorbannya untuk bangsa dan negara memperkuat ikatan
          sosial dan moral di antara warga negara, menciptakan solidaritas, dan
          menggairahkan semangat patriotisme. Dalam persatuan Indonesia, nilai
          ini menjadi pilar utama dalam membentuk karakter masyarakat yang
          berkomitmen tinggi terhadap kepentingan kolektif dan kejayaan negara.
        </p>
      </motion.div>
    </>
  );
};

export default SilaTigaTiga;
