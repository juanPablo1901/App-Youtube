// API de videos libres de copyright
// Cada página devuelve 8 videos

export async function getVideos(page = 1) {
  // videos reales desde internet
  const videosOnline = [
    {
      miniatura: "https://picsum.photos/400/250?random=1",
      autor: "FreeStock",
      url: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4"
    },
    {
      miniatura: "https://picsum.photos/400/250?random=2",
      autor: "Pexels Channel",
      url: "https://samplelib.com/lib/preview/mp4/sample-10s.mp4"
    },
    {
      miniatura: "https://picsum.photos/400/250?random=3",
      autor: "Pixabay Media",
      url: "https://samplelib.com/lib/preview/mp4/sample-15s.mp4"
    },
    {
      miniatura: "https://picsum.photos/400/250?random=4",
      autor: "Free Videos",
      url: "https://samplelib.com/lib/preview/mp4/sample-20s.mp4"
    },
    {
      miniatura: "https://picsum.photos/400/250?random=5",
      autor: "Creative Commons",
      url: "https://samplelib.com/lib/preview/mp4/sample-30s.mp4"
    },
    {
      miniatura: "https://picsum.photos/400/250?random=6",
      autor: "Open Library",
      url: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4"
    },
    {
      miniatura: "https://picsum.photos/400/250?random=7",
      autor: "Public Channels",
      url: "https://samplelib.com/lib/preview/mp4/sample-10s.mp4"
    },
    {
      miniatura: "https://picsum.photos/400/250?random=8",
      autor: "No Copyright",
      url: "https://samplelib.com/lib/preview/mp4/sample-15s.mp4"
    }
  ];

  // Simula paginación infinita duplicando contenido
  const result = videosOnline.map((v, i) => ({
    id: `page-${page}-video-${i}`,
    ...v,
    miniatura: `https://picsum.photos/400/250?random=${page * 10 + i}`
  }));

  // Simulación de carga del servidor
  return new Promise((resolve) => {
    setTimeout(() => resolve(result), 900);
  });
}
