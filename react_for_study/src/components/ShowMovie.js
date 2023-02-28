import React from "react";

function ShowMovie({ movies, deleteHandler }) {
  const showMovie = movies.map((el) => {
    return (
      <li key={el.key}>
        {el.title}
        <span>({el.year})</span>
        <button
          className="show_button"
          onClick={() => {
            deleteHandler(el.key);
          }}
        >
          삭제
        </button>
      </li>
    );
  });
  return <>{showMovie}</>;
}

export default ShowMovie;
