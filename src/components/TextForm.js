import React, { useState } from 'react';


export default function TextForm(props) {
    const handleUpClick=()=>{
        let newText = text.toUpperCase();
        // console.log("Uppercase is clicked");
        setText(newText)
    }
    const handleDownClick=()=>{
        let newText = text.toLowerCase();
        // console.log("Uppercase is clicked");
        setText(newText)
    }
    const handleClearClick=()=>{
        let newText = ("");
        // console.log("Uppercase is clicked");
        setText(newText)
    }
   
    const handleOnChange=(event)=>{
        // console.log("on Change");
        setText(event.target.value)

    }
    const [text, setText] = useState('');
  return (
    <div>
     <h1>{props.heading}</h1>
<div className="mb-3">
 
  <textarea className="form-control" id="exampleFormControlTextarea1" onChange={handleOnChange} value={text} rows="8"></textarea>
</div>
<button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-3"  onClick={handleDownClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-3"  onClick={handleClearClick}>Clear Text</button>
<div className='container my-3'>
    <h2>Your Text Summary</h2>
    <p>{text.split(" ").length} words and {text.length} characters</p>
        
        </div>
        <p>{0.08*text.split(" ").length} minutes read</p>
    
    </div>
  )
}
