import "./App.css";
import Alert from "./component/Alert";
//import About from "./component/about";
import Navbar from "./component/navbar";
import Text from "./component/text";
import { useState } from "react";
//import { createBrowserRouter,RouterProvider } from "react-router-dom";
//import { Routes,Route } from "react-router-dom";
//1



function App() {
  const[alert ,setalert]=useState(null);

  const showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setalert(null);
    } ,2000);
  }
  const [mode ,setMode]=useState('light');
  const togglemode=()=>{
    if(mode==='dark'){
      setMode('light')
      document.body.style.backgroundColor ="white";
      showalert("Light mode has been enabled" , "success")
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor ="#042743";
      showalert("Dark mode has been enabled" , "success")
    }
  
  }
//2
  // const router=createBrowserRouter([
  //   <Routes>
  //       <Route path="/about" element={<About />} />
  //     </Routes>
  //     ])
  /*{<RouterProvider router={router} />}*/
  return (
  <>

      <Navbar title="aadi" about="about" mode={mode} togglemode={togglemode} />
      <Alert alert={alert}/>
      <div className="container my-3">
         <Text showalert={showalert} heading="Enter the text to convert" mode={mode} />
         {/*<About mode={mode} />*/}
         
     
      </div>
    
      
    </>
  );
}

export default App;
