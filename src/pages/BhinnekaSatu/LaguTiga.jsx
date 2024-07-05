import React from "react";
import AllMenu from "../AllMenu";
import { motion } from "framer-motion";

const LaguTiga = () => {
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
          Anging Mammirik
        </h1>
        <p className="mt-5">
          Anging Mammirik adalah sebuah lagu daerah yang berasal dari Sulawesi
          Selatan dengan lirik dalam Bahasa Makassar. Melodi yang indah dari
          lagu ini menjadikannya pengiring untuk tarian yang juga bernama "Tari
          Anging Mammirik". Lagu ini juga dijadikan bahan pelajaran bagi guru
          seni suara di Sekolah Dasar.
        </p>
        <p className="mt-5">
          Lagu "Anging Mammirik" menggambarkan keindahan dan kelembutan irama,
          memberikan kesan kepada para perantau Suku Makassar untuk selalu
          mengingat kampung halaman mereka. Kata "Anging Mammirik" berasal dari
          "anging" yang berarti "angin" dan "mammirik" yang berarti "berhembus"
          atau "bertiup", sehingga secara harfiah dapat diartikan sebagai "angin
          berhembus".
        </p>
        <p className="mt-5">
          Lagu ini diciptakan oleh Bora Dg. Ngirate dan telah dipopulerkan oleh
          beberapa penyanyi lokal, antara lain Iwan Tompo, Arshinta P Aziz, dan
          Nurdin Taqwa (dalam bentuk langgam losquin).
        </p>
      </motion.div>
    </>
  );
};

export default LaguTiga;
