import React, { useState, useEffect } from "react";
import axios from "axios";

const KontenDuaForm = () => {
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
        const response = await axios.get("http://localhost:8000/api/konten-dua");
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
    <div className="container mx-auto p-8 bg-white rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Update Konten Dua</h2>
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

export default KontenDuaForm;
