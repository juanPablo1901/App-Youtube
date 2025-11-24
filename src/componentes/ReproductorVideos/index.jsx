import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
import { IoMdArrowBack } from "react-icons/io";
import { getVideos } from "../Principal/services/videos";
import "./style.css";

export default function VideoPlayer() {
    const navigate = useNavigate();
    const { state } = useLocation();
    const video = state?.video;

    if (!video) return <p>Error: video no encontrado</p>;

    const [playing, setPlaying] = useState(false);

    const [recomendados, setRecomendados] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const loaderRef = useRef(null);

    const handlePlay = () => {
        console.log("▶ CLICK → reproducción permitida!");
        setPlaying(true);
    };

    useEffect(() => {
        const load = async () => {
            setLoading(true);
            const nuevos = await getVideos(page);
            setRecomendados((prev) => [...prev, ...nuevos]);
            setLoading(false);
        };
        load();
    }, [page]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !loading) {
                setPage((prev) => prev + 1);
            }
        });
        if (loaderRef.current) observer.observe(loaderRef.current);
    }, []);

    const abrirVideo = (vid) => {
        navigate(`/video/${vid.id}`, { state: { video: vid } });
        window.scrollTo({ top: 0, behavior: "smooth" });
        setPlaying(false);
    };

    return (
        <div className="VideoPlayer">

            <div className="Video-play">

                    <video
                    src={video.url}
                    controls
                    autoPlay
                    muted
                    playsInline
                    style={{ width: "100%", height: "100%", background: "black" }}
                    onError={(e) => {
                        console.log("ERROR DEL VIDEO:", e.target.error);
                    }}
                    />

            </div>

            <div className="VideoPlay-Info">
                <h2 className="VideoPlay-titulo">{video.autor}</h2>
                <p className="VideoPlay-sub">
                    {video.vistas} • {video.fecha}
                </p>
                <p className="VideoPlay-Descripcion">{video.descripcion}</p>
            </div>

            <div className="Recomendados">
                <h3 className="Reco-title">Videos recomendados</h3>

                {recomendados.map((v, i) => (
                    <div key={`${v.id}-${i}`} className="Reco-card" onClick={() => abrirVideo(v)}>
                        <img className="Reco-thumb" src={v.miniatura} />
                        <div className="Reco-info">
                            <h4 className="Reco-titulo">{v.autor}</h4>
                            <p className="Reco-sub">{v.vistas} • {v.fecha}</p>
                        </div>
                    </div>
                ))}

                <div ref={loaderRef} className="Reco-loading">
                    {loading && "Cargando más videos..."}
                </div>
            </div>

            <button className="Video-Back" onClick={() => navigate(-1)}>
                <IoMdArrowBack />
            </button>
        </div>
    );
}
