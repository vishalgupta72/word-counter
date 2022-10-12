// import logo from './logo.svg';
import React, { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Switch from 'react-router-dom';

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  
  const showAlert = (type, message)=> {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() =>{
        setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=> {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("success", "Dark mode has been enabled");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("success", "Light mode has been enabled");
    }
  }


  return (
    <>

    {/* <Router> */}
      <Navbar mode={mode} toggleMode = {toggleMode}/>
      <Alert alert ={alert}/>
      <div className="container my-3">

      {/* <Routes>
            <Route path="/about" element={<About />}>
            </Route>
            <Route path="/" element={<TextForm heading="Word Counter Application"  mode={mode} />}>
            </Route>
      </Routes> */}
      <TextForm heading="Word Counter Application"  mode={mode} />
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;