import React, { useState, useEffect } from "react";
import axios from "axios";
import NavbarBE from "../NavbarBE";
import { useLogin } from "../useLogin";

const BerandaForm = () => {
  useLogin();
  const [data, setData] = useState({
    background_image_desktop: "",
    background_image_mobile: "",
    gambar_teks_slider: "",
    gambar_slider: "",
    gambar_berita_satu: "",
    title_berita_satu: "",
    deskripsi_berita_satu: "",
    gambar_berita_dua: "",
    title_berita_dua: "",
    deskripsi_berita_dua: "",
    gambar_berita_tiga: "",
    title_berita_tiga: "",
    deskripsi_berita_tiga: "",
    gambar_berita_empat: "",
    title_berita_empat: "",
    deskripsi_berita_empat: "",
    galery_baner: "",
    gambar_galery_satu: "",
    galert_title_satu: "",
    gambar_galery_dua: "",
    galert_title_dua: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/beranda");
        const { id, ...rest } = response.data;
        setData(rest);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:8000/api/beranda", data);
      alert("Data updated successfully");
    } catch (error) {
      console.error("Failed to update data:", error);
    }
  };

  return (
    <>
      <NavbarBE />
      <div className="px-4   lg:p-8 mt-24   bg-white rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-6">Update Beranda</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-bold text-gray-700 capitalize">
              1. Background Image Desktop
            </label>
            <input
              type="text"
              name="background_image_desktop"
              value={data.background_image_desktop}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="font-bold">Result image :</p>
            <img
              className="border w-80"
              src={data.background_image_desktop}
              alt="bg"
            />
          </div>

          <div>
            <label className="block font-bold text-gray-700 capitalize">
              2. Background Image Mobile
            </label>
            <input
              type="text"
              name="background_image_mobile"
              value={data.background_image_mobile}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="font-bold">Result image :</p>
            <img
              className="border w-80"
              src={data.background_image_mobile}
              alt="bg"
            />
          </div>
          <div>
            <label className="block font-bold text-gray-700 capitalize">
              3. Gambar Teks Slider
            </label>
            <input
              type="text"
              name="gambar_teks_slider"
              value={data.gambar_teks_slider}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="font-bold">Result image :</p>
            <img
              className="border w-80"
              src={data.gambar_teks_slider}
              alt="bg"
            />
          </div>
          <div>
            <label className="block font-bold text-gray-700 capitalize">
              4. Gambar Slider
            </label>
            <input
              type="text"
              name="gambar_slider"
              value={data.gambar_slider}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="font-bold">Result image :</p>
            <img className="border w-80" src={data.gambar_slider} alt="bg" />
          </div>
          <div>
            <label className="block font-bold text-gray-700 capitalize">
              5. Gambar Berita Satu
            </label>
            <input
              type="text"
              name="gambar_berita_satu"
              value={data.gambar_berita_satu}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="font-bold">Result image :</p>
            <img
              className="border w-80"
              src={data.gambar_berita_satu}
              alt="bg"
            />
          </div>
          <div>
            <label className="block font-bold text-gray-700 capitalize">
              6. Title Berita Satu
            </label>
            <input
              type="text"
              name="title_berita_satu"
              value={data.title_berita_satu}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block font-bold text-gray-700 capitalize">
              7. Deskripsi Berita Satu
            </label>
            <input
              type="text"
              name="deskripsi_berita_satu"
              value={data.deskripsi_berita_satu}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block font-bold text-gray-700 capitalize">
              8. Gambar Berita Dua
            </label>
            <input
              type="text"
              name="gambar_berita_dua"
              value={data.gambar_berita_dua}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="font-bold">Result image :</p>
            <img
              className="border w-80"
              src={data.gambar_berita_dua}
              alt="bg"
            />
          </div>
          <div>
            <label className="block font-bold text-gray-700 capitalize">
              9. Title Berita Dua
            </label>
            <input
              type="text"
              name="title_berita_dua"
              value={data.title_berita_dua}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block font-bold text-gray-700 capitalize">
              10. Deskripsi Berita Dua
            </label>
            <input
              type="text"
              name="deskripsi_berita_dua"
              value={data.deskripsi_berita_dua}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block font-bold text-gray-700 capitalize">
              11. Gambar Berita Tiga
            </label>
            <input
              type="text"
              name="gambar_berita_tiga"
              value={data.gambar_berita_tiga}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="font-bold">Result image :</p>
            <img
              className="border w-80"
              src={data.gambar_berita_tiga}
              alt="bg"
            />
          </div>
          <div>
            <label className="block font-bold text-gray-700 capitalize">
              12. Title Berita Tiga
            </label>
            <input
              type="text"
              name="title_berita_tiga"
              value={data.title_berita_tiga}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block font-bold text-gray-700 capitalize">
              13. Deskripsi Berita Tiga
            </label>
            <input
              type="text"
              name="deskripsi_berita_tiga"
              value={data.deskripsi_berita_tiga}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block font-bold text-gray-700 capitalize">
              14. Gambar Berita Empat
            </label>
            <input
              type="text"
              name="gambar_berita_empat"
              value={data.gambar_berita_empat}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="font-bold">Result image :</p>
            <img
              className="border w-80"
              src={data.gambar_berita_empat}
              alt="bg"
            />
          </div>
          <div>
            <label className="block font-bold text-gray-700 capitalize">
              15. Title Berita Empat
            </label>
            <input
              type="text"
              name="title_berita_empat"
              value={data.title_berita_empat}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block font-bold text-gray-700 capitalize">
              16. Deskripsi Berita Empat
            </label>
            <input
              type="text"
              name="deskripsi_berita_empat"
              value={data.deskripsi_berita_empat}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block font-bold text-gray-700 capitalize">
              17. Galery Baner
            </label>
            <input
              type="text"
              name="galery_baner"
              value={data.galery_baner}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block font-bold text-gray-700 capitalize">
              18. Gambar Galery Satu
            </label>
            <input
              type="text"
              name="gambar_galery_satu"
              value={data.gambar_galery_satu}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="font-bold">Result image :</p>
            <img
              className="border w-80"
              src={data.gambar_galery_satu}
              alt="bg"
            />
          </div>
          <div>
            <label className="block font-bold text-gray-700 capitalize">
              19. Galery Title Satu
            </label>
            <input
              type="text"
              name="galert_title_satu"
              value={data.galert_title_satu}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block font-bold text-gray-700 capitalize">
              20. Gambar Galery Dua
            </label>
            <input
              type="text"
              name="gambar_galery_dua"
              value={data.gambar_galery_dua}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="font-bold">Result image :</p>
            <img
              className="border w-80"
              src={data.gambar_galery_dua}
              alt="bg"
            />
          </div>
          <div>
            <label className="block font-bold text-gray-700 capitalize">
              21. Galery Title Dua
            </label>
            <input
              type="text"
              name="galert_title_dua"
              value={data.galert_title_dua}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Update
          </button>
        </form>
      </div>
    </>
  );
};

export default BerandaForm;
