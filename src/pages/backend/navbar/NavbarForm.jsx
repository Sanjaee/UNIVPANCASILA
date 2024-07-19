import React, { useState, useEffect } from "react";
import axios from "axios";

const NavbarForm = () => {
  const [data, setData] = useState({
    logo_satu: "",
    logo_dua: "",
    text_conten_satu: "",
    text_conten_dua: "",
    text_conten_tiga: "",
    text_conten_empat: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/navbar");
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
      await axios.put("http://localhost:8000/api/navbar", data);
      alert("Data updated successfully");
    } catch (error) {
      console.error("Failed to update data:", error);
    }
  };

  return (
    <div className="container mx-auto p-8 bg-white rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Update Navbar</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700">Logo Satu</label>
          <input
            type="text"
            name="logo_satu"
            value={data.logo_satu}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700">Logo Dua</label>
          <input
            type="text"
            name="logo_dua"
            value={data.logo_dua}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700">Text Content Satu</label>
          <input
            type="text"
            name="text_conten_satu"
            value={data.text_conten_satu}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700">Text Content Dua</label>
          <input
            type="text"
            name="text_conten_dua"
            value={data.text_conten_dua}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700">Text Content Tiga</label>
          <input
            type="text"
            name="text_conten_tiga"
            value={data.text_conten_tiga}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700">Text Content Empat</label>
          <input
            type="text"
            name="text_conten_empat"
            value={data.text_conten_empat}
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
  );
};

export default NavbarForm;
