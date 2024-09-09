

import React, { useState } from 'react'
import "./navbar.css"

import {Link} from 'react-router-dom'

import { FaBars } from "react-icons/fa6";
import { AiFillCloseCircle } from "react-icons/ai";

export default function NavBar() {

const[isVisibile, setIsVisibile]=useState(true)

const handleClick =()=>{
if(!isVisibile){

  setIsVisibile(true)
}else{
  setIsVisibile(false)
}
}


  return (
    <>
    <div className='navbar'>

<div className="logo">
  {/* <img src="./img/logoTravelCaffe.png" alt="..." /> */}
  
  </div>
<ul className='link'>

<Link style={{textDecoration:'none'}}to='/'><li className='navLink'>Home</li></Link>
<Link style={{textDecoration:'none'}}to='/about'><li className='navLink'>About</li></Link>
<li className='navLink'>xxxxxx</li>
<li className='navLink'>xxxxxx</li>

</ul>
{/* <div className="action_btn margine">Get Starter</div> */}
<Link style={{textDecoration:'none'}}to='/italia'>
<div className="action_btn margine">See Nation</div>
</Link>

<div onClick={handleClick} className="toggle_btn">
{isVisibile?<FaBars />:<AiFillCloseCircle />}
</div>
<div className={isVisibile ? "dropdown_menu":"dropdown_menu open"}>

<Link style={{textDecoration:'none'}}to='/'><li className='navLink'>Home</li></Link>
<Link style={{textDecoration:'none'}}to='/about'><li className='navLink'>About</li></Link>

<li className='navLink'>xxxxxx</li>
<li className='navLink'>xxxxxx</li>


<Link style={{textDecoration:'none'}}to='/italia'>
<li><div className="action_btn margine02">See Nation</div></li>
</Link>
</div>

    </div>
    </>
  )
}
