import React from "react";
import AllMenu from "../AllMenu";
import { motion } from "framer-motion";

const SilaLimaDua = () => {
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
          Hormati Hak Orang Lain
        </h1>
        <p className="mt-5">
          Mencerminkan prinsip-prinsip keadilan sosial. Dalam konteks ini,
          hormat terhadap hak orang lain mencakup pengakuan dan penghormatan
          terhadap hak-hak asasi setiap individu di masyarakat.
        </p>
        <p className="mt-5">
          Pentingnya menghormati hak orang lain menuntut kesadaran untuk tidak
          melanggar hak-hak dasar yang dimiliki setiap warga negara. Hal ini
          mencakup hak atas kebebasan, keadilan, pendidikan, pekerjaan, dan
          hak-hak lainnya yang dijamin oleh konstitusi dan peraturan
          perundang-undangan.
        </p>
        <p className="mt-5">
          Dengan menghormati hak orang lain, masyarakat diharapkan dapat hidup
          dalam harmoni, persaudaraan, dan keberagaman. Sikap hormat terhadap
          hak individu juga membentuk dasar untuk menciptakan keadilan sosial
          dan memperkuat persatuan dalam kerangka negara Kesatuan Republik
          Indonesia.
        </p>
        <p className="mt-5">
          Mengedepankan sikap hormat terhadap hak orang lain adalah langkah
          penting dalam membangun masyarakat yang adil, beradab, dan menghargai
          keberagaman. Seiring dengan prinsip Pancasila, menghormati hak orang
          lain adalah fondasi bagi terwujudnya keadilan sosial bagi seluruh
          rakyat Indonesia.
        </p>
      </motion.div>
    </>
  );
};

export default SilaLimaDua;
