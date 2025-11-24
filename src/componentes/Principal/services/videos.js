const API_KEY = "53382752-de71d7f4cbb82c807331a7df2";

export async function getVideos(page = 1) {
  const url = `https://pixabay.com/api/videos/?key=${API_KEY}&page=${page}&per_page=10`;

  const res = await fetch(url);
  const data = await res.json();

  if (!data.hits) return [];

  return data.hits.map((v, i) => ({
    id: `pixabay-${v.id}-${page}-${i}`,
    url: v.videos.tiny.url,
    miniatura: v.userImageURL || "https://i.pravatar.cc/300",
    autor: v.user || "Creador",
    vistas: `${Math.floor(Math.random() * 999)}K`,
    fecha: "hace poco",
    descripcion: v.tags,
    avatar: v.userImageURL || "https://i.pravatar.cc/300",
  }));
}
