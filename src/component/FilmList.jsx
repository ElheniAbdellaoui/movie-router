import React from "react";
import FilmCard from "./FilmCard";

const FilmList = ({ film, del, search, handlerating, starrate }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      {film
        .filter(
          (el) =>
            el.title
              .trim()
              .toUpperCase()
              .includes(search.toUpperCase().trim()) && el.rate >= starrate
        )
        .map((el) => (
          <FilmCard el={el} del={del} key={el.id} handlerating={handlerating} />
        ))}
    </div>
  );
};

export default FilmList;
