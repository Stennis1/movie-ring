import React, { useEffect, useState } from "react";
import { searchMovies } from "./services/api";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function load() {
      const results = await searchMovies("Spider-Man");
      console.log(results);
      setMovies(results);
    }
    load();
  }, []);

  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl mb-4">Movie Search Test</h1>
      {movies.map((movie) => (
        <div key={movie.imdbID}>
          {movie.Title} ({movie.Year})
        </div>
      ))}
    </div>
  );
}

export default App;
