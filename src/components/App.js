import React, {Component, useState} from "react";
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
        <>
        <h1>{ctime}</h1>
       

        </>
    )
}


export default App;
