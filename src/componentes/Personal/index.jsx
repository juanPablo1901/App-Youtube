import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { useEffect, useState } from 'react';
import './style.css'

/**Icons */
import { FaRegUserCircle, FaUserCircle, FaYoutube, FaChromecast } from "react-icons/fa";


function Personal (){

    return(
    <>

    <div className='info-user'>
        <FaRegUserCircle  className='Avatar-user'/>
        <div className='User'>
            <h1>Nombre usuario</h1>
            <h4 className='Acount'>correo Usuario</h4>
        </div> 
    </div>


    <div className='Historial'>


    </div>

    
    </>
    );
}


export default Personal;