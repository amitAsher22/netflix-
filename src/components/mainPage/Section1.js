import React from "react";
//// import css 
import '../../css/mainPage/mainPage.css'
/// logo
import logo from '../../images/logoNetflix.png'



function Section1 (){
  return(
    <div>
    <div className="backgroundImg">
    <div className="navBar">
     <img className="logo" src={logo} alt="logo"/>
     <div className="divRegisterAndLangauge">
     <div>
     <select className="select">
         <option value='English'>English</option>
         <option value='עברית'>עברית</option>
       </select>
     </div>
       <div>
       <button className="signIn">sign in</button>
       </div>
     
     </div>
    </div>
    <div>
      <h1>Unlimited movies, TV shows, and more</h1>
      <p>Watch anywhere. Cancel anytime.</p>
      <div>
        <input/>
        <button>get started</button>
      </div>
    </div>

    </div>
    </div>
  )
}

export default Section1