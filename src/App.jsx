import React from "react";
import { Routes, Route } from "react-router-dom";
import MovieSearch from "./pages/MovieSearch";
import MovieDetails from "./pages/MovieDetails";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-gray-900 text-white py-4 shadow-md">
        <h1 className="text-center text-3xl font-bold">🎥 Movie Database</h1>
      </header>

      <main className="container mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<MovieSearch />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </main>

      <footer className="text-center py-4 text-gray-500 text-sm border-t mt-10">
        © {new Date().getFullYear()} Movie Database App
      </footer>
    </div>
  );
}

export default App;
