import { useState } from "react";
import Effect from "./Effect";

const Text=(pro)=>{
    const[text,settext]=useState("");
    const change=()=>{
       let newtext;
       newtext=text.toUpperCase();
       settext(newtext);
       pro.show("Converted to UpperCase","success");
        
    }   
    const change1=()=>{
      let newtext;
      newtext=text.toLowerCase();
      settext(newtext);
      pro.show("Converted to LowerCase","success");
       
   }  
    const boom=(event)=>{
        settext(event.target.value);
         
     }  
return(<>

<div className="container" style={{marginTop:'20px'}}>

<h1><Effect/></h1>



<div className="mb-3">
  <textarea value={text} className="form-control" id="exampleFormControlTextarea1" rows="8" onChange={boom}></textarea>
</div>
<button className="btn btn-dark my-2" onClick={change}>Change to Uppercase</button><span>&nbsp;</span>
<button className="btn btn-dark  my-2" onClick={change1}>Change to Lowercase</button>
</div>

<div className="container my-3" >
<h3>Your Text Summery is!</h3>
<h6>Letter you typed are {text.length} & total words are {text.split(" ").length}</h6>
<h6>Time Required to read {text.split(" ").length*0.004 } mins.</h6>
<h1 className="my-2" >Preview</h1>
<p style={{backgroundColor:"yellow"}}>{text}</p>
</div>

</>);
}

export default Text;