import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const Pancasila = () => {
  return (
    <>
      <Navbar />
      <div className="mt-24 px-5 sm:px-10 flex flex-col text-[#000000] sm:flex-row sm:justify-between items-center">
        <div className="flex items-center justify-center min-w-[300px]">
          <img
            src="./garuda.png"
            className="max-h-[270.48px] w-full h-full max-w-[270.48px]  "
            alt="logo"
          />
        </div>
        <div className="max-w-[866px] w-full sm:ml-10 mt-10 sm:mt-0">
          <h1 className="text-4xl font-bold text-[#D432A7]">Pancasila</h1>
          <div className="mt-5">
            <p className="text-sm">
              Pancasila adalah dasar negara Indonesia. Nama ini terdiri dari dua
              kata dari bahasa Sanskerta: पञ्च "pañca" berarti lima dan शीला
              "śīla" berarti prinsip atau asas. Pancasila merupakan rumusan dan
              pedoman kehidupan berbangsa dan bernegara bagi seluruh rakyat
              Indonesia.
            </p>

            <p className="mt-5 text-sm">
              Lima ideologi utama penyusun Pancasila merupakan lima sila
              Pancasila. Ideologi utama tersebut tercantum pada alinea keempat
              dalam Pembukaan Undang-Undang Dasar 1945:
            </p>

            <ol className="mt-5 text-sm list-decimal list-inside">
              <li>Ketuhanan yang Maha Esa</li>
              <li>Kemanusiaan yang adil dan beradab</li>
              <li>Persatuan Indonesia</li>
              <li>
                Kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam
                permusyawaratan/perwakilan
              </li>
              <li>Keadilan sosial bagi seluruh rakyat Indonesia</li>
            </ol>

            <p className="mt-5 text-sm">
              Sekalipun terjadi perubahan isi dan urutan lima sila Pancasila
              yang berlangsung dalam beberapa tahap selama masa perumusan
              Pancasila pada tahun 1945, tanggal 1 Juni diperingati bersama
              sebagai hari lahirnya Pancasila
            </p>
          </div>
        </div>
      </div>

      {/* Sila Ke-1 */}
      <div className="background-2 mt-24 px-10">
        <h1 className="text-[30px] font-bold pt-20 text-white">
          Sila Ke-1: Ketuhanan Yang Maha Esa
        </h1>
        <div className="mt-10 text-[#FF8ADE] flex ml-20 flex-col w-[538px]">
          <Link
            className="  flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-lg"
            to="/sila-satu-1"
          >
            <p className="text-[20px]">Menghormati Antar Agama</p>
            <img className=" h-3" src="./arrowuud.png" alt="" />
          </Link>
          <Link
            className=" mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-md"
            to="/sila-satu-2"
          >
            <p className="text-[20px]">Tidak Paksakan Kepercayaan</p>
            <img className=" h-3" src="./arrowuud.png" alt="" />
          </Link>
          <Link
            className=" mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-md"
            to="/sila-satu-3"
          >
            <p className="text-[20px]">Taat Beribadah</p>
            <img className=" h-3" src="./arrowuud.png" alt="" />
          </Link>
          <Link
            className=" mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-md"
            to="/sila-satu-4"
          >
            <p className="text-[20px]">Hidup Sederhana</p>
            <img className=" h-3" src="./arrowuud.png" alt="" />
          </Link>
        </div>
        {/* Sila 2 */}
        <div className="flex flex-col">
          <h1 className="text-[30px] font-bold pt-20 text-white">
            Sila Ke-2: Kemanusiaan Yang Adil Dan Beradab
          </h1>
          <div className="mt-10 text-[#FF8ADE] flex ml-20 flex-col w-[538px]">
            <Link
              className="  flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-lg"
              to="/sila-dua-1"
            >
              <p className="text-[20px]">Menjunjung Tinggi Nilai Kemanusiaan</p>
              <img className=" h-3" src="./arrowuud.png" alt="" />
            </Link>
            <Link
              className=" mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-md"
              to="/sila-dua-2"
            >
              <p className="text-[20px]">
                Gemar Melakukan Kegiatan Kemanusiaan
              </p>
              <img className=" h-3" src="./arrowuud.png" alt="" />
            </Link>
            <Link
              className=" mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-md"
              to="/sila-dua-3"
            >
              <p className="text-[20px]">Tenggang Rasa dan Tepa Selira</p>
              <img className=" h-3" src="./arrowuud.png" alt="" />
            </Link>
            <Link
              className=" mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-md"
              to="/sila-dua-4"
            >
              <p className="text-[20px]">Saling Tolong Menolong</p>
              <img className=" h-3" src="./arrowuud.png" alt="" />
            </Link>
          </div>
        </div>

        {/* sila 3 */}
        <div className="flex flex-col">
          <h1 className="text-[30px] font-bold pt-20 text-white">
            Sila Ke-3: Persatuan Indonesia
          </h1>
          <div className="mt-10 text-[#FF8ADE] flex ml-20 flex-col w-[538px]">
            <Link
              className="  flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-lg"
              to="/sila-tiga-1"
            >
              <p className="text-[20px]">Cinta Tanah Air dan Bangsa</p>
              <img className=" h-3" src="./arrowuud.png" alt="" />
            </Link>
            <Link
              className=" mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-md"
              to="/sila-tiga-2"
            >
              <p className="text-[20px]">Bangga Sebagai Bangsa Indonesia</p>
              <img className=" h-3" src="./arrowuud.png" alt="" />
            </Link>
            <Link
              className=" mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-md"
              to="/sila-tiga-3"
            >
              <p className="text-[20px]">Berkorban untuk Bangsa dan Negara</p>
              <img className=" h-3" src="./arrowuud.png" alt="" />
            </Link>
            <Link
              className=" mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-md"
              to="/sila-tiga-4"
            >
              <p className="text-[20px]">Jaga Persatuan dan Kesatuan Bangsa</p>
              <img className=" h-3" src="./arrowuud.png" alt="" />
            </Link>
          </div>
        </div>

        {/* sila 4 */}
        <div className="flex flex-col">
          <h1 className="text-[30px] font-bold pt-20 text-white">
            Sila Ke-4: Kerakyatan Yang Dipimpin Oleh Hikmat Kebijaksanaan Dalam
            Permusyawaratan Perwakilan
          </h1>
          <div className="mt-10 text-[#FF8ADE] flex ml-20 flex-col w-[538px]">
            <Link
              className="  flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-lg"
              to="/sila-empat-1"
            >
              <p className="text-[20px]">Hormati Hasil Musyawarah</p>
              <img className=" h-3" src="./arrowuud.png" alt="" />
            </Link>
            <Link
              className=" mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-md"
              to="/sila-empat-2"
            >
              <p className="text-[20px]">Menjunjung Nilai Kebenaran</p>
              <img className=" h-3" src="./arrowuud.png" alt="" />
            </Link>
            <Link
              className=" mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-md"
              to="/sila-empat-3"
            >
              <p className="text-[20px]">Musyawarah dan Mufakat</p>
              <img className=" h-3" src="./arrowuud.png" alt="" />
            </Link>
            <Link
              className=" mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-md"
              to="/sila-empat-4"
            >
              <p className="text-[20px]">Tidak Paksakan Kehendak</p>
              <img className=" h-3" src="./arrowuud.png" alt="" />
            </Link>
          </div>
        </div>

        {/* sila 5 */}
        <div className="flex flex-col">
          <h1 className="text-[30px] font-bold pt-20 text-white">
            Sila Ke-5: Keadilan Sosial Bagi Seluruh Rakyat Indonesia
          </h1>
          <div className="mt-10 text-[#FF8ADE] flex ml-20 flex-col w-[538px]">
            <Link
              className="  flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-lg"
              to="/sila-lima-1"
            >
              <p className="text-[20px]">Adil Terhadap Sesama</p>
              <img className=" h-3" src="./arrowuud.png" alt="" />
            </Link>
            <Link
              className=" mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-md"
              to="/sila-lima-2"
            >
              <p className="text-[20px]">Hormati Hak Orang Lain</p>
              <img className=" h-3" src="./arrowuud.png" alt="" />
            </Link>
            <Link
              className=" mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-md"
              to="/sila-lima-3"
            >
              <p className="text-[20px]">Seimbang Hak dan Kewajiban</p>
              <img className=" h-3" src="./arrowuud.png" alt="" />
            </Link>
            <Link
              className=" mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-md"
              to="/sila-lima-4"
            >
              <p className="text-[20px]">Bekerja Keras</p>
              <img className=" h-3" src="./arrowuud.png" alt="" />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Pancasila;
