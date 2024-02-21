import React from 'react';
import './gridlayout.css'
import { useAuth } from '../Context/authContext';

const GridLayout = () => {

  const { user, logout, loading } = useAuth()

  const handleLogout = async () => {
    await logout();

  };

  if (loading) return <h1> Loading </h1>

  return (
    <div className="grid-layout">
      <header className="header " >
        <figure class="text-center ">
          <h3>¡Tu sitio de peliculas favorito! Bienvenido {user.email}</h3>
        </figure>
      </header>
      <main className="content">
        <p className=' bg-ligth fs-5'>
        La CineEstacion es verdaderamente una experiencia cinematográfica completa y accesible para todos los amantes del cine. Con su amplia selección de películas de diversos géneros y épocas, así como su compromiso con la calidad de imagen y sonido, ofrece a sus usuarios la oportunidad de sumergirse en historias cautivadoras desde la comodidad de sus dispositivos.
<p>La plataforma no solo ofrece entretenimiento, sino también nostalgia para aquellos que deseen revivir películas de su infancia, junto con las últimas producciones de Hollywood. Además, su interfaz fácil de usar y sus funciones de búsqueda y recomendación intuitivas hacen que sea sencillo encontrar la película perfecta para cada ocasión.</p>

        </p>
      </main>
      <aside className="sidebar">
        <ol className="list-group list-group-numbered">
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Querido Diario</div>
              Comedia dramatica
            </div>
            <span className="badge bg-primary rounded-pill">1h 40min</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Insidious: La Puerta Roja</div>
              Terror, Fantasia
            </div>
            <span className="badge bg-primary rounded-pill">1h 48min</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Gran Turismo</div>
              Accion, Drama
            </div>
            <span className="badge bg-primary rounded-pill">2h 14min</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Blue Beetle</div>
              Aventura, Ciencia Ficcion
            </div>
            <span className="badge bg-primary rounded-pill">2h 08min</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Megalodon 2: La fosa</div>
              Suspenso, Accion
            </div>
            <span className="badge bg-primary rounded-pill">1h 56min</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">No tengas miedo</div>
              Teeror
            </div>
            <span className="badge bg-primary rounded-pill">1h 28min</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Alma Mahler</div>
              Romantico
            </div>
            <span className="badge bg-primary rounded-pill">1h 29min</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">La guerra de los Lulus</div>
              Aventura
            </div>
            <span className="badge bg-primary rounded-pill">1h 49min</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">El viaje de Harold</div>
              Drama
            </div>
            <span className="badge bg-primary rounded-pill">1h 48min</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Oppenheimer</div>
              Historico, Suspenso
            </div>
            <span className="badge bg-primary rounded-pill">3h 01min</span>
          </li>
        </ol>
      </aside>
      <footer className="footer">
        <button type="button" class="btn btn-danger" onClick={handleLogout}>
          Log Out
        </button>
      </footer>
    </div>
  );
};

export default GridLayout;