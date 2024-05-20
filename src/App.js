
import './App.css';
import React from 'react'
import Navbar from './components/Navbar'
import Textform from './components/Textform'
import About from './components/About'
import Alert from './components/Alert'
import  { useState } from 'react';
function App() {
  const [mode,setMode]=useState("light");
  const [modeText,setModeText]=useState("Enable Dark mode");
  const [textColor,setTextColor]=useState("dark");
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({msg:message,
    type:type});
    setTimeout(()=>{ setAlert(null)},3000);
  }
  const toggleMode=()=>{
    if(mode==="dark"){
      setMode("light");
      setModeText("Enable Dark mode");
      setTextColor("dark")
      document.body.style.backgroundColor="white";
      showAlert("light mode is enabled successfully","success");
      document.title="TextUtils -light Mode";
    }
    else {
      setMode("dark");
      setModeText("Enable light mode");
      setTextColor("light");
      document.body.style.backgroundColor="#0d2c5b";
      showAlert("dark mode is enabled successfully","success");
      document.title="TextUtils - Dark Mode";
    }
  }
  return (
    
    <>
<Navbar title="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode} modeTextChange={modeText} modeColor={textColor}/>
<Alert alert={alert}/>

<Textform showAlert={showAlert} heading="enter the text to analyze" mode={mode}/>
<About/> 

</>
  );
}

export default App;
