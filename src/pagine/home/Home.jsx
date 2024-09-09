import React from 'react'
import "./home.css"

import {Link} from 'react-router-dom'

import NavBar from "../../components/navbar/NavBar"
import Sidebar from '../../components/sidebar/Sidebar'
import Futer from '../../components/futer/Futer'
export default function Home() {
  return (
    <>

<NavBar/>



<div className="slaidHome">

<div className="slaidTitles">

<span className="slaidTitleSm">React & Node</span>
<span className="slaidTitleLg" > Blog</span>
</div>



<img src="./img/blogSlaid01.jpg" alt="..." />
</div>


<div className="box">

<div className="box01">

<div className="grid-container">

<div className="grid-item">

<div className="post">
<img src="./img/blogSlaidChioggia.jpg" alt="..." className="postImg" />
<div className="postInfo">

<div className="postCat">
<span>Veneto</span>
<span>Chioggia/Sottomarina</span>
</div>

<Link style={{textDecoration:'none'}} to='/veneto/chioggia'><span className="postTitle">Scopri Chioggia/Sottomarina</span></Link>

<span className="postDate">Articolo del 11/08/2024</span>
</div>

<p className="postDesc">Clicka per saperne di piu sulla localita proposta troverai molte informazioni di vario genere : ristoranti trattorie luoghi di divertimento strutture alberghiere b&b e i migliori periodi dell anno per una vacanza...</p>
</div>
</div>


<div className="grid-item">

<div className="post">
<img src="./img/blogSlaidIsolaDelGiglio.jpg" alt="..." className="postImg" />
<div className="postInfo">

<div className="postCat">
<span>Toscana</span>
<span>Isola del Giglio</span>
</div>

<Link style={{textDecoration:'none'}} to='/toscana/isoladelgiglio'><span className="postTitle">Scopri Isola del Giglio</span></Link>

<span className="postDate">Articolo del 31/08/2024</span>
</div>

<p className="postDesc">Clicka per saperne di piu sulla localita proposta troverai molte informazioni di vario genere : ristoranti trattorie luoghi di divertimento strutture alberghiere b&b e i migliori periodi dell anno per una vacanza...</p>
</div>
</div>
<div className="grid-item">

<div className="post">
<img src="./img/blogSlaidIsolaDelGiglio.jpg" alt="..." className="postImg" />
<div className="postInfo">

<div className="postCat">
<span>Toscana</span>
<span>Isola del Giglio</span>
</div>

<Link style={{textDecoration:'none'}} to='/toscana/isoladelgiglio'><span className="postTitle">Scopri Isola del Giglio</span></Link>

<span className="postDate">Articolo del 31/08/2024</span>
</div>

<p className="postDesc">Clicka per saperne di piu sulla localita proposta troverai molte informazioni di vario genere : ristoranti trattorie luoghi di divertimento strutture alberghiere b&b e i migliori periodi dell anno per una vacanza...</p>
</div>
</div>
<div className="grid-item">

<div className="post">
<img src="./img/blogSlaidIsolaDelGiglio.jpg" alt="..." className="postImg" />
<div className="postInfo">

<div className="postCat">
<span>Toscana</span>
<span>Isola del Giglio</span>
</div>

<Link style={{textDecoration:'none'}} to='/toscana/isoladelgiglio'><span className="postTitle">Scopri Isola del Giglio</span></Link>

<span className="postDate">Articolo del 31/08/2024</span>
</div>

<p className="postDesc">Clicka per saperne di piu sulla localita proposta troverai molte informazioni di vario genere : ristoranti trattorie luoghi di divertimento strutture alberghiere b&b e i migliori periodi dell anno per una vacanza...</p>
</div>
</div>

<div className="grid-item">

<div className="post">
<img src="./img/blogSlaidChioggia.jpg" alt="..." className="postImg" />
<div className="postInfo">

<div className="postCat">
<span>Veneto</span>
<span>Chioggia/Sottomarina</span>
</div>

<Link style={{textDecoration:'none'}} to='/veneto/chioggia'><span className="postTitle">Scopri Chioggia/Sottomarina</span></Link>

<span className="postDate">Articolo del 11/08/2024</span>
</div>

<p className="postDesc">Clicka per saperne di piu sulla localita proposta troverai molte informazioni di vario genere : ristoranti trattorie luoghi di divertimento strutture alberghiere b&b e i migliori periodi dell anno per una vacanza...</p>
</div>
</div>



  <div className="grid-item"></div>
  <div className="grid-item"></div>
  <div className="grid-item"></div>
  <div className="grid-item"></div>
  <div className="grid-item"></div>
  <div className="grid-item"></div>
  <div className="grid-item"></div>
  <div className="grid-item"></div>
 


</div>


</div>


<div className="box02">

<Sidebar/>

</div>

</div>

<Futer/>
    </>
  )
}

