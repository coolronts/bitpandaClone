import "./App.css";

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import CoinPage from "./pages/CoinPage";
import CoinsList from "./pages/CoinsList";
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
    
        <NavBar />
        <div className="mx-48">
          <Routes>  
            <Route path='/' element={<Home/>} />
            <Route path="/coin/:coinId" element={<CoinPage />} />
            <Route path="/list" element={<CoinPage/>}/>
          </Routes>
        </div>  
      
      </div>
    </BrowserRouter>
  )
}

export default App;