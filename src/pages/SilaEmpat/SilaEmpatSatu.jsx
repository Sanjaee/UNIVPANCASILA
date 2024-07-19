import React from "react";
import AllMenu from "../AllMenu";
import { motion } from "framer-motion";
const SilaEmpatSatu = () => {
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
          Hormati Hasil Musyawarah
        </h1>
        <p className="mt-5">
          Dengan menghormati hasil musyawarah, masyarakat menunjukkan kesiapan
          untuk bersatu dalam keputusan bersama tanpa memandang perbedaan. Hal
          ini mencerminkan semangat gotong-royong dan solidaritas dalam mencapai
          kesejahteraan bersama. Hormati hasil musyawarah juga menjadi dasar
          untuk menciptakan keadilan sosial dan kesetaraan di dalam masyarakat.
        </p>
        <p className="mt-5">
          Tidak memaksakan kepercayaan dalam Ketuhanan Yang Maha Esa menciptakan
          lingkungan yang inklusif, menghargai perbedaan, dan mempromosikan
          kerukunan antarumat beragama. Setiap orang memiliki kebebasan untuk
          menentukan jalan rohaninya sendiri, dan nilai ini menekankan
          pentingnya menghormati pluralitas keyakinan dalam masyarakat.
        </p>
        <p className="mt-5">
          Penting untuk diingat bahwa menghormati hasil musyawarah tidak hanya
          merupakan kewajiban hukum, tetapi juga mencerminkan nilai-nilai moral
          dan etika yang mendalam. Dengan begitu, setiap warga negara Indonesia
          dapat merasa memiliki tanggung jawab terhadap keputusan bersama dan
          bersatu untuk mewujudkan tujuan kehidupan yang adil dan beradab.
        </p>
      </motion.div>
    </>
  );
};

export default SilaEmpatSatu;
