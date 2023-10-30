import React from "react";
import "../Style/Card.scss";

const Card = (props) => {
  return (
    <div className="row_container_image">
      <img
        src={"https://image.tmdb.org/t/p/original/" + props.img}
        alt={
          props.info?.title ||
          props.info?.original_title ||
          props.info?.original_name
        }
        className="row_image"
      />
    </div>
  );
};

export default Card;
