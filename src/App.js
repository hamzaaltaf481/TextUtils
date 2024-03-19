import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Text from './components/Text';
import Alert from './components/Alert';
import 
{BrowserRouter as Router, 
  Route,
  Routes,
  } from "react-router-dom"
// import {BrowserRouter as Router, Switch, Route,Routes} from "react-router-dom"
function App() {
  const[mode,setmode] = useState("light")
  const[btntxt,setbtntxt] = useState("Enable Dark Mode")
  const[alert,setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
        msg: message,
        type: type
    })
    setTimeout(() => {
      setAlert(null)
    },1500);
}
  let toglemode = () => {
    if(mode === "dark"){
      setmode("light")
      setbtntxt("Enable Dark Mode")
      document.body.style.backgroundColor = 'white'
      showAlert(" Light mode Enabled", "success")
      // setTimeout(() => {
      //   document.title = "Textutils-Light";
      // }, 3000);
      // setTimeout(() => {
      //   document.title = "Install TextUtils";
      // }, 1500);
      document.title = "Textutils-Light";
    }
    else{
      setmode("dark")
      setbtntxt("Disable Dark Mode")
      document.body.style.backgroundColor = '#6c757d'
      showAlert(" Dark mode Enabled", "success")
      document.title = "Textutils-dark";
    }
  }
  return (
    <>
      <Router>
          <Navbar title="Text Converter" About="About TC" mode ={mode} toglemode={toglemode} btntxt = {btntxt} />
          <Alert alert={alert}/>
            <div className='container my-3'>
              <Routes>
                <Route path="/about" element={<About />}>
                </Route>
                <Route path ="/" element={<Text showAlert={showAlert} heading="Enter Your Text To Analyze Below" mode={mode}/>}>    
                </Route>
              </Routes>
            </div>
      </Router>
    </>
  );
}

export default App;
