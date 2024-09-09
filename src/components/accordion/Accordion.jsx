import React, { useEffect, useRef, useState } from 'react'
import "./accordion.css"

import { AiOutlineCaretRight,  AiOutlineCaretDown } from "react-icons/ai";

export default function Accordion({titolo, trafiletto, dati}) {


const[toggle, setToggle]=useState(false)
const [heightEL, setHeightEL]=useState()
const refHeight = useRef()

useEffect(()=>{

setHeightEL(`${refHeight.current.scrollHeight}px`)
},[toggle])

const toggleState = ()=>{
  setToggle(!toggle)
}



  return (
    <div className='accordion'>

<button onClick={toggleState}   className="accordion-visible">

  
    {titolo}
    {toggle ?<AiOutlineCaretDown />:<AiOutlineCaretRight /> }
</button>
<div
 ref={refHeight}
className={toggle ? "accordion-toggle animated" :"accordion-toggle" }
style={{height: toggle ? `${heightEL}`: "0px"}}
>

  <ul 
 
  className='boxuL'>
{dati.schema.map((item , idx)=>{
return <li className='boxLi' key={idx}>
  <div className='boxDiv01'>{item.testa}</div>
  <div className='boxDiv02'>{item.posizione} </div>
  <div className='boxDiv03'>{item.descrizione} </div>
 
</li>


})}


  </ul>
</div>
{toggle ?(<div className='trafiletto divNone'>{trafiletto}</div>):(<div className='trafiletto'>{trafiletto}</div>)}
    </div>
  )
}
