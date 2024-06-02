import "./App.css";
import Alert from "./components/Alert.js";
import About from "./components/About.js";
import Navbar from "./components/Navbar.js"
import TextForm from "./components/TextForm.js";
import React, {useState} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
}from "react-router-dom";



function App() {

  

  const [mode,setMode] = useState("light");
  const [alert,setAlert] = useState(null);

  const toggleMode = ()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor = '#212529';
      showAlert("Dark Mode Enabled","success");
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled","success");
    }
  }

  const toggleMode2 = ()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor = '#8b0000';
      showAlert("Red Mode Enabled","success");
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled","success");
    }
  }

  const showAlert = (message,type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 2000);
  }
  

  return (
    <>
    <Router>
      <Navbar title="TextAnalyser" mode={mode} toggleMode = {toggleMode} toggleMode2={toggleMode2}/>
      <div className="container my-3">
            <Routes>
              <Route exact path="/about" element={<About mode={mode}/>}/>
            </Routes>
            <Routes>
              <Route exact path="/" element={<TextForm heading="Enter your Text to Analyse" mode={mode} showAlert={showAlert}/>}/>
            </Routes>
      </div>
    </Router>
    <Alert alert={alert} className="alert"/>
    </>
  );
}

export default App;
