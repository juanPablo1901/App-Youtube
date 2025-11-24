import React, { useEffect, useState, useRef } from "react";
import { getVideos } from "../Principal/services/videos";
import "./style.css";

export function Shorts() {
  const [shorts, setShorts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const containerRef = useRef();

  useEffect(() => {
    fetchShorts(page);
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target.querySelector("video");
          if (!video) return;

          if (entry.isIntersecting) {
            video.play();
          } else {
            video.pause();
          }
        });
      },
      {
        root: containerRef.current,
        threshold: 0.75, // reproduce cuando el 75% del video esté visible
      }
    );

    const children = containerRef.current.children;
    for (let child of children) {
      observer.observe(child);
    }

    return () => {
      for (let child of children) {
        observer.unobserve(child);
      }
    };
  }, [shorts]);

  const fetchShorts = async (pageNum) => {
    setLoading(true);
    const videos = await getVideos(pageNum);
    setShorts((prev) => [...prev, ...videos]);
    setLoading(false);
  };

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
    if (scrollTop + clientHeight >= scrollHeight - 10 && !loading) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <div className="shorts-container" ref={containerRef} onScroll={handleScroll}>
      {shorts.map((s) => (
        <div key={s.id} className="short-item">
          <video
            src={s.url}
            className="short-video"
            loop
            muted
            playsInline
          />
          <div className="short-info">
            <img src={s.avatar} alt={s.autor} className="short-avatar" />
            <div>
              <p className="short-autor">{s.autor}</p>
              <p className="short-desc">{s.descripcion}</p>
              <p className="short-views">{s.vistas}</p>
            </div>
          </div>
        </div>
      ))}
      {loading && <p style={{ color: "#fff", textAlign: "center" }}>Cargando más shorts...</p>}
    </div>
  );
}

export default Shorts;


