import React, { useState, useEffect } from "react";
import axios from "axios";

const BerandaForm = () => {
  const [data, setData] = useState({
    background_image: "",
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
    galert_title_dua: ""
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/beranda");
        const { id, ...rest } = response.data; // Destructure to remove the id field
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
    <div className="container mx-auto p-8 bg-white rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Update Beranda</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {Object.keys(data).map((key) => (
          <div key={key}>
            <label className="block text-gray-700 capitalize">{key.replace(/_/g, " ")}</label>
            <input
              type="text"
              name={key}
              value={data[key]}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        ))}
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default BerandaForm;
