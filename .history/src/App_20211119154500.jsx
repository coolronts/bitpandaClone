import "./App.css";

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import CoinPage from "./pages/CoinPage";
import Home from './pages/Home';
import NavBar from "./components/Navbar";
import React from "react";

function App() {
  const styles = {
    app:"bg-gray-100"
  }

  return (
    <BrowserRouter>

    <div className={styles.app} >
      <Router>
        <NavBar />
        <div className="mx-48">      
          <Route path='/'  />
          <Route path="/coin" element={<CoinPage/>}/>
        </div>  
      </Router>
      </div>
    </BrowserRouter>
  )
}

export default App;