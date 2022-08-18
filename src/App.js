import React, { useState } from "react";
import About from "./About";
import Newbar from "./Newbar";
import Text from "./Text";
import Notification from "./Notification";


// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

const App=()=>{
    const [mode,setmode]=useState("dark");
    const [alert,setalert]=useState(null);
const show=(msg,type)=>{
setalert({
    msg:msg,
    type:type
})
setTimeout(() => {
    setalert(null);
}, 1500);
}


const toggle=()=>{
if(mode==='dark')
{
    setmode("light");
    show("Light Mode Is Enabled","success");
}
else{
    setmode("dark");
    show("Dark Mode Is Enabled","success");
}
}


    return(<>

<Newbar title="Welcome!" mode={mode}  toggle={toggle}/>
   <Notification alert={alert}/>
   <Text show={show}/>
   <About />



  
  


    </>);
}
export default App;