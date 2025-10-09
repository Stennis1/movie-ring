
# 🎬 Movie Database App

A responsive movie search application built with **React**, **Vite**, and **Tailwind CSS**, using the **OMDb API** for real-time movie data.

---

## 🚀 Features

* 🔍 **Search for Movies** — Find movies by title using the OMDb API
* 🎞️ **Movie List View** — Display movie posters, titles, and release years
* 📖 **Movie Details** — View plot summary, cast, ratings, and genres
* 📱 **Responsive UI** — Built with Tailwind CSS for all screen sizes
* ⚠️ **Error Handling** — Gracefully handles missing data and API errors

---

## 🧰 Tech Stack

* **Frontend:** React (Vite)
* **Styling:** Tailwind CSS
* **API:** [OMDb API](https://www.omdbapi.com/)
* **Deployment:** Vercel

---

## ⚙️ Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Stennis1/movie-ring.git
   cd movie-database
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Add Your OMDb API Key**
   Create a `.env` file and add:

   ```
   VITE_OMDB_API_KEY=your_api_key_here
   ```

4. **Run the App**

   ```bash
   npm run dev
   ```

5. **Open in Browser**
   Visit: [http://localhost:5173](http://localhost:5173)

---

## 🧩 Folder Structure

```
src/
 ├── api/
 │    └── movieApi.js
 ├── components/
 │    ├── SearchBar.jsx
 │    ├── MovieCard.jsx
 │    ├── MovieList.jsx
 │    └── MovieDetails.jsx
 ├── App.jsx
 ├── main.jsx
 ├── index.css
```

---

## 🌟 Future Enhancements (Stretch Goals)

* Favorites list (save to localStorage)
* Pagination for search results
* Embedded YouTube trailers
* Light/Dark theme toggle
* Multi-language support
