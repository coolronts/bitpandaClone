import "./App.css";

import { Route, Routes } from 'react-router-dom';

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

    <div className={styles.app} >
      <NavBar />
      <div className="mx-48">
        <Routes>  
          <Route path='/' element={<Home/>} />
          <Route path="/coin/:coinId" element={<CoinPage />} />
          <Route path="/list" element={<CoinsList/>}/>
        </Routes>
      </div>  
    </div>
  )
}

export default App;