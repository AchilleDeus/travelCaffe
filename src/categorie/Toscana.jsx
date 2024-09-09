import React from 'react'
import "./regione.css"
import {Link} from 'react-router-dom'

import NavBar from "../components/navbar/NavBar"
import Futer from '../components/futer/Futer'
export default function Toscana() {
  return (
    <>
   
    <NavBar/>
    
 <div className="regioneBox">
 
 <div className="regionecontainer">
 <span className="regioneTitle">Regione Toscana</span>
 <img className='regioneImg' src="./img/blogSlaidToscana.jpg" alt="..." />
 </div>
 
 
 <div className="regionecontainerLuoghi">
 
 <ul className="regioneBoxLuoghi">
     
 <span className="regioneLuoghiTitle"> Luoghi di Mare  </span>
 
 <li className="regioneLuoghi-Item">Castiglione della Pescaia</li>
 <li className="regioneLuoghi-Item">Viareggio</li>
 <li className="regioneLuoghi-Item">Forte dei Marmi</li>

 <Link style={{textDecoration:'none'}} to='/toscana/isoladelgiglio'><li className="regioneLuoghi-Item">Isola del Giglio</li></Link>

 <li className="regioneLuoghi-Item">Marina di Pietrasanta</li>
 <li className="regioneLuoghi-Item">Talamone</li>
 <li className="regioneLuoghi-Item">San Vincenzo</li>
 <li className="regioneLuoghi-Item">Marina di Campo</li>
 <li className="regioneLuoghi-Item">Barrati</li>
 <li className="regioneLuoghi-Item">Cala Violina</li>
 
 </ul>
 <ul className="regioneBoxLuoghi">
     
 <span className="regioneLuoghiTitle testo"> Luoghi di Collina/Montagna  </span>
 
 <li className="regioneLuoghi-Item">San Gimignano (Siena)</li>
 <li className="regioneLuoghi-Item">Cortona (Arezzo)</li>
 <li className="regioneLuoghi-Item">Monte Amita (Grosseto/Siena)</li>
 <li className="regioneLuoghi-Item">Chianti (Firenze/Siena)</li>
 <li className="regioneLuoghi-Item">Voltera (Pisa)</li>
 <li className="regioneLuoghi-Item">Garfagnana (Lucca)</li>
 <li className="regioneLuoghi-Item">Vallombrosa (Firenze)</li>

 </ul>
 
 
 
 
 </div>
 </div>
 
 <Futer/>
 
    </>
  )
}
