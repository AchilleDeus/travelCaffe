import React from 'react'
import "./regione.css"

import {Link} from 'react-router-dom'
import NavBar from "../components/navbar/NavBar"
import Futer from '../components/futer/Futer'

export default function Veneto() {
  return (
   <>
   
   <NavBar/>
   
<div className="regioneBox">

<div className="regionecontainer">
<span className="regioneTitle">Regione Veneto</span>
<img className='regioneImg' src="./img/blogSlaidVeneto.jpg" alt="..." />
</div>


<div className="regionecontainerLuoghi">

<ul className="regioneBoxLuoghi">
    
<span className="regioneLuoghiTitle"> Luoghi di Mare  </span>

<li className="regioneLuoghi-Item">Lido di venezia</li>
<li className="regioneLuoghi-Item">Jesolo</li>
<li className="regioneLuoghi-Item">Caorle</li>
<li className="regioneLuoghi-Item">Bibbione</li>

<Link style={{textDecoration:'none'}} to='/veneto/chioggia'><li className="regioneLuoghi-Item">Sottomarina (Chioggia)</li></Link>



<li className="regioneLuoghi-Item">Eraclea Mare</li>
<li className="regioneLuoghi-Item">Rosolina Mare</li>
<li className="regioneLuoghi-Item">Cavallino Treporti</li>
<li className="regioneLuoghi-Item">Porto Santa Margherita</li>
<li className="regioneLuoghi-Item">Albarella</li>

</ul>
<ul className="regioneBoxLuoghi">
    
<span className="regioneLuoghiTitle"> Luoghi di Montagna  </span>

<li className="regioneLuoghi-Item">Cortina d Ampezzo</li>
<li className="regioneLuoghi-Item">Arabba</li>
<li className="regioneLuoghi-Item">Aleghe (Civetta)</li>
<li className="regioneLuoghi-Item">Falcade (San Pellegrino)</li>
<li className="regioneLuoghi-Item">San Vito di Cadore</li>
<li className="regioneLuoghi-Item">Asiago (Altopiano dei Sette Comuni)</li>
<li className="regioneLuoghi-Item">Monte Bondone</li>
<li className="regioneLuoghi-Item">Nevegal</li>
</ul>




</div>
</div>


<Futer/>
   </>
  )
}
