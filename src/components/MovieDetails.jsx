import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getMovieDetails } from "../api/quizApi";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      const data = await getMovieDetails(id);
      setMovie(data);
      setLoading(false);
    };
    fetchDetails();
  }, [id]);

  if (loading) {
    return <p className="text-center mt-10">Loading movie details...</p>;
  }

  if (!movie) {
    return <p className="text-center mt-10 text-red-500">Movie not found!</p>;
  }

  return (
    <div className="max-w-5xl mx-auto mt-8 bg-white p-6 rounded-lg shadow-md">
      <Link to="/" className="text-blue-600 hover:underline mb-4 block">
        ← Back to Search
      </Link>

      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400"}
          alt={movie.Title}
          className="w-full md:w-1/3 rounded-lg shadow"
        />

        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">{movie.Title}</h1>
          <p className="text-gray-600 mb-4 italic">{movie.Year}</p>
          <p className="text-gray-800 mb-4">{movie.Plot}</p>

          <div className="space-y-2 text-gray-700">
            <p><strong>🎭 Genre:</strong> {movie.Genre}</p>
            <p><strong>🎬 Director:</strong> {movie.Director}</p>
            <p><strong>⭐ IMDB Rating:</strong> {movie.imdbRating}</p>
            <p><strong>👥 Actors:</strong> {movie.Actors}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
