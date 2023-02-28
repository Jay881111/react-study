import React from "react";

function ShowMovie({ movies }) {
  return (
    <>
      {movies.map((el) => {
        return (
          <li key={el.key}>
            {el.title}
            <span>({el.year})</span>
          </li>
        );
      })}
    </>
  );
}

export default ShowMovie;
