import React from "react";
import AllMenu from "../AllMenu";
import { motion } from "framer-motion";

const SilaLimaSatu = () => {
  return (
    <>
      <AllMenu />
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full text-sm pl-[350px] pr-4"
      >
        <h1 className="text-2xl custom-1200:mt-10 text-[#FF8ADE] font-bold text-center">
          Adil Terhadap Sesama
        </h1>
        <p className="mt-5">
          Pentingnya memberikan perlakuan yang adil kepada semua warga negara.
          Prinsip ini menekankan bahwa setiap individu, tanpa memandang latar
          belakang sosial, ekonomi, atau budaya, memiliki hak yang sama dalam
          memperoleh keadilan.
        </p>
        <p className="mt-5">
          Dalam konteks ini, keadilan sosial mencakup distribusi sumber daya dan
          kesempatan secara merata, sehingga seluruh rakyat Indonesia dapat
          menikmati kesejahteraan yang adil. Prinsip ini menentang
          ketidaksetaraan yang bersumber dari perbedaan status ekonomi,
          pendidikan, dan kesempatan.
        </p>
        <p className="mt-5">
          Selain itu, adil terhadap sesama juga mencakup penegakan hukum yang
          transparan dan tidak diskriminatif. Setiap individu memiliki hak yang
          sama di hadapan hukum dan tidak boleh diperlakukan secara tidak adil
          berdasarkan faktor-faktor tertentu.
        </p>

        <p className="mt-5">
          Dengan mengamalkan prinsip "Keadilan Sosial Bagi Seluruh Rakyat
          Indonesia," diharapkan tercipta masyarakat yang lebih merata, adil,
          dan inklusif. Pemerintah memiliki tanggung jawab untuk menciptakan
          kebijakan dan program-program yang mendukung terwujudnya keadilan
          sosial, sehingga setiap warga negara dapat merasakan manfaatnya dalam
          pembangunan dan kemajuan negara.
        </p>
      </motion.div>
    </>
  );
};

export default SilaLimaSatu;
