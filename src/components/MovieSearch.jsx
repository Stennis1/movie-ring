import React, { useState } from "react";
import { searchMovies } from "../services/movieApi";

const MovieSearch = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!query.trim()) {
      setError("Please enter a movie title.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const results = await searchMovies(query);
      setMovies(results);
    } catch (err) {
      console.error("Search failed:", err);
      setError("Failed to fetch movies. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-8">🎬 Movie Search</h1>

      {/* Search Form */}
      <form onSubmit={handleSearch} className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search for a movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="p-2 w-2/3 rounded-l-lg text-gray-900 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-blue-600 px-4 py-2 rounded-r-lg hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {/* Loading State */}
      {loading && <p className="text-center text-gray-400">Loading...</p>}

      {/* Error Message */}
      {error && <p className="text-center text-red-400">{error}</p>}

      {/* Movie Results */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <div key={movie.imdbID} className="bg-gray-800 p-4 rounded-lg">
            <img
              src={movie.Poster !== "N/A" ? movie.Poster : "/no-image.jpg"}
              alt={movie.Title}
              className="w-full h-64 object-cover rounded-lg"
            />
            <h2 className="text-lg font-semibold mt-2">{movie.Title}</h2>
            <p className="text-sm text-gray-400">{movie.Year}</p>
          </div>
        ))}
      </div>

      {/* No results */}
      {!loading && !error && movies.length === 0 && (
        <p className="text-center text-gray-400 mt-8">
          Start searching for your favorite movies 🍿
        </p>
      )}
    </div>
  );
};

export default MovieSearch;
