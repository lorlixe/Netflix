import React, { useEffect, useState } from "react";
import "../Style/Banner.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import axios from "axios";
import requests from "../config/Request";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    axios
      .get(requests.fetchTrending)
      .then((response) => {
        setMovie(
          response.data.results[
            Math.floor(Math.random() * response.data.results.length - 1)
          ]
        );
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données", error);
      });
  }, []);

  function truncateText(string, n) {
    return string?.length > n
      ? string.substr(0, n - 1) + "..."
      : "No description";
  }

  const bannerStyle = {
    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };

  return (
    <header className="banner" style={bannerStyle}>
      <div className="banner_content">
        <h1 className="banner_title">
          {movie?.title || movie?.original_title || movie?.original_name}
        </h1>
        <p className="banner_description">
          {" "}
          {truncateText(movie?.overview, 100)}
        </p>
        <div className="banner_buttons">
          <button className="banner_button banner_button--play ">
            <PlayArrowIcon />
            Lecture
          </button>
          <button className="banner_button">
            <HelpOutlineIcon />
            plus d'info
          </button>
        </div>
      </div>
    </header>
  );
};

export default Banner;
