import React, { useState } from 'react'
import "./futer.css"

import emailJs from '@emailjs/browser'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Futer() {

const[isName, setIsName]=useState('')
const[isLeter, setIsLeter]=useState('')


const  handleSubmitNewLeter =(e)=>{

    e.preventDefault()
    const serviceId ='id_personale100'
    const templateId ='id_newleter'
    const publicKey ='DBSaRtArHuwJkFALd'

    const templateParams = {

        form_name : isName,
        form_email : isLeter,
        to_name : 'Travel Caffe',
      
     }
     emailJs.send(serviceId, templateId, templateParams, publicKey)
     .then((response)=>{
        console.log('Email send sucesseFully', response)
        toast.success('Iscrizione andata a buon fine ', {
            theme:"colored"
          } )
        setIsName('')
        setIsLeter('')
   
        })
        .catch((error)=>{
        toast.error('Errore iscrizione non confermata',{
        theme: "colored"
              })  
        console.error('Error sending email', error)
          })

}


  return (
  
<>
  <ToastContainer/>
    <div className='boxFuter'>
        
       <ul className="boxNewLeter">
        
        <li className="newLeter-item">Asociazione RTM</li>
        <li className="newLeter-item">Vacanze in Montagna </li>
        <li className="newLeter-item">Prenota in Tempo reale</li>
        <li className="newLeter-item">Voli lo cost</li>
        <li className="newLeter-item">Hotel a ⭐⭐⭐⭐⭐</li>
       
       
        </ul> 
     
<form onSubmit={handleSubmitNewLeter} className='formNewLeter'>
<label  className="newLeterTitle">New Sleter</label>

<label className='labelNewLeter'>Name</label>
<input 
className='inputNewLeter'
type="text"
placeholder='Inserisci il tuo nome'
value={isName}
onChange={(e)=>setIsName(e.target.value)}
/>

<label className='labelNewLeter'>Email</label>

<input 
className='inputNewLeter' 
type="email" 
placeholder='Inserisci la tua Email'
value={isLeter}
onChange={(e)=>setIsLeter(e.target.value)}

/>


<button disabled={((isName.length >0 )&&(isLeter.length >0) )?
false : true

}  className='ButtonNewLeter'  type="submit">
    
    {((isName.length > 0 )&&(isLeter.length > 0) )?'Send Email':'inserire dati '}
  </button>
</form>
        
    <div className="newLeterImg">
    <img src="./img/logoTravelCaffe.png" alt="foto Logo" className="LeterImg" />
        
        </div>    
        </div>

        </>  
  )
}
