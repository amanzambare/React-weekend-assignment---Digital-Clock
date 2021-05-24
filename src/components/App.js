import React, {Component, useState} from "react";
import { unmountComponentAtNode } from "react-dom";
import '../styles/App.css';

function App(){
    let time =new Date().toLocaleTimeString();
    const[ctime,setCtime] = useState(time);
    function update (){
         time =new Date().toLocaleTimeString();
        setCtime(time);
    };
    setInterval(update,1000);
   

    return(
        <div id="Clock">
        <h3 id="time">{ctime}</h3>
       

        </div>
    )
}


export default App;
