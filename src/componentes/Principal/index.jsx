import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { useEffect, useState } from 'react';


function Principal (){
   return(
    <div className='Videos'>

      <ReactPlayer 
      url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      controls
      width='200px'
      height='250px'
      playing
      volume={0.5}
      onEnded={() => alert('Termino Video')}
      
      />

    </div>

   );

}


export default Principal;