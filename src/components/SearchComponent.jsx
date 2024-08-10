import React, { useState } from "react";
import { Link } from "react-router-dom";
import data from "../Utils/Data.json";

function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    if (event.target.value === "") {
      setSearchResults([]);
    } else {
      const results = data.filter((item) =>
        item.title.toLowerCase().includes(event.target.value.toLowerCase())
      );
      setSearchResults(results);
    }
  };

  return (
    <div className="w-full relative">
      <div className="relative w-full max-w-[172px]">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
          className="w-full  py-2 pl-8 border bg-transparent text-white placeholder:text-white font-bold custom-1200:text-[20px] custom-1000:text-[16px] border-[#FFFFFF] rounded-lg focus:outline-none"
        />
        <img
          src="./kcinput.png"
          alt="Search"
          loading="lazy"
          className="absolute left-2 top-1/2 transform -translate-y-1/2 w-5 h-5"
        />
      </div>
      {searchResults.length > 0 && (
        <ul className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
          {searchResults.map((item, index) => (
            <li
              key={index}
              className="p-2 cursor-pointer hover:bg-blue-500 hover:text-white"
            >
              <Link
                to={`/${item.route}`}
                onClick={() => setSearchTerm("")}
                className="block w-full h-full"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchComponent;
