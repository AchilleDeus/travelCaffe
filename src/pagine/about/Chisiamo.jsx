import React from 'react'
import "./chisiamo.css"
import NavBar from '../../components/navbar/NavBar'
import EmailForm from '../../components/mail/EmailForm'
import Futer from '../../components/futer/Futer'
export default function Chisiamo() {
  return (


    <> 
    <NavBar/>
    
    <div className="boxAbautCornice">

    <div className="aboutTestaTitle">Chi Siamo</div>
 <div className="aboutTesta">

<img src="./img/logoTravelCaffe.png" alt="foto logo travel caffe" className="aboutTestaImg" />
<p className="abautTestaParagrafo">Travel Caffè è un blog dedicato a scoprire le località più interessanti d'Italia, offrendo articoli dettagliati per guidare turisti di ogni tipo, dagli amanti della cultura a quelli che cercano relax o avventura. Ogni destinazione è descritta in modo accurato, con suggerimenti su cosa vedere, fare e dove soggiornare, proponendo strutture selezionate per garantire esperienze autentiche e confortevoli. Travel Caffè è una risorsa ideale per chi cerca ispirazione e consigli pratici per pianificare il proprio viaggio in Italia, dal mare alle montagne, passando per città d’arte e borghi nascosti.</p>

 </div>

<div className="boxPrimaintestazione">
<div className="PrimaintestazioneTitolo">Ricerca costante...</div>
<p className="Intestazione01">

Travel Caffè e in costante ricerca dei migliori alloggi turistici in Italia, con un focus particolare sul rapporto qualità-prezzo. Ogni struttura viene attentamente valutata attraverso l'analisi delle recensioni di precedenti ospiti, garantendo così che le esperienze consigliate siano non solo confortevoli, ma anche convenienti. Il blog esamina una vasta gamma di opzioni, dagli hotel boutique ai B&B accoglienti, dalle case vacanza agli agriturismi, offrendo soluzioni per ogni tipo di viaggiatore. Con Travel Caffè, trovare il giusto equilibrio tra qualità dei servizi e costo diventa facile, rendendo ogni soggiorno piacevole e senza sorprese.

</p>

</div>

<div className="boxPrimaintestazione">
<div className="PrimaintestazioneTitolo">Contattaci...</div>


<EmailForm/>

</div>


 </div>

<Futer/>
 
</>
  )
}
