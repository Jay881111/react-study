import React, { useState } from "react";
import "./MovieForm.css";
import ShowMovie from "./ShowMovie";

function MovieForm() {
  const [movies, setMovies] = useState([
    { key: 1, title: "Home Alone", year: 1997 },
    { key: 2, title: "Fast & Furious", year: 2015 },
  ]);
  const [newMovieTitle, setNewMovieTitle] = useState("");
  const [newMovieYear, setNewMovieYear] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMovies([
      ...movies,
      { key: Date.now(), title: newMovieTitle, year: newMovieYear },
    ]);
  };

  const showMovieList = (
    <ul>
      <ShowMovie movies={movies} />
    </ul>
  );

  return (
    <div className="Movie">
      <h1>What is your favorite movie?</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="movieyear">
          Movie Title
          <input
            value={newMovieTitle}
            onChange={(e) => setNewMovieTitle(e.target.value)}
            type="text"
            placeholder="영화이름을 입력하세요"
          />
        </label>
        <label htmlFor="movieyear">
          Movie Year
          <input
            name="movieyear"
            value={newMovieYear}
            onChange={(e) => setNewMovieYear(e.target.value)}
            type="number"
            placeholder="개봉연도를 입력하세요"
          />
        </label>
        <button>add</button>
      </form>
      {showMovieList}
    </div>
  );
}

export default MovieForm;
