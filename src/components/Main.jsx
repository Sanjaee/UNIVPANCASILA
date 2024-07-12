import React from "react";
import MainDua from "./MainDua";

const Main = () => {
  return (
    <>
      <div className="relative hidden   mt-[500px] mb-[500px] background-1  w-full max-w-screen-2xl lg:flex flex-col justify-center items-center">
        {/* 1 */}
        <div className="custom-1200:w-[507px] custom-1000:w-[400px]  absolute custom-1200:-top-32 custom-1000:-top-20 custom-1200:-left-60 custom-1000:-left-32">
          <img
            className="object-cover rounded-3xl custom-1200:w-[507px] custom-1000:w-[400px] "
            src="./berita1.png"
            alt=""
          />
          <p className="mt-5 font-semibold text-[#000000] text-[15px]">
            Peluncuran Edugame Revolusioner
          </p>
          <p className="mt-2 text-[#FF35C7] font-semibold text-[15px]">
            Universitas Pancasila mendorong pembelajaran innovative dan
            interactive
          </p>
        </div>

        {/* 2 */}
        <div className="custom-1200:w-[507px] custom-1000:w-[400px] absolute  custom-1200:top-[200px] custom-1000:top-[220px] custom-1200:-right-60 custom-1000:-right-32 ">
          <img
            className="object-cover rounded-3xl custom-1000:w-[400px] custom-1200:w-[507px] "
            src="./berita2.png"
            alt=""
          />
          <p className="mt-5 font-semibold text-[#000000] text-[15px]">
            Peluncuran Edugame Revolusioner
          </p>
          <p className="mt-2 text-[#FF35C7] font-semibold text-[15px]">
            Universitas Pancasila mendorong pembelajaran innovative dan
            interactive
          </p>
        </div>

        {/* 3 */}
        <div className="custom-1200:w-[507px] custom-1000:w-[400px]  absolute top-[550px] custom-1200:-left-60 custom-1000:-left-32">
          <img
            className="object-cover rounded-3xl custom-1000:w-[400px] custom-1200:w-[507px] "
            src="./berita3.png"
            alt=""
          />
          <p className="mt-5 font-semibold text-[#000000] text-[15px]">
            Peluncuran Edugame Revolusioner
          </p>
          <p className="mt-2 text-[#FF35C7] font-semibold text-[15px]">
            Universitas Pancasila mendorong pembelajaran innovative dan
            interactive
          </p>
        </div>

        {/* 4 */}
        <div className="custom-1200:w-[507px] custom-1000:w-[400px]  absolute top-[890px] custom-1200:-right-60 custom-1000:-right-32">
          <img
            className="object-cover rounded-3xl custom-1000:w-[400px] custom-1200:w-[507px] "
            src="./berita4.png"
            alt=""
          />
          <p className="mt-5 font-semibold text-[#000000] text-[15px]">
            Peluncuran Edugame Revolusioner
          </p>
          <p className="mt-2 text-[#FF35C7] font-semibold text-[15px]">
            Universitas Pancasila mendorong pembelajaran innovative dan
            interactive
          </p>
        </div>
      </div>
      <MainDua />
    </>
  );
};

export default Main;
