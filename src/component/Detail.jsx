import React from "react";
import { useParams } from "react-router-dom";
import StarFilm from "./StarFilm";
import { Button } from "react-bootstrap";

const Detail = ({ film }) => {
  const params = useParams();
  const filmid = params.id;
  const selectedfilm = film.find((el) => el.id == filmid);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        flexDirection: "column",
        justifyContent: "space-evenly",
      }}
    >
      <h1 style={{ color: "white" }}>{selectedfilm.title}</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          margin: "25px",

          justifyContent: "space-between",
        }}
      >
        <img
          src={selectedfilm.imgURL}
          style={{
            width: "400px",
            height: "500px",
            borderRadius: "25px",
            border: "4px solid white",
            margin: "50px",
          }}
          alt="imgurl"
        />

        <iframe
          src={selectedfilm.videoURL}
          style={{
            width: "800px",
            height: "500px",
            borderRadius: "25px",
            border: "4px solid white",
          }}
          frameborder="0"
        />
      </div>
      <div
        style={{
          borderRadius: "10px",
          border: "4px solid white",
          backgroundColor: "gray",
          height: "auto",
          width: "1400px",
        }}
      >
        <p>
          Movie Description:{selectedfilm.description}
          <br />
          {selectedfilm.date}
          <br />
          <Button style={{ backgroundColor: "gray", borderRadius: "20px" }}>
            <StarFilm rate={selectedfilm.rate} />
          </Button>
          <br />
        </p>
      </div>
    </div>
  );
};

export default Detail;
