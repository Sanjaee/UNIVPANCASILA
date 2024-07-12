import React from "react";
import AllMenu from "../AllMenu";
import { motion } from "framer-motion";

const LaguDua = () => {
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
          Cublak Cublak Suweng
        </h1>
        <p className="mt-5">
          Cublak-cublak Suweng merupakan lagu daerah Jawa Tengah yang digunakan
          sebagai pengiring dalam permainan tradisional Jawa yang juga bernama
          Dolanan Cublak-cublak Suweng.
        </p>
        <p className="mt-5">
          Permainan tradisional Cublak-cublak Suweng sering dimainkan oleh
          anak-anak desa di pulau Jawa, terutama di Jawa Tengah. Awalnya,
          permainan ini dimulai dengan hompimpa untuk menentukan siapa yang
          kalah pertama kali. Peserta yang kalah kemudian berperan sebagai Pak
          Empong, berbaring terlungkup di tengah, sementara anak-anak yang lain
          duduk melingkari Pak Empong. Para peserta yang melingkari Pak Empong
          membuka telapak tangan menghadap ke atas dan meletakkannya di punggung
          Pak Empong. Salah satu anak kemudian memegang biji atau kerikil, dan
          biji tersebut dipindahkan dari satu telapak tangan ke telapak tangan
          lainnya dengan diiringi lagu Cublak-cublak Suweng.
        </p>
        <p className="mt-5">
          Permainan ini menjadi salah satu bagian dari warisan budaya dan
          tradisi anak-anak di Jawa Tengah, menciptakan momen kebersamaan dan
          kegembiraan dalam bermain.
        </p>
      </motion.div>
    </>
  );
};

export default LaguDua;
