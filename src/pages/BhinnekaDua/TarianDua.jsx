import { motion } from "framer-motion";
import AllMenu from "../AllMenu";

const TarianDua = () => {
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
          Jaipongan
        </h1>
        <p className="mt-5">
          Jaipongan adalah sebuah jenis tari pergaulan tradisional masyarakat
          Sunda yang berasal dari wilayah Karawang dan sangat populer di
          Indonesia. Tari ini memiliki ciri khas gerakan yang energetik dan
          dinamis, sering diiringi oleh musik yang hidup dan penuh semangat.
          Jaipongan muncul sebagai bentuk reaksi terhadap larangan pemerintah
          pada tahun 1961 terhadap tari-tarian yang dianggap terlalu sensual dan
          erotis.
        </p>
        <p className="mt-5">
          Seiring waktu, Jaipongan berkembang menjadi bentuk seni yang lebih
          resmi dan diakui, dipertunjukkan dalam berbagai kesempatan, baik
          upacara adat maupun acara hiburan. Tari ini melibatkan gerakan tubuh
          yang lincah, ekspresi wajah yang dramatis, dan kostum yang
          berwarna-warni.
        </p>
        <p className="mt-5">
          Jaipongan bukan hanya sebuah tarian, tetapi juga mencakup
          elemen-elemen seni lainnya, termasuk musik, nyanyian, dan busana.
          Instrumen musik yang umum digunakan dalam pengiring Jaipongan antara
          lain kendang, suling, rebab, dan gamelan degung. Tari Jaipongan
          menjadi simbol keberanian dan kegembiraan, mencerminkan semangat hidup
          masyarakat Sunda.
        </p>
      </motion.div>
    </>
  );
};

export default TarianDua;
