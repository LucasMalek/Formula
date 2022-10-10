import Home from './pages/index'
import React from 'react';

import Signin from './pages/Signin';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import User from './pages/User';
import Register from './pages/Signin/Register';
function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/Signin" element={<Signin/>}/>
      <Route path="/User/:info" element={<User/>}/>
      <Route path="/Register" element={<Register/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
