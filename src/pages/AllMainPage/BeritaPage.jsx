import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import Loading from "../../components/Loading";
import axios from "axios";
import GridDua from "./ComponentBerita/GridDua";
import GridDuaMobile from "./ComponentBerita/GridDuaMobile";


const BeritaPage = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/detailberita");
        if (response.data.length > 0) {
          setData(response.data[0]); // Mengambil objek pertama dari array
        }
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 500); // Simulate loading time
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (!data) {
    return <div>Data tidak ditemukan.</div>;
  }

  return (
    <>
      <Navbar />
      <div className="w-full justify-center flex items-center">
        {/* Desktop */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className=" custom-1200:mt-48 custom-1000:mt-28 max-w-screen-2xl  lg:flex hidden mx-10 pb-20 items-start"
        >
          {/* grid 1 */}
          <div className="flex flex-col w-full justify-center items-center">
            <div className="flex flex-col">
              <h1 className="text-[25px] text-[#000000] font-bold">
                {data.title_detail_berita}
              </h1>
              <h1 className="text-[25px] text-[#FF8ADE] font-bold">
                {data.caption_detail_berita}
              </h1>
            </div>
            <img
              className="mt-10 w-full lg:h-[376px] custom-1200:h-[476px] object-cover"
              src={data.image_url_detail_berita}
              alt="bg"
              loading="lazy"
            />
            {/* berita */}
            <div className="mt-10 text-[20px] flex flex-col">
              <p>
                <span className="font-bold">{data.kota_detail_berita}</span> –
                {data.description_detail_berita}
              </p>

              <h1 className="font-bold mt-5 ">
                {data.title_paragraf_satu_detail_berita}
              </h1>
              <p className="mt-2">
                {data.description_paragraf_satu_detail_berita}
              </p>

              <h1 className="font-bold mt-5 ">
                {data.title_paragraf_dua_detail_berita}
              </h1>
              <p className="mt-2">
                {data.description_paragraf_dua_detail_berita}
              </p>

              <h1 className="font-bold mt-5 ">
                {data.title_paragraf_tiga_detail_berita}
              </h1>
              <p className="mt-2">
                {data.description_paragraf_tiga_detail_berita}
              </p>

              <h1 className="font-bold mt-5 ">
                {data.title_paragraf_empat_detail_berita}
              </h1>
              <p className="mt-2">
                {data.description_paragraf_empat_detail_berita}
              </p>
            </div>
          </div>

          {/* grid 2 */}
          <GridDua />
        </motion.div>

        {/* mobile */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="mt-24 lg:hidden flex flex-col mx-5 pb-20 items-start"
        >
          {/* grid 1 */}
          <div className="flex flex-col w-full justify-center items-center">
            <div className="flex flex-col">
              <h1 className="custom-300:text-[20px] sm:text-[25px] text-[#000000] font-bold">
                {data.title_detail_berita}
              </h1>
              <h1 className="custom-300:text-[20px] sm:text-[25px] text-[#FF8ADE] font-bold">
                {data.caption_detail_berita}
              </h1>
            </div>
            <img
              className="mt-10 w-full custom-300:h-[236px] sm:h-[376px] object-cover"
              src={data.image_url_detail_berita}
              alt="bg"
              loading="lazy"
            />
            {/* berita */}
            <div className="mt-10 text-sm flex flex-col">
              <p>
                <span className="font-bold">{data.kota_detail_berita}</span> –
                {data.description_detail_berita}
              </p>

              <h1 className="font-bold mt-5">
                {data.title_paragraf_satu_detail_berita}
              </h1>
              <p className="mt-2">
                {data.description_paragraf_satu_detail_berita}
              </p>

              <h1 className="font-bold mt-5">
                {data.title_paragraf_dua_detail_berita}
              </h1>
              <p className="mt-2">
                {data.description_paragraf_dua_detail_berita}
              </p>

              <h1 className="font-bold mt-5">
                {data.title_paragraf_tiga_detail_berita}
              </h1>
              <p className="mt-2">
                {data.description_paragraf_tiga_detail_berita}
              </p>

              <h1 className="font-bold mt-5">
                {data.title_paragraf_empat_detail_berita}
              </h1>
              <p className="mt-2">
                {data.description_paragraf_empat_detail_berita}
              </p>
            </div>
          </div>

          {/* grid 2 */}
          <GridDuaMobile />
        </motion.div>
      </div>

      <Footer />
    </>
  );
};

export default BeritaPage;
