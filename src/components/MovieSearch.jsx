import React, { useState } from "react";
import { searchMovies } from "../api/quizApi";
import { Link } from "react-router-dom";

const MovieSearch = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError("");

    const results = await searchMovies(query);
    if (results.length === 0) {
      setError("No movies found for that search.");
    }

    setMovies(results);
    setLoading(false);
  };

  return (
    <div className="text-center">
      {/* Search Bar */}
      <form onSubmit={handleSearch} className="mb-8">
        <div className="flex justify-center gap-2">
          <input
            type="text"
            placeholder="Search for a movie..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-80 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Search
          </button>
        </div>
      </form>

      {/* Loading or Error */}
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500 font-medium">{error}</p>}

      {/* Movie Results Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-8">
        {movies.map((movie) => (
          <Link
            to={`/movie/${movie.imdbID}`}
            key={movie.imdbID}
            className="bg-white rounded-lg shadow hover:shadow-xl transition overflow-hidden"
          >
            <img
              src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300"}
              alt={movie.Title}
              className="w-full h-64 object-cover"
            />
            <div className="p-3">
              <h2 className="text-lg font-semibold truncate">{movie.Title}</h2>
              <p className="text-gray-600">{movie.Year}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MovieSearch;
