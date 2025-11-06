import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';

import { CiSearch } from "react-icons/ci";
import { GoHome, GoHomeFill, GoBell  } from "react-icons/go";
import { IoIosAdd } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions, MdSubscriptions } from "react-icons/md";
import { FaRegUserCircle, FaUserCircle, FaYoutube, FaChromecast } from "react-icons/fa";

import Personal from'./componentes/Personal/index'
import Principal from './componentes/Principal/index'
import Shorts from './componentes/Shorts/index'
import Suscripciones from './componentes/Suscripciones/index'


import './App.css'

function Nav (){
  const location = useLocation();
  return (
    <nav className="Botones">

      <Link to="/Principal" 
        className={`Boton-link ${location.pathname === "/Principal" ? "active" : ""}`}>
        <div className='Boton-icon'>
          {location.pathname === "/Principal" ? <GoHomeFill size={25} /> : <GoHome size={25} />}
        </div>
          <h3>Principal</h3>   
      </Link>

      <Link to="/Shorts" 
      className={`Boton-link ${location.pathname === "/Shorts" ? "active" : ""}`}>
        <div className='Boton-icon'>
          <SiYoutubeshorts size={25}  className='icon-short'/>
        </div>
          <h3>Shorts</h3>
      </Link>

      <Link to="/Suscripciones" className={`Boton-link ${location.pathname === "/Suscripciones" ? "active" : ""}`}>
        <div className='Boton-icon'>
          {location.pathname === "/Suscripciones" ? <MdSubscriptions size={25} /> : <MdOutlineSubscriptions size={25} />}
        </div>
          <h3>Suscripciones</h3>        
      </Link>

      <Link to="/Personal" className={`Boton-link ${location.pathname === "/Personal" ? "active" : ""}`}>
        <div className='Boton-icon'>
          {location.pathname === "/Personal" ? <FaUserCircle size={25} /> : <FaRegUserCircle size={25} />}
        </div>  
          <h3>Tú</h3>
      </Link>

    </nav>

  );
}


function App() {
  
  return (
  <>
    <div className='logo'>
      <FaYoutube className='logo-youtube'/>
      <h3> YouTube </h3>
    </div>

    <div className='Botones-super'>
      <CiSearch />
      <GoBell />
      <FaChromecast />
    </div>

    <div className=''>

      <ReactPlayer 
      controls
      src='https://www.youtube.com/watch?v=8p2BhIzrzxA&list=PLzRgwy-D4odr0FN88VvO0e-pNOWgXw0K8'
      width='200px'
      height='250px'
      playing
      volume={0.25}
      onEnded={() => alert('Termino Video')}
      
      />

    </div>

    <Router>
      <div className='Nav'>
      <Routes>
          <Route path="/Principal" element={<Principal /> } />
          <Route path="/Shorts" element={<Shorts /> } />
          <Route path="/Suscripciones " element={<Suscripciones  /> } />
          <Route path="/Personal" element={<Personal /> } />
      </Routes>
      <Nav />

      </div>
    </Router>

  </>
  );
}

export default App
