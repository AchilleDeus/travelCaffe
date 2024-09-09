import React, {  useState } from 'react'
import "./emailform.css"

 import emailJs from '@emailjs/browser'


 import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';


export default function EmailForm() {




const [name, setName]=useState('')
const [posta, setPosta]=useState('')
const [message, setMessage]=useState('')
  


const handleSubmit =(e) =>{

e.preventDefault()


const serviceId ='id_personale100'
const templateId ='template_zxz6c1f'
const publicKey ='DBSaRtArHuwJkFALd'

const templateParams = {

   form_name : name,
   form_email : posta,
   to_name : 'Travel Caffe',
   message : message
}
 
emailJs.send(serviceId, templateId, templateParams, publicKey)
.then((response)=>{
console.log('Email send sucesseFully', response)
toast.success('Messaggio inviato ',{
  theme:"colored"
})

setName('')
setPosta('')
setMessage('')


})
.catch((error)=>{
  toast.error('Errore di spedizione',{
    theme: "colored"
  })

    console.error('Error sending email', error)
})
}


  return (

    <>
<ToastContainer/>

  <form onSubmit={handleSubmit} className='emailForm' >
<label className='labelForm'>Name</label>
<input className='inputForm'
 type="text"
placeholder='Your name' 
value={name}
onChange={(e)=> setName(e.target.value)}
/>

<label className='labelForm'>Email</label>
<input className='inputForm' 
type="email" 
placeholder='Your Email'
value={posta}
onChange={(e)=> setPosta(e.target.value)}
/>
<label className='labelForm'>Messaggio</label>
<textarea 
className='inputTextera'
placeholder='Scrivi il tuo Messaggio'
cols='30'
rows='10'
value={message}
onChange={(e)=>setMessage(e.target.value)}
></textarea>

<button 
disabled={((name.length > 0 )&&(posta.length > 0) &&(message.length >0))?
false : true} 
className='ButtonForm' 
type="submit">
{((name.length >0 )&&(posta.length >0) &&(message.length >0))?'Send Email':'inserire dati '} </button>

  </form>

  </>

  )
}
