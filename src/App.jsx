import { BrowserRouter as Router, Route, Routes, Link, useLocation, Navigate } from 'react-router-dom';
import ReactPlayer from 'react-player';

/* Icons */
import { CiSearch } from "react-icons/ci";
import { GoHome, GoHomeFill, GoBell  } from "react-icons/go";
import { IoIosAdd } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions, MdSubscriptions } from "react-icons/md";
import { FaRegUserCircle, FaUserCircle, FaYoutube, FaChromecast } from "react-icons/fa";

/*Pages */
import Personal from'./componentes/Personal/index'
import Principal from './componentes/Principal/index'
import Shorts from './componentes/Shorts/index'
import Suscripciones from './componentes/Suscripciones/index'

import './App.css'

function Nav (){
  const location = useLocation();
  return (
    <nav className="Botones">

      <Link to="/principal" 
        className={`Boton-link ${location.pathname === "/principal" ? "active" : ""}`}>
        <div className='Boton-icon'>
          {location.pathname === "/Principal" ? <GoHomeFill size={25} /> : <GoHome size={25} />}
        </div>
          <h3>Principal</h3>   
      </Link>

      <Link to="/shorts" 
      className={`Boton-link ${location.pathname === "/shorts" ? "active" : ""}`}>
        <div className='Boton-icon'>
          <SiYoutubeshorts size={25}  className='icon-short'/>
        </div>
          <h3>Shorts</h3>
      </Link>

      <Link to="/suscripciones" className={`Boton-link ${location.pathname === "/suscripciones" ? "active" : ""}`}>
        <div className='Boton-icon'>
          {location.pathname === "/Suscripciones" ? <MdSubscriptions size={25} /> : <MdOutlineSubscriptions size={25} />}
        </div>
          <h3>Suscripciones</h3>        
      </Link>

      <Link to="/personal" className={`Boton-link ${location.pathname === "/personal" ? "active" : ""}`}>
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
  <Router>

    <div className='logo'>
      <FaYoutube className='logo-youtube'/>
      <h3> YouTube </h3>
    </div>

    <div className='Botones-super'>
      <CiSearch />
      <GoBell />
      <FaChromecast />
    </div>

    
      <div className='Nav'>
      <Routes>
          <Route path='/' element={<Navigate to="/principal" replace />} />

          <Route path="/principal" element={<Principal />} />
          <Route path="/shorts" element={<Shorts />} />
          <Route path="/suscripciones" element={<Suscripciones />} />
          <Route path="/personal" element={<Personal />} />

          <Route path='*' element={<Principal />} />
      </Routes>
      <Nav />

      </div>
    </Router>

  </>
  );
}

export default App
