
import './App.css';
 import Home from './pagine/home/Home';
 import Chisiamo from './pagine/about/Chisiamo'
 import Italia from './pagine/italia/Italia'
import Veneto from "./categorie/Veneto";
import Toscana from "./categorie/Toscana"

//tostify
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// Articoli

import Chioggia from "./pagine/articoli/Chioggia"
import IsolaDelGiglio from './pagine/articoli/IsolaDelGiglio';
import { Route, Routes } from 'react-router-dom'



function App() {
  return (
    <div className='App' >

<Routes>
<Route exact path='/' element={<Home/>} />
<Route exact path='/about' element={<Chisiamo/>} />
<Route  exact path='/italia' element={<Italia/>} />
<Route  exact   path='/veneto' element={<Veneto/>} />
<Route exact path='/toscana' element={<Toscana/>} />

{/* Articoli Veneto */}

<Route exact path='/veneto/chioggia' element={<Chioggia/>} />
<Route exact path='/toscana/isoladelgiglio' element={<IsolaDelGiglio/>} />



</Routes>

{/* <ToastContainer/> */}

    </div>
  )
}

export default App;
