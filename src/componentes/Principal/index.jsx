import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { useEffect, useState } from 'react';
import { FaRegUserCircle, FaUserCircle, FaYoutube, FaChromecast } from "react-icons/fa";

import './style.css'


function Principal (){
   return(

    <div className='Videos'>

      <div>
        <ReactPlayer 
      url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      controls
      width='200px'
      height='250px'
      playing
      volume={0.5}
      onEnded={() => alert('Termino Video')}
        />
        <div className='Video-info'>
          <div className='User-icon'>
          <FaUserCircle size={25} />
          </div>
          <div className='Video-Nombre'>
            video #1

          </div>

        
        <diV className='Opciones'>

        </diV>

        </div>
       
      </div>

      

    </div>

   );

}


export default Principal;