import React, {useState} from 'react'

export default function TextForm(props) {
    //text = "new text" Wrong way to change the state
    //setText("New Text") correct way to change the state

    const handleUpClick = () =>{
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to Uppercase!","success");
    }

    const handleOnChange = (event) =>{
        setText(event.target.value)
    }

    const handleLowClick = () =>{
        let newText2 = text.toLowerCase()
        setText(newText2)
        props.showAlert("Converted to lowercase!","success");

    }
    const handleTextDelete = ()=>{
        let newText = ""
        setText(newText)
        props.showAlert("Text is deleted","success");
    }
    const handleCopy = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied","success");

    }
    const [text, setText] = useState("Enter the Text");

  return (
    <>
      <div className="container my-3">
          <h1 className={`text-${props.mode==='dark'?'light':'dark'}`}>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#dedede':'white'}} id="myBox" rows="5" ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to UPPERCASE</button>
        <button className="btn btn-success mx-3" onClick={handleLowClick}>Convert to lowercase</button>
        <button className="btn btn-warning btn-md my-lg-0 my-sm-3" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-danger mx-3" onClick={handleTextDelete}>Clear Text</button>
        {/* <button className="btn btn-danger md-my-3" onClick={handleMultiply}>Multiply me</button> */}
      </div>
      <div className={`container my-3 text-${props.mode==='dark'?'light':'dark'}`}>
          <h2 className={`text-${props.mode==='dark'?'light':'dark'}`}>Your text summary here</h2>
          <p>{text.split(" ").length} words, {text.length} characters</p>
      </div>
    </>
  )
}



