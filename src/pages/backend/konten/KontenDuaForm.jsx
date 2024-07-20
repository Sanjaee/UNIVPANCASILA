import React, { useState, useEffect } from "react";
import axios from "axios";
import NavbarBE from "../NavbarBE";
import { useLogin } from "../useLogin";

const KontenDuaForm = () => {
  useLogin();
  const [data, setData] = useState({
    image: "",
    title: "",
    deskripsi_satu: "",
    deskripsi_dua: "",
    deskripsi_tiga: "",
    deskripsi_empat: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/konten-dua"
        );
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
      await axios.put("http://localhost:8000/api/konten-dua", data);
      alert("Data updated successfully");
    } catch (error) {
      console.error("Failed to update data:", error);
    }
  };

  return (
    <>
      <NavbarBE />
      <div className="px-4   lg:p-8 mt-24   bg-white rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-6">Update Konten Dua</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 capitalize">Image</label>
            <input
              type="text"
              name="image"
              value={data.image}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="font-bold">Result image :</p>
            <img className="border w-80" src={data.image} alt="bg" />
          </div>
          <div>
            <label className="block text-gray-700 capitalize">Title</label>
            <input
              type="text"
              name="title"
              value={data.title}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 capitalize">
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
            <label className="block text-gray-700 capitalize">
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
            <label className="block text-gray-700 capitalize">
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
            <label className="block text-gray-700 capitalize">
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

export default KontenDuaForm;
