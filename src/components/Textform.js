import React from 'react'
import {useState} from 'react'
export default function Textform(props) {
    const handleUpClick=()=>{
        console.log("Uppercase was clicked"+Text);
        const newText=Text.toUpperCase();
        props.showAlert("Converted to UpperCase","success");
        setText(newText);
    }
    const handleLoClick=()=>{
        console.log("LowerCase was clicked"+Text);
        const newText=Text.toLowerCase();
        props.showAlert("Converted to LowerCase","success");
        setText(newText);
    }
    const handleOnChange=(event)=>{
        console.log("handleOnChange fired");
        setText(event.target.value)
    }
    const handleClearClick=()=>{
        setText("");
    }
    const handleCopy=(event)=>{
                    console.log("I am copy");
                    var text=document.getElementById("myBox");
                    text.select();
                    navigator.clipboard.writeText(text.value);
    }
    const removeExtraSpaces=()=>{
        console.log("I am removing the extra spaces");
        var newText=Text.split(/[ ]+/);
        setText(newText.join(' '));
    }
    const [Text,setText]=useState("");
  return (
    <>
    <div className="container" style={{color:props.mode==="dark"?"white":"black"}}>
        <div className="mb-3">
            <h1>{props.heading}</h1>
            <textarea className="form-control" id="myBox"  value={Text} onChange={handleOnChange} rows="8" style={{backgroundColor:props.mode==="dark"?"grey":"white",color:props.mode==="dark"?"white":"black"}}></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={removeExtraSpaces}>Remove Spaces</button>
    </div>
    <div className="container my-3" style={{backgroundColor:props.mode==="dark"?"#0d2c5b":"white",color:props.mode==="dark"?"white":"black"}}>
        <h1>Your text summmary</h1>
        <p>{Text.split(" ").length} words and {Text.length} Characters</p>
        <p>{0.003*Text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{Text===""?"enter the text in the above box to preview it here":Text}</p>
    </div>
    </>
  )
}
