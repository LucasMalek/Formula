import Home from './pages/index'
import React from 'react';
import ReactDOM from 'react-dom';
import Signin from './pages/Signin';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import User from './pages/User';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/Signin" element={<Signin/>}/>
      <Route path="/User" element={<User/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
