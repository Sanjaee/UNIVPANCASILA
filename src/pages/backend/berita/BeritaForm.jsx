import React, { useState, useEffect } from "react";
import axios from "axios";
import NavbarBE from "../NavbarBE";
import { useLogin } from "../useLogin";

const BeritaForm = () => {
  useLogin();
  const [data, setData] = useState({
    title_berita_satu: "",
    title_berita_dua: "",
    image_berita: "",
    title_satu: "",
    deskripsi_satu: "",
    title_dua: "",
    deskripsi_dua: "",
    title_tiga: "",
    deskripsi_tiga: "",
    title_empat: "",
    deskripsi_empat: "",
    title_lima: "",
    deskripsi_lima: "",
    karir_image_satu: "",
    karir_title_satu: "",
    karir_deskripsi_satu: "",
    karir_image_dua: "",
    karir_title_dua: "",
    karir_deskripsi_dua: "",
    karir_image_tiga: "",
    karir_title_tiga: "",
    karir_deskripsi_tiga: "",
    penghargaan_image_satu: "",
    penghargaan_title_satu: "",
    penghargaan_deskripsi_satu: "",
    penghargaan_image_dua: "",
    penghargaan_title_dua: "",
    penghargaan_deskripsi_dua: "",
    penghargaan_image_tiga: "",
    penghargaan_title_tiga: "",
    penghargaan_deskripsi_tiga: "",
    berita_image_satu: "",
    berita_title_satu: "",
    berita_deskripsi_satu: "",
    berita_image_dua: "",
    berita_title_dua: "",
    berita_deskripsi_dua: "",
    berita_image_tiga: "",
    berita_title_tiga: "",
    berita_deskripsi_tiga: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/berita");
        setData(response.data);
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
      await axios.put("http://localhost:8000/api/berita", data);
      alert("Data updated successfully");
    } catch (error) {
      console.error("Failed to update data:", error);
    }
  };

  return (
    <>
      <NavbarBE />
      <div className="px-4   lg:p-8 mt-24   bg-white rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-6">Update Berita</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-bold text-gray-700 capitalize">
              1. Title Berita Satu
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
              2. Title Berita Dua
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
              3. Image Berita
            </label>
            <input
              type="text"
              name="image_berita"
              value={data.image_berita}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="font-bold">Result image :</p>
            <img
              className="border w-80"
              loading="lazy"
              src={data.image_berita}
              alt="bg"
            />
          </div>
          <div>
            <label className="block font-bold text-gray-700 capitalize">
              Title Satu
            </label>
            <input
              type="text"
              name="title_satu"
              value={data.title_satu}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block font-bold text-gray-700 capitalize">
              Deskripsi Satu
            </label>
            <input
              type="text"
              name="deskripsi_satu"
              value={data.deskripsi_satu}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block font-bold text-gray-700 capitalize">
              {" "}
              Title Dua
            </label>
            <input
              type="text"
              name="title_dua"
              value={data.title_dua}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block font-bold text-gray-700 capitalize">
              Deskripsi Dua
            </label>
            <input
              type="text"
              name="deskripsi_dua"
              value={data.deskripsi_dua}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block font-bold text-gray-700 capitalize">
              Title Tiga
            </label>
            <input
              type="text"
              name="title_tiga"
              value={data.title_tiga}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block font-bold text-gray-700 capitalize">
              Deskripsi Tiga
            </label>
            <input
              type="text"
              name="deskripsi_tiga"
              value={data.deskripsi_tiga}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block font-bold text-gray-700 capitalize">
              Title Empat
            </label>
            <input
              type="text"
              name="title_empat"
              value={data.title_empat}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block font-bold text-gray-700 capitalize">
              Deskripsi Empat
            </label>
            <input
              type="text"
              name="deskripsi_empat"
              value={data.deskripsi_empat}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block font-bold text-gray-700 capitalize">
              Title Lima
            </label>
            <input
              type="text"
              name="title_lima"
              value={data.title_lima}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block font-bold text-gray-700 capitalize">
              Deskripsi Lima
            </label>
            <input
              type="text"
              name="deskripsi_lima"
              value={data.deskripsi_lima}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block font-bold text-gray-700 capitalize">
              Karir Image Satu
            </label>
            <input
              type="text"
              name="karir_image_satu"
              value={data.karir_image_satu}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="font-bold">Result image :</p>
            <img
              className="border w-80"
              loading="lazy"
              src={data.karir_image_satu}
              alt="bg"
            />
          </div>
          <div>
            <label className="block font-bold text-gray-700 capitalize">
              Karir Title Satu
            </label>
            <input
              type="text"
              name="karir_title_satu"
              value={data.karir_title_satu}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block font-bold text-gray-700 capitalize">
              Karir Deskripsi Satu
            </label>
            <input
              type="text"
              name="karir_deskripsi_satu"
              value={data.karir_deskripsi_satu}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block font-bold text-gray-700 capitalize">
              Karir Image Dua
            </label>
            <input
              type="text"
              name="karir_image_dua"
              value={data.karir_image_dua}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="font-bold">Result image :</p>
            <img
              className="border w-80"
              loading="lazy"
              src={data.karir_image_dua}
              alt="bg"
            />
          </div>
          <div>
            <label className="block font-bold text-gray-700 capitalize">
              Karir Title Dua
            </label>
            <input
              type="text"
              name="karir_title_dua"
              value={data.karir_title_dua}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block font-bold text-gray-700 capitalize">
              Karir Deskripsi Dua
            </label>
            <input
              type="text"
              name="karir_deskripsi_dua"
              value={data.karir_deskripsi_dua}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block font-bold text-gray-700 capitalize">
              Karir Image Tiga
            </label>
            <input
              type="text"
              name="karir_image_tiga"
              value={data.karir_image_tiga}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="font-bold">Result image :</p>
            <img
              className="border w-80"
              loading="lazy"
              src={data.karir_image_tiga}
              alt="bg"
            />
          </div>
          <div>
            <label className="block font-bold text-gray-700 capitalize">
              Karir Title Tiga
            </label>
            <input
              type="text"
              name="karir_title_tiga"
              value={data.karir_title_tiga}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block font-bold text-gray-700 capitalize">
              Karir Deskripsi Tiga
            </label>
            <input
              type="text"
              name="karir_deskripsi_tiga"
              value={data.karir_deskripsi_tiga}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block font-bold text-gray-700 capitalize">
              Penghargaan Image Satu
            </label>
            <input
              type="text"
              name="penghargaan_image_satu"
              value={data.penghargaan_image_satu}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="font-bold">Result image :</p>
            <img
              className="border w-80"
              loading="lazy"
              src={data.penghargaan_image_satu}
              alt="bg"
            />
          </div>
          <div>
            <label className="block font-bold text-gray-700 capitalize">
              Penghargaan Title Satu
            </label>
            <input
              type="text"
              name="penghargaan_title_satu"
              value={data.penghargaan_title_satu}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block font-bold text-gray-700 capitalize">
              Penghargaan Deskripsi Satu
            </label>
            <input
              type="text"
              name="penghargaan_deskripsi_satu"
              value={data.penghargaan_deskripsi_satu}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block font-bold text-gray-700 capitalize">
              Penghargaan Image Dua
            </label>
            <input
              type="text"
              name="penghargaan_image_dua"
              value={data.penghargaan_image_dua}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="font-bold">Result image :</p>
            <img
              loading="lazy"
              className="border w-80"
              src={data.penghargaan_image_dua}
              alt="bg"
            />
          </div>
          <div>
            <label className="block font-bold text-gray-700 capitalize">
              Penghargaan Title Dua
            </label>
            <input
              type="text"
              name="penghargaan_title_dua"
              value={data.penghargaan_title_dua}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block font-bold text-gray-700 capitalize">
              Penghargaan Deskripsi Dua
            </label>
            <input
              type="text"
              name="penghargaan_deskripsi_dua"
              value={data.penghargaan_deskripsi_dua}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block font-bold text-gray-700 capitalize">
              Penghargaan Image Tiga
            </label>
            <input
              type="text"
              name="penghargaan_image_tiga"
              value={data.penghargaan_image_tiga}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="font-bold">Result image :</p>
            <img
              loading="lazy"
              className="border w-80"
              src={data.penghargaan_image_tiga}
              alt="bg"
            />
          </div>
          <div>
            <label className="block font-bold text-gray-700 capitalize">
              Penghargaan Title Tiga
            </label>
            <input
              type="text"
              name="penghargaan_title_tiga"
              value={data.penghargaan_title_tiga}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block font-bold text-gray-700 capitalize">
              Penghargaan Deskripsi Tiga
            </label>
            <input
              type="text"
              name="penghargaan_deskripsi_tiga"
              value={data.penghargaan_deskripsi_tiga}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block font-bold text-gray-700 capitalize">
              Berita Image Satu
            </label>
            <input
              type="text"
              name="berita_image_satu"
              value={data.berita_image_satu}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="font-bold">Result image :</p>
            <img
              loading="lazy"
              className="border w-80"
              src={data.berita_image_satu}
              alt="bg"
            />
          </div>
          <div>
            <label className="block font-bold text-gray-700 capitalize">
              Berita Title Satu
            </label>
            <input
              type="text"
              name="berita_title_satu"
              value={data.berita_title_satu}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block font-bold text-gray-700 capitalize">
              Berita Deskripsi Satu
            </label>
            <input
              type="text"
              name="berita_deskripsi_satu"
              value={data.berita_deskripsi_satu}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block font-bold text-gray-700 capitalize">
              Berita Image Dua
            </label>
            <input
              type="text"
              name="berita_image_dua"
              value={data.berita_image_dua}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="font-bold">Result image :</p>
            <img
              className="border w-80"
              loading="lazy"
              src={data.berita_image_dua}
              alt="bg"
            />
          </div>
          <div>
            <label className="block font-bold text-gray-700 capitalize">
              Berita Title Dua
            </label>
            <input
              type="text"
              name="berita_title_dua"
              value={data.berita_title_dua}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block font-bold text-gray-700 capitalize">
              Berita Deskripsi Dua
            </label>
            <input
              type="text"
              name="berita_deskripsi_dua"
              value={data.berita_deskripsi_dua}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block font-bold text-gray-700 capitalize">
              Berita Image Tiga
            </label>
            <input
              type="text"
              name="berita_image_tiga"
              value={data.berita_image_tiga}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="font-bold">Result image :</p>
            <img
              loading="lazy"
              className="border w-80"
              src={data.berita_image_tiga}
              alt="bg"
            />
          </div>
          <div>
            <label className="block font-bold text-gray-700 capitalize">
              Berita Title Tiga
            </label>
            <input
              type="text"
              name="berita_title_tiga"
              value={data.berita_title_tiga}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block font-bold text-gray-700 capitalize">
              Berita Deskripsi Tiga
            </label>
            <input
              type="text"
              name="berita_deskripsi_tiga"
              value={data.berita_deskripsi_tiga}
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

export default BeritaForm;
