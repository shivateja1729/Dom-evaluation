import './styles.css';
import React, { useState, useCallback, useRef } from "react";
import App from './App.js';
import GetDOM from './DOM.js';


function Display() {
  const [active,SetActive] = useState("");
  function selectDisplay(e){
    SetActive(e.target.id)
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
    	tablinks[i].className = tablinks[i].className.replace(" active", "");
  	}
    e.target.className += " active";
  }
  
 
return(
  <div className="Displaypane">
  <div className="tab">
  <button className="tablinks" id="output" onClick={(e)=>selectDisplay(e)}>Output</button>
  <button className="tablinks" id="compare" onClick={(e)=>selectDisplay(e)}>Compare</button>
  </div>

  {active==='output' ? <App /> : <GetDOM />}
  </div>
)
}



export default Display;

