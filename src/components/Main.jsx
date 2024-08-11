import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import MainDua from "./MainDua";

const Main = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // State for loading

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/berita");
        setData(response.data);
        setIsLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Failed to fetch data:", error);
        setIsLoading(false); // Set loading to false even if there's an error
      }
    };

    fetchData();
  }, []);

  const berita = data.length > 0 ? data[0] : {};

  const LoadingSkeleton = () => (
    <div className="animate-pulse">
      <div className="w-full h-[200px] bg-gray-300 rounded-xl"></div>
      <div className="mt-5 h-5 w-3/4 bg-gray-300 rounded"></div>
      <div className="mt-2 h-5 w-1/2 bg-gray-300 rounded"></div>
    </div>
  );

  return (
    <>
      {/* Desktop */}
      <div
        id="main2"
        className="relative background-1 hidden mt-[500px] mb-[500px] w-full max-w-screen-2xl lg:flex flex-col justify-center items-center"
      >
        <Link
          to="/berita"
          className="custom-1200:w-[507px] custom-1000:w-[400px] absolute custom-1200:-top-32 custom-1000:-top-20 custom-1200:-left-60 custom-1000:-left-32"
        >
          {isLoading ? (
            <LoadingSkeleton />
          ) : (
            <>
              <img
                className="object-cover rounded-3xl custom-1200:w-[507px] custom-1000:w-[400px]"
                src={berita.image_url_berita_1}
                alt="bg"
                loading="lazy"
              />
              <p className="mt-5 font-semibold text-[#000000] text-[15px]">
                {berita.title_berita_1}
              </p>
              <p className={`mt-2 text-[#FF35C7] font-semibold text-[15px]`}>
                {berita.description_berita_1}
              </p>
            </>
          )}
        </Link>

        <Link
          to="/berita"
          className="custom-1200:w-[507px] custom-1000:w-[400px] absolute custom-1200:top-[200px] custom-1000:top-[220px] custom-1200:-right-60 custom-1000:-right-32"
        >
          {isLoading ? (
            <LoadingSkeleton />
          ) : (
            <>
              <img
                className="object-cover rounded-3xl custom-1000:w-[400px] custom-1200:w-[507px]"
                src={berita.image_url_berita_2}
                alt="bg"
                loading="lazy"
              />
              <p className="mt-5 font-semibold text-[#000000] text-[15px]">
                {berita.title_berita_2}
              </p>
              <p className={`mt-2 text-[#FF35C7] font-semibold text-[15px]`}>
                {berita.description_berita_2}
              </p>
            </>
          )}
        </Link>

        <Link
          to="/berita"
          className="custom-1200:w-[507px] custom-1000:w-[400px] absolute top-[550px] custom-1200:-left-60 custom-1000:-left-32"
        >
          {isLoading ? (
            <LoadingSkeleton />
          ) : (
            <>
              <img
                className="object-cover rounded-3xl custom-1000:w-[400px] custom-1200:w-[507px]"
                src={berita.image_url_berita_3}
                alt="bg"
                loading="lazy"
              />
              <p className="mt-5 font-semibold text-[#000000] text-[15px]">
                {berita.title_berita_3}
              </p>
              <p className={`mt-2 text-[#FF35C7] font-semibold text-[15px]`}>
                {berita.description_berita_3}
              </p>
            </>
          )}
        </Link>

        <Link
          to="/berita"
          className="custom-1200:w-[507px] custom-1000:w-[400px] absolute top-[890px] custom-1200:-right-60 custom-1000:-right-32"
        >
          {isLoading ? (
            <LoadingSkeleton />
          ) : (
            <>
              <img
                className="object-cover rounded-3xl custom-1000:w-[400px] custom-1200:w-[507px]"
                src={berita.image_url_berita_4}
                alt="bg"
                loading="lazy"
              />
              <p className="mt-5 font-semibold text-[#000000] text-[15px]">
                {berita.title_berita_4}
              </p>
              <p className={`mt-2 text-[#FF35C7] font-semibold text-[15px]`}>
                {berita.description_berita_4}
              </p>
            </>
          )}
        </Link>
      </div>

      {/* Mobile */}
      <div
        className="relative background-1-mobile  flex custom-500:mt-[250px] custom-300:mt-[140px] mb-[400px] w-full max-w-screen-2xl lg:hidden flex-col justify-center items-center"
      >
        <Link
          to="/berita"
          className="bg-white rounded px-10 w-full max-w-[500px]  absolute top-0"
        >
          {isLoading ? (
            <LoadingSkeleton />
          ) : (
            <>
              <img
                className="w-full h-[200px]  object-cover rounded-xl"
                src={berita.image_url_berita_1}
                alt="bg"
                loading="lazy"
              />
              <p className="mt-5 font-semibold text-[#000000] text-[15px]">
                {berita.title_berita_1}
              </p>
              <p className={`mt-2 text-[#FF35C7] font-semibold text-[15px]`}>
                {berita.description_berita_1}
              </p>
            </>
          )}
        </Link>

        <Link
          to="/berita"
          className="bg-white rounded px-10  absolute top-[400px] w-full max-w-[500px]"
        >
          {isLoading ? (
            <LoadingSkeleton />
          ) : (
            <>
              <img
                className="w-full h-[200px]  object-cover rounded-xl"
                src={berita.image_url_berita_2}
                alt="bg"
                loading="lazy"
              />
              <p className="mt-5 font-semibold text-[#000000] text-[15px]">
                {berita.title_berita_2}
              </p>
              <p className={`mt-2 text-[#FF35C7] font-semibold text-[15px]`}>
                {berita.description_berita_2}
              </p>
            </>
          )}
        </Link>

        <Link
          to="/berita"
          className="bg-white rounded px-10  absolute top-[800px] w-full max-w-[500px]"
        >
          {isLoading ? (
            <LoadingSkeleton />
          ) : (
            <>
              <img
                className="w-full h-[200px]  object-cover rounded-xl"
                src={berita.image_url_berita_3}
                alt="bg"
                loading="lazy"
              />
              <p className="mt-5 font-semibold text-[#000000] text-[15px]">
                {berita.title_berita_3}
              </p>
              <p className={`mt-2 text-[#FF35C7] font-semibold text-[15px]`}>
                {berita.description_berita_3}
              </p>
            </>
          )}
        </Link>

        <Link
          to="/berita"
          className="bg-white rounded px-10  absolute top-[1200px] w-full max-w-[500px]"
        >
          {isLoading ? (
            <LoadingSkeleton />
          ) : (
            <>
              <img
                className="w-full h-[200px]  object-cover rounded-xl"
                src={berita.image_url_berita_4}
                alt="bg"
                loading="lazy"
              />
              <p className="mt-5 font-semibold text-[#000000] text-[15px]">
                {berita.title_berita_4}
              </p>
              <p className={`mt-2 text-[#FF35C7] font-semibold text-[15px]`}>
                {berita.description_berita_4}
              </p>
            </>
          )}
        </Link>
      </div>
      <MainDua/>
    </>
  );
};

export default Main;
