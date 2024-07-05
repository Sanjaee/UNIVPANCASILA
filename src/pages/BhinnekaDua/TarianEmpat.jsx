import React from "react";
import AllMenu from "../AllMenu";
import { motion } from "framer-motion";

const TarianEmpat = () => {
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
          Kipas Pakarena
        </h1>
        <p className="mt-5">
          Tari Kipas Pakarena berasal dari kerajaan Gowa Makasar di Sulawesi
          Selatan. Nama "Kipas Pakarena" berasal dari kata "karena" yang berarti
          bermain, dan "pa" yang berarti pelaku. Tarian ini telah menjadi bagian
          integral dari tradisi budaya masyarakat Gowa selama berabad-abad.
        </p>
        <p className="mt-5">
          Tarian ini memiliki makna mendalam yang menggambarkan perpisahan
          antara Boting Langi (khayangan) dan Lino (bumi). Gerakan dalam tarian
          ini mencerminkan ajaran kepada masyarakat Lino dalam aktivitas
          sehari-hari seperti bercocok tanam, berternak, atau berburu, sebagai
          ungkapan rasa syukur kepada Boting Langi.
        </p>
        <p className="mt-5">
          Gerakan tarian mencerminkan kelembutan, kesantunan, kesetiaan,
          kepatuhan, dan penghormatan masyarakat perempuan Gowa terhadap
          laki-laki. Pola gerakan yang berputar searah jarum jam dan naik-turun
          melambangkan siklus hidup yang terus berputar. Tarian ini terdiri dari
          12 gerakan, masing-masing memiliki makna yang berbeda.
        </p>

        <p className="mt-5">
          Terdapat aturan khusus dalam tarian ini, seperti penari tidak
          diperbolehkan membuka mata terlalu lebar, dan gerakan kaki tidak boleh
          terlalu tinggi. Fisik penari harus prima untuk mengekspresikan
          kelembutan dan kesantunan.
        </p>

        <p className="mt-5">
          Iringan musik tarian dilakukan oleh tujuh pengiring laki-laki dengan
          alat musik gandrang yang dikenal sebagai Gondrong Rinci. Mereka tidak
          hanya memukul alat musik tetapi juga ikut menari untuk menyelaraskan
          gerakan dengan musik. Tarian ini semakin memikat dengan busana penari
          yang menarik, termasuk kain sutera khas Sulawesi, sanggul besar, dan
          hiasan khas Pulau Selayar.
        </p>
      </motion.div>
    </>
  );
};

export default TarianEmpat;
