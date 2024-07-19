import React, { useState, useEffect } from "react";
import axios from "axios";

const BeritaForm = () => {
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
    <div className="container mx-auto p-8 bg-white rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Update Berita</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {Object.keys(data).map((key) => (
          key !== 'id' && (
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
          )
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

export default BeritaForm;
