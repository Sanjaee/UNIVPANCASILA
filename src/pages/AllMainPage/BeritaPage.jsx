import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import Loading from "../../components/Loading";
import axios from "axios";

const BeritaPage = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/berita");
        setData(response.data);
       
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
  return (
    <>
      <Navbar />
      <div className="w-full justify-center flex items-center">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="mt-48 max-w-screen-2xl  lg:flex hidden mx-10 pb-20 items-start"
        >
          {/* grid 1 */}
          <div className="flex flex-col w-full justify-center items-center  ">
            <div className="flex flex-col ">
              <h1 className="text-[25px] text-[#000000]  font-bold ">
                {data.title_berita_satu}
              </h1>
              <h1 className="text-[25px] text-[#FF8ADE] font-bold">
                {data.title_berita_dua}
              </h1>
            </div>
            <img
              className="mt-10 w-full h-[376px] object-cover"
              src={data.image_berita}
              alt=""
            />
            {/* berita */}
            <div className="mt-10 text-[20px] flex flex-col">
              <p>
                <span className="font-bold">{data.title_satu}</span> –
                {data.deskripsi_satu}
              </p>

              <h1 className="font-bold mt-5 ">{data.title_dua}</h1>
              <p className="mt-2">{data.deskripsi_dua}</p>

              <h1 className="font-bold mt-5 ">{data.title_tiga}</h1>
              <p className="mt-2">{data.deskripsi_tiga}</p>

              <h1 className="font-bold mt-5 ">{data.title_empat}</h1>
              <p className="mt-2">{data.deskripsi_empat}</p>

              <h1 className="font-bold mt-5 ">{data.title_lima}</h1>
              <p className="mt-2">{data.deskripsi_lima}</p>
            </div>
          </div>

          {/* grid 2 */}
          <div className="flex w-full max-w-[472px]   flex-col  mx-5">
            {/* karir */}
            <div className="w-full  flex flex-col ">
              <div className="w-full h-[50px] bg-[#DBA3D9] rounded-xl flex items-center justify-start ">
                <h1 className="ml-5 text-white text-[20px] font-bold">Karir</h1>
              </div>
              {/* karir 1 */}
              <div className="flex items-start mt-10 ">
                <img
                  className="w-full max-w-[210px] h-[120px] object-cover rounded-lg "
                  src={data.karir_image_satu}
                  alt=""
                />
                <div className="ml-5">
                  <p className="font-semibold line-clamp-2">
                    {data.karir_title_satu}
                  </p>
                  <p className="text-[15px] line-clamp-3 mt-1 text-[#FF8ADE]">
                    {data.karir_deskripsi_satu}
                  </p>
                </div>
              </div>

              {/* karir 2 */}
              <div className="flex items-start mt-7 ">
                <img
                  className="w-full max-w-[210px] h-[120px] object-cover rounded-lg "
                  src={data.karir_image_dua}
                  alt=""
                />
                <div className="ml-5">
                  <p className="font-semibold line-clamp-2">
                    {data.karir_title_dua}
                  </p>
                  <p className="text-[15px] line-clamp-3 mt-1 text-[#FF8ADE]">
                    Selengkapnya &#10095;
                  </p>
                </div>
              </div>

              {/* karir 3 */}
              <div className="flex items-start mt-7 ">
                <img
                  className="w-full max-w-[210px] h-[120px] object-cover rounded-lg"
                  src={data.karir_image_tiga}
                  alt=""
                />
                <div className="ml-5">
                  <p className="font-semibold line-clamp-2">
                    {data.karir_title_tiga}
                  </p>
                  <p className="text-[15px] line-clamp-3 mt-1 text-[#FF8ADE]">
                    Selengkapnya &#10095;
                  </p>
                </div>
              </div>
            </div>
            <div className="border-2 boeder-[#ECECEC] w-full my-5  "></div>
            {/* Penghargaan */}
            <div className="w-full  flex flex-col ">
              <div className="w-full h-[50px] bg-[#DBA3D9] rounded-xl flex items-center justify-start ">
                <h1 className="ml-5 text-white text-[20px] font-bold">
                  Penghargaan
                </h1>
              </div>
              {/* Penghargaan 1 */}
              <div className="flex items-start mt-10 ">
                <img
                  className="w-full max-w-[210px] h-[120px] object-cover rounded-lg "
                  src={data.penghargaan_image_satu}
                  alt=""
                />
                <div className="ml-5">
                  <p className="font-semibold line-clamp-2">
                    {data.penghargaan_title_satu}
                  </p>
                  <p className="text-[15px] line-clamp-3 mt-1 text-[#FF8ADE]">
                    {data.penghargaan_deskripsi_satu}
                  </p>
                </div>
              </div>

              {/* Penghargaan 2 */}
              <div className="flex items-start mt-7 ">
                <img
                  className="w-full max-w-[210px] h-[120px] object-cover rounded-lg "
                  src={data.penghargaan_image_dua}
                  alt=""
                />
                <div className="ml-5">
                  <p className="font-semibold line-clamp-2">
                    {data.penghargaan_title_dua}
                  </p>
                  <p className="text-[15px] line-clamp-3 mt-1 text-[#FF8ADE]">
                    {data.penghargaan_deskripsi_dua}
                  </p>
                </div>
              </div>

              {/* Penghargaan 3 */}
              <div className="flex items-start mt-7 ">
                <img
                  className="w-full max-w-[210px] h-[120px] object-cover rounded-lg"
                  src={data.penghargaan_image_tiga}
                  alt=""
                />
                <div className="ml-5">
                  <p className="font-semibold line-clamp-2">
                    {data.penghargaan_title_tiga}
                  </p>
                  <p className="text-[15px] line-clamp-3 mt-1 text-[#FF8ADE]">
                    {data.penghargaan_deskripsi_tiga}
                  </p>
                </div>
              </div>
            </div>
            {/* berita */}
            <div className="border-2 boeder-[#ECECEC] w-full my-4  "></div>
            {/* berita */}
            <div className="flex flex-col w-full text-sm justify-start ">
              <h1 className="text-xl font-bold text-[#FF8ADE]">
                Berita Lainnya
              </h1>
              <div className="flex items-start mt-7 ">
                <img
                  className="w-full max-w-[210px] h-[120px] object-cover rounded-lg"
                  src={data.berita_image_satu}
                  alt=""
                />
                <div className="ml-5">
                  <p className="font-semibold line-clamp-2">
                    {data.berita_title_satu}
                  </p>
                  <p className="text-[15px] line-clamp-3 mt-1 text-[#FF8ADE]">
                    {data.berita_deskripsi_satu}
                  </p>
                </div>
              </div>

              <div className="flex items-start mt-7 ">
                <img
                  className="w-full max-w-[210px] h-[120px] object-cover rounded-lg"
                  src={data.berita_image_dua}
                  alt=""
                />
                <div className="ml-5">
                  <p className="font-semibold line-clamp-2">
                    {data.berita_title_dua}
                  </p>
                  <p className="text-[15px] line-clamp-3 mt-1 text-[#FF8ADE]">
                    {data.berita_deskripsi_dua}
                  </p>
                </div>
              </div>

              <div className="flex items-start mt-7 ">
                <img
                  className="w-full max-w-[210px] h-[120px] object-cover rounded-lg"
                  src={data.berita_image_tiga}
                  alt=""
                />
                <div className="ml-5">
                  <p className="font-semibold line-clamp-2">
                    {data.berita_title_tiga}
                  </p>
                  <p className="text-[15px] line-clamp-3 mt-1 text-[#FF8ADE]">
                    {data.berita_deskripsi_tiga}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="mt-24   lg:hidden flex flex-col mx-5 pb-20 items-start"
        >
          {/* grid 1 */}
          <div className="flex flex-col w-full justify-center items-center  ">
            <div className="flex flex-col ">
              <h1 className="text-[25px] text-[#000000]  font-bold ">
                {data.title_berita_satu}
              </h1>
              <h1 className="text-[25px] text-[#FF8ADE] font-bold">
                {data.title_berita_dua}
              </h1>
            </div>
            <img
              className="mt-10 w-full h-[376px] object-cover"
              src={data.image_berita}
              alt=""
            />
            {/* berita */}
            <div className="mt-10 text-[20px] flex flex-col">
              <p>
                <span className="font-bold">{data.title_satu}</span> –
                {data.deskripsi_satu}
              </p>

              <h1 className="font-bold mt-5 ">{data.title_dua}</h1>
              <p className="mt-2">{data.deskripsi_dua}</p>

              <h1 className="font-bold mt-5 ">{data.title_tiga}</h1>
              <p className="mt-2">{data.deskripsi_tiga}</p>

              <h1 className="font-bold mt-5 ">{data.title_empat}</h1>
              <p className="mt-2">{data.deskripsi_empat}</p>

              <h1 className="font-bold mt-5 ">{data.title_lima}</h1>
              <p className="mt-2">{data.deskripsi_lima}</p>
            </div>
          </div>

          {/* grid 2 */}
          <div className="flex w-full    flex-col  mt-10">
            {/* karir */}
            <div className="w-full  flex flex-col ">
              <div className="w-full h-[50px] bg-[#DBA3D9] rounded-xl flex items-center justify-start ">
                <h1 className="ml-5 text-white text-[20px] font-bold">Karir</h1>
              </div>
              {/* karir 1 */}
              <div className="flex items-start mt-10 ">
                <img
                  className="w-full max-w-[210px] h-[120px] object-cover rounded-lg "
                  src={data.karir_image_satu}
                  alt=""
                />
                <div className="ml-5">
                  <p className="font-semibold line-clamp-2">
                    {data.karir_title_satu}
                  </p>
                  <p className="text-[15px] line-clamp-3 mt-1 text-[#FF8ADE]">
                    {data.karir_deskripsi_satu}
                  </p>
                </div>
              </div>

              {/* karir 2 */}
              <div className="flex items-start mt-7 ">
                <img
                  className="w-full max-w-[210px] h-[120px] object-cover rounded-lg "
                  src={data.karir_image_dua}
                  alt=""
                />
                <div className="ml-5">
                  <p className="font-semibold line-clamp-2">
                    {data.karir_title_dua}
                  </p>
                  <p className="text-[15px] line-clamp-3 mt-1 text-[#FF8ADE]">
                    Selengkapnya &#10095;
                  </p>
                </div>
              </div>

              {/* karir 3 */}
              <div className="flex items-start mt-7 ">
                <img
                  className="w-full max-w-[210px] h-[120px] object-cover rounded-lg"
                  src={data.karir_image_tiga}
                  alt=""
                />
                <div className="ml-5">
                  <p className="font-semibold line-clamp-2">
                    {data.karir_title_tiga}
                  </p>
                  <p className="text-[15px] line-clamp-3 mt-1 text-[#FF8ADE]">
                    Selengkapnya &#10095;
                  </p>
                </div>
              </div>
            </div>
            <div className="border-2 boeder-[#ECECEC] w-full my-5  "></div>
            {/* Penghargaan */}
            <div className="w-full  flex flex-col ">
              <div className="w-full h-[50px] bg-[#DBA3D9] rounded-xl flex items-center justify-start ">
                <h1 className="ml-5 text-white text-[20px] font-bold">
                  Penghargaan
                </h1>
              </div>
              {/* Penghargaan 1 */}
              <div className="flex items-start mt-10 ">
                <img
                  className="w-full max-w-[210px] h-[120px] object-cover rounded-lg "
                  src={data.penghargaan_image_satu}
                  alt=""
                />
                <div className="ml-5">
                  <p className="font-semibold line-clamp-2">
                    {data.penghargaan_title_satu}
                  </p>
                  <p className="text-[15px] line-clamp-3 mt-1 text-[#FF8ADE]">
                    {data.penghargaan_deskripsi_satu}
                  </p>
                </div>
              </div>

              {/* Penghargaan 2 */}
              <div className="flex items-start mt-7 ">
                <img
                  className="w-full max-w-[210px] h-[120px] object-cover rounded-lg "
                  src={data.penghargaan_image_dua}
                  alt=""
                />
                <div className="ml-5">
                  <p className="font-semibold line-clamp-2">
                    {data.penghargaan_title_dua}
                  </p>
                  <p className="text-[15px] line-clamp-3 mt-1 text-[#FF8ADE]">
                    {data.penghargaan_deskripsi_dua}
                  </p>
                </div>
              </div>

              {/* Penghargaan 3 */}
              <div className="flex items-start mt-7 ">
                <img
                  className="w-full max-w-[210px] h-[120px] object-cover rounded-lg"
                  src={data.penghargaan_image_tiga}
                  alt=""
                />
                <div className="ml-5">
                  <p className="font-semibold line-clamp-2">
                    {data.penghargaan_title_tiga}
                  </p>
                  <p className="text-[15px] line-clamp-3 mt-1 text-[#FF8ADE]">
                    {data.penghargaan_deskripsi_tiga}
                  </p>
                </div>
              </div>
            </div>
            {/* berita */}
            <div className="border-2 boeder-[#ECECEC] w-full my-4  "></div>
            {/* berita */}
            <div className="flex flex-col w-full text-sm justify-start ">
              <h1 className="text-xl font-bold text-[#FF8ADE]">
                Berita Lainnya
              </h1>
              <div className="flex items-start mt-7 ">
                <img
                  className="w-full max-w-[210px] h-[120px] object-cover rounded-lg"
                  src={data.berita_image_satu}
                  alt=""
                />
                <div className="ml-5">
                  <p className="font-semibold line-clamp-2">
                    {data.berita_title_satu}
                  </p>
                  <p className="text-[15px] line-clamp-3 mt-1 text-[#FF8ADE]">
                    {data.berita_deskripsi_satu}
                  </p>
                </div>
              </div>

              <div className="flex items-start mt-7 ">
                <img
                  className="w-full max-w-[210px] h-[120px] object-cover rounded-lg"
                  src={data.berita_image_dua}
                  alt=""
                />
                <div className="ml-5">
                  <p className="font-semibold line-clamp-2">
                    {data.berita_title_dua}
                  </p>
                  <p className="text-[15px] line-clamp-3 mt-1 text-[#FF8ADE]">
                    {data.berita_deskripsi_dua}
                  </p>
                </div>
              </div>

              <div className="flex items-start mt-7 ">
                <img
                  className="w-full max-w-[210px] h-[120px] object-cover rounded-lg"
                  src={data.berita_image_tiga}
                  alt=""
                />
                <div className="ml-5">
                  <p className="font-semibold line-clamp-2">
                    {data.berita_title_tiga}
                  </p>
                  <p className="text-[15px] line-clamp-3 mt-1 text-[#FF8ADE]">
                    {data.berita_deskripsi_tiga}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </>
  );
};

export default BeritaPage;
