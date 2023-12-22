import React from "react";

const SearchBar = ({ searchTerm, onSearchTermChange, onSearchSubmit }) => {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      console.log("Submitting search:", searchTerm);
      onSearchSubmit();
    }
  };

  console.log("Search Term:", searchTerm);

  return (
    <input
      className="relative w-full text-center bg-white max-auto ml-9 mr-9"
      type="text"
      placeholder="🔎 Buscar noticias"
      value={searchTerm}
      onChange={(e) => {
        console.log("Search Term Change:", e.target.value);
        onSearchTermChange(e.target.value);
      }}
      onKeyPress={handleKeyPress}
    />
  );
};

export default SearchBar;