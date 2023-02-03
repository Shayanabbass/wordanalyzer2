import { useState } from "react"
import React from 'react'

export default function Textform(props) {
    const Setupclick= ()=>{
        
        let newText=text.toUpperCase()
        setText(newText)
        if  (newText!=="") {
          props.showalert("Converted to Uppercase!","success")
        }
        else{
          props.showalert("please enter text","warning")
        }
       
    }
    const Setlowclick= ()=>{
      
      let neText=text.toLowerCase()
      setText(neText)
      if  (neText!=="") {
        props.showalert("Converted to LowerCase!","success")
      }
      else{
          props.showalert("please enter text","warning")
        }
      
  }
  const Cleartext= ()=>{
    
    setText("")
}
  const Onchange=(event)=>{
        console.log("onchange was clicked");
        setText(event.target.value);
    }
  /*const DarkMode=()=>{
    if (mystyle.color==="##042743") {
      setmystyle({
        backgroundColor:"##042743",
        color:"white",
        border:"2px solid white"
      })
      setbtntext("LightMode")
    }  
    else{
      setmystyle({
        backgroundColor:"white",
        color:"##042743"
      })
      setbtntext("DarkMode")
    }  
  
    }
  

      
    
    
    /*const[mystyle,setmystyle]=useState({
      color:"##042743",
      backgroundColor:"white"
    })
    const[btntext,setbtntext]=useState("DarkMode")*/
    const Removespace=()=>{
     
      let rtext=text.replace(/\s+/g," ")
      setText(rtext)
     }
      

    const[text,setText]=useState("");
    
    let wordslength = text.split(" ").filter(w=>w!=="").length
   let sentencelength= text.split(". ").filter(w=>w!=="").length
    let characterswithspace=text.length
    let characterwithoutspaces=characterswithspace-text.split(" ").length+1
    let wordsprsen=wordslength/sentencelength
    if(text===""){
     
    characterwithoutspaces=characterswithspace
    characterwithoutspaces = sentencelength
      
    }
    if (wordslength===0|| sentencelength===0) {
      wordsprsen=0
    }
  if (wordslength===0) {
    sentencelength=0
    
  }
    
  
    
    
    return (
    <>
    <div className="container" style={{backgroundColor:props.mode==='dark'?'#042743':'white' , color:props.mode==='light'?'#042743':'white'}} >
<div className="mb-3" style={{backgroundColor:props.mode==='dark'?'#042743':'white' , color:props.mode==='light'?'#042743':'white'}}  >
    
    <h1>{props.heading} </h1>
      
    <div  style={{backgroundColor:props.mode==='dark'?'#042743':'white' , color:props.mode==='light'?'#042743':'white'}}  >
    
    
    <textarea className="form-control"style={{backgroundColor:props.mode==='dark'?'grey':'white' , color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8" value={text} onChange={Onchange}   ></textarea>
     </div>
     </div>
    <button className='btn btn-primary' type="button" onClick={Setupclick}>Change To UpperCase</button>
    <button className='btn btn-primary mx-3' type="button" onClick={Setlowclick}>Change To LowCase</button>
    <button className='btn btn-primary mx-0' type="button" onClick={Cleartext}>Clear Text</button> 
    <button className='btn btn-primary mx-3' type="button" onClick={Removespace}>Remove extra space</button>
    
    </div>
  

  
    <div className="container my-3" style={{backgroundColor:props.mode==='dark'?'#042743':'white' , color:props.mode==='dark'?'white':'#042743'}}  >
      <h1>Your Text Summary</h1>
      <p><b> {wordslength}</b> words  </p>
      <p><b> {characterswithspace}</b> characters with spaces</p>
      <p><b>{characterwithoutspaces}</b> characters without spaces</p>
      <p><b>{sentencelength}</b> sentences</p>
      <p><b>{wordsprsen}</b> words per sentence</p>
      <p>Your text is readible in <b>{wordslength*0.08}</b> min</p>
      <h2>Preview</h2>
      
      <p>{text}</p>


    </div>
    </>

  )
}
