import React from "react";
import AllMenu from "../AllMenu";
import { motion } from "framer-motion";

const SilaEmpatEmpat = () => {
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
          Tidak Paksakan Kehendak
        </h1>
        <p className="mt-5">
          Menyuarakan nilai-nilai demokrasi dan penghargaan terhadap kebebasan
          pendapat. Prinsip ini menekankan pentingnya mencapai kesepakatan
          melalui musyawarah dan mufakat, tanpa adanya paksaan dari pihak
          manapun.
        </p>
        <p className="mt-5">
          Dengan kata lain, dalam sistem perwakilan rakyat, keputusan yang
          diambil harus melibatkan diskusi, dialog, dan kesepakatan bersama.
          Tidak ada kelompok atau individu yang boleh memaksakan kehendaknya
          tanpa memperhatikan pendapat dan kepentingan bersama.
        </p>
        <p className="mt-5">
          Prinsip "Jangan Memaksakan Pendapat" menciptakan lingkungan di mana
          setiap orang memiliki hak untuk menyuarakan pendapatnya, dan keputusan
          yang diambil mencerminkan persetujuan bersama. Hal ini mendukung
          nilai-nilai demokrasi, toleransi, dan penghargaan terhadap
          keberagaman.
        </p>

        <p className="mt-5">
          Dengan mengamalkan prinsip ini, diharapkan terciptanya masyarakat yang
          adil, inklusif, dan menghargai perbedaan pendapat. Tidak ada
          pemaksaan, melainkan kerjasama dalam mencapai keputusan yang
          menguntungkan bagi semua. Prinsip ini menjadi dasar bagi terwujudnya
          pemerintahan yang berkeadilan dan menghormati hak-hak setiap individu.
        </p>
      </motion.div>
    </>
  );
};

export default SilaEmpatEmpat;
