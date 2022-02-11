import React from "react";
//// import css 
import '../../css/mainPage/mainPage.css'
/// logo
import logo from '../../images/logoNetflix.png'
/// import react-icon
import { IoIosArrowForward } from 'react-icons/io';



function Section1 (){
  return(
    <div>
    <div className="backgroundImg">
    <div className="navBar">
     <img className="logo" src={logo} alt="logo"/>
     <div className="divRegisterAndLangauge">
     <div>
     <select className="select">
         <option className="option" value='English'>English</option>
         <option className="option" value='עברית'>עברית</option>
       </select>
     </div>
       <div>
       <button className="signIn">sign in</button>
       </div>
     
     </div>
    </div>
    <div>
      <h1 className="titleSection1">Unlimited movies, TV shows, and more</h1>
      <p className="pSection1">Watch anywhere. Cancel anytime.</p>
      <div className="divGeStart">
        <input className="getStartInput" placeholder="Email address"/>
        <button className="getStartBtn">get started <IoIosArrowForward/></button>
      </div>
    </div>

    </div>
    </div>
  )
}

export default Section1