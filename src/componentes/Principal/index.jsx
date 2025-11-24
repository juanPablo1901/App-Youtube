import "./style.css";
import React, { useEffect, useState, useRef, useCallback } from "react";
import { getVideos } from "./services/videos";
import VideoPlayer from "../ReproductorVideos";
import { BsThreeDotsVertical } from "react-icons/bs";

export function Principal() {
  const [videos, setVideos] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const [videoSeleccionado, setVideoSeleccionado] = useState(null);

  const [hoverVideo, setHoverVideo] = useState(null);
  const [progress, setProgress] = useState({}); // progreso de cada video

  const loaderRef = useRef(null);

  // Cargar videos
  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const nuevos = await getVideos(page);
      setVideos(prev => [...prev, ...nuevos]);
      setLoading(false);
    };
    load();
  }, [page]);

  // Scroll infinito
  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting && !loading) {
      setPage(prev => prev + 1);
    }
  }, [loading]);

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      threshold: 1.0
    });
    if (loaderRef.current) observer.observe(loaderRef.current);
  }, [handleObserver]);

  // Actualiza progreso de la vista previa
  const handleTimeUpdate = (id, e) => {
    const current = e.target.currentTime;
    const total = e.target.duration;
    const pct = (current / total) * 100;
    setProgress(prev => ({ ...prev, [id]: pct }));
  };

  return (
    <div className="principal">

      {videos.map(video => (
        <div 
          key={video.id} 
          className="card-video"
          onClick={() => setVideoSeleccionado(video)}
        >

          {/* Miniatura */}
          <div 
            className="Miniatura-container"
            onMouseEnter={() => setHoverVideo(video.id)}
            onMouseLeave={() => setHoverVideo(null)}
          >
            {hoverVideo === video.id ? (
              <>
                <video
                  src={video.url}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="Miniatura video-preview"
                  onTimeUpdate={(e) => handleTimeUpdate(video.id, e)}
                />

                {/* Barra de progreso */}
                <div className="preview-progress-bar">
                  <div 
                    className="preview-progress" 
                    style={{ width: `${progress[video.id] || 0}%` }} 
                  />
                </div>
              </>
            ) : (
              <>
                <img src={video.miniatura} className="Miniatura" />
                <div className="duration">{video.duracion || "10:10"}</div>
              </>
            )}
          </div>

          {/* Info del video */}
          <div className="info">
            <img src={video.avatar || "https://i.pravatar.cc/300"} className="icon-canal"></img>

            <div className="info-Titulo">
              <h4 className="Titulo">{video.autor}</h4>

              <p className="Sub-Titulo">
                {video.autor || "Usuario"} • 
                {video.vistas || "vistas"} • 
                {video.fecha || "Hace"}
              </p>
            </div>

            <div className="Menu">
              <BsThreeDotsVertical />
            </div>
          </div>

        </div>
      ))}

      <div ref={loaderRef} className="loading">
        {loading && <p>Cargando más videos...</p>}
      </div>

      {/* Reproductor */}
      {videoSeleccionado && (
        <VideoPlayer 
          video={videoSeleccionado}
          onClose={() => setVideoSeleccionado(null)}
        />
      )}

    </div>
  );
}

export default Principal;

