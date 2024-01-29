import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const FilmCard = ({ el, del }) => {
  return (
    <div>
      {" "}
      <Card style={{ width: "18rem", margin: "25px" }}>
        <Card.Img style={{ height: "422px" }} variant="top" src={el.imgURL} />
        <Card.Body>
          <Card.Title>{el.title}</Card.Title>
          <Card.Text></Card.Text>
          <Button onClick={() => del(el.id)} variant="danger">
            delete
          </Button>
          <Link to={`/film/${el.id}`}>
            <Button variant="primary">Go to Détail</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default FilmCard;
