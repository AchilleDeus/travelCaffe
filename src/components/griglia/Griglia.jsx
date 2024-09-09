import React from 'react'
import "./griglia.css"
export default function Griglia({dati}) {
  return (


      <div className="griglia-container">

{dati.schema.map((item, idx)=>{

return <div key={idx}  className="griglia-item">
    
    <img className='grigliaImg' src={item.src} alt={item.alt} />
    
    <div className="grigliaTitolo">   {item.titolo}  </div>
    <div className="grigliaDescrizione"> <b>Ingredienti :</b>  {item.ingredienti}  </div>
    <div className="grigliaDescrizione"> <b>Ristorante :</b>  {item.ristorante}  </div>
    <div className="grigliaDescrizione"> <b>Indirizzo:</b>  {item.indirizzo}  </div>
    <div className="grigliaDescrizione"> <b>Telefono:</b>  {item.telefono}  </div>
  
    
    
    </div>


})}

     
    
    
    </div>
  )
}

