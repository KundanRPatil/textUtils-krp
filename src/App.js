import { useState } from "react";
import React from 'react'
import About from "./components/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TextUtils from "./components/TextUtils";
import Alert from "./components/Alert";
import { HashRouter, Routes, Route} from "react-router-dom";

function App() {

  //lecture 11: improving dark mode
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#665887';
      showAlert('Dark mode enabled', 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode enabled', 'success');
    }
  }
  return (
    <>
      {/* props */}
      <HashRouter basename="/textUtils-krp">
      <Navbar title="KRP" link="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
        <Routes>
          <Route exact path="/textUtils-krp" element={<TextUtils mode={mode} showAlert={showAlert} />}/>
          <Route path="/about" element={<About />}/>
            
          
          

        </Routes>


      <Footer mode={mode} />
      </HashRouter>
    </>
  );
}

export default App;


