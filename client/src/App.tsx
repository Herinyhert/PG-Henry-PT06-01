import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Route, Link, Routes } from 'react-router-dom'
import Landing from './pages/Landing/Landing';
import Home from './pages/Home/Home';

function App() {
  return (
<Router>
  <div>

<Routes>
 
  <Route  path="/"  element={<Landing/>} />
  <Route  path="/Home" element={<Home/>} />
  
</Routes>
  </div>

</Router>
  );
}

export default App;
