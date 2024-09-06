import React, { useState } from "react";

export default function TextForm(props) {
    
    const[text, setText] = useState('');
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
        newText = newText.join(" ")
        setText(newText.trim())
    }

    const handleOnChange = (event)=>{
        console.log("on change");
        setText(event.target.value);
    }

  return (
    <>
    <div className="container">
        <h1><p className="d-none">hide</p></h1>
        <h1 className="text-center border border-primary p-1">{props.heading}</h1>

        <div className="mb-3">
            <textarea className="form-control" id="myBox" rows="10" value={text} onChange={handleOnChange}  placeholder="Enter Your message"></textarea>
        </div>
            <button className="btn btn-primary mt-4 mx-1" onClick={handleUpClick}>Convert Uppercase</button>
            <button className="btn btn-primary mt-4 mx-1" onClick={handleLoClick}>Convert Lowercase</button>
            <button className="btn btn-primary mt-4 mx-1" onClick={handleClear}>Clear</button>
            <button className="btn btn-primary mt-4 mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mt-4 mx-1" onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</button>
    </div>

    <div className="container my-3">

        <h1>Your text Summary</h1>
        <p>{text.length===0?"0":text.split(" ").length} words and {text.length} characters</p>
        <p>{text.length===0?"0":0.008 * text.split(" ").length} Minutes read</p>

        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    

    </>
  );
}
