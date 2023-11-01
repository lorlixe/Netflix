import React from "react";
// import { useParams } from "react-router";
import "../Style/Video.scss";
const Video = () => {
  //   let id = useParams();
  return (
    <div className="video">
      <iframe
        src="https://www.youtube.com/embed/PDFMcU1G6TE?si=H8lLMBEMXUDzMYyD"
        title="YouTube video player"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;
