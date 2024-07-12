import React from "react";
import AllMenu from "../AllMenu";
import { motion } from "framer-motion";

const MenuSilaEmpat = () => {
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
          Hidup Sederhana
        </h1>
        <p className="mt-5">
          Hidup sederhana dalam Ketuhanan Yang Maha Esa mencerminkan nilai-nilai
          kesederhanaan, keikhlasan, dan keterhubungan spiritual yang dijalankan
          oleh individu dalam konteks keagamaan. Prinsip ini menekankan bahwa
          kehidupan sederhana dapat menjadi wujud pengabdian dan ketundukan
          kepada Tuhan.
        </p>
        <p className="mt-5">
          Dalam kerangka ini, hidup sederhana diartikan sebagai sikap rendah
          hati, tidak terpaku pada materi, dan menjauhi kemewahan berlebihan.
          Individu yang menjalankan hidup sederhana dalam ketuhanan mengutamakan
          nilai-nilai spiritual, kebersamaan, dan berbagi dengan sesama sebagai
          bentuk pengabdian kepada Tuhan.
        </p>
        <p className="mt-5">
          Prinsip ini juga mencerminkan kesadaran akan keberadaan Tuhan sebagai
          pusat kehidupan, sehingga individu tidak terlalu terikat pada harta
          benda atau kemewahan duniawi. Hidup sederhana dalam ketuhanan
          mengajarkan untuk bersyukur atas nikmat-nikmat Tuhan dan menjalani
          kehidupan dengan penuh rasa syukur.
        </p>
        <p className="mt-5">
          Sederhana bukan berarti kurang, tetapi lebih kepada kepuasan batin dan
          kedekatan dengan Tuhan. Dengan menjalankan hidup sederhana dalam
          ketuhanan, individu diharapkan dapat mencapai kedamaian, kebahagiaan,
          dan keberkahan dalam hidupnya.
        </p>
      </motion.div>
    </>
  );
};

export default MenuSilaEmpat;
