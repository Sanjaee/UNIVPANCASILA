import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
const SkeletonCard = () => (
    <div className="flex items-start mt-7 animate-pulse">
      <div className="w-full max-w-[210px] h-[120px] bg-gray-300 rounded-lg"></div>
      <div className="ml-5">
        <div className="w-3/4 h-6 bg-gray-300 rounded-md mb-2"></div>
        <div className="w-full h-4 bg-gray-300 rounded-md"></div>
        <div className="w-4/5 h-4 bg-gray-300 rounded-md mt-2"></div>
      </div>
    </div>
  );
  
  const GridDuaMobile = () => {
    const [loading, setLoading] = useState(true);
    const [dataKarir, setDataKarir] = useState(null);
    const [dataPenghargaan, setDataPenghargaan] = useState(null);
    const [dataBeritaLainnya, setDataBeritaLainnya] = useState(null);
  
    const fetchData = async (url, setter) => {
      try {
        const response = await axios.get(url);
        if (response.data.length > 0) {
          setter(response.data[0]); // Mengambil objek pertama dari array
        }
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 500); // Simulate loading time
      }
    };
  
    useEffect(() => {
      fetchData("http://localhost:8000/api/karir", setDataKarir);
      fetchData("http://localhost:8000/api/penghargaan", setDataPenghargaan);
      fetchData("http://localhost:8000/api/beritalainnya", setDataBeritaLainnya);
    }, []);
  
    if (loading) {
      return (
        <div className="flex w-full  flex-col mt-10">
          <div className="w-full flex flex-col">
            <div className="w-full h-[50px] bg-gray-300 rounded-xl mb-10 animate-pulse"></div>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </div>
          <div className="border-2 border-gray-300 w-full my-5 animate-pulse"></div>
          <div className="w-full flex flex-col">
            <div className="w-full h-[50px] bg-gray-300 rounded-xl mb-10 animate-pulse"></div>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </div>
          <div className="border-2 border-gray-300 w-full my-5 animate-pulse"></div>
          <div className="w-full flex flex-col">
            <div className="w-full h-[50px] bg-gray-300 rounded-xl mb-10 animate-pulse"></div>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </div>
        </div>
      );
    }
  
    if (!dataKarir || !dataPenghargaan || !dataBeritaLainnya) {
      return  (
          <div className="flex w-full  flex-col mt-10">
            <div className="w-full flex flex-col">
              <div className="w-full h-[50px] bg-gray-300 rounded-xl mb-10 animate-pulse"></div>
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </div>
            <div className="border-2 border-gray-300 w-full my-5 animate-pulse"></div>
            <div className="w-full flex flex-col">
              <div className="w-full h-[50px] bg-gray-300 rounded-xl mb-10 animate-pulse"></div>
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </div>
            <div className="border-2 border-gray-300 w-full my-5 animate-pulse"></div>
            <div className="w-full flex flex-col">
              <div className="w-full h-[50px] bg-gray-300 rounded-xl mb-10 animate-pulse"></div>
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </div>
          </div>
        );
    }
  return (
    <div className="flex w-full    flex-col  mt-10">
    {/* karir */}
    <div className="w-full  flex flex-col ">
      <div className="w-full h-[50px] bg-[#DBA3D9] rounded-xl flex items-center justify-start ">
        <h1 className="ml-5 text-white text-[20px] font-bold">Karir</h1>
      </div>
      {/* karir 1 */}
      <Link to={dataKarir.link_karir_1} className="flex items-start mt-10 ">
        <img
          className="w-full max-w-[170px] h-[120px] object-cover rounded-lg "
          src={dataKarir.image_url_karir_1}
          alt="bg"
          loading="lazy"
        />
        <div className="ml-5">
          <p className="font-semibold text-sm line-clamp-2">
            {dataKarir.title_karir_1}
          </p>
          <p className="text-sm line-clamp-3 mt-1 text-[#FF8ADE]">
            {dataKarir.description_karir_1}
          </p>
        </div>
      </Link>

      {/* karir 2 */}
      <Link to={dataKarir.link_karir_2} className="flex items-start mt-7 ">
        <img
          className="w-full max-w-[170px] h-[120px] object-cover rounded-lg "
          src={dataKarir.image_url_karir_2}
          alt="bg"
          loading="lazy"
        />
        <div className="ml-5">
          <p className="font-semibold line-clamp-2">
            {dataKarir.title_karir_2}
          </p>
          <p className="text-[15px] line-clamp-3 mt-1 text-[#FF8ADE]">
            {dataKarir.description_karir_2} &#10095;
          </p>
        </div>
      </Link>

      {/* karir 3 */}
      <Link to={dataKarir.link_karir_3} className="flex items-start mt-7 ">
        <img
          className="w-full max-w-[170px] h-[120px] object-cover rounded-lg"
          src={dataKarir.image_url_karir_3}
          alt="bg"
          loading="lazy"
        />
        <div className="ml-5">
          <p className="font-semibold line-clamp-2">
            {dataKarir.title_karir_3}
          </p>
          <p className="text-[15px] line-clamp-3 mt-1 text-[#FF8ADE]">
            {dataKarir.description_karir_3} &#10095;
          </p>
        </div>
      </Link>
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
      <Link to={dataPenghargaan.link_penghargaan_1} className="flex items-start mt-10 ">
        <img
          className="w-full max-w-[170px] h-[120px] object-cover rounded-lg "
          src={dataPenghargaan.image_url_penghargaan_1}
          alt="bg"
          loading="lazy"
        />
        <div className="ml-5">
          <p className="font-semibold line-clamp-2">
            {dataPenghargaan.title_penghargaan_1}
          </p>
          <p className="text-[15px] line-clamp-3 mt-1 text-[#FF8ADE]">
            {dataPenghargaan.description_penghargaan_1}
          </p>
        </div>
      </Link>

      {/* Penghargaan 2 */}
      <Link to={dataPenghargaan.link_penghargaan_2} className="flex items-start mt-7 ">
        <img
          className="w-full max-w-[170px] h-[120px] object-cover rounded-lg "
          src={dataPenghargaan.image_url_penghargaan_2}
          alt="bg"
          loading="lazy"
        />
        <div className="ml-5">
          <p className="font-semibold line-clamp-2">
            {dataPenghargaan.title_penghargaan_2}
          </p>
          <p className="text-[15px] line-clamp-3 mt-1 text-[#FF8ADE]">
            {dataPenghargaan.description_penghargaan_2}
          </p>
        </div>
      </Link>

      {/* Penghargaan 3 */}
      <Link to={dataPenghargaan.link_penghargaan_3} className="flex items-start mt-7 ">
        <img
          className="w-full max-w-[170px] h-[120px] object-cover rounded-lg"
          src={dataPenghargaan.image_url_penghargaan_3}
          alt="bg"
          loading="lazy"
        />
        <div className="ml-5">
          <p className="font-semibold line-clamp-2">
            {dataPenghargaan.title_penghargaan_3}
          </p>
          <p className="text-[15px] line-clamp-3 mt-1 text-[#FF8ADE]">
            {dataPenghargaan.description_penghargaan_3}
          </p>
        </div>
      </Link>
    </div>
    {/* berita */}
    <div className="border-2 boeder-[#ECECEC] w-full my-4  "></div>
    {/* berita */}
    <div className="flex flex-col w-full text-sm justify-start ">
      <div className="w-full h-[50px] bg-[#DBA3D9] rounded-xl flex items-center justify-start ">
        <h1 className="ml-5 text-white text-[20px] font-bold">
          Berita Lainnya
        </h1>
      </div>
      <Link to={dataBeritaLainnya.link_berita_lainnya_1} className="flex items-start mt-7 ">
        <img
          className="w-full max-w-[170px] h-[120px] object-cover rounded-lg"
          src={dataBeritaLainnya.image_url_berita_lainnya_1}
          alt="bg"
          loading="lazy"
        />
        <div className="ml-5">
          <p className="font-semibold line-clamp-2">
            {dataBeritaLainnya.title_berita_lainnya_1}
          </p>
          <p className="text-[15px] line-clamp-3 mt-1 text-[#FF8ADE]">
            {dataBeritaLainnya.description_berita_lainnya_1}
          </p>
        </div>
      </Link>

      <Link to={dataBeritaLainnya.link_berita_lainnya_2} className="flex items-start mt-7 ">
        <img
          className="w-full max-w-[170px] h-[120px] object-cover rounded-lg"
          src={dataBeritaLainnya.image_url_berita_lainnya_2}
          alt="bg"
          loading="lazy"
        />
        <div className="ml-5">
          <p className="font-semibold line-clamp-2">
            {dataBeritaLainnya.title_berita_lainnya_2}
          </p>
          <p className="text-[15px] line-clamp-3 mt-1 text-[#FF8ADE]">
            {dataBeritaLainnya.description_berita_lainnya_2}
          </p>
        </div>
      </Link>

      <Link to={dataBeritaLainnya.link_berita_lainnya_3} className="flex items-start mt-7 ">
        <img
          className="w-full max-w-[170px] h-[120px] object-cover rounded-lg"
          src={dataBeritaLainnya.image_url_berita_lainnya_3}
          alt="bg"
          loading="lazy"
        />
        <div className="ml-5">
          <p className="font-semibold line-clamp-2">
            {dataBeritaLainnya.title_berita_lainnya_3}
          </p>
          <p className="text-[15px] line-clamp-3 mt-1 text-[#FF8ADE]">
            {dataBeritaLainnya.description_berita_lainnya_3}
          </p>
        </div>
      </Link>
    </div>
  </div>
  )
}

export default GridDuaMobile
