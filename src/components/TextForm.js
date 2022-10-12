import React, { useState } from "react";

export default function TextForm(props) {

    const handleUpClick = ()=>{
        console.log("Uppercase was clicked");
        setText(text.toUpperCase());
        
    }

    const handleLoClick = ()=>{
        console.log("Uppercase was clicked");
        setText(text.toLowerCase());
        
    }

    const handleClear = ()=>{
        setText('');
        
    }

    const handleCopy = ()=>{
        const text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleRemoveExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const handleOnChange = (event)=>{
        console.log("on change");
        setText(event.target.value);

    }

    const[text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color: props.mode === 'dark'?'white':'#042743'}}>
    <h1 className="text-center border border-primary p-1">{props.heading}</h1>

      <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="10" value={text} onChange={handleOnChange} style = {{backgroundColor: props.mode === 'dark' ? 'gray' : 'white', color: props.mode === 'dark'?'white':'#042743'}} placeholder="Enter Your message"></textarea>

        </div>
        <button className="btn btn-primary mt-4 mx-1" onClick={handleUpClick}>Convert Uppercase</button>
        <button className="btn btn-primary mt-4 mx-1" onClick={handleLoClick}>Convert Lowercase</button>
        <button className="btn btn-primary mt-4 mx-1" onClick={handleClear}>Clear</button>
        <button className="btn btn-primary mt-4 mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mt-4 mx-1" onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</button>
    </div>

    <div className="container my-3" style={{color: props.mode === 'dark'?'white':'#042743'}}>

        <h1>Your text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>

        <h3>Preview</h3>
        <p>{text}</p>
    </div>

    </>
  );
}
