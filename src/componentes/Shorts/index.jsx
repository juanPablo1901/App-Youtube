import "./style.css";

export function Shorts() {

  const shorts = [
    {
      id: 1,
      url: "https://www.youtube.com/embed/aqz-KE-bpKQ"
    },
    {
      id: 2,
      url: "https://www.youtube.com/embed/IEGSRF1qH4s"
    }
  ];

  return (
    <div className="shorts-container">
      {shorts.map(s => (
        <div key={s.id} className="short-item">
          <iframe 
            src={s.url}
            className="short-video"
            allowFullScreen
          />
        </div>
      ))}
    </div>
  );
}


export default Shorts;