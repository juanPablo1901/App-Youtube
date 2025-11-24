import React from "react";
import ReactPlayer from "react-player";
import './style.css'

export default function VideoPlayer({ video, onClose }) {
  if (!video) return null;

  return (
    <div className="player-overlay">
      <div className="player-box">
        <button className="close-btn" onClick={onClose}>X</button>

        <ReactPlayer 
          url={video.url}
          controls
          playing
          width="100%"
          height="100%"
        />

        <h2>{video.autor}</h2>
      </div>
    </div>
  );
}
