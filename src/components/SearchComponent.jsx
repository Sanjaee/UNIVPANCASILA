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
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
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
