import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'


import Navbar from "./components/navbar";

function App() {
  return (
<BrowserRouter>
    <Navbar />
       <Routes>
         <Route path='/'  />
         <Route path='/products' />
         <Route path='/reports'  />
       </Routes>
     </BrowserRouter>
   
  );
}

export default App;
