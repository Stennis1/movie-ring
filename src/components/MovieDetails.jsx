import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getMovieDetails } from "../services/api";

function MovieDetails() {
  const { id } = useParams(); // Extracts movie ID from the URL
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await getMovieDetails(id);
      setMovie(data);
      setLoading(false);
    }
    fetchData();
  }, [id]);

  if (loading) return <p className="text-center text-gray-400 mt-10">Loading...</p>;
  if (!movie) return <p className="text-center text-red-400 mt-10">Movie not found.</p>;

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <Link to="/" className="text-cyan-400 hover:underline text-sm mb-4 inline-block">
        ← Back to Search
      </Link>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300"}
          alt={movie.Title}
          className="w-full md:w-1/3 rounded-lg shadow-lg"
        />

        <div className="md:w-2/3">
          <h1 className="text-4xl font-bold text-cyan-400 mb-3">{movie.Title}</h1>
          <p className="text-gray-400 italic mb-2">{movie.Year} • {movie.Genre}</p>
          <p className="mb-4 text-gray-300">{movie.Plot}</p>

          <div className="space-y-2">
            <p><span className="font-semibold text-cyan-400">Director:</span> {movie.Director}</p>
            <p><span className="font-semibold text-cyan-400">Actors:</span> {movie.Actors}</p>
            <p><span className="font-semibold text-cyan-400">Language:</span> {movie.Language}</p>
            <p><span className="font-semibold text-cyan-400">Runtime:</span> {movie.Runtime}</p>
            <p><span className="font-semibold text-cyan-400">IMDB Rating:</span> ⭐ {movie.imdbRating}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
