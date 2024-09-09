import React, { useState } from 'react'
import "./carosello.css"
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";


export default function Carosello({dati}) {

   const[isSlaid, setIsSlaid]=useState(0)

const nextCarello = ()=>{

  setIsSlaid(isSlaid === dati.schema.length-1 ? 0 : isSlaid +1)
}

const backCarello =()=>{

  setIsSlaid(isSlaid === dati.schema.length-1 ?  isSlaid -1 : 0)
}
  return (



    <div className='boxCarosello'>

      <HiArrowCircleLeft onClick={backCarello} className='arrow arrow-left'/>
       {dati.schema.map((item, idx)=>{
         
         return <div key={idx} className={isSlaid === idx ?"carelloImg" : "carelloImg carelloImg-hidden"}>

        <img  className='diapositiva' src={item.src} alt={item.alt} />
        <span className="diapositivaTitolo">{item.titolo}</span>
        <p className="diapositivaTesto">{item.testo}</p>
        </div>

       })}
        
        <HiArrowCircleRight onClick={nextCarello} className='arrow arrow-right'/>
      <span className='indicators'>
        {dati.schema.map((_, idx)=>{
          return <button onClick={()=>setIsSlaid(idx)} className={isSlaid === idx ?'indicator': 'indicator indicator-inactive' } key={idx}  ></button>
        })}
      </span>
        </div>
  )
}
