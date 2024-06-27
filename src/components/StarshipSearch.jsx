import { useState } from "react";

function StarshipSearch(props) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <h2>Search</h2>
      <input type="text" onChange={handleChange} value={searchTerm} />
      <button onClick={() => props.handleSearch(searchTerm)}>Search</button>
    </div>
  );
}

export default StarshipSearch;
