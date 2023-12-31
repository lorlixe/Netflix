import React, { useEffect, useState } from "react";
import "../Style/Row.scss";
import axios from "axios";
import Card from "../component/Card";
import { Link } from "react-router-dom";

const Row = ({ title, fetchUrl, isPoster }) => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    axios
      .get(fetchUrl)
      .then((response) => {
        setMovie(response.data.results);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données", error);
      });
  }, [fetchUrl]);
  return (
    <div className="row">
      <h2 className="row_title">{title}</h2>
      <div className="row_images">
        {movie?.map((movieCard) =>
          isPoster ? (
            <Link to={`/video/${movieCard?.id}`} key={movieCard.id}>
              <Card
                img={movieCard.poster_path}
                info={movieCard}
                key={movieCard.id}
              />
            </Link>
          ) : (
            <Link to={`/video/${movieCard?.id}`} key={movieCard.id}>
              <Card
                img={movieCard.backdrop_path}
                info={movieCard}
                key={movieCard.id}
              />
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default Row;
