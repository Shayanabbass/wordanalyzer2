import { useState } from 'react';
import './App.css';
import Alert from './COMPONENTS/Alert';
//import About from './COMPONENTS/About';
import Navbar from './COMPONENTS/Navbar';
import Textform from './COMPONENTS/Textform';
/*import {
  BrowserRouter ,
  Routes,
  Route
} from "react-router-dom";*/

function App (){
  
  const[alert,Setalert]=useState(null)
  const showalert=(message,type)=>{
    Setalert({
      message:message,
      type:type
    
      

    })
  
    setTimeout(() => {
      Setalert()
    }, 1500);
   

  }
 
const [mode,setmode]=useState("light")
  const togglemode=()=>{
    if (mode==="light") {
      setmode("dark")
      showalert("Dark mode has been enabled!!","success")
      document.body.style.backgroundColor="#042743"
      //document.title="Dark Mode"
      /*setInterval(() => {
        document.title="Install Wordanalyzer"
      }, 2000);
     setInterval(() => {
      document.title="welcome!!"
     }, 1500);*/
      
      
      //document.body.style.color="black"
}
    else{
      setmode("light")
      showalert("Light mode has been enabled!!","success")
    
      document.body.style.backgroundColor="white"
      
      
      //document.body.style.color="white"
    }
    
    
  }
  /*<BrowserRouter>
  <Routes>
  <Route path='/' element={<Textform heading="Enter your Text here" mode={mode} showalert={showalert}/>} />
  <Route path='/about' element={<About/>}/>

</Routes>
  </BrowserRouter>*/

  return(
    <>
   
    <Navbar name="WordAnalyzer" title="AboutUs" mode={mode} toggleMode={togglemode}   />
    <Alert alert={alert}/>
    <div className='container my-3'>
    <Textform heading="Enter your Text here" mode={mode} showalert={showalert}/>
    </div>
    
    </>

  )
}
export default App;
