import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import React from 'react'
import './App.css';
import Login from './views/login';
import Profile from './views/profile';
import Navbar from './components/Navbar/Navbar';
import Translation from './views/Translation';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/translation" element={ <Translation />} />
        <Route path="/profile" element={ <Profile />} />
        
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
