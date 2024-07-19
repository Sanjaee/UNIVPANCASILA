import React from "react";
import AllMenu from "../AllMenu";
import { motion } from "framer-motion";

const MenuSilaSatu = () => {
  return (
    <>
      <AllMenu />
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full text-sm sm:pl-[350px] custom-300:pl-4 pr-4"
      >
        <h1 className="text-2xl custom-1200:mt-10  text-[#FF8ADE] font-bold text-center">
          Menghormati Antar Agama
        </h1>
        <p className="mt-5">
          Menghormati antar agama dalam Ketuhanan Yang Maha Esa merupakan nilai
          dasar yang tercermin dalam semangat keberagaman dan toleransi di
          Indonesia. Prinsip ini menekankan pentingnya saling menghormati dan
          mengakui keberagaman keyakinan agama yang ada dalam masyarakat.
        </p>
        <p className="mt-5">
          Dalam kerangka Pancasila, nilai menghormati antar agama mencerminkan
          sikap terbuka terhadap perbedaan keyakinan dan mengakui keberagaman
          sebagai kekayaan bangsa. Hal ini menandakan bahwa setiap warga negara
          memiliki hak untuk menjalankan keyakinan agama atau kepercayaannya
          tanpa diskriminasi atau pemaksaan.
        </p>
        <p className="mt-5">
          Menghormati antar agama juga menciptakan dasar untuk membangun
          kerukunan antarumat beragama dan memperkuat persatuan nasional. Sikap
          saling menghormati ini diterjemahkan dalam berbagai kebijakan
          pemerintah yang mengakui dan melindungi hak-hak keagamaan serta
          kebebasan beribadah bagi semua warga negara.
        </p>
        <p className="mt-5">
          Dengan menghormati antar agama, Indonesia mendorong terbentuknya
          masyarakat yang inklusif, adil, dan damai, di mana perbedaan keyakinan
          tidak menjadi sumber konflik, tetapi justru menjadi kekuatan bersama
          untuk membangun bangsa yang kokoh dan bersatu.
        </p>
      </motion.div>
    </>
  );
};

export default MenuSilaSatu;
