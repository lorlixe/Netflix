import React from "react";
import "../Style/QuickView.scss";
import CancelIcon from "@mui/icons-material/Cancel";

const QuickView = ({ bannerStyle, movie, popup, popupStatut }) => {
  console.log(movie);
  return (
    <div className={`quickView  ${popupStatut && "open"}`}>
      <div className="quickView_banner" style={bannerStyle}>
        <div className="quickView_content">
          <p className="quickView_rate">
            Recommendé par {Math.round(movie?.vote_average * 10)}%{" "}
          </p>

          <h2 className="quickView_tile">
            {" "}
            {movie?.title || movie?.original_title || movie?.original_name}
          </h2>
          <p>{movie?.overview} </p>
        </div>
        <button className="quickView_close" onClick={popup}>
          <CancelIcon fontSize="large" />
        </button>
      </div>
    </div>
  );
};

export default QuickView;
