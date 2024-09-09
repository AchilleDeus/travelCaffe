import React from 'react'
import "./sidebar.css"

import {Link} from 'react-router-dom'

import { BiLogoFacebookSquare } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { BiLogoWhatsapp } from "react-icons/bi";
import { BiLogoTiktok } from "react-icons/bi";

export default function Sidebar() {
  return (
    <div className="sidebar">
        
    <div className="sidebarItem">
    <span  className="sidebarTitle">ABOUT ME</span>
      <img src="./img/logoTravelCaffe.png" alt="..." />

      <p className="abaut">

     <b> Travel Caffe </b>offre un servizio di informazioni turistiche in Italia seleziona, ricerca e verifica accuratamente le destinazioni da consigliare. Cura contenuti editoriali, crea guide dettagliate, recensioni e suggerimenti personalizzati su città, luoghi di interesse, eventi e itinerari. Collabora con esperti locali per offrire consigli autentici e aggiornati, e utilizza immagini e video per arricchire l’esperienza visiva. Infine, distribuisce queste informazioni attraverso vari canali, come siti web, riviste, newsletter e social media, per raggiungere un pubblico ampio e interessato.
    </p>

    </div>
    
    <div className="sidebarItem">
<span className="sidebarTitle">CATEGORIES</span>
   
<div className="grid-Categorie">

<div className="categorie-item">Piemonte</div>
<div className="categorie-item">Valle d' Aosta</div>
<div className="categorie-item">Lombardia</div>
<div className="categorie-item">Trentino Alto Adige</div>
<Link style={{textDecoration:'none'}} to='/veneto'><div className="categorie-item">Veneto</div></Link>
<div className="categorie-item">Friuli Venezia Giulia</div>
<div className="categorie-item">Liguria</div>
<div className="categorie-item">Emiglia Romagna</div>
<Link style={{textDecoration:'none'}} to='/toscana'><div className="categorie-item">Toscana</div></Link>
<div className="categorie-item">Umbria</div>
<div className="categorie-item">Marche</div>
<div className="categorie-item">Lazio</div>
<div className="categorie-item">Abruzzo</div>
<div className="categorie-item">Molise</div>
<div className="categorie-item">Campania</div>
<div className="categorie-item">Puglia</div>
<div className="categorie-item">Basilicata</div>
<div className="categorie-item">Calabria</div>
<div className="categorie-item">Sicilia</div>
<div className="categorie-item">Sardegna</div>

</div>
</div>






    <div className="sidebarItem">
   <span className="sidebarTitle">FOLLW ME</span>
   
   
   <div className="sidebarSocial">
    <i className="sidebarIcon"><BiLogoFacebookSquare /> </i>
    <i className="sidebarIcon"><BiLogoTwitter /></i>
    <i className="sidebarIcon"><BiLogoWhatsapp /></i>
    <i className="sidebarIcon"><BiLogoTiktok /></i>
  </div>

    </div>



  </div>
  )
}
