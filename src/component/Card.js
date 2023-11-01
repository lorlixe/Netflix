import React, { useState } from "react";
import "../Style/Card.scss";

const Card = (props) => {
  function truncateText(string, n) {
    return string?.length > n
      ? string.substr(0, n - 1) + "..."
      : "No description";
  }
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className="row_container_image"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <img
        src={"https://image.tmdb.org/t/p/original/" + props.img}
        alt={
          props.info?.title ||
          props.info?.original_title ||
          props.info?.original_name
        }
        className="row_image"
      />
      {isHover && (
        <div className="row_container_image_description">
          <h3>
            {props.info?.title ||
              props.info?.original_title ||
              props.info?.original_name}
          </h3>
          <p className="row_container_image_rate">
            Recommendé par {Math.round(props.info?.vote_average * 10)}%{" "}
          </p>
          <p>{truncateText(props.info?.overview, 100)}</p>
        </div>
      )}
    </div>
  );
};

export default Card;
