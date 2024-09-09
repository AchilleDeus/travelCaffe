import React from 'react'
import "./italia.css"

import NavBar from '../../components/navbar/NavBar'
import Sidebar from '../../components/sidebar/Sidebar'
import Futer from '../../components/futer/Futer'
export default function Italia() {
  return (
    <>
    <NavBar/>
    
    <div className="boxCornice">

    
   <div className="boxItaliaContainer">

<div className="boxCartGeografica">

   <div className="CardGeograficaTitle">ITALIA</div> 
   
<img src="./img/blogSlaidItalia.jpeg" alt="foto cartina geografica politica Italia" className="CartGeograficaImg" />

</div>

<div className="boxCartSidebar">

<Sidebar/>

</div>

</div>
   </div>
    
    
    
    <Futer/>
    
    </>
  )
}
