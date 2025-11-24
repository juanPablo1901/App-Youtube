import "./style.css";

export function Suscripciones() {

  const canales = [
    { id: 1, nombre: "Ken Universe", foto: "https://i.pravatar.cc/150?img=1" },
    { id: 2, nombre: "React Live", foto: "https://i.pravatar.cc/150?img=2" },
    { id: 3, nombre: "Gaming Pro", foto: "https://i.pravatar.cc/150?img=3" }
  ];

  return (
    <div className="subs-container">
      <h2>Últimos videos</h2>

      <div className="lista-canales">
        {canales.map(c => (
          <div key={c.id} className="canal">
            <img src={c.foto} />
            <p>{c.nombre}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Suscripciones;