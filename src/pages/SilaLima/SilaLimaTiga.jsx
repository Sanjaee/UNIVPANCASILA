import React from "react";
import AllMenu from "../AllMenu";
import { motion } from "framer-motion";

const SilaLimaTiga = () => {
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
          Seimbang Hak dan Kewajiban
        </h1>
        <p className="mt-5">
          Prinsip seimbang hak dan kewajiban dalam Sila Kelima Pancasila
          menunjukkan pentingnya setiap warga negara memiliki hak-hak yang
          setara dengan tanggung jawabnya terhadap masyarakat dan negara. Dalam
          konteks ini, keseimbangan antara hak dan kewajiban menjadi fondasi
          dalam menciptakan tatanan sosial yang adil dan berkeadilan.
        </p>
        <p className="mt-5">
          Setiap individu memiliki hak-hak yang harus diakui dan dihormati,
          namun sejalan dengan hak-hak tersebut, setiap warga negara juga
          memiliki kewajiban untuk berkontribusi dan berpartisipasi dalam
          membangun masyarakat yang maju dan beradab. Prinsip ini menekankan
          bahwa hak dan kewajiban merupakan dua sisi dari satu kesatuan yang
          tidak dapat dipisahkan.
        </p>
        <p className="mt-5">
          Dengan menjaga keseimbangan antara hak dan kewajiban, masyarakat
          diharapkan dapat hidup dalam harmoni, saling mendukung, dan memperkuat
          persatuan. Penerapan prinsip ini juga melibatkan kesadaran kolektif
          untuk memahami bahwa setiap kebebasan yang dimiliki individu harus
          diimbangi dengan tanggung jawabnya terhadap sesama dan negara.
        </p>

        <p className="mt-5">
          Seimbangnya hak dan kewajiban menciptakan fondasi yang kokoh untuk
          terwujudnya keadilan sosial dan pembangunan nasional. Oleh karena itu,
          prinsip ini menjadi landasan yang penting dalam mencapai tujuan negara
          Kesatuan Republik Indonesia sesuai dengan nilai-nilai Pancasila.
        </p>
      </motion.div>
    </>
  );
};

export default SilaLimaTiga;
