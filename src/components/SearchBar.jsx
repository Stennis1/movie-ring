import React from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return; // avoid empty searches
    onSearch(query);
    setQuery(""); // clear after search (optional)
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center mb-8">
      <input
        type="text"
        placeholder="Search for a movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-72 sm:w-96 p-3 rounded-l-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-cyan-400"
      />
      <button
        type="submit"
        className="bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-3 rounded-r-lg font-semibold"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
